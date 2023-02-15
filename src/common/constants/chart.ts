import { format, subDays } from 'date-fns'

export const chartOptions = (title: string, hideLegend = false) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      display: !hideLegend
    },
    title: {
      display: true,
      text: title
    }
  }
})

export const chartMonthLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July'
]

export const chartLastSevenDayLabels: string[] = Array(7)
  .fill(new Date())
  .map((date: Date, index: number) => {
    const minusDateNum = index + 1
    const dateMinus = subDays(date, minusDateNum)

    return format(dateMinus, 'dd/LL/yyyy')
  })
