<template>
  <v-app-bar
    absolute
    :color="background"
    height="auto"
    class="py-4 px-2 toolbar-content-padding-y-none"
    flat
  >
    <v-container>
      <v-row>
      </v-row>
    </v-container>
  </v-app-bar>
</template>
<script>


export default {
  name: "app-bar",
  components: {
  },
  props: {
    background: String,
    hasBg: Boolean,
    linkColor: String,
  },
  data() {
    return {
      dialog: false,
      links: [],
    };
  },
};
</script>
