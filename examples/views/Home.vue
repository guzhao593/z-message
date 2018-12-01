<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="showMessage">
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  },
  methods: {
    showMessage () {
      this.$message({ message: '警告哦，这是一条警告消息警告哦，这是一条警告消警告哦，这是一条警告消息警告哦，这是一条警告消息警告哦，这是一条警告消息警告哦，这是一条警告消息警告哦', timeout: 3 })
    }
  }
}
</script>
