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
import {ref} from 'vue'
import adminApp from "./components/admin.vue"
import formApp from "./components/form.vue"
import studentApp from "./components/student.vue"

export default {
  name: 'App',
   components:{
           adminApp,
           formApp,
           studentApp
        },
        setup(){
           var showComponent=ref(1)
           var studentData=ref([])
           var adminData=ref([])

            function getStudentData(data){
           studentData.value.push(data)
             console.log(studentData.value)
             console.log(adminData.value)
            }
            function getAdminData(data){
              adminData.value.push(data)
              console.log(studentData.value)
              console.log(adminData.value)

            }

           function deleteAdmin(admin)
           {
             var i=0,index=0;
            adminData.value.forEach(admin2 => {
             if(admin2.name===admin)
             {
            index=i;
             }
            i++;
            }) 
            adminData.value.splice(index,1)
           }

            return{
                adminData,
                studentData,
                showComponent,
                getStudentData,
                getAdminData,
                deleteAdmin
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
