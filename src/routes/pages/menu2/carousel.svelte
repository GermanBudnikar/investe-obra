<script>
	import { Slidy } from "@slidy/svelte";

	const slides = [
		{
			id: 1,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/custodaobra.png",
      alt: 'Custo da obra'
		},
    {
			id: 2,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/receitadaobra.png",
      alt: 'Receita da obra'
		},
    {
			id: 3,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/avançodaobra.png",
      alt: 'Avanço da obra'
		}
	];
  let index = 0, position = 0
</script>

<main>
  <Slidy  {slides}    bind:index     bind:position   snap="center"    thumbnail    >

  </Slidy> 
</main>

  <style>
    @import url('https://unpkg.com/@slidy/svelte/dist/slidy.css');
    main {
      height: 400px
    }
  </style>