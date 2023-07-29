import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "../views/Layout/DashboardLayout.vue";
import HomeLayout from "../views/Platform/Layout/DashboardLayout.vue";
import ProfileLayout from "../views/Layout/ProfileLayout.vue";
import DashboardLayoutVr from "../views/Layout/DashboardLayoutVr.vue";
import PageLayout from "../views/Layout/PageLayout";
import AuthBasicLayout from "../views/Layout/AuthBasicLayout";
import AuthLayout from "../views/Platform/Layout/AuthBasicLayout";
import AuthCoverLayout from "../views/Layout/AuthCoverLayout";
import AuthIllustrationLayout from "../views/Layout/AuthIllustrationLayout";

const Home = () => import("../views/Platform/Home.vue");
// Dashboard pages
const Dashboard = () => import("../views/Dashboard/Dashboard.vue");
const Discover = () => import("../views/Dashboard/Discover.vue");
const Automotive = () => import("../views/Dashboard/Automotive.vue");
const Sales = () => import("../views/Dashboard/Sales.vue");
const SmartHome = () => import("../views/Dashboard/SmartHome.vue");
const VrDefault = () => import("../views/Dashboard/VrDefault.vue");
const VrInfo = () => import("../views/Dashboard/VrInfo.vue");
const Crm = () => import("../views/Dashboard/Crm.vue");
const GettingStarted = () => import("../views/Dashboard/GettingStarted.vue");

// Pages
const Pricing = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Pricing.vue");
const Rtl = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Rtl.vue");
const ProfileOverview = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Profile/ProfileOverview.vue"
  );

const Post = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Article/Article.vue"
  );

const Profile = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Profile/ProfileOverview.vue"
  );

const Quiz = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Quiz/Index.vue");

const Courant = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Courant/Index.vue");
const Library = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Library/Index.vue");

const BureauPolitic = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Office/Department/BureauPolitic.vue"
  );

const BureauExectif = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Office/Department/BureauExectuif.vue"
  );
const BureauRegional = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Office/Department/BureauRegional.vue"
  );

const BureauLocal = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Office/Department/BureauLocal.vue"
  );

const ConseilNational = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Office/Department/ConseilNational.vue"
  );

const CourantManagement = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Admin/Courant.vue");

const UserManagement = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Admin/User.vue");

const CombineUser = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Admin/CombineUser.vue"
  );

const CombineOffice = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Admin/CombineOffice.vue"
  );

const GroupManagement = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Admin/Group.vue");

const PoliticOfficeManagement = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Admin/PoliticOffice.vue"
  );

const ExecutifOfficeManagement = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Admin/ExecutifOffice.vue"
  );

const NationalCouncilManagement = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Admin/NationalCouncil.vue"
  );

const ComitteeManagement = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Admin/Comittee.vue");

const OfficeManagement = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Admin/Office.vue");

const ProfileSetting = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Platform/Profile/Settings.vue"
  );

const Messages = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Profile/Messages.vue");
const Projects = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Profile/Projects.vue");
const Reports = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Users/Reports.vue");
const NewUser = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Users/NewUser.vue");
const Settings = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Settings.vue");
const Billing = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Billing.vue");
const Invoice = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Account/Invoice.vue");
const Timeline = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Projects/Timeline.vue");
const Charts = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Charts.vue");
const Alerts = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Alerts.vue");
const Notifications = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Pages/Notifications.vue");
const SignUpBasic = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Basic.vue"
  );

const Login = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Auth/Login.vue");

const Register = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Platform/Auth/Register.vue");

const SignUpCover = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Cover.vue"
  );
const SignUpIllustration = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Pages/Authentication/SignUp/Illustration.vue"
  );

// Applications
const Kanban = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Kanban.vue");
const Wizard = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Wizard.vue");
const Datatables = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Datatables.vue");
const Calendar = () =>
  import(/* webpackChunkName: "pages" */ "@/views/Applications/Calendar.vue");

// Ecommerce
const NewProduct = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/NewProduct.vue"
  );
const EditProduct = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/EditProduct.vue"
  );
const ProductPage = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Products/ProductPage.vue"
  );
const OrderList = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Orders/OrderList.vue"
  );
const OrderDetails = () =>
  import(
    /* webpackChunkName: "pages" */ "@/views/Ecommerce/Orders/OrderDetails.vue"
  );

Vue.use(VueRouter);

let vrPages = {
  path: "/",
  component: DashboardLayoutVr,
  name: "Vr",
  children: [
    {
      path: "/pages/dashboards/vr/vr-default",
      name: "VrDefault",
      component: VrDefault,
      meta: {
        groupName: "Dashboards",
      },
    },
    {
      path: "/pages/dashboards/vr/vr-info",
      name: "VrInfo",
      component: VrInfo,
      meta: {
        groupName: "Dashboards",
      },
    },
  ],
};

let profilePages = {
  path: "/",
  component: ProfileLayout,
  name: "Profile",
  children: [
    {
      path: "/pages/pages/profile/overview",
      name: "ProfileOverview",
      component: ProfileOverview,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/profile/messages",
      name: "Messages",
      component: Messages,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/profile/projects",
      name: "Project",
      component: Projects,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let admin = {
  path: "/",
  component: HomeLayout,
  name: "Admin",
  children: [
    {
      path: "/admin/courant",
      name: "courant",
      component: CourantManagement,
      meta: {
        groupName: "CourantManagement",
      },
    },
    {
      path: "/admin/users",
      name: "user",
      component: UserManagement,
      meta: {
        groupName: "UserManagement",
      },
    },
    {
      path: "/admin/combineUsers",
      name: "combineUser",
      component: CombineUser,
      meta: {
        groupName: "CombineUser",
      },
    },
    {
      path: "/admin/combineOffices",
      name: "combineOffice",
      component: CombineOffice,
      meta: {
        groupName: "CombineOffice",
      },
    },
    {
      path: "/admin/groups",
      name: "group",
      component: GroupManagement,
      meta: {
        groupName: "GroupManagement",
      },
    },
    {
      path: "/admin/offices",
      name: "office",
      component: OfficeManagement,
      meta: {
        groupName: "OfficeManagement",
      },
    },
    {
      path: "/admin/politicOffices",
      name: "politicOffices",
      component: PoliticOfficeManagement,
      meta: {
        groupName: "PoliticOfficeManagement",
      },
    },
    {
      path: "/admin/executifOffices",
      name: "executifOffices",
      component: ExecutifOfficeManagement,
      meta: {
        groupName: "ExecutifOfficeManagement",
      },
    },
    {
      path: "/admin/nationalCouncil",
      name: "nationalCouncil",
      component: NationalCouncilManagement,
      meta: {
        groupName: "NationalCouncilManagement",
      },
    },
    {
      path: "/admin/comittee",
      name: "comittee",
      component: ComitteeManagement,
      meta: {
        groupName: "ComitteeManagement",
      },
    },
  ],
};

let profile = {
  path: "/",
  component: HomeLayout,
  name: "Profile",
  children: [
    {
      path: "/profile/overview",
      name: "ProfileOverview",
      component: Profile,
      meta: {
        groupName: "Profile",
      },
    },
    {
      path: "/profile/settings",
      name: "Messages",
      component: ProfileSetting,
      meta: {
        groupName: "Profile",
      },
    },
  ],
};

let office = {
  path: "/",
  component: HomeLayout,
  name: "Office",
  children: [
    {
      path: "/bureau/politics",
      name: "BureauPolitique",
      component: BureauPolitic,
      meta: {
        groupName: "Office",
      },
    },
    {
      path: "/bureau/executives",
      name: "BureauExecutive",
      component: BureauExectif,
      meta: {
        groupName: "Office",
      },
    },
    {
      path: "/bureau/regionals",
      name: "BureauRegional",
      component: BureauRegional,
      meta: {
        groupName: "Office",
      },
    },
    {
      path: "/bureau/locales",
      name: "BureauLocal",
      component: BureauLocal,
      meta: {
        groupName: "Office",
      },
    },
    {
      path: "/conseil/national",
      name: "ConseilNational",
      component: ConseilNational,
      meta: {
        groupName: "Office",
      },
    },
  ],
};

let article = {
  path: "/",
  component: HomeLayout,
  name: "Article",
  children: [
    {
      path: "/article",
      name: "Article",
      component: Post,
      meta: {
        groupName: "Article",
      },
    },
  ],
};
let courant = {
  path: "/",
  component: HomeLayout,
  name: "Courant",
  children: [
    {
      path: "/courant",
      name: "Courant",
      component: Courant,
      meta: {
        groupName: "Courant",
      },
    },
  ],
};
let library = {
  path: "/",
  component: HomeLayout,
  name: "Library",
  children: [
    {
      path: "/library",
      name: "Library",
      component: Library,
      meta: {
        groupName: "Library",
      },
    },
  ],
};

let quiz = {
  path: "/",
  component: HomeLayout,
  name: "Quiz",
  children: [
    {
      path: "/quiz",
      name: "Quiz",
      component: Quiz,
      meta: {
        groupName: "Quiz",
      },
    },
  ],
};

let userPages = {
  path: "/",
  component: DashboardLayout,
  name: "Users",
  children: [
    {
      path: "/pages/pages/users/reports",
      name: "Reports",
      component: Reports,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/users/new-user",
      name: "NewUser",
      component: NewUser,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let accountPages = {
  path: "/",
  component: DashboardLayout,
  name: "Account",
  children: [
    {
      path: "/pages/pages/account/settings",
      name: "Settings",
      component: Settings,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/account/billing",
      name: "Billing",
      component: Billing,
      meta: {
        groupName: "Pages",
      },
    },
    {
      path: "/pages/pages/account/invoice",
      name: "Invoice",
      component: Invoice,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let projectsPages = {
  path: "/",
  component: DashboardLayout,
  name: "Projects",
  children: [
    {
      path: "/pages/pages/projects/timeline",
      name: "Timeline",
      component: Timeline,
      meta: {
        groupName: "Pages",
      },
    },
  ],
};

let applicationPages = {
  path: "/",
  component: DashboardLayout,
  name: "Application",
  children: [
    {
      path: "/pages/applications/kanban",
      name: "Kanban",
      component: Kanban,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/wizard",
      name: "Wizard",
      component: Wizard,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/datatables",
      name: "Datatables",
      component: Datatables,
      meta: {
        groupName: "Applications",
      },
    },
    {
      path: "/pages/applications/calendar",
      name: "Calendar",
      component: Calendar,
      meta: {
        groupName: "Applications",
      },
    },
  ],
};

let pricingPage = {
  path: "/",
  component: PageLayout,
  name: "Pricing Page",
  children: [
    {
      path: "/pages/pages/pricing-page",
      name: "Pricing",
      component: Pricing,
    },
  ],
};

let authBasicPages = {
  path: "/",
  component: AuthBasicLayout,
  name: "Authentication Basic",
  children: [
    {
      path: "/pages/authentication/signup/basic",
      name: "SignUpBasic",
      component: SignUpBasic,
    },
  ],
};

let login = {
  path: "/",
  component: AuthLayout,
  name: "Authentication Basic",
  children: [
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
};

let register = {
  path: "/",
  component: AuthLayout,
  name: "Authentication Basic",
  children: [
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
  ],
};

let authCoverPages = {
  path: "/",
  component: AuthCoverLayout,
  name: "Authentication Cover",
  children: [
    {
      path: "/pages/authentication/signup/cover",
      name: "SignUpCover",
      component: SignUpCover,
    },
  ],
};

let authIllustrationPages = {
  path: "/",
  component: AuthIllustrationLayout,
  name: "Authentication Illustration",
  children: [
    {
      path: "/pages/authentication/signup/illustration",
      name: "SignUpIllustration",
      component: SignUpIllustration,
    },
  ],
};

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: HomeLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "pages/dashboards/analytics",
        name: "Analytics",
        component: Dashboard,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "pages/dashboards/discover",
        name: "Discover",
        component: Discover,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/smart-home",
        name: "SmartHome",
        component: SmartHome,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/crm",
        name: "Crm",
        component: Crm,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/dashboards/automotive",
        name: "Automotive",
        component: Automotive,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/dashboards/sales",
        name: "Sales",
        component: Sales,
        meta: {
          groupName: "Dashboards",
        },
      },
      {
        path: "/pages/pages/rtl",
        name: "RTL",
        component: Rtl,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/charts",
        name: "Charts",
        component: Charts,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/alerts",
        name: "Alerts",
        component: Alerts,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/pages/notifications",
        name: "Notifications",
        component: Notifications,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "getting-started",
        name: "Getting Started",
        component: GettingStarted,
        meta: {
          groupName: "Components",
        },
      },
      {
        path: "/pages/ecommerce/products/new-product",
        name: "NewProduct",
        component: NewProduct,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/products/edit-product",
        name: "EditProduct",
        component: EditProduct,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/products/product-page",
        name: "ProductPage",
        component: ProductPage,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/orders/list",
        name: "OrderList",
        component: OrderList,
        meta: {
          groupName: "Ecommerce",
        },
      },
      {
        path: "/pages/ecommerce/orders/details",
        name: "OrderDetails",
        component: OrderDetails,
        meta: {
          groupName: "Ecommerce",
        },
      },
    ],
  },
  pricingPage,
  profilePages,
  applicationPages,
  userPages,
  accountPages,
  projectsPages,
  vrPages,
  authBasicPages,
  authCoverPages,
  authIllustrationPages,
  login,
  register,
  profile,
  admin,
  courant,
  article,
  office,
  library,
  quiz,
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
});

export default router;
