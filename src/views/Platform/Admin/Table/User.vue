<template>
  <div>
    <v-card class="card-shadow border-radius-xl elevation-20" dark>
      <div class="card-header-padding">
        <h5 class="font-weight-bold text-h5 text-warning mb-0">
          {{ $t("Users") }}
        </h5>
        <p class="text-sm text-body font-weight-light mb-0">
          {{ $t("ListOfUsers") }}
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
          show-expand
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
                    placeholder="Search"
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
                    <span class="font-weight-bold text-h5 text-warning mb-0">{{
                      $t(formTitle)
                    }}</span>
                  </div>
                  <v-card-text class="card-padding">
                    <v-container class="px-0">
                      <v-row>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.username"
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
                            :placeholder="$t('Username')"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.email"
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
                            :placeholder="$t('Email')"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.firstName"
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
                            :placeholder="$t('FirstName')"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.lastName"
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
                            :placeholder="$t('LastName')"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-text-field
                            v-model="editedItem.phone"
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
                            :placeholder="$t('Phone')"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                          <v-select
                            :items="$t(gender)"
                            :label="$t('Male')"
                            color="#e91e63"
                            class="font-size-input input-style"
                            single-line
                            height="36"
                            :v-model="$t(editedItem.gender)"
                          >
                          </v-select>
                        </v-col>
                        <v-col cols="6">
                          <v-autocomplete
                            :items="[
                              'Skiing',
                              'Ice hockey',
                              'Soccer',
                              'Basketball',
                              'Hockey',
                              'Reading',
                              'Writing',
                              'Coding',
                              'Basejump',
                            ]"
                            :label="$t('Offices')"
                            multiple
                          ></v-autocomplete>
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

          <template v-slot:item.username="{ item }">
            <div class="d-flex align-center ms-2">
              <span class="text-sm font-weight-normal text-body text-warning">
                {{ item.username.replace(/\d+/g, "") }}
              </span>
            </div>
          </template>

          <template v-slot:item.email="{ item }">
            <span class="text-sm font-weight-normal text-body text-warning">
              {{ item.email }}
            </span>
          </template>

          <template v-slot:item.regional="{ item }">
            <span class="text-sm font-weight-normal text-body text-warning">
              {{ item.regional }}
            </span>
          </template>

          <template v-slot:item.local="{ item }">
            <span class="text-sm font-weight-normal text-body text-warning">
              {{ item.local }}
            </span>
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
          <template v-slot:expanded-item="{ headers, item }">
            <td :colspan="headers.length">
              <v-row>
                <v-card class="card-shadow border-radius-xl elevation-20" dark>
                  <br />
                  <v-row>
                    <v-col cols="3">
                      <v-avatar
                        width="220"
                        height="250"
                        class="border-radius-lg me-4"
                      >
                        <img :src="item.photo" alt="Avatar" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="9">
                      <h4>
                        {{ $t("MoreInfoAbout") }} {{ item.firstName }}
                        {{ item.lastName }}
                      </h4>
                      <v-list>
                        <v-list-item-group class="border-radius-sm">
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("FirstName") }}:</strong
                                >
                                {{ item.firstName }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("LastName") }}:</strong
                                >
                                {{ item.lastName }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("Gender") }}:</strong
                                >
                                {{ item.gender }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("Email") }}:</strong
                                >
                                {{ item.email }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("BureauRegional") }}:</strong
                                >
                                {{ item.regional }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("BureauLocal") }}:</strong
                                >
                                {{ item.local }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("Birthday") }}:</strong
                                >
                                {{ new Date(item.birthday).getFullYear() }}/{{
                                  new Date(item.birthday).getMonth()
                                }}/{{ new Date(item.birthday).getDay() }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("Phone") }}:</strong
                                >
                                {{ item.phone }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                          <v-list-item
                            :ripple="false"
                            class="px-0 border-radius-sm"
                          >
                            <v-list-item-content class="py-0">
                              <div class="text-body text-sm">
                                <strong class="text-dark"
                                  >{{ $t("Function") }}:</strong
                                >
                                {{ item.function }}
                              </div>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>
                    </v-col>
                  </v-row>
                  <br />
                </v-card>
              </v-row>
            </td>
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
              placeholder="Items per page"
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
import users from "./Users";
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
      users,
      search: "",
      gender: ["Female", "Male"],
      editedIndex: -1,
      editedItem: {
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        gender: "",
        description: "",
        phone: "",
        photo: "",
      },
      defaultItem: {
        email: "",
        username: "",
        password: "",
        firstName: "",
        lastName: "",
      },
      headers: [
        {
          text: "Username",
          align: "start",
          cellClass: "border-bottom",
          sortable: true,
          value: "username",
          class: "text-warning font-weight-bolder opacity-7 border-bottom ps-6",
        },
        {
          text: "Email",
          value: "email",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "BureauRegional",
          value: "regional",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "BureauLocal",
          value: "local",
          class: "text-warning font-weight-bolder opacity-7",
        },
        {
          text: "Actions",
          value: "actions",
          sortable: false,
          class: "text-warning font-weight-bolder opacity-7",
        },
      ],
      items: [],
      address: "",
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
        AdminService.editItem(this.editedItem, "user").then(
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
        this.editedItem.description = "example description";
        this.editedItem.photo = "https://zomra.de/img/user.png";
        this.editedItem.password = "testtest";
        AdminService.addItem(this.editedItem, "user").then(
          (response) => {
            this.items.push(response);
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
      PdfService.generatePdf(this.items, "List of Users").then(
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
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "NewUser" : "EditUser";
    },
    pages() {
      return this.pagination.rowsPerPage
        ? Math.ceil(this.items.length / this.pagination.rowsPerPage)
        : 0;
    },
  },

  mounted() {
    AdminService.getItems("user/all").then(
      (response) => {
        this.items = response.data;
        console.log(this.items);
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
