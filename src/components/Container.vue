<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style lang="scss" scoped>
@import "../assets";

.container {
  width: 1266px;
  height: 589px;
  margin: 0 auto;
  display: flex;
  background: $white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
}
</style>