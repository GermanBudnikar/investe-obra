<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import {
	  Navbar,
	  NavBrand,
	  NavLi,
	  NavUl,
	  NavHamburger,
	  Sidebar,
	  SidebarGroup,
	  SidebarItem,
	  SidebarWrapper,
	  Drawer,
	  CloseButton,
	  SidebarDropdownWrapper
	} from 'flowbite-svelte';
	import { Cog } from 'svelte-heros-v2';
	import { sineIn } from 'svelte/easing';
	let transitionParams = {
	  x: -320,
	  duration: 200,
	  easing: sineIn
	};
	let breakPoint: number = 1024;
	let width: number;
	let backdrop: boolean = false;
	let activateClickOutside = true;
	let drawerHidden: boolean = false;
	$: if (width >= breakPoint) {
	  drawerHidden = false;
	  activateClickOutside = false;
	} else {
	  drawerHidden = true;
	  activateClickOutside = true;
	}
	onMount(() => {
	  if (width >= breakPoint) {
		drawerHidden = false;
		activateClickOutside = false;
	  } else {
		drawerHidden = true;
		activateClickOutside = true;
	  }
	});
	const toggleSide = () => {
	  if (width < breakPoint) {
		drawerHidden = !drawerHidden;
	  }
	};
	const toggleDrawer = () => {
	  drawerHidden = false;
	};
	$: activeUrl = $page.url.pathname;
	let spanClass = 'pl-2 self-center text-md text-gray-900 whitespace-nowrap dark:text-white';
	let divClass = 'w-full md:block md:w-auto pr-8';
	let ulClass = 'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium';
  </script>
  
  <svelte:window bind:innerWidth={width} />
  <Navbar let:hidden let:toggle>
	<NavHamburger on:click={toggleDrawer} btnClass="ml-3 lg:hidden" />
	<NavBrand href="/" class="lg:ml-64">
	  <Cog />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-4">
		Investe Obra
	  </span>
	</NavBrand>
	<NavUl {hidden} {divClass} {ulClass}>
	  <NavLi href="/pages/menu1">Informações do Empreendimento</NavLi>
	  <NavLi href="/pages/menu2">Custo e Receita</NavLi>
	  <NavLi href="/pages/menu3">Fluxo de Caixa</NavLi>
	  <NavLi href="/pages/menu4">Custo Sintético</NavLi>
	  <NavLi href="/pages/menu5">Receita e Custo Sintético</NavLi>
	</NavUl>
  </Navbar>
  
  <div class="flex px-4 mx-auto w-full">
	<main class="w-full mx-auto">
	  <slot />
	</main>
  </div>