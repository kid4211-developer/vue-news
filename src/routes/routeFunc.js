import bus from "@/utils/bus.js";
import store from "@/store/index.js";

export async function listHandler(props) {
  try {
    const { to, next } = props;

    bus.$emit("start:spinner");

    await store.dispatch("GET_LIST", to.name);

    bus.$emit("end:spinner");

    next(); // next 함수를 호출 해줘야 다음 페이지로 이동함
  } catch (error) {
    console.log(error);
  }
}
