interface Comic {
  alt: string;
  /** string value representing the day */
  day: string;
  /** represents the comic image link */
  img: string;
  link: string;
  /** string value representing the month starting from 1 for January */
  month: string;
  /** */
  news: string;
  /** number that represents the comic id */
  num: number;
  safe_title: string;
  title: string;
  transcript: string;
  /** string value representing the year */
  year: string;
}

async function getId(){
  const params = new URLSearchParams();
  params.append("email", "o.mohamed@innopolis.university");
  const res: Response = await fetch(
    "https://fwd.innopolis.app/api/hw2?" + params.toString()
  );
  const id: number = await res.json();
  return id;
}

async function getComic(id: number) {
  const params = new URLSearchParams();
  params.append("num", id.toString());
  const res: Response = await fetch(
    "https://getxkcd.vercel.app/api/comic?" + params.toString()
  );
  const object: Comic = await res.json();
  return object;
}

window.addEventListener("load", async function (e) {
  const id: number = await getId();
  const comic: Comic = await getComic(id);
  console.log(comic);
  displayComic(comic);
});

async function displayComic(comicObj: Comic) {
  const comicImg = document.getElementById(
    "comic-img"
  ) as HTMLImageElement;
  const comicTitle = document.getElementById(
    "comic-title"
  ) as HTMLHeadingElement;
  const comicDate = document.getElementById(
    "comic-date"
  ) as HTMLHeadingElement;
  
  const { year, month, day } = comicObj;
  
  comicTitle.textContent = comicObj.title;
  comicImg.alt = comicObj.alt;
  comicImg.src = comicObj.img;
  
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  
  comicDate.textContent = date.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
