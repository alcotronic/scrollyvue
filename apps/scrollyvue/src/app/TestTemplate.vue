<script setup lang="ts">
import { ref } from 'vue'

import { ScrollyvueFeatureArticle, ScrollyvueFeatureBarChart, ScrollyvueFeatureDounutChart, ScrollyvueFeatureLineChart, SvgFun} from '@scrollyvue/scrollyvue-feature';
import { useGenerateCharColors } from '@scrollyvue/composeable';
import { Article, MdColorEnum } from '@scrollyvue/common';

const fill = ref(false);
const selectedGradient = ref(4);
const padding = ref(8);
const smooth = ref(true);
const value = ref([[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0], [1, 5, 4, 2, 7, 3, 3, 5, 1, 2, 1, 5, 7, 9, 0], [0, 7, 2, 4, 2, 3, 6, 8, 2, 5, 6, 1, 2, 4, 0]]);
const lineWidth = ref(1);

const testBarData1 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90]),
    },
  ],
};

const testBarData2 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90],  MdColorEnum.blue),
    },
  ],
};

const testBarData3 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      label: 'testBarDataSet1 Label',
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], undefined, [MdColorEnum.pink, MdColorEnum.purple, MdColorEnum.deepPurple]),
    },
  ],
};

const testData1 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90]),
    },
  ],
};

const testData2 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], MdColorEnum.blue),
    },
  ],
};

const testData3 = {
  labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre', 'Berlin'],
  datasets: [
    {
      data: [30, 40, 60, 70, 5, 90],
      backgroundColor: useGenerateCharColors([30, 40, 60, 70, 5, 90], undefined, [MdColorEnum.pink, MdColorEnum.purple, MdColorEnum.deepPurple]),
    },
  ],
};

const articleData: Article = {
  kicker: 'Kicker Test Kicker',
  title: 'Test Artikel',
  teaser: 'Test Teaser Text for testing the teaser text of an article.',
  sections: [
    {
      title: 'Test Section 1',
      content: [
        {
          text: 'Test Sextion 1 text 1 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
        {
          author: 'Author Name1',
          quote: 'Test Sextion 1 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
        },
        {
          text: 'Test Sextion 1 text 2 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
        {
          title: 'Test Bar Chart 1',
          chartType: 'BarChart',
          data: testBarData1
        },
        {
          text: 'Test Sextion 1 text 3 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
      ]
    },
    {
      title: 'Test Section 2',
      content: [
        {
          title: 'Test Dounut Chart 1',
          chartType: 'DounutChart',
          data: testData1
        },
        {
          text: 'Test Sextion 2 text 1 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
        {
          author: 'Author Name2',
          quote: 'Test Sextion 2 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
        },
        {
          text: 'Test Sextion 2 text 2 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
      ]
    }
  ]
}
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="ScrollyVue"></v-app-bar>
    <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
      <ScrollyvueFeatureArticle :article="articleData"></ScrollyvueFeatureArticle>
    </v-main>
  </v-layout>

  <!-- <h1>Scrollyvue Playground</h1>

  <h1>BarChart</h1>

  <ScrollyvueFeatureBarChart :color="'purple-lighten-1'" :title="'barchart test'" :data="testBarData1"></ScrollyvueFeatureBarChart>

  <v-container>
    <v-row
      align="start"
      no-gutters
    >
      <v-col class="pa-1">
        <ScrollyvueFeatureBarChart :color="'purple-lighten-1'" :title="'barchart test'" :data="testBarData1"></ScrollyvueFeatureBarChart>
      </v-col>
      <v-col class="pa-1">
        <ScrollyvueFeatureBarChart :color="'purple-lighten-1'" :title="'barchart test'" :data="testBarData2"></ScrollyvueFeatureBarChart>
      </v-col>
      <v-col class="pa-1">
        <ScrollyvueFeatureBarChart :color="'purple-lighten-1'" :title="'barchart test'" :data="testBarData3"></ScrollyvueFeatureBarChart>
      </v-col>
    </v-row>
  </v-container>
  
  
  <h1>DounutChart</h1>

  <ScrollyvueFeatureDounutChart :color="'purple-lighten-1'" :title="'testData1'" :data="testData1" />

  <v-container>
    <v-row
      align="start"
      no-gutters
    >
      <v-col class="pa-1">
        <ScrollyvueFeatureDounutChart :color="'purple-lighten-1'" :title="'testData1'" :data="testData1" />
      </v-col>
      <v-col class="pa-1">
        <ScrollyvueFeatureDounutChart :color="'purple-lighten-1'" :title="'testData2'" :data="testData2" />
      </v-col>
      <v-col class="pa-1">
        <ScrollyvueFeatureDounutChart :color="'purple-lighten-1'" :title="'testData3'" :data="testData3" />
      </v-col>
    </v-row>
  </v-container>

  <ScrollyvueUiButton :icon="'home'" :color="'purple-lighten-1'"/>

  <h1>LineChart</h1>

  <ScrollyvueFeatureLineChart :color="'purple-lighten-1'" :title="'Title'" :text="'Text for Chart'" :fill="fill" :gradient="selectedGradient" :padding="padding" :smooth="smooth" :line-width="lineWidth" :value="value[1]" />
  
  <v-container>
    <v-row
      align="start"
      no-gutters
    >
      <v-col class="pa-1" v-for="n in 3" :key="n">
        <ScrollyvueFeatureLineChart :color="'purple-lighten-1'" :title="'Title-'+n" :text="'Text for Chart-'+n" :fill="fill" :gradient="selectedGradient" :padding="padding" :smooth="smooth" :line-width="lineWidth" :value="value[n-1]" />
      </v-col>
    </v-row>
  </v-container> -->

</template>
