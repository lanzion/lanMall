(function (win, doc) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = doc
        .getElementsByTagName("html")[0]
        .getBoundingClientRect().width;
      if (!clientWidth) return;
      docEl.style.fontSize = clientWidth / 16 + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false)
})(window, document);