console.log('worked');
let appNameElement = document.querySelector('#appHubAppName');
let header = document.querySelector('.apphub_HeaderStandardTop');
let appName = appNameElement.innerHTML.toLowerCase().replaceAll(' ', '-').replaceAll("'", '');
let torrentUrl = 'https://thelastgame.ru/';
let gameLink = document.createElement('a');
var style = document.createElement('style');
let eventBanner = document.querySelector('.saleEventBannerLink');
let gameHighlights = document.querySelector('#game_highlights');

//Link to torrent
gameLink.innerHTML = 'Torrent';
gameLink.href = torrentUrl + appName;
gameLink.style.background = '#52B941';
gameLink.style.padding = '12px';
gameLink.style.fontWeight = 'Bold';

//styles
appNameElement.style.margin = '0 0 20px 0';

if (eventBanner) {
    eventBanner.style.margin = '20px 0 0 0';
} else {
    gameHighlights.style.margin = '20px auto 0 auto';
}

header.appendChild(gameLink);
