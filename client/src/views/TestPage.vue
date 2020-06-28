<template>
    <div>
    <div class="test">
        This is Test Page.
    </div>
    <div>
        Message from Server: {{mes}}
    </div>
    <div>
        <button v-on:click="doRequest">Re:Get</button>
    </div>
    <div class="tobase">
        <router-link to="/">Go to Base Page</router-link>
    </div>
    </div>  
</template>

<script>
import * as testService from "../service/test"
export default {
  name: 'TestPage',
  data(){
      return {
        mes: "None"
      }
  },
  methods:{
    doRequest(){
      testService.doGet()
      .then(res => {
          if (res.status === 200) {
              this.mes = res.data;
          } else {
              this.mes = "Failed.";
          }
      });
    }
  },
  mounted(){
    this.doRequest();
  }
}
</script>
