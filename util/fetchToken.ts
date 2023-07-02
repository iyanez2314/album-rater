export async function fetchToken() {
  const spotifyClientId = process.env.SPOTIFY_CLIENT_ID || "";
  const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECERET || "";
  const url = "https://accounts.spotify.com/api/token";
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", spotifyClientId);
  data.append("client_secret", spotifyClientSecret);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    console.log("response", response);
    const json = await response.json();
    console.log("json", json);
    return json.access_token;
  } catch (error: any) {
    throw new Error("Failed to get acess token");
  }
}
