import { NextRequest } from "next/server";

type Student = {
  id: number;
  name: string;
  marks: number;
  isPresent: boolean;
};

const students: Student[] = [
  { id: 1, name: "kavin", marks: 89, isPresent: true },
  { id: 2, name: "Prakash", marks: 79, isPresent: true },
  { id: 3, name: "Logan", marks: 99, isPresent: false },
  { id: 4, name: "Vel", marks: 88, isPresent: true },
];


export async function GET() {
  return Response.json({
    message: "success",
    data: students,
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, marks, isPresent } = body;

    if (!name || marks === undefined) {
      return Response.json(
        { error: "Name and marks are required" },
        { status: 400 }
      );
    }

    const newId =
      students.length > 0 ? students[students.length - 1].id + 1 : 1;

    const newStudent: Student = {
      id: newId,
      name,
      marks,
      isPresent: isPresent ?? false,
    };

    students.push(newStudent);

    return Response.json(
      { message: "Student created successfully", data: newStudent },
      { status: 201 }
    );
  } catch (error) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, marks, isPresent } = body;

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    if (!name || marks === undefined || isPresent === undefined) {
      return Response.json(
        { error: "All fields (id, name, marks, isPresent) are required for PUT" },
        { status: 400 }
      );
    }

    students[index] = { id, name, marks, isPresent };

    return Response.json({
      message: "Student replaced successfully",
      data: students[index],
    });
  } catch (error) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, marks, isPresent } = body;

    const index = students.findIndex((s) => s.id === id);

    if (index === -1) {
      return Response.json({ error: "Student not found" }, { status: 404 });
    }

    if (name !== undefined) students[index].name = name;
    if (marks !== undefined) students[index].marks = marks;
    if (isPresent !== undefined) students[index].isPresent = isPresent;

    return Response.json({
      message: "Student patched successfully",
      data: students[index],
    });
  } catch (error) {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }
}


export async function DELETE(req: NextRequest) {
  
  const { searchParams } = new URL(req.url);
  const idParam = searchParams.get("id");

  if (!idParam) {
    return Response.json({ error: "Student ID is required" }, { status: 400 });
  }

  const id = parseInt(idParam);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return Response.json({ error: "Student not found" }, { status: 404 });
  }

  const deletedStudent = students.splice(index, 1)[0];

  return Response.json({
    message: "Student deleted successfully",
    data: deletedStudent,
  });
}