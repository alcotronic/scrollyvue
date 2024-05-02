<script setup lang="ts">
import "leaflet/dist/leaflet.css";
import { LGeoJson, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { ref } from "vue";
import geojson from "./UWB_EU24.json"


const zoom = ref(2);

const geoStyler = (feature: any) => ({
  color: '#' + feature.properties.UWB
});
</script>

<template>
  <p>Welcome to Map!</p>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]" :useGlobalLeaflet="false">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-geo-json :geojson="geojson" :options-style="geoStyler"></l-geo-json>
    </l-map>
  </div>
</template>

<style scoped>

</style>
