<script lang="ts">
  import { contacts } from "./contact";
  import ContactItem from "./ContactItem.svelte";
</script>

<div id="contacts">
  {#each contacts as contact}
    <ContactItem {contact} />
  {/each}
</div>
