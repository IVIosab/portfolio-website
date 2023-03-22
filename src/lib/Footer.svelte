<script lang="ts">
	import Contacts from './Contacts.svelte';
</script>

<footer>
	<p>&copy; Mosab Mohamed 2023</p>
	<Contacts />
</footer>

<style>
	footer {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem;
		background-color: #333;
		color: #fff;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
	}
	p {
		margin: 5px;
	}
</style>
