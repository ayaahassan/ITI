<template>
 <div  class="container">
       <button class="btn" @click="showComponent=1">Form</button>
       <button class="btn" @click="showComponent=2">Admin</button>
       <button class="btn" @click="showComponent=3">Student</button><br>

 <formApp @student="getStudentData" @admin="getAdminData" v-if="showComponent==1"/>
  <adminApp v-else-if="showComponent==2" @delete="deleteAdmin" :adminData="adminData"/>
 <studentApp v-else-if="showComponent==3" :studentData="studentData"/>


 </div>


</template>

<script>
import adminApp from "./components/admin.vue"
import formApp from "./components/form.vue"
import studentApp from "./components/student.vue"

export default {
  name: 'App',
  data(){
    return{
   showComponent:1,
   studentData:[],
   adminData:[],
    }
  },
  components: {
    adminApp,
    formApp,
    studentApp
  },
  methods:{
    getStudentData(formData)
    {
       this.studentData.push(formData)
       console.log(this.studentData)
       console.log(this.adminData)


    },
    getAdminData(formData)
    {
    this.adminData.push(formData)
     console.log(this.studentData)
       console.log(this.adminData)


    },
    deleteAdmin(admin)
    {
     var i=0,index=0;
     this.adminData.forEach(admin2 => {
     if(admin2.name===admin)
     {
       index=i;
     }
     i++;
   }) 
       this.adminData.splice(index,1)
    }

  }
}
</script>

<style>
#app {
 
}
.container{
      margin:auto;
     position: absolute;
    top: 50%;
    left: 50%;
    -moz-transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
    width:50%;
    height:300px;
    box-sizing: border-box;
    padding: 6%;
    line-height: 35px;
    background-color: beige;
    border-radius: 5%;

  
}
.btn{
  width:30%;
  margin-left: 2%;
  border:none;
}
</style>
