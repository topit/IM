<template>
  <mt-button @click.native="handleClick">
    按一下</mt-button>
</template>

<script>
import { Toast } from 'mint-ui';
import {MessageBox} from 'mint-ui';

export default {
  name: 'mint',
  methods: {
    handleClick() {
      // this.$toast('Hello world!')
      // Toast(document.documentElement.clientWidth);
      // MessageBox.prompt('输入').then(({value, action})=>{
      //   // Toast(value);
      //   MessageBox.alert(value);
      // }).catch(()=>{
      //   Toast('quxiao');
      // });
      MessageBox.alert(document.documentElement.clientWidth);
    }
  }
}
</script>
