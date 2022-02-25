<template>
  <user-profile :userInfo="userInfo">
    <div slot="username">{{ userInfo.id }}</div>
    <span slot="time">{{ "Joined " + userInfo.created }}, </span>
    <span slot="karma">{{ userInfo.karma }}</span>
  </user-profile>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: { UserProfile },
  computed: {
    ...mapGetters({
      userInfo: "fetchedUserInfo",
    }),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("GET_USER_INFO", userName);
  },
};
</script>

<style></style>
