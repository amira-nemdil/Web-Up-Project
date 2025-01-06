import { db } from '@/lib/db'; // Import your db configuration

export async function GET() {
  const agencies = await db.agency.findMany(); 
  return new Response(JSON.stringify(agencies), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const {   } = await request.json();

  const newAgency = await db.agency.create({
    data: {
      
      
    },
  });

  return new Response(JSON.stringify(newAgency), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}