<template>
  <div class="user-preview">
    <div class="user-photo" >
      <img src="/preview.png"/>
    </div>
    <div class="info-block">
      <span class="name">{{employee.name}}</span>
      <span class="email">{{employee.email}}</span>
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
  height: 70px;
  border-radius: 10px;
  display: flex;
  box-shadow: 0 0 10px 0 #0000001A;
  cursor: pointer;

  &:hover {
    border: 1px solid #E0E0E0;
    box-shadow: unset;

    .info-block{
      background: #E0E0E0;
      box-shadow: 0 0 10px 0 #0000001A;
      border-radius: 0 10px 10px 0;
    }
  }
}

.user-photo {
  width: 70px;
  height: 70px;
  border-right: 1px solid #E0E0E0;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
  }
}

.info-block {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 5px;
  word-wrap: break-word;
}

.name {
  font-family: $Montserrat-SemiBold,sans-serif;
  font-size: 14px;
  color: black;
  font-weight: 600;
  line-height: 17.07px;
}

.email {
  font-family:  $Montserrat-Regular, sans-serif;
  font-size: 14px;
  color: $text-grey;
  line-height: 17.07px;
  text-align: left;
}

</style>