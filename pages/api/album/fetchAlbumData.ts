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

  console.log("req.body", req.body);

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

    return res.status(200).json({ album });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ message: "An error occurred" });
  }
}
