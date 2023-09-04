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
  const { albumId } = req.body;
  console.log(albumId);
  try {
    const album = await prisma.album.findUnique({
      where: { albumId: albumId as string },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
      },
    });
    if (!album) {
      return res.status(404).json({ message: "Album not found" });
    }
    console.log(album);
    return res.status(200).json({ album });
  } catch (error) {
    console.error("backend error: ", error);
    return res.status(500).json({ message: error });
  }
}
