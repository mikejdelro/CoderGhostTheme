! function (e) {
    "undefined" != typeof exports ? e(exports) : (window.hljs = e({}), "function" == typeof define && define.amd && define("hljs", [], function () {
        return window.hljs
    }))
}(function (e) {
    function t(e) {
        return e.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function r(e) {
        return e.nodeName.toLowerCase()
    }

    function a(e, t) {
        var r = e && e.exec(t);
        return r && 0 == r.index
    }

    function n(e) {
        return /^(no-?highlight|plain|text)$/i.test(e)
    }

    function i(e) {
        var t, r, a, i = e.className + " ";
        if (i += e.parentNode ? e.parentNode.className : "", r = /\blang(?:uage)?-([\w-]+)\b/i.exec(i)) return y(r[1]) ? r[1] : "no-highlight";
        for (i = i.split(/\s+/), t = 0, a = i.length; a > t; t++)
            if (y(i[t]) || n(i[t])) return i[t]
    }

    function s(e, t) {
        var r, a = {};
        for (r in e) a[r] = e[r];
        if (t)
            for (r in t) a[r] = t[r];
        return a
    }

    function c(e) {
        var t = [];
        return function a(e, n) {
            for (var i = e.firstChild; i; i = i.nextSibling) 3 == i.nodeType ? n += i.nodeValue.length : 1 == i.nodeType && (t.push({
                event: "start",
                offset: n,
                node: i
            }), n = a(i, n), r(i).match(/br|hr|img|input/) || t.push({
                event: "stop",
                offset: n,
                node: i
            }));
            return n
        }(e, 0), t
    }

    function o(e, a, n) {
        function i() {
            return e.length && a.length ? e[0].offset != a[0].offset ? e[0].offset < a[0].offset ? e : a : "start" == a[0].event ? e : a : e.length ? e : a
        }

        function s(e) {
            function a(e) {
                return " " + e.nodeName + '="' + t(e.value) + '"'
            }
            u += "<" + r(e) + Array.prototype.map.call(e.attributes, a).join("") + ">"
        }

        function c(e) {
            u += "</" + r(e) + ">"
        }

        function o(e) {
            ("start" == e.event ? s : c)(e.node)
        }
        for (var l = 0, u = "", d = []; e.length || a.length;) {
            var b = i();
            if (u += t(n.substr(l, b[0].offset - l)), l = b[0].offset, b == e) {
                d.reverse().forEach(c);
                do o(b.splice(0, 1)[0]), b = i(); while (b == e && b.length && b[0].offset == l);
                d.reverse().forEach(s)
            } else "start" == b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0])
        }
        return u + t(n.substr(l))
    }

    function l(e) {
        function t(e) {
            return e && e.source || e
        }

        function r(r, a) {
            return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (a ? "g" : ""))
        }

        function a(n, i) {
            if (!n.compiled) {
                if (n.compiled = !0, n.k = n.k || n.bK, n.k) {
                    var c = {},
                        o = function (t, r) {
                            e.cI && (r = r.toLowerCase()), r.split(" ").forEach(function (e) {
                                var r = e.split("|");
                                c[r[0]] = [t, r[1] ? Number(r[1]) : 1]
                            })
                        };
                    "string" == typeof n.k ? o("keyword", n.k) : Object.keys(n.k).forEach(function (e) {
                        o(e, n.k[e])
                    }), n.k = c
                }
                n.lR = r(n.l || /\b\w+\b/, !0), i && (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"), n.b || (n.b = /\B|\b/), n.bR = r(n.b), n.e || n.eW || (n.e = /\B|\b/), n.e && (n.eR = r(n.e)), n.tE = t(n.e) || "", n.eW && i.tE && (n.tE += (n.e ? "|" : "") + i.tE)), n.i && (n.iR = r(n.i)), void 0 === n.r && (n.r = 1), n.c || (n.c = []);
                var l = [];
                n.c.forEach(function (e) {
                    e.v ? e.v.forEach(function (t) {
                        l.push(s(e, t))
                    }) : l.push("self" == e ? n : e)
                }), n.c = l, n.c.forEach(function (e) {
                    a(e, n)
                }), n.starts && a(n.starts, i);
                var u = n.c.map(function (e) {
                    return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b
                }).concat([n.tE, n.i]).map(t).filter(Boolean);
                n.t = u.length ? r(u.join("|"), !0) : {
                    exec: function () {
                        return null
                    }
                }
            }
        }
        a(e)
    }

    function u(e, r, n, i) {
        function s(e, t) {
            for (var r = 0; r < t.c.length; r++)
                if (a(t.c[r].bR, e)) return t.c[r]
        }

        function c(e, t) {
            if (a(e.eR, t)) {
                for (; e.endsParent && e.parent;) e = e.parent;
                return e
            }
            return e.eW ? c(e.parent, t) : void 0
        }

        function o(e, t) {
            return !n && a(t.iR, e)
        }

        function b(e, t) {
            var r = v.cI ? t[0].toLowerCase() : t[0];
            return e.k.hasOwnProperty(r) && e.k[r]
        }

        function p(e, t, r, a) {
            var n = a ? "" : w.classPrefix,
                i = '<span class="' + n,
                s = r ? "" : "</span>";
            return i += e + '">', i + t + s
        }

        function m() {
            if (!x.k) return t(E);
            var e = "",
                r = 0;
            x.lR.lastIndex = 0;
            for (var a = x.lR.exec(E); a;) {
                e += t(E.substr(r, a.index - r));
                var n = b(x, a);
                n ? (B += n[1], e += p(n[0], t(a[0]))) : e += t(a[0]), r = x.lR.lastIndex, a = x.lR.exec(E)
            }
            return e + t(E.substr(r))
        }

        function f() {
            var e = "string" == typeof x.sL;
            if (e && !N[x.sL]) return t(E);
            var r = e ? u(x.sL, E, !0, C[x.sL]) : d(E, x.sL.length ? x.sL : void 0);
            return x.r > 0 && (B += r.r), e && (C[x.sL] = r.top), p(r.language, r.value, !1, !0)
        }

        function g() {
            return void 0 !== x.sL ? f() : m()
        }

        function h(e, r) {
            var a = e.cN ? p(e.cN, "", !0) : "";
            e.rB ? (M += a, E = "") : e.eB ? (M += t(r) + a, E = "") : (M += a, E = r), x = Object.create(e, {
                parent: {
                    value: x
                }
            })
        }

        function _(e, r) {
            if (E += e, void 0 === r) return M += g(), 0;
            var a = s(r, x);
            if (a) return M += g(), h(a, r), a.rB ? 0 : r.length;
            var n = c(x, r);
            if (n) {
                var i = x;
                i.rE || i.eE || (E += r), M += g();
                do x.cN && (M += "</span>"), B += x.r, x = x.parent; while (x != n.parent);
                return i.eE && (M += t(r)), E = "", n.starts && h(n.starts, ""), i.rE ? 0 : r.length
            }
            if (o(r, x)) throw new Error('Illegal lexeme "' + r + '" for mode "' + (x.cN || "<unnamed>") + '"');
            return E += r, r.length || 1
        }
        var v = y(e);
        if (!v) throw new Error('Unknown language: "' + e + '"');
        l(v);
        var k, x = i || v,
            C = {},
            M = "";
        for (k = x; k != v; k = k.parent) k.cN && (M = p(k.cN, "", !0) + M);
        var E = "",
            B = 0;
        try {
            for (var $, z, L = 0;;) {
                if (x.t.lastIndex = L, $ = x.t.exec(r), !$) break;
                z = _(r.substr(L, $.index - L), $[0]), L = $.index + z
            }
            for (_(r.substr(L)), k = x; k.parent; k = k.parent) k.cN && (M += "</span>");
            return {
                r: B,
                value: M,
                language: e,
                top: x
            }
        } catch (q) {
            if (-1 != q.message.indexOf("Illegal")) return {
                r: 0,
                value: t(r)
            };
            throw q
        }
    }

    function d(e, r) {
        r = r || w.languages || Object.keys(N);
        var a = {
                r: 0,
                value: t(e)
            },
            n = a;
        return r.forEach(function (t) {
            if (y(t)) {
                var r = u(t, e, !1);
                r.language = t, r.r > n.r && (n = r), r.r > a.r && (n = a, a = r)
            }
        }), n.language && (a.second_best = n), a
    }

    function b(e) {
        return w.tabReplace && (e = e.replace(/^((<[^>]+>|\t)+)/gm, function (e, t) {
            return t.replace(/\t/g, w.tabReplace)
        })), w.useBR && (e = e.replace(/\n/g, "<br>")), e
    }

    function p(e, t, r) {
        var a = t ? k[t] : r,
            n = [e.trim()];
        return e.match(/\bhljs\b/) || n.push("hljs"), -1 === e.indexOf(a) && n.push(a), n.join(" ").trim()
    }

    function m(e) {
        var t = i(e);
        if (!n(t)) {
            var r;
            w.useBR ? (r = document.createElementNS("http://www.w3.org/1999/xhtml", "div"), r.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")) : r = e;
            var a = r.textContent,
                s = t ? u(t, a, !0) : d(a),
                l = c(r);
            if (l.length) {
                var m = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
                m.innerHTML = s.value, s.value = o(l, c(m), a)
            }
            s.value = b(s.value), e.innerHTML = s.value, e.className = p(e.className, t, s.language), e.result = {
                language: s.language,
                re: s.r
            }, s.second_best && (e.second_best = {
                language: s.second_best.language,
                re: s.second_best.r
            })
        }
    }

    function f(e) {
        w = s(w, e)
    }

    function g() {
        if (!g.called) {
            g.called = !0;
            var e = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(e, m)
        }
    }

    function h() {
        addEventListener("DOMContentLoaded", g, !1), addEventListener("load", g, !1)
    }

    function _(t, r) {
        var a = N[t] = r(e);
        a.aliases && a.aliases.forEach(function (e) {
            k[e] = t
        })
    }

    function v() {
        return Object.keys(N)
    }

    function y(e) {
        return e = (e || "").toLowerCase(), N[e] || N[k[e]]
    }
    var w = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        N = {},
        k = {};
    return e.highlight = u, e.highlightAuto = d, e.fixMarkup = b, e.highlightBlock = m, e.configure = f, e.initHighlighting = g, e.initHighlightingOnLoad = h, e.registerLanguage = _, e.listLanguages = v, e.getLanguage = y, e.inherit = s, e.IR = "[a-zA-Z]\\w*", e.UIR = "[a-zA-Z_]\\w*", e.NR = "\\b\\d+(\\.\\d+)?", e.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", e.BNR = "\\b(0b[01]+)", e.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", e.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    }, e.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [e.BE]
    }, e.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [e.BE]
    }, e.PWM = {
        b: /\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|like)\b/
    }, e.C = function (t, r, a) {
        var n = e.inherit({
            cN: "comment",
            b: t,
            e: r,
            c: []
        }, a || {});
        return n.c.push(e.PWM), n.c.push({
            cN: "doctag",
            b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
            r: 0
        }), n
    }, e.CLCM = e.C("//", "$"), e.CBCM = e.C("/\\*", "\\*/"), e.HCM = e.C("#", "$"), e.NM = {
        cN: "number",
        b: e.NR,
        r: 0
    }, e.CNM = {
        cN: "number",
        b: e.CNR,
        r: 0
    }, e.BNM = {
        cN: "number",
        b: e.BNR,
        r: 0
    }, e.CSSNM = {
        cN: "number",
        b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
        r: 0
    }, e.RM = {
        cN: "regexp",
        b: /\//,
        e: /\/[gimuy]*/,
        i: /\n/,
        c: [e.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [e.BE]
        }]
    }, e.TM = {
        cN: "title",
        b: e.IR,
        r: 0
    }, e.UTM = {
        cN: "title",
        b: e.UIR,
        r: 0
    }, e.registerLanguage("apache", function (e) {
        var t = {
            cN: "number",
            b: "[\\$%]\\d+"
        };
        return {
            aliases: ["apacheconf"],
            cI: !0,
            c: [e.HCM, {
                cN: "tag",
                b: "</?",
                e: ">"
            }, {
                cN: "keyword",
                b: /\w+/,
                r: 0,
                k: {
                    common: "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername"
                },
                starts: {
                    e: /$/,
                    r: 0,
                    k: {
                        literal: "on off all"
                    },
                    c: [{
                        cN: "sqbracket",
                        b: "\\s\\[",
                        e: "\\]$"
                    }, {
                        cN: "cbracket",
                        b: "[\\$%]\\{",
                        e: "\\}",
                        c: ["self", t]
                    }, t, e.QSM]
                }
            }],
            i: /\S/
        }
    }), e.registerLanguage("bash", function (e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$[\w\d#@][\w\d_]*/
                }, {
                    b: /\$\{(.*?)}/
                }]
            },
            r = {
                cN: "string",
                b: /"/,
                e: /"/,
                c: [e.BE, t, {
                    cN: "variable",
                    b: /\$\(/,
                    e: /\)/,
                    c: [e.BE]
                }]
            },
            a = {
                cN: "string",
                b: /'/,
                e: /'/
            };
        return {
            aliases: ["sh", "zsh"],
            l: /-?[a-z\.]+/,
            k: {
                keyword: "if then else elif fi for while in do done case esac function",
                literal: "true false",
                built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
                operator: "-ne -eq -lt -gt -f -d -e -s -l -a"
            },
            c: [{
                cN: "shebang",
                b: /^#![^\n]+sh\s*$/,
                r: 10
            }, {
                cN: "function",
                b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
                rB: !0,
                c: [e.inherit(e.TM, {
                    b: /\w[\w\d_]*/
                })],
                r: 0
            }, e.HCM, e.NM, r, a, t]
        }
    }), e.registerLanguage("coffeescript", function (e) {
        var t = {
                keyword: "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super then unless until loop of by when and or is isnt not",
                literal: "true false null undefined yes no on off",
                built_in: "npm require console print module global window document"
            },
            r = "[A-Za-z$_][0-9A-Za-z$_]*",
            a = {
                cN: "subst",
                b: /#\{/,
                e: /}/,
                k: t
            },
            n = [e.BNM, e.inherit(e.CNM, {
                starts: {
                    e: "(\\s*/)?",
                    r: 0
                }
            }), {
                cN: "string",
                v: [{
                    b: /'''/,
                    e: /'''/,
                    c: [e.BE]
                }, {
                    b: /'/,
                    e: /'/,
                    c: [e.BE]
                }, {
                    b: /"""/,
                    e: /"""/,
                    c: [e.BE, a]
                }, {
                    b: /"/,
                    e: /"/,
                    c: [e.BE, a]
                }]
            }, {
                cN: "regexp",
                v: [{
                    b: "///",
                    e: "///",
                    c: [a, e.HCM]
                }, {
                    b: "//[gim]*",
                    r: 0
                }, {
                    b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
                }]
            }, {
                cN: "property",
                b: "@" + r
            }, {
                b: "`",
                e: "`",
                eB: !0,
                eE: !0,
                sL: "javascript"
            }];
        a.c = n;
        var i = e.inherit(e.TM, {
                b: r
            }),
            s = "(\\(.*\\))?\\s*\\B[-=]>",
            c = {
                cN: "params",
                b: "\\([^\\(]",
                rB: !0,
                c: [{
                    b: /\(/,
                    e: /\)/,
                    k: t,
                    c: ["self"].concat(n)
                }]
            };
        return {
            aliases: ["coffee", "cson", "iced"],
            k: t,
            i: /\/\*/,
            c: n.concat([e.C("###", "###"), e.HCM, {
                cN: "function",
                b: "^\\s*" + r + "\\s*=\\s*" + s,
                e: "[-=]>",
                rB: !0,
                c: [i, c]
            }, {
                b: /[:\(,=]\s*/,
                r: 0,
                c: [{
                    cN: "function",
                    b: s,
                    e: "[-=]>",
                    rB: !0,
                    c: [c]
                }]
            }, {
                cN: "class",
                bK: "class",
                e: "$",
                i: /[:="\[\]]/,
                c: [{
                    bK: "extends",
                    eW: !0,
                    i: /[:="\[\]]/,
                    c: [i]
                }, i]
            }, {
                cN: "attribute",
                b: r + ":",
                e: ":",
                rB: !0,
                rE: !0,
                r: 0
            }])
        }
    }), e.registerLanguage("cpp", function (e) {
        var t = {
                cN: "keyword",
                b: "\\b[a-z\\d_]*_t\\b"
            },
            r = {
                cN: "string",
                v: [e.inherit(e.QSM, {
                    b: '((u8?|U)|L)?"'
                }), {
                    b: '(u8?|U)?R"',
                    e: '"',
                    c: [e.BE]
                }, {
                    b: "'\\\\?.",
                    e: "'",
                    i: "."
                }]
            },
            a = {
                cN: "number",
                v: [{
                    b: "\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)"
                }, {
                    b: e.CNR
                }]
            },
            n = {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line pragma ifdef ifndef",
                c: [{
                    b: /\\\n/,
                    r: 0
                }, {
                    bK: "include",
                    e: "$",
                    c: [r, {
                        cN: "string",
                        b: "<",
                        e: ">",
                        i: "\\n"
                    }]
                }, r, a, e.CLCM, e.CBCM]
            },
            i = e.IR + "\\s*\\(",
            s = {
                keyword: "int float while private char catch export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const struct for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using class asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong",
                built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf",
                literal: "true false nullptr NULL"
            };
        return {
            aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
            k: s,
            i: "</",
            c: [t, e.CLCM, e.CBCM, a, r, n, {
                b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
                e: ">",
                k: s,
                c: ["self", t]
            }, {
                b: e.IR + "::",
                k: s
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + e.IR + "[\\*&\\s]+)+" + i,
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: s,
                i: /[^\w\s\*&]/,
                c: [{
                    b: i,
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: s,
                    r: 0,
                    c: [e.CLCM, e.CBCM, r, a]
                }, e.CLCM, e.CBCM, n]
            }]
        }
    }), e.registerLanguage("cs", function (e) {
        var t = "abstract as base bool break byte case catch char checked const continue decimal dynamic default delegate do double else enum event explicit extern false finally fixed float for foreach goto if implicit in int interface internal is lock long null when object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this true try typeof uint ulong unchecked unsafe ushort using virtual volatile void while async protected public private internal ascending descending from get group into join let orderby partial select set value var where yield",
            r = e.IR + "(<" + e.IR + ">)?";
        return {
            aliases: ["csharp"],
            k: t,
            i: /::/,
            c: [e.C("///", "$", {
                rB: !0,
                c: [{
                    cN: "xmlDocTag",
                    v: [{
                        b: "///",
                        r: 0
                    }, {
                        b: "<!--|-->"
                    }, {
                        b: "</?",
                        e: ">"
                    }]
                }]
            }), e.CLCM, e.CBCM, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                k: "if else elif endif define undef warning error line region endregion pragma checksum"
            }, {
                cN: "string",
                b: '@"',
                e: '"',
                c: [{
                    b: '""'
                }]
            }, e.ASM, e.QSM, e.CNM, {
                bK: "class interface",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [e.TM, e.CLCM, e.CBCM]
            }, {
                bK: "namespace",
                e: /[{;=]/,
                i: /[^\s:]/,
                c: [{
                    cN: "title",
                    b: "[a-zA-Z](\\.?\\w)*",
                    r: 0
                }, e.CLCM, e.CBCM]
            }, {
                bK: "new return throw await",
                r: 0
            }, {
                cN: "function",
                b: "(" + r + "\\s+)+" + e.IR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: t,
                c: [{
                    b: e.IR + "\\s*\\(",
                    rB: !0,
                    c: [e.TM],
                    r: 0
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    k: t,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }]
        }
    }), e.registerLanguage("css", function (e) {
        var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
            r = {
                cN: "function",
                b: t + "\\(",
                rB: !0,
                eE: !0,
                e: "\\("
            },
            a = {
                cN: "rule",
                b: /[A-Z\_\.\-]+\s*:/,
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: /\S/,
                    e: ":",
                    eE: !0,
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [r, e.CSSNM, e.QSM, e.ASM, e.CBCM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            };
        return {
            cI: !0,
            i: /[=\/|'\$]/,
            c: [e.CBCM, {
                cN: "id",
                b: /\#[A-Za-z0-9_-]+/
            }, {
                cN: "class",
                b: /\.[A-Za-z0-9_-]+/
            }, {
                cN: "attr_selector",
                b: /\[/,
                e: /\]/,
                i: "$"
            }, {
                cN: "pseudo",
                b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"']+/
            }, {
                cN: "at_rule",
                b: "@(font-face|page)",
                l: "[a-z-]+",
                k: "font-face page"
            }, {
                cN: "at_rule",
                b: "@",
                e: "[{;]",
                c: [{
                    cN: "keyword",
                    b: /\S+/
                }, {
                    b: /\s/,
                    eW: !0,
                    eE: !0,
                    r: 0,
                    c: [r, e.ASM, e.QSM, e.CSSNM]
                }]
            }, {
                cN: "tag",
                b: t,
                r: 0
            }, {
                cN: "rules",
                b: "{",
                e: "}",
                i: /\S/,
                c: [e.CBCM, a]
            }]
        }
    }), e.registerLanguage("diff", function (e) {
        return {
            aliases: ["patch"],
            c: [{
                cN: "chunk",
                r: 10,
                v: [{
                    b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/
                }, {
                    b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/
                }, {
                    b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/
                }]
            }, {
                cN: "header",
                v: [{
                    b: /Index: /,
                    e: /$/
                }, {
                    b: /=====/,
                    e: /=====$/
                }, {
                    b: /^\-\-\-/,
                    e: /$/
                }, {
                    b: /^\*{3} /,
                    e: /$/
                }, {
                    b: /^\+\+\+/,
                    e: /$/
                }, {
                    b: /\*{5}/,
                    e: /\*{5}$/
                }]
            }, {
                cN: "addition",
                b: "^\\+",
                e: "$"
            }, {
                cN: "deletion",
                b: "^\\-",
                e: "$"
            }, {
                cN: "change",
                b: "^\\!",
                e: "$"
            }]
        }
    }), e.registerLanguage("http", function (e) {
        return {
            aliases: ["https"],
            i: "\\S",
            c: [{
                cN: "status",
                b: "^HTTP/[0-9\\.]+",
                e: "$",
                c: [{
                    cN: "number",
                    b: "\\b\\d{3}\\b"
                }]
            }, {
                cN: "request",
                b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
                rB: !0,
                e: "$",
                c: [{
                    cN: "string",
                    b: " ",
                    e: " ",
                    eB: !0,
                    eE: !0
                }]
            }, {
                cN: "attribute",
                b: "^\\w",
                e: ": ",
                eE: !0,
                i: "\\n|\\s|=",
                starts: {
                    cN: "string",
                    e: "$"
                }
            }, {
                b: "\\n\\n",
                starts: {
                    sL: [],
                    eW: !0
                }
            }]
        }
    }), e.registerLanguage("ini", function (e) {
        var t = {
            cN: "string",
            c: [e.BE],
            v: [{
                b: "'''",
                e: "'''",
                r: 10
            }, {
                b: '"""',
                e: '"""',
                r: 10
            }, {
                b: '"',
                e: '"'
            }, {
                b: "'",
                e: "'"
            }]
        };
        return {
            aliases: ["toml"],
            cI: !0,
            i: /\S/,
            c: [e.C(";", "$"), e.HCM, {
                cN: "title",
                b: /^\s*\[+/,
                e: /\]+/
            }, {
                cN: "setting",
                b: /^[a-z0-9\[\]_-]+\s*=\s*/,
                e: "$",
                c: [{
                    cN: "value",
                    eW: !0,
                    k: "on off true false yes no",
                    c: [{
                        cN: "variable",
                        v: [{
                            b: /\$[\w\d"][\w\d_]*/
                        }, {
                            b: /\$\{(.*?)}/
                        }]
                    }, t, {
                        cN: "number",
                        b: /([\+\-]+)?[\d]+_[\d_]+/
                    }, e.NM],
                    r: 0
                }]
            }]
        }
    }), e.registerLanguage("java", function (e) {
        var t = e.UIR + "(<" + e.UIR + ">)?",
            r = "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private",
            a = "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
            n = {
                cN: "number",
                b: a,
                r: 0
            };
        return {
            aliases: ["jsp"],
            k: r,
            i: /<\/|#/,
            c: [e.C("/\\*\\*", "\\*/", {
                r: 0,
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }]
            }), e.CLCM, e.CBCM, e.ASM, e.QSM, {
                cN: "class",
                bK: "class interface",
                e: /[{;=]/,
                eE: !0,
                k: "class interface",
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "new throw return else",
                r: 0
            }, {
                cN: "function",
                b: "(" + t + "\\s+)+" + e.UIR + "\\s*\\(",
                rB: !0,
                e: /[{;=]/,
                eE: !0,
                k: r,
                c: [{
                    b: e.UIR + "\\s*\\(",
                    rB: !0,
                    r: 0,
                    c: [e.UTM]
                }, {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    k: r,
                    r: 0,
                    c: [e.ASM, e.QSM, e.CNM, e.CBCM]
                }, e.CLCM, e.CBCM]
            }, n, {
                cN: "annotation",
                b: "@[A-Za-z]+"
            }]
        }
    }), e.registerLanguage("javascript", function (e) {
        return {
            aliases: ["js"],
            k: {
                keyword: "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await",
                literal: "true false null undefined NaN Infinity",
                built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"
            },
            c: [{
                cN: "pi",
                r: 10,
                b: /^\s*['"]use (strict|asm)['"]/
            }, e.ASM, e.QSM, {
                cN: "string",
                b: "`",
                e: "`",
                c: [e.BE, {
                    cN: "subst",
                    b: "\\$\\{",
                    e: "\\}"
                }]
            }, e.CLCM, e.CBCM, {
                cN: "number",
                v: [{
                    b: "\\b(0[bB][01]+)"
                }, {
                    b: "\\b(0[oO][0-7]+)"
                }, {
                    b: e.CNR
                }],
                r: 0
            }, {
                b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
                k: "return throw case",
                c: [e.CLCM, e.CBCM, e.RM, {
                    b: /</,
                    e: />\s*[);\]]/,
                    r: 0,
                    sL: "xml"
                }],
                r: 0
            }, {
                cN: "function",
                bK: "function",
                e: /\{/,
                eE: !0,
                c: [e.inherit(e.TM, {
                    b: /[A-Za-z$_][0-9A-Za-z$_]*/
                }), {
                    cN: "params",
                    b: /\(/,
                    e: /\)/,
                    eB: !0,
                    eE: !0,
                    c: [e.CLCM, e.CBCM]
                }],
                i: /\[|%/
            }, {
                b: /\$[(.]/
            }, {
                b: "\\." + e.IR,
                r: 0
            }, {
                bK: "import",
                e: "[;$]",
                k: "import from as",
                c: [e.ASM, e.QSM]
            }, {
                cN: "class",
                bK: "class",
                e: /[{;=]/,
                eE: !0,
                i: /[:"\[\]]/,
                c: [{
                    bK: "extends"
                }, e.UTM]
            }],
            i: /#/
        }
    }), e.registerLanguage("json", function (e) {
        var t = {
                literal: "true false null"
            },
            r = [e.QSM, e.CNM],
            a = {
                cN: "value",
                e: ",",
                eW: !0,
                eE: !0,
                c: r,
                k: t
            },
            n = {
                b: "{",
                e: "}",
                c: [{
                    cN: "attribute",
                    b: '\\s*"',
                    e: '"\\s*:\\s*',
                    eB: !0,
                    eE: !0,
                    c: [e.BE],
                    i: "\\n",
                    starts: a
                }],
                i: "\\S"
            },
            i = {
                b: "\\[",
                e: "\\]",
                c: [e.inherit(a, {
                    cN: null
                })],
                i: "\\S"
            };
        return r.splice(r.length, 0, n, i), {
            c: r,
            k: t,
            i: "\\S"
        }
    }), e.registerLanguage("makefile", function (e) {
        var t = {
            cN: "variable",
            b: /\$\(/,
            e: /\)/,
            c: [e.BE]
        };
        return {
            aliases: ["mk", "mak"],
            c: [e.HCM, {
                b: /^\w+\s*\W*=/,
                rB: !0,
                r: 0,
                starts: {
                    cN: "constant",
                    e: /\s*\W*=/,
                    eE: !0,
                    starts: {
                        e: /$/,
                        r: 0,
                        c: [t]
                    }
                }
            }, {
                cN: "title",
                b: /^[\w]+:\s*$/
            }, {
                cN: "phony",
                b: /^\.PHONY:/,
                e: /$/,
                k: ".PHONY",
                l: /[\.\w]+/
            }, {
                b: /^\t+/,
                e: /$/,
                r: 0,
                c: [e.QSM, t]
            }]
        }
    }), e.registerLanguage("xml", function (e) {
        var t = "[A-Za-z0-9\\._:-]+",
            r = {
                b: /<\?(php)?(?!\w)/,
                e: /\?>/,
                sL: "php"
            },
            a = {
                eW: !0,
                i: /</,
                r: 0,
                c: [r, {
                    cN: "attribute",
                    b: t,
                    r: 0
                }, {
                    b: "=",
                    r: 0,
                    c: [{
                        cN: "value",
                        c: [r],
                        v: [{
                            b: /"/,
                            e: /"/
                        }, {
                            b: /'/,
                            e: /'/
                        }, {
                            b: /[^\s\/>]+/
                        }]
                    }]
                }]
            };
        return {
            aliases: ["html", "xhtml", "rss", "atom", "xsl", "plist"],
            cI: !0,
            c: [{
                cN: "doctype",
                b: "<!DOCTYPE",
                e: ">",
                r: 10,
                c: [{
                    b: "\\[",
                    e: "\\]"
                }]
            }, e.C("<!--", "-->", {
                r: 10
            }), {
                cN: "cdata",
                b: "<\\!\\[CDATA\\[",
                e: "\\]\\]>",
                r: 10
            }, {
                cN: "tag",
                b: "<style(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "style"
                },
                c: [a],
                starts: {
                    e: "</style>",
                    rE: !0,
                    sL: "css"
                }
            }, {
                cN: "tag",
                b: "<script(?=\\s|>|$)",
                e: ">",
                k: {
                    title: "script"
                },
                c: [a],
                starts: {
                    e: "</script>",
                    rE: !0,
                    sL: ["actionscript", "javascript", "handlebars"]
                }
            }, r, {
                cN: "pi",
                b: /<\?\w+/,
                e: /\?>/,
                r: 10
            }, {
                cN: "tag",
                b: "</?",
                e: "/?>",
                c: [{
                    cN: "title",
                    b: /[^ \/><\n\t]+/,
                    r: 0
                }, a]
            }]
        }
    }), e.registerLanguage("markdown", function (e) {
        return {
            aliases: ["md", "mkdown", "mkd"],
            c: [{
                cN: "header",
                v: [{
                    b: "^#{1,6}",
                    e: "$"
                }, {
                    b: "^.+?\\n[=-]{2,}$"
                }]
            }, {
                b: "<",
                e: ">",
                sL: "xml",
                r: 0
            }, {
                cN: "bullet",
                b: "^([*+-]|(\\d+\\.))\\s+"
            }, {
                cN: "strong",
                b: "[*_]{2}.+?[*_]{2}"
            }, {
                cN: "emphasis",
                v: [{
                    b: "\\*.+?\\*"
                }, {
                    b: "_.+?_",
                    r: 0
                }]
            }, {
                cN: "blockquote",
                b: "^>\\s+",
                e: "$"
            }, {
                cN: "code",
                v: [{
                    b: "`.+?`"
                }, {
                    b: "^( {4}|	)",
                    e: "$",
                    r: 0
                }]
            }, {
                cN: "horizontal_rule",
                b: "^[-\\*]{3,}",
                e: "$"
            }, {
                b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
                rB: !0,
                c: [{
                    cN: "link_label",
                    b: "\\[",
                    e: "\\]",
                    eB: !0,
                    rE: !0,
                    r: 0
                }, {
                    cN: "link_url",
                    b: "\\]\\(",
                    e: "\\)",
                    eB: !0,
                    eE: !0
                }, {
                    cN: "link_reference",
                    b: "\\]\\[",
                    e: "\\]",
                    eB: !0,
                    eE: !0
                }],
                r: 10
            }, {
                b: "^\\[.+\\]:",
                rB: !0,
                c: [{
                    cN: "link_reference",
                    b: "\\[",
                    e: "\\]:",
                    eB: !0,
                    eE: !0,
                    starts: {
                        cN: "link_url",
                        e: "$"
                    }
                }]
            }]
        }
    }), e.registerLanguage("nginx", function (e) {
        var t = {
                cN: "variable",
                v: [{
                    b: /\$\d+/
                }, {
                    b: /\$\{/,
                    e: /}/
                }, {
                    b: "[\\$\\@]" + e.UIR
                }]
            },
            r = {
                eW: !0,
                l: "[a-z/_]+",
                k: {
                    built_in: "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll"
                },
                r: 0,
                i: "=>",
                c: [e.HCM, {
                    cN: "string",
                    c: [e.BE, t],
                    v: [{
                        b: /"/,
                        e: /"/
                    }, {
                        b: /'/,
                        e: /'/
                    }]
                }, {
                    cN: "url",
                    b: "([a-z]+):/",
                    e: "\\s",
                    eW: !0,
                    eE: !0,
                    c: [t]
                }, {
                    cN: "regexp",
                    c: [e.BE, t],
                    v: [{
                        b: "\\s\\^",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "~\\*?\\s+",
                        e: "\\s|{|;",
                        rE: !0
                    }, {
                        b: "\\*(\\.[a-z\\-]+)+"
                    }, {
                        b: "([a-z\\-]+\\.)+\\*"
                    }]
                }, {
                    cN: "number",
                    b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b"
                }, {
                    cN: "number",
                    b: "\\b\\d+[kKmMgGdshdwy]*\\b",
                    r: 0
                }, t]
            };
        return {
            aliases: ["nginxconf"],
            c: [e.HCM, {
                b: e.UIR + "\\s",
                e: ";|{",
                rB: !0,
                c: [{
                    cN: "title",
                    b: e.UIR,
                    starts: r
                }],
                r: 0
            }],
            i: "[^\\s\\}]"
        }
    }), e.registerLanguage("objectivec", function (e) {
        var t = {
                cN: "built_in",
                b: "(AV|CA|CF|CG|CI|MK|MP|NS|UI)\\w+"
            },
            r = {
                keyword: "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required",
                literal: "false true FALSE TRUE nil YES NO NULL",
                built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once"
            },
            a = /[a-zA-Z@][a-zA-Z0-9_]*/,
            n = "@interface @class @protocol @implementation";
        return {
            aliases: ["mm", "objc", "obj-c"],
            k: r,
            l: a,
            i: "</",
            c: [t, e.CLCM, e.CBCM, e.CNM, e.QSM, {
                cN: "string",
                v: [{
                    b: '@"',
                    e: '"',
                    i: "\\n",
                    c: [e.BE]
                }, {
                    b: "'",
                    e: "[^\\\\]'",
                    i: "[^\\\\][^']"
                }]
            }, {
                cN: "preprocessor",
                b: "#",
                e: "$",
                c: [{
                    cN: "title",
                    v: [{
                        b: '"',
                        e: '"'
                    }, {
                        b: "<",
                        e: ">"
                    }]
                }]
            }, {
                cN: "class",
                b: "(" + n.split(" ").join("|") + ")\\b",
                e: "({|$)",
                eE: !0,
                k: n,
                l: a,
                c: [e.UTM]
            }, {
                cN: "variable",
                b: "\\." + e.UIR,
                r: 0
            }]
        }
    }), e.registerLanguage("perl", function (e) {
        var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
            r = {
                cN: "subst",
                b: "[$@]\\{",
                e: "\\}",
                k: t
            },
            a = {
                b: "->{",
                e: "}"
            },
            n = {
                cN: "variable",
                v: [{
                    b: /\$\d/
                }, {
                    b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
                }, {
                    b: /[\$%@][^\s\w{]/,
                    r: 0
                }]
            },
            i = [e.BE, r, n],
            s = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {
                eW: !0
            }), a, {
                cN: "string",
                c: i,
                v: [{
                    b: "q[qwxr]?\\s*\\(",
                    e: "\\)",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\[",
                    e: "\\]",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\{",
                    e: "\\}",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\|",
                    e: "\\|",
                    r: 5
                }, {
                    b: "q[qwxr]?\\s*\\<",
                    e: "\\>",
                    r: 5
                }, {
                    b: "qw\\s+q",
                    e: "q",
                    r: 5
                }, {
                    b: "'",
                    e: "'",
                    c: [e.BE]
                }, {
                    b: '"',
                    e: '"'
                }, {
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, {
                    b: "{\\w+}",
                    c: [],
                    r: 0
                }, {
                    b: "-?\\w+\\s*\\=\\>",
                    c: [],
                    r: 0
                }]
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
                k: "split return print reverse grep",
                r: 0,
                c: [e.HCM, {
                    cN: "regexp",
                    b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
                    r: 10
                }, {
                    cN: "regexp",
                    b: "(m|qr)?/",
                    e: "/[a-z]*",
                    c: [e.BE],
                    r: 0
                }]
            }, {
                cN: "sub",
                bK: "sub",
                e: "(\\s*\\(.*?\\))?[;{]",
                r: 5
            }, {
                cN: "operator",
                b: "-\\w\\b",
                r: 0
            }, {
                b: "^__DATA__$",
                e: "^__END__$",
                sL: "mojolicious",
                c: [{
                    b: "^@@.*",
                    e: "$",
                    cN: "comment"
                }]
            }];
        return r.c = s, a.c = s, {
            aliases: ["pl"],
            k: t,
            c: s
        }
    }), e.registerLanguage("php", function (e) {
        var t = {
                cN: "variable",
                b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
            },
            r = {
                cN: "preprocessor",
                b: /<\?(php)?|\?>/
            },
            a = {
                cN: "string",
                c: [e.BE, r],
                v: [{
                    b: 'b"',
                    e: '"'
                }, {
                    b: "b'",
                    e: "'"
                }, e.inherit(e.ASM, {
                    i: null
                }), e.inherit(e.QSM, {
                    i: null
                })]
            },
            n = {
                v: [e.BNM, e.CNM]
            };
        return {
            aliases: ["php3", "php4", "php5", "php6"],
            cI: !0,
            k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
            c: [e.CLCM, e.HCM, e.C("/\\*", "\\*/", {
                c: [{
                    cN: "doctag",
                    b: "@[A-Za-z]+"
                }, r]
            }), e.C("__halt_compiler.+?;", !1, {
                eW: !0,
                k: "__halt_compiler",
                l: e.UIR
            }), {
                cN: "string",
                b: /<<<['"]?\w+['"]?$/,
                e: /^\w+;?$/,
                c: [e.BE, {
                    cN: "subst",
                    v: [{
                        b: /\$\w+/
                    }, {
                        b: /\{\$/,
                        e: /\}/
                    }]
                }]
            }, r, t, {
                b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
            }, {
                cN: "function",
                bK: "function",
                e: /[;{]/,
                eE: !0,
                i: "\\$|\\[|%",
                c: [e.UTM, {
                    cN: "params",
                    b: "\\(",
                    e: "\\)",
                    c: ["self", t, e.CBCM, a, n]
                }]
            }, {
                cN: "class",
                bK: "class interface",
                e: "{",
                eE: !0,
                i: /[:\(\$"]/,
                c: [{
                    bK: "extends implements"
                }, e.UTM]
            }, {
                bK: "namespace",
                e: ";",
                i: /[\.']/,
                c: [e.UTM]
            }, {
                bK: "use",
                e: ";",
                c: [e.UTM]
            }, {
                b: "=>"
            }, a, n]
        }
    }), e.registerLanguage("python", function (e) {
        var t = {
                cN: "prompt",
                b: /^(>>>|\.\.\.) /
            },
            r = {
                cN: "string",
                c: [e.BE],
                v: [{
                    b: /(u|b)?r?'''/,
                    e: /'''/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|b)?r?"""/,
                    e: /"""/,
                    c: [t],
                    r: 10
                }, {
                    b: /(u|r|ur)'/,
                    e: /'/,
                    r: 10
                }, {
                    b: /(u|r|ur)"/,
                    e: /"/,
                    r: 10
                }, {
                    b: /(b|br)'/,
                    e: /'/
                }, {
                    b: /(b|br)"/,
                    e: /"/
                }, e.ASM, e.QSM]
            },
            a = {
                cN: "number",
                r: 0,
                v: [{
                    b: e.BNR + "[lLjJ]?"
                }, {
                    b: "\\b(0o[0-7]+)[lLjJ]?"
                }, {
                    b: e.CNR + "[lLjJ]?"
                }]
            },
            n = {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: ["self", t, a, r]
            };
        return {
            aliases: ["py", "gyp"],
            k: {
                keyword: "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
                built_in: "Ellipsis NotImplemented"
            },
            i: /(<\/|->|\?)/,
            c: [t, a, r, e.HCM, {
                v: [{
                    cN: "function",
                    bK: "def",
                    r: 10
                }, {
                    cN: "class",
                    bK: "class"
                }],
                e: /:/,
                i: /[${=;\n,]/,
                c: [e.UTM, n]
            }, {
                cN: "decorator",
                b: /^[\t ]*@/,
                e: /$/
            }, {
                b: /\b(print|exec)\(/
            }]
        }
    }), e.registerLanguage("ruby", function (e) {
        var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
            r = "and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
            a = {
                cN: "doctag",
                b: "@[A-Za-z]+"
            },
            n = {
                cN: "value",
                b: "#<",
                e: ">"
            },
            i = [e.C("#", "$", {
                c: [a]
            }), e.C("^\\=begin", "^\\=end", {
                c: [a],
                r: 10
            }), e.C("^__END__", "\\n$")],
            s = {
                cN: "subst",
                b: "#\\{",
                e: "}",
                k: r
            },
            c = {
                cN: "string",
                c: [e.BE, s],
                v: [{
                    b: /'/,
                    e: /'/
                }, {
                    b: /"/,
                    e: /"/
                }, {
                    b: /`/,
                    e: /`/
                }, {
                    b: "%[qQwWx]?\\(",
                    e: "\\)"
                }, {
                    b: "%[qQwWx]?\\[",
                    e: "\\]"
                }, {
                    b: "%[qQwWx]?{",
                    e: "}"
                }, {
                    b: "%[qQwWx]?<",
                    e: ">"
                }, {
                    b: "%[qQwWx]?/",
                    e: "/"
                }, {
                    b: "%[qQwWx]?%",
                    e: "%"
                }, {
                    b: "%[qQwWx]?-",
                    e: "-"
                }, {
                    b: "%[qQwWx]?\\|",
                    e: "\\|"
                }, {
                    b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/
                }]
            },
            o = {
                cN: "params",
                b: "\\(",
                e: "\\)",
                k: r
            },
            l = [c, n, {
                cN: "class",
                bK: "class module",
                e: "$|;",
                i: /=/,
                c: [e.inherit(e.TM, {
                    b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?"
                }), {
                    cN: "inheritance",
                    b: "<\\s*",
                    c: [{
                        cN: "parent",
                        b: "(" + e.IR + "::)?" + e.IR
                    }]
                }].concat(i)
            }, {
                cN: "function",
                bK: "def",
                e: "$|;",
                c: [e.inherit(e.TM, {
                    b: t
                }), o].concat(i)
            }, {
                cN: "constant",
                b: "(::)?(\\b[A-Z]\\w*(::)?)+",
                r: 0
            }, {
                cN: "symbol",
                b: e.UIR + "(\\!|\\?)?:",
                r: 0
            }, {
                cN: "symbol",
                b: ":",
                c: [c, {
                    b: t
                }],
                r: 0
            }, {
                cN: "number",
                b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
                r: 0
            }, {
                cN: "variable",
                b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))"
            }, {
                b: "(" + e.RSR + ")\\s*",
                c: [n, {
                    cN: "regexp",
                    c: [e.BE, s],
                    i: /\n/,
                    v: [{
                        b: "/",
                        e: "/[a-z]*"
                    }, {
                        b: "%r{",
                        e: "}[a-z]*"
                    }, {
                        b: "%r\\(",
                        e: "\\)[a-z]*"
                    }, {
                        b: "%r!",
                        e: "![a-z]*"
                    }, {
                        b: "%r\\[",
                        e: "\\][a-z]*"
                    }]
                }].concat(i),
                r: 0
            }].concat(i);
        s.c = l, o.c = l;
        var u = "[>?]>",
            d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
            b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
            p = [{
                b: /^\s*=>/,
                cN: "status",
                starts: {
                    e: "$",
                    c: l
                }
            }, {
                cN: "prompt",
                b: "^(" + u + "|" + d + "|" + b + ")",
                starts: {
                    e: "$",
                    c: l
                }
            }];
        return {
            aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
            k: r,
            i: /\/\*/,
            c: i.concat(p).concat(l)
        }
    }), e.registerLanguage("sql", function (e) {
        var t = e.C("--", "$");
        return {
            cI: !0,
            i: /[<>{}*]/,
            c: [{
                cN: "operator",
                bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke",
                e: /;/,
                eW: !0,
                k: {
                    keyword: "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes c cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle d data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration e each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract f failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function g general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http i id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists k keep keep_duplicates key keys kill l language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim m main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex n name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding p package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime t table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
                    literal: "true false null",
                    built_in: "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void"
                },
                c: [{
                    cN: "string",
                    b: "'",
                    e: "'",
                    c: [e.BE, {
                        b: "''"
                    }]
                }, {
                    cN: "string",
                    b: '"',
                    e: '"',
                    c: [e.BE, {
                        b: '""'
                    }]
                }, {
                    cN: "string",
                    b: "`",
                    e: "`",
                    c: [e.BE]
                }, e.CNM, e.CBCM, t]
            }, e.CBCM, t]
        }
    }), e
});