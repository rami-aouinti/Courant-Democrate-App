<template>
  <div>
    <v-container fluid class="px-6 py-6">
      <v-row>
        <v-col lg="12" cols="12">
          <v-row>
            <v-col cols="12">
              <v-card class="bg-gradient-default border-radius-xl mb-3">
                <div class="px-4 py-4">
                  <v-row class="row">
                    <v-col cols="8" class="my-auto">
                      <div class="numbers">
                        <p
                          class="
                            text-secondary
                            mb-0
                            text-capitalize
                            font-weight-bold
                            opacity-50
                          "
                        >
                          {{ $t("Structure") }}
                        </p>
                        <h5
                          class="text-warning text-h1 font-weight-bolder mb-0"
                        >
                          {{ $t("BureauPolitique") }}
                        </h5>
                      </div>
                    </v-col>
                    <v-col cols="4" class="text-end">
                      <v-img
                        src="@/assets/img/courant.png"
                        class="w-50 ms-auto rounded-5"
                      ></v-img>
                    </v-col>
                  </v-row>
                </div>
              </v-card>
            </v-col>
          </v-row>
          <v-row class="mb-4">
            <v-col md="4" cols="8">
              <v-card
                class="
                  card-shadow
                  bg-warning
                  border-radius-xl
                  px-4
                  py-4
                  mb-lg-0 mb-4
                "
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        drive_eta
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberParticipants") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      145
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="4" cols="8">
              <v-card class="card-shadow bg-warning border-radius-xl px-4 py-4">
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        battery_full
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberEvents") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      99
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
            <v-col md="4" cols="8">
              <v-card
                class="
                  card-shadow
                  bg-warning
                  border-radius-xl
                  px-4
                  py-4
                  mb-lg-0 mb-4
                "
              >
                <v-row no-gutters>
                  <v-col sm="4" class="text-start">
                    <v-avatar
                      color="bg-gradient-default"
                      class="shadow border-radius-xl mt-n8"
                      height="64"
                      width="64"
                    >
                      <v-icon size="24" class="text-white material-icons-round">
                        speed
                      </v-icon>
                    </v-avatar>
                  </v-col>
                  <v-col sm="8" class="text-end">
                    <h6 class="text-white text-sm mb-0 text-dark">
                      {{ $t("NumberMeetings") }}
                    </h6>
                    <h4 class="text-h4 text-dark font-weight-bolder mb-0">
                      56
                    </h4>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row class="mt-6 mb-5">
        <v-col lg="6" cols="12">
          <v-form>
            <v-container>
              <v-row>
                <v-col cols="12" sm="12" md="12">
                  <v-row justify="center">
                    <v-dialog
                      v-model="dialog"
                      persistent
                      max-width="600px"
                      dark
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          block
                          elevation="24"
                          large
                          rounded
                          text
                          v-bind="attrs"
                          v-on="on"
                          color="orange"
                        >
                          <v-icon class="material-icons-round" size="24">
                            add
                          </v-icon>
                          Was machst du gerade
                          {{ userProfile.username }}
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <span class="text-h5 text-warning">{{
                            $t("NewPost")
                          }}</span>
                        </v-card-title>
                        <v-card-text>
                          <v-container>
                            <v-row>
                              <v-col cols="12">
                                <v-text-field
                                  :label="$t('Title')"
                                  required
                                  v-model="post.title"
                                ></v-text-field>
                              </v-col>
                              <v-col cols="12">
                                <v-text-field
                                  label="Description"
                                  hint="example of helper text only on focus"
                                  v-model="post.content"
                                ></v-text-field>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="orange" text @click="dialog = false">
                            {{ $t("Close") }}
                          </v-btn>
                          <v-btn color="orange" text @click="savePost">
                            {{ $t("Save") }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
          <v-divider></v-divider>
          <Post></Post>
        </v-col>
        <v-col lg="6">
          <v-card class="card-shadow bg-gradient-default border-radius-xl">
            <v-img
              src="@/assets/img/shapes/waves-white.svg"
              class="position-absolute opacity-2 start-0 top-0 w-100 h-100"
            ></v-img>

            <div class="px-8 pt-6">
              <v-row class="position-relative">
                <v-col md="12">
                  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
                    <v-row>
                      <v-col cols="9">
                        <h6 class="mb-0 text-h6 text-warning font-weight-bold">
                          {{ $t("Members") }}
                        </h6>
                      </v-col>
                      <v-col cols="3">
                        <v-dialog v-model="dialogMember" max-width="500px">
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
                              <v-icon size="20" class="material-icons-round"
                                >add</v-icon
                              >
                            </v-btn>
                          </template>
                          <v-card class="card-shadow border-radius-xl" dark>
                              <v-dialog v-model="dialogMember" max-width="500px">
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
                                                              :placeholder="$t('PoliticOfficeName')"
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
                                                              :placeholder="$t('Active')"
                                                      ></v-checkbox>
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
                                                      <v-autocomplete
                                                              v-model="participants"
                                                              :items="users"
                                                              :label="$t('Members')"
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
                  <v-divider></v-divider>
                  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
                    <h6 class="mb-0 text-h6 text-warning font-weight-bold">
                      {{ $t("Rapports") }}
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
                  <v-divider></v-divider>
                  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
                    <h6 class="mb-0 text-h6 text-warning font-weight-bold">
                      {{ $t("Events") }}
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
                  <v-divider></v-divider>
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
                  <v-divider></v-divider>
                  <v-card class="card-shadow border-radius-xl px-4 py-4" dark>
                    <h6 class="mb-0 text-h6 text-warning font-weight-bold">
                      {{ $t("FinancialRapports") }}
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
                  <v-divider></v-divider>
                  <v-card class="card-shadow border-radius-xl" dark>
                    <div class="px-4 py-4">
                      <full-calendar
                        :options="calendarOptions"
                        ref="fullCalendar"
                      ></full-calendar>
                    </div>
                  </v-card>
                  <v-divider></v-divider>
                </v-col>
              </v-row>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col> </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Post from "@/views/Platform/Article/Post.vue";
import UserService from "@/services/user.service";
import ArticleService from "@/services/article.service";
export default {
  name: "Automotive",
  components: {
    Post,
    FullCalendar,
  },
  data() {
    return {
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
      slider: "",
      countries: [
        {
          avatar: require("@/assets/img/team-1.jpg"),
          country: "Jon Doe 1",
          sales: "President",
          bounce: "April 2023",
        },
        {
          avatar: require("@/assets/img/team-2.jpg"),
          country: "Jon Doe 1",
          sales: "Vice President",
          bounce: "April 2023",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          country: "Jon Doe 3",
          sales: "Treasurer",
          bounce: "April 2023",
        },
      ],
      calendarOptions: {
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
        contentHeight: "auto",
        initialView: "dayGridMonth",
        selectable: true,
        initialDate: "2021-11-08",
        editable: true,
        headerToolbar: {
          start: "title", // will normally be on the left. if RTL, will be on the right
          center: "",
          end: "today prev,next", // will normally be on the right. if RTL, will be on the left
        },
        events: [
          {
            title: "Call with Dave",
            start: "2021-11-18",
            end: "2021-11-18",
            className: "bg-gradient-danger",
          },

          {
            title: "Lunch meeting",
            start: "2021-11-21",
            end: "2021-11-22",
            className: "bg-gradient-warning",
          },

          {
            title: "All day conference",
            start: "2021-11-29",
            end: "2021-11-29",
            className: "bg-gradient-success",
          },

          {
            title: "Meeting with Mary",
            start: "2021-12-01",
            end: "2021-12-01",
            className: "bg-gradient-info",
          },

          {
            title: "Winter Hackaton",
            start: "2021-12-03",
            end: "2021-12-03",
            className: "bg-gradient-danger",
          },

          {
            title: "Digital event",
            start: "2021-12-07",
            end: "2021-12-09",
            className: "bg-gradient-warning",
          },

          {
            title: "Marketing event",
            start: "2021-12-10",
            end: "2021-12-10",
            className: "bg-gradient-primary",
          },

          {
            title: "Dinner with Family",
            start: "2021-12-19",
            end: "2021-12-19",
            className: "bg-gradient-danger",
          },

          {
            title: "Black Friday",
            start: "2021-12-23",
            end: "2021-12-23",
            className: "bg-gradient-info",
          },

          {
            title: "Cyber Week",
            start: "2021-12-02",
            end: "2021-12-02",
            className: "bg-gradient-warning",
          },
        ],
      },
      dialog: false,
      dialogMember: false,
      userProfile: [],
      userRoles: [],
      userGroups: [],
      post: {},
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    savePost() {
      ArticleService.addPost(this.post).then(
        (response) => {
          var author = {};
          author.firstName = response.firstName;
          author.lastName = response.lastName;
          author.photo = response.photo;
          this.post.author = author;
          console.log(this.post);
          this.posts.push(this.post);
          this.dialog = false;
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
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? "NewOffice" : "EditOffice";
        },
    },
  mounted() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        console.log(this.userProfile);
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getRoles().then(
      (response) => {
        this.userRoles = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getGroups().then(
      (response) => {
        this.userGroups = response.data;
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
