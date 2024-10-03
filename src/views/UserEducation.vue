<template>
  <div class="education-container">
    <h1>Education</h1>
    <ul>
      <li>Bachelor's Degree in Website Development</li>
      <li>Graduated at Holy Angel University</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserEducation',
};
</script>

<style scoped>
.education-container {
  background-color: #FCECC9; 
  padding: 20px; 
  border-radius: 10px; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); 
  max-width: 600px; 
  margin: 20px auto; 
}

h1 {
  color: #F93943; 
  font-family: 'Arial', sans-serif;
}

ul {
  list-style-type: none; 
  padding: 0; 
}

li {
  background-color: #7EB2DD; 
  color: #fff; 
  margin: 10px 0; 
  padding: 10px; 
  border-radius: 5px; 
  transition: background-color 0.3s; 
}

li:hover {
  background-color: #445E93; 
}
</style>
