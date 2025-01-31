
import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma"; // Ensure prisma is correctly imported

export async function POST(request: Request) {
  const { name, email, password } = await request.json();
  
  // Hash password and create user
  // ...

  return NextResponse.json({ message: "User registered successfully" });
}