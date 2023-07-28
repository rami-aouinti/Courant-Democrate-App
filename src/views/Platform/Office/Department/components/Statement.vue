<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
    <h6 class="mb-0 text-h6 text-warning font-weight-bold">
      {{ $t("Statements") }}
    </h6>
    <v-card-text class="pt-3 pb-0 px-0">
      <v-list class="py-0">
        <v-list-item
          v-for="(chat, index) in countries"
          :key="chat.title"
          class="pt-2 pb-1 px-1"
          :class="{
            'border-bottom': index !== countries.length - 1,
          }"
        >
          <v-img
            :alt="`${chat.title} avatar`"
            :src="chat.avatar"
            max-width="20px"
            class="me-6"
          ></v-img>

          <v-list-item-content>
            <span class="text-xs font-weight-bold text-body">
              {{ $t("Name") }}:
            </span>
            <v-list-item-title
              v-text="chat.country"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content class="text-center">
            <span class="text-xs font-weight-bold text-body">
              {{ $t("Position") }}:
            </span>
            <v-list-item-title
              v-text="chat.sales"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content class="text-center">
            <span class="text-xs font-weight-bold text-body">
              {{ $t("Since") }}:
            </span>
            <v-list-item-title
              v-text="chat.bounce"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Code,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
} from "tiptap-vuetify";

export default {
  name: "Statement",
  data() {
    return {
      dialog: false,
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [
          Heading,
          {
            options: {
              levels: [1, 2, 3],
            },
          },
        ],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak,
      ],
      // starting editor's content
      content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `,
    };
  },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "NewOffice" : "EditOffice";
        },
    },
};
</script>
