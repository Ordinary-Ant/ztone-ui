<template>
  <div class="zt-form-item">
    <label class="zt-form-item-label" :style="{ width: Form.labelWidth }">{{ label }}</label>
    <div class="zt-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ztFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss">
.zt-form-item{
  margin-bottom: 25px;
  .zt-form-item-label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .zt-form-item-content{
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
</style>
