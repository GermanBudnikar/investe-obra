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
	<NavHamburger on:click={toggle} />
	<NavUl {hidden} {divClass} {ulClass}>
	  <NavLi href="/">Início</NavLi>
	  <NavLi href="/pages/about">Sobre</NavLi>
	</NavUl>
  </Navbar>
  <Drawer
	transitionType="fly"
	{backdrop}
	{transitionParams}
	bind:hidden={drawerHidden}
	bind:activateClickOutside
	width="w-64"
	class="overflow-scroll pb-32"
	id="sidebar"
  >
	<div class="flex items-center">
	  <CloseButton on:click={() => (drawerHidden = true)} class="mb-4 dark:text-white lg:hidden" />
	</div>
	<Sidebar asideClass="w-54">
	  <SidebarWrapper divClass="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
		<SidebarGroup>
		  <SidebarItem label="Início" href="/" on:click={toggleSide} active={activeUrl === `/`} />
		  <SidebarItem
			label="Sobre"
			href="/pages/about"
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		  />
		  
		<SidebarItem
			label="Menu 1"
			href={`/pages/menu1`}
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		/>
		<SidebarItem
			label="Menu 2"
			href="/pages/menu2"
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		/>
		<SidebarItem
			label="Menu 3"
			href="/pages/menu3"
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		/>
		<SidebarItem
			label="Orçamento Obra Analítico"
			href="/pages/menu4"
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		/>
		<SidebarItem
			label="Resultado"
			href="/pages/menu5"
			{spanClass}
			on:click={toggleSide}
			active={activeUrl === '/#'}
		/>

		</SidebarGroup>
	  </SidebarWrapper>
	</Sidebar>
  </Drawer>
  <div class="flex px-4 mx-auto w-full">
	<main class="lg:ml-72 w-full mx-auto">
	  <slot />
	</main>
  </div>