<template>
    <input
        :placeholder="placeholder"
        class="search-input"
    />
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    placeholder: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets";

.search-input {
  width: 240px;
  height: 46px;
  padding: 16px;
  border-radius: 8px;
  border: 1.5px solid $input-color;
  outline: none;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 0 10px 0 #0000001A;
  }

  &::placeholder {
    font-family: $Montserrat-Regular, sans-serif;
    font-size: 14px;
    color: $text-grey;
    line-height: 17.07px;
  }
}
</style>