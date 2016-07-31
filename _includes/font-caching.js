function loadFont(fontName, woffUrl, woff2Url) {
  var nua = navigator.userAgent;
  var noSupport = !window.addEventListener // IE8 and melow
        || (nua.match(/(Android (2|3|4.0|4.1|4.2|4.3))|(Opera (Mini|Mobi))/) && !nua.match(/Chrome/)) // Android Stock Browser until 4.4 and Opera Mini

  if (noSupport) {
    return;
  }

  var loSto = {};
  try {
    loSto = localStorage || {};
  } catch(ex) {}

  var localStoragePrefix = 'x-font-' + fontName;
  var localStorageUrlKey = localStoragePrefix + 'url';
  var localStorageCssKey = localStoragePrefix + 'css';
  var storedFontUrl = loSto[localStorageUrlKey];
  var storedFontCss = loSto[localStorageCssKey];

  var styleElement = document.createElement('style');
  styleElement.rel = 'stylesheet';
  document.head.appendChild(styleElement);

  if (storedFontCss && (storedFontUrl === woffUrl || storedFontUrl === woff2Url)) {

    styleElement.textContent = storedFontCss;
  } else {

    var url = (woff2Url && supportsWoff2())
    ? woff2Url 
    : woffUrl; 

    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        loSto[localStorageUrlKey] = url;
        loSto[localStorageCssKey] = styleElement.textContent = request.responseText;
      }
    };
    request.send();
  }

  function supportsWoff2() {
    if (!window.FontFace) {
      return false;
    }

    var f = new FontFace('t', 'url("data:application/font-woff2,") format("woff2")', {});
    f.load();

    return f.status === 'loading';
  }
}