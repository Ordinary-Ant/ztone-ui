<template>
  <div class="zt-dropdown-wrapper">
    <div class="zt-dropdown"
      @click="trigger === 'click' ? handleMouseOver($event) : ''"
      @mouseover="trigger === 'hover' ? handleMouseOver($event) : ''"
      @mouseout="trigger === 'hover' ? isShowMenu = false : ''"
    >
      <slot>
        <span class="zt-dropdown-title">
          下拉菜单<i class="zt-icon-RectangleCopy10"></i>
        </span>
      </slot>
    </div>
    <transition
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <div class="zt-dropdown-menus" :class="{
        'right': placement === 'right',
        'left': placement === 'left',
        'top': placement === 'top',
        'bottom': placement === 'bottom',
      }" v-show="isShowMenu">
        <slot name="menu">
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ztDropdown',
  data () {
    return {
      isShowMenu: false
    }
  },
  methods: {
    handleMouseOver (e) {
      this.isShowMenu = !this.isShowMenu
    },
    getValue (val) {
      this.$emit('command', val)
      this.isShowMenu = false
    }
  },
  props: {
    trigger: {
      type: String,
      default: 'hover'
    },
    placement: {
      type: String,
      default: 'right'
    }
  },
  mounted () {
    this.$on('getValue', this.getValue)
  }
}
</script>

<style lang="scss">
.zt-dropdown-wrapper{
  position: relative;
  display: inline-block;
  .zt-dropdown{
    height: 40px;
    line-height: 38px;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: inline-block;
    position: relative;
    padding: 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    .zt-dropdown-title{
      font-size: 14px;
      color: #666;
    }
    &:hover{
      border-color: blue;
      .zt-dropdown-title{
        color: blue;
      }
    }
  }
  .zt-dropdown-menus{
    display: inline-block;
    position: absolute;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 6px rgba(0, 0, 0, .5);
    width: 100%;
    overflow: hidden;
  }
  .zt-dropdown-menus.right{
    bottom: 0;
    left: calc(100% + 10px);
  }
  .zt-dropdown-menus.left{
    bottom: 0;
    right: calc(100% + 10px);
  }
  .zt-dropdown-menus.top{
    bottom: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }
  .zt-dropdown-menus.bottom{
    top: calc(100% + 10px);
    left: 50%;
    transform: translateX(-50%);
  }
}

</style>
