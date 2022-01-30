<template>
  <form @submit.prevent="editProject" v-if="title !==''">
       <h3>Edit Project</h3>
      <label>Title</label>
      <input type="text" v-model="title">
      <label>Detail</label>
      <input type="text" v-model="detail">
      <button>Edit</button>
  </form>
  <Spinner v-else></Spinner>
</template>

<script>
import Spinner from '../components/Spinner'
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {db} from '../firebase/config';
export default {
  components: { Spinner },
    props: ["id"],
    data() {
        return{
            title:"",
            detail:""
        }
    },
    methods: {
        async editProject(){
            // fetch("http://localhost:3000/projects/" + this.id,{
            //     method: "PATCH",
            //     headers: {
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify(
            //         {
            //             title : this.title,
            //             detail : this.detail,
            //         }
            //     )
            // })
            // .then(()=>{
            //     this.$router.push("/")
            // })
            // .catch((err) => {
            //     console.log(err);
            // })
             try{
                const source = doc(db, "todolist", this.id);
               await updateDoc(source, {
                   title : this.title,
                   detail : this.detail,
                });
                 this.$router.push("/");
            }catch(err){
                console.log(err.message);
            }
        }
    },
    mounted() {
        // fetch("http://localhost:3000/projects/" + this.id)
        //     .then((res)=>{
        //         return res.json();
                
        //     })
        //     .then((data)=>{
        //         this.title = data.title;
        //         this.detail = data.detail;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        const fetchData = async () => {
            const docRef = doc(db, "todolist", this.id);
            const docSnap = await getDoc(docRef);
            const data = {id:docSnap.id,...docSnap.data()};
            this.title = data.title;
            this.detail = data.detail;
        }
        fetchData();
    }
}
</script>

<style>

</style>