<template>
  <div class="row">
    <zt-Magnifier
      url="https://img1.baidu.com/it/u=3373362293,2683352940&fm=26&fmt=auto&gp=0.jpg"
      link="https://www.baidu.com"
      :imgWidth="250"
      :imgHeight="175"
      :magnifierWidth="50"
      :magnifierHeight="50"
      alt="这是一张图片"
      blank
    />
    <zt-Magnifier
      url="https://img1.baidu.com/it/u=3373362293,2683352940&fm=26&fmt=auto&gp=0.jpg"
      link="https://www.baidu.com"
      alt="这是一张图片"
      blank
    />
    <zt-Magnifier
      url="https://img1.baidu.com/it/u=3373362293,2683352940&fm=26&fmt=auto&gp=0.jpg"
      link="https://www.baidu.com"
      alt="这是一张图片"
      border
      blank
    />
  </div>
</template>

<script>
export default {
  name: 'magnifierTest'
}
</script>
