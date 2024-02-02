<template>
    <div class="card text-center transition duration-300 ease-in-out transform hover:scale-105">
      <img :src="`${product.image}`" class="thumb" />
      <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
      <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  const { product } = defineProps(['product'])
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
    border-radius: 10px;
    padding: 1rem;
  }
  
  .thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;

  }
  
  /* Hover Effect */
  .card:hover {
    /* Adjust the scale factor and other properties based on your preference */
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  }
  </style>
  