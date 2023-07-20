<template>
  <v-navigation-drawer
    width="100%"
    height="calc(100% - 2rem)"
    fixed
    app
    floating
    :expand-on-hover="mini"
    :value="drawer"
    :right="$vuetify.rtl"
    class="my-4 ms-4 border-radius-xl text-warning elevation-20"
    :class="!$vuetify.breakpoint.mobile ? '' : 'bg-white'"
    :data-color="sidebarColor"
    :data-theme="sidebarTheme"
  >
    <v-list-item class="pa-0" :to="dashboard">
      <v-list-item-content class="pa-0">
        <v-list-item-title class="title d-flex align-center mb-0">
          <div
            class="
              v-navigation-drawer-brand
              pa-5
              d-flex
              align-center
              opacity-100
            "
          >
            <v-img
              src="@/assets/img/courant.png"
              class="navbar-brand-img ms-3 rounded-3 elevation-20"
              width="50"
              v-if="sidebarTheme === 'dark'"
            >
            </v-img>
            <v-img
              src="@/assets/img/courant.png"
              class="navbar-brand-img ms-3 rounded-3 evaluation-20"
              width="50"
              v-else
            >
            </v-img>
            <span class="ms-2 font-weight-bold text-sm text-warning">{{
              $t("Platform")
            }}</span>
          </div>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <hr
      class="horizontal mb-0"
      :class="sidebarTheme === 'dark' ? 'light' : 'dark'"
    />

    <v-list nav dense>
      <v-list-group
        :ripple="false"
        append-icon="fas fa-angle-down"
        class="pb-1 mx-2 text-warning"
        active-class="item-active"
      >
        <template v-slot:activator>
          <v-avatar size="50" class="my-3 ms-2 elevation-20">
            <span v-if="userProfile.photo === null" class="text-h5">{{
              getInitials(userProfile.firstName + " " + userProfile.lastName)
            }}</span>
            <img v-else :src="userProfile.photo" alt="Brooklyn" />
          </v-avatar>

          <v-list-item-content>
            <v-list-item-title class="ms-2 ps-1 font-weight-light text-warning">
              {{ currentUser.username }}
            </v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :ripple="false"
          link
          class="mb-1 no-default-hover py-2"
          v-for="child in userInfo"
          :key="$t(child.title)"
          :to="child.path"
        >
          <span
            class="
              v-list-item-mini
              ms-0
              font-weight-light
              text-center text-warning
              w-20
            "
            v-text="child.prefix"
          ></span>

          <v-list-item-content
            class="ms-2 ps-1 text-warning"
            v-if="!child.items"
          >
            <v-list-item-title v-text="$t(child.title)"></v-list-item-title>
          </v-list-item-content>

          <v-list-item-content class="ms-1 ps-1 py-0" v-if="child.items">
            <v-list-group
              prepend-icon=""
              :ripple="false"
              sub-group
              no-action
              v-model="child.active"
            >
              <template v-slot:activator>
                <v-list nav dense class="pa-0">
                  <v-list-group
                    :ripple="false"
                    append-icon="fas fa-angle-down me-auto ms-1"
                    active-class="item-active"
                    class="mb-0 text-warning"
                  >
                    <template v-slot:activator class="mb-0">
                      <v-list-item-content class="py-0">
                        <v-list-item-title
                          v-text="$t(child.title)"
                        ></v-list-item-title>
                      </v-list-item-content>
                    </template>
                  </v-list-group>
                </v-list>
              </template>

              <v-list-item
                v-for="child2 in child.items"
                :ripple="false"
                :key="child2.title"
                :to="child2.link"
                @click="listClose($event)"
              >
                <span class="v-list-item-mini" v-text="child2.prefix"></span>
                <v-list-item-content>
                  <v-list-item-title v-text="child2.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <hr
      class="horizontal mb-3"
      :class="sidebarTheme === 'dark' ? 'light' : 'dark'"
    />

    <v-list-item-group>
      <div v-for="(item, i) in itemCourant" :key="i">
        <v-list-item
          link
          :to="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="!item.external"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round text-warning opacity-10">{{
              item.action
            }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          :href="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="item.external"
          target="_blank"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-10">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list-item-group>

    <v-list-item-group>
      <div v-for="(item, i) in itemPosts" :key="i">
        <v-list-item
          link
          :to="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="!item.external"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round text-warning opacity-10">{{
              item.action
            }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          :href="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="item.external"
          target="_blank"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-10">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list-item-group>

    <v-list-item-group>
      <div v-for="(item, i) in itemQuiz" :key="i">
        <v-list-item
          link
          :to="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="!item.external"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round text-warning opacity-10">{{
              item.action
            }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          :href="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="item.external"
          target="_blank"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-10">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list-item-group>

    <v-list-item-group>
      <div v-for="(item, i) in itemLibrary" :key="i">
        <v-list-item
          link
          :to="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="!item.external"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round text-warning opacity-10">{{
              item.action
            }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          link
          :href="item.link"
          class="pb-1 mx-2 no-default-hover py-2"
          :ripple="false"
          active-class="item-active"
          v-if="item.external"
          target="_blank"
        >
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-10">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </div>
    </v-list-item-group>

    <hr
      class="horizontal mb-3"
      :class="sidebarTheme === 'dark' ? 'light' : 'dark'"
    />

    <v-list v-if="showAdminBoard" nav dense>
      <h5
        class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
        :class="sidebarTheme === 'dark' ? 'text-warning' : 'text-default'"
      >
        {{ $t("Administration") }}
      </h5>
      <v-list-group
        :ripple="false"
        v-for="item in admin"
        :key="$t(item.title)"
        v-model="item.active"
        append-icon="fas fa-angle-down"
        class="pb-1 mx-2 text-warning"
        active-class="item-active"
      >
        <template v-slot:activator>
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-50">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :ripple="false"
          link
          class="mb-1 no-default-hover px-0"
          :class="child.items ? 'has-children' : ''"
          v-for="child in item.items"
          :key="$t(child.title)"
          :to="child.link"
        >
          <div class="w-100 d-flex align-center pa-2 border-radius-lg">
            <span class="v-list-item-mini" v-text="child.prefix"></span>

            <v-list-item-content class="ms-6 ps-1" v-if="!child.items">
              <v-list-item-title
                v-text="$t(child.title)"
                @click="listClose($event)"
              ></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content class="ms-6 ps-1 py-0" v-if="child.items">
              <v-list-group
                prepend-icon=""
                :ripple="false"
                sub-group
                no-action
                v-model="child.active"
              >
                <template v-slot:activator>
                  <v-list nav dense class="pa-0">
                    <v-list-group
                      :ripple="false"
                      append-icon="fas fa-angle-down me-auto ms-1"
                      active-class="item-active"
                      class="mb-0 text-warning"
                    >
                      <template v-slot:activator class="mb-0">
                        <v-list-item-content class="py-0">
                          <v-list-item-title
                            v-text="$t(child.title)"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-group>
                  </v-list>
                </template>

                <v-list-item
                  v-for="child2 in child.items"
                  :ripple="false"
                  :key="child2.title"
                  :to="child2.link"
                  @click="listClose($event)"
                >
                  <span class="v-list-item-mini" v-text="child2.prefix"></span>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="child2.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-group>

      <v-list-group
        :ripple="false"
        v-for="item in items"
        :key="$t(item.title)"
        v-model="item.active"
        append-icon="fas fa-angle-down"
        class="pb-1 mx-2 text-warning"
        active-class="item-active"
      >
        <template v-slot:activator>
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-25">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :ripple="false"
          link
          class="mb-1 no-default-hover px-0"
          :class="child.items ? 'has-children' : ''"
          v-for="child in item.items"
          :key="$t(child.title)"
          :to="child.link"
        >
          <div class="w-100 d-flex align-center pa-2 border-radius-lg">
            <span class="v-list-item-mini" v-text="child.prefix"></span>

            <v-list-item-content class="ms-6 ps-1" v-if="!child.items">
              <v-list-item-title
                v-text="$t(child.title)"
                @click="listClose($event)"
              ></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content class="ms-6 ps-1 py-0" v-if="child.items">
              <v-list-group
                prepend-icon=""
                :ripple="false"
                sub-group
                no-action
                v-model="child.active"
              >
                <template v-slot:activator>
                  <v-list nav dense class="pa-0">
                    <v-list-group
                      :ripple="false"
                      append-icon="fas fa-angle-down me-auto ms-1"
                      active-class="item-active"
                      class="mb-0"
                    >
                      <template v-slot:activator class="mb-0">
                        <v-list-item-content class="py-0">
                          <v-list-item-title
                            v-text="$t(child.title)"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </template>
                    </v-list-group>
                  </v-list>
                </template>

                <v-list-item
                  v-for="child2 in child.items"
                  :ripple="false"
                  :key="child2.title"
                  :to="child2.link"
                  @click="listClose($event)"
                >
                  <span class="v-list-item-mini" v-text="child2.prefix"></span>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="child2.title"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list-item-content>
          </div>
        </v-list-item>
      </v-list-group>

      <h5
        class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
        :class="sidebarTheme === 'dark' ? 'text-warning' : 'text-default'"
      >
        {{ $t("Pages") }}
      </h5>

      <v-list-group
        :ripple="false"
        v-for="item in itemsPages"
        :key="$t(item.title)"
        v-model="item.active"
        append-icon="fas fa-angle-down"
        class="pb-1 mx-2 text-warning"
        active-class="item-active"
      >
        <template v-slot:activator>
          <v-list-item-icon class="me-2 align-center">
            <i class="material-icons-round opacity-25">{{ item.action }}</i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="$t(item.title)"
              class="ms-1 text-warning"
            ></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          :ripple="false"
          link
          class="mb-1 no-default-hover px-0"
          :class="child.items ? 'has-children' : ''"
          v-for="child in item.items"
          :key="$t(child.title)"
          :to="child.link"
        >
          <v-list-item-content class="ps-4" v-if="!child.items">
            <div class="d-flex align-items-center pa-2">
              <span class="v-list-item-mini ms-0" v-text="child.prefix"></span>
              <v-list-item-title
                class="ms-6"
                v-text="$t(child.title)"
                @click="listClose($event)"
              ></v-list-item-title>
            </div>
          </v-list-item-content>

          <v-list-item-content class="py-0" v-if="child.items">
            <v-list-group
              prepend-icon=""
              :ripple="false"
              sub-group
              no-action
              v-model="child.active"
            >
              <template v-slot:activator>
                <v-list nav dense class="py-2 ps-5 pe-2">
                  <v-list-group
                    :ripple="false"
                    append-icon="fas fa-angle-down me-auto ms-1"
                    active-class="item-active"
                    class="mb-0"
                  >
                    <template v-slot:activator class="mb-0">
                      <div class="w-100 d-flex align-center">
                        <span
                          class="v-list-item-mini ms-1 text-warning"
                          v-text="child.prefix"
                        ></span>

                        <v-list-item-content class="py-0 ms-4">
                          <v-list-item-title
                            class="ms-2 text-warning"
                            v-text="$t(child.title)"
                          ></v-list-item-title>
                        </v-list-item-content>
                      </div>
                    </template>
                  </v-list-group>
                </v-list>
              </template>

              <v-list-item
                v-for="child2 in child.items"
                :ripple="false"
                :key="child2.title"
                :to="child2.link"
                @click="listClose($event)"
                class="px-0"
              >
                <v-list-item-content>
                  <div class="d-flex align-items-center pa-2">
                    <span
                      class="v-list-item-mini text-warning"
                      v-text="child2.prefix"
                    ></span>
                    <v-list-item-title
                      v-text="child2.title"
                      class="ms-6 text-warning"
                    ></v-list-item-title>
                  </div>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>

      <hr
        class="horizontal my-4"
        :class="sidebarTheme === 'dark' ? 'light' : 'dark'"
      />

      <h5
        class="
          text-uppercase text-caption
          ls-0
          font-weight-bolder
          p-0
          mx-4
          mt-4
          mb-2
          ps-2
          d-none-mini
          white-space-nowrap
        "
        :class="sidebarTheme === 'dark' ? 'text-warning' : 'text-default'"
      >
          {{ $t("Docs") }}
      </h5>
      <v-list-item-group>
        <div v-for="(item, i) in itemsDocs" :key="i">
          <v-list-item
            link
            :to="item.link"
            class="pb-1 mx-2 no-default-hover py-2"
            :ripple="false"
            active-class="item-active"
            v-if="!item.external"
          >
            <v-list-item-icon class="me-2 align-center">
              <i class="material-icons-round opacity-25">{{ item.action }}</i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="$t(item.title)"
                class="ms-1 text-warning"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item
            link
            :href="item.link"
            class="pb-1 mx-2 no-default-hover py-2"
            :ripple="false"
            active-class="item-active"
            v-if="item.external"
            target="_blank"
          >
            <v-list-item-icon class="me-2 align-center">
              <i class="material-icons-round opacity-10">{{ item.action }}</i>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                v-text="$t(item.title)"
                class="ms-1 text-warning"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list-item-group>
    </v-list>

    <v-card
      class="pa-0 border-radius-lg mt-7 mb-9 mx-4"
      :style="`background-image: url(${require('../../../../assets/img/curved-images/white-curved.jpeg')}); background-size: cover;`"
    >
      <span
        class="mask opacity-8 border-radius-lg"
        :class="`bg-gradient-` + sidebarColor"
      ></span>
    </v-card>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "drawer",
  props: {
    drawer: {
      type: Boolean,
      default: null,
    },
    sidebarColor: {
      type: String,
      default: "default",
    },
    sidebarTheme: {
      type: String,
      default: "transparent",
    },
    userProfile: Object,
    userGroups: Object,
    userRoles: Object,
  },
  data: () => ({
    mini: false,
    togglerActive: false,
    thirdLevelSimple: [
      "Third level menu",
      "Just another link",
      "One last link",
    ],
    userInfo: [
      {
        title: "MyProfile",
        prefix: "MP",
        path: "/profile/overview",
      },
      {
        title: "Setting",
        prefix: "S",
        path: "/profile/settings",
      },
      {
        title: "Logout",
        prefix: "L",
      },
    ],
    itemsDocs: [],
    itemCourant: [
      {
        action: "public",
        link: "/courant",
        title: "Courant",
        external: false,
      },
    ],
    itemPosts: [
      {
        action: "article",
        link: "/article",
        title: "Article",
        external: false,
      },
    ],
    itemLibrary: [
      {
        action: "book",
        link: "/library",
        title: "Library",
        external: false,
      },
    ],
    itemQuiz: [
      {
        action: "quiz",
        link: "/quiz",
        title: "Quiz",
        external: false,
      },
    ],
    items: [],
    admin: [
      {
        action: "admin",
        active: false,
        title: "Administration",
        items: [
          {
            title: "Courant",
            prefix: "C",
            link: "/admin/courant",
          },
          {
            title: "Users",
            prefix: "U",
            link: "/admin/users",
          },
          {
            title: "CombineUsers",
            prefix: "C",
            link: "/admin/combineUsers",
          },
          {
            title: "CombineOffices",
            prefix: "C",
            link: "/admin/combineOffices",
          },
          {
            title: "Groups",
            prefix: "G",
            link: "/admin/groups",
          },
          {
            title: "Offices",
            prefix: "O",
            link: "/admin/offices",
          },
        ],
      },
    ],
    itemsPages: [],
  }),
  methods: {
    listClose(event) {
      let items;
      let headers;
      let groups;
      let currentEl;

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        )
      ) {
        items = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link.item-active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        )
      ) {
        headers = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group__header.v-list-item--active"
        );
      }

      if (
        document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        )
      ) {
        groups = document.querySelectorAll(
          ".mb-0.v-list-item.v-list-item--link .v-list-group .v-list .v-list-group.v-list-group--active, .mb-0.v-list-item.v-list-item--link .v-list-group.v-list-group--active"
        );
      }

      if (
        event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        )
      ) {
        currentEl = event.target.closest(
          ".mb-0.v-list-item.v-list-item--link .v-list-item__content.ms-6 .v-list-group"
        );
      }

      if (items != null) {
        for (var i = 0; i < items.length; i++) {
          items[i].classList.remove("item-active");
        }
      }

      if (headers != null) {
        for (var j = 0; j < headers.length; j++) {
          headers[j].classList.remove(
            "v-list-item--active",
            "item-active",
            "primary--text"
          );
          headers[j].setAttribute("aria-expanded", false);
        }
      }

      if (groups != null) {
        for (var k = 0; k < groups.length; k++) {
          groups[k].classList.remove("v-list-group--active", "primary--text");
        }
      }

      if (event.target.closest(".mb-0.v-list-item.v-list-item--link")) {
        event.target
          .closest(".mb-0.v-list-item.v-list-item--link")
          .classList.add("item-active");
      }

      if (currentEl != null) {
        currentEl
          .querySelector(".v-list-group__header")
          .classList.add("v-list-item--active", "item-active");
      }
    },

    getInitials(string) {
      var names = string.split(" "),
        initials = names[0].substring(0, 1).toUpperCase();

      if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
      }
      return initials;
    },
  },
  computed: {
    dashboard() {
      return "/";
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.userRoles) {
        return this.userRoles.includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.userRoles) {
        return this.userRoles.includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
};
</script>
