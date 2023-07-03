import { NextApiRequest, NextApiResponse } from "next";
import { fetchToken } from "../../util/fetchToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      let accessToken = await fetchToken();
      if (!accessToken) {
        res.status(500).json({ message: "Couldn't fetch access token" });
      }
      const albumId = req.body.albumId;
      const url = `https://api.spotify.com/v1/albums/${albumId}`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const json = await response.json();
      res.status(200).json(json);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(200).json({ message: "Only GET requests allowed" });
  }
}
