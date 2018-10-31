export const API_BASE = "http://localhost:3000";

export function fetchGames() {
  return fetch(API_BASE + "/games").then(res => res.json());
}

export function fetchGameDetails(id) {
  return fetch(API_BASE + "/games/" + id).then(res => res.json());
}

export function fetchComment(id) {
  return fetch(API_BASE + "/comments/" + id).then(res => res.json());
}
