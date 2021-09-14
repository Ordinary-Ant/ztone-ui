<template>
  <div class="zt-dropdown-menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ztDropdownMenu',
  mounted () {
    this.$on('getValue', this.fn)
  },
  methods: {
    fn (val) {
      this.$parent.$emit('getValue', val)
    }
  }
}
</script>

<style lang="scss">
.zt-dropdown-menu{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
