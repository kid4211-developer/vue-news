<template>
  <div class="content">
    <!-- 사용자 정보 영역 -->
    <section>
      <user-profile :userInfo="itemInfo">
        <router-link slot="username" :to="`/user/${itemInfo.user}`">
          {{ itemInfo.user }}
        </router-link>
        <template slot="time">
          {{ "Posted " + itemInfo.time_ago }}
        </template>
      </user-profile>
    </section>
    <section>
      <h2>{{ itemInfo.title }}</h2>
    </section>
    <!-- 질문 댓글 영역 -->
    <section>
      <div v-html="itemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import { mapGetters } from "vuex";
export default {
  components: { UserProfile },
  computed: {
    ...mapGetters({
      itemInfo: "fetchedItemInfo",
    }),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("GET_ITEM_INFO", itemId);
  },
};
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>
