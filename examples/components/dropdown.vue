<template>
  <div class="row">
    <zt-Dropdown trigger="click" placement="top" @command="getValue">
      <span class="zt-dropdown-title">
        下拉菜单<i class="zt-icon-RectangleCopy14"></i>
      </span>
      <template v-slot:menu>
        <zt-dropdown-menu>
          <zt-dropdown-item>黄金糕</zt-dropdown-item>
          <zt-dropdown-item>狮子头</zt-dropdown-item>
          <zt-dropdown-item>螺蛳粉</zt-dropdown-item>
          <zt-dropdown-item disabled>双皮奶</zt-dropdown-item>
          <zt-dropdown-item>蚵仔煎</zt-dropdown-item>
        </zt-dropdown-menu>
      </template>
    </zt-Dropdown>
    <zt-Dropdown trigger="click" placement="right">
      <template v-slot:menu>
        <zt-dropdown-menu>
          <zt-dropdown-item>黄金糕</zt-dropdown-item>
          <zt-dropdown-item>狮子头</zt-dropdown-item>
          <zt-dropdown-item>螺蛳粉</zt-dropdown-item>
          <zt-dropdown-item disabled>双皮奶</zt-dropdown-item>
          <zt-dropdown-item>蚵仔煎</zt-dropdown-item>
        </zt-dropdown-menu>
      </template>
    </zt-Dropdown>
    <zt-Dropdown placement="bottom">
      <template v-slot:menu>
        <zt-dropdown-menu>
          <zt-dropdown-item>黄金糕</zt-dropdown-item>
          <zt-dropdown-item>狮子头</zt-dropdown-item>
          <zt-dropdown-item>螺蛳粉</zt-dropdown-item>
          <zt-dropdown-item disabled>双皮奶</zt-dropdown-item>
          <zt-dropdown-item>蚵仔煎</zt-dropdown-item>
        </zt-dropdown-menu>
      </template>
    </zt-Dropdown>
    <zt-Dropdown placement="left">
      <template v-slot:menu>
        <zt-dropdown-menu>
          <zt-dropdown-item>黄金糕</zt-dropdown-item>
          <zt-dropdown-item>狮子头</zt-dropdown-item>
          <zt-dropdown-item>螺蛳粉</zt-dropdown-item>
          <zt-dropdown-item disabled>双皮奶</zt-dropdown-item>
          <zt-dropdown-item>蚵仔煎</zt-dropdown-item>
        </zt-dropdown-menu>
      </template>
    </zt-Dropdown>
  </div>
</template>

<script>
export default {
  name: 'dropdwonTest',
  methods: {
    getValue (val) {
      console.log(val)
    }
  }
}
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: space-around;
}
</style>
