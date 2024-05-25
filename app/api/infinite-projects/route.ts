import { getToken } from "@/lib";
import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

interface ApiResponse {
  message?: string;
  projects?: ProjectType[];
}

export async function GET(
  req: NextRequest,
): Promise<NextResponse<ApiResponse>> {
  const url = new URL(req.url);

  const initialPage: any = url.searchParams.get("_initialPage");
  const limitPerPage: any = url.searchParams.get("_limitPerPage");

  const currentPage = Math.max(Number(parseInt(initialPage)) || 1, 1);

  try {
    const token = headers().get("authorization");

    if (!token || getToken() !== token?.split(" ")?.[1]) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const projects = await prisma.project.findMany({
      take: parseInt(limitPerPage),
      skip: (currentPage - 1) * parseInt(limitPerPage),
      orderBy: {
        updatedAt: "desc",
      },
    });

    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 },
    );
  }
}
