<script lang="ts">
  import type { Comic } from "./comic";

  async function getId(): Promise<number> {
    const params = new URLSearchParams();
    params.append("email", "o.mohamed@innopolis.university");
    const res: Response = await fetch(
      "https://fwd.innopolis.app/api/hw2?" + params.toString()
    );
    const id: number = await res.json();
    return id;
  }

  async function getComic(id: number): Promise<Comic> {
    const params = new URLSearchParams();
    params.append("num", id.toString());
    const res: Response = await fetch(
      "https://getxkcd.vercel.app/api/comic?" + params.toString()
    );
    const object: Comic = await res.json();
    return object;
  }

  async function retriveComic(): Promise<Comic> {
    const id: number = await getId();
    const comic: Comic = await getComic(id);
    return comic;
  }

  function beautifyDate(year: string, month: string, day: string): string {
    const fullDate = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    const shortDate: string = fullDate.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return shortDate;
  }
</script>

<section id="comic">
  <h2>Here's a comic</h2>
  {#await retriveComic()}
    <h3 id="comic-loading-title">loading...</h3>
    <img
      id="comic-loading-img"
      src="../../images/loading.jpg"
      alt="loading..."
    />
  {:then comic}
    <h3 id="comic-title">{comic.title}</h3>
    <img id="comic-img" src={comic.img} alt={comic.alt} />
    <p id="comic-date">
      {beautifyDate(comic.year, comic.month, comic.day)}
    </p>
  {:catch}
    <h3 id="comic-error">An error has occured</h3>
  {/await}
</section>

<style>
  h2 {
    font-size: 1.5rem;
    text-align: center;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
</style>
