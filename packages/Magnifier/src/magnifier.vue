<template>
  <div
    v-magnifier
    class="zt-magnifier-wrapper"
    :style="{
      width: imgWidth + 'px',
      height: imgHeight + 'px'
    }"
  >
    <!-- 此为放大镜 -->
    <a
      class="zt-magnifier-mag"
      :href="link"
      :target="blank ? '_blank': ''"
      :style="{
        width: magnifierWidth + 'px',
        height: magnifierHeight + 'px',
        borderRadius: border ? '50%' : 'none'
      }"
    >
      <img
        class="zt-magnifier-innerImg"
        :src="url"
        :alt="alt"
        :style="{
          width: imgWidth + 'px',
          height: imgHeight + 'px'
        }"
      />
    </a>
    <!-- 此为底层静态图片 -->
    <a class="zt-magnifier-static">
      <img class="zt-magnifier-staticImg" :src="url"/>
    </a>
  </div>
</template>

<script>
import magnifier from '../../../src/directives/magnifier.js'
export default {
  name: 'ztMagnifier',
  props: {
    imgWidth: {
      type: Number,
      default: 500
    },
    imgHeight: {
      type: Number,
      default: 350
    },
    blank: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    magnifierWidth: {
      type: Number,
      default: 100
    },
    magnifierHeight: {
      type: Number,
      default: 100
    },
    border: {
      type: Boolean,
      default: false
    }
  },
  directives: {
    magnifier
  }
}
</script>

<style lang="scss">
.zt-magnifier-wrapper{
  position: relative;
  box-shadow: 0 0 10px rgba(0,0,0,.5);
  margin: 20px;
  .zt-magnifier-staticImg{
    width: 100%;
  }
  .zt-magnifier-mag{
    display: none;
    position: absolute;
    top: 0;
    z-index: 5;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    cursor: move;
    overflow: hidden;
    background-color: skyblue;
    &.show{
      display: block;
      transform: scale(2);
    }
    .zt-magnifier-innerImg{
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
    }
  }
}
</style>
