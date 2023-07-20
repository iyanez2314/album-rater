import { NextApiRequest, NextApiResponse } from "next";
import { Validator } from "react";
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";
import { setCookie } from "cookies-next";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, username, name, password } = req.body;

    console.log(email, username, name, password);
  }
}
