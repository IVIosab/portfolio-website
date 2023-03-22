<script lang="ts">
	import type { Project } from '../interfaces/project';
	export let project: Project;
</script>

<li>
	<article id={project.projectId}>
		<a href={project.projectHref}>
			<h3>{project.projectName}</h3>
		</a>
		{#each project.projectDescription as paragraph}
			<p>{paragraph}</p>
		{/each}
	</article>
</li>

<style>
	li {
		flex: 48%;
		margin: 1rem;
	}
	article {
		margin: 1rem 0;
		text-align: center;
	}
	a {
		text-decoration: none;
		color: rgb(0, 0, 0);
	}
</style>
