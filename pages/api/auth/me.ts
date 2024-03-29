import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { prisma } from "../../../util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("here");
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ errorMessage: "Not Authorized" });
  }

  const token = bearer.split("Bearer ")[1].trim();

  const payload = jwt.decode(token) as { email: string };

  if (!payload.email) {
    return res.status(401).json({ errorMessage: "Not Authorized" });
  }
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
    },
  });

  if (!user) {
    return res.status(401).json({ errorMessage: "Not Authorized" });
  }

  prisma.$disconnect();

  return res.status(200).json({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
  });
}
