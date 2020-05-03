
function unfold(folder)
{
   folder.childNodes.forEach( child => {
      if (child.tagName == "UL") 
         child.style.display = "block"
   })
}

function fold(folder)
{
    folder.querySelectorAll("ul").forEach(el => {el.style.display = "none"});
}

document.querySelectorAll(".folders > li > ul").forEach(elem => {elem.style.display = "none"})

document.querySelectorAll("ul.folders > li").forEach(
   elem => elem.addEventListener("click", (event) =>
   {
      if (elem == event.target){
         if (event.target.firstChild.nextSibling.style.display == "none")
            unfold(event.target)
         else
            fold(event.target)
      }
   })
);
