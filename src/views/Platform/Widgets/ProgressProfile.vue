<template>
  <div>
    <v-progress-linear
      class="mx-auto"
      v-model="power"
      color="orange"
      height="70"
      rounded
    >
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />
  </div>
</template>
<script>
export default {
  data: () => ({
    power: 78,
  }),
};
</script>
