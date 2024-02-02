<template>
    <!-- Improved responsive card using Tailwind CSS -->
    <div class="card shadow-lg rounded-md p-8 max-w-md mx-auto md:max-w-full ">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- button go back to products -->
        <div class="md:col-span-2">
          <NuxtLink to="/products" class="btn">Go Back</NuxtLink>
        </div>
        <!-- product image -->
        <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-7">{{ product.title }}</h2>
        <p class="text-xl my-7">Price - ${{ product.price }}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Product description:</h3>
        <p class="mb-7">{{ product.description }}</p>
        <button class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])
</script>

<style scoped>
  img {
    max-width: 400px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adjust the shadow as needed */
  }
</style>
 
  