(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        1: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, "isRTL", (function () {
                return a
            })), n.d(t, "isMobile", (function () {
                return o
            })), n.d(t, "isDarkMode", (function () {
                return r
            })), n.d(t, "formatDate", (function () {
                return i
            })), n.d(t, "getParameterByName", (function () {
                return s
            })), n.d(t, "makeImagesZoomable", (function () {
                return c
            }));
            var a = function () {
                    var e = document.querySelector("html");
                    return ["ar", "he", "fa"].includes(e.getAttribute("lang"))
                },
                o = function () {
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
                s = function (e, t) {
                    t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                    var n = new RegExp("[?&]".concat(e, "(=([^&#]*)|&|#|$)")).exec(t);
                    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                },
                c = function (e, t) {
                    var n = t(".js-zoomable");
                    n.on("open", (function (t) {
                        o() && e(t.target).parent().hasClass("kg-gallery-image") && setTimeout((function () {
                            var t = e(".medium-zoom-image--opened"),
                                n = t[0].style.transform,
                                a = n.substr(0, n.indexOf(" ")),
                                o = parseFloat(a.substr(a.indexOf("(") + 1).split(")")[0]),
                                r = n.substr(n.indexOf(" ") + 1),
                                i = parseFloat(r.split(",")[1]),
                                s = "scale(1) translate3d(0, ".concat(i < 0 ? o * i + i : o * i - i, "px, 0)");
                            t.addClass("medium-zoom-image-mobile"), t[0].style.transform = s
                        }), 10)
                    })), n.on("close", (function () {
                        o() && e(event.target).parent().hasClass("kg-gallery-image") && e(".medium-zoom-image").removeClass("medium-zoom-image-mobile")
                    }))
                }
        },
        19: function (e, t, n) {
            e.exports = n(20)
        },
        20: function (e, t, n) {
            "use strict";
            n.r(t);
            var a = n(0),
                o = n.n(a),
                r = (n(6), n(2)),
                i = n(1);
            o()(document).ready((function () {
                var e = o()(".js-featured-articles");
                e.length > 0 && (e.on("init", (function () {
                    Object(r.a)(".js-featured-article-title", 200)
                })), e.slick({
                    arrows: !0,
                    infinite: !0,
                    prevArrow: '<button class="m-icon-button in-featured-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',
                    nextArrow: '<button class="m-icon-button in-featured-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',
                    mobileFirst: !0,
                    rtl: Object(i.isRTL)()
                }), setTimeout((function () {
                    e.slick("setPosition")
                }), 350))
            }))
        }
    },
    [
        [19, 0, 1]
    ]
]);