<template>
  <label
    class="zt-checkbox"
    :style="{ border: border ? '1px solid #dcdfe6' : '' }"
    :class="{ 'checked': !border && isChecked, 'border-checked': border && isChecked }"
  >
    <span class="zt-checkbox-input">
      <span class="zt-checkbox-inner"></span>
      <input
        type="checkbox"
        class="zt-checkbox-origin"
        :name="name"
        :value="label"
        v-model="currentValue"
        :disabled="disabled"
      />
    </span>
    <span class="zt-checkbox-label">
      <slot>
        <template>{{ label || '这是一个checkbox' }}</template>
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ztCheckbox',
  props: {
    value: [String, Number, Boolean, Array],
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: [String, Number, Boolean],
    border: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    currentValue: {
      get () {
        return this.Group ? this.Group.value : this.value
      },
      set (newVal) {
        this.Group ? this.Group.$emit('input', newVal) : this.$emit('input', newVal)
      }
    },
    isChecked () {
      if (this.Group) {
        return this.currentValue.includes(this.label)
      } else if (Array.isArray(this.currentValue)) {
        return this.currentValue.includes(this.label)
      } else {
        return this.currentValue
      }
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
.zt-checkbox{
  border-radius: 5px;
  padding: 5px;
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
  .zt-checkbox-input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .zt-checkbox-inner{
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      width: 14px;
      height: 14px;
      background: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      z-index: 1;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46), background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &::after{
        border: 1px solid #fff;
        content: '';
        border-top: 0;
        border-left: 0;
        height: 7px;
        position: absolute;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        box-sizing: content-box;
        width: 3px;
        transform: translate(-50%, -50%) scale(0);
        transition: transform .15s ease-in .05s;
        transform-origin: center;
      }
    }
    .zt-checkbox-origin{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0x;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .zt-checkbox-label{
    display: inline-block;
    font-size: 14px;
    line-height: 19px;
    padding-left: 10px;
  }
}
.zt-checkbox.checked{
  .zt-checkbox-input{
    .zt-checkbox-inner{
      background-color: #409eff;
      &::after{
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .zt-checkbox-label{
    color: #409eff;
  }
}
.zt-checkbox.border-checked{
  border: 1px solid #409eff !important;
  .zt-checkbox-input{
    .zt-checkbox-inner{
      background-color: #409eff;
      &::after{
        transform: rotate(45deg) scale(1);
      }
    }
  }
  .zt-checkbox-label{
    color: #409eff;
  }
}
</style>
