<template>
    <form @submit.prevent="addProject">
      <label>Title</label>
      <input type="text" v-model="title">
      <label>Detail</label>
      <input type="text" v-model="detail">
      <button>Add project</button>
    </form>
</template>

<script>
import { collection, addDoc  } from "firebase/firestore"; 
import {db} from '../firebase/config';
export default {
    data() {
        return{
            title:"",
            detail:""
        }
    },
    methods: {
        async addProject(){
            // fetch("http://localhost:3000/projects",{
            //     method: "post",
            //     headers: {
            //         "content-type":"application/json"
            //     },
            //     body:JSON.stringify(
            //         {
            //             title : this.title,
            //             detail : this.detail,
            //             complete : false
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
                await addDoc(collection(db, "todolist"), {
                    title : this.title,
                    detail : this.detail,
                    complete : false,
                    showDetail: false,
                });
                this.$router.push("/");
            }catch(err){
                console.log(err.message);
            }
        }
    }
}
</script>

<style>
form{
    align-items: center;
    margin:50px 0;
    padding: 100px 0;
    background:rgba(187, 205, 255, 0.1);
    border-radius:20px;
    
}
form input{
  width:40% !important;
  padding:5px 0;
  font-size:18px;
  border:none;
  border-bottom: 2px solid ;
  border-image: linear-gradient(90deg,#3d3d3d,#050808) 90;
  border-radius: 10px;
  outline:none;
  margin:20px 0;
  display: block;
  background: none;
  margin: 0 auto;
  color:#6A041D;
  text-align:center;
}
form label{
  left:10px;
  padding:4px 0;
  font-style: 18px;
  font-weight: 300;
  color:rgb(221, 168, 21);
  transition:0.5s;
  pointer-events: none;
  font-size:18px;
}
button{
  width:25%;
  height:45px;
  margin:20px auto;
  outline:none;
  border:none;
  background:linear-gradient(90deg,#262727,#3d3d3d);
  z-index: 1100;
  color:rgb(255, 255, 255);
  border-radius:25px;
  transition:0.5s;
}
button:hover{
    font-size: 1.3em;;
}
</style>