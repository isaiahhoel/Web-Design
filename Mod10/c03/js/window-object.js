var msg = '<h2>Browser Window</h2><p>Width: ' + window.innerWidth + '</p>';
msg += '<p>Height: ' + window.innerHeight + '</p>';
msg += '<h2>History</h2><p>Items: ' + window.history.length + '</p>';
msg += '<h2>Screen</h2><p> Width: ' + window.screen.width + '</p>';
msg += '<p>Height: ' + window.screen.height + '</p>';
var el = document.getElementById('info');
el.innerHTML = msg;
alert('Current page: ' + window.location);