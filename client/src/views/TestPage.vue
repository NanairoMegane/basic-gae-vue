<template>
  <b-card>
    <div>
      <div class="test">
          Server Response Test.
      </div>
      <b-button v-on:click="doRequest" variant="outline-primary">Call Server</b-button>
      <b-button v-on:click="doReset" variant="outline-warning">Reset</b-button>
      <b-table-simple>
        <b-body>
          <b-tr v-for="(data, i) in resDataList" :key=i>
            <b-td> {{i}}</b-td>
            <b-td> {{data}} </b-td>            
          </b-tr>
        </b-body>
        <b-td>
        </b-td>
      </b-table-simple>
      <div class="tobase">
          <router-link to="/">Close Test Page</router-link>
      </div>
    </div>  
  </b-card>
</template>

<script>
import * as testService from "../service/test"
export default {
  name: 'TestPage',
  data(){
      return {
        resDataList: []
      }
  },
  methods:{
    doRequest(){
      testService.doGet()
      .then(res => {
          if (res.status === 200) {
              this.resDataList.push(res.data);
          } else {
              this.resDataList.push("Failed");
          }
      });
    },
    doReset(){
      this.resDataList = [];
    }
  },
}
</script>
