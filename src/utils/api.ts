const API = {
    baseURL: 'https://www.v2ex.com/api/',
    getLatest(): string {
        return `${this.baseURL}topics/latest.json`
    },
    getDiscuss(id: Number): string {
        return `${this.baseURL}replies/show.json?topic_id=${id}`
    },
}

export default API
