<template>
  <div id="app">
    <div class="button-List">
      <zt-Button @click="test">按钮</zt-Button>
      <zt-Button disabled type="primary">按钮</zt-Button>
      <zt-Button type="success">按钮</zt-Button>
      <zt-Button type="info">按钮</zt-Button>
      <zt-Button type="warning">按钮</zt-Button>
      <zt-Button type="danger">按钮</zt-Button>
    </div>
    <div class="button-List">
      <zt-Button plain>按钮</zt-Button>
      <zt-Button plain type="primary">按钮</zt-Button>
      <zt-Button plain type="success">按钮</zt-Button>
      <zt-Button plain type="info">按钮</zt-Button>
      <zt-Button plain type="warning">按钮</zt-Button>
      <zt-Button plain type="danger">按钮</zt-Button>
    </div>
    <div class="button-List">
      <zt-Button plain round>按钮</zt-Button>
      <zt-Button plain round type="primary">按钮</zt-Button>
      <zt-Button plain round type="success">按钮</zt-Button>
      <zt-Button plain round type="info">按钮</zt-Button>
      <zt-Button plain round type="warning">按钮</zt-Button>
      <zt-Button plain round type="danger">按钮</zt-Button>
    </div>
    <div class="button-List">
      <zt-Button plain circle>按</zt-Button>
      <zt-Button plain circle type="primary">按</zt-Button>
      <zt-Button plain circle type="success">按</zt-Button>
      <zt-Button plain circle type="info">按</zt-Button>
      <zt-Button plain circle type="warning">按</zt-Button>
      <zt-Button plain circle type="danger">按</zt-Button>
    </div>
    <div class="button-List">
      <zt-Button plain circle @click="visable = true">打开dialog</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="primary"></zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="success">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="info">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="warning">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="danger">按</zt-Button>
    </div>

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

    <zt-Input
      name="123"
      v-model="value"
      clearable
      @clear="test"
      @input="testC"
    />
    <zt-Input
      name="123"
      v-model="value"
      showPassword
    />
    <zt-Switch v-model="active" disabled active-color="red" name="123" inactive-color="green"/><br/>
    <zt-Radio-Group v-model="gender">
      <zt-Radio label="0" border disabled>男</zt-Radio>
      <zt-Radio label="1" border>女</zt-Radio>
    </zt-Radio-Group>

    <zt-Checkbox border v-model="active">女</zt-Checkbox>
    <zt-Checkbox-Group v-model="actives">
      <zt-Checkbox label="0">吃饭</zt-Checkbox>
      <zt-Checkbox label="1">睡觉</zt-Checkbox>
      <zt-Checkbox label="2">打游戏</zt-Checkbox>
    </zt-Checkbox-Group>
    <zt-Checkbox v-model="actives" label="0">吃饭</zt-Checkbox>
    <zt-Checkbox v-model="actives" label="1">睡觉</zt-Checkbox>
    <zt-Checkbox v-model="actives" label="2">打游戏</zt-Checkbox>

    <zt-Stars v-model="count"/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      visable: false,
      value: 123,
      active: false,
      gender: '0',
      actives: [],
      model: {
        username: '',
        password: '',
        gender: '',
        favour: [],
        isRemember: false
      },
      count: 2
    }
  },
  methods: {
    test () {
      console.log(11)
    },
    testC (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss">
.button-List{
  .zt-button{
    margin: 10px;
  }
}
</style>
