//tomamdo el cptrol del objeto
let plant1  = document.getElementById("plant1")

// plant1.addEventListener("click",()=>{})
//
plant1.addEventListener("click", ()=>{
    let name = prompt("Hola, ¿Cual es tu nombre?");
    if(name !== ""){
        alert(`${name} please, Seve the planet!!!🌱`);
    }
});