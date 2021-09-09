import Stars from './src/stars'

/* istanbul ignore next */
Stars.install = function (Vue) {
  Vue.component(Stars.name, Stars)
}

export default Stars
