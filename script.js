let pokemonList = [
  { pokName: "Bulbasaur", height: 7, types: ["grass", "poison"] },
  { pokName: "Butterfree", height: 1.1, types: ["psychic", "normal"] },
  { pokName: "Beedrill", height: 1, types: ["rock", "fire"] },
];

document.querySelector("button").addEventListener("click", () => {
  let currentUserName = document.querySelector("#username").value;
  document.querySelector("#username-key").innerText = currentUserName;

  // for (i = 0; i<pokemonList.length; i++) {
    if (currentUserName == "Bulbasaur") {
      // document.querySelector("#pokheight").innerText = 0;
      document.querySelector("#pokheight").innerText = pokemonList[0].height;
      document.querySelector("#poktype").innerText = pokemonList[0].types;

    } else if (currentUserName == "Butterfree") {
      // document.querySelector("#pokheight").innerText = 0;
      document.querySelector("#pokheight").innerText = pokemonList[1].height;
      document.querySelector("#poktype").innerText = pokemonList[1].types;
    } else if (currentUserName == "Beedrill") {
      // document.querySelector("#pokheight").innerText = 0;
      document.querySelector("#pokheight").innerText = pokemonList[2].height;
      document.querySelector("#poktype").innerText = pokemonList[2].types;
    } else {
      document.write("wrong input");
    }
    const showImageButton = document.getElementById("show-image");
      const myImage = document.getElementById("image");
      const myImage2 = document.getElementById("image-2");
      const myImage3 = document.getElementById("image-3");
      showImageButton.addEventListener("click", () => {
        if(currentUserName=="Bulbasaur"){
         myImage.hidden = !myImage.hidden;
        }else if (currentUserName == "Butterfree") {
          myImage2.hidden = !myImage2.hidden;
        }else if (currentUserName == "Beedrill") {
          myImage3.hidden = !myImage3.hidden;
        
        }else{
          document.write('wrong input');
        }
      });
   
});

for (i = 0; i<pokemonList.length; i++){ 

  if(pokemonList[i].height<10 && pokemonList[i].height>5 ){
  document.write(`<p class="for">Pokname-${pokemonList[i].pokName},  (height-${pokemonList[i].height})-"Wow that's big",  types-[ ${pokemonList[i].types}]</p><br>`);
  }else if(pokemonList[i].height>=1){
    document.write(`<p class="for"> Pokname-${pokemonList[i].pokName},  (height-${pokemonList[i].height})-"Medium",  types-[ ${pokemonList[i].types}]</p><br>`); 
  }else{
    document.write(`<p class="for"> Pokname-${pokemonList[i].pokName}  (height-${pokemonList[i].height})-"Small",  types-[ ${pokemonList[i].types}]</p>`);
  }
};
