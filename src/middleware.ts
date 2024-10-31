import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';



// Custom middleware function that includes Clerk’s middleware and adds routing logic
const customMiddleware = async (req: NextRequest, event: NextFetchEvent) => {
  // Run Clerk’s middleware for authentication, passing both `req` and `event`
  const authResponse = await clerkMiddleware()(req, event);
  
  if (authResponse && req.nextUrl.pathname !== '/' ) {
    
    return authResponse; // If Clerk middleware has a response, return it
  }
  
  // Your custom routing logic
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString();
  const hostname = req.headers;
  
  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`;
  
  // Check if subdomain exists
    const host = hostname.get('host') || ''; // Ensure it's a string
    const [subdomain, port] = host.split(':'); // Split the host on ':'
    const customSubDomain = subdomain.split('.').filter(Boolean)[0]; // Get the first part before any '.' if it exists

if (customSubDomain && customSubDomain !== process.env.NEXT_PUBLIC_DOMAIN) {
  console.log("Custom Subdomain:", customSubDomain); // Log for debugging
  return NextResponse.rewrite(
    new URL(`/${customSubDomain}${pathWithSearchParams}`, req.url)
  );
} else {
  console.log("No custom subdomain found or it's the main domain.");
}

  if (url.pathname === '/sign-in' || url.pathname === '/sign-up') {
    return NextResponse.redirect(new URL(`/agency/sign-in`, req.url));
  }

 


  if (
    url.pathname === '/' ||
    (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
  ) {
    return NextResponse.rewrite(new URL('/site', req.url));
  }

  if (
    url.pathname.startsWith('/agency') ||
    url.pathname.startsWith('/subaccount')
  ) {
    return NextResponse.rewrite(new URL(`${pathWithSearchParams}`, req.url));
  }

  return NextResponse.next(); // Continue if no conditions match
};

export default customMiddleware;

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


