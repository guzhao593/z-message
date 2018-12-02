<template>
  <div class="home">
    <h4>不同状态</h4>
    <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
    <ul class="message-box">
      <li v-for="(type, index) in Object.keys(messageList)" :key="index" @click="showMessage(type)">
        {{messageList[type]}}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      messageList: {
        success: '成功',
        warning: '警告',
        info: '消息',
        error: '错误'
      }
    }
  },
  methods: {
    showMessage (type) {
      this.$message({ message: `${this.messageList[type]}，这是一条${this.messageList[type]}消息哦`, type: type })
    }
  }
}
</script>

<style lang="scss" scoped>
  .home {
    margin: 20px auto;
    width: 60%;
    h4, p {
      text-align: left;
    }
    ul.message-box {
      border: 1px solid #dcdfe6;
      padding: 20px 20px;
      display: flex;
      li {
        list-style: none;
        height: 40px;
        width: 70px;
        border: 1px solid #dcdfe6;
        margin-right: 20px;
        line-height: 40px;
        font-size: 14px;
        border-radius: 4px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          color: #409eff;
          border-color: #409eff;
        }
      }
    }
  }
</style>
