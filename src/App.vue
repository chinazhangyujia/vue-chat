<template>
  <div class="app">
    <mu-appbar :zDepth="0" title="Title" class="appbar" :class="{'nav-hide': !open}">
      <mu-icon-button icon="menu" slot="left" @click="toggleNav"/>
      <mu-icon-button icon="star" slot="right"/>
      <mu-icon-button icon="star" slot="right"/>
    </mu-appbar>
    <app-drawer :open="open" :docked="docked" @close="toggleNav"></app-drawer>
    <div class="content" :class="{'nav-hide': !open}">
      <Chatter></Chatter>
    </div>
  </div>
</template>

<script>
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
        desktop
      }
    },
    methods: {
      toggleNav() {
        this.open = !this.open
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
