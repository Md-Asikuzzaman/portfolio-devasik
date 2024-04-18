import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ApiResponse {
  message?: string;
  projects?: ProjectType[];
  newProject?: ProjectType;
}

export async function GET(): Promise<NextResponse<ApiResponse>> {
  try {
    const projects = await prisma.project.findMany();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request): Promise<NextResponse<ApiResponse>> {
  const { title, description, image, website, github, variant } =
    await req.json();

  const newProject = await prisma.project.create({
    data: { title, description, image, website, github, variant },
  });

  return NextResponse.json({ newProject }, { status: 201 });
}
