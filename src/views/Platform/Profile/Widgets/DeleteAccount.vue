<template>
  <v-card class="card-shadow border-radius-xl mt-9" id="delete">
    <v-row>
      <v-col lg="6">
        <div class="px-6 py-6">
          <h5 class="text-h5 font-weight-bold text-typo mb-2">
            {{ $t("DeleteAccount") }}
          </h5>
          <p class="text-sm text-body font-weight-light">
            {{
              $t("OnceYouDeleteYourAccountThereIsNoGoingBackPleaseBeCertain")
            }}
          </p>
        </div>
      </v-col>
      <v-col lg="6" class="my-auto">
        <div class="px-6 pt-0">
          <div class="d-sm-flex align-center ms-auto">
            <v-btn
              :ripple="false"
              elevation="0"
              color="#fff"
              class="font-weight-bolder btn-outline-secondary py-5 px-6 ms-auto"
              small
            >
              {{ $t("Deactivate") }}
            </v-btn>
            <v-btn
              :ripple="false"
              elevation="0"
              color="#fff"
              class="
                font-weight-bolder
                btn-danger
                bg-gradient-danger
                py-5
                px-6
                ms-2
              "
              small
            >
              {{ $t("DeleteAccount") }}
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
export default {
  name: "delete-account",
};
</script>
