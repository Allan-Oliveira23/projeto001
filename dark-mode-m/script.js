function toggleMode() {
    const html = document.documentElement

     html.classList.toggle("light")

   // if(html.classList.contains('light')) {
   //     html.classList.remove('light')
   // } else {
   //     html.classList.add('light')
  //  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains('light')) {
    img.setAttribute("src" , "../assets/avatar-light.png")
  } else {
    img.setAttribute("src" , "../assets/avatar.png")
  }

  if (html.classList.contains('light')) {
    img.setAttribute("alt" , "esta e uma imagem de um rapaz,com um oculos escuro ,uma jaqueta de couro preta e um fundo azul")
  } else {
    img.setAttribute("alt" , "esta e uma imagem de um rapaz,com uma blusa preta e um fundo amarelo")
  }

 
}