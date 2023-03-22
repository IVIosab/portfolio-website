<script lang="ts">
	import { projects } from '../interfaces/project';
	import ProjectItem from './ProjectItem.svelte';
</script>

<section id="projects">
	<a href="https://github.com/IVIosab">
		<h2>My Projects</h2>
	</a>
	<ul>
		{#each projects as project}
			<ProjectItem {project} />
		{/each}
	</ul>
</section>

<style>
	section {
		margin: 1rem 0;
	}

	h2 {
		font-size: 1.5rem;
		text-align: center;
	}

	a {
		text-decoration: none;
		color: rgb(0, 0, 0);
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		list-style: none;
	}
</style>
