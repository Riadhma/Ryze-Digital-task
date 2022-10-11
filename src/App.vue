<template>
  <div id="app">
    <HeaderComponent :key="$route.fullPath" />
    <router-view />
  </div>
</template>

<script>
import HeaderComponent from "@/components/Header";

export default {
  name: 'App',
  components: {
    HeaderComponent
  },
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: open sans, sans-serif;
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.btn {
  cursor: pointer;
  background-color: #fff;
  border-color: #fff;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
  position: relative;
  text-transform: uppercase;
  transition: all .15s ease;
  will-change: transform;
  letter-spacing: .025em;
  font-size: .875rem !important;
}

.btn:hover {
  box-shadow: 0 7px 14px rgb(50 50 93 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
}

.btn-custom {
  color: #5e72e4;
  font-weight: 600 !important;
}

.btn-custom:hover {
  color: #212529;
  background-color: #fff;
  border-color: #fff;
}

.custom-btn-primary {
  color: #fff;
  background-color: #5e72e4;
  border-color: #5e72e4;
  box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
}
</style>
