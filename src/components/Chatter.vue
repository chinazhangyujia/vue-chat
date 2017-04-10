<template>
  <div class="chatter">
    <p>{{ messages }}</p>
    <mu-list>
      <mu-list-item  v-for="(msg,index) in msgs" :key="'msg' + index">
        <mu-paper class="msg" :zDepth="2" :class="{'me': isMe(msg.name)}">
          {{ msg.msg }}
        </mu-paper>
      </mu-list-item>
    </mu-list>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      msgs: {
        type: Array,
        default: () => {
          return [
            {
              name: 'zc',
              msg: 'hello!'
            },
            {
              name: 'zb',
              msg: 'world!'
            }
          ]
        }
      }
    },
    computed: {
      ...mapState([
        'messages'
      ])
    },
    methods: {
      isMe(name) {
        return name === 'zc'
      }
    }
  }
</script>

<style>
  html, body, .app, .content {
    height: 100%;
  }
  .chatter {
    border-radius: 0 0 2px 0;
    padding: 14px 24px 24px;
    margin: 0 auto;
    background-color: #abcdef;
    min-height: 100%;
    max-width: 768px;
  }
  .msg {
    min-height: 30px;
    min-width: 100px;
    max-width: 400px;
    background-color: #eee;
    line-height: 30px;
    padding: 0 8px;
    margin-top: 10px;
    border-radius: 4px;
    display: inline-block;
  }
  .me {
    float: right;
  }
</style>
