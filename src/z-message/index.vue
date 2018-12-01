<template>
  <transition name="fade" appear>
    <div
      v-if="show"
      class="z-message"
      :style="{color: COLOR[type], backgroundColor: BACKGROUND_COLOR[type], borderColor: BORDER_COLOR[type] }"
      @mouseenter="mouseenter"
      @mouseleave="mouseleave"
    >
      <i class="z-prex iconfont" :class="`icon-${type}`"></i>
      <template>
        <div v-if="!dangerouslyUseHTMLString" class="z-text">{{message}}</div>
        <div v-else v-html="message" class="z-text"></div>
      </template>
      <i class="z-close iconfont icon-close" v-if="showClose" @click="close"></i>
    </div>
  </transition>
</template>

<script>
const COLOR = {
  success: '#67C23A',
  warning: '#E6A23C',
  info: '#909399',
  error: '#F56C6C'
}
const BACKGROUND_COLOR = {
  success: '#f0f9eb',
  warning: '#fdf6ec',
  info: '#edf2fc',
  error: '#fef0f0'
}
const BORDER_COLOR = {
  success: '#e1f3d8',
  warning: '#faecd8',
  info: '#ebeef5',
  error: '#fde2e2'
}
export default {
  name: 'z-message',
  props: {
    message: String,
    type: {
      type: String,
      default: 'info'
    },
    showClose: {
      type: Boolean,
      default: false
    },
    timeout: {
      type: Number,
      default: 5
    },
    dangerouslyUseHTMLString: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      COLOR,
      BACKGROUND_COLOR,
      BORDER_COLOR,
      show: false,
      timer: null
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.showTime()
    },
    showTime () {
      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        this.close()
      }, this.timeout * 1000)
    },
    mouseenter () {
      clearTimeout(this.timer)
    },
    mouseleave () {
      this.showTime()
    },
    close () {
      this.show = false
    }
  }
}
</script>
<style lang="scss" scoped>
  @import url('./../assets/iconfont/iconfont.css');
  .z-message {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 380px;
    max-height: 500px;
    overflow: auto;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    padding: 15px 15px 15px 20px;
    box-sizing: border-box;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .z-text {
    flex: 1;
    padding: 0px 10px;
    word-break: break-all;
  }
  .z-close {
    cursor: pointer;
    color: #c0c4cc;
    &:hover {
      color: #909399;
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 1s;
  }
  .fade-enter, .fade-leave-to {
    transform: translate(-50%, -300%);
  }
</style>
