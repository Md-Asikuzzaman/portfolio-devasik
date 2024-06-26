import prisma from "@/lib/db";
import { NextResponse } from "next/server";

import { headers } from "next/headers";
import { getToken } from "@/lib";

interface ApiResponse {
  projects?: ProjectType[];
  newProject?: ProjectType;
  message?: string;
}

// [FETCH] all project
export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const token = headers().get("authorization");

    if (!token || getToken() !== token?.split(" ")?.[1]) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const projects = await prisma.project.findMany({
      orderBy: {
        updatedAt: "desc",
      },
    });
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch projects." },
      { status: 500 },
    );
  }
}

// [CREATE] a new project
export async function POST(req: Request): Promise<NextResponse<ApiResponse>> {
  try {
    const body = await req.json();

    const newProject = await prisma.project.create({
      data: body,
    });

    return NextResponse.json({ newProject }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to create project." },
      { status: 500 },
    );
  }
}
