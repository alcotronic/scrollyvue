<script setup lang="ts">
  interface Props {
    autoLineWidth: boolean
    lineWidth?: number
    gradient?: number
    gradientDirection?: 'top' | 'left' | 'right' | 'bottom'
    fill?: boolean
    padding?: number
    smooth?: boolean 
    value?: Array<number>
    type?: 'bar' | 'trend'
  }

  const props = withDefaults(defineProps<Props>(), {
    autoLineWidth: false,
    gradient: 0,
    fill: false,
    padding: 0,
    smooth: false,
    lineWidth: 1,
  })

  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
</script>

<template>
  <v-sparkline
    :auto-line-width="autoLineWidth"
    :fill="fill"
    :gradient="gradients[gradient]"
    :gradient-direction="gradientDirection"
    :line-width="lineWidth"
    :model-value="value"
    :padding="padding"
    :smooth="smooth"
    :type="type"
    auto-draw
  ></v-sparkline>
</template>

<style scoped></style>
