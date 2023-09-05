import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../util/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { albumId } = req.body;
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

    console.log(album);

    if (!album) {
      return res
        .status(404)
        .json({ message: "Album data not avaliable in data base" });
    }
    return res.status(200).json({ album });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
