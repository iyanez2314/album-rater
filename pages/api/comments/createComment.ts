import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { albumTitle, albumId, userId, title, rating, comment, albumCover } =
    req.body;
  const UserId = parseInt(userId);
  const Rating = parseInt(rating);

  try {
    // Check if the album already exists
    let album = await prisma.album.findUnique({
      where: { albumId: albumId },
    });

    // If the album doesn't exist, create it
    if (!album) {
      album = await prisma.album.create({
        data: {
          albumId: albumId,
          title: albumTitle,
          albumCover: albumCover,
        },
      });
    }

    // Create the review
    const newReview = await prisma.review.create({
      data: {
        title: title,
        rating: Rating,
        body: comment,
        albumId: albumId,
        userId: UserId,
      },
    });

    return res.status(200).json({ message: "Comment created" });
  } catch (error) {
    // Handle any errors that occurred while interacting with the database
    return res.status(500).json({ message: "An error occurred" });
  }
}
