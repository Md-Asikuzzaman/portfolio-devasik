import { prisma } from '@/lib/db';
import { NextResponse, NextRequest } from 'next/server';

export async function GET() {
  const project = await prisma.project.findMany();

  return NextResponse.json(project, { status: 200 });
}

export async function POST(req: Request) {
  const { title, description, image, website, github, variant } =
    await req.json();

  const newData = await prisma.project.create({
    data: { title, description, image, website, github, variant },
  });

  return NextResponse.json(newData, { status: 201 });
}
