<template>
  <mu-drawer :open="open" :docked="docked" @close="handleClose">
    <mu-appbar :zDepth="0" class="exmaples-nav-appbar">
      <a class="exmaples-appbar-title">Muse-UI</a>
      <!-- <mu-badge content="rc" class="exmaples-version" secondary/> -->
    </mu-appbar>
    <mu-divider/>
      <mu-list>
        <mu-sub-header>最近聊天记录</mu-sub-header>
        <mu-list-item title="Mike Li">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Maco Mai">
          <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Alex Qin">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Allen Qun">
          <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Myron Liu">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
        <mu-sub-header>历史聊天记录</mu-sub-header>
        <mu-list-item title="Gaia Zhou">
          <mu-avatar src="/images/avatar2.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
        <mu-list-item title="Miller Wang">
          <mu-avatar src="/images/avatar1.jpg" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
  </mu-drawer>
</template>

<script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: true
      },
      docked: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      handleClose() {
        this.$emit('close')
      }
    }
  }
</script>
