export default class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer a8e024b6f34814740a96dc82"
      }
    }).then((response) => response.json());
  }
}
