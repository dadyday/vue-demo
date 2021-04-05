<template>
  <div>
    <select>
      <option v-for="(option, key) in options" :key="key" :value="option.value">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
  },
  data() {
    return {
      options: [],
    };
  },
  created() {
    this.$http.get(this.url).then((response) => {
      // console.log(response.data);
      this.options = response.data;
    });
  },
};
</script>
