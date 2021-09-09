<template>
  <div class="zt-switch" @click="handleClick" :class="{ 'checked': value, 'disabled': disabled }">
    <span class="zt-switch-core" ref="core">
      <span class="zt-switch-button"></span>
    </span>
    <input
      type="checkbox"
      class="zt-switch-input"
      :name="name"
      ref="input"
    >
  </div>
</template>
<script>
export default {
  name: 'ztSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String
    },
    inactiveColor: {
      type: String
    },
    name: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    setColor (value) {
      if (this.activeColor && this.inactiveColor) {
        const color = value ? this.inactiveColor : this.activeColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.background = color
      }
    },

    handleClick () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
      }
    }
  },
  mounted () {
    this.setColor(this.value)
    this.$refs.input.checked = this.value
  },
  watch: {
    value (newVal) {
      this.setColor(newVal)
      this.$refs.input.checked = newVal
      this.$emit('change', newVal)
    }
  }
}
</script>

<style lang="scss">
.zt-switch{
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .zt-switch-input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .zt-switch-core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #ccc;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .zt-switch-button{
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
.zt-switch.checked{
  .zt-switch-core{
    border-color: #409eff;
    background-color: #409eff;
    .zt-switch-button{
      transform: translateX(20px);
    }
  }
}
.zt-switch.disabled{
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255,255,255,.6);
    z-index: 500;
    cursor: not-allowed;
  }
}
</style>
