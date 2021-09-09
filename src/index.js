import Button from '../packages/Button/index.js'
import Dialog from '../packages/Dialog/index.js'
import Input from '../packages/Input/index.js'
import Switch from '../packages/Switch/index.js'
import Radio from '../packages/Radio/index.js'
import RadioGroup from '../packages/RadioGroup/index.js'
import Checkbox from '../packages/Checkbox/index.js'
import CheckboxGroup from '../packages/CheckboxGroup/index.js'
import Form from '../packages/Form/index.js'
import FormItem from '../packages/FormItem/index.js'
import Stars from '../packages/Stars/index.js'
import './font/iconfont.css'
import 'animate.css'

const components = [
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Stars
]

const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Button,
  Dialog,
  Input,
  Switch,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Form,
  FormItem,
  Stars
}