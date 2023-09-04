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

  const { email, password } = req.body;

  const errors: string[] = [];

  const validationSchema = [
    {
      valid: validator.isEmail(email),
      message: "Email is not valid",
    },
    {
      valid: validator.isLength(password, { min: 6 }),
      message: "Password must be at least 6 characters",
    },
  ];

  validationSchema.forEach((validation) => {
    if (!validation.valid) {
      errors.push(validation.message);
    }
  });

  if (errors.length) {
    return res.status(400).json({ errorMessage: errors[0] });
  }

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log(user);

  if (!user) {
    return res.status(400);
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  const alg = "HS256";
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);

  const token = await new jose.SignJWT({ email: user.email })
    .setProtectedHeader({ alg })
    .setExpirationTime("24h")
    .sign(secret);

  setCookie("jwt", token, { req, res, maxAge: 60 * 60 * 24 });

  return res.status(200).json({
    name: user.name,
    email: user.email,
    id: user.id,
    username: user.username,
  });
}
