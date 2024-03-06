(() => {
  "use strict";
  var e = {
      365: (e, n, t) => {
        t.d(n, { A: () => u });
        var r = t(601),
          o = t.n(r),
          i = t(314),
          a = t.n(i),
          s = t(417),
          l = t.n(s),
          c = new URL(t(624), t.b),
          d = a()(o()),
          m = l()(c);
        d.push([
          e.id,
          `*,\n*::after,\n*::before {\n    margin: 0;\n    user-select: none;\n    box-sizing: border-box;\n}\n\n:root {\n    --night: #222;\n    --wine: rgb(127, 55, 69);\n    --sienna: rgb(135, 42, 10);\n    --vanilla: rgb(222, 222, 130);\n    --naplesY: rgb(240, 210, 76);\n\n    --blueberryLight: rgb(141, 138, 204);\n    --blueberry: rgb(99, 96, 154);\n    --blueberryDeep: rgb(53, 50, 95);\n    --mint: rgb(93, 176, 120);\n    --mintDeep: rgb(63, 135, 87);\n\n    --chiliRed: rgb(227, 23, 10);\n    --statusGreen: rgb(9, 227, 45);\n    --madimi: "Madimi One";\n}\n\n/* FONTS */\n@font-face {\n    font-family: pacifico;\n    src: url(${m});\n}\n\n.madimi-one-regular {\n    font-family: "Madimi One", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n\nbody {\n    display: block;\n    background-color: rgba(222, 222, 130, 0.4);\n    /* background-color: var(--vanilla); */\n}\n\nbutton {\n    text-decoration: none;\n    outline: none;\n    color: none;\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n}\n\nlabel {\n    font-family: 'Times New Roman', Times, serif;\n    margin-bottom: 0.25rem;\n}\n\ninput {\n    margin-bottom: 0.5rem;\n}\n\nheader {\n    display: flex;\n    padding: 1rem;\n    margin: 0 0 1rem 0;\n    border-radius: 0 0 0.25rem 0.25rem;\n\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--wine);\n}\n\n.toDo {\n    font-family: pacifico;\n    font-size: 1.5rem;\n    color: var(--vanilla);\n}\n\n.addBtn {\n    max-height: 5rem;\n    width: 5rem;\n    border-radius: 0.5rem;\n    line-height: 1.1rem;\n    padding-bottom: 0.5rem;\n\n    font-family: pacifico;\n    font-size: 1rem;\n    color: var(--vanilla);\n}\n\n.addBtn:hover {\n    background-color: var(--vanilla);\n    color: var(--wine);\n    opacity: 0.75rem;\n    box-shadow: 0.15rem 0.15rem 0.25rem 0.1rem var(--night);\n}\n\n.content {\n    padding: 1rem 0 1rem 0;\n}\n\n\n.modal {\n    display: none;\n}\n\n.modalOpen {\n    display: flex;\n    z-index: 1;\n    position: fixed;\n    height: 100%;\n    width: 100%;\n    align-items: center;\n    justify-content: center;\n    backdrop-filter: blur(2px);\n}\n\n.inputContainer {\n    margin: 0 0 7rem 0;\n    max-width: 15rem;\n    max-height: 20rem;\n    border-radius: 0.45rem;\n\n    padding: 1rem;\n    background-color: var(--naplesY);\n    box-shadow: 0 0 0.5rem 0.15rem var(--wine);\n}\n\n.form {\n    margin-top: 1rem;\n}\n\n.exitForm {\n    margin: 0 0 1rem 0;\n    float: right;\n    height: 1.5rem;\n    width: 1.5rem;\n\n    color: var(--wine);\n    line-height: 50%;\n    text-align: center;\n\n    font-size: 1rem;\n    font-weight: 600;\n}\n\n.exitForm:hover {\n    background-color: var(--wine);\n    color: var(--vanilla);\n\n    border-radius: 50%;\n    box-shadow: 0.05rem 0.05rem 0.05rem 0.05rem var(--night);\n}\n\n\n\n\n/* CONTENT */\n.reading {\n    display: flex;\n    justify-content: center;\n}\n.projects, .items, .details {\n    display: block;\n    min-width: 8rem;\n    max-width: 12rem;\n}\n.projectsHead, .itemsHead, .detailsHead {\n    font-family: pacifico;\n    color: var(--vanilla);\n    min-width: inherit;\n    max-width: inherit;\n    text-align: center;\n    font-size: 1.3rem;\n}\n.projectsHead {\n    background-color: var(--blueberryDeep);\n    border-radius: 0.5rem 0 0 0;\n}\n.itemsHead {\n    background-color: var(--sienna);\n}\n.detailsHead {\n    background-color: var(--mintDeep);\n    border-radius: 0 0.5rem 0 0;\n}\n.projectsContent, .itemsContent, .detailsContent {\n    padding: 0 0.5rem;\n    min-width: inherit;\n    max-width: inherit;\n    /* overflow-y: scroll; */\n    transition: max-height 500ms ease-out;\n\n}\n.projectsContent {\n    background-color: var(--blueberryLight);\n    border-radius: 0 0 0 0.5rem;\n}\n.itemsContent {\n    background-color: var(--vanilla);\n}\n.detailsContent {\n    background-color: var(--mint);\n    border-radius: 0 0 0.5rem 0;\n}\n\n.projectBtn, .itemBtn {\n    font-size: 1rem;\n    color: var(--sienna);\n    text-align: center;\n    padding: 0.25rem 1rem;\n    font-family: var(--madimi);\n    font-weight: 600;\n}\n\n.detail {\n    font-family: var(--madimi);\n    color: var(--vanilla);\n    font-size: 1rem;\n}\n.deleteBtn {\n    margin: 0 0 0.25rem 0;\n    height: 1.3rem;\n    width: 7rem;\n    font-size: 1rem;\n    background-color: var(--chiliRed);\n    color: var(--vanilla);\n    border-radius: 0.5rem;\n}`,
          "",
        ]);
        const u = d;
      },
      314: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {",
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var l = this[s][0];
                  null != l && (a[l] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      417: (e) => {
        e.exports = function (e, n) {
          return (
            n || (n = {}),
            e
              ? ((e = String(e.__esModule ? e.default : e)),
                /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)),
                n.hash && (e += n.hash),
                /["'() \t\n]|(%20)/.test(e) || n.needQuotes
                  ? '"'.concat(
                      e.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : e)
              : e
          );
        };
      },
      601: (e) => {
        e.exports = function (e) {
          return e[1];
        };
      },
      72: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var i = {}, a = [], s = 0; s < e.length; s++) {
            var l = e[s],
              c = r.base ? l[0] + r.base : l[0],
              d = i[c] || 0,
              m = "".concat(c, " ").concat(d);
            i[c] = d + 1;
            var u = t(m),
              p = {
                css: l[1],
                media: l[2],
                sourceMap: l[3],
                supports: l[4],
                layer: l[5],
              };
            if (-1 !== u) n[u].references++, n[u].updater(p);
            else {
              var f = o(p, r);
              (r.byIndex = s),
                n.splice(s, 0, { identifier: m, updater: f, references: 1 });
            }
            a.push(m);
          }
          return a;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap &&
                  n.supports === e.supports &&
                  n.layer === e.layer
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var i = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              n[s].references--;
            }
            for (var l = r(e, o), c = 0; c < i.length; c++) {
              var d = t(i[c]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            i = l;
          };
        };
      },
      659: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(t);
        };
      },
      540: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n, e.options), n;
        };
      },
      56: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  n.styleTagTransform(r, e, n.options);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      113: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
      624: (e, n, t) => {
        e.exports = t.p + "c0d735fc04154e03a691.ttf";
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var i = (n[r] = { id: r, exports: {} });
    return e[r](i, i.exports, t), i.exports;
  }
  (t.m = e),
    (t.n = (e) => {
      var n = e && e.__esModule ? () => e.default : () => e;
      return t.d(n, { a: n }), n;
    }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e;
      t.g.importScripts && (e = t.g.location + "");
      var n = t.g.document;
      if (!e && n && (n.currentScript && (e = n.currentScript.src), !e)) {
        var r = n.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); )
            e = r[o--].src;
      }
      if (!e)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = e);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      var e = t(72),
        n = t.n(e),
        r = t(825),
        o = t.n(r),
        i = t(659),
        a = t.n(i),
        s = t(56),
        l = t.n(s),
        c = t(540),
        d = t.n(c),
        m = t(113),
        u = t.n(m),
        p = t(365),
        f = {};
      (f.styleTagTransform = u()),
        (f.setAttributes = l()),
        (f.insert = a().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = d()),
        n()(p.A, f),
        p.A && p.A.locals && p.A.locals;
      class h {
        constructor({
          title: e,
          dueDate: n,
          dueTime: t,
          details: r,
          priority: o,
          hostProject: i,
        }) {
          (this.title = e),
            (this.dueDate = n),
            (this.dueTime = t),
            (this.details = r),
            (this.priority = o),
            (this.hostProject = i);
        }
        print() {
          console.log("Title: " + this.title),
            console.log("Due Date: " + this.due),
            console.log("Details: " + this.details),
            console.log("Priority: " + this.priority);
        }
      }
      class g {
        constructor({
          title: e,
          details: n,
          dueDate: t,
          dueTime: r,
          priority: o,
        }) {
          (this.title = e),
            (this.dueDate = t),
            (this.dueTime = r),
            (this.details = n),
            (this.priority = o),
            (this.items = []);
        }
      }
      function v() {
        const e = new FormData(form),
          n = Object.fromEntries(e);
        console.log(n), console.log(n.hostProject);
        const t = new h({
          title: n.title,
          dueDate: n.dueDate,
          dueTime: n.dueTime,
          details: n.details,
          priority: n.priority,
          hostProject: n.hostProject,
        });
        return console.log(t.hostProject), t;
      }
      const b = document.getElementById("form"),
        y = document.getElementById("projectForm"),
        x = [],
        w = [],
        E = new g({
          title: "default",
          details: "",
          priority: null,
          dueDate: null,
          dueTime: null,
        });
      w.push(E),
        window.addEventListener("DOMContentLoaded", () => {
          const e = document.getElementById("hostProject");
          for (let n = 0; n < w.length; n++) {
            let t = w[n],
              r = document.createElement("option");
            (r.textContent = t.title), (r.value = t.title), e.appendChild(r);
          }
        });
      const j = document.getElementById("addBtn"),
        L = document.getElementById("exitForm"),
        C = document.getElementById("modal");
      j.addEventListener("click", () => {
        C.classList.add("modalOpen"),
          C.classList.remove("modal"),
          console.log(w);
      }),
        L.addEventListener("click", () => {
          C.classList.add("modal"), C.classList.remove("modalOpen");
        });
      const T = document.getElementById("projectModal"),
        k = document.getElementById("addPrjct"),
        D = document.getElementById("exitPrjctForm");
      k.addEventListener("click", () => {
        T.classList.add("modalOpen"), T.classList.remove("modal");
      }),
        D.addEventListener("click", () => {
          T.classList.add("modal"), T.classList.remove("modalOpen");
        }),
        b.addEventListener("submit", (e) => {
          e.preventDefault(),
            x.push(v()),
            (function (e) {
              for (let n = 0; n < w.length; n++)
                e.hostProject == w[n].title && w[n].items.push(e);
            })(v()),
            C.classList.add("modal"),
            C.classList.remove("modalOpen"),
            console.log(x),
            console.log(w);
        }),
        y.addEventListener("submit", (e) => {
          e.preventDefault(),
            (function () {
              const e = document.getElementById("projectForm"),
                n = new FormData(e),
                t = Object.fromEntries(n),
                r = JSON.stringify(t);
              console.log(t),
                console.log(r),
                localStorage.setItem("projectForm", r);
            })(),
            w.push(
              (function () {
                const e = localStorage.getItem("projectForm"),
                  n = JSON.parse(e),
                  t = new g({
                    title: n.prjctTitle,
                    dueDate: n.prjctDueDate,
                    dueTime: n.prjctDueTime,
                    details: n.prjctDetails,
                    priority: n.prjctPriority,
                  });
                return console.log(t), t;
              })(),
            ),
            T.classList.add("modal"),
            T.classList.remove("modalOpen");
          const n = document.getElementById("hostProject");
          n.innerHTML = "";
          for (let e = 0; e < w.length; e++) {
            let t = w[e],
              r = document.createElement("option");
            (r.textContent = t.title), (r.value = t.title), n.appendChild(r);
          }
          M(), console.log(w);
        });
      const B = document.getElementById("projectsContent"),
        I = document.getElementById("itemsContent"),
        O = document.getElementById("detailsContent");
      function M() {
        B.innerHTML = "";
        for (let e = 0; e < w.length; e++) {
          const n = document.createElement("button");
          n.classList.add("projectBtn"),
            (n.textContent = w[e].title),
            B.appendChild(n),
            n.addEventListener("click", () => {
              (O.innerHTML = ""),
                Object.keys(w[e]).forEach((n) => {
                  const t = w[e][n],
                    r = document.createElement("p");
                  r.classList.add("detail"),
                    (r.textContent = `${n}: ${t}`),
                    O.appendChild(r);
                });
              const n = document.createElement("button");
              n.classList.add("deleteBtn"),
                (n.textContent = "delete"),
                O.appendChild(n),
                n.addEventListener("click", () => {
                  w.splice(e, 1), M();
                }),
                (function n() {
                  I.innerHTML = "";
                  for (let t = 0; t < w[e].items.length; t++) {
                    const r = w[e].items[t],
                      o = document.createElement("button");
                    o.classList.add("itemBtn"),
                      (o.textContent = w[e].items[t].title),
                      I.appendChild(o),
                      o.addEventListener("click", () => {
                        (O.innerHTML = ""),
                          Object.keys(r).forEach((e) => {
                            const n = r[e],
                              t = document.createElement("p");
                            t.classList.add("detail"),
                              (t.textContent = `${e}: ${n}`),
                              O.appendChild(t);
                          });
                        const o = document.createElement("button");
                        o.classList.add("deleteBtn"),
                          (o.textContent = "delete"),
                          O.appendChild(o),
                          o.addEventListener("click", () => {
                            w[e].items.splice(t, 1), n();
                          });
                      });
                  }
                })();
            });
        }
      }
      M();
    })();
})();
