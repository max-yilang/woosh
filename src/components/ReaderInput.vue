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
        <v-btn large>
          Start Reading
          <v-icon right>play_arrow</v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-select
          :items="wpmList"
          label="Words Per Minute"
          v-model="wpm"
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    wpmList: [200, 500, 700, 1000],
    wpm: 500,
    text: "",
    placeholderText:
      "Woosh let you read text at super fast speed by displaying one word at a time.Hit the button below to try it out or replace this text with what you want to read."
  })
};
</script>

<style></style>
