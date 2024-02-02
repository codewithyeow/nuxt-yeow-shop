<template>
    <div>
      <Header>
        <Title> Yeow product | {{ product.Title }}</Title>
        <Meta name="description" :content="product.description" />

      </Header>
      <ProductDetail :product="product" />
    </div>
</template>

<script setup>
  const { id } = useRoute().params
  const uri = 'https://fakestoreapi.com/products/' + id

  //  fetch the products
  const { data: product } = await useFetch(uri, { key: id })

  if(!product.value){
    throw createError ({ statusCode: 404, message: 'Product not found' , fatal: true})
  }

  definePageMeta({
    layout: "products",
  })
</script>