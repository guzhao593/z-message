import ZMessage from './z-message/index.vue'
import Vue from 'vue'

const ZMessageConstructor = Vue.extend(ZMessage)

const $message = (opt) => {
  let instance = new ZMessageConstructor()
  instance.show = true
  if (typeof opt === 'string') {
    instance.message = opt
  } else if (Object.prototype.toString.call(opt) === '[object Object]') {
    instance.message = opt.message
    instance.dangerouslyUseHTMLString = opt.dangerouslyUseHTMLString || false
    instance.showClose = opt.showClose || false
    instance.type = opt.type || 'info'
    instance.timeout = opt.timeout || 5
  }
  instance.$mount(document.createElement('div'))
  document.body.appendChild(instance.$el)
}

export default {
  install (Vue, opt) {
    Vue.prototype.$message = $message
  },
  ZMessage
}
