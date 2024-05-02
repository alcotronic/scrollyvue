import { ChartOptions } from 'chart.js';
import { BarChartDataset } from './BarChartDataset.type';

export type BarChartData = {
  labels: string[],
  datasets: BarChartDataset[],
};
