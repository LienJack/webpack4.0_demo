<template>
  <div>
    <h3 class="title">{{title}}</h3>
    <p class="content">{{content}}</p>
    <div class="goddess">
      <div class="right">
        <h4 class="right__h4">background引入图片</h4>
        <div class="right__img"></div>
      </div>
      <div class="left">
        <h4 class="left__h4">img标签直接引入图片</h4>
        <img class="left__img" src="./touxiang.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // Foot: Footer
  },
  data () {
    return {
      title: 'hello word',
      content: 'webpack4 搭建vue环境',
    }
  },
}
</script>


<style lang="less" scoped>
  .title {
    font-size: 20px;
    text-align: center;
    color: red;
  }
  .content {
    font-size: 14px;
    color: #333333;
  }
  .goddess {

    .left {
      margin-left: 50%;
      &__h4 {
        font-size: 14px;
      }
      &__img {
        width: 308px;
        height: 433px;
      }
    }
    .right {
      float: left;
      &__h4 {
        font-size: 14px;
      }
      &__img {
        width: 300px;
        height: 150px;
        background: url('./touxiang.jpg') no-repeat;
      }
    }
  }
</style>


