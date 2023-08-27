import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PUT(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const { title, description, image, website, github, variant } =
    await req.json();

  const updated = await prisma.project.update({
    where: { id },
    data: { title, description, image, website, github, variant },
  });

  return NextResponse.json(updated, { status: 200 });
}
