import { ChartOptions } from "chart.js"
import { BarChartData } from "./BarChartData.type"
import { DounutChartData } from "./DounutChartData.type"

export type ChartData = {
  title: string,
  chartType: 'BarChart' | 'DounutChart',
  data: BarChartData | DounutChartData,
  
}