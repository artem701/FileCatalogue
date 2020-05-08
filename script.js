
// Развертка fiv класса folders, дочернего к folder
function unfold(folder)
{
   folder.childNodes.forEach( child => {
      if (child.tagName == "UL") 
         child.style.display = "block"
   })
}

// Свертка папки
function fold(folder)
{
    folder.querySelectorAll("ul").forEach(el => {el.style.display = "none"});
}

// Первоначальная свертка всего
document.querySelectorAll(".folders > li > ul").forEach(elem => {elem.style.display = "none"})


// Добавление событий по щелчку
document.querySelectorAll("ul.folders > li > span").forEach(
   elem => elem.addEventListener("click", (event) =>
   {
      if (elem == event.target){
         if (event.target.nextSibling.nextSibling.style.display == "none")
            unfold(event.target.parentNode)
         else
            fold(event.target.parentNode)
      }
   })
);

// добавление нового файла по пути route относительно папки dir
function add(route, dir)
{
   if (route.length == 0)
   {
      alert("Не указано имя файла");
      return false;
   }
   if (route.length == 1)
   {
      // так нельзя
      let allfiles = dir.querySelectorAll(".files");
      let files = allfiles[allfiles.length - 1];
      for (f of files.childNodes)
         if (f.innerHTML == route[0])
         {
            alert("Файл уже существует");
            unfold(dir);
            return true;
         }
         
      let file = document.createElement(`li`);
      file.innerHTML = route[0];
      files.appendChild(file);
      unfold(dir);
      return true;
   }
   
   for (d of dir.querySelector(".folders").childNodes )
      if (d.tagName == "LI" && d.querySelector("span").innerHTML == route[0]){
         route.splice(0,1)
         if(add(route, d))
         {
            unfold(dir);
            return true;
         }
         return false;
      }
      
   alert("Задан несуществующий путь");
   return false;
}

function addfile(){
   let str = document.querySelector("input").value;
   let route = str.split('/');
   
   let dir = document.querySelector(".catalogue");
   if(add(route, dir))
      unfold(dir);
}
