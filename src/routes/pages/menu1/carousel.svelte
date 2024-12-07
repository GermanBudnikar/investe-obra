<script lang="ts">
    import { Carousel } from 'flowbite-svelte';
    import {images} from '$lib/images/images';
  
    let index = 0;
    let image;
</script>

<div class="max-w-7xl space-y-4">

    <Carousel style="height:767px" {images} let:Indicators let:Controls on:change={({ detail }) => (image = detail)}>
      <Controls />
      <Indicators />
    </Carousel>
  
    <div class="rounded h-10 bg-gray-300 dark:bg-gray-700 dark:text-white p-2 my-2 text-center">
      {image?.alt}
    </div>
  </div>