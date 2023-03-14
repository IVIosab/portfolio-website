<script lang="ts">
  import Contacts from "./Contacts.svelte";
</script>

<footer>
  <p>&copy; Mosab Mohamed 2023</p>
  <Contacts />
</footer>

<style>
  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #333;
    color: #fff;
  }
  p {
    margin: 5px;
  }
</style>
