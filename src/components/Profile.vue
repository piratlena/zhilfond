<template>
  <div class="profile-block _flex-center">
    <span class="profile-block__text">
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

  &__text {
    display: block;
    @include default-text;
  }
}
</style>