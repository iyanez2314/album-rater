let accessToken = "";
import { log } from "console";
import { fetchToken } from "./fetchToken";

export async function makeApiRequest() {
  // const url = "https://accounts.spotify.com/api/token";
  // try {
  //   if (!accessToken) {
  //     accessToken = await fetchToken();
  //   }
  //   console.log("accessToken", accessToken);
  //   const response = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   console.log("response", response);
  //   const json = await response.json();
  //   console.log("json", json);
  //   return json.access_token;
  // } catch (error: any) {
  //   throw new Error("Failed to make API request");
  // }
}
