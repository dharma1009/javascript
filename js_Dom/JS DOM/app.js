// // by using class name
// let smallimages = document.getElementsByClassName("oldImg")
// for(let i=0;i<smallimages.length;i++){
//     console.dir(smallimages[i].src)
// }
// to change the current image with child image 
// let smallimages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallimages.length;i++){
// smallimages[i].src ="assets/spiderman_img.png";
// console.log(`value of image no .${i} is changed`)
// }

// query selector

// console.dir(document.querySelector("p"))
// console.dir(document.querySelector("#description"))
// console.dir(document.querySelector(".oldImg"))
// console.dir(document.querySelector("div a")) //for single element
// console.dir(document.querySelectorAll("div a")) //represent node list

// style

let links = document.querySelectorAll(".box a");
for(link of links){
    link.style.color = "yellow";
}