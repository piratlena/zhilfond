<template>
  <div class="profile-block _flex-center">
    <span class="text">
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="scss" scoped>
@import "../assets";

.profile-block {
  width: 100%;
  height: 100%;
  border-left: 1px solid $grey;

  &._flex-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}

.text {
  @include default-text;
  display: block;
  font-family:  $Montserrat-Regular, sans-serif;
  font-size: 14px;
  line-height: 17.07px;
}
</style>