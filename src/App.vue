<template>
  <div>
    <Header></Header>
    <div class="container-fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';

export default{
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style>
  body{
    background-color: #eee;
  }
</style>
