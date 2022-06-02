<template>
     <div class="container">
 <div class="row">
    <div class="col-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="row">ID</th>
                  <th>Name</th>
                  <th>Mail</th>
                  <th>Gender</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <th scope="row">{{ user.id }}</th>
                  <td>{{ user.first_name }}</td>
                  <td>{{ user.email }}</td>
                  <td>{{ user.gender }}</td>

                  <td>
                    <router-link
                      :to="`/user/${user.id}`"
                      class="btn btn-info rounder-circle"
                      >more..</router-link
                    >
                  </td>
                </tr>
              </tbody>
            </table>
    </div>
   </div>
  </div>
</template>

<script>
import axios from "axios";

    export default {
        name:'getUserApp',
         data() {
            return {
                users: [],
       };
      },
  created() {
    this.getallUsers();
  },
  methods: {
    async getallUsers() {
      await axios
        .get("http://localhost:2000/USERS")
        .then((res) => {
          console.log(res.data);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
  
</script>

<style  scoped>

</style>