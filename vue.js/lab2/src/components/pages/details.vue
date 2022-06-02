<template>
   <div class="container">
      <h1>User details</h1>
      <div class="card" >
  <div class="card-body">
    <h5 class="card-title">{{id}} : {{first_name}}</h5>

    <p class="card-text">{{email}}</p>
        <p class="card-text">{{body}}</p>


  </div>
</div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'detailsApp',
         data(){
            return{
                 id:'',
                first_name:'',
                email:'',
                body:''
            }
        },
       
        watch:{
        $route(){
                this.getuserDetails();
            }
         },
        created(){
           
           this.getuserDetails();
        },
        methods:{
            getuserDetails(){
                 this.id = this.$route.params.id;
                axios.get(` http://localhost:2000/USERS?id=${this.id}`)
                .then((res)=>{
                    console.log(res.data)
                    for(let i=0;i<res.data.length;i++){
                        this.first_name = res.data[i].first_name;
                        this.email = res.data[i].email;
                        this.body = res.data[i].body;
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>