<template>
  <div class="finish">
    <div class="background"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"
  .finish
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    .background
      bg-img (bg_4)
      width 100%
      height 100%
      background-repeat no-repeat
      /*background-size 375px 667px*/
      background-size cover
</style>
