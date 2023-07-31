<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
    <v-row>
      <v-col cols="9">
        <h6 class="mb-0 text-h6 text-warning font-weight-bold">
          {{ $t("Rapports") }}
        </h6>
      </v-col>
      <v-col cols="3">
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              elevation="0"
              :ripple="false"
              height="43"
              class="
                font-weight-normal
                text-capitalize text-dark
                btn-warning
                bg-gradient-warning
                py-3
                px-6
                ms-3
                rounded-5
              "
            >
              <v-icon size="20" class="material-icons-round">add</v-icon>
            </v-btn>
          </template>
          <v-card class="card-shadow border-radius-xl" dark>
            <v-dialog v-model="dialog" max-width="500px">
              <v-card class="card-shadow border-radius-xl" dark>
                <div class="card-header-padding card-border-bottom">
                  <span class="font-weight-bold text-h5 text-warning mb-0">{{
                    $t(formTitle)
                  }}</span>
                </div>
                <v-card-text class="card-padding">
                  <v-container class="px-0">
                    <v-row>
                      <v-col cols="12">
                        <div>
                          <tiptap-vuetify
                            v-model="content"
                            :extensions="extensions"
                            :toolbar-attributes="{ color: 'dark' }"
                          >
                          </tiptap-vuetify>
                        </div>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions class="card-padding d-flex justify-end">
                  <v-btn
                    @click="close"
                    elevation="0"
                    :ripple="false"
                    height="43"
                    class="
                      font-weight-normal
                      text-capitalize
                      btn-ls btn-outline-secondary
                      bg-transparent
                      py-3
                      px-6
                    "
                    >{{ $t("Cancel") }}</v-btn
                  >

                  <v-btn
                    @click="save"
                    elevation="0"
                    :ripple="false"
                    height="43"
                    class="
                      font-weight-normal
                      text-capitalize
                      btn-ls btn-warning
                      bg-gradient-warning
                      py-3
                      px-6
                    "
                    >{{ $t("Save") }}</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
    <v-card-text class="pt-3 pb-0 px-0">
      <v-row class="mb-6 mt-10">
        <v-col
          v-for="(item, i) in items"
          :key="item.title + i"
          lg="4"
          class="pt-0 mb-lg-0 mb-10"
        >
          <v-card
            class="card card-shadow border-radius-xl py-5 text-center"
            data-animation="true"
            dark
          >
            <div class="mt-n11 mx-4 card-header position-relative z-index-2">
              <div class="d-block blur-shadow-image">
                <img
                  src="@/assets/img/rapport.png"
                  class="img-fluid shadow border-radius-lg"
                  alt="@/assets/img/rapport.png"
                />
              </div>
              <div
                class="colored-shadow"
                v-bind:style="{ backgroundImage: 'url(' + item.image + ')' }"
              ></div>
            </div>
            <div class="d-flex mx-auto mt-n8">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="material-icons-round text-primary ms-auto px-5"
                    size="18"
                  >
                    refresh
                  </v-icon>
                </template>
                <span>Refresh</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    v-bind="attrs"
                    v-on="on"
                    class="material-icons-round text-info me-auto px-5"
                    size="18"
                  >
                    edit
                  </v-icon>
                </template>
                <span>Edit</span>
              </v-tooltip>
            </div>
            <v-btn class="bg-transparent" :to="item.path">
              <h5
                class="font-weight-normal text-warning text-h5 mt-7 mb-2 px-4"
              >
                {{ $t(item.title) }}
              </h5>
            </v-btn>

            <p class="mb-0 text-body font-weight-light px-5">
              {{ item.text }}
            </p>
            <hr class="horizontal dark my-6" />
            <div class="d-flex text-body mx-2 px-4">
              <p class="mb-0 font-weight-normal text-body">
                ${{ item.price }}/night
              </p>
              <i
                class="
                  material-icons-round
                  position-relative
                  ms-auto
                  text-lg
                  me-1
                  my-auto
                "
                >place</i
              >
              <p class="text-sm my-auto font-weight-light">
                {{ item.location }}
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
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
import PoliticOfficeService from "@/services/politicOffice.service";

export default {
  name: "Rapport",
  components: {
    TiptapVuetify,
  },
  props: {
    officeId: String,
  },
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
      content: ``,
      items: [],
    };
  },
  computed: {
    formTitle() {
      return "AddRapport";
    },
  },
  methods: {
    save() {
      PoliticOfficeService.addReport(this.content, this.officeId).then(
        (response) => {
          console.log(response);
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
      this.close();
    },
    close() {
      this.dialog = false;
    },
  },
  mounted() {
    PoliticOfficeService.getReports(this.officeId).then(
      (response) => {
        this.items = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
