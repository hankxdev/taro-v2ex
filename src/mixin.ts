export const common = {
  methods: {
    parseDate(d: number): string {
      if (String(d).length < 13) {
        d = d * (10 ** (13 - String(d).length))
      }
      let date
      try {
        date = new Date(d)
      } catch (e) {
        date = new Date()
      }
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }
  }
}
