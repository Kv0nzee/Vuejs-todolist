<template>
  <div id="nav">
      <router-link to="/">Show Project</router-link> 
      <router-link :to="{name:'AddProject'}">Add Project</router-link> 
    </div>
  <router-view/>
</template>

<script>
export default {

}
</script>

<style>

#nav {
  padding: 30px;
}

#nav a {
  text-decoration: none;
  color:#3d3d3d;
  padding:5px 10px;
  font-size: 1.5em;
  transition: 0.7s;
}

#nav a.router-link-exact-active {
  color: #00a2ff;
  border-bottom:5px solid #C9CA91;
  border-radius: 2px;
}
</style>