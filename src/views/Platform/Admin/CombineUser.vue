<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row class="mt-8">
        <v-col cols="6">
          <v-card dark>
            <v-card-title
              class="text-h5 font-weight-regular orange black--text"
            >
              Member 1
            </v-card-title>
            <v-card-text>
              <v-autocomplete
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="searchNew"
                chips
                clearable
                hide-details
                hide-selected
                item-text="username"
                item-value="id"
                label="Search for a member..."
                return-object
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Search for your
                      <strong>Member</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                  <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                  >
                    <v-icon left> mdi-bitcoin </v-icon>
                    <span v-text="item.username"></span>
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
                      v-text="item.firstName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.lastName"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-bitcoin</v-icon>
                  </v-list-item-action>
                </template>
              </v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
              <v-list v-if="model" class="black lighten-3">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Username </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.username }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Firstname </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.firstName }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Lastname </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.lastName }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Email </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.email }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Phone </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.phone }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Adhesion Date </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.adhesionDate }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Gender </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.gender }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Job </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.job }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Adhesion Id </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.adhesionId }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Active </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model.active }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card dark>
            <v-card-title
              class="text-h5 font-weight-regular orange black--text"
            >
              Member 1
            </v-card-title>
            <v-card-text>
              <v-autocomplete
                v-model="model2"
                :items="items2"
                :loading="isLoading2"
                :search-input.sync="searchNew2"
                chips
                clearable
                hide-details
                hide-selected
                item-text="username"
                item-value="id"
                label="Search for a member..."
                return-object
              >
                <template v-slot:no-data>
                  <v-list-item>
                    <v-list-item-title>
                      Search for your
                      <strong>Member</strong>
                    </v-list-item-title>
                  </v-list-item>
                </template>
                <template v-slot:selection="{ attr, on, item, selected }">
                  <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                  >
                    <v-icon left> mdi-bitcoin </v-icon>
                    <span v-text="item.username"></span>
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
                      v-text="item.firstName"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-text="item.lastName"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon>mdi-bitcoin</v-icon>
                  </v-list-item-action>
                </template>
              </v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
              <v-list v-if="model2" class="black lighten-3">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Username </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.username }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Firstname </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.firstName }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Lastname </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.lastName }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Email </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.email }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Phone </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.phone }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Adhesion Date </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.adhesionDate }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Gender </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.gender }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Job </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.job }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Adhesion Id </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.adhesionId }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title> Active </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ model2.active }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col cols="12">
          <div class="d-flex justify-content-center">
            <v-btn
              :ripple="false"
              icon
              rounded
              color="orange"
              width="52px"
              height="52px"
              class="btn-warning btn-lg"
              @click="combine"
            >
              <v-icon size="20">fa fa-cog py-2</v-icon>
              Combine
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import AdminService from "@/services/admin.service";

export default {
  name: "CombineUser",
  data() {
    return {
      users1: [],
      users2: [],
      isEditing: false,
      isLoading: false,
      isLoading2: false,
      search: null,
      items: [],
      items2: [],
      model: null,
      model2: null,
      searchNew: null,
      searchNew2: null,
    };
  },
  watch: {
    model(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    model2(val) {
      if (val != null) this.tab = 0;
      else this.tab = null;
    },
    searchNew(val) {
      // Items have already been loaded
      if (this.items.length > 0) return;

      this.isLoading = true;

      AdminService.findItem(val, "user/search")
        .then(
          (response) => {
            this.items = response.data;
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
    searchNew2(val) {
      // Items have already been loaded
      if (this.items2.length > 0) return;

      this.isLoading2 = true;

      AdminService.findItem(val, "user/search")
        .then(
          (response) => {
            this.items2 = response.data;
          },
          (error) => {
            this.content =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
          }
        )
        .finally(() => (this.isLoading2 = false));
    },
  },
  methods: {
    combine() {
      var item = {};

      item.user1 = this.model.username;
      item.user2 = this.model2.username;

      AdminService.combineItem(item, "combine-user").then(
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
    },
  },
};
</script>
