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
        console.log('response', res);
        res.forEach(function (music) {
            $('.songlist').append(
                `<tr>
                    <td>${music.title}</td>
                    <td>${music.artist}</td>
                </tr>`
            )
        })
    })


}


function addNewSong() {
    $('.songlist').prepend(
        '<tr>' +
        '<td>' + $('.titleInput').val() + '</td>' +
        '<td>' + $('.artistInput').val() + '</td>' +
        '</tr>'
    );
    $("input").val("");
}

