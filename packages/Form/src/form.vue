<template>
  <div class="zt-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ztForm',
  props: {
    model: {
      type: Object,
      require: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>

<style lang="scss">

</style>
