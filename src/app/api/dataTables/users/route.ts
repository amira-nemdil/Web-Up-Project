import { db } from '@/lib/db'; // Import your db configuration

export async function GET() {
  const users = await db.user.findMany(); // Get all users
  return new Response(JSON.stringify(users), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request: Request) {
  const { name, email, avatarUrl, role , createdAt , updatedAt , agencyId } = await request.json();

  const newUser = await db.user.create({
    data: {
      name,
      email,
      avatarUrl,
      role,
      createdAt,
      updatedAt ,
      agencyId,
    },
  });

  return new Response(JSON.stringify(newUser), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
