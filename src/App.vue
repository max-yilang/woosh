<template>
  <v-app :dark="isDarkMode">
    <v-toolbar>
      <v-toolbar-title class="headline text-uppercase">
        <span>Woosh</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon @click="toggleDarkMode">
        {{ isDarkMode ? "brightness_7" : "brightness_3" }}
      </v-icon>
    </v-toolbar>
    <v-content>
      <ReaderInput />
    </v-content>
    <v-footer class="pa-3">
      <v-layout justify-center>
        <div>
          Made with <span style="color: #e25555;">&hearts;</span> by
          <a
            href="https://github.com/MaxResolution"
            target="_blank"
            rel="noopener"
            >Max</a
          >
        </div>
      </v-layout>
    </v-footer>
    <v-snackbar v-model="snackbar">
      New Update Available,Reload to see the changes!
      <v-btn color="pink" flat @click="snackbar = false">
        Update
      </v-btn>
    </v-snackbar>
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
      snackbar: false
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
