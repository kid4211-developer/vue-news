import { getItemInfo, getList, getUserInfo } from "@/api";

export default {
  async GET_USER_INFO(context, userName) {
    try {
      const { data } = await getUserInfo(userName);
      context.commit("SET_USER_INFO", data);
    } catch (error) {
      console.log(error);
    }
  },
  async GET_ITEM_INFO(context, itemId) {
    try {
      const { data } = await getItemInfo(itemId);
      context.commit("SET_ITEM_INFO", data);
    } catch (error) {
      console.log(error);
    }
  },
  async GET_LIST(context, pageName) {
    try {
      const { data } = await getList(pageName);
      context.commit("SET_LIST", data);
    } catch (error) {
      console.log(error);
    }
  },
};
