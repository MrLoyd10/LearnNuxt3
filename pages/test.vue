<script setup>
const course = useTest();
console.log(course);

const countValue = ref(12);


const progress = ref([
  [true, false, true],
  [false, false, false]
])

console.log(progress.value);

if (!progress.value[2]) {
  progress.value[2] = [];
  console.log("No array 2 (1)")
}

if (progress.value[2]) {
  console.log("Theres array 2 (2)");
  progress.value[2][0] = false;
}

</script>

<template>
  <div>

    <h1>Increment/Decrement Counter</h1>
    <TestComponent 
      :count-value="countValue" 
      @update:increment="countValue++"  
      @update:decrement="countValue--"
    />


    

  </div>
</template>

<style scoped></style>
