<template>
  <div class="zt-dropdown-item" :class="disabled ? 'disabled' : ''" @click="handleClick">
    <span class="zt-dropdown-text">
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ztDropdownItem',
  data () {
    return {
      val: ''
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      this.val = this.$slots.default[0].text
      this.$parent.$emit('getValue', this.val)
    }
  }
}
</script>

<style lang="scss">
.zt-dropdown-item{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  width: 100%;
  .zt-dropdown-text{
    padding: 10px 0;
    font-size: 14px;
    text-align: center;
    width: 80%;
  }
  &:hover{
    background: #99f3bd;
    color: #fff;
  }
}
.zt-dropdown-item.disabled{
  cursor: not-allowed;
  .zt-dropdown-text{
    padding: 10px 0;
    font-size: 14px;
    color: #ccc;
    text-align: center;
    width: 80%;
  }
  &:hover{
    background: #fff;
  }
}
</style>
