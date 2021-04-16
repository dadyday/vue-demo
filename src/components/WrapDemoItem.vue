<template>
  <li style="color: purple">
    {{ attr }}
    <slot />
  </li>
</template>

<script>
export default {
  props: {
    attr: String
  }
}
</script>
