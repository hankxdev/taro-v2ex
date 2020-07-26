import {format} from 'timeago.js/lib'

export const common = {
  methods: {
    parseDate(d: number): string {
      d = this.toJSTimeStamp(d)
      let date
      try {
        date = new Date(d)
      } catch (e) {
        date = new Date()
      }
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    },
    timeAgo(d: number): string {
      d = this.toJSTimeStamp(d)
      return format(d, "zh_CN")
    },
    toJSTimeStamp(d: number): number {
      const len = String(d).length
      if (len < 13) {
        d = d * (10 ** (13 - len))
      }
      if (len > 13) {
        d = d / (10 ** (13 - len))
      }
      return d
    }
  }
}
