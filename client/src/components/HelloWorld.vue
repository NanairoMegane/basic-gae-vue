<template>
  <div class="hello">
    <b-card>
      This is Test of Vue and Go on the GAE.
    </b-card>
    <ToTest/>
  </div>
</template>

<script>
import ToTest from './ToTest.vue'

export default {
  name: 'HelloWorld',
  components: {
    ToTest,
  }
}
</script>
