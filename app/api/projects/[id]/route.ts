import prisma from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const project = await prisma.project.findUnique({
    where: { id: id },
  });

  return NextResponse.json(project, { status: 200 });
}

export async function DELETE(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  const res = await prisma.project.delete({
    where: { id: id },
  });

  return NextResponse.json(res, { status: 200 });
}
