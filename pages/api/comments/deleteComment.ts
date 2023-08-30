import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(200).json({ message: "Only DELETE requests allowed" });
  }

  const { reviewId } = req.body;

  console.log(reviewId);

  const review = await prisma.review.findUnique({
    where: {
      id: reviewId,
    },
  });

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  const deletedReview = await prisma.review.delete({
    where: {
      id: reviewId,
    },
  });

  res
    .status(200)
    .json({ message: "Review deleted successfully", deletedReview });
}