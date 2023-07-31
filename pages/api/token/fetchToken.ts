import { NextApiRequest, NextApiResponse } from "next";
import { fetchToken } from "../../../util/fetchToken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(200).json({ message: "Only POST requests allowed" });
  }
  try {
    const accessToken = await fetchToken();
    if (!accessToken) {
      return res.status(500).json({ message: "Couldn't fetch access token" });
    }
    return res.status(200).json({ accessToken });
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
}
