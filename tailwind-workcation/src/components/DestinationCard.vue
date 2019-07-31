<template>
  <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
    <img class="w-32 self-stretch object-center object-cover flex-shrink-0" :src=destination.imgUrl alt="demo">
    <div class="px-4 py-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ destination.city }}</h3>
      <p class="text-gray-600">${{ destination.avgPrice }} / night average</p>
      <div class="mt-4">
        <a href="#" class="text-brand-blue hover:text-brand-blue-light font-semibold">Explore {{ destination.propertyCount }} properties</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    destination: Object
  }
}
</script>
