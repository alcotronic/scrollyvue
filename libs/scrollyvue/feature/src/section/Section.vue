<!-- eslint-disable vue/require-v-for-key -->
<script setup lang="ts">
import { Section, type SectionText, type SectionQuote, type SectionChart, type BarChartData, type DounutChartData } from '@scrollyvue/common';
import { ScrollyvueUiTitle, ScrollyvueUiText, ScrollyvueUiQuote } from '@scrollyvue/scrollyvue-ui';
import { default as BarChart } from '../bar-chart/BarChart.vue';
import { default as DounutChart } from '../dounut-chart/DounutChart.vue';


const props = defineProps<{sectionNumber: number, section: Section}>();

const isSectionText = (content: any): content is SectionText => {
  return !!content.text;
}
const isSectionQuote = (content: any): content is SectionQuote => {
  return !!content.author && !!content.quote;
}
const isSectionBarChart = (content: any): content is SectionChart => {
  return !!content.chartType && content.chartType === 'BarChart' && !!content.data;
}
const isSectionDounutChart = (content: any): content is SectionChart => {
  return !!content.chartType && content.chartType === 'DounutChart' && !!content.data;
}
</script>

<template>
  <section>
    <ScrollyvueUiTitle v-if="props.sectionNumber !== 1" :title="props.section.title" :titleType="'Section'"/>
    <div class="section-content" v-for="n in props.section.content?.length" :key="n">
      <ScrollyvueUiText v-if="props.section.content && isSectionText(props.section.content[n-1])" :text="(props.section.content[n-1] as SectionText).text" :firstParagraph="props.sectionNumber === 1 && n === 1"/>
      <ScrollyvueUiQuote v-if="props.section.content && isSectionQuote(props.section.content[n-1])" :author="(props.section.content[n-1] as SectionQuote).author" :quote="(props.section.content[n-1] as SectionQuote).quote"/>
      <BarChart v-if="props.section.content && isSectionBarChart(props.section.content[n-1])" :title="(props.section.content[n-1] as SectionChart).title" :data="(props.section.content[n-1] as SectionChart).data as BarChartData"/>
      <DounutChart v-if="props.section.content && isSectionDounutChart(props.section.content[n-1])" :title="(props.section.content[n-1] as SectionChart).title" :data="(props.section.content[n-1] as SectionChart).data as DounutChartData"/>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  width: 100%;
}
</style>
