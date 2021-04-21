<template>
  <div>
    <!-- we bind a local method and computed function to the button, ... -->
    <button @click="hideAll" :disabled="allHidden">
      Hide All
    </button>
    <!-- ... declare some sub controls, ... -->
    <StateDemoCtrl />
    <StateDemoCtrl hide />
    <StateDemoCtrl :show="false" />
  </div>
</template>

<script>
// ... we import all from the store, ...
import * as store from '@/store';
// vuex: import { mapGetters, mapMutations, mapActions } from 'vuex';


export default {
  computed: {
    // ... and spread all getters into computed, ...
    ... store.getters,
    // vuex: ... mapGetters(['allHidden']),
  },
  methods: {
    // ... and all actions into methods
    ... store.actions,
    // vuex: ... mapActions(['hideAll']),
  }
};
</script>
