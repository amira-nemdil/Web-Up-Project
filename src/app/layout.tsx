import type { Metadata } from "next";
import {DM_Sans} from 'next/font/google'
import "./globals.css";
import {dark} from '@clerk/themes'
import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({ subsets : ['latin']})

export const metadata: Metadata = {
  title: "Web up",
  description: "All in one",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    

       <html lang="en" suppressHydrationWarning>
        
       <body className={font.className}>
       
        <ThemeProvider 
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
        
        {children}
      
        </ThemeProvider>
        </body>
    </html>
    
  );
}
