var listaFilmes = ['https://lumiere-a.akamaihd.net/v1/images/au_marvel_theavengers_infinitywar_movie_poster_0bf1f0d0.jpeg?region=1,169,539,609', 'https://m.media-amazon.com/images/I/81zqK4i3H0S.jpg', 'https://br.web.img3.acsta.net/pictures/22/03/02/19/26/3666027.jpg', 'https://br.web.img2.acsta.net/pictures/21/10/27/11/49/5430171.jpg', 'https://jpimg.com.br/uploads/2018/07/dragon-ball-super-broly-733x1024.jpeg']

for (var i=0;i < listaFilmes.length;i++) {
    document.write('<img src=' + listaFilmes[i] + '>')
}