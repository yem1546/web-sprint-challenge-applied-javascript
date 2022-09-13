const Header = (title, date, temp) => {
  const header = document.createElement("div")
  const dateEl = document.createElement("span")
  const titleEl = document.createElement("h1")
  const tempEl = document.createElement("span")
  header.classList.add("header")
  dateEl.classList.add("date")
  tempEl.classList.add("temp")
  dateEl.textContent = date
  titleEl.textContent = title
  tempEl.textContent = temp
  header.appendChild(dateEl)
  header.appendChild(titleEl)
  header.appendChild(tempEl)
  return header
}
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


const headerAppender = (selector) => {
  
  document.querySelector(selector).appendChild(Header("Samurai Jack", "5000AD", "This is the temp"))
}

export { Header, headerAppender }
