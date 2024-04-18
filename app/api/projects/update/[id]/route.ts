import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ApiResponse {
  updatedProject?: ProjectType;
}

export async function PUT(
  req: Request,
  context: { params: { id: string } }
): Promise<NextResponse<ApiResponse>> {
  const { id } = context.params;
  const { title, description, image, website, github, variant } =
    await req.json();

  const updatedProject = await prisma.project.update({
    where: { id },
    data: { title, description, image, website, github, variant },
  });

  return NextResponse.json({ updatedProject }, { status: 200 });
}
