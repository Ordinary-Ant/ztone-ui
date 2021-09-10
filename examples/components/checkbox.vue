<template>
  <div class="row">
    <zt-Checkbox border v-model="gender">男</zt-Checkbox>
    <zt-Checkbox v-model="favours" label="0">吃饭</zt-Checkbox>
    <zt-Checkbox v-model="favours" label="1">睡觉</zt-Checkbox>
    <zt-Checkbox v-model="favours" label="2">打游戏</zt-Checkbox>
    <zt-Checkbox-Group v-model="favours">
      <zt-Checkbox label="0">吃饭</zt-Checkbox>
      <zt-Checkbox label="1">睡觉</zt-Checkbox>
      <zt-Checkbox label="2">打游戏</zt-Checkbox>
    </zt-Checkbox-Group>
  </div>
</template>

<script>
export default {
  name: 'checkboxTest',
  data () {
    return {
      gender: false,
      favours: []
    }
  }
}
</script>
