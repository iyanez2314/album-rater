let tokenCache: string | null = null;
let tokenExpirationDate: number | null = null;

export async function fetchToken() {
  if (
    tokenCache !== null &&
    tokenExpirationDate !== null &&
    Date.now() < tokenExpirationDate
  ) {
    return tokenCache;
  }

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
    const json = await response.json();
    tokenCache = json.access_token;
    tokenExpirationDate = Date.now() + json.expires_in * 1000; // Spotify's tokens usually expire in 1 hour (3600 seconds)
    return json.access_token;
  } catch (error: any) {
    throw new Error("Failed to get access token");
  }
}
