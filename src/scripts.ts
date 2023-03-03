interface Comic {
    alt: string,
    day: string,
    img: string,
    link: string,
    month: string,
    news: string,
    num: number, 
    safe_title: string, 
    title: string,
    transcript: string, 
    year: string
}

function getId(){
    const params = new URLSearchParams()
    params.append("email", "o.mohamed@innopolis.universtiy")
    return fetch('https://fwd.innopolis.app/api/hw2?'+params.toString())
    .then(r => r.json());
}

function getComic(id: number){
    const params = new URLSearchParams()
    params.append("num", id.toString())
    return fetch('https://getxkcd.vercel.app/api/comic?'+params.toString())
    .then(r => r.json());
}

window.addEventListener('load', async function(e){
    const id = await getId();
    const comic = await getComic(id)
    displayComic(comic)
})

async function displayComic(comicObj: Comic){
    const comicImg = document.getElementById("comic-img") as HTMLImageElement
    const comicTitle = document.getElementById("comic-title") as HTMLHeadingElement
    const comicDate = document.getElementById("comic-date") as HTMLHeadingElement
    comicTitle.textContent = comicObj.title 
    comicImg.alt = comicObj.alt
    comicImg.src = comicObj.img
    const date = new Date(comicObj.year.toString()+"-"+comicObj.month.toString()+"-"+comicObj.day.toString())
    comicDate.textContent = date.toLocaleDateString('en-us', {weekday: 'long', year: 'numeric',  month: 'long', day: 'numeric'})
}