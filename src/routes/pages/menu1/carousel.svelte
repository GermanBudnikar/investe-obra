<script>
	import { Slidy } from "@slidy/svelte";

	const slides = [
		{
			id: 1,
			width: 400,
			height: 400,
			src: "/src/lib/images/apartamentos.png",
		},
    {
			id: 2,
			width: 400,
			height: 400,
			src: "/src/lib/images/vista.png",
		},
    {
			id: 3,
			width: 400,
			height: 400,
			src: "/src/lib/images/apartamentos2.jpg",
		}
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
      height: 600px
    }
  </style>