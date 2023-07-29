<template>
  <div>
    <v-card class="card-shadow border-radius-xl elevation-20" dark>
      <div class="card-header-padding">
        <h5 class="font-weight-bold text-h5 text-typo mb-0">
          {{ $t("Structures") }}
        </h5>
        <p class="text-sm text-body font-weight-light mb-0">
          {{ $t("ListOfOffices") }}
        </p>
      </div>

      <v-card-text class="px-0 py-0">
        <v-data-table
          :headers="headers"
          :items="items"
          :search="search"
          class="table"
          :page.sync="page"
          hide-default-footer
          @page-count="pageCount = $event"
          :items-per-page="itemsPerPage"
          mobile-breakpoint="0"
          hide-default-header
        >
          <template v-slot:header="{ props }">
            <th v-for="head in props.headers" class="text-warning">
              {{ $t(head.text) }}
            </th>
          </template>
          <template v-slot:top>
            <v-toolbar flat height="80">
              <v-row>
                <v-col cols="12" md="5">
                  <v-text-field
                    hide-details
                    class="
                      input-style
                      font-size-input
                      text-light-input
                      placeholder-light
                      input-icon
                    "
                    dense
                    flat
                    filled
                    solo
                    height="43"
                    v-model="search"
                    :placeholder="$t('Search')"
                  >
                    <template slot="prepend-inner">
                      <v-icon
                        color="#adb5bd"
                        size="16"
                        class="material-icons-round mt-n2"
                        >search</v-icon
                      >
                    </template>
                  </v-text-field>
                </v-col>
              </v-row>

              <v-spacer></v-spacer>

              <v-dialog v-model="dialog" max-width="500px">
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
                  <div class="card-header-padding card-border-bottom">
                    <span class="font-weight-bold text-h5 text-typo mb-0">{{
                      formTitle
                    }}</span>
                  </div>
                  <v-card-text class="card-padding">
                    <v-container class="px-0">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.name"
                            hide-details
                            class="
                              input-style
                              font-size-input
                              text-light-input
                              placeholder-light
                              input-icon
                            "
                            dense
                            flat
                            filled
                            solo
                            height="43"
                            placeholder="Name"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.type"
                            hide-details
                            class="
                              input-style
                              font-size-input
                              text-light-input
                              placeholder-light
                              input-icon
                            "
                            dense
                            flat
                            filled
                            solo
                            height="43"
                            placeholder="Type"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.start"
                            hide-details
                            class="
                              input-style
                              font-size-input
                              text-light-input
                              placeholder-light
                              input-icon
                            "
                            dense
                            flat
                            filled
                            solo
                            height="43"
                            placeholder="Start"
                            type="datetime-local"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.end"
                            hide-details
                            class="
                              input-style
                              font-size-input
                              text-light-input
                              placeholder-light
                              input-icon
                            "
                            dense
                            flat
                            filled
                            solo
                            height="43"
                            placeholder="Last Name"
                            type="datetime-local"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-checkbox
                            v-model="editedItem.active"
                            hide-details
                            class="
                              input-style
                              font-size-input
                              text-light-input
                              placeholder-light
                              input-icon
                            "
                            dense
                            flat
                            filled
                            solo
                            height="43"
                            placeholder="Active"
                          ></v-checkbox>
                        </v-col>
                        <v-col cols="6">
                          <v-autocomplete
                            v-model="participants"
                            :items="users"
                            label="Users"
                            multiple
                          >
                            <template v-slot:selection="data">
                              <v-chip
                                v-bind="data.attrs"
                                :input-value="data.selected"
                                close
                                @click="data.select"
                                @click:close="remove(data.item)"
                              >
                                <v-avatar left>
                                  <v-img :src="data.item.photo"></v-img>
                                </v-avatar>
                                {{ data.item.firstName }}
                                {{ data.item.lastName }}
                              </v-chip>
                            </template>
                            <template v-slot:item="data">
                              <template v-if="typeof data.item !== 'object'">
                                <v-list-item-content
                                  v-text="data.item"
                                ></v-list-item-content>
                              </template>
                              <template v-else>
                                <v-list-item-avatar>
                                  <img :src="data.item.photo" />
                                </v-list-item-avatar>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    {{ data.item.firstName }}
                                    {{ data.item.lastName }}</v-list-item-title
                                  >
                                </v-list-item-content>
                              </template>
                            </template>
                          </v-autocomplete>
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
                      >Cancel</v-btn
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
                      >Save</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-btn
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
                small
                @click="generatePdf"
              >
                <v-icon size="20" class="material-icons-round">download</v-icon>
              </v-btn>
              <v-btn
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
                small
              >
                <v-icon size="20" class="material-icons-round">email</v-icon>
              </v-btn>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card class="card-shadow card-padding border-radius-xl">
                  <v-card-title class="pt-0 text-h5 text-typo justify-center"
                    >Are you sure you want to delete this item?</v-card-title
                  >
                  <v-card-actions class="pb-0">
                    <v-spacer></v-spacer>
                    <v-btn
                      @click="closeDelete"
                      elevation="0"
                      :ripple="false"
                      height="43"
                      class="
                        font-weight-normal
                        text-capitalize
                        btn-ls
                        bg-transparent
                        btn-outline-secondary
                        py-3
                        px-6
                      "
                      >Cancel</v-btn
                    >

                    <v-btn
                      @click="deleteItemConfirm"
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
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>

          <template v-slot:item.name="{ item }">
            <div class="d-flex align-center ms-2">
              <span class="text-sm font-weight-normal text-body text-warning">
                {{ item.name }}
              </span>
            </div>
          </template>

          <template v-slot:item.type="{ item }">
            <span class="text-sm font-weight-normal text-body text-warning">
              {{ item.type }}
            </span>
          </template>

          <template v-slot:item.users="{ item }">
            <v-row>
              <v-col cols="12">
                <div class="py-4 d-flex">
                  <v-col lg="3" md="2" sm="3" cols="4" class="text-center">
                    {{ item.officeUser.length }}
                  </v-col>
                </div>
              </v-col>
            </v-row>
          </template>

          <template v-slot:item.active="{ item }">
            <v-checkbox
              :ripple="false"
              v-model="item.active"
              color="orange"
            ></v-checkbox>
          </template>

          <template v-slot:item.actions="{ item }">
            <v-btn
              @click="editItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="orange"
            >
              <v-icon size="14" class="material-icons-round"
                >construction</v-icon
              >
            </v-btn>

            <v-btn
              @click="deleteItem(item)"
              icon
              elevation="0"
              :ripple="false"
              height="28"
              min-width="36"
              width="36"
              class="btn-ls me-2 my-2 rounded-sm"
              color="orange"
            >
              <v-icon size="14" class="material-icons-round">close</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
      <v-card-actions class="card-padding">
        <v-row>
          <v-col cols="6" lg="3" class="d-flex align-center">
            <span class="text-body me-3 text-sm"
              >{{ $t("ItemsPerPage") }}:</span
            >
            <v-text-field
              hide-details
              type="number"
              outlined
              min="-1"
              max="15"
              background-color="rgba(255,255,255,.9)"
              color="rgba(0,0,0,.6)"
              light
              :value="itemsPerPage"
              @input="itemsPerPage = parseInt($event, 10)"
              :placeholder="$t('ItemsPerPage')"
              class="
                font-size-input
                placeholder-lighter
                text-color-light
                input-alternative input-focused-alternative input-icon
                text-warning
              "
            >
            </v-text-field>
          </v-col>
          <v-col cols="6" class="ml-auto d-flex justify-end">
            <v-pagination
              prev-icon="fa fa-angle-left"
              next-icon="fa fa-angle-right"
              class="pagination"
              color="orange"
              v-model="page"
              :length="pageCount"
              circle
            ></v-pagination>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import AdminService from "@/services/admin.service";
import PdfService from "@/services/pdf.service";
export default {
  name: "paginated-tables",
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      dialog: false,
      dialogDelete: false,
      users: [],
      search: "",
      editedIndex: -1,
      editedItem: {
        name: "",
        start: "",
        end: "",
        active: "",
        type: "",
      },
      defaultItem: {
        name: "",
        start: "",
        end: "",
        active: "",
        type: "",
      },
      headers: [
        {
          text: "OfficeName",
          align: "start",
          cellClass: "border-bottom",
          sortable: false,
          value: "name",
          class: "text-warning font-weight-bolder opacity-7 border-bottom ps-6",
        },
        {
          text: "OfficeType",
          value: "type",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "OfficeParticipants",
          value: "users",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "OfficeActive",
          value: "active",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "OfficeAction",
          value: "actions",
          sortable: false,
          class: "text-warning font-weight-bolder opacity-7",
        },
      ],
      items: [],
      participants: [],
      enabled: null,
      slots: ["مكتب جهوي", "مكتب محلي"],
      ex4: null,
    };
  },
  methods: {
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        AdminService.editItem(this.editedItem, "office").then(
          (response) => {
            Object.assign(this.items[this.editedIndex], response);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.editedItem.participants = this.participants;
        AdminService.addItem(this.editedItem, "office/new").then(
          (response) => {
            response.office.start = response.office.start.date;
            response.office.end = response.office.end.date;
            this.items.push(response.office);
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        );
      }
      this.close();
    },

    generatePdf() {
      PdfService.generatePdf(this.items, "List of Offices").then(
        (response) => {
          window.open(response, "_blank");
        },
        (error) => {
          this.content =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        }
      );
    },

    remove(item) {
      const result = this.participants.find(
        ({ firstName }) => firstName === item.firstName
      );
      //const index = this.participants.indexOf(item.firstName);
      if (result >= 0) this.participants.splice(result, 1);
    },

    isEnabled(slot) {
      return this.enabled === slot;
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },

    enabled(slot) {
      if (slot === "no-data") {
        this.items = [];
      } else if (slot === "no-results") {
        this.search = "...";
      } else {
        this.search = null;
        AdminService.findItem(slot, "office/type").then(
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
      }
    },

    ex4() {
      if (this.ex4 === "all") {
        AdminService.findItem(false, "office/active").then(
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
      } else {
        AdminService.getItems("office").then(
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
      }
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Office" : "Edit Office";
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.items.length / this.pagination.rowsPerPage)
        : 0;
    },
  },

  mounted() {
    AdminService.getItems("office").then(
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

    AdminService.getItems("user").then(
      (response) => {
        this.users = response.data;
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
