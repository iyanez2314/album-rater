import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
import { setCookie } from "cookies-next";

const prisma = new PrismaClient();
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { originalEmail, email, username, name } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email: originalEmail,
    },
  });

  if (!user) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const updatedUser = await prisma.user.update({
    where: {
      email: user.email,
    },
    data: {
      username,
      name,
      email,
    },
  });

  if (!updatedUser) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({
    email: updatedUser.email,
  })
    .setProtectedHeader({ alg })
    .setExpirationTime("1h")
    .sign(secret);

  setCookie("jwt", token, { req, res, httpOnly: true, maxAge: 60 * 60 * 24 });

  return res.status(200).json({
    username: updatedUser.username,
    name: updatedUser.name,
    email: updatedUser.email,
  });
}
