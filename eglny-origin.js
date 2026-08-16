/** Sister EGLNY origin — local preview uses the EGLNY http.server, not production. */
(function (root) {
  function eglnyUrl(pathname) {
    var host = location.hostname;
    var origin =
      host === "localhost" || host === "127.0.0.1" ? "http://localhost:8765" : "https://eglny.com";
    var path = pathname.charAt(0) === "/" ? pathname : "/" + pathname;
    return origin + path;
  }

  function redirectToEglny(pathname) {
    var dest = eglnyUrl(pathname);
    var link = document.querySelector("a[data-eglny-dest]");
    if (link) link.setAttribute("href", dest);
    location.replace(dest);
  }

  root.eglnyUrl = eglnyUrl;
  root.redirectToEglny = redirectToEglny;
})(window);
