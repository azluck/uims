(function() {
    var af = window, k = document, z = navigator, ae = z.userAgent, o = af.screen, r = af.location.href;
    var ad = r.indexOf("https") > -1 ? "https://" : "http://", u = "beacon.sina.com.cn";
    var p = ad + u + "/a.gif?", P = ad + u + "/g.gif?", y = ad + u + "/d.gif?", e = ad + u + "/e.gif?";
    var c = 0;
    var T = k.referrer.toLowerCase();
    var C = "SINAGLOBAL", b = "Apache", aj = "ULV", m = "SUP", am = "UOR", Z = "_s_acc", R = "_s_tentry";
    var ak = 0;
    var x = false;
    var ah = false, h = false;
    var ag = "";
    var Y = 16777215, H = 0, V, d = 0;
    var ai = "", G = "", F = "";
    var j = [], J = [], aa = [];
    var at = 0;
    var X = (function() {
        var i = window.localStorage, D, au;
        if (i) {
            return {get: function(aw) {
                    return unescape(i.getItem(aw))
                },set: function(aw, ax) {
                    i.setItem(aw, escape(ax))
                }}
        } else {
            if (window.ActiveXObject) {
                D = document.documentElement;
                au = "localstorage";
                try {
                    D.addBehavior("#default#userdata");
                    D.save("localstorage")
                } catch (av) {
                }
                return {set: function(aw, ax) {
                        try {
                            D.setAttribute(aw, ax);
                            D.save(au)
                        } catch (ay) {
                        }
                    },get: function(aw) {
                        try {
                            D.load(au);
                            return D.getAttribute(aw)
                        } catch (ax) {
                        }
                    }}
            } else {
                return {get: g,set: s}
            }
        }
    })();
    function W(av, D) {
        var au = k.getElementsByName(av);
        var i = (D > 0) ? D : 0;
        return (au.length > i) ? au[i].content : ""
    }
    function ao(ax, D, av, au) {
        if (ax == "") {
            return ""
        }
        au = (au == "") ? "=" : au;
        D += au;
        var aw = ax.indexOf(D);
        if (aw < 0) {
            return ""
        }
        aw += D.length;
        var i = ax.indexOf(av, aw);
        if (i < aw) {
            i = ax.length
        }
        return ax.substring(aw, i)
    }
    function g(i) {
        if (undefined == i || "" == i) {
            return ""
        }
        return ao(k.cookie, i, ";", "")
    }
    function s(aw, i, D, av) {
        if (i != null) {
            if ((undefined == av) || (null == av)) {
                av = "weibo.com"
            }
            if ((undefined == D) || (null == D) || ("" == D)) {
                k.cookie = aw + "=" + i + ";domain=" + av + ";path=/"
            } else {
                var au = new Date();
                var ax = au.getTime();
                ax = ax + 86400000 * D;
                au.setTime(ax);
                ax = au.getTime();
                k.cookie = aw + "=" + i + ";domain=" + av + ";expires=" + au.toUTCString() + ";path=/"
            }
        }
    }
    function q(i, av, au) {
        var D = i;
        if (D == null) {
            return false
        }
        av = av || "click";
        if ((typeof au).toLowerCase() != "function") {
            return
        }
        if (D.attachEvent) {
            D.attachEvent("on" + av, au)
        } else {
            if (D.addEventListener) {
                D.addEventListener(av, au, false)
            } else {
                D["on" + av] = au
            }
        }
        return true
    }
    function aq() {
        if (window.event != null) {
            return window.event
        } else {
            if (window.event) {
                return window.event
            }
            var D = arguments.callee.caller;
            var i;
            var au = 0;
            while (D != null && au < 40) {
                i = D.arguments[0];
                if (i && (i.constructor == Event || i.constructor == MouseEvent || i.constructor == KeyboardEvent)) {
                    return i
                }
                au++;
                D = D.caller
            }
            return i
        }
    }
    function ap(i) {
        i = i || aq();
        if (!i.target) {
            i.target = i.srcElement;
            i.pageX = i.x;
            i.pageY = i.y
        }
        if (typeof i.layerX == "undefined") {
            i.layerX = i.offsetX
        }
        if (typeof i.layerY == "undefined") {
            i.layerY = i.offsetY
        }
        return i
    }
    function a(av) {
        if (typeof av !== "string") {
            throw "trim need a string as parameter"
        }
        var i = av.length;
        var au = 0;
        var D = /(\u3000|\s|\t|\u00A0)/;
        while (au < i) {
            if (!D.test(av.charAt(au))) {
                break
            }
            au += 1
        }
        while (i > au) {
            if (!D.test(av.charAt(i - 1))) {
                break
            }
            i -= 1
        }
        return av.slice(au, i)
    }
    function M(i) {
        return Object.prototype.toString.call(i) === "[object Array]"
    }
    function Q(av, az) {
        var aB = a(av).split("&");
        var aA = {};
        var au = function(i) {
            if (az) {
                return decodeURIComponent(i)
            } else {
                return i
            }
        };
        for (var ax = 0, ay = aB.length; ax < ay; ax++) {
            if (aB[ax]) {
                var aw = aB[ax].split("=");
                var D = aw[0];
                var aC = aw[1];
                if (aw.length < 2) {
                    aC = D;
                    D = "$nullName"
                }
                if (!aA[D]) {
                    aA[D] = au(aC)
                } else {
                    if (M(aA[D]) != true) {
                        aA[D] = [aA[D]]
                    }
                    aA[D].push(au(aC))
                }
            }
        }
        return aA
    }
    function l(au, aw) {
        for (var av = 0, D = au.length; av < D; av++) {
            aw(au[av], av)
        }
    }
    function S(D) {
        var i = new RegExp("^http(?:s)?://([^/]+)", "im");
        if (D.match(i)) {
            return D.match(i)[1].toString()
        } else {
            return ""
        }
    }
    var w = {screenSize: function() {
            return (Y & 8388608 == 8388608) ? o.width + "x" + o.height : ""
        },colorDepth: function() {
            return (Y & 4194304 == 4194304) ? o.colorDepth : ""
        },appCode: function() {
            return (Y & 2097152 == 2097152) ? z.appCodeName : ""
        },appName: function() {
            return (Y & 1048576 == 1048576) ? ((z.appName.indexOf("Microsoft Internet Explorer") > -1) ? "MSIE" : z.appName) : ""
        },cpu: function() {
            return (Y & 524288 == 524288) ? (z.cpuClass || z.oscpu) : ""
        },platform: function() {
            return (Y & 262144 == 262144) ? (z.platform) : ""
        },jsVer: function() {
            if (Y & 131072 != 131072) {
                return ""
            }
            var aw, i, ay, au = 1, av = 0, D = (z.appName.indexOf("Microsoft Internet Explorer") > -1) ? "MSIE" : z.appName, ax = z.appVersion;
            if ("MSIE" == D) {
                i = "MSIE";
                aw = ax.indexOf(i);
                if (aw >= 0) {
                    ay = window.parseInt(ax.substring(aw + 5));
                    if (3 <= ay) {
                        au = 1.1;
                        if (4 <= ay) {
                            au = 1.3
                        }
                    }
                }
            } else {
                if (("Netscape" == D) || ("Opera" == D) || ("Mozilla" == D)) {
                    au = 1.3;
                    i = "Netscape6";
                    aw = ax.indexOf(i);
                    if (aw >= 0) {
                        au = 1.5
                    }
                }
            }
            return au
        },network: function() {
            if (Y & 65536 != 65536) {
                return ""
            }
            var i = "";
            i = (z.connection && z.connection.type) ? z.connection.type : i;
            try {
                k.body.addBehavior("#default#clientCaps");
                i = k.body.connectionType
            } catch (D) {
                i = "unkown"
            }
            return i
        },language: function() {
            return (Y & 32768 == 32768) ? (z.systemLanguage || z.language) : ""
        },timezone: function() {
            return (Y & 16384 == 16384) ? (new Date().getTimezoneOffset() / 60) : ""
        },flashVer: function() {
            if (Y & 8192 != 8192) {
                return ""
            }
            var ax = z.plugins, au, ay, aA;
            if (ax && ax.length) {
                for (var aw in ax) {
                    ay = ax[aw];
                    if (ay.description == null) {
                        continue
                    }
                    if (au != null) {
                        break
                    }
                    aA = ay.description.toLowerCase();
                    if (aA.indexOf("flash") != -1) {
                        au = ay.version ? parseInt(ay.version) : aA.match(/\d+/);
                        continue
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    for (var av = 10; av >= 2; av--) {
                        try {
                            var D = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + av);
                            if (D) {
                                au = av;
                                break
                            }
                        } catch (az) {
                        }
                    }
                } else {
                    if (ae.indexOf("webtv/2.5") != -1) {
                        au = 3
                    } else {
                        if (ae.indexOf("webtv") != -1) {
                            au = 2
                        }
                    }
                }
            }
            return au
        },javaEnabled: function() {
            if (Y & 4096 != 4096) {
                return ""
            }
            var au = z.plugins, D = z.javaEnabled(), av, aw;
            if (D == true) {
                return 1
            }
            if (au && au.length) {
                for (var i in au) {
                    av = au[i];
                    if (av.description == null) {
                        continue
                    }
                    if (D != null) {
                        break
                    }
                    aw = av.description.toLowerCase();
                    if (aw.indexOf("java plug-in") != -1) {
                        D = parseInt(av.version);
                        continue
                    }
                }
            } else {
                if (window.ActiveXObject) {
                    D = (new ActiveXObject("JavaWebStart.IsInstalled") != null)
                }
            }
            return D ? 1 : 0
        }};
    var f = {pageId: function(i) {
            var D = i || ai, ax = "-9999-0-0-1";
            if ((undefined == D) || ("" == D)) {
                try {
                    var au = W("publishid");
                    if ("" != au) {
                        var aw = au.split(",");
                        if (aw.length > 0) {
                            if (aw.length >= 3) {
                                ax = "-9999-0-" + aw[1] + "-" + aw[2]
                            }
                            D = aw[0]
                        }
                    } else {
                        D = "0"
                    }
                } catch (av) {
                    D = "0"
                }
                D = D + ax
            }
            return D
        },sessionCount: function() {
            var i = g("_s_upa");
            if (i == "") {
                i = 0
            }
            return i
        },excuteCount: function() {
            return c
        },referrer: function() {
            if (Y & 2048 != 2048) {
                return ""
            }
            var i = /^[^\?&#]*.swf([\?#])?/;
            if ((T == "") || (T.match(i))) {
                var D = ao(r, "ref", "&", "");
                if (D != "") {
                    return escape(D)
                }
            }
            return escape(T)
        },isHomepage: function() {
            if (Y & 1024 != 1024) {
                return ""
            }
            var D = "";
            try {
                k.body.addBehavior("#default#homePage");
                D = k.body.isHomePage(r) ? "Y" : "N"
            } catch (i) {
                D = "unkown"
            }
            return D
        },PGLS: function() {
            return (Y & 512 == 512) ? W("stencil") : ""
        },ZT: function() {
            if (Y & 256 != 256) {
                return ""
            }
            var i = W("subjectid");
            i.replace(",", ".");
            i.replace(";", ",");
            return escape(i)
        },mediaType: function() {
            return (Y & 128 == 128) ? W("mediaid") : ""
        },domCount: function() {
            return (Y & 64 == 64) ? k.getElementsByTagName("*").length : ""
        },iframeCount: function() {
            return (Y & 32 == 32) ? k.getElementsByTagName("iframe").length : ""
        },onloadTime: function() {
            var i;
            if (typeof __GLOBAL_STATS_PAGESTART_TIME__ != "undefined" && typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ != "undefined") {
                i = __GLOBAL_STATS_PAGEONLOAD_TIME__ - __GLOBAL_STATS_PAGESTART_TIME__
            }
            return (Y & 16 == 16) ? i || "" : ""
        },domReadyTime: function() {
            var i;
            if (typeof __GLOBAL_STATS_PAGESTART_TIME__ != "undefined" && typeof __GLOBAL_STATS_DOMREADY_TIME__ != "undefined") {
                i = __GLOBAL_STATS_DOMREADY_TIME__ - __GLOBAL_STATS_PAGESTART_TIME__
            }
            return (Y & 8 == 8) ? i || "" : ""
        },bigpipe: function() {
            return (typeof $CONFIG != "undefined" && typeof $CONFIG.bigpipe != "undefined" && $CONFIG.bigpipe == "true") ? 1 : 0
        },getRealURL: function() {
            var i = "";
            if (typeof STK != "undefined" && typeof STK.historyM != "undefined" && typeof STK.historyM.parseURL != "undefined") {
                i = escape(STK.historyM.parseURL().url)
            }
            return i
        }};
    var O = {visitorId: function() {
            if ("" != C) {
                var i = g(C);
                if ("" == i) {
                    i = g(b);
                    s(C, i)
                }
                return i
            } else {
                return ""
            }
        },sessionId: function() {
            var i = g(b);
            if ("" == i) {
                var D = new Date();
                i = Math.random() * 10000000000000 + "." + D.getTime();
                s(b, i)
            }
            return i
        },lastVisit: function() {
            var au = g(b);
            var aw = g(aj);
            var av = aw.split(":");
            var ax = "", D;
            if (av.length >= 6) {
                if (au != av[4]) {
                    D = new Date();
                    var i = new Date(window.parseInt(av[0]));
                    av[1] = window.parseInt(av[1]) + 1;
                    if (D.getMonth() != i.getMonth()) {
                        av[2] = 1
                    } else {
                        av[2] = window.parseInt(av[2]) + 1
                    }
                    if (((D.getTime() - i.getTime()) / 86400000) >= 7) {
                        av[3] = 1
                    } else {
                        if (D.getDay() < i.getDay()) {
                            av[3] = 1
                        } else {
                            av[3] = window.parseInt(av[3]) + 1
                        }
                    }
                    ax = av[0] + ":" + av[1] + ":" + av[2] + ":" + av[3];
                    av[5] = av[0];
                    av[0] = D.getTime();
                    s(aj, av[0] + ":" + av[1] + ":" + av[2] + ":" + av[3] + ":" + au + ":" + av[5], 360)
                } else {
                    ax = av[5] + ":" + av[1] + ":" + av[2] + ":" + av[3]
                }
            } else {
                D = new Date();
                ax = ":1:1:1";
                s(aj, D.getTime() + ax + ":" + au + ":", 360)
            }
            return ax
        },userNick: function() {
            if (ag != "") {
                return ag
            }
            var au = unescape(g(m));
            if (au != "") {
                var D = ao(au, "ag", "&", "");
                var i = ao(au, "user", "&", "");
                var av = ao(au, "uid", "&", "");
                var ax = ao(au, "sex", "&", "");
                var aw = ao(au, "dob", "&", "");
                ag = D + ":" + i + ":" + av + ":" + ax + ":" + aw;
                return ag
            } else {
                return ""
            }
        },userOrigin: function() {
            if (Y & 4 != 4) {
                return ""
            }
            var i = g(am);
            var D = i.split(":");
            if (D.length >= 2) {
                return D[0]
            } else {
                return ""
            }
        },advCount: function() {
            return (Y & 2 == 2) ? g(Z) : ""
        },setUOR: function() {
            var az = g(am), aD = "", D = "", aC = "", aw = "", aA = r.toLowerCase(), au = k.referrer.toLowerCase();
            var aE = /[&|?]c=spr(_[A-Za-z0-9]{1,}){3,}/;
            var ay = new Date();
            if (aA.match(aE)) {
                aC = aA.match(aE)[0]
            } else {
                if (au.match(aE)) {
                    aC = au.match(aE)[0]
                }
            }
            if (aC != "") {
                aC = aC.substr(3) + ":" + ay.getTime()
            }
            if (az == "") {
                if (g(aj) == "") {
                    aD = S(au);
                    D = S(aA)
                }
                s(am, aD + "," + D + "," + aC, 365)
            } else {
                var ax = 0, aB = az.split(",");
                if (aB.length >= 1) {
                    aD = aB[0]
                }
                if (aB.length >= 2) {
                    D = aB[1]
                }
                if (aB.length >= 3) {
                    aw = aB[2]
                }
                if (aC != "") {
                    ax = 1
                } else {
                    var av = aw.split(":");
                    if (av.length >= 2) {
                        var i = new Date(window.parseInt(av[1]));
                        if (i.getTime() < (ay.getTime() - 86400000 * 30)) {
                            ax = 1
                        }
                    }
                }
                if (ax) {
                    s(am, aD + "," + D + "," + aC, 365)
                }
            }
        },setAEC: function(i) {
            if ("" == i) {
                return
            }
            var D = g(Z);
            if (D.indexOf(i + ",") < 0) {
                D = D + i + ","
            }
            s(Z, D, 7)
        }};
    var ar = {picList: [{url: "http://ww1.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg",size: 23243}, {url: "http://ww2.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg",size: 23243}, {url: "http://ww3.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg",size: 23243}, {url: "http://ww4.sinaimg.cn/large/53d96fe3tw1diw52tyd28j.jpg",size: 23243}],picOk: false,picData: [],picture: function() {
            if ((H & 8) != 8) {
                ar.picOk = true;
                return ""
            }
            var av = new Date().getTime();
            var ax = [], au;
            for (var aw = 0, D = ar.picList.length; aw < D; aw++) {
                au = new Image();
                SUDA.img = au;
                au.src = ar.picList[aw].url + "?" + Math.random();
                au.onload = (function(i) {
                    return function() {
                        var ay = new Date().getTime();
                        ar.picData[i] = Math.floor((ar.picList[i].size / 1024) / ((ay - av) / 1000));
                        if (/^(\d+,){3}\d+$/.test(ar.picData.join(","))) {
                            ar.picOk = true;
                            I()
                        }
                    }
                })(aw);
                ax.push(au)
            }
        },porList: [{url: "http://tp1.sinaimg.cn/1772026304/50/5603504743/1",size: 3488}, {url: "http://tp2.sinaimg.cn/1780417033/50/1280367872/0",size: 4021}, {url: "http://tp3.sinaimg.cn/1075913170/50/5601477177/1",size: 3456}, {url: "http://tp4.sinaimg.cn/1245851035/50/1279876078/1",size: 2519}],porOk: false,porData: [],portait: function() {
            if ((H & 4) != 4) {
                ar.porOk = true;
                return ""
            }
            var av = new Date().getTime();
            var ax = [], au;
            for (var aw = 0, D = ar.porList.length; aw < D; aw++) {
                au = new Image();
                SUDA.img = au;
                au.src = ar.porList[aw].url + "?" + Math.random();
                au.onload = (function(i) {
                    return function() {
                        var ay = new Date().getTime();
                        ar.porData[i] = Math.floor((ar.porList[i].size / 1024) / ((ay - av) / 1000));
                        if (/^(\d+,){3}\d+$/.test(ar.porData.join(","))) {
                            ar.porOk = true;
                            I()
                        }
                    }
                })(aw);
                ax.push(au)
            }
        },jsList: [{url: "http://js.t.sinajs.cn/t4/home/static/suda/feed.png",size: 21287}],jsOk: false,jsData: [],jsSpeed: function() {
            if ((H & 2) != 2) {
                ar.jsOk = true;
                return ""
            }
            var av = new Date().getTime();
            var ax = [], au;
            for (var aw = 0, D = ar.jsList.length; aw < D; aw++) {
                au = new Image();
                SUDA.img = au;
                au.src = ar.jsList[aw].url + "?" + Math.random();
                au.onload = (function(i) {
                    return function() {
                        var ay = new Date().getTime();
                        ar.jsData[i] = Math.floor((ar.jsList[i].size / 1024) / ((ay - av) / 1000));
                        if (/^\d+$/.test(ar.jsData.join(","))) {
                            ar.jsOk = true;
                            I()
                        }
                    }
                })(aw);
                ax.push(au)
            }
        },cssList: [{url: "http://img.t.sinajs.cn/t4/style/images/mobile/android/cp_3.jpg",size: 24472}],cssOk: false,cssData: [],cssSpeed: function() {
            if ((H & 1) != 1) {
                ar.cssOk = true;
                return ""
            }
            var av = new Date().getTime();
            var ax = [], au;
            for (var aw = 0, D = ar.cssList.length; aw < D; aw++) {
                au = new Image();
                SUDA.img = au;
                au.src = ar.cssList[aw].url + "?" + Math.random();
                au.onload = (function(i) {
                    return function() {
                        var ay = new Date().getTime();
                        ar.cssData[i] = Math.floor((ar.cssList[i].size / 1024) / ((ay - av) / 1000));
                        if (/^\d+$/.test(ar.cssData.join(","))) {
                            ar.cssOk = true;
                            I()
                        }
                    }
                })(aw);
                ax.push(au)
            }
        }};
    var t = {CI: function() {
            var i = ["sz:" + w.screenSize(), "dp:" + w.colorDepth(), "ac:" + w.appCode(), "an:" + w.appName(), "cpu:" + w.cpu(), "pf:" + w.platform(), "jv:" + w.jsVer(), "ct:" + w.network(), "lg:" + w.language(), "tz:" + w.timezone(), "fv:" + w.flashVer(), "ja:" + w.javaEnabled()];
            return "CI=" + i.join("|")
        },PI: function(i) {
            var D = ["pid:" + f.pageId(i), "st:" + f.sessionCount(), "et:" + f.excuteCount(), "ref:" + f.referrer(), "hp:" + f.isHomepage(), "PGLS:" + f.PGLS(), "ZT:" + f.ZT(), "MT:" + f.mediaType(), "keys:", "dom:" + f.domCount(), "ifr:" + f.iframeCount(), "nld:" + f.onloadTime(), "drd:" + f.domReadyTime(), "bp:" + f.bigpipe(), "url:" + f.getRealURL()];
            return "PI=" + D.join("|")
        },UI: function() {
            var i = ["vid:" + O.visitorId(), "sid:" + O.sessionId(), "lv:" + O.lastVisit(), "un:" + O.userNick(), "uo:" + O.userOrigin(), "ae:" + O.advCount()];
            return "UI=" + i.join("|")
        },EX: function(D, i) {
            if (Y & 1 != 1) {
                return ""
            }
            D = (null != D) ? D || "" : G;
            i = (null != i) ? i || "" : F;
            return "EX=ex1:" + D + "|ex2:" + i
        },P_PI: function() {
            var i = ["pic:" + ar.picture(), "por:" + ar.portait(), "js:" + ar.jsSpeed(), "css:" + ar.cssSpeed(), "ref:" + f.referrer()];
            return "PI=" + i.join("|")
        },P_UI: function() {
            var i = ["vid:" + O.visitorId(), "sid:" + O.sessionId(), "un:" + O.userNick()];
            return "UI=" + i.join("|")
        },V: function() {
            return "V=2"
        },R: function() {
            return "gUid_" + new Date().getTime()
        }};
    function L() {
        var ax = "-", au = k.referrer.toLowerCase(), D = r.toLowerCase();
        if ("" == g(R)) {
            if ("" != au) {
                ax = S(au)
            }
            s(R, ax, "", "weibo.com")
        }
        var av = /weibo.com\/reg.php/;
        if (D.match(av)) {
            var aw = ao(unescape(D), "sharehost", "&", "");
            var i = ao(unescape(D), "appkey", "&", "");
            if ("" != aw) {
                s(R, aw, "", "weibo.com")
            }
            s("appkey", i, "", "weibo.com")
        }
    }
    function ac(i) {
        B(i)
    }
    function B(D) {
        var i = new Image();
        SUDA.img = i;
        i.src = D
    }
    function ab() {
        if (ah || h) {
            return
        }
        if (at < 3 && typeof __GLOBAL_STATS_PAGESTART_TIME__ != "undefined") {
            at++;
            if (typeof __GLOBAL_STATS_PAGESTART_TIME__ == "undefined" || typeof __GLOBAL_STATS_DOMREADY_TIME__ == "undefined" || typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ == "undefined") {
                setTimeout(ab, 1000);
                return
            }
        }
        O.sessionId();
        v()
    }
    function v(i, av, au) {
        c++;
        var aw = O.visitorId();
        if (ak < 1) {
            setTimeout(ab, 0);
            ak++;
            return
        } else {
            aw = g(b);
            s(C, aw)
        }
        var D = p + [t.V(), t.CI(), t.PI(i), t.UI(), t.EX(av, au), t.R()].join("&");
        //V=2
        //CI
        //publishid	=>0-9999-0-0-1
        //g() _s_upa ""
        //c 2
        //T => http://login.sina.com.cn/sso/login.php?url=http%3a%2f%2fweibo.com%2f&_rand=1337609911.1192&gateway=1&service=miniblog&entry=miniblog&useticket=1&returntype=meta
        //unknown
        //(Y & 512 == 512) ? W("stencil") : ""	(16777215)
        //W("subjectid"); ""
        //(Y & 128 == 128) ? W("mediaid") : ""
        //(Y & 64 == 64) ? k.getElementsByTagName("*").length : ""
        //(Y & 32 == 32) ? k.getElementsByTagName("iframe").length : ""
        //i = __GLOBAL_STATS_PAGEONLOAD_TIME__ - __GLOBAL_STATS_PAGESTART_TIME__
        //i = __GLOBAL_STATS_DOMREADY_TIME__ - __GLOBAL_STATS_PAGESTART_TIME__
        //$CONFIG.bigpipe == "true" ""
        //i = escape(STK.historyM.parseURL().url) ""
        
        //g(C)	SINAGLOBAL  1232985227834.4333.1336833278848
        //		Apache	1232985227834.4333.1336833278848
        //Apache	ULV	1336833278872:1:1:1:1232985227834.4333.1336833278848:	ax = av[5] + ":" + av[1] + ":" + av[2] + ":" + av[3]	
        //SUP	
        //UOR	i.split(":") D[0]
        //_s_acc	
        
        //D = (null != D) ? D || "" : G;	i = (null != i) ? i || "" : F;
        //"gUid_" + new Date().getTime()
        
        
        
        
        B(D);
        al()
    }
    function al() {
        if (typeof __GLOBAL_STATS_PAGESTART_TIME__ != "undefined") {
            if (typeof __GLOBAL_STATS_PAGESTART_TIME__ == "undefined" || typeof __GLOBAL_STATS_DOMREADY_TIME__ == "undefined" || typeof __GLOBAL_STATS_PAGEONLOAD_TIME__ == "undefined") {
                setTimeout(al, 1000);
                return
            }
        }
        if ("https:" == k.location.protocol || x == true) {
            return
        }
        if (typeof V == "function") {
            if (V() == false) {
                return
            }
        }
        var i = X.get("sudaPerformance");
        if (i != null && (new Date().getTime() - i) < d * 60 * 1000) {
            return
        }
        if (document.readyState != "complete") {
            setTimeout(al, 500)
        }
        c++;
        x = true;
        if (H > 0) {
            ar.picture();
            ar.portait();
            ar.jsSpeed();
            ar.cssSpeed()
        }
    }
    function I() {
        if (H > 0 && ar.picOk && ar.porOk && ar.jsOk && ar.cssOk) {
            var i = P + [t.V(), "PI=pic:" + ar.picData + "|por:" + ar.porData + "|js:" + ar.jsData + "|css:" + ar.cssData + "|nld:" + f.onloadTime() + "|drd:" + f.domReadyTime(), t.P_UI(), t.R()].join("&");
            B(i)
        }
        X.set("sudaPerformance", new Date().getTime())
    }
    function K(i, av) {
        if (("" == i) || (undefined == i)) {
            return
        }
        O.setAEC(i);
        if (0 == av) {
            return
        }
        var au = "AcTrack||" + g(C) + "||" + g(b) + "||" + O.userNick() + "||" + i + "||";
        var D = e + au + "&gUid_" + new Date().getTime();
        ac(D)
    }
    function N(ay, az, D) {
        D = D || {};
        var aB = "UATrack||" + g(C) + "||" + g(b) + "||" + O.userNick() + "||" + ay + "||" + az + "||" + f.referrer() + "||" + (D.href || "") + "||" + (D.realUrl || "") + "||";
        var au = e + aB + "&gUid_" + new Date().getTime();
        ac(au);
        if (D.urls) {
            if (D.urls.replace(/\s/g, "") != "") {
                var ax = D.urls.split(",");
                if (ax.length > 0) {
                    for (var av = 0, aw = ax.length; av < aw; av++) {
                        var aA = ax[av] + (ax[av].indexOf("?") == -1 ? "?" : "&") + aB + "&gUid_" + new Date().getTime();
                        ac(aA)
                    }
                }
            }
        }
    }
    function E(ay) {
        var aB = ap(ay);
        var D = aB.target;
        var aw = "", aA = "", az = "", av = "", i = "", ax = "";
        var au;
        if (D != null && D.getAttribute && (!D.getAttribute("suda-uatrack") && !D.getAttribute("suda-actrack") && !D.getAttribute("suda-data"))) {
            while (D != null && D.getAttribute && (!!D.getAttribute("suda-uatrack") || !!D.getAttribute("suda-actrack") || !!D.getAttribute("suda-data")) == false) {
                if (D == k.body) {
                    return
                }
                D = D.parentNode
            }
        }
        if (D == null || D.getAttribute == null) {
            return
        }
        aw = D.getAttribute("suda-actrack") || "";
        aA = D.getAttribute("suda-uatrack") || D.getAttribute("suda-data") || "";
        av = D.getAttribute("suda-urls") || "";
        az = n(D);
        if (aA) {
            au = Q(aA);
            if (D.tagName.toLowerCase() == "a") {
                i = escape(D.href)
            }
            ax = f.getRealURL();
            au.value = au.value + az;
            au.key && SUDA.uaTrack && SUDA.uaTrack(au.key, au.value || au.key, {href: i,realUrl: ax,urls: av})
        }
        if (aw) {
            au = Q(aw);
            au.key && SUDA.acTrack && SUDA.acTrack(au.key, au.value || au.key)
        }
    }
    function n(D) {
        var au = D.getAttribute("suda-sizzle");
        var i = "";
        if (au == null || au == "") {
            return ""
        }
        i = U(D, au);
        return i
    }
    function U(au, aD) {
        var aJ;
        if (/^[-\d]/.test(aD)) {
            var aH = aD.split(",");
            var aC = aH[0];
            var D = aH[1];
            var aE = aH[2];
            aJ = aH[3] || "*";
            var aG, az;
            if (aC == null || D == null || aE == null) {
                return ""
            }
            switch (aE) {
                case "parent":
                    au = au.parentNode;
                    while (au != null) {
                        if (au.getAttribute("suda-sizzle") != null) {
                            if (aJ != "*" && au.tagName.toLowerCase() != aJ) {
                                au = au.parentNode;
                                if (au == document.body) {
                                    return ""
                                }
                                continue
                            }
                            aG = au.getAttribute("suda-sizzle");
                            az = aG.split(",");
                            if (aG[0] && D == aG[0]) {
                                return (au.getAttribute("suda-ext") || "") + U(au, aG)
                            } else {
                                au = au.parentNode;
                                if (au == document.body) {
                                    return ""
                                }
                                continue
                            }
                        }
                        au = au.parentNode;
                        if (au == document.body) {
                            return ""
                        }
                    }
                    return "";
                case "sibling":
                    au = au.parentNode.children || au.parentNode.childNodes;
                    for (var aw = 0, aA = au.length; aw < aA; aw++) {
                        if (au[aw].getAttribute("suda-sizzle") != null) {
                            if (aJ != "*" && au[aw].tagName.toLowerCase() != aJ) {
                                continue
                            }
                            aG = au[aw].getAttribute("suda-sizzle");
                            az = aG.split(",");
                            if (aG[0] && D == aG[0]) {
                                return (au[aw].getAttribute("suda-ext") || "") + U(au[aw], aG)
                            } else {
                                continue
                            }
                        }
                    }
                    return "";
                case "child":
                    au = au.getElementsByTagName(aJ);
                    for (var av = 0, ay = au.length; av < ay; av++) {
                        if (au[av].getAttribute("suda-sizzle") != null) {
                            if (aJ != "*" && au[av].tagName.toLowerCase() != aJ) {
                                continue
                            }
                            aG = au[av].getAttribute("suda-sizzle");
                            az = aG.split(",");
                            if (aG[0] && D == aG[0]) {
                                return (au[av].getAttribute("suda-ext") || "") + U(au[av], aG)
                            } else {
                                continue
                            }
                        }
                    }
                    return ""
            }
        } else {
            var aI = aD.split("["), aF;
            switch (aI.length) {
                case 1:
                    aJ = aI[0];
                    break;
                case 2:
                default:
                    aJ = aI[0];
                    aF = aI[1];
                    break
            }
            if (aF) {
                aF = aF.replace(/['"\]]/g, "").split("=");
                if (aF.length == 2) {
                    var aB = aF[0];
                    var ax = aF[1]
                }
            }
            au = au.parentNode;
            while (au != null) {
                if (au.tagName.toLowerCase() == aJ) {
                    if (aB && au.getAttribute(aB) == ax) {
                        if (au.getAttribute("suda-sizzle") != null && au.getAttribute("suda-sizzle") != "") {
                            return (au.getAttribute("suda-ext") || "") + U(au, au.getAttribute("suda-sizzle"))
                        }
                        return (au.getAttribute("suda-ext") || "")
                    }
                    if (aB == null) {
                        if (au.getAttribute("suda-sizzle") != null && au.getAttribute("suda-sizzle") != "") {
                            return (au.getAttribute("suda-ext") || "") + U(au, au.getAttribute("suda-sizzle"))
                        }
                        return (au.getAttribute("suda-ext") || "")
                    }
                }
                au = au.parentNode;
                if (au == document.body) {
                    return ""
                }
            }
            return ""
        }
    }
    if (window.SUDA && Object.prototype.toString.call(window.SUDA) === "[object Array]") {
        for (var an = 0, A = SUDA.length; an < A; an++) {
            switch (SUDA[an][0]) {
                case "setGatherType":
                    Y = SUDA[an][1];
                    break;
                case "setGatherInfo":
                    ai = SUDA[an][1] || ai;
                    G = SUDA[an][2] || G;
                    F = SUDA[an][3] || F;
                    break;
                case "setPerformance":
                    H = SUDA[an][1];
                    break;
                case "setPerformanceFilter":
                    V = SUDA[an][1];
                    break;
                case "setPerformanceInterval":
                    d = SUDA[an][1] * 1 || 0;
                    d = isNaN(d) ? 0 : d;
                    break;
                case "setGatherMore":
                    j.push(SUDA[an].slice(1));
                    break;
                case "acTrack":
                    J.push(SUDA[an].slice(1));
                    break;
                case "uaTrack":
                    aa.push(SUDA[an].slice(1));
                    break
            }
        }
    }
    L();
    O.setUOR();
    ah = (function(D, i) {
        if (af.top == af) {
            return false
        } else {
            try {
                if (k.body.clientHeight == 0) {
                    return false
                }
                return ((k.body.clientHeight >= D) && (k.body.clientWidth >= i)) ? false : true
            } catch (au) {
                return true
            }
        }
    })(320, 240);
    h = (function() {
        return false
    })();
    ab();
    if (typeof $CONFIG != "undefined" && typeof $CONFIG.bigpipe != "undefined" && $CONFIG.bigpipe === "true" && typeof STK != "undefined" && typeof STK.historyM != "undefined" && typeof STK.historyM.onpopstate != "undefined") {
        STK.historyM.onpopstate(function(i) {
            ab()
        })
    }
    if (j.length > 0) {
        l(j, function(D, i) {
            v.apply(null, D)
        })
    }
    if (J.length > 0) {
        l(J, function(D, i) {
            K.apply(null, D)
        })
    }
    if (aa.length > 0) {
        l(aa, function(D, i) {
            N.apply(null, D)
        })
    }
    window.SUDA = window.SUDA || [];
    SUDA.log = function() {
        v.apply(null, arguments)
    };
    SUDA.acTrack = function() {
        K.apply(null, arguments)
    };
    SUDA.uaTrack = function() {
        N.apply(null, arguments)
    };
    q(k.body, "click", E)
})();
