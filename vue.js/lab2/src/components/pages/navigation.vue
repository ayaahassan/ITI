<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <router-link to="/users" class="nav-link active"> All Users</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/create" class="nav-link">Create User</router-link>
        </li>
        
   
      
      </ul>
    
    </div>
  </div>
</nav>
    </div>
</template>

<script>
    export default {
        name:'navigationApp'
    }
</script>

<style  scoped>

</style>