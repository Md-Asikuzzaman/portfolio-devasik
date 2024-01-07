import { prisma } from '@/lib/db';
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
