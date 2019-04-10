<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-textarea
        name="main-input"
        :placeholder="placeholderText"
        v-model="text"
      ></v-textarea>
    </v-layout>
    <v-layout justify-space-between row>
      <v-flex>
        <v-btn large @click="startReading">
          Start Reading
        </v-btn>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-select
          :items="wpmList"
          label="Words Per Minute"
          v-model="wpm"
        ></v-select>
      </v-flex>
    </v-layout>
    <ReaderViewer
      :wpm="wpm"
      :text="readerText"
      :show-reader.sync="showReader"
    ></ReaderViewer>
  </v-container>
</template>

<script>
import ReaderViewer from "./ReaderViewer";
export default {
  components: {
    ReaderViewer
  },
  data() {
    return {
      wpmList: [300, 500, 700, 1000],
      wpm: 300,
      text: "",
      showReader: false,
      placeholderText:
        "Woosh let you read text at super fast speed by displaying one word at a time. Hit the button below to try it out or replace this text with what you want to read."
    };
  },
  methods: {
    startReading() {
      this.showReader = true;
    }
  },
  computed: {
    readerText() {
      return this.text === "" ? this.placeholderText : this.text;
    }
  }
};
</script>

<style></style>
