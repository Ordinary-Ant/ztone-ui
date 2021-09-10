<template>
  <div id="app">
    <Button />
    <Switchs />
    <Stars />
    <Checkbox />
    <Radio />
    <Input />
    <Form />
    <Dialog />
    <Magnifier />
  </div>
</template>
<script>
import Button from './components/button.vue'
import Checkbox from './components/checkbox.vue'
import Dialog from './components/dialog.vue'
import Form from './components/form.vue'
import Input from './components/input.vue'
import Radio from './components/radio.vue'
import Switchs from './components/switch.vue'
import Stars from './components/stars.vue'
import Magnifier from './components/magnifier.vue'
export default {
  name: 'App',
  components: {
    Button,
    Switchs,
    Checkbox,
    Dialog,
    Form,
    Input,
    Radio,
    Stars,
    Magnifier
  },
  data () {
    return {
      url: ''
    }
  }
}
</script>
<style lang="scss">
</style>
