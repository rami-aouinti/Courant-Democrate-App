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
        <div class="" >
        <v-img
          src="@/assets/img/courant.png"
          class="navbar-brand-img  rounded-3 elevation-20 mx-auto mt-n13"
          width="130"
        ></v-img>

          <h4 class="text-h4 text-warning font-weight-bold"></h4>
          <v-row class="mt-3">
            <!---<v-col cols="2" class="ms-auto d-flex justify-center">
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
            </v-col>-->
          </v-row>
        </div>
        <div class="mt-6 position-relative text-center">
          <p
            class="
             
              text-lg
              font-weight-bold
              mb-2
              text-warning text-border
              d-inline
              z-index-2
              bg-white
              px-3
            "
          >وعي - إرادة - إنجاز</p>
        </div>
        <div class="card-padding">
          <form name="form" @submit.prevent="handleLogin">
            <v-text-field
              label="البريد الإلكتروني"
              placeholder="البريد الإلكتروني"
              color="orange"
              required
              class="font-size-input input-style text-warning"
              v-model="user.username"
              type="text"
              name="username"
            ></v-text-field>

            <v-text-field
              label="كلمة المرور"
              placeholder="كلمة المرور"
              color="orange"
              required
              type="password"
              class="font-size-input input-style text-warning"
              v-model="user.password"
              name="password"
            ></v-text-field>

            <button
              class="
                font-weight-bold
                text-uppercase text-warning
                btn-default
                bg-gradient-default
                py-2
                px-6
                
                mt-6
                mb-2
                w-100
                rounded
                evaluation-0
                height-43
              "
              :disabled="loading"
            >
            <span>تسجيل الدخول</span>
            <span
              v-show="loading"
              class="spinner-border spinner-border-sm text-warning pr-2"
            ></span>

            </button>
            <!--<p class="text-sm text-body mt-3 mb-0">
              Already have an account?
              <a
                href="/#/register"
                class="text-warning text-decoration-none font-weight-bolder"
                >Sign up</a
              >
            </p>-->
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                بيانات الدخول غير صحيحة
              </div>
            </div>
          </form>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import User from "../../../models/user";

export default {
  name: "Login",
  data() {
    return {
      checkbox: false,
      user: new User("", ""),
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
    handleLogin() {
      this.loading = true;
      this.$validator.validateAll().then((isValid) => {
        if (!isValid) {
          this.loading = false;
          return;
        }

        if (this.user.username && this.user.password) {
          this.$store.dispatch("auth/login", this.user).then(
            () => {
              this.$router.push("/");
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
