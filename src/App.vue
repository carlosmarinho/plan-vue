<template>
  <div>
    <Header></Header>
    <div class="container">
      <TitleBar></TitleBar>
      <Dashboard />
    </div>
  </div>
</template>

<script>
import Header from './components/Header';
import TitleBar from './components/TitleBar';
import Dashboard from './components/Dashboard';

export default{
  name: 'App',
  components: {
    Header,
    TitleBar,
    Dashboard,
  },
}
</script>

<style>
  body{
    background-color: #eee;
  }
</style>