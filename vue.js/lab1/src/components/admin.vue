<template>
    <div class="adminContainer">
     <table>
         <thead>
           
             <th>Name</th>
             <th>Age</th>
             <th>Address</th>
             <th>Action</th>
         </thead>   
          <tbody>
             <tr v-for="admin in adminData" :key="admin">
                <td>{{admin.name}}</td>
               <td>{{admin.age}}</td>
               <td>{{admin.address}}</td>
               <td><button @click="$emit('delete',admin.name)">delete</button></td>
                   
          
             </tr>  
         </tbody>     
     </table>    
    </div>
</template>

<script>
    export default {
        name:"adminApp",
        emits:['delete'],
        props: ['adminData']

    }
</script>

<style >
table, th, td {
  border: 1px solid black;
}
.adminContainer{
    margin-top: 5%;
    padding-left:18%;
}
</style>