import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../util/prisma";

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
              albumId: true,
            },
          },
        },
      },
    },
  });
  if (!user) {
    return res.status(200).json({ message: "User not found" });
  }
  prisma.$disconnect();
  return res.status(200).json({ userComments: user.reviews });
}
