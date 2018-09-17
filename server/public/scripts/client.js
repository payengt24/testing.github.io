console.log('in');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery');
    $('.submitButton').on('click', addNewSong)
    getAllMusic();

}

function getAllMusic() {
    $.ajax({
        method: 'GET',
        url: '/musicGet'
    })
    .then(function (res) {
        $('.songlist').empty();
        console.log('response', res);
        res.forEach(function (music) {
            $('.songlist').prepend(
                `<tr>
                    <td>${music.title}</td>
                    <td>${music.artist}</td>
                </tr>`
            )
        })
    })


}


function addNewSong() {
    const newSong = {
        title: $('.titleInput').val(),
        artist: $('.artistInput').val(),
    }
    console.log('newSong', newSong)
    $.ajax({
        method: 'POST',
        url: '/musicPost',
        data: newSong
    })
    .then(function (res) {
        console.log('response on POST', res);
        getAllMusic();
    })
}

