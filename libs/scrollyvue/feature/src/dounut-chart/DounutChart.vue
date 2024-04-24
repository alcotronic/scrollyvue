<script setup lang="ts">
import { ref } from 'vue';
import { DoughnutChart, } from 'vue-chart-3';
import { Chart, ChartOptions, registerables } from "chart.js";
import { type DounutChartData } from '@scrollyvue/common';
import { ScrollyvueUiCard } from '@scrollyvue/scrollyvue-ui';
import colors from 'vuetify/util/colors'

Chart.register(...registerables);

const props = withDefaults(defineProps<{ cardColor?: string, title: string, data: DounutChartData }>(), {
  cardColor: 'purple-lighten-1'
});

const doughnutChartRef = ref();

const options = ref<ChartOptions<'doughnut'>>({
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: props.title,
      color: colors.purple.lighten1
    },
  },
});

const handleChartRender = (chart: any) => {
  console.log(chart);
}
</script>

<template>
  <ScrollyvueUiCard class="card" :color="props.cardColor" :title="'Title'" :text="'Text'">
    <template v-slot:cardItem>
      <DoughnutChart ref="doughnutChartRef" :chartData="props.data" :options="options" @chart:render="handleChartRender" />
    </template>
  </ScrollyvueUiCard>
  
</template>

<style scoped>
.card {
  margin: 2em;
}
</style>