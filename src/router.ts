import Vue from "vue";
import VueRouter from "vue-router";
import Root from "./components/Root.vue";
import RequestPermission from "./components/RequestPermission/index";
import Password from "./components/Password.vue";
import SelectReader from "./components/SelectReader.vue";
import InsertCard from "./components/InsertCard.vue";
import NotFound from "./components/NotFound.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", component: Root },
  { path: "/get-auth-cert", component: RequestPermission.GetAuthCert },
  { path: "/sign-with-auth", component: RequestPermission.SignWithAuth },
  { path: "/password", component: Password },
  { path: "/select-reader", component: SelectReader },
  { path: "/insert-card", component: InsertCard },
  { path: "/404", component: NotFound }
];

const router = new VueRouter({
  routes,
  mode: "abstract"
});
export default router;
