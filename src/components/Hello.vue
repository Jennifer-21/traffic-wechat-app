<template>
  <div class="index">
    <div class="background">
      <router-link to="/begin">
        <div class="btn"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
//    methods: {
//      clickMe: function () {
//        this.$router.go('/begin')
//      }
//    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"
  .index
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    .background
      bg-img (bg_6)
      width 100%
      height 100%
      background-repeat no-repeat
      background-size contain
      position absolute
      .btn
        bg-img(btn_1)
        width 188px
        height 50px
        margin 400px 100px
        background-size 175px 50px
        background-repeat no-repeat
</style>
