<template>
    <div>
    
    <form @submit.prevent="formHandle" method="post">
       Name <input type="text" v-model="formValues.name" placeholder="name"/><br>
       Age  <input type="text" v-model="formValues.age" placeholder="age"/><br>
       Address <input type="text" v-model="formValues.address" placeholder="address"/><br>
       <input type="radio" id="admin" v-model="type" name="type" value="Admin">
       <label for="admin">Admin</label><br>
       <input type="radio" id="student" v-model="type" name="type" value="Student">
       <label for="student">Student</label><br>

       <button class="btn">Add</button>

    </form>
      
    </div>
</template>

<script>
    export default {
        name:"formApp",
        emit:['formData'],
        data(){
            return{
                formValues:{
                    name:'',
                    age:'',
                    address:'',
                  
                },
                type:''
            }
        },
        methods:{
            formHandle(e){
            e.preventDefault();
             if(this.type === "Student"){
            this.$emit("student", this.formValues);
        }else if(this.type === "Admin"){
            this.$emit("admin", this.formValues);
        }
            },
        }
        
    }
</script>

<style >


</style>