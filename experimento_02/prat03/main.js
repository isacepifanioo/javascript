var listaFilmes = []
listaFilmes[0] = 'https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_infinitywar_movie_poster_0bf1f0d0.jpeg?region=1,169,539,609'
listaFilmes[1] = 'https://m.media-amazon.com/images/I/81zqK4i3H0S.jpg'
listaFilmes[2] = 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg'

for (var i=0;i < 3;i++) {
document.write('<img src=' + listaFilmes[0] + '>')
document.write('<img src=' + listaFilmes[1] + '>')
document.write('<img src=' + listaFilmes[2] + '>')
}