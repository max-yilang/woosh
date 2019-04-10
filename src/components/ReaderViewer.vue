<template>
  <v-dialog
    v-model="showReader"
    fullscreen
    hide-overlay
    transition="fade-transition"
    :content-class="theme"
  >
    <v-container row justify-center fluid fill-height>
      <h2 class="display-3 break-word">{{ singleText }}</h2>
      <v-btn fixed fab large bottom @click="stopReading">
        <v-icon>close</v-icon>
      </v-btn>
    </v-container>
  </v-dialog>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ReaderViewer",
  data() {
    return {
      singleText: "",
      readInterval: null
    };
  },
  props: {
    showReader: {
      required: true,
      default: false
    },
    text: {
      required: true,
      default: ""
    },
    wpm: {
      required: true,
      default: 300
    }
  },
  computed: {
    theme() {
      return this.isDarkMode ? "dark-theme" : "light-theme";
    },
    ...mapState(["isDarkMode"])
  },
  watch: {
    showReader(val) {
      if (val) {
        const textArray = this.text.split(" ");
        const updateFrequency = (60 / this.wpm) * 1000;
        let index = 0;
        const length = textArray.length;
        this.readInterval = setInterval(() => {
          this.singleText = textArray[index];
          if (index < length) {
            index = index + 1;
          } else this.stopReading();
        }, updateFrequency);
      }
    }
  },
  methods: {
    stopReading() {
      this.$emit("update:showReader", false);
      clearInterval(this.readInterval);
    }
  }
};
</script>

<style>
.dark-theme {
  background: rgb(48, 48, 48);
}
.light-theme {
  background: #fff;
}
.break-word {
  word-break: break-word;
}
</style>
