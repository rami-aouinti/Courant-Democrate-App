<template>
  <v-container fluid class="py-6">
    <v-row>
      <v-col
        v-for="item in items"
        :key="item.id"
        lg="6"
        md="6"
        cols="12"
        class="position-relative"
      >
        <v-card class="h-100" dark>
          <div class="px-4 pt-4">
            <h6 class="mb-0 text-h6 text-warning">{{ item.name }}</h6>
          </div>
          <div class="px-4 py-4">
            <p class="text-sm font-weight-light text-body">
              {{ item.description }}
            </p>
            <hr class="horizontal dark mt-6 mb-3" />
          </div>
        </v-card>
        <hr class="vertical dark" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import AdminService from "@/services/admin.service";

export default {
  name: "Profile-Overview",
  data: function () {
    return {
      accountSettings: [
        {
          switchState: true,
          text: "Email me when someone follows me",
        },
        {
          switchState: false,
          text: "Email me when someone answers on...",
        },
        {
          switchState: true,
          text: "Email me when someone mentions me...",
        },
      ],
      applicationSettings: [
        {
          switchState: false,
          text: "New launches and projects",
        },
        {
          switchState: true,
          text: "Monthly product updates",
        },
        {
          switchState: false,
          text: "Subscribe to newsletter",
        },
      ],
      conversations: [
        {
          avatar: require("@/assets/img/kal-visuals-square.jpg"),
          user: "Sophie B.",
          message: "Hi! I need more information..",
        },
        {
          avatar: require("@/assets/img/marie.jpg"),
          user: "Anne Marie",
          message: "Awesome work, can you..",
        },
        {
          avatar: require("@/assets/img/ivana-square.jpg"),
          user: "Ivanna",
          message: "About files I can..",
        },
        {
          avatar: require("@/assets/img/team-4.jpg"),
          user: "Peterson",
          message: "Have a great afternoon..",
        },
        {
          avatar: require("@/assets/img/team-3.jpg"),
          user: "Nick Daniel",
          message: "Hi! I need more information..",
        },
      ],
      cards: [
        {
          image: require("@/assets/img/home-decor-1.jpg"),
          title: "Project #2",
          style: "Modern",
          description:
            "As Uber works through a huge amount of internal management turmoil.",
          avatars: [
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
          ],
        },
        {
          image: require("@/assets/img/home-decor-2.jpg"),
          title: "Project #1",
          style: "Scandinavian",
          description:
            "Music is something that every person has his or her own specific opinion about.",
          avatars: [
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
          ],
        },
        {
          image: require("@/assets/img/home-decor-3.jpg"),
          title: "Project #3",
          style: "Minimalist",
          description:
            "Different people have different taste, and various types of music.",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
          ],
        },
        {
          image: require("@/assets/img/home-decor-4.jpg"),
          title: "Project #4",
          style: "Gothic",
          description:
            "Why would anyone pick blue over pink? Pink is obviously a better color.",
          avatars: [
            {
              image: require("@/assets/img/team-4.jpg"),
              name: "Peterson",
            },
            {
              image: require("@/assets/img/team-3.jpg"),
              name: "Nick Daniel",
            },
            {
              image: require("@/assets/img/team-2.jpg"),
              name: "Ryan Milly",
            },
            {
              image: require("@/assets/img/team-1.jpg"),
              name: "Elena Morison",
            },
          ],
        },
      ],
      items: [],
    };
  },
  mounted() {
    AdminService.getItems("data/courant").then(
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
