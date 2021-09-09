import FormItem from './src/formitem'

/* istanbul ignore next */
FormItem.install = function (Vue) {
  Vue.component(FormItem.name, FormItem)
}

export default FormItem
