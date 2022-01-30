<template>
  <div class="home"
  v-if="projects.length > 0">
    <Filterbutton @filterValue="current=$event" :current="current"></Filterbutton>
    <div v-for="project in filteredProject" :key="project.id">
      <Singleproject :project="project" @show="showProject" @complete="completeProject" @delete="deleteProject"></Singleproject>
    </div>
  </div>
  <Spinner v-else></Spinner>
</template>

<script>
import Spinner from '../components/Spinner'
import Filterbutton from '../components/Filterbutton'
import Singleproject from '../components/Singleproject'
import { collection, getDocs } from "firebase/firestore";
import {db} from '../firebase/config';
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
    Spinner,
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
    // fetch("http://localhost:3000/projects")
    // .then((response) => {
    //         return response.json();
    //     }).then((data) =>{
    //         this.projects = data;
    //     }).catch((err) =>{
    //         console.log(err.message);
    //     })
    const fetchData = async()=> {
      const querySnapshot = await getDocs(collection(db, "todolist"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      this.projects.push({id:doc.id,...doc.data()});
    });    
    }
    fetchData();
  }
}
</script>
