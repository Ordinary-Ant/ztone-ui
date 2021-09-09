<template>
  <div class="zt-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ztCheckboxGroup',
  props: {
    value: [Boolean, String, Number, Array]
  },
  provide () {
    return {
      Group: this
    }
  }
}
</script>

<style lang="scss">

</style>
