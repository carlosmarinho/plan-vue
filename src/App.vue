<template>
  <div>
    <Header></Header>
    <div class="container-fluid">
      <TitleBar></TitleBar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import TitleBar from './components/TitleBar';

export default{
  name: 'App',
  components: {
    Header,
    TitleBar,
  },
}
</script>

<style>
  body{
    background-color: #eee;
  }
</style>
