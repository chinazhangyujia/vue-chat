<template>
  <mu-drawer :open="open" :docked="docked" @close="handleClose">
      <mu-list>
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item title="Close" @click="handleClose"/>
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
