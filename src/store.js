import Vue from 'vue';
// vue3: import { reactive } from 'vue';

// we use a local state object, and make it reactive
const state = Vue.observable({
  allHidden: false,
});
// vue3: const state = reactive({...})

// we export getters, that returns values based on state, ...
export const getters = {
  allHidden: () => state.allHidden,
};

// ... mutations, that change the state values, ...
export const mutations = {
  setAllHidden: (val) => state.allHidden = val,
};

// ... and actions, that do complex or async things and run one or more mutations.
export const actions = {
  hideAll() {
    mutations.setAllHidden(true);
  }
};
