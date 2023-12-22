import { prisma } from '@/lib/db';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  try {
    const project = await prisma.project.findMany();

    return NextResponse.json(project, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  const { title, description, image, website, github, variant } =
    await req.json();

  const newData = await prisma.project.create({
    data: { title, description, image, website, github, variant },
  });

  return NextResponse.json(newData, { status: 201 });
}
