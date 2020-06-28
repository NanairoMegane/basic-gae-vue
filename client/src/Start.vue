<template>
  <div id="app">
    <b-card>
      <HelloWorld/>
    </b-card>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
}
</script>

