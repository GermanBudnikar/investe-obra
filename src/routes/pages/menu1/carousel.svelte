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
			id: 2,
			width: 800,
			height: 1200,
			src: "https://t3.ftcdn.net/jpg/00/85/79/92/360_F_85799278_0BBGV9OAdQDTLnKwAPBCcg1J7QtiieJY.jpg",
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