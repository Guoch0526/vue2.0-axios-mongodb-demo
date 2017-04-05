<template>
  <div class="toTop" @click="toTop" ref="toTops" >
  </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            toTop() {
              window.scrollTo(0, 0);
            }
        }
    }
</script>

<style>
  .toTop {
    width: 36px;
    height: 65px;
    background: url(../../../static/img/toTop.png);
    position: fixed;
    right: 50px;
    bottom: 80px;
    cursor: pointer;
  }
</style>
