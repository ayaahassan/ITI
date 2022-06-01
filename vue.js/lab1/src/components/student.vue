<template>
    <div class="studentContainer">
     <table>
         <thead>
             <th>Name</th>
             <th>Age</th>
             <th>Address</th>
         </thead>    
         <tbody>
             <tr v-for="student in studentData" :key="student">
                     
               <td>{{student.name}}</td>
               <td>{{student.age}}</td>
               <td>{{student.address}}</td>
                   
          
             </tr>  
         </tbody>    
     </table>    
    </div>
</template>

<script>
    export default {
        name:"studentApp",
        props: ['studentData'],
    }
</script>

<style >
table, th, td {
  border: 1px solid black;
}
.studentContainer{
    margin-top: 5%;
    padding-left:18%;
}
</style>