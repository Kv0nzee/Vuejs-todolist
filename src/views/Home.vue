<template>
  <div class="home">
    <Filterbutton @filterValue="current=$event" :current="current"></Filterbutton>
    <div v-for="project in filteredProject" :key="project.id">
      <Singleproject :project="project" @show="showProject" @complete="completeProject" @delete="deleteProject"></Singleproject>
    </div>
  </div>
</template>

<script>
import Filterbutton from '../components/Filterbutton'
import Singleproject from '../components/Singleproject'
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      projects: [],
      current: 'all',  
    }
  },
  components: {
    Filterbutton,
    Singleproject,
  },
  methods: {
    deleteProject(id){
      this.projects = this.projects.filter(project =>{
        return project.id !== id;
      })
    },
    completeProject(id){
      let finalproject = this.projects.find(project => {
        return project.id === id;
      })
      finalproject.complete = !finalproject.complete;
    },
    showProject(id){
      let showproject = this.projects.find(project => {
        return project.id === id;
      })
      showproject.showDetail = !showproject.showDetail;
    }
  },
  computed: {
    filteredProject(){
      if(this.current === "complete"){
        return this.projects.filter( pro => {
          return pro.complete;
        })
      }
      if(this.current === "ongoing"){
        return this.projects.filter( pro => {
          return !pro.complete;
        })
      }
      return this.projects;
    }
  },  
  mounted(){
    fetch("http://localhost:3000/projects")
    .then((response) => {
            return response.json();
        }).then((data) =>{
            this.projects = data;
        }).catch((err) =>{
            console.log(err.message);
        })
  }
}
</script>
