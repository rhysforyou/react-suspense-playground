export const API_BASE = "http://localhost:3000";

export function fetchGames() {
  return fetch(API_BASE + "/games").then(res => res.json());
}
