console.log('in');

$(document).ready(onReady);

function onReady() {
    console.log('jQuery');
    $('.submitButton').on('click', addNewSong)

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

