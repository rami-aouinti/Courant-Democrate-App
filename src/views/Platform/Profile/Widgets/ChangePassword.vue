<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="change">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Change Password</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="Current password"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="oldPassword"
          ></v-text-field>
          <v-text-field
            label="New password"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="newPassword"
          ></v-text-field>
          <v-text-field
            label="Confirm new password"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="newConfirmPassword"
          ></v-text-field>
        </v-col>
      </v-row>

      <h5 class="mt-5 mb-2 text-h5 font-weight-bold text-typo">
        Password requirements
      </h5>
      <p class="text-muted font-weight-light mb-2">
        Please follow this guide for a strong password:
      </p>
      <div class="d-sm-flex">
        <ul class="text-muted ps-6 mb-0">
          <li>
            <span class="text-sm">One special characters</span>
          </li>
          <li>
            <span class="text-sm">Min 6 characters</span>
          </li>
          <li>
            <span class="text-sm">One number (2 are recommended)</span>
          </li>
          <li>
            <span class="text-sm">Change it often</span>
          </li>
        </ul>
        <v-btn
          color="#cb0c9f"
          class="
            font-weight-bolder
            btn-default
            bg-gradient-default
            py-4
            px-8
            ms-auto
            mt-sm-auto mt-4
          "
          small
          @click="save"
        >
          Update password
        </v-btn>
      </div>
    </div>
  </v-card>
</template>
<script>
import UserService from "@/services/user.service";

export default {
  name: "change-password",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      newConfirmPassword: "",
      passwords: {},
    };
  },
  methods: {
    save() {
      if (this.newPassword === this.newConfirmPassword) {
        this.passwords.oldPassword = this.oldPassword;
        this.passwords.newPassword = this.newPassword;
        UserService.changePassword(this.passwords).then(
          (response) => {
            console.log(response.data);
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
};
</script>
