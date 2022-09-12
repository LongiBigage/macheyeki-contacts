<template>
  <div class="bg-darker h-screen font-sans">
    <navBar class="text-primary" :navItems="navItems"></navBar>
    <div>
      <slot/>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import navBar from './components/main/navBar.vue';
import footerBar from './components/main/footerBar.vue';
export default {
  name: 'AppLayout',
  components: {
    navBar,
    footerBar
  },
  data() {
    return {
      navItems: [
        { name: "Home", icon: "home", link: "" },
        { name: "MyContacts", icon: "users", link: "" },
        { name: "Profile", icon: "user", link: "" },
      ]
    }
  },
  setup() {  }
}
</script>
