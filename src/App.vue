<template>
  <div id="app">
    <tool-bar />
    <transition name="fade"> <router-view /></transition>
    <spinner-comp :loading="loadingStatus" />
  </div>
</template>

<script>
import ToolBar from "@/components/ToolBar.vue";
import SpinnerComp from "./components/SpinnerComp.vue";
import bus from "@/utils/bus.js";

export default {
  components: { ToolBar, SpinnerComp },
  name: "App",
  data() {
    return {
      loadingStatus: false,
    };
  },
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-exact-active {
  text-decoration: underline;
}

/* router transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
