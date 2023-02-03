var listaDeFilmes = ['https://br.web.img2.acsta.net/pictures/21/12/16/10/26/5839797.jpg', 'https://br.web.img2.acsta.net/pictures/21/10/27/11/49/5430171.jpg', 'https://criticalhits.com.br/wp-content/uploads/2019/03/image.jpg', 'https://sm.ign.com/ign_br/screenshot/default/pokemon-first_32qq.jpg', 'https://www.intoxianime.com/wp-content/uploads/2022/09/fdaie8ex0aaz_es.webp', 'https://animefire.net/img/animes/boku-no-hero-academia-the-movie-2-heroes-rising-large.webp?v=1', 'https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/d48d4a62b0ac6381c87bd040b69b0a89.jpe']
var i = 0
while (i < listaDeFilmes.length) {
    document.write('<img src=' + listaDeFilmes[i] + '>')
    i++
}