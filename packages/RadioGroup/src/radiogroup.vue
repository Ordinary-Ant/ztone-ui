<template>
  <div class="zt-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'ztRadioGroup',
  props: {
    value: null
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
