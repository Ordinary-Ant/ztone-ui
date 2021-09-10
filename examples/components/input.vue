<template>
  <div class="row">
    <zt-Input
      name="test1"
      v-model="value"
      type="text"
      clearable
      placeholder="请输入文本"
    />
    <zt-Input
      name="test2"
      v-model="value"
      type="password"
      showPassword
      placeholder="请输入密码"
    />
    <zt-Input
      name="test3"
      v-model="num"
      type="number"
      showPassword
      :min="3"
      :max="5"
      :step="2"
      placeholder="请输入数字"
    />
    <zt-Input
      name="test3"
      v-model="email"
      type="email"
      showPassword
      :min="3"
      :max="5"
      :step="2"
      placeholder="请输入数字"
    />
  </div>
</template>

<script>
export default {
  name: 'inputTest',
  data () {
    return {
      value: '',
      num: 0,
      email: ''
    }
  }
}
</script>
