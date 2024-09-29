<template>
  <div class="user-preview">
    <div class="user-photo" >
      <img src="/preview.png"/>
    </div>
    <div class="info-block">
      <span class="name">Bret</span>
      <span class="email">Sincere@april.biz</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPreview',
  props: {
    employee: {
      id: {
        type: Number,
        default: null
      },
      username: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        default: '',
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets';

.user-preview {
  width: 240px;
  height: 158px;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  box-shadow: 0 0 10px 0 #0000001A;
}

.user-photo {
  height: 100%;
  width: 100%;
  border-right: 1px solid #E0E0E0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}

.info-block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.name {
  font-family: $Montserrat-Regular, sans-serif;
  font-size: 14px;
  color: $text-grey;
  line-height: 17.07px;
}

</style>