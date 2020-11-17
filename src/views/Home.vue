<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ajax from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      a: 'sad'
    }
  },
  activated() {
    this.getApi()
  },
  methods: {
    getApi() {
      ajax.create({        
        withCredentials: true
      })  
      ajax.get('//test.com/api/yunjiuserapp/userapp/member/memberInfo.json?appCont=1&ticket=ticket|2_25902c23bfe183bd317dfa8c4d3c58a2').then((res) => {
        console.log(res)
      })
    },
    getFun() {
      const s = 112
      console.log(s)
    }
  }
}
</script>

<style lang="stylus">
  .home{
    img{
      width 100%
      height 100%
    }
  }
</style>
