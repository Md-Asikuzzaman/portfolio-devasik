import { prisma } from '@/lib/db';
import { NextResponse } from 'next/server';

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
