export const baseUrl = "https://shift-backend.onrender.com"

export const request = {
  fetch: function (path, params) {
    return fetch(baseUrl + path)
  },
}
