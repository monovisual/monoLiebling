(window.webpackJsonp = window.webpackJsonp || []).push([
    [3], {
        1: function (e, n, t) {
            "use strict";
            t.r(n), t.d(n, "isRTL", (function () {
                return o
            })), t.d(n, "isMobile", (function () {
                return a
            })), t.d(n, "isDarkMode", (function () {
                return r
            })), t.d(n, "formatDate", (function () {
                return i
            })), t.d(n, "getParameterByName", (function () {
                return c
            })), t.d(n, "makeImagesZoomable", (function () {
                return u
            }));
            var o = function () {
                    var e = document.querySelector("html");
                    return ["ar", "he", "fa"].includes(e.getAttribute("lang"))
                },
                a = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "768px";
                    return window.matchMedia("(max-width: ".concat(e, ")")).matches
                },
                r = function () {
                    var e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
                    return e && e.matches
                },
                i = function (e) {
                    return e ? new Date(e).toLocaleDateString(document.documentElement.lang, {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }) : ""
                },
                c = function (e, n) {
                    n || (n = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                    var t = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(n);
                    return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
                },
                u = function (e, n) {
                    var t = n(".js-zoomable");
                    t.on("open", (function (n) {
                        a() && e(n.target).parent().hasClass("kg-gallery-image") && setTimeout((function () {
                            var n = e(".medium-zoom-image--opened"),
                                t = n[0].style.transform,
                                o = t.substr(0, t.indexOf(" ")),
                                a = parseFloat(o.substr(o.indexOf("(") + 1).split(")")[0]),
                                r = t.substr(t.indexOf(" ") + 1),
                                i = parseFloat(r.split(",")[1]),
                                c = "scale(1) translate3d(0, ".concat(i < 0 ? a * i + i : a * i - i, "px, 0)");
                            n.addClass("medium-zoom-image-mobile"), n[0].style.transform = c
                        }), 10)
                    })), t.on("close", (function () {
                        a() && e(event.target).parent().hasClass("kg-gallery-image") && e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")
                    }))
                }
        },
        15: function (e, n, t) {
            t(1), e.exports = t(25)
        },
        25: function (e, n) {}
    },
    [
        [15, 0, 1]
    ]
]);