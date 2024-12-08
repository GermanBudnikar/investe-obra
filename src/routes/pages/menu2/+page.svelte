<script lang="ts">
    import  Carousel  from '../menu2/carousel.svelte';
    import  Table1  from '../menu2/chart.svelte';
    import  Table2  from '../menu2/chart2.svelte';
    import  Table3  from '../menu2/chart3.svelte';
</script>

<div data-id="menu2-carousel">
  <Carousel></Carousel>
</div>

<div data-id="menu2-chart">
  <Table1></Table1>
</div>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu2-chart3">
  <Table3></Table3>
</div>

<hr class="my-12 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

<div data-id="menu2-chart2">
  <Table2></Table2>
</div>





