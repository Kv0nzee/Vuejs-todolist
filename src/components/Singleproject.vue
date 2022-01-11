<template>
  <div class="project_container" :class="{complete:project.complete}"  @click.self="showDetail">
      <div class="title">
          <h3>{{project.title}}</h3>
            <div>
                <span class="material-icons"  @click="deletProject">
                    delete
                </span>
                <router-link :to="{name:'editProject',params: {id:project.id}}" class="deco">
                    <span class="material-icons">
                        edit
                    </span>
                </router-link>
                <span class="material-icons" @click="completePorject">
                    done
                </span>
            </div>
        </div>
        <div class="text" v-if="project.showDetail">{{project.title}}</div>
      </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return{
            api:"http://localhost:3000/projects/"
        }
    },
    methods: {
        deletProject(){
             let deleteRoute = this.api+this.project.id;
            fetch(deleteRoute,{method : "DELETE"})
            .then(()=> {
                this.$emit("delete",this.project.id);
            })
             .catch((err)=>{
                console.log(err);
            })
        },
        completePorject(){
            let completeRoute = this.api+this.project.id;
            fetch(completeRoute,
                 {
                    method:"PATCH",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(
                        {
                        complete: !this.project.complete
                    })
                }
             )
             .then(() => {
                 this.$emit("complete",this.project.id);
             })
             .catch((err) => {
                 console.log(err);
             })
        },
        showDetail(){
            let showeRoute = this.api+this.project.id;
            fetch(showeRoute,
                 {
                    method:"PATCH",
                    headers:{
                        "Content-Type" : "application/json"
                    },
                    body:JSON.stringify(
                        {
                        showDetail: !this.project.showDetail
                    })
                }
             )
             .then(() => {
                 this.$emit("show",this.project.id);
             })
             .catch((err) => {
                 console.log(err);
             })
        } 
    }
}
</script>

<style>
    .project_container {
        width:500px;
        padding:20px;
        background-color:#003049;
        margin:10px auto;
        border-radius: 0 5px 5px 0; 
        transition:1s;
        color: #fff;
        user-select:none;
        position:relative;
    }
    .project_container:before{
        content:"";
        position:absolute;
        width:50px;
        height:100%;
        transition:0.7s;
        background: #e63946 ;
        top:0;
        left:-50px;
        border-radius:  15px 0  0 15px ; 
    }
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .title_header h3{
        width:200px;
    }
    span{
        margin:0 10px;
        color: #fff;
    }
    .text{
        text-align:left;
    }
    .complete:before {
        background: #edf2f4;
    }
</style>