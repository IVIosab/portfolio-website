<script lang="ts">
	import type { Contact } from '../interfaces/contact';
	export let contact: Contact;
</script>

<a id={contact.contactId} href={contact.contactHref}>
	<i class={contact.contactClass} />
</a>

<style>
	.fa-2xl {
		color: white;
		margin: 5px;
	}
	a {
		text-decoration: none;
		color: black;
	}
</style>
