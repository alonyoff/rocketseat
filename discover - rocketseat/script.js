function toggleMode(){
    const html = document.documentElement

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

    html.classList.toggle('light')

    //meu codigo
    const img = document.querySelector("#profile img")
    if(html.classList.contains("light")){
        img.setAttribute('src', 'assets/avatar-light.png')
        img.setAttribute('alt', 'com oculos escuros')
    }
    else{
        img.setAttribute('src', 'assets/avatar.png')
        img.setAttribute('alt', 'sem oculos')
    }
}