<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({  name: 'entry', params: { id: 10 } })"
  >

    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5">Julio</span>
        <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Non duis enim nostrud ea amet veniam fugiat commodo magna in commodo in commodo. Amet do qui ea in non culpa velit ex anim labore laborum ad. Elit cupidatat consequat in ea. Ullamco aute duis sunt est nisi labore. Id reprehenderit voluptate non aliqua. Minim cupidatat duis in anim adipisicing pariatur minim laborum ut incididunt consectetur consequat. Laborum culpa non amet minim aliqua irure.    
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
      background-color: lighten($color: grey, $amount: 45);
      transition: 0.2s all ease-in;
    }

    .entry-description {
      font-size: 12px;
    }
  }


</style>