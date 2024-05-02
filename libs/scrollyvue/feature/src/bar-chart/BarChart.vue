<script setup lang="ts">
import { ref, watch } from 'vue';
import { BarChart } from 'vue-chart-3';
import { Chart, ChartOptions, registerables } from 'chart.js';
import { BarChartData, BarChartDataset } from '@scrollyvue/common';
import { ScrollyvueUiCard } from '@scrollyvue/scrollyvue-ui';
import colors from 'vuetify/util/colors';
import { useElementVisibility } from '@vueuse/core';

Chart.register(...registerables);

const props = withDefaults(defineProps<{ cardColor?: string, title: string, data: BarChartData}>(), {
  cardColor: 'purple-lighten-1',
});

const barChartRef = ref();
const target = ref();

const targetIsVisible = useElementVisibility(target);


const labels = ref<string[]>([]);
const datasets = ref<BarChartDataset[]>([]);

watch(targetIsVisible, () => {
  console.log(`${props.title} visible: ${targetIsVisible.value}`);
  if(targetIsVisible.value) {
    labels.value = props.data.labels;
    datasets.value = props.data.datasets;
    barChartRef.value.update();
  }
});

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
      <div >
        <BarChart  ref="barChartRef" :chart-data="{ labels, datasets }" :options="options"  @chart:render="handleChartRender" />
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
