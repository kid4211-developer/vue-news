<template>
  <ul class="news-list">
    <li v-for="news in list" :key="news.id" class="post">
      <div class="points">
        {{ news.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="news.domain">
            <a :href="news.url">{{ news.title }}</a
            ><small class="link-text" v-if="news.domain"
              >({{ news.domain }})</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${news.id}`">{{ news.title }}</router-link
            ><small
              ><a class="link-text" :href="news.domain" v-if="news.domain"
                >({{ news.domain }})</a
              ></small
            >
          </template>
        </p>
        <small v-if="news.user" class="link-text">
          by
          <router-link :to="`/user/${news.user}`" class="link-text">{{
            news.user
          }}</router-link>
        </small>
        <small v-if="news.time_ago" class="link-text">
          {{ news.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    item: {
      type: Array,
      default() {
        return [];
      },
    },
    code: {
      type: String,
      default() {
        return "";
      },
    },
  },
  computed: {
    ...mapGetters({
      list: "fetchedList",
    }),
  },
};
</script>

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
}
</style>
