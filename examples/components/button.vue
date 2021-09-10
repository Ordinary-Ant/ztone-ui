<template>
  <div class="row">
    <div class="button-List">
      <zt-Button>按钮</zt-Button>
      <zt-Button type="primary">按钮</zt-Button>
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
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing">打开dialog</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="primary"></zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="success">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="info">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="warning">按</zt-Button>
      <zt-Button plain circle icon="zt-icon-xiaoyuanfengjing" type="danger">按</zt-Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buttonTest'
}
</script>

<style lang="scss">
.button-List{
  .zt-button{
    margin: 10px;
  }
}
</style>
