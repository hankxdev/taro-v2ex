const API = {
  baseURL: "https://www.v2ex.com/api/",
  getLatest(): string {
    return `${this.baseURL}topics/latest.json`;
  }
};

export default API;
