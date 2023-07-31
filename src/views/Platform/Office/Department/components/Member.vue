<template>
  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
    <v-row>
      <v-col cols="9">
        <h6 class="mb-0 text-h6 text-warning font-weight-bold">
          {{ $t("Members") }}
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
                          <v-autocomplete
                            v-model="model"
                            :items="users"
                            :loading="isLoading"
                            :search-input.sync="searchNew"
                            chips
                            clearable
                            hide-details
                            hide-selected
                            item-text="username"
                            item-value="id"
                            :label="$t('SearchUsersOffice')"
                            return-object
                          >
                            <template v-slot:no-data>
                              <v-list-item>
                                <v-list-item-title>
                                  {{ $t("SearchUsersOffice") }}
                                </v-list-item-title>
                              </v-list-item>
                            </template>
                            <template
                              v-slot:selection="{ attr, on, item, selected }"
                            >
                              <v-chip
                                v-bind="attr"
                                :input-value="selected"
                                color="blue-grey"
                                class="white--text"
                                v-on="on"
                              >
                                <v-icon left> mdi-bitcoin </v-icon>
                                <span
                                  v-text="item.firstName + ' ' + item.lastName"
                                ></span>
                              </v-chip>
                            </template>
                            <template v-slot:item="{ item }">
                              <v-list-item-avatar
                                color="indigo"
                                class="text-h5 font-weight-light white--text"
                              >
                                {{ item.username.charAt(0) }}
                              </v-list-item-avatar>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="item.firstName + ' ' + item.lastName"
                                ></v-list-item-title>
                              </v-list-item-content>
                              <v-list-item-action>
                                <v-icon>mdi-bitcoin</v-icon>
                              </v-list-item-action>
                            </template>
                          </v-autocomplete>
                        </div>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6">
                        <v-select
                          :items="positions"
                          filled
                          :label="$t('position')"
                          class="font-size-input input-style mt-0"
                          v-model="position"
                          dense
                        ></v-select>
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
          v-for="(officeUser, index) in items"
          :key="officeUser.user.username"
          class="pt-2 pb-1 px-1"
          :class="{
            'border-bottom': index !== items.length - 1,
          }"
        >
          <v-img
            :alt="`${officeUser.user.username} avatar`"
            :src="officeUser.user.photo"
            max-width="20px"
            class="me-6"
          ></v-img>

          <v-list-item-content>
            <v-list-item-title
              v-text="officeUser.user.firstName + officeUser.user.lastName"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content class="text-center">
            <v-list-item-title
              v-text="officeUser.position"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content class="text-center">
            <v-list-item-title
              v-text="officeUser.user.adhesionDate"
              class="text-typo text-sm mb-0"
            ></v-list-item-title>
          </v-list-item-content>
          <v-list-item-content class="text-center">
            <v-list-item-title class="text-typo text-sm mb-0">
              <v-dialog v-model="dialogEdit" max-width="800px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    v-bind="attrs"
                    v-on="on"
                    elevation="10"
                    :ripple="false"
                    height="20"
                    class="
                      font-weight-normal
                      text-capitalize text-dark
                      btn-warning
                      bg-gradient-warning
                      py-3
                      px-3
                      ms-3
                      rounded-5
                    "
                  >
                    <v-icon size="20" class="material-icons-round">edit</v-icon>
                  </v-btn>
                </template>
                <v-card class="card-shadow border-radius-xl" dark>
                  <v-dialog v-model="dialogEdit" max-width="500px">
                    <v-card class="card-shadow border-radius-xl" dark>
                      <div class="card-header-padding card-border-bottom">
                        <span
                          class="font-weight-bold text-h5 text-warning mb-0"
                          >{{ $t(formTitle) }}</span
                        >
                      </div>
                      <v-card-text class="card-padding">
                        <v-container class="px-0">
                          <v-row>
                            <v-col cols="12">
                              <h3>
                                {{ officeUser.user.firstName }}
                                {{ officeUser.user.lastName }}
                              </h3>
                            </v-col>
                            <v-col class="d-flex" cols="12" sm="6">
                              <v-select
                                :items="positions"
                                filled
                                :label="$t('position')"
                                class="font-size-input input-style mt-0"
                                v-model="officeUser.position"
                                dense
                              ></v-select>
                            </v-col>
                          </v-row>
                        </v-container>
                      </v-card-text>

                      <v-card-actions class="card-padding d-flex justify-end">
                        <v-btn
                          @click="closeEdit"
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
                          @click="saveEdit(officeUser.id, officeUser.position)"
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
              <v-btn
                v-bind="attrs"
                v-on="on"
                elevation="10"
                :ripple="false"
                height="20"
                class="
                  font-weight-normal
                  text-capitalize text-dark
                  btn-warning
                  bg-gradient-danger
                  py-3
                  px-3
                  ms-3
                  rounded-5
                "
              >
                <v-icon size="20" class="material-icons-round">delete</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
import AdminService from "@/services/admin.service";
import PoliticOfficeService from "@/services/politicOffice.service";

export default {
  name: "Members",
  data() {
    return {
      dialog: false,
      dialogEdit: false,
      items: [],
      users: [],
      isLoading: false,
      model: null,
      searchNew: null,
      positions: ["كاتب عام", "كاتب عام مساعد", "أمين مال", "عضو"],
      position: null,
      officeId: null,
    };
  },
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    searchNew(val) {
      // Items have already been loaded
      if (this.users.length > 0) return;

      this.isLoading = true;

      AdminService.findItem(val, "user/search")
        .then(
          (response) => {
            this.users = response.data;
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        )
        .finally(() => (this.isLoading = false));
    },
  },
  computed: {
    formTitle() {
      return "AddUser";
    },
  },
  methods: {
    save() {
      var positionFe = this.position;
      PoliticOfficeService.addMember(
        this.model.id,
        this.officeId,
        this.position
      ).then(
        (response) => {
          var addedUser = {
            firstName: response[0].firstName,
            lastName: response[0].lastName,
            username: response[0].username,
            email: response[0].email,
            photo: response[0].photo,
          };
          var newUser = [];
          newUser.user = addedUser;
          newUser.position = positionFe;
          newUser.id = 1000;
          this.items.push(newUser);
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
      this.$nextTick(() => {
        this.model = null;
        this.position = null;
      });
    },
    saveEdit(userOfficeId, position) {
      PoliticOfficeService.editMember(userOfficeId, position).then(
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
    closeEdit() {
      this.dialogEdit = false;
    },
  },
  mounted() {
    PoliticOfficeService.getMembers().then(
      (response) => {
        this.items = response.data.officeUser;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    PoliticOfficeService.getPoliticOffice().then(
      (response) => {
        this.officeId = response.data.id;
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
