<template>
  <div>
    <v-progress-linear
      class="mx-auto"
      v-model="power"
      color="orange"
      height="70"
      rounded
    >
      <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br />
  </div>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  data: () => ({
    userProfile: [],
    power: 30,
  }),
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        if (this.userProfile.gender) {
          this.power = this.power + 5;
        }
        if (this.userProfile.description) {
          this.power = this.power + 5;
        }
        if (this.userProfile.phone) {
          this.power = this.power + 5;
        }
        if (this.userProfile.birthday) {
          this.power = this.power + 5;
        }
        if (this.userProfile.job) {
          this.power = this.power + 5;
        }
        if (this.userProfile.adhesionId) {
          this.power = this.power + 5;
        }
        if (this.userProfile.adhesion2023) {
          this.power = this.power + 5;
        }
        if (this.userProfile.adhesionDate) {
          this.power = this.power + 5;
        }
      },
      (error) => {
        this.$store.dispatch("auth/logout");
        this.$router.push("/login");
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
