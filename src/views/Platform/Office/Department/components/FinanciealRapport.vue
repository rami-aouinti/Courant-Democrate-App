<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
    <v-row>
      <v-col cols="9">
        <h6 class="mb-0 text-h6 text-warning font-weight-bold">
          {{ $t("FinancialRapports") }}
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
                          <!-- Use the component in the right place of the template -->
                          <section>
                            <h3>Import XLSX</h3>
                            <input type="file" @change="onChange" />
                            <xlsx-read :file="file">
                              <xlsx-sheets>
                                <template #default="{ sheets }">
                                  <v-select v-model="selectedSheet">
                                    <option
                                      v-for="sheet in sheets"
                                      :key="sheet"
                                      :value="sheet"
                                    >
                                      {{ sheet }}
                                    </option>
                                  </v-select>
                                </template>
                              </xlsx-sheets>
                              <xlsx-table :sheet="selectedSheet" />
                              <xlsx-json :sheet="selectedSheet">
                                <template #default="{ collection }">
                                  <div>
                                    {{ collection }}
                                  </div>
                                </template>
                              </xlsx-json>
                            </xlsx-read>
                          </section>
                        </div>
                      </v-col>
                      <v-col cols="12">
                        <xlsx-workbook>
                          <xlsx-sheet
                            :collection="sheet.data"
                            v-for="sheet in sheets"
                            :key="sheet.name"
                            :sheet-name="sheet.name"
                          />
                          <xlsx-download>
                            <button>Download</button>
                          </xlsx-download>
                        </xlsx-workbook>
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
  XlsxDownload,
  XlsxJson,
  XlsxRead,
  XlsxSheet,
  XlsxSheets,
  XlsxTable,
  XlsxWorkbook,
} from "vue-xlsx";

export default {
  name: "FinancialRapport",
  components: {
    XlsxSheet,
    XlsxTable,
    XlsxDownload,
    XlsxWorkbook,
    XlsxJson,
    XlsxSheets,
    XlsxRead,
  },
  data() {
    return {
      dialog: false,
      file: null,
      selectedSheet: null,
      sheetName: null,
      sheets: [{ name: "SheetOne", data: [{ c: 2 }] }],
      collection: [{ a: 1, b: 2 }],
    };
  },
  methods: {
    onChange(event) {
      this.file = event.target.files ? event.target.files[0] : null;
    },
    close() {
      this.dialog = false;
    },
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "NewOffice" : "EditOffice";
    },
  },
};
</script>
