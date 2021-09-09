<template>
  <transition
    name="animate__animated animate__bounce"
    enter-active-class="animate__fadeIn"
    leave-active-class="animate__fadeOut"
  >
    <div class="vt-dialog-wrapper" v-show="visable" @click.self="handleClick">
      <div class="vt-dialog" :style="{marginTop: top, width}">
        <div class="vt-dialog-header">
            <slot name="title">
              <span class="vt-dialog-title">{{ title }}</span>
            </slot>
            <button class="vt-dialog-back" @click="handleClick">
              <i class="zt-icon-RectangleCopy22">
              </i>
            </button>
        </div>
        <div class="vt-dialog-content">
          <slot><span>这是一段提示信息</span></slot>
        </div>
        <div class="vt-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import 'animate.css'
export default {
  name: 'ztDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('update:visable', false)
    }
  }
}
</script>

<style lang="scss">
.vt-dialog-wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 1001;
  background-color: rgba(0,0,0,.4);
  .vt-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    width: 30%;
    &-header{
      padding: 20px 20px 10px;
      .vt-dialog-title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .vt-dialog-back{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }
    &-content{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .zt-button:first-child{
        margin-right: 10px;
      }
    }
  }
}
</style>
