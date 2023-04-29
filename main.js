const searchone = document.getElementsByClassName("searchone")[0]
const search = document.getElementsByClassName("search")[0]
const x = document.getElementsByClassName("x")[0]
const xx = document.getElementsByClassName("xx")[0]
const box = document.getElementsByClassName("box")[0]
const boxcontainers = document.getElementsByClassName("boxcontainers")[0]
const icone =document.querySelectorAll ('.icons2 icons3' )
console.log(icone)
// --------------Event Add background in window-----------
search.addEventListener("click",
    (search) => {
        searchone.style.display = "block"
        console.log(searchone);
    })
box.addEventListener("click",
    () => {
        boxcontainers.style.display = "block"
    })

// --------------Event Remove background in window-----------
x.addEventListener("click",
    () => {
        searchone.style.display = "none"
    })
xx.addEventListener("click",
    () => {
        boxcontainers.style.display = "none"
    })



