import prisma from "@/lib/db";
import { NextResponse } from "next/server";

interface ApiResponse {
  project?: ProjectType | null;
  deletedProject?: ProjectType;
  updatedProject?: ProjectType;
  message?: string;
}

interface ParamsType {
  params: {
    id: string;
  };
}

// [GET] project by ID
export async function GET(
  request: Request,
  context: ParamsType,
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;

    const project = await prisma.project.findUnique({
      where: { id },
    });

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch project." },
      { status: 500 },
    );
  }
}

// [DELETE] project by ID
export async function DELETE(
  request: Request,
  context: ParamsType,
): Promise<NextResponse<ApiResponse>> {
  try {
    const { id } = context.params;

    const deletedProject = await prisma.project.delete({
      where: { id: id },
    });

    return NextResponse.json({ deletedProject }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete project." },
      { status: 500 },
    );
  }
}

// [UPDATE] project by ID
export async function PATCH(
  req: Request,
  context: ParamsType,
): Promise<NextResponse<ApiResponse>> {
  const { id } = context.params;
  const body = await req.json();

  const updatedProject = await prisma.project.update({
    where: { id },
    data: body,
  });

  return NextResponse.json({ updatedProject }, { status: 200 });
}
