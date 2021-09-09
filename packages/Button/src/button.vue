<template>
  <button
    class="zt-button"
    :class="[
      `zt-button--${type}`, {
        'plain': plain,
        'round': round,
        'circle': circle,
        'disabled': disabled
      }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ztButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: String,
    size: String,
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss">
.zt-button{
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus{
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }

}
.zt-button--primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    border-color: #66b1ff;
    color: #fff;
  }
}
.zt-button--success{
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    border-color: #85ce61;
    color: #fff;
  }
}
.zt-button--info{
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    border-color: #a6a9ad;
    color: #fff;
  }
}
.zt-button--warning{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    border-color: #ebb563;
    color: #fff;
  }
}
.zt-button--danger{
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    border-color: #f78989;
    color: #fff;
  }
}

.zt-button.plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
}
.zt-button--primary.plain{
  color: #409eff;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.zt-button--success.plain{
  color: #67c23a;
  background-color: #f0f9eb;
  border-color: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.zt-button--info.plain{
  color: #909399;
  background-color: #f4f4f5;
  border-color: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.zt-button--warning.plain{
  color: #e6a23c;
  background-color: #fdf6ec;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.zt-button--danger.plain{
  color: #f56c6c;
  background-color: #fef0f0;
  border-color: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

.zt-button.round{
  border-radius: 20px;
  padding: 12px 23px;
}

.zt-button.circle{
  border-radius: 50%;
  padding: 12px;
}

.zt-button.disabled{
  position: relative;
  cursor: not-allowed;
  border-color: #fff;
}
.zt-button.disabled::before{
  position: absolute;
  left: 0;
  top: 0;
  content: '';
  height: 100%;
  width: 100%;
  background: rgba(255,255,255,.5);
}

.zt-button [class*='zt-icon-']+span{
  margin-left: 5px;
}

</style>
