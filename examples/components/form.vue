<template>
  <zt-Form :model="model">
    <zt-Form-Item label="用户名">
      <zt-Input placeholder="请输入用户名" v-model="model.username" clearable/>
    </zt-Form-Item>
    <zt-Form-Item label="密码">
      <zt-Input placeholder="请输入密码" type="password" v-model="model.password" showPassword clearable/>
    </zt-Form-Item>
    <zt-Form-Item label="性别">
      <zt-Radio-Group v-model="model.gender">
        <zt-Radio label="0">女</zt-Radio>
        <zt-Radio label="1">男</zt-Radio>
      </zt-Radio-Group>
    </zt-Form-Item>
    <zt-Form-Item label="爱好">
      <zt-Checkbox-Group v-model="model.favour">
        <zt-Checkbox label="0">吃饭</zt-Checkbox>
        <zt-Checkbox label="1">睡觉</zt-Checkbox>
        <zt-Checkbox label="2">敲代码</zt-Checkbox>
      </zt-Checkbox-Group>
    </zt-Form-Item>
    <zt-Form-Item label="是否记住">
      <zt-Switch v-model="model.isRemember"/>
    </zt-Form-Item>
  </zt-Form>
</template>

<script>
export default {
  name: 'formTest',
  data () {
    return {
      model: {
        username: '',
        password: '',
        gender: '',
        favour: [],
        isRemember: false
      }
    }
  }
}
</script>
