<script setup lang="ts">
  import { ScrollyvueUiCard } from '@scrollyvue/scrollyvue-ui';

  interface Props {
    cardColor?: string,
    autoLineWidth: boolean,
    lineWidth?: number,
    gradient?: number,
    gradientDirection?: 'top' | 'left' | 'right' | 'bottom',
    fill?: boolean,
    padding?: number,
    smooth?: boolean,
    value?: Array<number>,
    title?: string,
    text?: string,
  };

  const props = withDefaults(defineProps<Props>(), {
    cardColor: 'primary',
    autoLineWidth: false,
    gradient: 0,
    fill: false,
    padding: 0,
    smooth: false,
    lineWidth: 1,
    type: 'trend',
  });

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ];
</script>

<template>
  <ScrollyvueUiCard  :color="props.cardColor" :title="'Title'" :text="'Text'">
    <template v-slot:cardItem>
      <v-sparkline
        :auto-line-width="props.autoLineWidth"
        :fill="props.fill"
        :gradient="gradients[props.gradient]"
        :gradient-direction="gradientDirection"
        :line-width="props.lineWidth"
        :model-value="props.value"
        :padding="props.padding"
        :smooth="props.smooth"
        :type="props.type"
        auto-draw
      >
        <template v-slot:label="item">
          {{ item.value }}
        </template>
    </v-sparkline>
    </template>
  </ScrollyvueUiCard>
</template>

<style scoped></style>
