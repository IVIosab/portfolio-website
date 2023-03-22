<script lang="ts">
	import { base } from '$app/paths';
</script>

<header>
	<h1>Mosab "IVIosab" Mohamed</h1>
	<nav>
		<ul>
			<li><a href="{base}/">Home</a></li>
			<li><a href="{base}/about">About</a></li>
			<li><a href="{base}/projects">Projects</a></li>
			<li><a href="{base}/comic">Comic</a></li>
		</ul>
	</nav>
</header>

<style>
	header {
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background-color: #333;
		color: #fff;
	}
	nav ul {
		display: flex;
		list-style: none;
	}

	nav ul li {
		margin: 0 1rem;
	}

	nav a {
		color: #fff;
	}

	a {
		text-decoration: none;
		color: black;
	}

	h1 {
		padding-left: 10px;
	}
</style>
