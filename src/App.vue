<template>
  <TheHeader/>
  <Container>
    <SideBar/>
    <Profile/>
  </Container>
</template>

<script lang="ts">
import './assets/index.scss'
import TheHeader from "./components/TheHeader.vue";
import Container from "./components/Container.vue";
import Profile from "./components/Profile.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    SideBar,
    Profile,
    Container,
    TheHeader
  }
}
</script>