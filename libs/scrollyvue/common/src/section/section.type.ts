import { BarChartData } from "../chart/BarChartData.type"
import { DounutChartData } from "../chart/DounutChartData.type"

export type Section = {
  title?: string,
  content?: Array<SectionText | SectionQuote | SectionImage | SectionChart | SectionCharts>
}

export type SectionText = {
  text: string
}

export type SectionQuote = {
  author: string,
  quote: string
}

export type SectionImage = {
  src?: string,
  data?: string,
  text: string,
  altText: string
}

export type SectionChart = {
  title: string,
  chartType: 'BarChart' | 'DounutChart',
  data: BarChartData | DounutChartData
}

export type SectionCharts = {
  charts: Array<SectionChart>
}