<template>
  <div>
   <p><strong>name</strong>: {{ item.name }}</p>
   <p><strong>hair color</strong>: {{ item.hair_color }}</p>
   <p><strong>skin color</strong>: {{ item.skin_color }}</p>
   <p><strong>height</strong>: {{ item.height }}</p>
   <p><strong>mass</strong>: {{ item.mass }}</p>
  </div>
</template>

<script>
export default {
  namr: 'Character',
  props: ['id', 'item']
};
</script>
