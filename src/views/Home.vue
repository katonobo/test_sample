<template>
    <div class="home">
        <input v-model="text" type="text"> 
        <p>テキスト：{{this.text}}</p>
        <button @click="doAlert">登録</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Home extends Vue {
  text: string = "";
  public doAlert(){
      alert("hello")
    }
}
</script>
