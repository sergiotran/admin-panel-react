import React from 'react'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { chartLastSevenDayLabels, chartOptions } from '../constants/chart'
import { faker } from '@faker-js/faker'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
)

const SubscriptionChart = () => {
  return (
    <div className='flex-1 p-3 border border-red-500 rounded h-full overflow-hidden'>
      <Line
        options={chartOptions('Subscriptions')}
        data={{
          labels: chartLastSevenDayLabels,
          datasets: [
            {
              label: 'High',
              data: chartLastSevenDayLabels.map(() =>
                faker.datatype.number({
                  min: 150,
                  max: 200
                })
              ),
              borderColor: 'rgb(239 68 68)',
              backgroundColor: 'rgb(239 68 68)'
            },
            {
              label: 'Low',
              data: chartLastSevenDayLabels.map(() =>
                faker.datatype.number({
                  min: 0,
                  max: 100
                })
              ),
              borderColor: 'rgb(119 119 119)',
              backgroundColor: 'rgb(119 119 119)'
            }
          ]
        }}
      />
    </div>
  )
}

export default SubscriptionChart
