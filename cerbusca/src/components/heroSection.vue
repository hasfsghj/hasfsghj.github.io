<template>
    <div class="hero-image">
    <div class="hero-text">
      <h1>Cancer</h1>
      <p>noi facem cancer cancer cancer cancer</p>

      <router-link to="/form">
        <button><strong>Fa testul!</strong></button>
      </router-link>
    </div>
  </div>
</template>

<style>
    .hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.019), rgba(0, 0, 0, 0.106)),
    url("https://mf.b37mrtl.ru/rbthmedia/images/2023.03/original/641b50062da84e4cd2001e93.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 850px;
}

.hero-text {
  text-align: left;
  position: absolute;
  top: 50%;
  left: 240px;
  transform: translateY(-50%);
  color: #fff6f6;
  max-width: 600px;
}

.hero-text p {
  margin: 0;
  line-height: 1.5;
  font-size: 24px;
  color:#fff6f6;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 12px 32px;
  color: #101935;
  background-color: #9ad4d6;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
  font-size: 24px;
}

.hero-text button:hover {
  background-color: #4791b9e8;
}
</style>