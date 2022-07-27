import Vue from "vue";
import VueRouter from "vue-router";
import { TokenService } from "../services/storage.service";
import Login from "../pages/auth/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "First",
    redirect: "/login"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../pages/index.vue"),
    meta: {
      sa: true, // super admin
      private: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      public: true, // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../pages/auth/register.vue"),
    meta: {
      public: true, // Allow access to even if not logged in
      onlyWhenLoggedOut: true
    }
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../pages/profile/index.vue"),
    meta: {
      sa: true, //super admin
      private: true
    }
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () => import("../pages/contacts/index.vue"),
    meta: {
      sa: true, //super admin
      private: true
    }
  },
  //
  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const isPrivate = to.matched.some(record => record.meta.private);
  // const isProctect = to.matched.some(record => record.meta.protect);

  const isSA = to.matched.some(record => record.meta.sa);

  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  const loggedIn = !!TokenService.getToken();

  if (!isPublic && !loggedIn) {
    return next({
      path: "/login"
    });
  } else if (isPublic || isPrivate) {
    next()
  } else if (role == "superadmin") {
    if (isSA) {
      next();
    } else {
      next({
        path: "/home"
      });
    }
  } else {
    next();
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next("/home");
  }
});

export default router;