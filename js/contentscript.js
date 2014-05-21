console.log('Hello, world! This is the Chrome Extension Template speaking.');
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

$('img').each( function() {
  //$(this).attr('src', 'http://mario.nintendo.com/img/mario_logo.png');
});
$('body').append('<button id="boom">BOOM!</button>')
$('#boom').click(function() {
  $('div, p, img').effect("explode", {}, 5000);
});
//$('body > *').animate({top: '+=2000'}, 10000);

$('div').each( function() {
  $(this).animate({top: '+=' + randomIntFromInterval(100,500)}, 5000, function() {
    //$(this).effect("explode", {}, 3000);
  });
});

// ============================================================
// STORAGE
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/storage
// ============================================================
chrome.storage.local.get('count', function(data) {
    var count = 1;
    if (data.count) {
        count = data.count + 1;
    }
    console.log('You have loaded ' + count + ' web page(s) since you have installed the Chrome Extension Template.');
    chrome.storage.local.set({ 'count': count });
});

// ============================================================
// MESSAGE PASSING
// ------------------------------------------------------------
// https://developer.chrome.com/extensions/messaging
// ============================================================
chrome.runtime.sendMessage({ 'message': 'hello' }, function(response) {
    // To see how this message was handled, see js/background.js.
    console.log('The response from your message was: ' + response.message);
});