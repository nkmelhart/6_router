<template>
    <nav class="navbar navbar-expand-lg border-bottom bg-dark sticky-top">
        <div class="container">
        <router-link class="fw-bold" style="text-decoration: none" to="/">Vue Router</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
          <div class='collapse navbar-collapse mx-5 me-auto' id='navbarNav'>
                <ul class="navbar-nav mt-1">
                    <li class="nav-item mx-4">
                        <router-link to="/Home">Home</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Content">Content</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Aboutus">About Us</router-link>
                    </li>
                    <li class="nav-item mx-4">
                        <router-link to="/Hellothere">Hello There...</router-link>
                    </li>
                </ul>
          </div>
          <div>
              <router-link to="/ContactUs" style="text-decoration: none" class="text-white">Contact Us</router-link>
          </div>
        </div>
    </nav>
    
</template>

<script setup>
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&display=swap');

nav {
    font-family: 'Montserrat Alternates';
    font-size: 22px;
}

.title {
    font-size: 40px;
}

li a {
    text-decoration: none;
}
</style> 

