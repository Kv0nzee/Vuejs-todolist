<template>
  <div class="filternav">
        <button :class="{active : current==='all'}" @click="filterBy('all')" class="filterBuutton">All</button>
        <button :class="{active : current==='complete'}" @click="filterBy('complete')" class="filterBuutton">Complete</button>
        <button :class="{active : current==='ongoing'}" @click="filterBy('ongoing')" class="filterBuutton">Ongoing</button>
  </div>
</template>

<script>
export default {
    props:["current"],
    methods: {
        filterBy(value){
            this.$emit('filterValue',value)
        }    
    }
}
</script>
 
<style>
    .filternav{
        width: 100%;
        height:60px;
    }
    .filterBuutton {
        width:100px;
        background:none;
        color:grey;
        text-align:center;
        border-radius:0;
    }
    .filterBuutton:hover{
        color:#377771;
    }
    .filterBuutton.active{
        border-bottom:3px solid #377771;
        border-radius: 0;
    }
</style>