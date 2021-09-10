<template>
  <div class="ui-stars">
    <span
      v-for="index in 5"
      :key="index"
      class="zt-icon-star1"
      :class="index <= value ? 'active' : ''"
      :style="{ fontSize: size + 'px' }"
      @click="handleChangeStar(index)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'ztStars',
  props: {
    value: {
      type: Number,
      default: 0
    },
    size: {
      type: Number,
      default: 16
    }
  },
  methods: {
    handleChangeStar (index) {
      this.$emit('input', index)
    }
  }
}
</script>

<style lang="scss">
.ui-stars{
  span{
    margin: 2px;
    cursor: pointer;
    color: #ccc;
    &.active{
        color: #FBAB06;
    }
  }
}
</style>
