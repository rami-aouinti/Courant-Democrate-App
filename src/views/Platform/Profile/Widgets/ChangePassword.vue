<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="change">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-warning">
        {{ $t("ChangePassword") }}
      </h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col cols="12">
          <v-text-field
            :label="$t('CurrentPassword')"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="oldPassword"
          ></v-text-field>
          <v-text-field
            :label="$t('NewPassword')"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="newPassword"
          ></v-text-field>
          <v-text-field
            :label="$t('ConfirmNewPassword')"
            color="#e91e63"
            outlined
            dense
            type="password"
            class="font-size-input input-style py-0"
            v-model="newConfirmPassword"
          ></v-text-field>
        </v-col>
      </v-row>

      <h5 class="mt-5 mb-2 text-h5 font-weight-bold text-warning">
        {{ $t("PasswordRequirements") }}
      </h5>
      <p class="text-muted font-weight-light mb-2">
        {{ $t("PleaseFollowThisGuideForAStrongPassword") }}
      </p>
      <div class="d-sm-flex">
        <ul class="text-muted ps-6 mb-0">
          <li>
            <span class="text-sm">
              {{ $t("OneSpecialCharacters") }}
            </span>
          </li>
          <li>
            <span class="text-sm">
              {{ $t("MinCharacters") }}
            </span>
          </li>
          <li>
            <span class="text-sm">
              {{ $t("OneNumberAreRecommended") }}
            </span>
          </li>
          <li>
            <span class="text-sm">
              {{ $t("ChangeItOften") }}
            </span>
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
          {{ $t("UpdatePassword") }}
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
