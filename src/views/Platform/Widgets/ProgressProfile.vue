<template>
  <div>
    <v-col md="12" >
      <div class="row warningBox">
        <h5 class="titleWarningBox">
          {{$t("YourProfileProgress")}} , {{$t("CompleteYourProfile")}}
        </h5>

        <a href="#/profile/settings" class="btnWarningBox">
          <h5 class="font-weight-normal text-h5 mb-0 ">
              {{ $t('Setting') }} 
            </h5>
        </a>


        <!--<v-col lg="8" class="pt-0 mb-lg-0 mb-10">
          <v-progress-linear
            class="mx-auto"
            v-model="power"
            color="orange"
            height="30"
            rounded
          >
            <template v-slot:default="{ value }">
              <strong>{{ Math.ceil(value) }}%</strong>
            </template>

          </v-progress-linear>
        </v-col>
        <v-col lg="4" class="pt-0 mb-lg-0 mb-10">
          <v-btn text link depressed
          class="text-typo text-capitalize ls-0"
          :to="'profile/settings'">
            <h5 class="font-weight-normal text-warning text-h5 mt-7 mb-2 px-4">
              {{ $t('Setting') }}
            </h5>
          </v-btn>
        </v-col>-->
      </div>
      

      
    </v-col>
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
