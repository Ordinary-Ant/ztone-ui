<template>
  <div class="row">
    <zt-Switch
      v-model="active"
      active-color="red"
      name="test3"
      inactive-color="green"
    />
    <zt-Switch
      v-model="dactive"
      disabled
      name="test4"
    />
  </div>
</template>

<script>
export default {
  name: 'switchTest',
  data () {
    return {
      active: false,
      dactive: false
    }
  }
}
</script>
