<template>
  <div class="app">
    <mu-appbar :zDepth="0" title="Title" class="appbar" :class="{'nav-hide': !open}">
      <mu-icon-button icon="menu" slot="left" @click="toggleNav"/>
      <!--<mu-icon-button icon="star" slot="right"/>-->
      <mu-icon-button icon="star" slot="right" @click="openDialog"/>
    </mu-appbar>
    <mu-dialog :open="dialog" title="add user" @close="close">
      <mu-text-field hintText="请填写你的用户名：" :errorText="errorText" v-model="input" /><br/>
      <mu-flat-button slot="actions" @click="resetInput" primary label="重置"/>
      <mu-flat-button slot="actions" primary @click="handleLogin" label="确定"/>
    </mu-dialog>
    <app-drawer :open="open" :docked="docked" @close="toggleNav"></app-drawer>
    <div class="content" :class="{'nav-hide': !open}">
      <p>{{ username }}</p>
      <p> {{ onlineUsers }} </p>
      <Chatter></Chatter>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import AppDrawer from './components/AppDrawer'
  import Chatter from './components/Chatter'
  export default {
    name: 'app',
    components: {
      'app-drawer': AppDrawer,
      Chatter
    },
    data() {
      const desktop = isDesktop()
      return {
        open: desktop,
        docked: desktop,
        desktop,
        errorText: '',
        input: '',
        dialog: false
      }
    },
    computed: {
      ...mapState([
        'username',
        'onlineUsers'
      ])
    },
    mounted() {
      this.dialog = !this.username
    },
    methods: {
      ...mapActions([
        'loginUser'
      ]),
      toggleNav() {
        this.open = !this.open
      },
      openDialog() {
        this.dialog = true
      },
      close() {
        this.dialog = false
      },
      handleLogin() {
        const name = this.input.trim()
        if (!name) {
          this.errorText = '不能为空'
          return
        }
        this.loginUser(name)
        this.resetInput()
        this.dialog = false
        console.log(this.username)
      },
      resetInput() {
        this.input = this.errorText = ''
      }
    }
  }
  function isDesktop() {
    return window.innerWidth > 993
  }
</script>

<style lang="less">
  @import "../node_modules/muse-ui/less/vars.less";
  .appbar{
    position: fixed;
    left: 256px;
    right: 0;
    top: 0;
    width: auto;
    transition: all .45s @easeOutFunction;
    &.nav-hide {
      left: 0;
    }
  }
  .content{
    padding-top: 56px;
    padding-left: 256px;
    transition: all .45s @easeOutFunction;
    &.nav-hide {
      padding-left: 0;
    }
  }
  @media (min-width: 480px) {
    .content{
      padding-top: 64px;
    }
  }
  @media (max-width: 993px) {
    .appbar {
      left: 0;
    }
    .content{
      padding-left: 0;
    }
  }
</style>
