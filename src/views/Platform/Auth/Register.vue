<template>
  <v-row class="align-center d-flex h-100">
    <v-col lg="4" md="7" class="mx-auto">
      <v-card
        class="
          card-shadow
          bg-gradient-default
          border-radius-xl
          py-1
          elevation-20
        "
      >
        <div
          class="
            card-padding
            text-center
            mt-n7
            bg-gradient-default
            shadow-default
            border-radius-lg
            mx-4
            elevation-20
          "
        >
          <h4 class="text-h4 text-warning font-weight-bold">التيار الديمقراطي</h4>
          <v-row class="mt-3">
            <v-col cols="2" class="ms-auto d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-facebook-f text-warning text-lg"></i>
              </v-btn>
            </v-col>
            <v-col cols="2" class="d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-github text-warning text-lg"></i>
              </v-btn>
            </v-col>
            <v-col cols="2" class="me-auto d-flex justify-center">
              <v-btn
                icon
                outlined
                rounded
                color="transparent"
                class="text-center border-radius-md"
              >
                <i class="fab fa-google text-warning text-lg"></i>
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="mt-2 position-relative text-center">
          <p
            class="
              text-sm
              font-weight-bold
              mb-2
              text-warning text-border
              d-inline
              z-index-2
              bg-white
              px-3
            "
          >
            or
          </p>
        </div>
        <div class="card-padding">
          <form name="form" @submit.prevent="handleRegister">
            <v-text-field
              label="Name"
              placeholder="Name"
              color="orange"
              required
              class="font-size-input input-style text-warning"
              v-model="user.username"
              type="text"
              name="username"
            ></v-text-field>

            <v-text-field
              label="Email"
              placeholder="Email"
              color="orange"
              required
              class="font-size-input input-style text-warning"
              v-model="user.email"
              type="email"
              name="username"
            ></v-text-field>

            <v-text-field
              label="Password"
              placeholder="Password"
              color="orange"
              required
              type="password"
              class="font-size-input input-style text-warning"
              v-model="user.password"
              name="password"
            ></v-text-field>

            <v-checkbox
              v-model="checkbox"
              color="orange"
              :ripple="false"
              class="ma-0 checkbox-custom checkbox-thinner"
              hide-details
            >
              <template v-slot:label>
                <span class="text-body text-sm ls-0"
                  >I agree the
                  <a
                    href="javascript:;"
                    class="text-warning font-weight-bolder text-decoration-none"
                    >Terms and Conditions</a
                  ></span
                >
              </template>
            </v-checkbox>

            <button
              class="
                font-weight-bold
                text-uppercase text-warning
                btn-warning
                bg-gradient-default
                py-2
                px-6
                me-2
                mt-6
                mb-2
                w-100
                rounded
                evaluation-20
                height-43
              "
              :disabled="loading"
            >
              <span
                v-show="loading"
                class="spinner-border spinner-border-sm"
              ></span>
              <span>Sign Up</span>
            </button>
            <p class="text-sm text-body text-warning mt-3 mb-0">
              Already have an account?
              <a
                href="/#/login"
                class="text-warning text-decoration-none font-weight-bolder"
                >Sign in</a
              >
            </p>
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </form>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import User from "../../../models/userRegister";

export default {
  name: "Register",
  data() {
    return {
      checkbox: false,
      user: new User("", "", ""),
      loading: false,
      message: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password && this.user.email) {
          this.$store.dispatch("auth/register", this.user).then(
            () => {
              this.$router.push("/login");
            },
            (error) => {
              this.loading = false;
              this.message =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
            }
          );
        }
      });
    },
  },
};
</script>
