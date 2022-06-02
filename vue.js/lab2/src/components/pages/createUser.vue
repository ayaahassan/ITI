<template>
   <div class="container">
    <h1>create post</h1>
    <form action="" @submit.prevent="createPost">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Name</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model="first_name"
        />
         <div class="mb-3">
        <label for="exampleFormControlInput2" class="form-label"
          >Email</label
        >
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput2"
          v-model="email"
        />
        <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1">
  <label class="form-check-label" for="flexCheckChecked1">
   Male
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked>
  <label class="form-check-label" for="flexCheckChecked2">
    Female
  </label>
</div>
     
        
      <div>
          <button class="btn btn-success me-3">submit</button>
          <button class="btn btn-primary" @click="back">back</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

    export default {
        name:'createUserApp',data() {
    return {
      first_name: "",
      email:"",
      gender:"",
      
    };
  },
  methods: {
    createPost() {
      axios
        .post(" http://localhost:2000/USERS", {
          first_name: this.title,
          email:this.email,
          gender:this.gender   
         
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    back(){
        this.$router.push('/users')
    }
  },
    }
</script>

<style lang="scss" scoped>

</style>