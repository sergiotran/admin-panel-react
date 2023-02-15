import React from 'react'

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { chartMonthLabels, chartOptions } from '../constants/chart'
import { faker } from '@faker-js/faker'

ChartJS.register(
  ArcElement,
  CategoryScale,
  Tooltip,
  LinearScale,
  PointElement,
  BarElement
)

const RevenueChart = () => {
  return (
    <div className='flex-1 p-3 border border-red-500 rounded h-full overflow-hidden'>
      <Bar
        options={chartOptions('Revenue Chart', true)}
        data={{
          labels: chartMonthLabels,
          datasets: [
            {
              data: chartMonthLabels.map(() =>
                faker.datatype.number({
                  min: 50,
                  max: 200
                })
              ),
              borderColor: 'rgb(239 68 68)',
              backgroundColor: 'rgb(239 68 68)'
            }
          ]
        }}
      />
    </div>
  )
}

export default RevenueChart
