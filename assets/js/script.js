function onFocus() {
  if (this.className.indexOf('has-focus') === -1) {
  this.className += ' has-focus';}
}

function onBlur() {
  this.className = this.className.replace('has-focus','');
}

function init() {
  var footer_langPopup = document.querySelector(".footer_lang-popup");

  if (footer_langPopup.addEventListener) {
    footer_langPopup.addEventListener('focus', onFocus, true);
    footer_langPopup.addEventListener('blur', onBlur, true);
  } else {
    footer_langPopup.onfocusin = onFocus;
    footer_langPopup.onfocusout = onBlur;
  }
}

document.addEventListener("DOMContentLoaded", init);



