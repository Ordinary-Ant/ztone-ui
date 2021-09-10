<template>
  <div class="row">
    <Stars v-model="count"/>
    <Stars :szie="30" v-model="count"/>
  </div>
</template>

<script>
import Stars from '../../packages/Stars/src/stars.vue'
export default {
  name: 'starsTest',
  data () {
    return {
      count: 2
    }
  },
  components: {
    Stars
  }
}
</script>
