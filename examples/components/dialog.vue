<template>
  <!-- .sync === :visable="visable" + @update:visable="visable = evnet" -->
  <zt-Dialog width="40%" top="20vh" :visable.sync="visable">
    <template v-slot:title>yyds</template>
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
    <template v-slot:footer>
        <zt-button type="warning" @click="visable = false">取消</zt-button>
        <zt-button type="primary" @click="visable = false">确定</zt-button>
    </template>
  </zt-Dialog>
</template>

<script>
export default {
  name: 'dialogTest',
  data () {
    return {
      model: {
        username: '',
        password: '',
        gender: '',
        favour: [],
        isRemember: false
      },
      visable: false
    }
  },
  mounted () {
    setTimeout(() => {
      this.visable = true
    }, 2000)
  }
}
</script>
