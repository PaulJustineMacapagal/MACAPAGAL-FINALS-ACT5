<template>
  <div class="profile-container">
    <img src="../assets/profile-pic.jpg" alt="Profile Picture" class="profile-image" />
    <h1>Profile</h1>
    <p>
      Hi there, My name is Paul Justine Macapagal, a Front-End Developer.
    </p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
};
</script>

<style scoped>
.profile-container {
  background-color: #FCECC9; 
  padding: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 20px auto; 
  text-align: center; 
}

.profile-image {
  width: 150px; 
  height: 150px; 
  border-radius: 50%; 
  object-fit: cover; 
  margin-bottom: 20px; 
}

h1 {
  color: #445E93; 
  font-family: 'Arial', sans-serif; 
}

p {
  color: #333; 
  line-height: 1.5; 
}
</style>
