<template>
  <form @submit.prevent="editProject" v-if="datas !=='' ">
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
            detail:"",
            datas:"",
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
            if(this.title !== "" && this.detail !== ""){
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
            }else{
                this.title ="Something wrong";
                return 
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
            this.datas = {id:docSnap.id,...docSnap.data()};
            this.title = this.datas.title;
            this.detail = this.datas.detail;
        }
        fetchData();
    }
}
</script>

<style>

</style>