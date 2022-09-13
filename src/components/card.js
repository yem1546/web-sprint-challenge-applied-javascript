import axios from "axios"

const Card = (article) => {
  const card = document.createElement("div")
  const headline = document.createElement("div")
  const author = document.createElement("div")
  const imageCont = document.createElement("div")
  const image = document.createElement("img")
  const sign = document.createElement("span")

  card.classList.add("card")
  headline.classList.add("headline")
  author.classList.add("author")
  imageCont.classList.add("img-container")
  headline.textContent = article.headline
  image.src = article.authorPhoto
  sign.textContent = `By ${article.authorName}`

  card.appendChild(headline)
  card.appendChild(author)
  author.appendChild(imageCont)
  imageCont.appendChild(image)
  author.appendChild(sign)
  return card
}

const cardAppender = (selector) => {
  axios.get("http://localhost:5001/api/articles")
  .then(ref => {
    const arrs = Object.values(ref.data.articles)
    arrs.forEach(arr => {
      arr.forEach(article =>{
        document.querySelector(selector).appendChild(Card(article))
      })
    });
  })
  .catch(err => console.log(err))
}

export { Card, cardAppender }
