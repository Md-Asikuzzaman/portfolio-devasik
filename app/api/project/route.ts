import { prisma } from '@/lib/db';
import { NextResponse, NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = url.searchParams.get('page');

  const PER_PAGE = 3;
  const currentPage = Math.max(Number(page) || 1, 1);

  try {
    const project = await prisma.project.findMany({
      take: PER_PAGE,
      skip: (currentPage - 1) * PER_PAGE,
    });

    // Check if there are more pages
    const hasMorePages = project.length === Number(PER_PAGE);

    return NextResponse.json({ project, hasMorePages }, { status: 200 });
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
