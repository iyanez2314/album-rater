import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { prisma } from "../../../util/prisma";
import * as jose from "jose";
import { setCookie } from "cookies-next";
import bcrypt from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, username, name, password } = req.body;

    const erros: string[] = [];

    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: "Email is not valid",
      },
      {
        valid: validator.isLength(username, { min: 3, max: 20 }),
        errorMessage: "Username must be between 3 and 20 characters",
      },
      {
        valid: validator.isLength(name, { min: 3, max: 20 }),
        errorMessage: "Name must be between 3 and 20 characters",
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: "Password is not strong enough",
      },
    ];

    validationSchema.forEach((validation) => {
      if (!validation.valid) {
        erros.push(validation.errorMessage);
      }
    });

    if (erros.length) {
      return res.status(400).json({ errorMessage: erros[0] });
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({ errorMessage: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        name,
        password: hashedPassword,
      },
    });

    const alg = "HS256";

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    const token = await new jose.SignJWT({
      email: newUser.email,
    })
      .setExpirationTime("1h")
      .setProtectedHeader({ alg })
      .sign(secret);

    setCookie("jwt", token, { req, res, httpOnly: true, maxAge: 60 * 60 * 24 });

    prisma.$disconnect();

    return res.status(200).json({ user: newUser });
  }
}
