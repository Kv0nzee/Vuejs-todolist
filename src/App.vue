<template>
    <Navbar></Navbar>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  components: { Navbar },

}
</script>
<style>
body
{
  min-height: 100vh;
  background: #fffa65;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  box-shadow: inset 5px 0 5px #fffa65; 
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #3d3d3d; 
  border-radius: 10px;
  transition: 0.5s;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #3d3d3d; 
}
.link-active {
  color: #3d3d3d;
}

</style>
