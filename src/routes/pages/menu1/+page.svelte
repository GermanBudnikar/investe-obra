<script lang="ts">
    import  Table  from '../menu1/chart.svelte';
    import  Table2  from '../menu1/chart2.svelte';
    import  Table3  from '../menu1/chart3.svelte';
    import  Carousel  from '../menu1/carousel.svelte';
</script>

<h1 class="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white" >Informações do Empreendimento</h1>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu1-carousel">
  <Carousel></Carousel>
</div>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu3-chart">
  <Table3></Table3>
</div>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu1-chart">
  <Table></Table>
</div>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu2-chart">
  <Table2></Table2>
</div>




