const API = {
  baseURL: 'https://www.v2ex.com/api/',
  getLatest(): string {
    return `${this.baseURL}topics/latest.json`
  },
  getDiscuss(id: Number): string {
    return `${this.baseURL}replies/show.json?topic_id=${id}`
  },
  getHotThreads(): string {
    return `${this.baseURL}topics/hot.json`
  },
  getNodeList(): string {
    return `${this.baseURL}nodes/all.json`
  },
  getNodeDetail(id: Number): string {
    return `${this.baseURL}nodes/show.json?id=${id}`
  },
  getUserProfile(id: Number): string {
    return `${this.baseURL}members/show.json?id=${id}`
  },
  getNodeThreadList(id: Number): string {
    return `${this.baseURL}topics/show.json?node_id=${id}`
  },
  getUserThreadList(name: string): string {
    return `${this.baseURL}topics/show.json?username=${name}`
  }
}

export default API
