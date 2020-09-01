import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 实现vuex持久化
const persits = store => {
  const vuexData = JSON.parse(localStorage.getItem("vuex-state"));
  if (vuexData) store.replaceState(vuexData); // 对store的state进行替换

  // 每次触发commit的时候就会调用
  store.subscribe((mutation, state) => {
    console.log(mutation, state);
    localStorage.setItem("vuex-state", JSON.stringify(state));
  });
};

export default new Vuex.Store({
  plugins: [persits],
  state: {
    number: 10,
    name: "张三",
    age: 18
  },
  mutations: {
    addNumber(state, payload) {
      this.state.number += payload;
    }
  },
  actions: {},
  modules: {}
});
