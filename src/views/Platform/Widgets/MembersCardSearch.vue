<template>
  <v-card class="card-shadow mb-6">
    <div class="card-header-padding card-border-bottom">
      <p class="font-weight-600 text-h3 text-typo mb-0">Team Members</p>
    </div>
    <div class="card-border-bottom card-padding">
      <v-text-field
        hide-details
        class="input-style font-size-input text-light-input placeholder-light"
        dense
        flat
        filled
        solo
        height="43"
        :placeholder="$t('Search')"
      >
        <template slot="prepend-inner">
          <v-icon color="#adb5bd" size=".875rem">fas fa-search</v-icon>
        </template>
      </v-text-field>
    </div>
    <v-card-text class="card-padding py-2">
      <v-list class="py-0">
        <v-list-item
          v-for="(chat, index) in members"
          :key="chat.title"
          class="px-0 py-4"
          :class="{ 'border-bottom': index != members.length - 1 }"
        >
          <v-list-item-avatar :size="48" class="my-0 me-5">
            <v-img :alt="`${chat.title} avatar`" :src="chat.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              v-text="chat.title"
              class="text-typo text-h4 font-weight-600 mb-2"
            ></v-list-item-title>
            <span class="text-body">
              <span :class="chat.color" class="me-1">●</span>
              {{ chat.status }}
            </span>
          </v-list-item-content>

          <v-btn
            elevation="0"
            :ripple="false"
            class="font-weight-600 text-capitalize btn-primary bg-primary"
            small
            >Add
          </v-btn>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "members-card-search",
  data() {
    return {
      members: [
        {
          avatar: require("@/assets/img/team-1.jpg"),
          title: "John Michael",
          status: "Online",
          color: "text-success",
        },
        {
          avatar: require("@/assets/img/team-2.jpg"),
          title: "Alex Smith",
          status: "In a Meeting",
          color: "text-warning",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          title: "Samantha Ivy",
          status: "Offline",
          color: "text-danger",
        },
        {
          avatar: require("@/assets/img/team-4.jpg"),
          title: "Ali Connors",
          status: "Online",
          color: "text-success",
        },
      ],
    };
  },
};
</script>
