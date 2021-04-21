<template>
  <div>
    <button @click="toggle">{{ showLabel }}</button>
    <p class="panel" :class="{ hidden }">
      panel content lorem ipsum dolor sit amed
    </p>
  </div>
</template>

<script>
import * as store from '@/store';

export default {
  props: {
    hide: Boolean,
    show: { type: Boolean, default: true },
  },
  data() {
    return {
      hidden: true,
    };
  },
  computed: {
    showLabel() {
      return this.hidden ? 'Show' : 'Hide';
    },
    ... store.getters,
  },
  watch: {
    allHidden(newVal /*, oldVal*/) {
      if (newVal) {
        this.hidden = true;
      }
    }
  },
  created() {
    this.hidden = this.hide || !this.show;
  },
  methods: {
    toggle() {
      if (this.allHidden) {
        store.mutations.setAllHidden(false);
        this.hidden = false;
      }
      else {
        this.hidden = !this.hidden;
      }
    },
  }
};
</script>

<style lang="scss">
.panel {
  border: solid 1px grey;
  border-radius: 0.5em;
  min-height: 3em;
  padding: 0.5em;
  &.hidden {
    display: none;
  }
}
</style>
