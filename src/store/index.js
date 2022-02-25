import Vuex from "vuex";
import Vue from "vue";
import mutations from "@/store/mutations";
import actions from "@/store/actions";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
    userInfo: {},
    itemInfo: {},
    list: [],
  },
  getters: {
    fetchedAskList(state) {
      return state.asks;
    },
    fetchedUserInfo(state) {
      return state.userInfo;
    },
    fetchedItemInfo(state) {
      return state.itemInfo;
    },
    fetchedList(state) {
      return state.list;
    },
  },
  mutations,
  actions,
});

export default store;
