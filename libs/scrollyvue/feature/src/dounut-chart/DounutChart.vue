<script setup lang="ts">
import { ref, watch } from 'vue';
import { DoughnutChart, } from 'vue-chart-3';
import { Chart, ChartOptions, registerables } from "chart.js";
import { DounutChartDataset, type DounutChartData } from '@scrollyvue/common';
import { ScrollyvueUiCard } from '@scrollyvue/scrollyvue-ui';
import colors from 'vuetify/util/colors'
import { useElementVisibility } from '@vueuse/core';

Chart.register(...registerables);

const props = withDefaults(defineProps<{ cardColor?: string, title: string, data: DounutChartData, rerenderWhenVisible: boolean }>(), {
  cardColor: 'purple-lighten-1',
  rerenderWhenVisible: false,
});

const doughnutChartRef = ref();
const target = ref();

const targetIsVisible = useElementVisibility(target);

const labels = ref<string[]>([]);
const datasets = ref<DounutChartDataset[]>([]);

watch(targetIsVisible, () => {
  console.log(`${props.title} visible: ${targetIsVisible.value}`);
  if(targetIsVisible.value) {
    labels.value = props.data.labels;
    datasets.value = props.data.datasets;
    doughnutChartRef.value.update();
  }
});

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
      <div>
        <DoughnutChart ref="doughnutChartRef" :chartData="{ labels, datasets }" :options="options" @chart:render="handleChartRender" />
      </div>
      <div ref="target"></div>
    </template>
  </ScrollyvueUiCard>
  
</template>

<style scoped>
.card {
  margin: 2em;
}
</style>