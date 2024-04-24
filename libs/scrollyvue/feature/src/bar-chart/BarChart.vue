<script setup lang="ts">
import { ref } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { BarChartData } from '@scrollyvue/common';
import { ScrollyvueUiCard } from '@scrollyvue/scrollyvue-ui';
import colors from 'vuetify/util/colors';

Chart.register(...registerables);

const props = withDefaults(defineProps<{ cardColor?: string, title: string; data: BarChartData; options?: ChartOptions<'doughnut'>}>(), {
  cardColor: 'purple-lighten-1'
});

const barChartRef = ref();

const options = ref<ChartOptions<'bar'>>({
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: props.title,
      color: colors.purple.lighten1,
    },
  },
});

const handleChartRender = (chart: any) => {
  console.log(chart);
};
</script>

<template>
  <ScrollyvueUiCard class="card" :color="props.cardColor" :title="'Title'" :text="'Text'">
    <template v-slot:cardItem>
      <BarChart ref="barChartRef" :chart-data="props.data" :options="options" @chart:render="handleChartRender" />
    </template>
  </ScrollyvueUiCard>
</template>

<style scoped>
.card {
  margin: 2em;
}
</style>
