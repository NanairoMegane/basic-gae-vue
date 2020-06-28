<template>
  <div id="app">
    <HelloWorld/>
    <ToTest/>
  <div>
    <router-view/>
  </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ToTest from './components/ToTest.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ToTest,
  }
}
</script>

