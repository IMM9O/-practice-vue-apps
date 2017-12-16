<template>
  <div>
   <p><strong>name</strong>: {{ item.name }}</p>
   <p><strong>gravity</strong>: {{ item.gravity }}</p>
   <p><strong>population</strong>: {{ item.population }}</p>
   <p><strong>surface water</strong>: {{ item.surface_water }}</p>
   <p><strong>terrain</strong>: {{ item.terrain }}</p>
  </div>
</template>

<script>
export default {
  name: 'Plants',
  props: ['item']
};
</script>
