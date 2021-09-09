<template>
  <label
    class="zt-radio"
    :style="{ border: border ? '1px solid #dcdfe6' : '' }"
    :class="{ 'checked': currentLabel === label && !border, 'border-checked': currentLabel === label && border, 'disabled': disabled }"
  >
    <span class="zt-radio-input">
      <span class="zt-radio-inner"></span>
      <input
        type="radio"
        class="zt-radio-origin"
        :name="name"
        :value="label"
        v-model="currentLabel"
        :disabled="disabled"
      />
    </span>
    <span class="zt-radio-label">
      <slot>
        <template>{{ label || '这是一个radio' }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ztRadio',
  computed: {
    currentLabel: {
      get () {
        if (this.disabled) return
        return this.Group ? this.Group.value : this.value
      },
      set (newVal) {
        this.Group ? this.Group.$emit('input', newVal) : this.$emit('input', newVal)
      }
    }
  },
  props: {
    value: [String, Number, Boolean],
    label: [String, Number, Boolean],
    border: {
      type: Boolean,
      default: false
    },
    name: String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  inject: {
    Group: {
      default: ''
    }
  }
}
</script>

<style lang="scss">
.zt-radio{
  border-radius: 5px;
  padding: 10px;
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 10px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .zt-radio-input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .zt-radio-inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &::after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .zt-radio-origin{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .zt-radio-label{
    font-size: 14px;
    padding-left: 10px;
  }
}
.zt-radio.checked{
  .zt-radio-input{
    .zt-radio-inner{
      background-color: #409eff;
      &::after{
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .zt-radio-label{
    color: #409eff;
  }
}
.zt-radio.border-checked{
  border: 1px solid #409eff !important;
  .zt-radio-input{
    .zt-radio-inner{
      background-color: #409eff;
      &::after{
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .zt-radio-label{
    color: #409eff;
  }
}
.zt-radio.disabled::before{
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(255,255,255,.5);
  cursor: not-allowed;
  border-color: #dcdfe6 !important;
  z-index: 999;
}
</style>
