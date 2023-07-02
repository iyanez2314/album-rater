import { NextApiRequest, NextApiResponse } from "next";
import { fetchToken } from "../../util/fetchToken";
import { makeApiRequest } from "../../util/makeApiRequest";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      let accessToken = await fetchToken();
      if (!accessToken) {
        res.status(500).json({ message: "Couldn't fetch access token" });
      }
      const url = "https://api.spotify.com/v1/browse/new-releases";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("response", response);
      const json = await response.json();
      res.status(200).json(json);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(200).json({ message: "Only GET requests allowed" });
  }
}
