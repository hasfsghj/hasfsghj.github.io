<template>
<header>
    <div class="logo">
      <router-link to="/"><h1>Cancer</h1></router-link>
    </div>
    <nav class="navigation">
      <router-view>
      <ul>
        <li><a href="https://spotify.com" target="_blank">Playlist</a></li>
        <li><router-link to="about">About</router-link></li>
      </ul>
    </router-view>
    </nav>
</header>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  z-index:1000;
  align-items: center;
}


header {
  background-color: #708871;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;   
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.navigation li {
  margin-left: 20px;
}

.navigation a {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #073108; /* Change color on hover */
}

.logo {
  margin-right: 720px; /* Space between logo and menu */
}

.logo h1 {
  margin: 0;
  font-size: 24px;
  color: white; /* White color for text */
  position: relative;
  top: 2px; /* Fine-tune positioning */
  font-family: "Fraunces", serif;
}

.navigation ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 32px;
  align-items: center;
}

.navigation a {
  text-decoration: none;
  color: white; /* White color for menu items */
  font-size: 18px;
  font-weight: 700;
  position: relative;
  transition: color 0.3s ease;
}

.navigation a::after {
  content: ""; /* Empty content for underline */
  display: block;
  width: 0;
  height: 2px;
  background: white; /* White underline */
  transition: width 0.3s ease;
  position: absolute;
  bottom: -5px; /* Position it just below the text */
  left: 50%;
  transform: translateX(-50%);
}

.navigation a:hover::after,
.navigation a:focus::after {
  width: 100%; /* Full width on hover */
}
</style>

<script>

</script>