<script>
	import { Slidy } from "@slidy/svelte";

	const slides = [
		{
			id: 1,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/apartamentos.png",
      alt: 'Obra (Marketing 1)'
		},
    {
			id: 2,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/apartamentos2.png",
      alt: 'Obra (Marketing 2)'
		},
    {
			id: 3,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/vista.png",
      alt: 'Obra (Em Andamento)'
		},
    {
			id: 4,
			width: 800,
			height: 1200,
			src: "https://raw.githubusercontent.com/GermanBudnikar/investe-obra/refs/heads/main/src/lib/images/estoque.png",
      alt: 'Estoque'
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