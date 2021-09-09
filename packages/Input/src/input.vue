<template>
  <div class="zt-input-wrapper" :class="{ 'zt-input--suffix': clearable || showPassword }">
    <input
      class="zt-input"
      :class="{ 'disabled': disabled }"
      :type="showPassword ? (passwordVisible ? 'text' : 'password'): type"
      :name="name"
      :placeholder="placeholder"
      :step="step"
      :min="min"
      :max="max"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    >
    <span class="zt-input-suffix">
      <i
        v-if="clearable && value"
        class="zt-icon-RectangleCopy13"
        @click="handleClear"
      ></i>
      <i
        v-if="showPassword"
        class="zt-icon-RectangleCopy39"
        :class="{'zt-icon-active': passwordVisible}"
        @click="handleTogglePassword"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ztInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    step: Number,
    min: Number,
    max: Number
  },
  data () {
    return {
      passwordVisible: false
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    handleClear () {
      this.$emit('input', '')
      this.$emit('clear')
    },
    handleTogglePassword () {
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    }
  }
}
</script>

<style lang="scss">
.zt-input-wrapper{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .zt-input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 5px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355, 1);
    width: 100%;
    &:focus{
      outline: none;
      border-color: #409eff;
    }
  }
  .zt-input.disabled{
    cursor: not-allowed;
    border-color: #e4e7ed;
    background-color: #f5f7fa;
    color: #c0c4cc;
  }
}
.zt-input--suffix{
  .zt-input{
    padding-right: 30px;
  }
  .zt-input-suffix{
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .zt-icon-active{
      color: gold;
    }
  }
}
</style>
