var startItem = document.getElementsByTagName('ul')[0];
var prevItem = startItem.firstChild;
var nextItem = startItem.lastChild;

prevItem.setAttribute('class', 'complete');
nextItem.setAttribute('class', 'cool');