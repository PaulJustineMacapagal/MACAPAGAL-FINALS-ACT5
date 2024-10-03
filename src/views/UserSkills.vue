<template>
  <div class="skills-container">
    <h1>Skills</h1>
    <ul>
      <li>JavaScript</li>
      <li>Vue.js</li>
      <li>HTML & CSS</li>
      <li>Bootstrap</li>
      <li>Graphic Designing</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserSkills',
};
</script>

<style scoped>
.skills-container {
  background-color: #FCECC9; 
  padding: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 20px auto; 
}

h1 {
  color: #7EB2DD; 
  font-family: 'Arial', sans-serif; 
}

ul {
  list-style-type: none; 
  padding: 0; 
}

li {
  background-color: #445E93; 
  color: #fff; 
  margin: 10px 0; 
  padding: 10px; 
  border-radius: 5px; 
  transition: background-color 0.3s; 
}

li:hover {
  background-color: #7EB2DD; 
}
</style>
