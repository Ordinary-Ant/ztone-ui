<template>
  <div class="row">
    <zt-Radio v-model="flag" border>男</zt-Radio>
    <zt-Radio-Group v-model="gender">
      <zt-Radio label="0" border>男</zt-Radio>
      <zt-Radio label="1" border>女</zt-Radio>
    </zt-Radio-Group>
  </div>
</template>

<script>
export default {
  name: 'radioTest',
  data () {
    return {
      gender: '0',
      flag: false
    }
  }
}
</script>

<style>

</style>
