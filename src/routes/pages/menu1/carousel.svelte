<script>
	import { Slidy } from "@slidy/svelte";

	const slides = [
		{
			id: 1,
			width: 800,
			height: 1200,
			src: "/src/lib/images/apartamentos.png",
		},
    {
			id: 3,
			width: 800,
			height: 1200,
			src: "/src/lib/images/vista.png",
		},
	];
  let index = 4, position = 0
</script>

<main>
    <Slidy 
      {slides}
      bind:index 
      bind:position
      snap="center"
      thumbnail
      />
  </main>

  <style>
    @import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
    main {
      height: 75%
    }
  </style>