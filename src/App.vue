<template>
  <v-app :dark="isDarkMode">
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Woosh</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn fab @click="toggleDarkMode">
        <v-icon>{{ isDarkMode ? "brightness_7" : "brightness_3" }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <ReaderInput />
    </v-content>
    <v-footer class="pa-3">
      <div>Made by Max</div>
    </v-footer>
  </v-app>
</template>

<script>
import ReaderInput from "./components/ReaderInput";
import { mapState, mapMutations } from "vuex";
export default {
  name: "App",
  components: {
    ReaderInput
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapMutations(["toggleDarkMode"])
  },
  computed: mapState(["isDarkMode"])
};
</script>
<style>
html {
  /* Vuetify by default turns on the html scrollbar, the following code is used to disable that*/
  overflow-y: auto;
}
</style>
