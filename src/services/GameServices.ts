var gameBaseUrl: string = '';

function init(baseUrl: string) {
    gameBaseUrl = baseUrl
}

function start() {
    alert('start game at ' + gameBaseUrl)
}

function getNextGameStep() {

}

function voteGameStep() {

}

function close() {

}

export default {
    init: init,
    start: start
}