export const API_BASE = "http://localhost:3000";

function checkStatusCode(res) {
  if (res.status < 200 || res.status >= 300) {
    throw `Recieved a ${res.status} status code from the server`;
  }
  return res;
}

export function fetchGames() {
  return fetch(API_BASE + "/games")
    .then(checkStatusCode)
    .then(res => res.json());
}

export function fetchGameDetails(id) {
  return fetch(API_BASE + "/games/" + id)
    .then(checkStatusCode)
    .then(res => res.json());
}

export function fetchComment(id) {
  return fetch(API_BASE + "/comments/" + id)
    .then(checkStatusCode)
    .then(res => res.json());
}
