import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(200).json({ message: "Only GET requests allowed" });
  }

  const { email } = req.body;

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      reviews: {
        include: {
          album: {
            select: {
              title: true,
              albumCover: true,
            },
          },
        },
      },
    },
  });

  console.log(user);

  if (!user) {
    return res.status(200).json({ message: "User not found" });
  }

  return res.status(200).json({ userComments: user.reviews });
}
