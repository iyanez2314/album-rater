import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "PUT") {
    return res.status(200).json({ message: "Only PUT requests allowed" });
  }

  const { id, body, title } = req.body;

  const post = await prisma.review.findUnique({
    where: {
      id,
    },
  });

  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  const updatedPost = await prisma.review.update({
    where: {
      id,
    },
    data: {
      body,
      title,
    },
  });

  prisma.$disconnect();

  res.status(200).json({ message: "Post updated successfully", updatedPost });
}
