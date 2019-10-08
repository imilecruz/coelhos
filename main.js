var cria = document.getElementById('cria');
var lista = [
    {
        img: 'https://www.petz.com.br/blog/wp-content/uploads/2018/10/dente-de-coelho.jpg'
    },
    {
        img: 'http://www.infoescola.com/wp-content/uploads/2008/07/coelho.jpg'
    },
    {
        img: 'http://www.petz.com.br/blhttpsog/wp-content/uploads/2018/10/dente-de-coelho.jpg'
    },
    {
        img: 'http://portalmelhoresamigos.com.br/wp-content/uploads/2016/11/coelho-filhote.png'
    },
    {
        img: 'https://www.petz.com.br/blog/wp-content/uploads/2019/03/coelho-roedores.jpg'
    }
]
var counter = 0 

cria.addEventListener('click', function() {
    if (counter < 4) {
        counter = counter + 1 
    } else {
        counter = 0 
    }       
    cria.setAttribute('src', lista[counter].img)
})