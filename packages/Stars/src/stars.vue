<template>
  <div class="ui-stars">
    <span
      v-for="index in 5"
      :key="index"
      class="zt-icon-star1"
      :class="index <= starNum ? 'active' : ''"
      :style="{ fontSize: size + 'px' }"
      @click="handleChangeStar(index)"
    ></span>
  </div>
</template>

<script>
export default {
  name: 'ztStars',
  data () {
    return {
      starNum: this.value
    }
  },
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
      this.starNum = index
      this.$emit('input', this.starNum)
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
