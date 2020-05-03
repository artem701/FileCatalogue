
function fold(folder)
{
   if (folder.style != undefined) 
      folder.style.display = "block"
}

function unfold(folder)
{
   
}


document.querySelectorAll(".folders > li > ul").forEach(elem => {elem.style.display = "none"})

document.querySelectorAll("ul.folders > li").forEach(
   elem => elem.addEventListener("click", (event) =>
   {
      if (event.target.firstChild.nextSibling.style.display == "none")
         event.target.childNodes.forEach(el => {fold(el)})
      else
         event.target.querySelectorAll("ul").forEach(el => {el.style.display = "none"});
   })
);
