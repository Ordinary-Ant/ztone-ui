import Magnifier from './src/magnifier'

/* istanbul ignore next */
Magnifier.install = function (Vue) {
  Vue.component(Magnifier.name, Magnifier)
}

export default Magnifier
