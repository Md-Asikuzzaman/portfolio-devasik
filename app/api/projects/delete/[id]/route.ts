import { prisma } from '@/lib/db';
import { NextResponse, NextRequest } from 'next/server';

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
