(window.webpackJsonp = window.webpackJsonp || []).push([
    [6], {
        1: function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "isRTL", (function () {
                return a
            })), n.d(e, "isMobile", (function () {
                return o
            })), n.d(e, "isDarkMode", (function () {
                return i
            })), n.d(e, "formatDate", (function () {
                return s
            })), n.d(e, "getParameterByName", (function () {
                return r
            })), n.d(e, "makeImagesZoomable", (function () {
                return c
            }));
            var a = function () {
                    var t = document.querySelector("html");
                    return ["ar", "he", "fa"].includes(t.getAttribute("lang"))
                },
                o = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "768px";
                    return window.matchMedia("(max-width: ".concat(t, ")")).matches
                },
                i = function () {
                    var t = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
                    return t && t.matches
                },
                s = function (t) {
                    return t ? new Date(t).toLocaleDateString(document.documentElement.lang, {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }) : ""
                },
                r = function (t, e) {
                    e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
                    var n = new RegExp("[?&]".concat(t, "(=([^&#]*)|&|#|$)")).exec(e);
                    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                },
                c = function (t, e) {
                    var n = e(".js-zoomable");
                    n.on("open", (function (e) {
                        o() && t(e.target).parent().hasClass("kg-gallery-image") && setTimeout((function () {
                            var e = t(".medium-zoom-image--opened"),
                                n = e[0].style.transform,
                                a = n.substr(0, n.indexOf(" ")),
                                o = parseFloat(a.substr(a.indexOf("(") + 1).split(")")[0]),
                                i = n.substr(n.indexOf(" ") + 1),
                                s = parseFloat(i.split(",")[1]),
                                r = "scale(1) translate3d(0, ".concat(s < 0 ? o * s + s : o * s - s, "px, 0)");
                            e.addClass("medium-zoom-image-mobile"), e[0].style.transform = r
                        }), 10)
                    })), n.on("close", (function () {
                        o() && t(event.target).parent().hasClass("kg-gallery-image") && t(".medium-zoom-image").removeClass("medium-zoom-image-mobile")
                    }))
                }
        },
        21: function (t, e, n) {
            t.exports = n(22)
        },
        22: function (t, e, n) {
            "use strict";
            n.r(e);
            var a = n(0),
                o = n.n(a),
                i = (n(6), n(14)),
                s = n(3),
                r = n(4),
                c = n.n(r),
                l = n(2),
                u = n(1),
                d = null,
                m = null,
                f = window.pageYOffset,
                p = 0,
                g = 0,
                h = 0,
                w = !1;

            function b() {
                f = window.pageYOffset, y()
            }

            function v(t) {
                Object(u.isMobile)("1023px") ? (o()("body").addClass("share-menu-displayed"), setTimeout((function () {
                    d.removeAttr("data-aos")
                }), t)) : (Object(i.a)(".js-sticky", {
                    stickyBitStickyOffset: 100
                }), o()("body").removeClass("share-menu-displayed"))
            }

            function k() {
                x(), v(100), setTimeout((function () {
                    O(), y()
                }), 200)
            }

            function y() {
                w || requestAnimationFrame(j), w = !0
            }

            function j() {
                var t = g - p,
                    e = Math.ceil(f / t * 100);
                e <= 100 && function (t) {
                    if (t <= 100) {
                        var e = h - t / 100 * h;
                        m[0].style.strokeDashoffset = e
                    }
                }(e), w = !1
            }

            function x() {
                p = window.innerHeight, g = o()(document).height()
            }

            function O() {
                var t = m.parent().width(),
                    e = t / 2,
                    n = Object(u.isMobile)() ? 2 : 3;
                m.parent().attr("viewBox", "0 0 ".concat(t, " ").concat(t)), m.attr("stroke-width", n), m.attr("r", e - (n - 1)), m.attr("cx", e), m.attr("cy", e), h = 2 * e * Math.PI, m[0].style.strokeDasharray = "".concat(h, " ").concat(h), m[0].style.strokeDashoffset = h
            }

            function C() {
                m = o()(".js-progress"), x(), O(), j(), setTimeout((function () {
                    m.parent().css("opacity", 1)
                }), 300)
            }
            o()(document).ready((function () {
                d = o()(".js-aos-wrapper");
                var t = o()(".js-scrolltop"),
                    e = o()(".js-load-comments"),
                    n = o()(".js-comments-iframe"),
                    a = o()(".js-recommended-articles");
                c()(".js-post-content"),
                    function () {
                        for (var t = document.querySelectorAll(".kg-gallery-image img"), e = 0, n = t.length; e < n; e++) {
                            var a = t[e].closest(".kg-gallery-image"),
                                o = t[e].attributes.width.value / t[e].attributes.height.value;
                            a.style.flex = "".concat(o, " 1 0%")
                        }
                    }(), v(1e3), a.length > 0 && (a.on("init", (function () {
                        C(), Object(l.a)(".js-article-card-title", 100), Object(l.a)(".js-article-card-title-no-image", 250)
                    })), a.slick({
                        arrows: !0,
                        infinite: !0,
                        prevArrow: '<button class="m-icon-button filled in-recommended-articles slick-prev" aria-label="Previous"><span class="icon-arrow-left"></span></button>',
                        nextArrow: '<button class="m-icon-button filled in-recommended-articles slick-next" aria-label="Next"><span class="icon-arrow-right"></span></button>',
                        mobileFirst: !0,
                        responsive: [{
                            breakpoint: 720,
                            settings: {
                                slidesToShow: 2
                            }
                        }, {
                            breakpoint: 1023,
                            settings: {
                                arrows: !1,
                                slidesToShow: 3
                            }
                        }],
                        rtl: Object(u.isRTL)()
                    })), t.click((function () {
                        o()("html, body").animate({
                            scrollTop: 0
                        }, 500)
                    })), e.click((function () {
                        e.parent().hide(), n.fadeIn("slow")
                    })), o()(".js-post-content").find("img").each((function () {
                        o()(this).closest("figure").hasClass("kg-bookmark-card") || o()(this).addClass("js-zoomable");
                        var t = o()(this).parent().find("figcaption");
                        t ? o()(this).attr("alt", t.text()) : o()(this).attr("alt", "")
                    })), Object(u.makeImagesZoomable)(o.a, s.a), window.addEventListener("scroll", b, {
                        passive: !0
                    }), window.addEventListener("resize", k, {
                        passive: !0
                    })
            })), o()(window).on("load", (function () {
                C()
            }))
        }
    },
    [
        [21, 0, 1]
    ]
]);