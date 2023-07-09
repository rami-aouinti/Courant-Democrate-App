<template>
  <v-card class="card-shadow border-radius-xl mt-6" id="basic">
    <div class="px-6 py-6">
      <h5 class="text-h5 font-weight-bold text-typo">Basic Info</h5>
    </div>
    <div class="px-6 pb-6 pt-0">
      <v-row>
        <v-col md="4" cols="12">
          <label class="text-sm text-body ms-1">Image Profile</label>
          <dropzone v-model="fileSingle"></dropzone>
        </v-col>
        <v-col md="8" cols="12">
          <label class="text-sm text-body ms-1">Description Profile</label>
          <html-editor :value="this.userProfile.description"></html-editor>
        </v-col>
        <v-col cols="12">
          <v-select
            :items="gender"
            label="Male"
            color="#e91e63"
            class="font-size-input input-style"
            single-line
            height="36"
            v-model="userProfile.gender"
          >
          </v-select>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="#e91e63"
            label="First Name"
            placeholder="Alex"
            v-model="userProfile.firstName"
            class="font-size-input input-style"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            color="#e91e63"
            label="Last Name"
            placeholder="Thompson"
            class="font-size-input input-style"
            v-model="userProfile.lastName"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="12">
          <v-row>
            <v-col cols="5">
              <label class="text-sm text-body">Birth Date</label>
              <v-select
                :items="months"
                label="February"
                color="#e91e63"
                class="font-size-input input-style"
                single-line
                height="36"
                v-model="userProfile.month"
              >
              </v-select>
            </v-col>
            <v-col sm="4" cols="3">
              <v-select
                :items="days"
                label="1"
                color="#e91e63"
                class="font-size-input input-style mt-7"
                single-line
                height="36"
                v-model="userProfile.day"
              >
              </v-select>
            </v-col>
            <v-col sm="3" cols="4">
              <v-select
                :items="years"
                label="2022"
                color="#e91e63"
                class="font-size-input input-style mt-7"
                single-line
                height="36"
                v-model="userProfile.year"
              >
              </v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Email"
            placeholder="example@email.com"
            class="font-size-input input-style"
            v-model="userProfile.email"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Confirmation Email"
            placeholder="example@email.com"
            class="font-size-input input-style"
            v-model="userProfile.confirm"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Your Location"
            placeholder="Sydney, A"
            class="font-size-input input-style"
            v-model="userProfile.location"
          >
          </v-text-field>
        </v-col>
        <v-col cols="6" class="py-0">
          <v-text-field
            color="#e91e63"
            label="Phone Number"
            placeholder="+40 735 631 620"
            class="font-size-input input-style"
            v-model="userProfile.phone"
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <div class="d-sm-flex align-center">
          <v-btn
            @click="save"
            elevation="0"
            :ripple="false"
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
            >Update Information</v-btn
          >
        </div>
      </v-row>
    </div>
  </v-card>
</template>
<script>
import UserService from "@/services/user.service";
import Dropzone from "@/views/Ecommerce/Products/Widgets/Dropzone.vue";
import HtmlEditor from "@/views/Platform/Profile/Widgets/HtmlEditor.vue";

export default {
  name: "basic-info",
  components: { HtmlEditor, Dropzone },
  data() {
    return {
      fileSingle: [],
      gender: ["Female", "Male"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      days: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      years: [
        "2021",
        "2020",
        "2019",
        "2018",
        "2017",
        "2016",
        "2015",
        "2014",
        "2013",
        "2012",
        "2011",
        "2010",
        "2009",
        "2008",
        "2007",
        "2006",
        "2005",
        "2004",
        "2003",
        "2002",
        "2001",
        "2000",
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",
        "1991",
        "1990",
        "1989",
        "1988",
        "1987",
        "1986",
        "1985",
        "1984",
        "1983",
        "1982",
      ],
      languages: ["English", "French", "Spanish", "Deutsch", "Arabic"],
      skills: ["vuejs", "angular", "react"],
      userProfile: [],
      user: {},
    };
  },
  methods: {
    save() {
      this.user.id = this.userProfile.id;
      this.user.firstName = this.userProfile.firstName;
      this.user.lastName = this.userProfile.lastName;
      this.user.email = this.userProfile.email;
      this.user.gender = this.userProfile.gender;
      this.user.phone = this.userProfile.phone;
      if (
        this.userProfile.day &&
        this.userProfile.month &&
        this.userProfile.year
      ) {
        this.user.birthday = this.getBirthdayDate(
          this.userProfile.day,
          this.userProfile.month,
          this.userProfile.year
        );
      }

      UserService.updateProfile(this.user).then(
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
    },
    getBirthdayDate(day, month, year) {
      return day + "/" + this.getMonthNumberFromName(month) + "/" + year;
    },
    getMonthNumberFromName(monthName) {
      return new Date(`${monthName} 1, 2022`).getMonth() + 1;
    },
  },
  mounted() {
    UserService.getProfile().then(
      (response) => {
        this.userProfile = response.data;
        var birthday = new Date(this.userProfile.birthday);
        const month = birthday.toLocaleString("default", { month: "long" });
        this.userProfile.day = birthday.getDate().toString();
        this.userProfile.month = month;
        this.userProfile.year = birthday.getFullYear().toString();
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getRoles().then(
      (response) => {
        this.userRoles = response.data;
      },
      (error) => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
    UserService.getGroups().then(
      (response) => {
        this.userGroups = response.data;
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
