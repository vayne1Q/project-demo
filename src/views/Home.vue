<template>
  <div class="home">
    <div class="box">{{ $store.state.number }}</div>
    <button @click="add">按钮</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  mounted() {
    console.log(123);
  },
  methods: {
    add() {
      this.$store.commit("addNumber", 10);
    }
  }
};
</script>
<style>
.box {
  box-sizing: border-box;
  width: 750px;
  height: 300px;
  border: solid 1px black;
}
</style>
