import ListView from "@/views/ListView.vue";
// import bus from "@/utils/bus.js";

export default function createListView(name) {
  return {
    // 재사용할 인스턴스 옵션
    name: name,
    // async created() {
    //   // bus.$emit("start:spinner");
    //   // await this.$store.dispatch("GET_LIST", this.$route.name);
    //   // bus.$emit("end:spinner");
    // },
    render(createElement) {
      return createElement(ListView);
    },
  };
}
