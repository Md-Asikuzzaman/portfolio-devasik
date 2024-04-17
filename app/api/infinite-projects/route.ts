import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const _page = url.searchParams.get("_page");
  const _limit = url.searchParams.get("_limit");

  const PER_PAGE = 3;
  const currentPage = Math.max(Number(_page) || 1, 1);

  try {
    const projects = await prisma.project.findMany({
      take: PER_PAGE,
      skip: (currentPage - 1) * PER_PAGE,
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}
