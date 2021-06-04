(function(e) {
  function t(t) {
    for (var n, a, c = t[ 0 ], l = t[ 1 ], s = t[ 2 ], p = 0, d = []; p < c.length; p++) {
      a = c[ p ], Object.prototype.hasOwnProperty.call(i, a) && i[ a ] && d.push(i[ a ][ 0 ]), i[ a ] = 0;
    }
    for (n in l) {
      Object.prototype.hasOwnProperty.call(l, n) && (e[ n ] = l[ n ]);
    }
    u && u(t);
    while (d.length) {
      d.shift()();
    }
    return o.push.apply(o, s || []), r();
  }

  function r() {
    for (var e, t = 0; t < o.length; t++) {
      for (var r = o[ t ], n = !0, c = 1; c < r.length; c++) {
        var l = r[ c ];
        0 !== i[ l ] && (n = !1);
      }
      n && (o.splice(t--, 1), e = a(a.s = r[ 0 ]));
    }
    return e;
  }

  var n = {}, i = { app: 0 }, o = [];

  function a(t) {
    if (n[ t ]) {
      return n[ t ].exports;
    }
    var r = n[ t ] = { i: t, l: !1, exports: {} };
    return e[ t ].call(r.exports, r, r.exports, a), r.l = !0, r.exports;
  }

  a.m = e, a.c = n, a.d = function(e, t, r) {
    a.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: r,
    });
  }, a.r = function(e) {'undefined' !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });}, a.t = function(e, t) {
    if (1 & t && (e = a(e)), 8 & t) {
      return e;
    }
    if (4 & t && 'object' === typeof e && e && e.__esModule) {
      return e;
    }
    var r = Object.create(null);
    if (a.r(r), Object.defineProperty(r, 'default', {
      enumerable: !0,
      value: e,
    }), 2 & t && 'string' != typeof e) {
      for (var n in e) {
        a.d(r, n, function(t) {return e[ t ];}.bind(null, n));
      }
    }
    return r;
  }, a.n = function(e) {
    var t = e && e.__esModule ? function() {return e[ 'default' ];} : function() {return e;};
    return a.d(t, 'a', t), t;
  }, a.o = function(e, t) {return Object.prototype.hasOwnProperty.call(e, t);}, a.p = '/';
  var c = window[ 'webpackJsonp' ] = window[ 'webpackJsonp' ] || [], l = c.push.bind(c);
  c.push = t, c = c.slice();
  for (var s = 0; s < c.length; s++) {
    t(c[ s ]);
  }
  var u = l;
  o.push([0, 'chunk-vendors']), r();
})({
  0: function(e, t, r) {e.exports = r('56d7');}, '56d7': function(e, t, r) {
    'use strict';
    r.r(t);
    var n,
      i = r('2b0e'),
      o = function() {
        var e = this, t = e.$createElement;
        e._self._c;
        return e._m(0);
      },
      a = [
        function() {
          var e = this, t = e.$createElement, r = e._self._c || t;
          return r('div', { attrs: { id: 'app' } }, [
            r('div', { staticClass: 'wrapper' }, [
              r('div', { attrs: { id: 'view' } }, [
                r('iframe', {
                  attrs: {
                    /* 바꿔야 할곳 (트위치채널이름, 방송하는곳 도메인) */
                    src: 'https://player.twitch.tv/?channel=jitouenene&parent=oozy1201.github.io',
                    frameborder: '0',
                    allowfullscreen: 'true',
                    scrolling: 'no',
                  },
                }),
              ]), r('div', { attrs: { id: 'chat' } }),
            ]),
          ]);
        },
      ],
      c = r('4e58'),
      l = r('2ef0'),
      s = r.n(l),
      u = {
        name: 'App',
        components: {},
        data() {return { resizeFlag: null };},
        watch: { resizeFlag: { handler(e) {this.toggleSplit(e);} } },
        methods: {
          createUchat() {
            let e = document.createElement('u-chat');
            /* 바꿔야 할 곳 (유저채팅방이름) */
            e.setAttribute('room', 'oozy1201'), e.style.width = '100%', e.style.height = '100%', document.getElementById('chat').appendChild(e);
          },
          toggleSplit(e) {
            n.destroy(), n = 'low' === e ?
              Object(c[ 'a' ])(['#view', '#chat'], { direction: 'vertical', size: [75, 25] }) :
              Object(c[ 'a' ])(['#view', '#chat'], { direction: 'horizontal', size: [75, 25] });
          },
          setFlag() {document.body.offsetWidth < 576 ? this.resizeFlag = 'low' : this.resizeFlag = 'high';},
        },
        mounted() {
          this.$nextTick(() => {
            this.createUchat(), this.setFlag(), window.addEventListener('resize', s.a.debounce(() => {
              document.body.offsetWidth < 576 ?
                this.resizeFlag = 'low' :
                this.resizeFlag = 'high';
            }, 500)), n = Object(c[ 'a' ])(['#view', '#chat']), n.setSizes([75, 25]);
          });
        },
      },
      p = u,
      d = (r('5c0b'), r('2877')),
      f = Object(d[ 'a' ])(p, o, a, !1, null, null, null),
      h = f.exports;
    r('66b8');
    i[ 'a' ].config.productionTip = !1, new i[ 'a' ]({ render: function(e) {return e(h);} }).$mount('#app');
  }, '5c0b': function(e, t, r) {
    'use strict';
    var n = r('9c0c'), i = r.n(n);
    i.a;
  }, "66b8": function(e, t, r) {}, "9c0c": function(e, t, r) {}
});
//# sourceMappingURL=app.5e61588a.js.map
