<template>
    <div>
    
    <form @submit.prevent="formHandle" method="post">
       Name <input type="text" v-model="name" placeholder="name"/><br>
       Age  <input type="text" v-model="age" placeholder="age"/><br>
       Address <input type="text" v-model="address" placeholder="address"/><br>
       <input type="radio" id="admin" v-model="type" name="type" value="Admin">
       <label for="admin">Admin</label><br>
       <input type="radio" id="student" v-model="type" name="type" value="Student">
       <label for="student">Student</label><br>

       <button class="btn">Add</button>

    </form>
      
    </div>
</template>

<script>
import {reactive, toRefs,ref} from 'vue'

    export default {
        name:"formApp",
        emits:['student,admin'],
        setup(props,context){
              var formValues = reactive({
                name:'',
               age:'',
                address:''
            })
               var type=ref('')
            // lifecycle hooks
          //  onMounted(()=>{
          //  })
           
            function formHandle(e){
             e.preventDefault();
             if(type.value === "Student"){
             context.emit('student',formValues)
             }else if(type.value === "Admin"){
               context.emit('admin',formValues)
             }
            }
            return{
              ...toRefs(formValues),
              type,
              formHandle
            }
        }
       
        
    }
</script>

<style >


</style>