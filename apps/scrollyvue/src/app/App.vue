<script setup lang="ts">
import { ScrollyvueFeatureArticle } from '@scrollyvue/scrollyvue-feature';
import { useGenerateCharColors } from '@scrollyvue/composeable';
import { Article, MdColorEnum } from '@scrollyvue/common';


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
          text: 'Test Sextion 2 text 1 for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section. Test Sextion 1 text for testing the text content of an article section.'
        },
        {
          title: 'Test Dounut Chart 1',
          chartType: 'DounutChart',
          data: testData1
        },
        {
          author: 'Author Name2',
          quote: 'Test Sextion 2 quote 1 for testing the quote content of an article section. Test Sextion 1 quote for testing the quote content of an article section.'
        },
        {
          title: 'Test Dounut Chart 1',
          chartType: 'DounutChart',
          data: testData3
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
</template>
