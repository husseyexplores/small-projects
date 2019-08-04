<template>
  <div class="relative">
    <button
      @click="toggle"
      type="button"
      @focus="buttonFocused = true"
      @blur="buttonFocused = false"
      class="block focus:outline-none"
    >
      <slot name="trigger" :hasFocus="buttonFocused" :isOpen="isOpen"></slot>
    </button>

    <div :class="[isOpen ? 'block' : 'hidden']">
      <button
        type="button"
        @click="isOpen = false"
        class="block z-30 block fixed inset-0 w-full h-full cursor-default focus:outline-none"
      ></button>

      <div class="z-40 absolute right-0">
        <slot name="dropdown"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],
  data() {
    return {
      isOpen: false,
      buttonFocused: false,
    }
  },
  mounted() {
    const onEscape = e => {
      if (!this.isOpen || e.key !== 'Escape') return
      this.isOpen = false
    }
    document.addEventListener('keydown', onEscape)
    this.$on('hook:destroyed', () => {
      document.removeEventListener('keydown', onEscape)
    })
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
