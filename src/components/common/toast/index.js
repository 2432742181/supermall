import Toast from './Toast'
const obj = {}
obj.install = function(Vue) {
  // console.log('展现了', Vue);
  // document.body.appendChild(Toast.$el)

  // 1. 创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  //通过 new 的方式，根据组件构造七，可以创建一个组件对象
  const toast = new toastConstructor()
  //3. 将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  //4 toast.$el 对应的就是上面的 div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast;
}
export default obj