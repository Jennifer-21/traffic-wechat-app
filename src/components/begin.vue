<template xmlns="http://www.w3.org/1999/html">
  <div class="begin">
    <div class="background">
      <div class="content">
        <form action="" method="get" class="title">
          <div class="question">您最喜欢水果？您最喜欢水果？您最喜欢水果？您最喜欢水果？</div>
          <br/>
          <input name="answer" type="radio" class="btn" @click="selectAns()"/><label>&nbsp;&nbsp;A. 苹果 </label><br/>
          <input name="answer" type="radio" class="btn"/><label>&nbsp;&nbsp;B. 桃子 </label><br/>
          <input name="answer" type="radio" class="btn"/><label>&nbsp;&nbsp;C. 香蕉 </label><br/>
          <input name="answer" type="radio" class="btn"/><label>&nbsp;&nbsp;D. 梨 </label>
        </form>
      </div>
      <router-link to="/finish">
        <div class="next"></div>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      selectAns () {}
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../common/stylus/mixin.styl"
  .begin
    position fixed
    left 0
    top 0
    width 100%
    height 100%
    .background
      bg-img (bg_1)
      width 100%
      height 100%
      background-repeat no-repeat
      background-size contain
      position absolute
      .content
        bg-img(bg_2)
        width 584px
        height 716px
        margin 55px 37px
        background-size 300px 420px
        background-repeat no-repeat
        position absolute
        .title
          width 280px
          font-size 15px
          text-align left
          line-height 30px
          padding 15px 30px 30px 15px
          input
            /*display none*/
            opacity 0
          label
            display inline-block
            line-height 20px
            background-size 16px 16px
            background-repeat no-repeat
            background-position 2px 2px
            padding-left 18px
            bg-img(Radio_unsel)
          .btn
            width 18px
            height 18px
      .next
        position relative
        bg-img(btn_xyt)
        width 254px
        height 78px
        margin 400px 110px
        background-repeat no-repeat
        background-size 145px 40px
</style>
