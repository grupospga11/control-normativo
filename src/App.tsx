(function () {
  const X = document.createElement("link").relList;
  if (X && X.supports && X.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) g(Q);
  new MutationObserver((Q) => {
    for (const F of Q)
      if (F.type === "childList")
        for (const O of F.addedNodes)
          O.tagName === "LINK" && O.rel === "modulepreload" && g(O);
  }).observe(document, { childList: !0, subtree: !0 });
  function B(Q) {
    const F = {};
    return (
      Q.integrity && (F.integrity = Q.integrity),
      Q.referrerPolicy && (F.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (F.credentials = "include")
        : Q.crossOrigin === "anonymous"
          ? (F.credentials = "omit")
          : (F.credentials = "same-origin"),
      F
    );
  }
  function g(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const F = B(Q);
    fetch(Q.href, F);
  }
})();
var sf = { exports: {} },
  zn = {};
var xr;
function th() {
  if (xr) return zn;
  xr = 1;
  var p = Symbol.for("react.transitional.element"),
    X = Symbol.for("react.fragment");
  function B(g, Q, F) {
    var O = null;
    if (
      (F !== void 0 && (O = "" + F),
      Q.key !== void 0 && (O = "" + Q.key),
      "key" in Q)
    ) {
      F = {};
      for (var hl in Q) hl !== "key" && (F[hl] = Q[hl]);
    } else F = Q;
    return (
      (Q = F.ref),
      { $$typeof: p, type: g, key: O, ref: Q !== void 0 ? Q : null, props: F }
    );
  }
  return ((zn.Fragment = X), (zn.jsx = B), (zn.jsxs = B), zn);
}
var pr;
function ah() {
  return (pr || ((pr = 1), (sf.exports = th())), sf.exports);
}
import AnnaChatbot from "./components/AnnaChatbot";
var c = ah(),
  df = { exports: {} },
  G = {};
var Sr;
function nh() {
  if (Sr) return G;
  Sr = 1;
  var p = Symbol.for("react.transitional.element"),
    X = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    g = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    F = Symbol.for("react.consumer"),
    O = Symbol.for("react.context"),
    hl = Symbol.for("react.forward_ref"),
    C = Symbol.for("react.suspense"),
    T = Symbol.for("react.memo"),
    I = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    rl = Symbol.iterator;
  function Ll(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (rl && o[rl]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var Ml = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Ol = Object.assign,
    ze = {};
  function Rl(o, j, A) {
    ((this.props = o),
      (this.context = j),
      (this.refs = ze),
      (this.updater = A || Ml));
  }
  ((Rl.prototype.isReactComponent = {}),
    (Rl.prototype.setState = function (o, j) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, j, "setState");
    }),
    (Rl.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function wl() {}
  wl.prototype = Rl.prototype;
  function xl(o, j, A) {
    ((this.props = o),
      (this.context = j),
      (this.refs = ze),
      (this.updater = A || Ml));
  }
  var kl = (xl.prototype = new wl());
  ((kl.constructor = xl), Ol(kl, Rl.prototype), (kl.isPureReactComponent = !0));
  var Vl = Array.isArray;
  function Hl() {}
  var K = { H: null, A: null, T: null, S: null },
    Xl = Object.prototype.hasOwnProperty;
  function N(o, j, A) {
    var D = A.ref;
    return {
      $$typeof: p,
      type: o,
      key: j,
      ref: D !== void 0 ? D : null,
      props: A,
    };
  }
  function Y(o, j) {
    return N(o.type, j, o.props);
  }
  function ml(o) {
    return typeof o == "object" && o !== null && o.$$typeof === p;
  }
  function yl(o) {
    var j = { "=": "=0", ":": "=2" };
    return (
      "$" +
      o.replace(/[=:]/g, function (A) {
        return j[A];
      })
    );
  }
  var Ce = /\/+/g;
  function Ne(o, j) {
    return typeof o == "object" && o !== null && o.key != null
      ? yl("" + o.key)
      : j.toString(36);
  }
  function je(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then(Hl, Hl)
            : ((o.status = "pending"),
              o.then(
                function (j) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = j));
                },
                function (j) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = j));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function x(o, j, A, D, Z) {
    var J = typeof o;
    (J === "undefined" || J === "boolean") && (o = null);
    var al = !1;
    if (o === null) al = !0;
    else
      switch (J) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case p:
            case X:
              al = !0;
              break;
            case I:
              return ((al = o._init), x(al(o._payload), j, A, D, Z));
          }
      }
    if (al)
      return (
        (Z = Z(o)),
        (al = D === "" ? "." + Ne(o, 0) : D),
        Vl(Z)
          ? ((A = ""),
            al != null && (A = al.replace(Ce, "$&/") + "/"),
            x(Z, j, A, "", function (_a) {
              return _a;
            }))
          : Z != null &&
            (ml(Z) &&
              (Z = Y(
                Z,
                A +
                  (Z.key == null || (o && o.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(Ce, "$&/") + "/") +
                  al,
              )),
            j.push(Z)),
        1
      );
    al = 0;
    var Kl = D === "" ? "." : D + ":";
    if (Vl(o))
      for (var zl = 0; zl < o.length; zl++)
        ((D = o[zl]), (J = Kl + Ne(D, zl)), (al += x(D, j, A, J, Z)));
    else if (((zl = Ll(o)), typeof zl == "function"))
      for (o = zl.call(o), zl = 0; !(D = o.next()).done; )
        ((D = D.value), (J = Kl + Ne(D, zl++)), (al += x(D, j, A, J, Z)));
    else if (J === "object") {
      if (typeof o.then == "function") return x(je(o), j, A, D, Z);
      throw (
        (j = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (j === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : j) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return al;
  }
  function E(o, j, A) {
    if (o == null) return o;
    var D = [],
      Z = 0;
    return (
      x(o, D, "", "", function (J) {
        return j.call(A, J, Z++);
      }),
      D
    );
  }
  function q(o) {
    if (o._status === -1) {
      var j = o._result;
      ((j = j()),
        j.then(
          function (A) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 1), (o._result = A));
          },
          function (A) {
            (o._status === 0 || o._status === -1) &&
              ((o._status = 2), (o._result = A));
          },
        ),
        o._status === -1 && ((o._status = 0), (o._result = j)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var il =
      typeof reportError == "function"
        ? reportError
        : function (o) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var j = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof o == "object" &&
                  o !== null &&
                  typeof o.message == "string"
                    ? String(o.message)
                    : String(o),
                error: o,
              });
              if (!window.dispatchEvent(j)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", o);
              return;
            }
            console.error(o);
          },
    dl = {
      map: E,
      forEach: function (o, j, A) {
        E(
          o,
          function () {
            j.apply(this, arguments);
          },
          A,
        );
      },
      count: function (o) {
        var j = 0;
        return (
          E(o, function () {
            j++;
          }),
          j
        );
      },
      toArray: function (o) {
        return (
          E(o, function (j) {
            return j;
          }) || []
        );
      },
      only: function (o) {
        if (!ml(o))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return o;
      },
    };
  return (
    (G.Activity = H),
    (G.Children = dl),
    (G.Component = Rl),
    (G.Fragment = B),
    (G.Profiler = Q),
    (G.PureComponent = xl),
    (G.StrictMode = g),
    (G.Suspense = C),
    (G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K),
    (G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return K.H.useMemoCache(o);
      },
    }),
    (G.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (G.cacheSignal = function () {
      return null;
    }),
    (G.cloneElement = function (o, j, A) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var D = Ol({}, o.props),
        Z = o.key;
      if (j != null)
        for (J in (j.key !== void 0 && (Z = "" + j.key), j))
          !Xl.call(j, J) ||
            J === "key" ||
            J === "__self" ||
            J === "__source" ||
            (J === "ref" && j.ref === void 0) ||
            (D[J] = j[J]);
      var J = arguments.length - 2;
      if (J === 1) D.children = A;
      else if (1 < J) {
        for (var al = Array(J), Kl = 0; Kl < J; Kl++)
          al[Kl] = arguments[Kl + 2];
        D.children = al;
      }
      return N(o.type, Z, D);
    }),
    (G.createContext = function (o) {
      return (
        (o = {
          $$typeof: O,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = { $$typeof: F, _context: o }),
        o
      );
    }),
    (G.createElement = function (o, j, A) {
      var D,
        Z = {},
        J = null;
      if (j != null)
        for (D in (j.key !== void 0 && (J = "" + j.key), j))
          Xl.call(j, D) &&
            D !== "key" &&
            D !== "__self" &&
            D !== "__source" &&
            (Z[D] = j[D]);
      var al = arguments.length - 2;
      if (al === 1) Z.children = A;
      else if (1 < al) {
        for (var Kl = Array(al), zl = 0; zl < al; zl++)
          Kl[zl] = arguments[zl + 2];
        Z.children = Kl;
      }
      if (o && o.defaultProps)
        for (D in ((al = o.defaultProps), al))
          Z[D] === void 0 && (Z[D] = al[D]);
      return N(o, J, Z);
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (o) {
      return { $$typeof: hl, render: o };
    }),
    (G.isValidElement = ml),
    (G.lazy = function (o) {
      return { $$typeof: I, _payload: { _status: -1, _result: o }, _init: q };
    }),
    (G.memo = function (o, j) {
      return { $$typeof: T, type: o, compare: j === void 0 ? null : j };
    }),
    (G.startTransition = function (o) {
      var j = K.T,
        A = {};
      K.T = A;
      try {
        var D = o(),
          Z = K.S;
        (Z !== null && Z(A, D),
          typeof D == "object" &&
            D !== null &&
            typeof D.then == "function" &&
            D.then(Hl, il));
      } catch (J) {
        il(J);
      } finally {
        (j !== null && A.types !== null && (j.types = A.types), (K.T = j));
      }
    }),
    (G.unstable_useCacheRefresh = function () {
      return K.H.useCacheRefresh();
    }),
    (G.use = function (o) {
      return K.H.use(o);
    }),
    (G.useActionState = function (o, j, A) {
      return K.H.useActionState(o, j, A);
    }),
    (G.useCallback = function (o, j) {
      return K.H.useCallback(o, j);
    }),
    (G.useContext = function (o) {
      return K.H.useContext(o);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (o, j) {
      return K.H.useDeferredValue(o, j);
    }),
    (G.useEffect = function (o, j) {
      return K.H.useEffect(o, j);
    }),
    (G.useEffectEvent = function (o) {
      return K.H.useEffectEvent(o);
    }),
    (G.useId = function () {
      return K.H.useId();
    }),
    (G.useImperativeHandle = function (o, j, A) {
      return K.H.useImperativeHandle(o, j, A);
    }),
    (G.useInsertionEffect = function (o, j) {
      return K.H.useInsertionEffect(o, j);
    }),
    (G.useLayoutEffect = function (o, j) {
      return K.H.useLayoutEffect(o, j);
    }),
    (G.useMemo = function (o, j) {
      return K.H.useMemo(o, j);
    }),
    (G.useOptimistic = function (o, j) {
      return K.H.useOptimistic(o, j);
    }),
    (G.useReducer = function (o, j, A) {
      return K.H.useReducer(o, j, A);
    }),
    (G.useRef = function (o) {
      return K.H.useRef(o);
    }),
    (G.useState = function (o) {
      return K.H.useState(o);
    }),
    (G.useSyncExternalStore = function (o, j, A) {
      return K.H.useSyncExternalStore(o, j, A);
    }),
    (G.useTransition = function () {
      return K.H.useTransition();
    }),
    (G.version = "19.2.3"),
    G
  );
}
var zr;
function gf() {
  return (zr || ((zr = 1), (df.exports = nh())), df.exports);
}
var Nt = gf(),
  of = { exports: {} },
  Nn = {},
  rf = { exports: {} },
  mf = {};
var Nr;
function uh() {
  return (
    Nr ||
      ((Nr = 1),
      (function (p) {
        function X(x, E) {
          var q = x.length;
          x.push(E);
          l: for (; 0 < q; ) {
            var il = (q - 1) >>> 1,
              dl = x[il];
            if (0 < Q(dl, E)) ((x[il] = E), (x[q] = dl), (q = il));
            else break l;
          }
        }
        function B(x) {
          return x.length === 0 ? null : x[0];
        }
        function g(x) {
          if (x.length === 0) return null;
          var E = x[0],
            q = x.pop();
          if (q !== E) {
            x[0] = q;
            l: for (var il = 0, dl = x.length, o = dl >>> 1; il < o; ) {
              var j = 2 * (il + 1) - 1,
                A = x[j],
                D = j + 1,
                Z = x[D];
              if (0 > Q(A, q))
                D < dl && 0 > Q(Z, A)
                  ? ((x[il] = Z), (x[D] = q), (il = D))
                  : ((x[il] = A), (x[j] = q), (il = j));
              else if (D < dl && 0 > Q(Z, q))
                ((x[il] = Z), (x[D] = q), (il = D));
              else break l;
            }
          }
          return E;
        }
        function Q(x, E) {
          var q = x.sortIndex - E.sortIndex;
          return q !== 0 ? q : x.id - E.id;
        }
        if (
          ((p.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var F = performance;
          p.unstable_now = function () {
            return F.now();
          };
        } else {
          var O = Date,
            hl = O.now();
          p.unstable_now = function () {
            return O.now() - hl;
          };
        }
        var C = [],
          T = [],
          I = 1,
          H = null,
          rl = 3,
          Ll = !1,
          Ml = !1,
          Ol = !1,
          ze = !1,
          Rl = typeof setTimeout == "function" ? setTimeout : null,
          wl = typeof clearTimeout == "function" ? clearTimeout : null,
          xl = typeof setImmediate < "u" ? setImmediate : null;
        function kl(x) {
          for (var E = B(T); E !== null; ) {
            if (E.callback === null) g(T);
            else if (E.startTime <= x)
              (g(T), (E.sortIndex = E.expirationTime), X(C, E));
            else break;
            E = B(T);
          }
        }
        function Vl(x) {
          if (((Ol = !1), kl(x), !Ml))
            if (B(C) !== null) ((Ml = !0), Hl || ((Hl = !0), yl()));
            else {
              var E = B(T);
              E !== null && je(Vl, E.startTime - x);
            }
        }
        var Hl = !1,
          K = -1,
          Xl = 5,
          N = -1;
        function Y() {
          return ze ? !0 : !(p.unstable_now() - N < Xl);
        }
        function ml() {
          if (((ze = !1), Hl)) {
            var x = p.unstable_now();
            N = x;
            var E = !0;
            try {
              l: {
                ((Ml = !1), Ol && ((Ol = !1), wl(K), (K = -1)), (Ll = !0));
                var q = rl;
                try {
                  e: {
                    for (
                      kl(x), H = B(C);
                      H !== null && !(H.expirationTime > x && Y());
                    ) {
                      var il = H.callback;
                      if (typeof il == "function") {
                        ((H.callback = null), (rl = H.priorityLevel));
                        var dl = il(H.expirationTime <= x);
                        if (((x = p.unstable_now()), typeof dl == "function")) {
                          ((H.callback = dl), kl(x), (E = !0));
                          break e;
                        }
                        (H === B(C) && g(C), kl(x));
                      } else g(C);
                      H = B(C);
                    }
                    if (H !== null) E = !0;
                    else {
                      var o = B(T);
                      (o !== null && je(Vl, o.startTime - x), (E = !1));
                    }
                  }
                  break l;
                } finally {
                  ((H = null), (rl = q), (Ll = !1));
                }
                E = void 0;
              }
            } finally {
              E ? yl() : (Hl = !1);
            }
          }
        }
        var yl;
        if (typeof xl == "function")
          yl = function () {
            xl(ml);
          };
        else if (typeof MessageChannel < "u") {
          var Ce = new MessageChannel(),
            Ne = Ce.port2;
          ((Ce.port1.onmessage = ml),
            (yl = function () {
              Ne.postMessage(null);
            }));
        } else
          yl = function () {
            Rl(ml, 0);
          };
        function je(x, E) {
          K = Rl(function () {
            x(p.unstable_now());
          }, E);
        }
        ((p.unstable_IdlePriority = 5),
          (p.unstable_ImmediatePriority = 1),
          (p.unstable_LowPriority = 4),
          (p.unstable_NormalPriority = 3),
          (p.unstable_Profiling = null),
          (p.unstable_UserBlockingPriority = 2),
          (p.unstable_cancelCallback = function (x) {
            x.callback = null;
          }),
          (p.unstable_forceFrameRate = function (x) {
            0 > x || 125 < x
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Xl = 0 < x ? Math.floor(1e3 / x) : 5);
          }),
          (p.unstable_getCurrentPriorityLevel = function () {
            return rl;
          }),
          (p.unstable_next = function (x) {
            switch (rl) {
              case 1:
              case 2:
              case 3:
                var E = 3;
                break;
              default:
                E = rl;
            }
            var q = rl;
            rl = E;
            try {
              return x();
            } finally {
              rl = q;
            }
          }),
          (p.unstable_requestPaint = function () {
            ze = !0;
          }),
          (p.unstable_runWithPriority = function (x, E) {
            switch (x) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                x = 3;
            }
            var q = rl;
            rl = x;
            try {
              return E();
            } finally {
              rl = q;
            }
          }),
          (p.unstable_scheduleCallback = function (x, E, q) {
            var il = p.unstable_now();
            switch (
              (typeof q == "object" && q !== null
                ? ((q = q.delay),
                  (q = typeof q == "number" && 0 < q ? il + q : il))
                : (q = il),
              x)
            ) {
              case 1:
                var dl = -1;
                break;
              case 2:
                dl = 250;
                break;
              case 5:
                dl = 1073741823;
                break;
              case 4:
                dl = 1e4;
                break;
              default:
                dl = 5e3;
            }
            return (
              (dl = q + dl),
              (x = {
                id: I++,
                callback: E,
                priorityLevel: x,
                startTime: q,
                expirationTime: dl,
                sortIndex: -1,
              }),
              q > il
                ? ((x.sortIndex = q),
                  X(T, x),
                  B(C) === null &&
                    x === B(T) &&
                    (Ol ? (wl(K), (K = -1)) : (Ol = !0), je(Vl, q - il)))
                : ((x.sortIndex = dl),
                  X(C, x),
                  Ml || Ll || ((Ml = !0), Hl || ((Hl = !0), yl()))),
              x
            );
          }),
          (p.unstable_shouldYield = Y),
          (p.unstable_wrapCallback = function (x) {
            var E = rl;
            return function () {
              var q = rl;
              rl = E;
              try {
                return x.apply(this, arguments);
              } finally {
                rl = q;
              }
            };
          }));
      })(mf)),
    mf
  );
}
var jr;
function ih() {
  return (jr || ((jr = 1), (rf.exports = uh())), rf.exports);
}
var hf = { exports: {} },
  Zl = {};
var Tr;
function ch() {
  if (Tr) return Zl;
  Tr = 1;
  var p = gf();
  function X(C) {
    var T = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      T += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        T += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return (
      "Minified React error #" +
      C +
      "; visit " +
      T +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function B() {}
  var g = {
      d: {
        f: B,
        r: function () {
          throw Error(X(522));
        },
        D: B,
        C: B,
        L: B,
        m: B,
        X: B,
        S: B,
        M: B,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal");
  function F(C, T, I) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: H == null ? null : "" + H,
      children: C,
      containerInfo: T,
      implementation: I,
    };
  }
  var O = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function hl(C, T) {
    if (C === "font") return "";
    if (typeof T == "string") return T === "use-credentials" ? T : "";
  }
  return (
    (Zl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = g),
    (Zl.createPortal = function (C, T) {
      var I =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!T || (T.nodeType !== 1 && T.nodeType !== 9 && T.nodeType !== 11))
        throw Error(X(299));
      return F(C, T, null, I);
    }),
    (Zl.flushSync = function (C) {
      var T = O.T,
        I = g.p;
      try {
        if (((O.T = null), (g.p = 2), C)) return C();
      } finally {
        ((O.T = T), (g.p = I), g.d.f());
      }
    }),
    (Zl.preconnect = function (C, T) {
      typeof C == "string" &&
        (T
          ? ((T = T.crossOrigin),
            (T =
              typeof T == "string"
                ? T === "use-credentials"
                  ? T
                  : ""
                : void 0))
          : (T = null),
        g.d.C(C, T));
    }),
    (Zl.prefetchDNS = function (C) {
      typeof C == "string" && g.d.D(C);
    }),
    (Zl.preinit = function (C, T) {
      if (typeof C == "string" && T && typeof T.as == "string") {
        var I = T.as,
          H = hl(I, T.crossOrigin),
          rl = typeof T.integrity == "string" ? T.integrity : void 0,
          Ll = typeof T.fetchPriority == "string" ? T.fetchPriority : void 0;
        I === "style"
          ? g.d.S(C, typeof T.precedence == "string" ? T.precedence : void 0, {
              crossOrigin: H,
              integrity: rl,
              fetchPriority: Ll,
            })
          : I === "script" &&
            g.d.X(C, {
              crossOrigin: H,
              integrity: rl,
              fetchPriority: Ll,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
      }
    }),
    (Zl.preinitModule = function (C, T) {
      if (typeof C == "string")
        if (typeof T == "object" && T !== null) {
          if (T.as == null || T.as === "script") {
            var I = hl(T.as, T.crossOrigin);
            g.d.M(C, {
              crossOrigin: I,
              integrity: typeof T.integrity == "string" ? T.integrity : void 0,
              nonce: typeof T.nonce == "string" ? T.nonce : void 0,
            });
          }
        } else T == null && g.d.M(C);
    }),
    (Zl.preload = function (C, T) {
      if (
        typeof C == "string" &&
        typeof T == "object" &&
        T !== null &&
        typeof T.as == "string"
      ) {
        var I = T.as,
          H = hl(I, T.crossOrigin);
        g.d.L(C, I, {
          crossOrigin: H,
          integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          nonce: typeof T.nonce == "string" ? T.nonce : void 0,
          type: typeof T.type == "string" ? T.type : void 0,
          fetchPriority:
            typeof T.fetchPriority == "string" ? T.fetchPriority : void 0,
          referrerPolicy:
            typeof T.referrerPolicy == "string" ? T.referrerPolicy : void 0,
          imageSrcSet:
            typeof T.imageSrcSet == "string" ? T.imageSrcSet : void 0,
          imageSizes: typeof T.imageSizes == "string" ? T.imageSizes : void 0,
          media: typeof T.media == "string" ? T.media : void 0,
        });
      }
    }),
    (Zl.preloadModule = function (C, T) {
      if (typeof C == "string")
        if (T) {
          var I = hl(T.as, T.crossOrigin);
          g.d.m(C, {
            as: typeof T.as == "string" && T.as !== "script" ? T.as : void 0,
            crossOrigin: I,
            integrity: typeof T.integrity == "string" ? T.integrity : void 0,
          });
        } else g.d.m(C);
    }),
    (Zl.requestFormReset = function (C) {
      g.d.r(C);
    }),
    (Zl.unstable_batchedUpdates = function (C, T) {
      return C(T);
    }),
    (Zl.useFormState = function (C, T, I) {
      return O.H.useFormState(C, T, I);
    }),
    (Zl.useFormStatus = function () {
      return O.H.useHostTransitionStatus();
    }),
    (Zl.version = "19.2.3"),
    Zl
  );
}
var Er;
function fh() {
  if (Er) return hf.exports;
  Er = 1;
  function p() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (X) {
        console.error(X);
      }
  }
  return (p(), (hf.exports = ch()), hf.exports);
}
var Ar;
function sh() {
  if (Ar) return Nn;
  Ar = 1;
  var p = ih(),
    X = gf(),
    B = fh();
  function g(l) {
    var e = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var t = 2; t < arguments.length; t++)
        e += "&args[]=" + encodeURIComponent(arguments[t]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function F(l) {
    var e = l,
      t = l;
    if (l.alternate) for (; e.return; ) e = e.return;
    else {
      l = e;
      do ((e = l), (e.flags & 4098) !== 0 && (t = e.return), (l = e.return));
      while (l);
    }
    return e.tag === 3 ? t : null;
  }
  function O(l) {
    if (l.tag === 13) {
      var e = l.memoizedState;
      if (
        (e === null && ((l = l.alternate), l !== null && (e = l.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function hl(l) {
    if (l.tag === 31) {
      var e = l.memoizedState;
      if (
        (e === null && ((l = l.alternate), l !== null && (e = l.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function C(l) {
    if (F(l) !== l) throw Error(g(188));
  }
  function T(l) {
    var e = l.alternate;
    if (!e) {
      if (((e = F(l)), e === null)) throw Error(g(188));
      return e !== l ? null : l;
    }
    for (var t = l, a = e; ; ) {
      var n = t.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (((a = n.return), a !== null)) {
          t = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === t) return (C(n), l);
          if (u === a) return (C(n), e);
          u = u.sibling;
        }
        throw Error(g(188));
      }
      if (t.return !== a.return) ((t = n), (a = u));
      else {
        for (var i = !1, f = n.child; f; ) {
          if (f === t) {
            ((i = !0), (t = n), (a = u));
            break;
          }
          if (f === a) {
            ((i = !0), (a = n), (t = u));
            break;
          }
          f = f.sibling;
        }
        if (!i) {
          for (f = u.child; f; ) {
            if (f === t) {
              ((i = !0), (t = u), (a = n));
              break;
            }
            if (f === a) {
              ((i = !0), (a = u), (t = n));
              break;
            }
            f = f.sibling;
          }
          if (!i) throw Error(g(189));
        }
      }
      if (t.alternate !== a) throw Error(g(190));
    }
    if (t.tag !== 3) throw Error(g(188));
    return t.stateNode.current === t ? l : e;
  }
  function I(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((e = I(l)), e !== null)) return e;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    rl = Symbol.for("react.element"),
    Ll = Symbol.for("react.transitional.element"),
    Ml = Symbol.for("react.portal"),
    Ol = Symbol.for("react.fragment"),
    ze = Symbol.for("react.strict_mode"),
    Rl = Symbol.for("react.profiler"),
    wl = Symbol.for("react.consumer"),
    xl = Symbol.for("react.context"),
    kl = Symbol.for("react.forward_ref"),
    Vl = Symbol.for("react.suspense"),
    Hl = Symbol.for("react.suspense_list"),
    K = Symbol.for("react.memo"),
    Xl = Symbol.for("react.lazy"),
    N = Symbol.for("react.activity"),
    Y = Symbol.for("react.memo_cache_sentinel"),
    ml = Symbol.iterator;
  function yl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (ml && l[ml]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var Ce = Symbol.for("react.client.reference");
  function Ne(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Ce ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Ol:
        return "Fragment";
      case Rl:
        return "Profiler";
      case ze:
        return "StrictMode";
      case Vl:
        return "Suspense";
      case Hl:
        return "SuspenseList";
      case N:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ml:
          return "Portal";
        case xl:
          return l.displayName || "Context";
        case wl:
          return (l._context.displayName || "Context") + ".Consumer";
        case kl:
          var e = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = e.displayName || e.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case K:
          return (
            (e = l.displayName || null),
            e !== null ? e : Ne(l.type) || "Memo"
          );
        case Xl:
          ((e = l._payload), (l = l._init));
          try {
            return Ne(l(e));
          } catch {}
      }
    return null;
  }
  var je = Array.isArray,
    x = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    E = B.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    q = { pending: !1, data: null, method: null, action: null },
    il = [],
    dl = -1;
  function o(l) {
    return { current: l };
  }
  function j(l) {
    0 > dl || ((l.current = il[dl]), (il[dl] = null), dl--);
  }
  function A(l, e) {
    (dl++, (il[dl] = l.current), (l.current = e));
  }
  var D = o(null),
    Z = o(null),
    J = o(null),
    al = o(null);
  function Kl(l, e) {
    switch ((A(J, e), A(Z, l), A(D, null), e.nodeType)) {
      case 9:
      case 11:
        l = (l = e.documentElement) && (l = l.namespaceURI) ? Zo(l) : 0;
        break;
      default:
        if (((l = e.tagName), (e = e.namespaceURI)))
          ((e = Zo(e)), (l = Lo(e, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (j(D), A(D, l));
  }
  function zl() {
    (j(D), j(Z), j(J));
  }
  function _a(l) {
    l.memoizedState !== null && A(al, l);
    var e = D.current,
      t = Lo(e, l.type);
    e !== t && (A(Z, l), A(D, t));
  }
  function jn(l) {
    (Z.current === l && (j(D), j(Z)),
      al.current === l && (j(al), (bn._currentValue = q)));
  }
  var Vu, yf;
  function jt(l) {
    if (Vu === void 0)
      try {
        throw Error();
      } catch (t) {
        var e = t.stack.trim().match(/\n( *(at )?)/);
        ((Vu = (e && e[1]) || ""),
          (yf =
            -1 <
            t.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < t.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Vu +
      l +
      yf
    );
  }
  var Ku = !1;
  function Ju(l, e) {
    if (!l || Ku) return "";
    Ku = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (y) {
                  var v = y;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (y) {
                  v = y;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (y) {
                v = y;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (y) {
            if (y && v && typeof y.stack == "string") return [y.stack, v.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = a.DetermineComponentFrameRoot(),
        i = u[0],
        f = u[1];
      if (i && f) {
        var s = i.split(`
`),
          h = f.split(`
`);
        for (
          n = a = 0;
          a < s.length && !s[a].includes("DetermineComponentFrameRoot");
        )
          a++;
        for (; n < h.length && !h[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === s.length || n === h.length)
          for (
            a = s.length - 1, n = h.length - 1;
            1 <= a && 0 <= n && s[a] !== h[n];
          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (s[a] !== h[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || s[a] !== h[n])) {
                  var b =
                    `
` + s[a].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ((Ku = !1), (Error.prepareStackTrace = t));
    }
    return (t = l ? l.displayName || l.name : "") ? jt(t) : "";
  }
  function Ur(l, e) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return jt(l.type);
      case 16:
        return jt("Lazy");
      case 13:
        return l.child !== e && e !== null
          ? jt("Suspense Fallback")
          : jt("Suspense");
      case 19:
        return jt("SuspenseList");
      case 0:
      case 15:
        return Ju(l.type, !1);
      case 11:
        return Ju(l.type.render, !1);
      case 1:
        return Ju(l.type, !0);
      case 31:
        return jt("Activity");
      default:
        return "";
    }
  }
  function bf(l) {
    try {
      var e = "",
        t = null;
      do ((e += Ur(l, t)), (t = l), (l = l.return));
      while (l);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var wu = Object.prototype.hasOwnProperty,
    ku = p.unstable_scheduleCallback,
    Wu = p.unstable_cancelCallback,
    Rr = p.unstable_shouldYield,
    Hr = p.unstable_requestPaint,
    te = p.unstable_now,
    qr = p.unstable_getCurrentPriorityLevel,
    xf = p.unstable_ImmediatePriority,
    pf = p.unstable_UserBlockingPriority,
    Tn = p.unstable_NormalPriority,
    Br = p.unstable_LowPriority,
    Sf = p.unstable_IdlePriority,
    Yr = p.log,
    Gr = p.unstable_setDisableYieldValue,
    Da = null,
    ae = null;
  function Ie(l) {
    if (
      (typeof Yr == "function" && Gr(l),
      ae && typeof ae.setStrictMode == "function")
    )
      try {
        ae.setStrictMode(Da, l);
      } catch {}
  }
  var ne = Math.clz32 ? Math.clz32 : Zr,
    Qr = Math.log,
    Xr = Math.LN2;
  function Zr(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Qr(l) / Xr) | 0)) | 0);
  }
  var En = 256,
    An = 262144,
    _n = 4194304;
  function Tt(l) {
    var e = l & 42;
    if (e !== 0) return e;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Dn(l, e, t) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      u = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var f = a & 134217727;
    return (
      f !== 0
        ? ((a = f & ~u),
          a !== 0
            ? (n = Tt(a))
            : ((i &= f),
              i !== 0
                ? (n = Tt(i))
                : t || ((t = f & ~l), t !== 0 && (n = Tt(t)))))
        : ((f = a & ~u),
          f !== 0
            ? (n = Tt(f))
            : i !== 0
              ? (n = Tt(i))
              : t || ((t = a & ~l), t !== 0 && (n = Tt(t)))),
      n === 0
        ? 0
        : e !== 0 &&
            e !== n &&
            (e & u) === 0 &&
            ((u = n & -n),
            (t = e & -e),
            u >= t || (u === 32 && (t & 4194048) !== 0))
          ? e
          : n
    );
  }
  function Ma(l, e) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & e) === 0;
  }
  function Lr(l, e) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function zf() {
    var l = _n;
    return ((_n <<= 1), (_n & 62914560) === 0 && (_n = 4194304), l);
  }
  function $u(l) {
    for (var e = [], t = 0; 31 > t; t++) e.push(l);
    return e;
  }
  function Oa(l, e) {
    ((l.pendingLanes |= e),
      e !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Vr(l, e, t, a, n, u) {
    var i = l.pendingLanes;
    ((l.pendingLanes = t),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= t),
      (l.entangledLanes &= t),
      (l.errorRecoveryDisabledLanes &= t),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      s = l.expirationTimes,
      h = l.hiddenUpdates;
    for (t = i & ~t; 0 < t; ) {
      var b = 31 - ne(t),
        z = 1 << b;
      ((f[b] = 0), (s[b] = -1));
      var v = h[b];
      if (v !== null)
        for (h[b] = null, b = 0; b < v.length; b++) {
          var y = v[b];
          y !== null && (y.lane &= -536870913);
        }
      t &= ~z;
    }
    (a !== 0 && Nf(l, a, 0),
      u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~e)));
  }
  function Nf(l, e, t) {
    ((l.pendingLanes |= e), (l.suspendedLanes &= ~e));
    var a = 31 - ne(e);
    ((l.entangledLanes |= e),
      (l.entanglements[a] = l.entanglements[a] | 1073741824 | (t & 261930)));
  }
  function jf(l, e) {
    var t = (l.entangledLanes |= e);
    for (l = l.entanglements; t; ) {
      var a = 31 - ne(t),
        n = 1 << a;
      ((n & e) | (l[a] & e) && (l[a] |= e), (t &= ~n));
    }
  }
  function Tf(l, e) {
    var t = e & -e;
    return (
      (t = (t & 42) !== 0 ? 1 : Fu(t)),
      (t & (l.suspendedLanes | e)) !== 0 ? 0 : t
    );
  }
  function Fu(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Iu(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ef() {
    var l = E.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : rr(l.type));
  }
  function Af(l, e) {
    var t = E.p;
    try {
      return ((E.p = l), e());
    } finally {
      E.p = t;
    }
  }
  var Pe = Math.random().toString(36).slice(2),
    ql = "__reactFiber$" + Pe,
    Wl = "__reactProps$" + Pe,
    Lt = "__reactContainer$" + Pe,
    Pu = "__reactEvents$" + Pe,
    Kr = "__reactListeners$" + Pe,
    Jr = "__reactHandles$" + Pe,
    _f = "__reactResources$" + Pe,
    Ca = "__reactMarker$" + Pe;
  function li(l) {
    (delete l[ql], delete l[Wl], delete l[Pu], delete l[Kr], delete l[Jr]);
  }
  function Vt(l) {
    var e = l[ql];
    if (e) return e;
    for (var t = l.parentNode; t; ) {
      if ((e = t[Lt] || t[ql])) {
        if (
          ((t = e.alternate),
          e.child !== null || (t !== null && t.child !== null))
        )
          for (l = $o(l); l !== null; ) {
            if ((t = l[ql])) return t;
            l = $o(l);
          }
        return e;
      }
      ((l = t), (t = l.parentNode));
    }
    return null;
  }
  function Kt(l) {
    if ((l = l[ql] || l[Lt])) {
      var e = l.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return l;
    }
    return null;
  }
  function Ua(l) {
    var e = l.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return l.stateNode;
    throw Error(g(33));
  }
  function Jt(l) {
    var e = l[_f];
    return (
      e ||
        (e = l[_f] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function Cl(l) {
    l[Ca] = !0;
  }
  var Df = new Set(),
    Mf = {};
  function Et(l, e) {
    (wt(l, e), wt(l + "Capture", e));
  }
  function wt(l, e) {
    for (Mf[l] = e, l = 0; l < e.length; l++) Df.add(e[l]);
  }
  var wr = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Of = {},
    Cf = {};
  function kr(l) {
    return wu.call(Cf, l)
      ? !0
      : wu.call(Of, l)
        ? !1
        : wr.test(l)
          ? (Cf[l] = !0)
          : ((Of[l] = !0), !1);
  }
  function Mn(l, e, t) {
    if (kr(e))
      if (t === null) l.removeAttribute(e);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(e);
              return;
            }
        }
        l.setAttribute(e, "" + t);
      }
  }
  function On(l, e, t) {
    if (t === null) l.removeAttribute(e);
    else {
      switch (typeof t) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttribute(e, "" + t);
    }
  }
  function Ue(l, e, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttributeNS(e, t, "" + a);
    }
  }
  function re(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Uf(l) {
    var e = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Wr(l, e, t) {
    var a = Object.getOwnPropertyDescriptor(l.constructor.prototype, e);
    if (
      !l.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        u = a.set;
      return (
        Object.defineProperty(l, e, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (i) {
            ((t = "" + i), u.call(this, i));
          },
        }),
        Object.defineProperty(l, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return t;
          },
          setValue: function (i) {
            t = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[e]);
          },
        }
      );
    }
  }
  function ei(l) {
    if (!l._valueTracker) {
      var e = Uf(l) ? "checked" : "value";
      l._valueTracker = Wr(l, e, "" + l[e]);
    }
  }
  function Rf(l) {
    if (!l) return !1;
    var e = l._valueTracker;
    if (!e) return !0;
    var t = e.getValue(),
      a = "";
    return (
      l && (a = Uf(l) ? (l.checked ? "true" : "false") : l.value),
      (l = a),
      l !== t ? (e.setValue(l), !0) : !1
    );
  }
  function Cn(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $r = /[\n"\\]/g;
  function me(l) {
    return l.replace($r, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function ti(l, e, t, a, n, u, i, f) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      e != null
        ? i === "number"
          ? ((e === 0 && l.value === "") || l.value != e) &&
            (l.value = "" + re(e))
          : l.value !== "" + re(e) && (l.value = "" + re(e))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      e != null
        ? ai(l, i, re(e))
        : t != null
          ? ai(l, i, re(t))
          : a != null && l.removeAttribute("value"),
      n == null && u != null && (l.defaultChecked = !!u),
      n != null &&
        (l.checked = n && typeof n != "function" && typeof n != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + re(f))
        : l.removeAttribute("name"));
  }
  function Hf(l, e, t, a, n, u, i, f) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (l.type = u),
      e != null || t != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || e != null)) {
        ei(l);
        return;
      }
      ((t = t != null ? "" + re(t) : ""),
        (e = e != null ? "" + re(e) : t),
        f || e === l.value || (l.value = e),
        (l.defaultValue = e));
    }
    ((a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (l.checked = f ? l.checked : !!a),
      (l.defaultChecked = !!a),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      ei(l));
  }
  function ai(l, e, t) {
    (e === "number" && Cn(l.ownerDocument) === l) ||
      l.defaultValue === "" + t ||
      (l.defaultValue = "" + t);
  }
  function kt(l, e, t, a) {
    if (((l = l.options), e)) {
      e = {};
      for (var n = 0; n < t.length; n++) e["$" + t[n]] = !0;
      for (t = 0; t < l.length; t++)
        ((n = e.hasOwnProperty("$" + l[t].value)),
          l[t].selected !== n && (l[t].selected = n),
          n && a && (l[t].defaultSelected = !0));
    } else {
      for (t = "" + re(t), e = null, n = 0; n < l.length; n++) {
        if (l[n].value === t) {
          ((l[n].selected = !0), a && (l[n].defaultSelected = !0));
          return;
        }
        e !== null || l[n].disabled || (e = l[n]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function qf(l, e, t) {
    if (
      e != null &&
      ((e = "" + re(e)), e !== l.value && (l.value = e), t == null)
    ) {
      l.defaultValue !== e && (l.defaultValue = e);
      return;
    }
    l.defaultValue = t != null ? "" + re(t) : "";
  }
  function Bf(l, e, t, a) {
    if (e == null) {
      if (a != null) {
        if (t != null) throw Error(g(92));
        if (je(a)) {
          if (1 < a.length) throw Error(g(93));
          a = a[0];
        }
        t = a;
      }
      (t == null && (t = ""), (e = t));
    }
    ((t = re(e)),
      (l.defaultValue = t),
      (a = l.textContent),
      a === t && a !== "" && a !== null && (l.value = a),
      ei(l));
  }
  function Wt(l, e) {
    if (e) {
      var t = l.firstChild;
      if (t && t === l.lastChild && t.nodeType === 3) {
        t.nodeValue = e;
        return;
      }
    }
    l.textContent = e;
  }
  var Fr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Yf(l, e, t) {
    var a = e.indexOf("--") === 0;
    t == null || typeof t == "boolean" || t === ""
      ? a
        ? l.setProperty(e, "")
        : e === "float"
          ? (l.cssFloat = "")
          : (l[e] = "")
      : a
        ? l.setProperty(e, t)
        : typeof t != "number" || t === 0 || Fr.has(e)
          ? e === "float"
            ? (l.cssFloat = t)
            : (l[e] = ("" + t).trim())
          : (l[e] = t + "px");
  }
  function Gf(l, e, t) {
    if (e != null && typeof e != "object") throw Error(g(62));
    if (((l = l.style), t != null)) {
      for (var a in t)
        !t.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? l.setProperty(a, "")
            : a === "float"
              ? (l.cssFloat = "")
              : (l[a] = ""));
      for (var n in e)
        ((a = e[n]), e.hasOwnProperty(n) && t[n] !== a && Yf(l, n, a));
    } else for (var u in e) e.hasOwnProperty(u) && Yf(l, u, e[u]);
  }
  function ni(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ir = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Pr =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Un(l) {
    return Pr.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Re() {}
  var ui = null;
  function ii(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var $t = null,
    Ft = null;
  function Qf(l) {
    var e = Kt(l);
    if (e && (l = e.stateNode)) {
      var t = l[Wl] || null;
      l: switch (((l = e.stateNode), e.type)) {
        case "input":
          if (
            (ti(
              l,
              t.value,
              t.defaultValue,
              t.defaultValue,
              t.checked,
              t.defaultChecked,
              t.type,
              t.name,
            ),
            (e = t.name),
            t.type === "radio" && e != null)
          ) {
            for (t = l; t.parentNode; ) t = t.parentNode;
            for (
              t = t.querySelectorAll(
                'input[name="' + me("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < t.length;
              e++
            ) {
              var a = t[e];
              if (a !== l && a.form === l.form) {
                var n = a[Wl] || null;
                if (!n) throw Error(g(90));
                ti(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                );
              }
            }
            for (e = 0; e < t.length; e++)
              ((a = t[e]), a.form === l.form && Rf(a));
          }
          break l;
        case "textarea":
          qf(l, t.value, t.defaultValue);
          break l;
        case "select":
          ((e = t.value), e != null && kt(l, !!t.multiple, e, !1));
      }
    }
  }
  var ci = !1;
  function Xf(l, e, t) {
    if (ci) return l(e, t);
    ci = !0;
    try {
      var a = l(e);
      return a;
    } finally {
      if (
        ((ci = !1),
        ($t !== null || Ft !== null) &&
          (pu(), $t && ((e = $t), (l = Ft), (Ft = $t = null), Qf(e), l)))
      )
        for (e = 0; e < l.length; e++) Qf(l[e]);
    }
  }
  function Ra(l, e) {
    var t = l.stateNode;
    if (t === null) return null;
    var a = t[Wl] || null;
    if (a === null) return null;
    t = a[e];
    l: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((a = !a.disabled) ||
          ((l = l.type),
          (a = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !a));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (t && typeof t != "function") throw Error(g(231, e, typeof t));
    return t;
  }
  var He = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    fi = !1;
  if (He)
    try {
      var Ha = {};
      (Object.defineProperty(Ha, "passive", {
        get: function () {
          fi = !0;
        },
      }),
        window.addEventListener("test", Ha, Ha),
        window.removeEventListener("test", Ha, Ha));
    } catch {
      fi = !1;
    }
  var lt = null,
    si = null,
    Rn = null;
  function Zf() {
    if (Rn) return Rn;
    var l,
      e = si,
      t = e.length,
      a,
      n = "value" in lt ? lt.value : lt.textContent,
      u = n.length;
    for (l = 0; l < t && e[l] === n[l]; l++);
    var i = t - l;
    for (a = 1; a <= i && e[t - a] === n[u - a]; a++);
    return (Rn = n.slice(l, 1 < a ? 1 - a : void 0));
  }
  function Hn(l) {
    var e = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && e === 13 && (l = 13))
        : (l = e),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function qn() {
    return !0;
  }
  function Lf() {
    return !1;
  }
  function $l(l) {
    function e(t, a, n, u, i) {
      ((this._reactName = t),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = u),
        (this.target = i),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((t = l[f]), (this[f] = t ? t(u) : u[f]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? qn
          : Lf),
        (this.isPropagationStopped = Lf),
        this
      );
    }
    return (
      H(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var t = this.nativeEvent;
          t &&
            (t.preventDefault
              ? t.preventDefault()
              : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            (this.isDefaultPrevented = qn));
        },
        stopPropagation: function () {
          var t = this.nativeEvent;
          t &&
            (t.stopPropagation
              ? t.stopPropagation()
              : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            (this.isPropagationStopped = qn));
        },
        persist: function () {},
        isPersistent: qn,
      }),
      e
    );
  }
  var At = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Bn = $l(At),
    qa = H({}, At, { view: 0, detail: 0 }),
    lm = $l(qa),
    di,
    oi,
    Ba,
    Yn = H({}, qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: mi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ba &&
              (Ba && l.type === "mousemove"
                ? ((di = l.screenX - Ba.screenX), (oi = l.screenY - Ba.screenY))
                : (oi = di = 0),
              (Ba = l)),
            di);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : oi;
      },
    }),
    Vf = $l(Yn),
    em = H({}, Yn, { dataTransfer: 0 }),
    tm = $l(em),
    am = H({}, qa, { relatedTarget: 0 }),
    ri = $l(am),
    nm = H({}, At, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    um = $l(nm),
    im = H({}, At, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    cm = $l(im),
    fm = H({}, At, { data: 0 }),
    Kf = $l(fm),
    sm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    dm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    om = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function rm(l) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(l)
      : (l = om[l])
        ? !!e[l]
        : !1;
  }
  function mi() {
    return rm;
  }
  var mm = H({}, qa, {
      key: function (l) {
        if (l.key) {
          var e = sm[l.key] || l.key;
          if (e !== "Unidentified") return e;
        }
        return l.type === "keypress"
          ? ((l = Hn(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? dm[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: mi,
      charCode: function (l) {
        return l.type === "keypress" ? Hn(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? Hn(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    hm = $l(mm),
    vm = H({}, Yn, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Jf = $l(vm),
    gm = H({}, qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: mi,
    }),
    ym = $l(gm),
    bm = H({}, At, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xm = $l(bm),
    pm = H({}, Yn, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Sm = $l(pm),
    zm = H({}, At, { newState: 0, oldState: 0 }),
    Nm = $l(zm),
    jm = [9, 13, 27, 32],
    hi = He && "CompositionEvent" in window,
    Ya = null;
  He && "documentMode" in document && (Ya = document.documentMode);
  var Tm = He && "TextEvent" in window && !Ya,
    wf = He && (!hi || (Ya && 8 < Ya && 11 >= Ya)),
    kf = " ",
    Wf = !1;
  function $f(l, e) {
    switch (l) {
      case "keyup":
        return jm.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ff(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var It = !1;
  function Em(l, e) {
    switch (l) {
      case "compositionend":
        return Ff(e);
      case "keypress":
        return e.which !== 32 ? null : ((Wf = !0), kf);
      case "textInput":
        return ((l = e.data), l === kf && Wf ? null : l);
      default:
        return null;
    }
  }
  function Am(l, e) {
    if (It)
      return l === "compositionend" || (!hi && $f(l, e))
        ? ((l = Zf()), (Rn = si = lt = null), (It = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return wf && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var _m = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function If(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return e === "input" ? !!_m[l.type] : e === "textarea";
  }
  function Pf(l, e, t, a) {
    ($t ? (Ft ? Ft.push(a) : (Ft = [a])) : ($t = a),
      (e = Au(e, "onChange")),
      0 < e.length &&
        ((t = new Bn("onChange", "change", null, t, a)),
        l.push({ event: t, listeners: e })));
  }
  var Ga = null,
    Qa = null;
  function Dm(l) {
    qo(l, 0);
  }
  function Gn(l) {
    var e = Ua(l);
    if (Rf(e)) return l;
  }
  function ls(l, e) {
    if (l === "change") return e;
  }
  var es = !1;
  if (He) {
    var vi;
    if (He) {
      var gi = "oninput" in document;
      if (!gi) {
        var ts = document.createElement("div");
        (ts.setAttribute("oninput", "return;"),
          (gi = typeof ts.oninput == "function"));
      }
      vi = gi;
    } else vi = !1;
    es = vi && (!document.documentMode || 9 < document.documentMode);
  }
  function as() {
    Ga && (Ga.detachEvent("onpropertychange", ns), (Qa = Ga = null));
  }
  function ns(l) {
    if (l.propertyName === "value" && Gn(Qa)) {
      var e = [];
      (Pf(e, Qa, l, ii(l)), Xf(Dm, e));
    }
  }
  function Mm(l, e, t) {
    l === "focusin"
      ? (as(), (Ga = e), (Qa = t), Ga.attachEvent("onpropertychange", ns))
      : l === "focusout" && as();
  }
  function Om(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Gn(Qa);
  }
  function Cm(l, e) {
    if (l === "click") return Gn(e);
  }
  function Um(l, e) {
    if (l === "input" || l === "change") return Gn(e);
  }
  function Rm(l, e) {
    return (l === e && (l !== 0 || 1 / l === 1 / e)) || (l !== l && e !== e);
  }
  var ue = typeof Object.is == "function" ? Object.is : Rm;
  function Xa(l, e) {
    if (ue(l, e)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var t = Object.keys(l),
      a = Object.keys(e);
    if (t.length !== a.length) return !1;
    for (a = 0; a < t.length; a++) {
      var n = t[a];
      if (!wu.call(e, n) || !ue(l[n], e[n])) return !1;
    }
    return !0;
  }
  function us(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function is(l, e) {
    var t = us(l);
    l = 0;
    for (var a; t; ) {
      if (t.nodeType === 3) {
        if (((a = l + t.textContent.length), l <= e && a >= e))
          return { node: t, offset: e - l };
        l = a;
      }
      l: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break l;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = us(t);
    }
  }
  function cs(l, e) {
    return l && e
      ? l === e
        ? !0
        : l && l.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? cs(l, e.parentNode)
            : "contains" in l
              ? l.contains(e)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function fs(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var e = Cn(l.document); e instanceof l.HTMLIFrameElement; ) {
      try {
        var t = typeof e.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) l = e.contentWindow;
      else break;
      e = Cn(l.document);
    }
    return e;
  }
  function yi(l) {
    var e = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        e === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var Hm = He && "documentMode" in document && 11 >= document.documentMode,
    Pt = null,
    bi = null,
    Za = null,
    xi = !1;
  function ss(l, e, t) {
    var a =
      t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    xi ||
      Pt == null ||
      Pt !== Cn(a) ||
      ((a = Pt),
      "selectionStart" in a && yi(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (Za && Xa(Za, a)) ||
        ((Za = a),
        (a = Au(bi, "onSelect")),
        0 < a.length &&
          ((e = new Bn("onSelect", "select", null, e, t)),
          l.push({ event: e, listeners: a }),
          (e.target = Pt))));
  }
  function _t(l, e) {
    var t = {};
    return (
      (t[l.toLowerCase()] = e.toLowerCase()),
      (t["Webkit" + l] = "webkit" + e),
      (t["Moz" + l] = "moz" + e),
      t
    );
  }
  var la = {
      animationend: _t("Animation", "AnimationEnd"),
      animationiteration: _t("Animation", "AnimationIteration"),
      animationstart: _t("Animation", "AnimationStart"),
      transitionrun: _t("Transition", "TransitionRun"),
      transitionstart: _t("Transition", "TransitionStart"),
      transitioncancel: _t("Transition", "TransitionCancel"),
      transitionend: _t("Transition", "TransitionEnd"),
    },
    pi = {},
    ds = {};
  He &&
    ((ds = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete la.animationend.animation,
      delete la.animationiteration.animation,
      delete la.animationstart.animation),
    "TransitionEvent" in window || delete la.transitionend.transition);
  function Dt(l) {
    if (pi[l]) return pi[l];
    if (!la[l]) return l;
    var e = la[l],
      t;
    for (t in e) if (e.hasOwnProperty(t) && t in ds) return (pi[l] = e[t]);
    return l;
  }
  var os = Dt("animationend"),
    rs = Dt("animationiteration"),
    ms = Dt("animationstart"),
    qm = Dt("transitionrun"),
    Bm = Dt("transitionstart"),
    Ym = Dt("transitioncancel"),
    hs = Dt("transitionend"),
    vs = new Map(),
    Si =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Si.push("scrollEnd");
  function Te(l, e) {
    (vs.set(l, e), Et(e, [l]));
  }
  var Qn =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    he = [],
    ea = 0,
    zi = 0;
  function Xn() {
    for (var l = ea, e = (zi = ea = 0); e < l; ) {
      var t = he[e];
      he[e++] = null;
      var a = he[e];
      he[e++] = null;
      var n = he[e];
      he[e++] = null;
      var u = he[e];
      if (((he[e++] = null), a !== null && n !== null)) {
        var i = a.pending;
        (i === null ? (n.next = n) : ((n.next = i.next), (i.next = n)),
          (a.pending = n));
      }
      u !== 0 && gs(t, n, u);
    }
  }
  function Zn(l, e, t, a) {
    ((he[ea++] = l),
      (he[ea++] = e),
      (he[ea++] = t),
      (he[ea++] = a),
      (zi |= a),
      (l.lanes |= a),
      (l = l.alternate),
      l !== null && (l.lanes |= a));
  }
  function Ni(l, e, t, a) {
    return (Zn(l, e, t, a), Ln(l));
  }
  function Mt(l, e) {
    return (Zn(l, null, null, e), Ln(l));
  }
  function gs(l, e, t) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t);
    for (var n = !1, u = l.return; u !== null; )
      ((u.childLanes |= t),
        (a = u.alternate),
        a !== null && (a.childLanes |= t),
        u.tag === 22 &&
          ((l = u.stateNode), l === null || l._visibility & 1 || (n = !0)),
        (l = u),
        (u = u.return));
    return l.tag === 3
      ? ((u = l.stateNode),
        n &&
          e !== null &&
          ((n = 31 - ne(t)),
          (l = u.hiddenUpdates),
          (a = l[n]),
          a === null ? (l[n] = [e]) : a.push(e),
          (e.lane = t | 536870912)),
        u)
      : null;
  }
  function Ln(l) {
    if (50 < on) throw ((on = 0), (Cc = null), Error(g(185)));
    for (var e = l.return; e !== null; ) ((l = e), (e = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Gm(l, e, t, a) {
    ((this.tag = l),
      (this.key = t),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function ie(l, e, t, a) {
    return new Gm(l, e, t, a);
  }
  function ji(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function qe(l, e) {
    var t = l.alternate;
    return (
      t === null
        ? ((t = ie(l.tag, e, l.key, l.mode)),
          (t.elementType = l.elementType),
          (t.type = l.type),
          (t.stateNode = l.stateNode),
          (t.alternate = l),
          (l.alternate = t))
        : ((t.pendingProps = e),
          (t.type = l.type),
          (t.flags = 0),
          (t.subtreeFlags = 0),
          (t.deletions = null)),
      (t.flags = l.flags & 65011712),
      (t.childLanes = l.childLanes),
      (t.lanes = l.lanes),
      (t.child = l.child),
      (t.memoizedProps = l.memoizedProps),
      (t.memoizedState = l.memoizedState),
      (t.updateQueue = l.updateQueue),
      (e = l.dependencies),
      (t.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (t.sibling = l.sibling),
      (t.index = l.index),
      (t.ref = l.ref),
      (t.refCleanup = l.refCleanup),
      t
    );
  }
  function ys(l, e) {
    l.flags &= 65011714;
    var t = l.alternate;
    return (
      t === null
        ? ((l.childLanes = 0),
          (l.lanes = e),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = t.childLanes),
          (l.lanes = t.lanes),
          (l.child = t.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = t.memoizedProps),
          (l.memoizedState = t.memoizedState),
          (l.updateQueue = t.updateQueue),
          (l.type = t.type),
          (e = t.dependencies),
          (l.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      l
    );
  }
  function Vn(l, e, t, a, n, u) {
    var i = 0;
    if (((a = l), typeof l == "function")) ji(l) && (i = 1);
    else if (typeof l == "string")
      i = V0(l, t, D.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case N:
          return ((l = ie(31, t, e, n)), (l.elementType = N), (l.lanes = u), l);
        case Ol:
          return Ot(t.children, n, u, e);
        case ze:
          ((i = 8), (n |= 24));
          break;
        case Rl:
          return (
            (l = ie(12, t, e, n | 2)),
            (l.elementType = Rl),
            (l.lanes = u),
            l
          );
        case Vl:
          return (
            (l = ie(13, t, e, n)),
            (l.elementType = Vl),
            (l.lanes = u),
            l
          );
        case Hl:
          return (
            (l = ie(19, t, e, n)),
            (l.elementType = Hl),
            (l.lanes = u),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case xl:
                i = 10;
                break l;
              case wl:
                i = 9;
                break l;
              case kl:
                i = 11;
                break l;
              case K:
                i = 14;
                break l;
              case Xl:
                ((i = 16), (a = null));
                break l;
            }
          ((i = 29),
            (t = Error(g(130, l === null ? "null" : typeof l, ""))),
            (a = null));
      }
    return (
      (e = ie(i, t, e, n)),
      (e.elementType = l),
      (e.type = a),
      (e.lanes = u),
      e
    );
  }
  function Ot(l, e, t, a) {
    return ((l = ie(7, l, a, e)), (l.lanes = t), l);
  }
  function Ti(l, e, t) {
    return ((l = ie(6, l, null, e)), (l.lanes = t), l);
  }
  function bs(l) {
    var e = ie(18, null, null, 0);
    return ((e.stateNode = l), e);
  }
  function Ei(l, e, t) {
    return (
      (e = ie(4, l.children !== null ? l.children : [], l.key, e)),
      (e.lanes = t),
      (e.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      e
    );
  }
  var xs = new WeakMap();
  function ve(l, e) {
    if (typeof l == "object" && l !== null) {
      var t = xs.get(l);
      return t !== void 0
        ? t
        : ((e = { value: l, source: e, stack: bf(e) }), xs.set(l, e), e);
    }
    return { value: l, source: e, stack: bf(e) };
  }
  var aa = [],
    na = 0,
    Kn = null,
    La = 0,
    ge = [],
    ye = 0,
    et = null,
    _e = 1,
    De = "";
  function Be(l, e) {
    ((aa[na++] = La), (aa[na++] = Kn), (Kn = l), (La = e));
  }
  function ps(l, e, t) {
    ((ge[ye++] = _e), (ge[ye++] = De), (ge[ye++] = et), (et = l));
    var a = _e;
    l = De;
    var n = 32 - ne(a) - 1;
    ((a &= ~(1 << n)), (t += 1));
    var u = 32 - ne(e) + n;
    if (30 < u) {
      var i = n - (n % 5);
      ((u = (a & ((1 << i) - 1)).toString(32)),
        (a >>= i),
        (n -= i),
        (_e = (1 << (32 - ne(e) + n)) | (t << n) | a),
        (De = u + l));
    } else ((_e = (1 << u) | (t << n) | a), (De = l));
  }
  function Ai(l) {
    l.return !== null && (Be(l, 1), ps(l, 1, 0));
  }
  function _i(l) {
    for (; l === Kn; )
      ((Kn = aa[--na]), (aa[na] = null), (La = aa[--na]), (aa[na] = null));
    for (; l === et; )
      ((et = ge[--ye]),
        (ge[ye] = null),
        (De = ge[--ye]),
        (ge[ye] = null),
        (_e = ge[--ye]),
        (ge[ye] = null));
  }
  function Ss(l, e) {
    ((ge[ye++] = _e),
      (ge[ye++] = De),
      (ge[ye++] = et),
      (_e = e.id),
      (De = e.overflow),
      (et = l));
  }
  var Bl = null,
    vl = null,
    P = !1,
    tt = null,
    be = !1,
    Di = Error(g(519));
  function at(l) {
    var e = Error(
      g(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Va(ve(e, l)), Di);
  }
  function zs(l) {
    var e = l.stateNode,
      t = l.type,
      a = l.memoizedProps;
    switch (((e[ql] = l), (e[Wl] = a), t)) {
      case "dialog":
        (k("cancel", e), k("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        k("load", e);
        break;
      case "video":
      case "audio":
        for (t = 0; t < mn.length; t++) k(mn[t], e);
        break;
      case "source":
        k("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (k("error", e), k("load", e));
        break;
      case "details":
        k("toggle", e);
        break;
      case "input":
        (k("invalid", e),
          Hf(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        k("invalid", e);
        break;
      case "textarea":
        (k("invalid", e), Bf(e, a.value, a.defaultValue, a.children));
    }
    ((t = a.children),
      (typeof t != "string" && typeof t != "number" && typeof t != "bigint") ||
      e.textContent === "" + t ||
      a.suppressHydrationWarning === !0 ||
      Qo(e.textContent, t)
        ? (a.popover != null && (k("beforetoggle", e), k("toggle", e)),
          a.onScroll != null && k("scroll", e),
          a.onScrollEnd != null && k("scrollend", e),
          a.onClick != null && (e.onclick = Re),
          (e = !0))
        : (e = !1),
      e || at(l, !0));
  }
  function Ns(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          be = !1;
          return;
        case 27:
        case 3:
          be = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function ua(l) {
    if (l !== Bl) return !1;
    if (!P) return (Ns(l), (P = !0), !1);
    var e = l.tag,
      t;
    if (
      ((t = e !== 3 && e !== 27) &&
        ((t = e === 5) &&
          ((t = l.type),
          (t =
            !(t !== "form" && t !== "button") || wc(l.type, l.memoizedProps))),
        (t = !t)),
      t && vl && at(l),
      Ns(l),
      e === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(g(317));
      vl = Wo(l);
    } else if (e === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(g(317));
      vl = Wo(l);
    } else
      e === 27
        ? ((e = vl), yt(l.type) ? ((l = Ic), (Ic = null), (vl = l)) : (vl = e))
        : (vl = Bl ? pe(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ct() {
    ((vl = Bl = null), (P = !1));
  }
  function Mi() {
    var l = tt;
    return (
      l !== null &&
        (le === null ? (le = l) : le.push.apply(le, l), (tt = null)),
      l
    );
  }
  function Va(l) {
    tt === null ? (tt = [l]) : tt.push(l);
  }
  var Oi = o(null),
    Ut = null,
    Ye = null;
  function nt(l, e, t) {
    (A(Oi, e._currentValue), (e._currentValue = t));
  }
  function Ge(l) {
    ((l._currentValue = Oi.current), j(Oi));
  }
  function Ci(l, e, t) {
    for (; l !== null; ) {
      var a = l.alternate;
      if (
        ((l.childLanes & e) !== e
          ? ((l.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        l === t)
      )
        break;
      l = l.return;
    }
  }
  function Ui(l, e, t, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var f = u;
          u = n;
          for (var s = 0; s < e.length; s++)
            if (f.context === e[s]) {
              ((u.lanes |= t),
                (f = u.alternate),
                f !== null && (f.lanes |= t),
                Ci(u.return, t, l),
                a || (i = null));
              break l;
            }
          u = f.next;
        }
      } else if (n.tag === 18) {
        if (((i = n.return), i === null)) throw Error(g(341));
        ((i.lanes |= t),
          (u = i.alternate),
          u !== null && (u.lanes |= t),
          Ci(i, t, l),
          (i = null));
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((n = i.sibling), n !== null)) {
            ((n.return = i.return), (i = n));
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function ia(l, e, t, a) {
    l = null;
    for (var n = e, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(g(387));
        if (((i = i.memoizedProps), i !== null)) {
          var f = n.type;
          ue(n.pendingProps.value, i.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (n === al.current) {
        if (((i = n.alternate), i === null)) throw Error(g(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (l !== null ? l.push(bn) : (l = [bn]));
      }
      n = n.return;
    }
    (l !== null && Ui(e, l, t, a), (e.flags |= 262144));
  }
  function Jn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!ue(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Rt(l) {
    ((Ut = l),
      (Ye = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Yl(l) {
    return js(Ut, l);
  }
  function wn(l, e) {
    return (Ut === null && Rt(l), js(l, e));
  }
  function js(l, e) {
    var t = e._currentValue;
    if (((e = { context: e, memoizedValue: t, next: null }), Ye === null)) {
      if (l === null) throw Error(g(308));
      ((Ye = e),
        (l.dependencies = { lanes: 0, firstContext: e }),
        (l.flags |= 524288));
    } else Ye = Ye.next = e;
    return t;
  }
  var Qm =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (t, a) {
                  l.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                l.forEach(function (t) {
                  return t();
                }));
            };
          },
    Xm = p.unstable_scheduleCallback,
    Zm = p.unstable_NormalPriority,
    Tl = {
      $$typeof: xl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ri() {
    return { controller: new Qm(), data: new Map(), refCount: 0 };
  }
  function Ka(l) {
    (l.refCount--,
      l.refCount === 0 &&
        Xm(Zm, function () {
          l.controller.abort();
        }));
  }
  var Ja = null,
    Hi = 0,
    ca = 0,
    fa = null;
  function Lm(l, e) {
    if (Ja === null) {
      var t = (Ja = []);
      ((Hi = 0),
        (ca = Yc()),
        (fa = {
          status: "pending",
          value: void 0,
          then: function (a) {
            t.push(a);
          },
        }));
    }
    return (Hi++, e.then(Ts, Ts), e);
  }
  function Ts() {
    if (--Hi === 0 && Ja !== null) {
      fa !== null && (fa.status = "fulfilled");
      var l = Ja;
      ((Ja = null), (ca = 0), (fa = null));
      for (var e = 0; e < l.length; e++) (0, l[e])();
    }
  }
  function Vm(l, e) {
    var t = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          t.push(n);
        },
      };
    return (
      l.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var n = 0; n < t.length; n++) (0, t[n])(e);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < t.length; n++)
            (0, t[n])(void 0);
        },
      ),
      a
    );
  }
  var Es = x.S;
  x.S = function (l, e) {
    ((so = te()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Lm(l, e),
      Es !== null && Es(l, e));
  };
  var Ht = o(null);
  function qi() {
    var l = Ht.current;
    return l !== null ? l : ol.pooledCache;
  }
  function kn(l, e) {
    e === null ? A(Ht, Ht.current) : A(Ht, e.pool);
  }
  function As() {
    var l = qi();
    return l === null ? null : { parent: Tl._currentValue, pool: l };
  }
  var sa = Error(g(460)),
    Bi = Error(g(474)),
    Wn = Error(g(542)),
    $n = { then: function () {} };
  function _s(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Ds(l, e, t) {
    switch (
      ((t = l[t]),
      t === void 0 ? l.push(e) : t !== e && (e.then(Re, Re), (e = t)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((l = e.reason), Os(l), l);
      default:
        if (typeof e.status == "string") e.then(Re, Re);
        else {
          if (((l = ol), l !== null && 100 < l.shellSuspendCounter))
            throw Error(g(482));
          ((l = e),
            (l.status = "pending"),
            l.then(
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "fulfilled"), (n.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var n = e;
                  ((n.status = "rejected"), (n.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((l = e.reason), Os(l), l);
        }
        throw ((Bt = e), sa);
    }
  }
  function qt(l) {
    try {
      var e = l._init;
      return e(l._payload);
    } catch (t) {
      throw t !== null && typeof t == "object" && typeof t.then == "function"
        ? ((Bt = t), sa)
        : t;
    }
  }
  var Bt = null;
  function Ms() {
    if (Bt === null) throw Error(g(459));
    var l = Bt;
    return ((Bt = null), l);
  }
  function Os(l) {
    if (l === sa || l === Wn) throw Error(g(483));
  }
  var da = null,
    wa = 0;
  function Fn(l) {
    var e = wa;
    return ((wa += 1), da === null && (da = []), Ds(da, l, e));
  }
  function ka(l, e) {
    ((e = e.props.ref), (l.ref = e !== void 0 ? e : null));
  }
  function In(l, e) {
    throw e.$$typeof === rl
      ? Error(g(525))
      : ((l = Object.prototype.toString.call(e)),
        Error(
          g(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Cs(l) {
    function e(r, d) {
      if (l) {
        var m = r.deletions;
        m === null ? ((r.deletions = [d]), (r.flags |= 16)) : m.push(d);
      }
    }
    function t(r, d) {
      if (!l) return null;
      for (; d !== null; ) (e(r, d), (d = d.sibling));
      return null;
    }
    function a(r) {
      for (var d = new Map(); r !== null; )
        (r.key !== null ? d.set(r.key, r) : d.set(r.index, r), (r = r.sibling));
      return d;
    }
    function n(r, d) {
      return ((r = qe(r, d)), (r.index = 0), (r.sibling = null), r);
    }
    function u(r, d, m) {
      return (
        (r.index = m),
        l
          ? ((m = r.alternate),
            m !== null
              ? ((m = m.index), m < d ? ((r.flags |= 67108866), d) : m)
              : ((r.flags |= 67108866), d))
          : ((r.flags |= 1048576), d)
      );
    }
    function i(r) {
      return (l && r.alternate === null && (r.flags |= 67108866), r);
    }
    function f(r, d, m, S) {
      return d === null || d.tag !== 6
        ? ((d = Ti(m, r.mode, S)), (d.return = r), d)
        : ((d = n(d, m)), (d.return = r), d);
    }
    function s(r, d, m, S) {
      var U = m.type;
      return U === Ol
        ? b(r, d, m.props.children, S, m.key)
        : d !== null &&
            (d.elementType === U ||
              (typeof U == "object" &&
                U !== null &&
                U.$$typeof === Xl &&
                qt(U) === d.type))
          ? ((d = n(d, m.props)), ka(d, m), (d.return = r), d)
          : ((d = Vn(m.type, m.key, m.props, null, r.mode, S)),
            ka(d, m),
            (d.return = r),
            d);
    }
    function h(r, d, m, S) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = Ei(m, r.mode, S)), (d.return = r), d)
        : ((d = n(d, m.children || [])), (d.return = r), d);
    }
    function b(r, d, m, S, U) {
      return d === null || d.tag !== 7
        ? ((d = Ot(m, r.mode, S, U)), (d.return = r), d)
        : ((d = n(d, m)), (d.return = r), d);
    }
    function z(r, d, m) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = Ti("" + d, r.mode, m)), (d.return = r), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ll:
            return (
              (m = Vn(d.type, d.key, d.props, null, r.mode, m)),
              ka(m, d),
              (m.return = r),
              m
            );
          case Ml:
            return ((d = Ei(d, r.mode, m)), (d.return = r), d);
          case Xl:
            return ((d = qt(d)), z(r, d, m));
        }
        if (je(d) || yl(d))
          return ((d = Ot(d, r.mode, m, null)), (d.return = r), d);
        if (typeof d.then == "function") return z(r, Fn(d), m);
        if (d.$$typeof === xl) return z(r, wn(r, d), m);
        In(r, d);
      }
      return null;
    }
    function v(r, d, m, S) {
      var U = d !== null ? d.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return U !== null ? null : f(r, d, "" + m, S);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ll:
            return m.key === U ? s(r, d, m, S) : null;
          case Ml:
            return m.key === U ? h(r, d, m, S) : null;
          case Xl:
            return ((m = qt(m)), v(r, d, m, S));
        }
        if (je(m) || yl(m)) return U !== null ? null : b(r, d, m, S, null);
        if (typeof m.then == "function") return v(r, d, Fn(m), S);
        if (m.$$typeof === xl) return v(r, d, wn(r, m), S);
        In(r, m);
      }
      return null;
    }
    function y(r, d, m, S, U) {
      if (
        (typeof S == "string" && S !== "") ||
        typeof S == "number" ||
        typeof S == "bigint"
      )
        return ((r = r.get(m) || null), f(d, r, "" + S, U));
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case Ll:
            return (
              (r = r.get(S.key === null ? m : S.key) || null),
              s(d, r, S, U)
            );
          case Ml:
            return (
              (r = r.get(S.key === null ? m : S.key) || null),
              h(d, r, S, U)
            );
          case Xl:
            return ((S = qt(S)), y(r, d, m, S, U));
        }
        if (je(S) || yl(S))
          return ((r = r.get(m) || null), b(d, r, S, U, null));
        if (typeof S.then == "function") return y(r, d, m, Fn(S), U);
        if (S.$$typeof === xl) return y(r, d, m, wn(d, S), U);
        In(d, S);
      }
      return null;
    }
    function _(r, d, m, S) {
      for (
        var U = null, ll = null, M = d, V = (d = 0), $ = null;
        M !== null && V < m.length;
        V++
      ) {
        M.index > V ? (($ = M), (M = null)) : ($ = M.sibling);
        var el = v(r, M, m[V], S);
        if (el === null) {
          M === null && (M = $);
          break;
        }
        (l && M && el.alternate === null && e(r, M),
          (d = u(el, d, V)),
          ll === null ? (U = el) : (ll.sibling = el),
          (ll = el),
          (M = $));
      }
      if (V === m.length) return (t(r, M), P && Be(r, V), U);
      if (M === null) {
        for (; V < m.length; V++)
          ((M = z(r, m[V], S)),
            M !== null &&
              ((d = u(M, d, V)),
              ll === null ? (U = M) : (ll.sibling = M),
              (ll = M)));
        return (P && Be(r, V), U);
      }
      for (M = a(M); V < m.length; V++)
        (($ = y(M, r, V, m[V], S)),
          $ !== null &&
            (l && $.alternate !== null && M.delete($.key === null ? V : $.key),
            (d = u($, d, V)),
            ll === null ? (U = $) : (ll.sibling = $),
            (ll = $)));
      return (
        l &&
          M.forEach(function (zt) {
            return e(r, zt);
          }),
        P && Be(r, V),
        U
      );
    }
    function R(r, d, m, S) {
      if (m == null) throw Error(g(151));
      for (
        var U = null, ll = null, M = d, V = (d = 0), $ = null, el = m.next();
        M !== null && !el.done;
        V++, el = m.next()
      ) {
        M.index > V ? (($ = M), (M = null)) : ($ = M.sibling);
        var zt = v(r, M, el.value, S);
        if (zt === null) {
          M === null && (M = $);
          break;
        }
        (l && M && zt.alternate === null && e(r, M),
          (d = u(zt, d, V)),
          ll === null ? (U = zt) : (ll.sibling = zt),
          (ll = zt),
          (M = $));
      }
      if (el.done) return (t(r, M), P && Be(r, V), U);
      if (M === null) {
        for (; !el.done; V++, el = m.next())
          ((el = z(r, el.value, S)),
            el !== null &&
              ((d = u(el, d, V)),
              ll === null ? (U = el) : (ll.sibling = el),
              (ll = el)));
        return (P && Be(r, V), U);
      }
      for (M = a(M); !el.done; V++, el = m.next())
        ((el = y(M, r, V, el.value, S)),
          el !== null &&
            (l &&
              el.alternate !== null &&
              M.delete(el.key === null ? V : el.key),
            (d = u(el, d, V)),
            ll === null ? (U = el) : (ll.sibling = el),
            (ll = el)));
      return (
        l &&
          M.forEach(function (eh) {
            return e(r, eh);
          }),
        P && Be(r, V),
        U
      );
    }
    function sl(r, d, m, S) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Ol &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Ll:
            l: {
              for (var U = m.key; d !== null; ) {
                if (d.key === U) {
                  if (((U = m.type), U === Ol)) {
                    if (d.tag === 7) {
                      (t(r, d.sibling),
                        (S = n(d, m.props.children)),
                        (S.return = r),
                        (r = S));
                      break l;
                    }
                  } else if (
                    d.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === Xl &&
                      qt(U) === d.type)
                  ) {
                    (t(r, d.sibling),
                      (S = n(d, m.props)),
                      ka(S, m),
                      (S.return = r),
                      (r = S));
                    break l;
                  }
                  t(r, d);
                  break;
                } else e(r, d);
                d = d.sibling;
              }
              m.type === Ol
                ? ((S = Ot(m.props.children, r.mode, S, m.key)),
                  (S.return = r),
                  (r = S))
                : ((S = Vn(m.type, m.key, m.props, null, r.mode, S)),
                  ka(S, m),
                  (S.return = r),
                  (r = S));
            }
            return i(r);
          case Ml:
            l: {
              for (U = m.key; d !== null; ) {
                if (d.key === U)
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    (t(r, d.sibling),
                      (S = n(d, m.children || [])),
                      (S.return = r),
                      (r = S));
                    break l;
                  } else {
                    t(r, d);
                    break;
                  }
                else e(r, d);
                d = d.sibling;
              }
              ((S = Ei(m, r.mode, S)), (S.return = r), (r = S));
            }
            return i(r);
          case Xl:
            return ((m = qt(m)), sl(r, d, m, S));
        }
        if (je(m)) return _(r, d, m, S);
        if (yl(m)) {
          if (((U = yl(m)), typeof U != "function")) throw Error(g(150));
          return ((m = U.call(m)), R(r, d, m, S));
        }
        if (typeof m.then == "function") return sl(r, d, Fn(m), S);
        if (m.$$typeof === xl) return sl(r, d, wn(r, m), S);
        In(r, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          d !== null && d.tag === 6
            ? (t(r, d.sibling), (S = n(d, m)), (S.return = r), (r = S))
            : (t(r, d), (S = Ti(m, r.mode, S)), (S.return = r), (r = S)),
          i(r))
        : t(r, d);
    }
    return function (r, d, m, S) {
      try {
        wa = 0;
        var U = sl(r, d, m, S);
        return ((da = null), U);
      } catch (M) {
        if (M === sa || M === Wn) throw M;
        var ll = ie(29, M, null, r.mode);
        return ((ll.lanes = S), (ll.return = r), ll);
      } finally {
      }
    };
  }
  var Yt = Cs(!0),
    Us = Cs(!1),
    ut = !1;
  function Yi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Gi(l, e) {
    ((l = l.updateQueue),
      e.updateQueue === l &&
        (e.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function it(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ct(l, e, t) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (tl & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
        (a.pending = e),
        (e = Ln(l)),
        gs(l, null, t),
        e
      );
    }
    return (Zn(l, a, e, t), Ln(l));
  }
  function Wa(l, e, t) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (t & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= l.pendingLanes), (t |= a), (e.lanes = t), jf(l, t));
    }
  }
  function Qi(l, e) {
    var t = l.updateQueue,
      a = l.alternate;
    if (a !== null && ((a = a.updateQueue), t === a)) {
      var n = null,
        u = null;
      if (((t = t.firstBaseUpdate), t !== null)) {
        do {
          var i = {
            lane: t.lane,
            tag: t.tag,
            payload: t.payload,
            callback: null,
            next: null,
          };
          (u === null ? (n = u = i) : (u = u.next = i), (t = t.next));
        } while (t !== null);
        u === null ? (n = u = e) : (u = u.next = e);
      } else n = u = e;
      ((t = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (l.updateQueue = t));
      return;
    }
    ((l = t.lastBaseUpdate),
      l === null ? (t.firstBaseUpdate = e) : (l.next = e),
      (t.lastBaseUpdate = e));
  }
  var Xi = !1;
  function $a() {
    if (Xi) {
      var l = fa;
      if (l !== null) throw l;
    }
  }
  function Fa(l, e, t, a) {
    Xi = !1;
    var n = l.updateQueue;
    ut = !1;
    var u = n.firstBaseUpdate,
      i = n.lastBaseUpdate,
      f = n.shared.pending;
    if (f !== null) {
      n.shared.pending = null;
      var s = f,
        h = s.next;
      ((s.next = null), i === null ? (u = h) : (i.next = h), (i = s));
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (f = b.lastBaseUpdate),
        f !== i &&
          (f === null ? (b.firstBaseUpdate = h) : (f.next = h),
          (b.lastBaseUpdate = s)));
    }
    if (u !== null) {
      var z = n.baseState;
      ((i = 0), (b = h = s = null), (f = u));
      do {
        var v = f.lane & -536870913,
          y = v !== f.lane;
        if (y ? (W & v) === v : (a & v) === v) {
          (v !== 0 && v === ca && (Xi = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var _ = l,
              R = f;
            v = e;
            var sl = t;
            switch (R.tag) {
              case 1:
                if (((_ = R.payload), typeof _ == "function")) {
                  z = _.call(sl, z, v);
                  break l;
                }
                z = _;
                break l;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = R.payload),
                  (v = typeof _ == "function" ? _.call(sl, z, v) : _),
                  v == null)
                )
                  break l;
                z = H({}, z, v);
                break l;
              case 2:
                ut = !0;
            }
          }
          ((v = f.callback),
            v !== null &&
              ((l.flags |= 64),
              y && (l.flags |= 8192),
              (y = n.callbacks),
              y === null ? (n.callbacks = [v]) : y.push(v)));
        } else
          ((y = {
            lane: v,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            b === null ? ((h = b = y), (s = z)) : (b = b.next = y),
            (i |= v));
        if (((f = f.next), f === null)) {
          if (((f = n.shared.pending), f === null)) break;
          ((y = f),
            (f = y.next),
            (y.next = null),
            (n.lastBaseUpdate = y),
            (n.shared.pending = null));
        }
      } while (!0);
      (b === null && (s = z),
        (n.baseState = s),
        (n.firstBaseUpdate = h),
        (n.lastBaseUpdate = b),
        u === null && (n.shared.lanes = 0),
        (rt |= i),
        (l.lanes = i),
        (l.memoizedState = z));
    }
  }
  function Rs(l, e) {
    if (typeof l != "function") throw Error(g(191, l));
    l.call(e);
  }
  function Hs(l, e) {
    var t = l.callbacks;
    if (t !== null)
      for (l.callbacks = null, l = 0; l < t.length; l++) Rs(t[l], e);
  }
  var oa = o(null),
    Pn = o(0);
  function qs(l, e) {
    ((l = ke), A(Pn, l), A(oa, e), (ke = l | e.baseLanes));
  }
  function Zi() {
    (A(Pn, ke), A(oa, oa.current));
  }
  function Li() {
    ((ke = Pn.current), j(oa), j(Pn));
  }
  var ce = o(null),
    xe = null;
  function ft(l) {
    var e = l.alternate;
    (A(Nl, Nl.current & 1),
      A(ce, l),
      xe === null &&
        (e === null || oa.current !== null || e.memoizedState !== null) &&
        (xe = l));
  }
  function Vi(l) {
    (A(Nl, Nl.current), A(ce, l), xe === null && (xe = l));
  }
  function Bs(l) {
    l.tag === 22
      ? (A(Nl, Nl.current), A(ce, l), xe === null && (xe = l))
      : st();
  }
  function st() {
    (A(Nl, Nl.current), A(ce, ce.current));
  }
  function fe(l) {
    (j(ce), xe === l && (xe = null), j(Nl));
  }
  var Nl = o(0);
  function lu(l) {
    for (var e = l; e !== null; ) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t !== null && ((t = t.dehydrated), t === null || $c(t) || Fc(t)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === l) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === l) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Qe = 0,
    L = null,
    cl = null,
    El = null,
    eu = !1,
    ra = !1,
    Gt = !1,
    tu = 0,
    Ia = 0,
    ma = null,
    Km = 0;
  function pl() {
    throw Error(g(321));
  }
  function Ki(l, e) {
    if (e === null) return !1;
    for (var t = 0; t < e.length && t < l.length; t++)
      if (!ue(l[t], e[t])) return !1;
    return !0;
  }
  function Ji(l, e, t, a, n, u) {
    return (
      (Qe = u),
      (L = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (x.H = l === null || l.memoizedState === null ? pd : cc),
      (Gt = !1),
      (u = t(a, n)),
      (Gt = !1),
      ra && (u = Gs(e, t, a, n)),
      Ys(l),
      u
    );
  }
  function Ys(l) {
    x.H = en;
    var e = cl !== null && cl.next !== null;
    if (((Qe = 0), (El = cl = L = null), (eu = !1), (Ia = 0), (ma = null), e))
      throw Error(g(300));
    l === null ||
      Al ||
      ((l = l.dependencies), l !== null && Jn(l) && (Al = !0));
  }
  function Gs(l, e, t, a) {
    L = l;
    var n = 0;
    do {
      if ((ra && (ma = null), (Ia = 0), (ra = !1), 25 <= n))
        throw Error(g(301));
      if (((n += 1), (El = cl = null), l.updateQueue != null)) {
        var u = l.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((x.H = Sd), (u = e(t, a)));
    } while (ra);
    return u;
  }
  function Jm() {
    var l = x.H,
      e = l.useState()[0];
    return (
      (e = typeof e.then == "function" ? Pa(e) : e),
      (l = l.useState()[0]),
      (cl !== null ? cl.memoizedState : null) !== l && (L.flags |= 1024),
      e
    );
  }
  function wi() {
    var l = tu !== 0;
    return ((tu = 0), l);
  }
  function ki(l, e, t) {
    ((e.updateQueue = l.updateQueue), (e.flags &= -2053), (l.lanes &= ~t));
  }
  function Wi(l) {
    if (eu) {
      for (l = l.memoizedState; l !== null; ) {
        var e = l.queue;
        (e !== null && (e.pending = null), (l = l.next));
      }
      eu = !1;
    }
    ((Qe = 0), (El = cl = L = null), (ra = !1), (Ia = tu = 0), (ma = null));
  }
  function Jl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (El === null ? (L.memoizedState = El = l) : (El = El.next = l), El);
  }
  function jl() {
    if (cl === null) {
      var l = L.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = cl.next;
    var e = El === null ? L.memoizedState : El.next;
    if (e !== null) ((El = e), (cl = l));
    else {
      if (l === null)
        throw L.alternate === null ? Error(g(467)) : Error(g(310));
      ((cl = l),
        (l = {
          memoizedState: cl.memoizedState,
          baseState: cl.baseState,
          baseQueue: cl.baseQueue,
          queue: cl.queue,
          next: null,
        }),
        El === null ? (L.memoizedState = El = l) : (El = El.next = l));
    }
    return El;
  }
  function au() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Pa(l) {
    var e = Ia;
    return (
      (Ia += 1),
      ma === null && (ma = []),
      (l = Ds(ma, l, e)),
      (e = L),
      (El === null ? e.memoizedState : El.next) === null &&
        ((e = e.alternate),
        (x.H = e === null || e.memoizedState === null ? pd : cc)),
      l
    );
  }
  function nu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Pa(l);
      if (l.$$typeof === xl) return Yl(l);
    }
    throw Error(g(438, String(l)));
  }
  function $i(l) {
    var e = null,
      t = L.updateQueue;
    if ((t !== null && (e = t.memoCache), e == null)) {
      var a = L.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      t === null && ((t = au()), (L.updateQueue = t)),
      (t.memoCache = e),
      (t = e.data[e.index]),
      t === void 0)
    )
      for (t = e.data[e.index] = Array(l), a = 0; a < l; a++) t[a] = Y;
    return (e.index++, t);
  }
  function Xe(l, e) {
    return typeof e == "function" ? e(l) : e;
  }
  function uu(l) {
    var e = jl();
    return Fi(e, cl, l);
  }
  function Fi(l, e, t) {
    var a = l.queue;
    if (a === null) throw Error(g(311));
    a.lastRenderedReducer = t;
    var n = l.baseQueue,
      u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        ((n.next = u.next), (u.next = i));
      }
      ((e.baseQueue = n = u), (a.pending = null));
    }
    if (((u = l.baseState), n === null)) l.memoizedState = u;
    else {
      e = n.next;
      var f = (i = null),
        s = null,
        h = e,
        b = !1;
      do {
        var z = h.lane & -536870913;
        if (z !== h.lane ? (W & z) === z : (Qe & z) === z) {
          var v = h.revertLane;
          if (v === 0)
            (s !== null &&
              (s = s.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              z === ca && (b = !0));
          else if ((Qe & v) === v) {
            ((h = h.next), v === ca && (b = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              s === null ? ((f = s = z), (i = u)) : (s = s.next = z),
              (L.lanes |= v),
              (rt |= v));
          ((z = h.action),
            Gt && t(u, z),
            (u = h.hasEagerState ? h.eagerState : t(u, z)));
        } else
          ((v = {
            lane: z,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            s === null ? ((f = s = v), (i = u)) : (s = s.next = v),
            (L.lanes |= z),
            (rt |= z));
        h = h.next;
      } while (h !== null && h !== e);
      if (
        (s === null ? (i = u) : (s.next = f),
        !ue(u, l.memoizedState) && ((Al = !0), b && ((t = fa), t !== null)))
      )
        throw t;
      ((l.memoizedState = u),
        (l.baseState = i),
        (l.baseQueue = s),
        (a.lastRenderedState = u));
    }
    return (n === null && (a.lanes = 0), [l.memoizedState, a.dispatch]);
  }
  function Ii(l) {
    var e = jl(),
      t = e.queue;
    if (t === null) throw Error(g(311));
    t.lastRenderedReducer = l;
    var a = t.dispatch,
      n = t.pending,
      u = e.memoizedState;
    if (n !== null) {
      t.pending = null;
      var i = (n = n.next);
      do ((u = l(u, i.action)), (i = i.next));
      while (i !== n);
      (ue(u, e.memoizedState) || (Al = !0),
        (e.memoizedState = u),
        e.baseQueue === null && (e.baseState = u),
        (t.lastRenderedState = u));
    }
    return [u, a];
  }
  function Qs(l, e, t) {
    var a = L,
      n = jl(),
      u = P;
    if (u) {
      if (t === void 0) throw Error(g(407));
      t = t();
    } else t = e();
    var i = !ue((cl || n).memoizedState, t);
    if (
      (i && ((n.memoizedState = t), (Al = !0)),
      (n = n.queue),
      ec(Ls.bind(null, a, n, l), [l]),
      n.getSnapshot !== e || i || (El !== null && El.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        ha(9, { destroy: void 0 }, Zs.bind(null, a, n, t, e), null),
        ol === null)
      )
        throw Error(g(349));
      u || (Qe & 127) !== 0 || Xs(a, e, t);
    }
    return t;
  }
  function Xs(l, e, t) {
    ((l.flags |= 16384),
      (l = { getSnapshot: e, value: t }),
      (e = L.updateQueue),
      e === null
        ? ((e = au()), (L.updateQueue = e), (e.stores = [l]))
        : ((t = e.stores), t === null ? (e.stores = [l]) : t.push(l)));
  }
  function Zs(l, e, t, a) {
    ((e.value = t), (e.getSnapshot = a), Vs(e) && Ks(l));
  }
  function Ls(l, e, t) {
    return t(function () {
      Vs(e) && Ks(l);
    });
  }
  function Vs(l) {
    var e = l.getSnapshot;
    l = l.value;
    try {
      var t = e();
      return !ue(l, t);
    } catch {
      return !0;
    }
  }
  function Ks(l) {
    var e = Mt(l, 2);
    e !== null && ee(e, l, 2);
  }
  function Pi(l) {
    var e = Jl();
    if (typeof l == "function") {
      var t = l;
      if (((l = t()), Gt)) {
        Ie(!0);
        try {
          t();
        } finally {
          Ie(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = l),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: l,
      }),
      e
    );
  }
  function Js(l, e, t, a) {
    return ((l.baseState = t), Fi(l, cl, typeof a == "function" ? a : Xe));
  }
  function wm(l, e, t, a, n) {
    if (fu(l)) throw Error(g(485));
    if (((l = e.action), l !== null)) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          u.listeners.push(i);
        },
      };
      (x.T !== null ? t(!0) : (u.isTransition = !1),
        a(u),
        (t = e.pending),
        t === null
          ? ((u.next = e.pending = u), ws(e, u))
          : ((u.next = t.next), (e.pending = t.next = u)));
    }
  }
  function ws(l, e) {
    var t = e.action,
      a = e.payload,
      n = l.state;
    if (e.isTransition) {
      var u = x.T,
        i = {};
      x.T = i;
      try {
        var f = t(n, a),
          s = x.S;
        (s !== null && s(i, f), ks(l, e, f));
      } catch (h) {
        lc(l, e, h);
      } finally {
        (u !== null && i.types !== null && (u.types = i.types), (x.T = u));
      }
    } else
      try {
        ((u = t(n, a)), ks(l, e, u));
      } catch (h) {
        lc(l, e, h);
      }
  }
  function ks(l, e, t) {
    t !== null && typeof t == "object" && typeof t.then == "function"
      ? t.then(
          function (a) {
            Ws(l, e, a);
          },
          function (a) {
            return lc(l, e, a);
          },
        )
      : Ws(l, e, t);
  }
  function Ws(l, e, t) {
    ((e.status = "fulfilled"),
      (e.value = t),
      $s(e),
      (l.state = t),
      (e = l.pending),
      e !== null &&
        ((t = e.next),
        t === e ? (l.pending = null) : ((t = t.next), (e.next = t), ws(l, t))));
  }
  function lc(l, e, t) {
    var a = l.pending;
    if (((l.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = t), $s(e), (e = e.next));
      while (e !== a);
    }
    l.action = null;
  }
  function $s(l) {
    l = l.listeners;
    for (var e = 0; e < l.length; e++) (0, l[e])();
  }
  function Fs(l, e) {
    return e;
  }
  function Is(l, e) {
    if (P) {
      var t = ol.formState;
      if (t !== null) {
        l: {
          var a = L;
          if (P) {
            if (vl) {
              e: {
                for (var n = vl, u = be; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break e;
                  }
                  if (((n = pe(n.nextSibling)), n === null)) {
                    n = null;
                    break e;
                  }
                }
                ((u = n.data), (n = u === "F!" || u === "F" ? n : null));
              }
              if (n) {
                ((vl = pe(n.nextSibling)), (a = n.data === "F!"));
                break l;
              }
            }
            at(a);
          }
          a = !1;
        }
        a && (e = t[0]);
      }
    }
    return (
      (t = Jl()),
      (t.memoizedState = t.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fs,
        lastRenderedState: e,
      }),
      (t.queue = a),
      (t = yd.bind(null, L, a)),
      (a.dispatch = t),
      (a = Pi(!1)),
      (u = ic.bind(null, L, !1, a.queue)),
      (a = Jl()),
      (n = { state: e, dispatch: null, action: l, pending: null }),
      (a.queue = n),
      (t = wm.bind(null, L, n, u, t)),
      (n.dispatch = t),
      (a.memoizedState = l),
      [e, t, !1]
    );
  }
  function Ps(l) {
    var e = jl();
    return ld(e, cl, l);
  }
  function ld(l, e, t) {
    if (
      ((e = Fi(l, e, Fs)[0]),
      (l = uu(Xe)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = Pa(e);
      } catch (i) {
        throw i === sa ? Wn : i;
      }
    else a = e;
    e = jl();
    var n = e.queue,
      u = n.dispatch;
    return (
      t !== e.memoizedState &&
        ((L.flags |= 2048),
        ha(9, { destroy: void 0 }, km.bind(null, n, t), null)),
      [a, u, l]
    );
  }
  function km(l, e) {
    l.action = e;
  }
  function ed(l) {
    var e = jl(),
      t = cl;
    if (t !== null) return ld(e, t, l);
    (jl(), (e = e.memoizedState), (t = jl()));
    var a = t.queue.dispatch;
    return ((t.memoizedState = l), [e, a, !1]);
  }
  function ha(l, e, t, a) {
    return (
      (l = { tag: l, create: t, deps: a, inst: e, next: null }),
      (e = L.updateQueue),
      e === null && ((e = au()), (L.updateQueue = e)),
      (t = e.lastEffect),
      t === null
        ? (e.lastEffect = l.next = l)
        : ((a = t.next), (t.next = l), (l.next = a), (e.lastEffect = l)),
      l
    );
  }
  function td() {
    return jl().memoizedState;
  }
  function iu(l, e, t, a) {
    var n = Jl();
    ((L.flags |= l),
      (n.memoizedState = ha(
        1 | e,
        { destroy: void 0 },
        t,
        a === void 0 ? null : a,
      )));
  }
  function cu(l, e, t, a) {
    var n = jl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    cl !== null && a !== null && Ki(a, cl.memoizedState.deps)
      ? (n.memoizedState = ha(e, u, t, a))
      : ((L.flags |= l), (n.memoizedState = ha(1 | e, u, t, a)));
  }
  function ad(l, e) {
    iu(8390656, 8, l, e);
  }
  function ec(l, e) {
    cu(2048, 8, l, e);
  }
  function Wm(l) {
    L.flags |= 4;
    var e = L.updateQueue;
    if (e === null) ((e = au()), (L.updateQueue = e), (e.events = [l]));
    else {
      var t = e.events;
      t === null ? (e.events = [l]) : t.push(l);
    }
  }
  function nd(l) {
    var e = jl().memoizedState;
    return (
      Wm({ ref: e, nextImpl: l }),
      function () {
        if ((tl & 2) !== 0) throw Error(g(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function ud(l, e) {
    return cu(4, 2, l, e);
  }
  function id(l, e) {
    return cu(4, 4, l, e);
  }
  function cd(l, e) {
    if (typeof e == "function") {
      l = l();
      var t = e(l);
      return function () {
        typeof t == "function" ? t() : e(null);
      };
    }
    if (e != null)
      return (
        (l = l()),
        (e.current = l),
        function () {
          e.current = null;
        }
      );
  }
  function fd(l, e, t) {
    ((t = t != null ? t.concat([l]) : null), cu(4, 4, cd.bind(null, e, l), t));
  }
  function tc() {}
  function sd(l, e) {
    var t = jl();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    return e !== null && Ki(e, a[1]) ? a[0] : ((t.memoizedState = [l, e]), l);
  }
  function dd(l, e) {
    var t = jl();
    e = e === void 0 ? null : e;
    var a = t.memoizedState;
    if (e !== null && Ki(e, a[1])) return a[0];
    if (((a = l()), Gt)) {
      Ie(!0);
      try {
        l();
      } finally {
        Ie(!1);
      }
    }
    return ((t.memoizedState = [a, e]), a);
  }
  function ac(l, e, t) {
    return t === void 0 || ((Qe & 1073741824) !== 0 && (W & 261930) === 0)
      ? (l.memoizedState = e)
      : ((l.memoizedState = t), (l = ro()), (L.lanes |= l), (rt |= l), t);
  }
  function od(l, e, t, a) {
    return ue(t, e)
      ? t
      : oa.current !== null
        ? ((l = ac(l, t, a)), ue(l, e) || (Al = !0), l)
        : (Qe & 42) === 0 || ((Qe & 1073741824) !== 0 && (W & 261930) === 0)
          ? ((Al = !0), (l.memoizedState = t))
          : ((l = ro()), (L.lanes |= l), (rt |= l), e);
  }
  function rd(l, e, t, a, n) {
    var u = E.p;
    E.p = u !== 0 && 8 > u ? u : 8;
    var i = x.T,
      f = {};
    ((x.T = f), ic(l, !1, e, t));
    try {
      var s = n(),
        h = x.S;
      if (
        (h !== null && h(f, s),
        s !== null && typeof s == "object" && typeof s.then == "function")
      ) {
        var b = Vm(s, a);
        ln(l, e, b, oe(l));
      } else ln(l, e, a, oe(l));
    } catch (z) {
      ln(l, e, { then: function () {}, status: "rejected", reason: z }, oe());
    } finally {
      ((E.p = u),
        i !== null && f.types !== null && (i.types = f.types),
        (x.T = i));
    }
  }
  function $m() {}
  function nc(l, e, t, a) {
    if (l.tag !== 5) throw Error(g(476));
    var n = md(l).queue;
    rd(
      l,
      n,
      e,
      q,
      t === null
        ? $m
        : function () {
            return (hd(l), t(a));
          },
    );
  }
  function md(l) {
    var e = l.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xe,
        lastRenderedState: q,
      },
      next: null,
    };
    var t = {};
    return (
      (e.next = {
        memoizedState: t,
        baseState: t,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Xe,
          lastRenderedState: t,
        },
        next: null,
      }),
      (l.memoizedState = e),
      (l = l.alternate),
      l !== null && (l.memoizedState = e),
      e
    );
  }
  function hd(l) {
    var e = md(l);
    (e.next === null && (e = l.alternate.memoizedState),
      ln(l, e.next.queue, {}, oe()));
  }
  function uc() {
    return Yl(bn);
  }
  function vd() {
    return jl().memoizedState;
  }
  function gd() {
    return jl().memoizedState;
  }
  function Fm(l) {
    for (var e = l.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var t = oe();
          l = it(t);
          var a = ct(e, l, t);
          (a !== null && (ee(a, e, t), Wa(a, e, t)),
            (e = { cache: Ri() }),
            (l.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Im(l, e, t) {
    var a = oe();
    ((t = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      fu(l)
        ? bd(e, t)
        : ((t = Ni(l, e, t, a)), t !== null && (ee(t, l, a), xd(t, e, a))));
  }
  function yd(l, e, t) {
    var a = oe();
    ln(l, e, t, a);
  }
  function ln(l, e, t, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (fu(l)) bd(e, n);
    else {
      var u = l.alternate;
      if (
        l.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = e.lastRenderedReducer), u !== null)
      )
        try {
          var i = e.lastRenderedState,
            f = u(i, t);
          if (((n.hasEagerState = !0), (n.eagerState = f), ue(f, i)))
            return (Zn(l, e, n, 0), ol === null && Xn(), !1);
        } catch {
        } finally {
        }
      if (((t = Ni(l, e, n, a)), t !== null))
        return (ee(t, l, a), xd(t, e, a), !0);
    }
    return !1;
  }
  function ic(l, e, t, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: Yc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      fu(l))
    ) {
      if (e) throw Error(g(479));
    } else ((e = Ni(l, t, a, 2)), e !== null && ee(e, l, 2));
  }
  function fu(l) {
    var e = l.alternate;
    return l === L || (e !== null && e === L);
  }
  function bd(l, e) {
    ra = eu = !0;
    var t = l.pending;
    (t === null ? (e.next = e) : ((e.next = t.next), (t.next = e)),
      (l.pending = e));
  }
  function xd(l, e, t) {
    if ((t & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= l.pendingLanes), (t |= a), (e.lanes = t), jf(l, t));
    }
  }
  var en = {
    readContext: Yl,
    use: nu,
    useCallback: pl,
    useContext: pl,
    useEffect: pl,
    useImperativeHandle: pl,
    useLayoutEffect: pl,
    useInsertionEffect: pl,
    useMemo: pl,
    useReducer: pl,
    useRef: pl,
    useState: pl,
    useDebugValue: pl,
    useDeferredValue: pl,
    useTransition: pl,
    useSyncExternalStore: pl,
    useId: pl,
    useHostTransitionStatus: pl,
    useFormState: pl,
    useActionState: pl,
    useOptimistic: pl,
    useMemoCache: pl,
    useCacheRefresh: pl,
  };
  en.useEffectEvent = pl;
  var pd = {
      readContext: Yl,
      use: nu,
      useCallback: function (l, e) {
        return ((Jl().memoizedState = [l, e === void 0 ? null : e]), l);
      },
      useContext: Yl,
      useEffect: ad,
      useImperativeHandle: function (l, e, t) {
        ((t = t != null ? t.concat([l]) : null),
          iu(4194308, 4, cd.bind(null, e, l), t));
      },
      useLayoutEffect: function (l, e) {
        return iu(4194308, 4, l, e);
      },
      useInsertionEffect: function (l, e) {
        iu(4, 2, l, e);
      },
      useMemo: function (l, e) {
        var t = Jl();
        e = e === void 0 ? null : e;
        var a = l();
        if (Gt) {
          Ie(!0);
          try {
            l();
          } finally {
            Ie(!1);
          }
        }
        return ((t.memoizedState = [a, e]), a);
      },
      useReducer: function (l, e, t) {
        var a = Jl();
        if (t !== void 0) {
          var n = t(e);
          if (Gt) {
            Ie(!0);
            try {
              t(e);
            } finally {
              Ie(!1);
            }
          }
        } else n = e;
        return (
          (a.memoizedState = a.baseState = n),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: n,
          }),
          (a.queue = l),
          (l = l.dispatch = Im.bind(null, L, l)),
          [a.memoizedState, l]
        );
      },
      useRef: function (l) {
        var e = Jl();
        return ((l = { current: l }), (e.memoizedState = l));
      },
      useState: function (l) {
        l = Pi(l);
        var e = l.queue,
          t = yd.bind(null, L, e);
        return ((e.dispatch = t), [l.memoizedState, t]);
      },
      useDebugValue: tc,
      useDeferredValue: function (l, e) {
        var t = Jl();
        return ac(t, l, e);
      },
      useTransition: function () {
        var l = Pi(!1);
        return (
          (l = rd.bind(null, L, l.queue, !0, !1)),
          (Jl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, e, t) {
        var a = L,
          n = Jl();
        if (P) {
          if (t === void 0) throw Error(g(407));
          t = t();
        } else {
          if (((t = e()), ol === null)) throw Error(g(349));
          (W & 127) !== 0 || Xs(a, e, t);
        }
        n.memoizedState = t;
        var u = { value: t, getSnapshot: e };
        return (
          (n.queue = u),
          ad(Ls.bind(null, a, u, l), [l]),
          (a.flags |= 2048),
          ha(9, { destroy: void 0 }, Zs.bind(null, a, u, t, e), null),
          t
        );
      },
      useId: function () {
        var l = Jl(),
          e = ol.identifierPrefix;
        if (P) {
          var t = De,
            a = _e;
          ((t = (a & ~(1 << (32 - ne(a) - 1))).toString(32) + t),
            (e = "_" + e + "R_" + t),
            (t = tu++),
            0 < t && (e += "H" + t.toString(32)),
            (e += "_"));
        } else ((t = Km++), (e = "_" + e + "r_" + t.toString(32) + "_"));
        return (l.memoizedState = e);
      },
      useHostTransitionStatus: uc,
      useFormState: Is,
      useActionState: Is,
      useOptimistic: function (l) {
        var e = Jl();
        e.memoizedState = e.baseState = l;
        var t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = t),
          (e = ic.bind(null, L, !0, t)),
          (t.dispatch = e),
          [l, e]
        );
      },
      useMemoCache: $i,
      useCacheRefresh: function () {
        return (Jl().memoizedState = Fm.bind(null, L));
      },
      useEffectEvent: function (l) {
        var e = Jl(),
          t = { impl: l };
        return (
          (e.memoizedState = t),
          function () {
            if ((tl & 2) !== 0) throw Error(g(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      },
    },
    cc = {
      readContext: Yl,
      use: nu,
      useCallback: sd,
      useContext: Yl,
      useEffect: ec,
      useImperativeHandle: fd,
      useInsertionEffect: ud,
      useLayoutEffect: id,
      useMemo: dd,
      useReducer: uu,
      useRef: td,
      useState: function () {
        return uu(Xe);
      },
      useDebugValue: tc,
      useDeferredValue: function (l, e) {
        var t = jl();
        return od(t, cl.memoizedState, l, e);
      },
      useTransition: function () {
        var l = uu(Xe)[0],
          e = jl().memoizedState;
        return [typeof l == "boolean" ? l : Pa(l), e];
      },
      useSyncExternalStore: Qs,
      useId: vd,
      useHostTransitionStatus: uc,
      useFormState: Ps,
      useActionState: Ps,
      useOptimistic: function (l, e) {
        var t = jl();
        return Js(t, cl, l, e);
      },
      useMemoCache: $i,
      useCacheRefresh: gd,
    };
  cc.useEffectEvent = nd;
  var Sd = {
    readContext: Yl,
    use: nu,
    useCallback: sd,
    useContext: Yl,
    useEffect: ec,
    useImperativeHandle: fd,
    useInsertionEffect: ud,
    useLayoutEffect: id,
    useMemo: dd,
    useReducer: Ii,
    useRef: td,
    useState: function () {
      return Ii(Xe);
    },
    useDebugValue: tc,
    useDeferredValue: function (l, e) {
      var t = jl();
      return cl === null ? ac(t, l, e) : od(t, cl.memoizedState, l, e);
    },
    useTransition: function () {
      var l = Ii(Xe)[0],
        e = jl().memoizedState;
      return [typeof l == "boolean" ? l : Pa(l), e];
    },
    useSyncExternalStore: Qs,
    useId: vd,
    useHostTransitionStatus: uc,
    useFormState: ed,
    useActionState: ed,
    useOptimistic: function (l, e) {
      var t = jl();
      return cl !== null
        ? Js(t, cl, l, e)
        : ((t.baseState = l), [l, t.queue.dispatch]);
    },
    useMemoCache: $i,
    useCacheRefresh: gd,
  };
  Sd.useEffectEvent = nd;
  function fc(l, e, t, a) {
    ((e = l.memoizedState),
      (t = t(a, e)),
      (t = t == null ? e : H({}, e, t)),
      (l.memoizedState = t),
      l.lanes === 0 && (l.updateQueue.baseState = t));
  }
  var sc = {
    enqueueSetState: function (l, e, t) {
      l = l._reactInternals;
      var a = oe(),
        n = it(a);
      ((n.payload = e),
        t != null && (n.callback = t),
        (e = ct(l, n, a)),
        e !== null && (ee(e, l, a), Wa(e, l, a)));
    },
    enqueueReplaceState: function (l, e, t) {
      l = l._reactInternals;
      var a = oe(),
        n = it(a);
      ((n.tag = 1),
        (n.payload = e),
        t != null && (n.callback = t),
        (e = ct(l, n, a)),
        e !== null && (ee(e, l, a), Wa(e, l, a)));
    },
    enqueueForceUpdate: function (l, e) {
      l = l._reactInternals;
      var t = oe(),
        a = it(t);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = ct(l, a, t)),
        e !== null && (ee(e, l, t), Wa(e, l, t)));
    },
  };
  function zd(l, e, t, a, n, u, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(a, u, i)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Xa(t, a) || !Xa(n, u)
          : !0
    );
  }
  function Nd(l, e, t, a) {
    ((l = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(t, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(t, a),
      e.state !== l && sc.enqueueReplaceState(e, e.state, null));
  }
  function Qt(l, e) {
    var t = e;
    if ("ref" in e) {
      t = {};
      for (var a in e) a !== "ref" && (t[a] = e[a]);
    }
    if ((l = l.defaultProps)) {
      t === e && (t = H({}, t));
      for (var n in l) t[n] === void 0 && (t[n] = l[n]);
    }
    return t;
  }
  function jd(l) {
    Qn(l);
  }
  function Td(l) {
    console.error(l);
  }
  function Ed(l) {
    Qn(l);
  }
  function su(l, e) {
    try {
      var t = l.onUncaughtError;
      t(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ad(l, e, t) {
    try {
      var a = l.onCaughtError;
      a(t.value, {
        componentStack: t.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function dc(l, e, t) {
    return (
      (t = it(t)),
      (t.tag = 3),
      (t.payload = { element: null }),
      (t.callback = function () {
        su(l, e);
      }),
      t
    );
  }
  function _d(l) {
    return ((l = it(l)), (l.tag = 3), l);
  }
  function Dd(l, e, t, a) {
    var n = t.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      ((l.payload = function () {
        return n(u);
      }),
        (l.callback = function () {
          Ad(e, t, a);
        }));
    }
    var i = t.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (Ad(e, t, a),
          typeof n != "function" &&
            (mt === null ? (mt = new Set([this])) : mt.add(this)));
        var f = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function Pm(l, e, t, a, n) {
    if (
      ((t.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = t.alternate),
        e !== null && ia(e, t, n, !0),
        (t = ce.current),
        t !== null)
      ) {
        switch (t.tag) {
          case 31:
          case 13:
            return (
              xe === null ? Su() : t.alternate === null && Sl === 0 && (Sl = 3),
              (t.flags &= -257),
              (t.flags |= 65536),
              (t.lanes = n),
              a === $n
                ? (t.flags |= 16384)
                : ((e = t.updateQueue),
                  e === null ? (t.updateQueue = new Set([a])) : e.add(a),
                  Hc(l, a, n)),
              !1
            );
          case 22:
            return (
              (t.flags |= 65536),
              a === $n
                ? (t.flags |= 16384)
                : ((e = t.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (t.updateQueue = e))
                    : ((t = e.retryQueue),
                      t === null ? (e.retryQueue = new Set([a])) : t.add(a)),
                  Hc(l, a, n)),
              !1
            );
        }
        throw Error(g(435, t.tag));
      }
      return (Hc(l, a, n), Su(), !1);
    }
    if (P)
      return (
        (e = ce.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = n),
            a !== Di && ((l = Error(g(422), { cause: a })), Va(ve(l, t))))
          : (a !== Di && ((e = Error(g(423), { cause: a })), Va(ve(e, t))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (n &= -n),
            (l.lanes |= n),
            (a = ve(a, t)),
            (n = dc(l.stateNode, a, n)),
            Qi(l, n),
            Sl !== 4 && (Sl = 2)),
        !1
      );
    var u = Error(g(520), { cause: a });
    if (
      ((u = ve(u, t)),
      dn === null ? (dn = [u]) : dn.push(u),
      Sl !== 4 && (Sl = 2),
      e === null)
    )
      return !0;
    ((a = ve(a, t)), (t = e));
    do {
      switch (t.tag) {
        case 3:
          return (
            (t.flags |= 65536),
            (l = n & -n),
            (t.lanes |= l),
            (l = dc(t.stateNode, a, l)),
            Qi(t, l),
            !1
          );
        case 1:
          if (
            ((e = t.type),
            (u = t.stateNode),
            (t.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (mt === null || !mt.has(u)))))
          )
            return (
              (t.flags |= 65536),
              (n &= -n),
              (t.lanes |= n),
              (n = _d(n)),
              Dd(n, l, t, a),
              Qi(t, n),
              !1
            );
      }
      t = t.return;
    } while (t !== null);
    return !1;
  }
  var oc = Error(g(461)),
    Al = !1;
  function Gl(l, e, t, a) {
    e.child = l === null ? Us(e, null, t, a) : Yt(e, l.child, t, a);
  }
  function Md(l, e, t, a, n) {
    t = t.render;
    var u = e.ref;
    if ("ref" in a) {
      var i = {};
      for (var f in a) f !== "ref" && (i[f] = a[f]);
    } else i = a;
    return (
      Rt(e),
      (a = Ji(l, e, t, i, u, n)),
      (f = wi()),
      l !== null && !Al
        ? (ki(l, e, n), Ze(l, e, n))
        : (P && f && Ai(e), (e.flags |= 1), Gl(l, e, a, n), e.child)
    );
  }
  function Od(l, e, t, a, n) {
    if (l === null) {
      var u = t.type;
      return typeof u == "function" &&
        !ji(u) &&
        u.defaultProps === void 0 &&
        t.compare === null
        ? ((e.tag = 15), (e.type = u), Cd(l, e, u, a, n))
        : ((l = Vn(t.type, null, a, e, e.mode, n)),
          (l.ref = e.ref),
          (l.return = e),
          (e.child = l));
    }
    if (((u = l.child), !xc(l, n))) {
      var i = u.memoizedProps;
      if (
        ((t = t.compare), (t = t !== null ? t : Xa), t(i, a) && l.ref === e.ref)
      )
        return Ze(l, e, n);
    }
    return (
      (e.flags |= 1),
      (l = qe(u, a)),
      (l.ref = e.ref),
      (l.return = e),
      (e.child = l)
    );
  }
  function Cd(l, e, t, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Xa(u, a) && l.ref === e.ref)
        if (((Al = !1), (e.pendingProps = a = u), xc(l, n)))
          (l.flags & 131072) !== 0 && (Al = !0);
        else return ((e.lanes = l.lanes), Ze(l, e, n));
    }
    return rc(l, e, t, a, n);
  }
  function Ud(l, e, t, a) {
    var n = a.children,
      u = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | t : t), l !== null)) {
          for (a = e.child = l.child, n = 0; a !== null; )
            ((n = n | a.lanes | a.childLanes), (a = a.sibling));
          a = n & ~u;
        } else ((a = 0), (e.child = null));
        return Rd(l, e, u, t, a);
      }
      if ((t & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && kn(e, u !== null ? u.cachePool : null),
          u !== null ? qs(e, u) : Zi(),
          Bs(e));
      else
        return (
          (a = e.lanes = 536870912),
          Rd(l, e, u !== null ? u.baseLanes | t : t, t, a)
        );
    } else
      u !== null
        ? (kn(e, u.cachePool), qs(e, u), st(), (e.memoizedState = null))
        : (l !== null && kn(e, null), Zi(), st());
    return (Gl(l, e, n, t), e.child);
  }
  function tn(l, e) {
    return (
      (l !== null && l.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Rd(l, e, t, a, n) {
    var u = qi();
    return (
      (u = u === null ? null : { parent: Tl._currentValue, pool: u }),
      (e.memoizedState = { baseLanes: t, cachePool: u }),
      l !== null && kn(e, null),
      Zi(),
      Bs(e),
      l !== null && ia(l, e, a, !0),
      (e.childLanes = n),
      null
    );
  }
  function du(l, e) {
    return (
      (e = ru({ mode: e.mode, children: e.children }, l.mode)),
      (e.ref = l.ref),
      (l.child = e),
      (e.return = l),
      e
    );
  }
  function Hd(l, e, t) {
    return (
      Yt(e, l.child, null, t),
      (l = du(e, e.pendingProps)),
      (l.flags |= 2),
      fe(e),
      (e.memoizedState = null),
      l
    );
  }
  function l0(l, e, t) {
    var a = e.pendingProps,
      n = (e.flags & 128) !== 0;
    if (((e.flags &= -129), l === null)) {
      if (P) {
        if (a.mode === "hidden")
          return ((l = du(e, a)), (e.lanes = 536870912), tn(null, l));
        if (
          (Vi(e),
          (l = vl)
            ? ((l = ko(l, be)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((e.memoizedState = {
                  dehydrated: l,
                  treeContext: et !== null ? { id: _e, overflow: De } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = bs(l)),
                (t.return = e),
                (e.child = t),
                (Bl = e),
                (vl = null)))
            : (l = null),
          l === null)
        )
          throw at(e);
        return ((e.lanes = 536870912), null);
      }
      return du(e, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if ((Vi(e), n))
        if (e.flags & 256) ((e.flags &= -257), (e = Hd(l, e, t)));
        else if (e.memoizedState !== null)
          ((e.child = l.child), (e.flags |= 128), (e = null));
        else throw Error(g(558));
      else if (
        (Al || ia(l, e, t, !1), (n = (t & l.childLanes) !== 0), Al || n)
      ) {
        if (
          ((a = ol),
          a !== null && ((i = Tf(a, t)), i !== 0 && i !== u.retryLane))
        )
          throw ((u.retryLane = i), Mt(l, i), ee(a, l, i), oc);
        (Su(), (e = Hd(l, e, t)));
      } else
        ((l = u.treeContext),
          (vl = pe(i.nextSibling)),
          (Bl = e),
          (P = !0),
          (tt = null),
          (be = !1),
          l !== null && Ss(e, l),
          (e = du(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (l = qe(l.child, { mode: a.mode, children: a.children })),
      (l.ref = e.ref),
      (e.child = l),
      (l.return = e),
      l
    );
  }
  function ou(l, e) {
    var t = e.ref;
    if (t === null) l !== null && l.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof t != "function" && typeof t != "object") throw Error(g(284));
      (l === null || l.ref !== t) && (e.flags |= 4194816);
    }
  }
  function rc(l, e, t, a, n) {
    return (
      Rt(e),
      (t = Ji(l, e, t, a, void 0, n)),
      (a = wi()),
      l !== null && !Al
        ? (ki(l, e, n), Ze(l, e, n))
        : (P && a && Ai(e), (e.flags |= 1), Gl(l, e, t, n), e.child)
    );
  }
  function qd(l, e, t, a, n, u) {
    return (
      Rt(e),
      (e.updateQueue = null),
      (t = Gs(e, a, t, n)),
      Ys(l),
      (a = wi()),
      l !== null && !Al
        ? (ki(l, e, u), Ze(l, e, u))
        : (P && a && Ai(e), (e.flags |= 1), Gl(l, e, t, u), e.child)
    );
  }
  function Bd(l, e, t, a, n) {
    if ((Rt(e), e.stateNode === null)) {
      var u = ta,
        i = t.contextType;
      (typeof i == "object" && i !== null && (u = Yl(i)),
        (u = new t(a, u)),
        (e.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = sc),
        (e.stateNode = u),
        (u._reactInternals = e),
        (u = e.stateNode),
        (u.props = a),
        (u.state = e.memoizedState),
        (u.refs = {}),
        Yi(e),
        (i = t.contextType),
        (u.context = typeof i == "object" && i !== null ? Yl(i) : ta),
        (u.state = e.memoizedState),
        (i = t.getDerivedStateFromProps),
        typeof i == "function" && (fc(e, t, i, a), (u.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((i = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          i !== u.state && sc.enqueueReplaceState(u, u.state, null),
          Fa(e, a, u, n),
          $a(),
          (u.state = e.memoizedState)),
        typeof u.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (l === null) {
      u = e.stateNode;
      var f = e.memoizedProps,
        s = Qt(t, f);
      u.props = s;
      var h = u.context,
        b = t.contextType;
      ((i = ta), typeof b == "object" && b !== null && (i = Yl(b)));
      var z = t.getDerivedStateFromProps;
      ((b =
        typeof z == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (f = e.pendingProps !== f),
        b ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((f || h !== i) && Nd(e, u, a, i)),
        (ut = !1));
      var v = e.memoizedState;
      ((u.state = v),
        Fa(e, a, u, n),
        $a(),
        (h = e.memoizedState),
        f || v !== h || ut
          ? (typeof z == "function" && (fc(e, t, z, a), (h = e.memoizedState)),
            (s = ut || zd(e, t, s, a, v, h, i))
              ? (b ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = h)),
            (u.props = a),
            (u.state = h),
            (u.context = i),
            (a = s))
          : (typeof u.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((u = e.stateNode),
        Gi(l, e),
        (i = e.memoizedProps),
        (b = Qt(t, i)),
        (u.props = b),
        (z = e.pendingProps),
        (v = u.context),
        (h = t.contextType),
        (s = ta),
        typeof h == "object" && h !== null && (s = Yl(h)),
        (f = t.getDerivedStateFromProps),
        (h =
          typeof f == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((i !== z || v !== s) && Nd(e, u, a, s)),
        (ut = !1),
        (v = e.memoizedState),
        (u.state = v),
        Fa(e, a, u, n),
        $a());
      var y = e.memoizedState;
      i !== z ||
      v !== y ||
      ut ||
      (l !== null && l.dependencies !== null && Jn(l.dependencies))
        ? (typeof f == "function" && (fc(e, t, f, a), (y = e.memoizedState)),
          (b =
            ut ||
            zd(e, t, b, a, v, y, s) ||
            (l !== null && l.dependencies !== null && Jn(l.dependencies)))
            ? (h ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(a, y, s),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(a, y, s)),
              typeof u.componentDidUpdate == "function" && (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (e.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && v === l.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = y)),
          (u.props = a),
          (u.state = y),
          (u.context = s),
          (a = b))
        : (typeof u.componentDidUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (e.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && v === l.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (u = a),
      ou(l, e),
      (a = (e.flags & 128) !== 0),
      u || a
        ? ((u = e.stateNode),
          (t =
            a && typeof t.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (e.flags |= 1),
          l !== null && a
            ? ((e.child = Yt(e, l.child, null, n)),
              (e.child = Yt(e, null, t, n)))
            : Gl(l, e, t, n),
          (e.memoizedState = u.state),
          (l = e.child))
        : (l = Ze(l, e, n)),
      l
    );
  }
  function Yd(l, e, t, a) {
    return (Ct(), (e.flags |= 256), Gl(l, e, t, a), e.child);
  }
  var mc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function hc(l) {
    return { baseLanes: l, cachePool: As() };
  }
  function vc(l, e, t) {
    return ((l = l !== null ? l.childLanes & ~t : 0), e && (l |= de), l);
  }
  function Gd(l, e, t) {
    var a = e.pendingProps,
      n = !1,
      u = (e.flags & 128) !== 0,
      i;
    if (
      ((i = u) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (Nl.current & 2) !== 0),
      i && ((n = !0), (e.flags &= -129)),
      (i = (e.flags & 32) !== 0),
      (e.flags &= -33),
      l === null)
    ) {
      if (P) {
        if (
          (n ? ft(e) : st(),
          (l = vl)
            ? ((l = ko(l, be)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((e.memoizedState = {
                  dehydrated: l,
                  treeContext: et !== null ? { id: _e, overflow: De } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (t = bs(l)),
                (t.return = e),
                (e.child = t),
                (Bl = e),
                (vl = null)))
            : (l = null),
          l === null)
        )
          throw at(e);
        return (Fc(l) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var f = a.children;
      return (
        (a = a.fallback),
        n
          ? (st(),
            (n = e.mode),
            (f = ru({ mode: "hidden", children: f }, n)),
            (a = Ot(a, n, t, null)),
            (f.return = e),
            (a.return = e),
            (f.sibling = a),
            (e.child = f),
            (a = e.child),
            (a.memoizedState = hc(t)),
            (a.childLanes = vc(l, i, t)),
            (e.memoizedState = mc),
            tn(null, a))
          : (ft(e), gc(e, f))
      );
    }
    var s = l.memoizedState;
    if (s !== null && ((f = s.dehydrated), f !== null)) {
      if (u)
        e.flags & 256
          ? (ft(e), (e.flags &= -257), (e = yc(l, e, t)))
          : e.memoizedState !== null
            ? (st(), (e.child = l.child), (e.flags |= 128), (e = null))
            : (st(),
              (f = a.fallback),
              (n = e.mode),
              (a = ru({ mode: "visible", children: a.children }, n)),
              (f = Ot(f, n, t, null)),
              (f.flags |= 2),
              (a.return = e),
              (f.return = e),
              (a.sibling = f),
              (e.child = a),
              Yt(e, l.child, null, t),
              (a = e.child),
              (a.memoizedState = hc(t)),
              (a.childLanes = vc(l, i, t)),
              (e.memoizedState = mc),
              (e = tn(null, a)));
      else if ((ft(e), Fc(f))) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var h = i.dgst;
        ((i = h),
          (a = Error(g(419))),
          (a.stack = ""),
          (a.digest = i),
          Va({ value: a, source: null, stack: null }),
          (e = yc(l, e, t)));
      } else if (
        (Al || ia(l, e, t, !1), (i = (t & l.childLanes) !== 0), Al || i)
      ) {
        if (
          ((i = ol),
          i !== null && ((a = Tf(i, t)), a !== 0 && a !== s.retryLane))
        )
          throw ((s.retryLane = a), Mt(l, a), ee(i, l, a), oc);
        ($c(f) || Su(), (e = yc(l, e, t)));
      } else
        $c(f)
          ? ((e.flags |= 192), (e.child = l.child), (e = null))
          : ((l = s.treeContext),
            (vl = pe(f.nextSibling)),
            (Bl = e),
            (P = !0),
            (tt = null),
            (be = !1),
            l !== null && Ss(e, l),
            (e = gc(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return n
      ? (st(),
        (f = a.fallback),
        (n = e.mode),
        (s = l.child),
        (h = s.sibling),
        (a = qe(s, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = s.subtreeFlags & 65011712),
        h !== null ? (f = qe(h, f)) : ((f = Ot(f, n, t, null)), (f.flags |= 2)),
        (f.return = e),
        (a.return = e),
        (a.sibling = f),
        (e.child = a),
        tn(null, a),
        (a = e.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = hc(t))
          : ((n = f.cachePool),
            n !== null
              ? ((s = Tl._currentValue),
                (n = n.parent !== s ? { parent: s, pool: s } : n))
              : (n = As()),
            (f = { baseLanes: f.baseLanes | t, cachePool: n })),
        (a.memoizedState = f),
        (a.childLanes = vc(l, i, t)),
        (e.memoizedState = mc),
        tn(l.child, a))
      : (ft(e),
        (t = l.child),
        (l = t.sibling),
        (t = qe(t, { mode: "visible", children: a.children })),
        (t.return = e),
        (t.sibling = null),
        l !== null &&
          ((i = e.deletions),
          i === null ? ((e.deletions = [l]), (e.flags |= 16)) : i.push(l)),
        (e.child = t),
        (e.memoizedState = null),
        t);
  }
  function gc(l, e) {
    return (
      (e = ru({ mode: "visible", children: e }, l.mode)),
      (e.return = l),
      (l.child = e)
    );
  }
  function ru(l, e) {
    return ((l = ie(22, l, null, e)), (l.lanes = 0), l);
  }
  function yc(l, e, t) {
    return (
      Yt(e, l.child, null, t),
      (l = gc(e, e.pendingProps.children)),
      (l.flags |= 2),
      (e.memoizedState = null),
      l
    );
  }
  function Qd(l, e, t) {
    l.lanes |= e;
    var a = l.alternate;
    (a !== null && (a.lanes |= e), Ci(l.return, e, t));
  }
  function bc(l, e, t, a, n, u) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: t,
          tailMode: n,
          treeForkCount: u,
        })
      : ((i.isBackwards = e),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = t),
        (i.tailMode = n),
        (i.treeForkCount = u));
  }
  function Xd(l, e, t) {
    var a = e.pendingProps,
      n = a.revealOrder,
      u = a.tail;
    a = a.children;
    var i = Nl.current,
      f = (i & 2) !== 0;
    if (
      (f ? ((i = (i & 1) | 2), (e.flags |= 128)) : (i &= 1),
      A(Nl, i),
      Gl(l, e, a, t),
      (a = P ? La : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = e.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Qd(l, t, e);
        else if (l.tag === 19) Qd(l, t, e);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === e) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (n) {
      case "forwards":
        for (t = e.child, n = null; t !== null; )
          ((l = t.alternate),
            l !== null && lu(l) === null && (n = t),
            (t = t.sibling));
        ((t = n),
          t === null
            ? ((n = e.child), (e.child = null))
            : ((n = t.sibling), (t.sibling = null)),
          bc(e, !1, n, t, u, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (t = null, n = e.child, e.child = null; n !== null; ) {
          if (((l = n.alternate), l !== null && lu(l) === null)) {
            e.child = n;
            break;
          }
          ((l = n.sibling), (n.sibling = t), (t = n), (n = l));
        }
        bc(e, !0, t, null, u, a);
        break;
      case "together":
        bc(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Ze(l, e, t) {
    if (
      (l !== null && (e.dependencies = l.dependencies),
      (rt |= e.lanes),
      (t & e.childLanes) === 0)
    )
      if (l !== null) {
        if ((ia(l, e, t, !1), (t & e.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && e.child !== l.child) throw Error(g(153));
    if (e.child !== null) {
      for (
        l = e.child, t = qe(l, l.pendingProps), e.child = t, t.return = e;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (t = t.sibling = qe(l, l.pendingProps)),
          (t.return = e));
      t.sibling = null;
    }
    return e.child;
  }
  function xc(l, e) {
    return (l.lanes & e) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Jn(l)));
  }
  function e0(l, e, t) {
    switch (e.tag) {
      case 3:
        (Kl(e, e.stateNode.containerInfo),
          nt(e, Tl, l.memoizedState.cache),
          Ct());
        break;
      case 27:
      case 5:
        _a(e);
        break;
      case 4:
        Kl(e, e.stateNode.containerInfo);
        break;
      case 10:
        nt(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Vi(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ft(e), (e.flags |= 128), null)
            : (t & e.child.childLanes) !== 0
              ? Gd(l, e, t)
              : (ft(e), (l = Ze(l, e, t)), l !== null ? l.sibling : null);
        ft(e);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (
          ((a = (t & e.childLanes) !== 0),
          a || (ia(l, e, t, !1), (a = (t & e.childLanes) !== 0)),
          n)
        ) {
          if (a) return Xd(l, e, t);
          e.flags |= 128;
        }
        if (
          ((n = e.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          A(Nl, Nl.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Ud(l, e, t, e.pendingProps));
      case 24:
        nt(e, Tl, l.memoizedState.cache);
    }
    return Ze(l, e, t);
  }
  function Zd(l, e, t) {
    if (l !== null)
      if (l.memoizedProps !== e.pendingProps) Al = !0;
      else {
        if (!xc(l, t) && (e.flags & 128) === 0) return ((Al = !1), e0(l, e, t));
        Al = (l.flags & 131072) !== 0;
      }
    else ((Al = !1), P && (e.flags & 1048576) !== 0 && ps(e, La, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        l: {
          var a = e.pendingProps;
          if (((l = qt(e.elementType)), (e.type = l), typeof l == "function"))
            ji(l)
              ? ((a = Qt(l, a)), (e.tag = 1), (e = Bd(null, e, l, a, t)))
              : ((e.tag = 0), (e = rc(null, e, l, a, t)));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === kl) {
                ((e.tag = 11), (e = Md(null, e, l, a, t)));
                break l;
              } else if (n === K) {
                ((e.tag = 14), (e = Od(null, e, l, a, t)));
                break l;
              }
            }
            throw ((e = Ne(l) || l), Error(g(306, e, "")));
          }
        }
        return e;
      case 0:
        return rc(l, e, e.type, e.pendingProps, t);
      case 1:
        return ((a = e.type), (n = Qt(a, e.pendingProps)), Bd(l, e, a, n, t));
      case 3:
        l: {
          if ((Kl(e, e.stateNode.containerInfo), l === null))
            throw Error(g(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          ((n = u.element), Gi(l, e), Fa(e, a, null, t));
          var i = e.memoizedState;
          if (
            ((a = i.cache),
            nt(e, Tl, a),
            a !== u.cache && Ui(e, [Tl], t, !0),
            $a(),
            (a = i.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: a, isDehydrated: !1, cache: i.cache }),
              (e.updateQueue.baseState = u),
              (e.memoizedState = u),
              e.flags & 256)
            ) {
              e = Yd(l, e, a, t);
              break l;
            } else if (a !== n) {
              ((n = ve(Error(g(424)), e)), Va(n), (e = Yd(l, e, a, t)));
              break l;
            } else {
              switch (((l = e.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                vl = pe(l.firstChild),
                  Bl = e,
                  P = !0,
                  tt = null,
                  be = !0,
                  t = Us(e, null, a, t),
                  e.child = t;
                t;
              )
                ((t.flags = (t.flags & -3) | 4096), (t = t.sibling));
            }
          else {
            if ((Ct(), a === n)) {
              e = Ze(l, e, t);
              break l;
            }
            Gl(l, e, a, t);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          ou(l, e),
          l === null
            ? (t = lr(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = t)
              : P ||
                ((t = e.type),
                (l = e.pendingProps),
                (a = _u(J.current).createElement(t)),
                (a[ql] = e),
                (a[Wl] = l),
                Ql(a, t, l),
                Cl(a),
                (e.stateNode = a))
            : (e.memoizedState = lr(
                e.type,
                l.memoizedProps,
                e.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          _a(e),
          l === null &&
            P &&
            ((a = e.stateNode = Fo(e.type, e.pendingProps, J.current)),
            (Bl = e),
            (be = !0),
            (n = vl),
            yt(e.type) ? ((Ic = n), (vl = pe(a.firstChild))) : (vl = n)),
          Gl(l, e, e.pendingProps.children, t),
          ou(l, e),
          l === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          l === null &&
            P &&
            ((n = a = vl) &&
              ((a = O0(a, e.type, e.pendingProps, be)),
              a !== null
                ? ((e.stateNode = a),
                  (Bl = e),
                  (vl = pe(a.firstChild)),
                  (be = !1),
                  (n = !0))
                : (n = !1)),
            n || at(e)),
          _a(e),
          (n = e.type),
          (u = e.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (a = u.children),
          wc(n, u) ? (a = null) : i !== null && wc(n, i) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((n = Ji(l, e, Jm, null, null, t)), (bn._currentValue = n)),
          ou(l, e),
          Gl(l, e, a, t),
          e.child
        );
      case 6:
        return (
          l === null &&
            P &&
            ((l = t = vl) &&
              ((t = C0(t, e.pendingProps, be)),
              t !== null
                ? ((e.stateNode = t), (Bl = e), (vl = null), (l = !0))
                : (l = !1)),
            l || at(e)),
          null
        );
      case 13:
        return Gd(l, e, t);
      case 4:
        return (
          Kl(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          l === null ? (e.child = Yt(e, null, a, t)) : Gl(l, e, a, t),
          e.child
        );
      case 11:
        return Md(l, e, e.type, e.pendingProps, t);
      case 7:
        return (Gl(l, e, e.pendingProps, t), e.child);
      case 8:
        return (Gl(l, e, e.pendingProps.children, t), e.child);
      case 12:
        return (Gl(l, e, e.pendingProps.children, t), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          nt(e, e.type, a.value),
          Gl(l, e, a.children, t),
          e.child
        );
      case 9:
        return (
          (n = e.type._context),
          (a = e.pendingProps.children),
          Rt(e),
          (n = Yl(n)),
          (a = a(n)),
          (e.flags |= 1),
          Gl(l, e, a, t),
          e.child
        );
      case 14:
        return Od(l, e, e.type, e.pendingProps, t);
      case 15:
        return Cd(l, e, e.type, e.pendingProps, t);
      case 19:
        return Xd(l, e, t);
      case 31:
        return l0(l, e, t);
      case 22:
        return Ud(l, e, t, e.pendingProps);
      case 24:
        return (
          Rt(e),
          (a = Yl(Tl)),
          l === null
            ? ((n = qi()),
              n === null &&
                ((n = ol),
                (u = Ri()),
                (n.pooledCache = u),
                u.refCount++,
                u !== null && (n.pooledCacheLanes |= t),
                (n = u)),
              (e.memoizedState = { parent: a, cache: n }),
              Yi(e),
              nt(e, Tl, n))
            : ((l.lanes & t) !== 0 && (Gi(l, e), Fa(e, null, null, t), $a()),
              (n = l.memoizedState),
              (u = e.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (e.memoizedState = n),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = n),
                  nt(e, Tl, a))
                : ((a = u.cache),
                  nt(e, Tl, a),
                  a !== n.cache && Ui(e, [Tl], t, !0))),
          Gl(l, e, e.pendingProps.children, t),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(g(156, e.tag));
  }
  function Le(l) {
    l.flags |= 4;
  }
  function pc(l, e, t, a, n) {
    if (((e = (l.mode & 32) !== 0) && (e = !1), e)) {
      if (((l.flags |= 16777216), (n & 335544128) === n))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (go()) l.flags |= 8192;
        else throw ((Bt = $n), Bi);
    } else l.flags &= -16777217;
  }
  function Ld(l, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ur(e)))
      if (go()) l.flags |= 8192;
      else throw ((Bt = $n), Bi);
  }
  function mu(l, e) {
    (e !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((e = l.tag !== 22 ? zf() : 536870912), (l.lanes |= e), (ba |= e)));
  }
  function an(l, e) {
    if (!P)
      switch (l.tailMode) {
        case "hidden":
          e = l.tail;
          for (var t = null; e !== null; )
            (e.alternate !== null && (t = e), (e = e.sibling));
          t === null ? (l.tail = null) : (t.sibling = null);
          break;
        case "collapsed":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null
            ? e || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function gl(l) {
    var e = l.alternate !== null && l.alternate.child === l.child,
      t = 0,
      a = 0;
    if (e)
      for (var n = l.child; n !== null; )
        ((t |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = l),
          (n = n.sibling));
    else
      for (n = l.child; n !== null; )
        ((t |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = l),
          (n = n.sibling));
    return ((l.subtreeFlags |= a), (l.childLanes = t), e);
  }
  function t0(l, e, t) {
    var a = e.pendingProps;
    switch ((_i(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (gl(e), null);
      case 1:
        return (gl(e), null);
      case 3:
        return (
          (t = e.stateNode),
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Ge(Tl),
          zl(),
          t.pendingContext &&
            ((t.context = t.pendingContext), (t.pendingContext = null)),
          (l === null || l.child === null) &&
            (ua(e)
              ? Le(e)
              : l === null ||
                (l.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Mi())),
          gl(e),
          null
        );
      case 26:
        var n = e.type,
          u = e.memoizedState;
        return (
          l === null
            ? (Le(e),
              u !== null ? (gl(e), Ld(e, u)) : (gl(e), pc(e, n, null, a, t)))
            : u
              ? u !== l.memoizedState
                ? (Le(e), gl(e), Ld(e, u))
                : (gl(e), (e.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== a && Le(e),
                gl(e),
                pc(e, n, l, a, t)),
          null
        );
      case 27:
        if (
          (jn(e),
          (t = J.current),
          (n = e.type),
          l !== null && e.stateNode != null)
        )
          l.memoizedProps !== a && Le(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(g(166));
            return (gl(e), null);
          }
          ((l = D.current),
            ua(e) ? zs(e) : ((l = Fo(n, a, t)), (e.stateNode = l), Le(e)));
        }
        return (gl(e), null);
      case 5:
        if ((jn(e), (n = e.type), l !== null && e.stateNode != null))
          l.memoizedProps !== a && Le(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(g(166));
            return (gl(e), null);
          }
          if (((u = D.current), ua(e))) zs(e);
          else {
            var i = _u(J.current);
            switch (u) {
              case 1:
                u = i.createElementNS("http://www.w3.org/2000/svg", n);
                break;
              case 2:
                u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS("http://www.w3.org/2000/svg", n);
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n,
                    );
                    break;
                  case "script":
                    ((u = i.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof a.is == "string"
                        ? i.createElement("select", { is: a.is })
                        : i.createElement("select")),
                      a.multiple
                        ? (u.multiple = !0)
                        : a.size && (u.size = a.size));
                    break;
                  default:
                    u =
                      typeof a.is == "string"
                        ? i.createElement(n, { is: a.is })
                        : i.createElement(n);
                }
            }
            ((u[ql] = e), (u[Wl] = a));
            l: for (i = e.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === e) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === e) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            e.stateNode = u;
            l: switch ((Ql(u, n, a), n)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Le(e);
          }
        }
        return (
          gl(e),
          pc(e, e.type, l === null ? null : l.memoizedProps, e.pendingProps, t),
          null
        );
      case 6:
        if (l && e.stateNode != null) l.memoizedProps !== a && Le(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(g(166));
          if (((l = J.current), ua(e))) {
            if (
              ((l = e.stateNode),
              (t = e.memoizedProps),
              (a = null),
              (n = Bl),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            ((l[ql] = e),
              (l = !!(
                l.nodeValue === t ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Qo(l.nodeValue, t)
              )),
              l || at(e, !0));
          } else
            ((l = _u(l).createTextNode(a)), (l[ql] = e), (e.stateNode = l));
        }
        return (gl(e), null);
      case 31:
        if (((t = e.memoizedState), l === null || l.memoizedState !== null)) {
          if (((a = ua(e)), t !== null)) {
            if (l === null) {
              if (!a) throw Error(g(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(g(557));
              l[ql] = e;
            } else
              (Ct(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (gl(e), (l = !1));
          } else
            ((t = Mi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = t),
              (l = !0));
          if (!l) return e.flags & 256 ? (fe(e), e) : (fe(e), null);
          if ((e.flags & 128) !== 0) throw Error(g(558));
        }
        return (gl(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((n = ua(e)), a !== null && a.dehydrated !== null)) {
            if (l === null) {
              if (!n) throw Error(g(318));
              if (
                ((n = e.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(g(317));
              n[ql] = e;
            } else
              (Ct(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (gl(e), (n = !1));
          } else
            ((n = Mi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = n),
              (n = !0));
          if (!n) return e.flags & 256 ? (fe(e), e) : (fe(e), null);
        }
        return (
          fe(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = t), e)
            : ((t = a !== null),
              (l = l !== null && l.memoizedState !== null),
              t &&
                ((a = e.child),
                (n = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (n = a.alternate.memoizedState.cachePool.pool),
                (u = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (u = a.memoizedState.cachePool.pool),
                u !== n && (a.flags |= 2048)),
              t !== l && t && (e.child.flags |= 8192),
              mu(e, e.updateQueue),
              gl(e),
              null)
        );
      case 4:
        return (zl(), l === null && Zc(e.stateNode.containerInfo), gl(e), null);
      case 10:
        return (Ge(e.type), gl(e), null);
      case 19:
        if ((j(Nl), (a = e.memoizedState), a === null)) return (gl(e), null);
        if (((n = (e.flags & 128) !== 0), (u = a.rendering), u === null))
          if (n) an(a, !1);
          else {
            if (Sl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = e.child; l !== null; ) {
                if (((u = lu(l)), u !== null)) {
                  for (
                    e.flags |= 128,
                      an(a, !1),
                      l = u.updateQueue,
                      e.updateQueue = l,
                      mu(e, l),
                      e.subtreeFlags = 0,
                      l = t,
                      t = e.child;
                    t !== null;
                  )
                    (ys(t, l), (t = t.sibling));
                  return (
                    A(Nl, (Nl.current & 1) | 2),
                    P && Be(e, a.treeForkCount),
                    e.child
                  );
                }
                l = l.sibling;
              }
            a.tail !== null &&
              te() > bu &&
              ((e.flags |= 128), (n = !0), an(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!n)
            if (((l = lu(u)), l !== null)) {
              if (
                ((e.flags |= 128),
                (n = !0),
                (l = l.updateQueue),
                (e.updateQueue = l),
                mu(e, l),
                an(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !u.alternate &&
                  !P)
              )
                return (gl(e), null);
            } else
              2 * te() - a.renderingStartTime > bu &&
                t !== 536870912 &&
                ((e.flags |= 128), (n = !0), an(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((u.sibling = e.child), (e.child = u))
            : ((l = a.last),
              l !== null ? (l.sibling = u) : (e.child = u),
              (a.last = u));
        }
        return a.tail !== null
          ? ((l = a.tail),
            (a.rendering = l),
            (a.tail = l.sibling),
            (a.renderingStartTime = te()),
            (l.sibling = null),
            (t = Nl.current),
            A(Nl, n ? (t & 1) | 2 : t & 1),
            P && Be(e, a.treeForkCount),
            l)
          : (gl(e), null);
      case 22:
      case 23:
        return (
          fe(e),
          Li(),
          (a = e.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (t & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (gl(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : gl(e),
          (t = e.updateQueue),
          t !== null && mu(e, t.retryQueue),
          (t = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (t = l.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== t && (e.flags |= 2048),
          l !== null && j(Ht),
          null
        );
      case 24:
        return (
          (t = null),
          l !== null && (t = l.memoizedState.cache),
          e.memoizedState.cache !== t && (e.flags |= 2048),
          Ge(Tl),
          gl(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(g(156, e.tag));
  }
  function a0(l, e) {
    switch ((_i(e), e.tag)) {
      case 1:
        return (
          (l = e.flags),
          l & 65536 ? ((e.flags = (l & -65537) | 128), e) : null
        );
      case 3:
        return (
          Ge(Tl),
          zl(),
          (l = e.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((e.flags = (l & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (jn(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((fe(e), e.alternate === null)) throw Error(g(340));
          Ct();
        }
        return (
          (l = e.flags),
          l & 65536 ? ((e.flags = (l & -65537) | 128), e) : null
        );
      case 13:
        if (
          (fe(e), (l = e.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(g(340));
          Ct();
        }
        return (
          (l = e.flags),
          l & 65536 ? ((e.flags = (l & -65537) | 128), e) : null
        );
      case 19:
        return (j(Nl), null);
      case 4:
        return (zl(), null);
      case 10:
        return (Ge(e.type), null);
      case 22:
      case 23:
        return (
          fe(e),
          Li(),
          l !== null && j(Ht),
          (l = e.flags),
          l & 65536 ? ((e.flags = (l & -65537) | 128), e) : null
        );
      case 24:
        return (Ge(Tl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Vd(l, e) {
    switch ((_i(e), e.tag)) {
      case 3:
        (Ge(Tl), zl());
        break;
      case 26:
      case 27:
      case 5:
        jn(e);
        break;
      case 4:
        zl();
        break;
      case 31:
        e.memoizedState !== null && fe(e);
        break;
      case 13:
        fe(e);
        break;
      case 19:
        j(Nl);
        break;
      case 10:
        Ge(e.type);
        break;
      case 22:
      case 23:
        (fe(e), Li(), l !== null && j(Ht));
        break;
      case 24:
        Ge(Tl);
    }
  }
  function nn(l, e) {
    try {
      var t = e.updateQueue,
        a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        t = n;
        do {
          if ((t.tag & l) === l) {
            a = void 0;
            var u = t.create,
              i = t.inst;
            ((a = u()), (i.destroy = a));
          }
          t = t.next;
        } while (t !== n);
      }
    } catch (f) {
      ul(e, e.return, f);
    }
  }
  function dt(l, e, t) {
    try {
      var a = e.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst,
              f = i.destroy;
            if (f !== void 0) {
              ((i.destroy = void 0), (n = e));
              var s = t,
                h = f;
              try {
                h();
              } catch (b) {
                ul(n, s, b);
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (b) {
      ul(e, e.return, b);
    }
  }
  function Kd(l) {
    var e = l.updateQueue;
    if (e !== null) {
      var t = l.stateNode;
      try {
        Hs(e, t);
      } catch (a) {
        ul(l, l.return, a);
      }
    }
  }
  function Jd(l, e, t) {
    ((t.props = Qt(l.type, l.memoizedProps)), (t.state = l.memoizedState));
    try {
      t.componentWillUnmount();
    } catch (a) {
      ul(l, e, a);
    }
  }
  function un(l, e) {
    try {
      var t = l.ref;
      if (t !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof t == "function" ? (l.refCleanup = t(a)) : (t.current = a);
      }
    } catch (n) {
      ul(l, e, n);
    }
  }
  function Me(l, e) {
    var t = l.ref,
      a = l.refCleanup;
    if (t !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          ul(l, e, n);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof t == "function")
        try {
          t(null);
        } catch (n) {
          ul(l, e, n);
        }
      else t.current = null;
  }
  function wd(l) {
    var e = l.type,
      t = l.memoizedProps,
      a = l.stateNode;
    try {
      l: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          t.autoFocus && a.focus();
          break l;
        case "img":
          t.src ? (a.src = t.src) : t.srcSet && (a.srcset = t.srcSet);
      }
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  function Sc(l, e, t) {
    try {
      var a = l.stateNode;
      (T0(a, l.type, t, e), (a[Wl] = e));
    } catch (n) {
      ul(l, l.return, n);
    }
  }
  function kd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && yt(l.type)) ||
      l.tag === 4
    );
  }
  function zc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || kd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && yt(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Nc(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode),
        e
          ? (t.nodeType === 9
              ? t.body
              : t.nodeName === "HTML"
                ? t.ownerDocument.body
                : t
            ).insertBefore(l, e)
          : ((e =
              t.nodeType === 9
                ? t.body
                : t.nodeName === "HTML"
                  ? t.ownerDocument.body
                  : t),
            e.appendChild(l),
            (t = t._reactRootContainer),
            t != null || e.onclick !== null || (e.onclick = Re)));
    else if (
      a !== 4 &&
      (a === 27 && yt(l.type) && ((t = l.stateNode), (e = null)),
      (l = l.child),
      l !== null)
    )
      for (Nc(l, e, t), l = l.sibling; l !== null; )
        (Nc(l, e, t), (l = l.sibling));
  }
  function hu(l, e, t) {
    var a = l.tag;
    if (a === 5 || a === 6)
      ((l = l.stateNode), e ? t.insertBefore(l, e) : t.appendChild(l));
    else if (
      a !== 4 &&
      (a === 27 && yt(l.type) && (t = l.stateNode), (l = l.child), l !== null)
    )
      for (hu(l, e, t), l = l.sibling; l !== null; )
        (hu(l, e, t), (l = l.sibling));
  }
  function Wd(l) {
    var e = l.stateNode,
      t = l.memoizedProps;
    try {
      for (var a = l.type, n = e.attributes; n.length; )
        e.removeAttributeNode(n[0]);
      (Ql(e, a, t), (e[ql] = l), (e[Wl] = t));
    } catch (u) {
      ul(l, l.return, u);
    }
  }
  var Ve = !1,
    _l = !1,
    jc = !1,
    $d = typeof WeakSet == "function" ? WeakSet : Set,
    Ul = null;
  function n0(l, e) {
    if (((l = l.containerInfo), (Kc = Hu), (l = fs(l)), yi(l))) {
      if ("selectionStart" in l)
        var t = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          t = ((t = l.ownerDocument) && t.defaultView) || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var n = a.anchorOffset,
              u = a.focusNode;
            a = a.focusOffset;
            try {
              (t.nodeType, u.nodeType);
            } catch {
              t = null;
              break l;
            }
            var i = 0,
              f = -1,
              s = -1,
              h = 0,
              b = 0,
              z = l,
              v = null;
            e: for (;;) {
              for (
                var y;
                z !== t || (n !== 0 && z.nodeType !== 3) || (f = i + n),
                  z !== u || (a !== 0 && z.nodeType !== 3) || (s = i + a),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (y = z.firstChild) !== null;
              )
                ((v = z), (z = y));
              for (;;) {
                if (z === l) break e;
                if (
                  (v === t && ++h === n && (f = i),
                  v === u && ++b === a && (s = i),
                  (y = z.nextSibling) !== null)
                )
                  break;
                ((z = v), (v = z.parentNode));
              }
              z = y;
            }
            t = f === -1 || s === -1 ? null : { start: f, end: s };
          } else t = null;
        }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (
      Jc = { focusedElem: l, selectionRange: t }, Hu = !1, Ul = e;
      Ul !== null;
    )
      if (
        ((e = Ul), (l = e.child), (e.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = e), (Ul = l));
      else
        for (; Ul !== null; ) {
          switch (((e = Ul), (u = e.alternate), (l = e.flags), e.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = e.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (t = 0; t < l.length; t++)
                  ((n = l[t]), (n.ref.impl = n.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                ((l = void 0),
                  (t = e),
                  (n = u.memoizedProps),
                  (u = u.memoizedState),
                  (a = t.stateNode));
                try {
                  var _ = Qt(t.type, n);
                  ((l = a.getSnapshotBeforeUpdate(_, u)),
                    (a.__reactInternalSnapshotBeforeUpdate = l));
                } catch (R) {
                  ul(t, t.return, R);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = e.stateNode.containerInfo), (t = l.nodeType), t === 9)
                )
                  Wc(l);
                else if (t === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Wc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(g(163));
          }
          if (((l = e.sibling), l !== null)) {
            ((l.return = e.return), (Ul = l));
            break;
          }
          Ul = e.return;
        }
  }
  function Fd(l, e, t) {
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Je(l, t), a & 4 && nn(5, t));
        break;
      case 1:
        if ((Je(l, t), a & 4))
          if (((l = t.stateNode), e === null))
            try {
              l.componentDidMount();
            } catch (i) {
              ul(t, t.return, i);
            }
          else {
            var n = Qt(t.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              l.componentDidUpdate(n, e, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ul(t, t.return, i);
            }
          }
        (a & 64 && Kd(t), a & 512 && un(t, t.return));
        break;
      case 3:
        if ((Je(l, t), a & 64 && ((l = t.updateQueue), l !== null))) {
          if (((e = null), t.child !== null))
            switch (t.child.tag) {
              case 27:
              case 5:
                e = t.child.stateNode;
                break;
              case 1:
                e = t.child.stateNode;
            }
          try {
            Hs(l, e);
          } catch (i) {
            ul(t, t.return, i);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Wd(t);
      case 26:
      case 5:
        (Je(l, t), e === null && a & 4 && wd(t), a & 512 && un(t, t.return));
        break;
      case 12:
        Je(l, t);
        break;
      case 31:
        (Je(l, t), a & 4 && lo(l, t));
        break;
      case 13:
        (Je(l, t),
          a & 4 && eo(l, t),
          a & 64 &&
            ((l = t.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((t = m0.bind(null, t)), U0(l, t)))));
        break;
      case 22:
        if (((a = t.memoizedState !== null || Ve), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || _l), (n = Ve));
          var u = _l;
          ((Ve = a),
            (_l = e) && !u ? we(l, t, (t.subtreeFlags & 8772) !== 0) : Je(l, t),
            (Ve = n),
            (_l = u));
        }
        break;
      case 30:
        break;
      default:
        Je(l, t);
    }
  }
  function Id(l) {
    var e = l.alternate;
    (e !== null && ((l.alternate = null), Id(e)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((e = l.stateNode), e !== null && li(e)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var bl = null,
    Fl = !1;
  function Ke(l, e, t) {
    for (t = t.child; t !== null; ) (Pd(l, e, t), (t = t.sibling));
  }
  function Pd(l, e, t) {
    if (ae && typeof ae.onCommitFiberUnmount == "function")
      try {
        ae.onCommitFiberUnmount(Da, t);
      } catch {}
    switch (t.tag) {
      case 26:
        (_l || Me(t, e),
          Ke(l, e, t),
          t.memoizedState
            ? t.memoizedState.count--
            : t.stateNode && ((t = t.stateNode), t.parentNode.removeChild(t)));
        break;
      case 27:
        _l || Me(t, e);
        var a = bl,
          n = Fl;
        (yt(t.type) && ((bl = t.stateNode), (Fl = !1)),
          Ke(l, e, t),
          vn(t.stateNode),
          (bl = a),
          (Fl = n));
        break;
      case 5:
        _l || Me(t, e);
      case 6:
        if (
          ((a = bl),
          (n = Fl),
          (bl = null),
          Ke(l, e, t),
          (bl = a),
          (Fl = n),
          bl !== null)
        )
          if (Fl)
            try {
              (bl.nodeType === 9
                ? bl.body
                : bl.nodeName === "HTML"
                  ? bl.ownerDocument.body
                  : bl
              ).removeChild(t.stateNode);
            } catch (u) {
              ul(t, e, u);
            }
          else
            try {
              bl.removeChild(t.stateNode);
            } catch (u) {
              ul(t, e, u);
            }
        break;
      case 18:
        bl !== null &&
          (Fl
            ? ((l = bl),
              Jo(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                t.stateNode,
              ),
              Ea(l))
            : Jo(bl, t.stateNode));
        break;
      case 4:
        ((a = bl),
          (n = Fl),
          (bl = t.stateNode.containerInfo),
          (Fl = !0),
          Ke(l, e, t),
          (bl = a),
          (Fl = n));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (dt(2, t, e), _l || dt(4, t, e), Ke(l, e, t));
        break;
      case 1:
        (_l ||
          (Me(t, e),
          (a = t.stateNode),
          typeof a.componentWillUnmount == "function" && Jd(t, e, a)),
          Ke(l, e, t));
        break;
      case 21:
        Ke(l, e, t);
        break;
      case 22:
        ((_l = (a = _l) || t.memoizedState !== null), Ke(l, e, t), (_l = a));
        break;
      default:
        Ke(l, e, t);
    }
  }
  function lo(l, e) {
    if (
      e.memoizedState === null &&
      ((l = e.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ea(l);
      } catch (t) {
        ul(e, e.return, t);
      }
    }
  }
  function eo(l, e) {
    if (
      e.memoizedState === null &&
      ((l = e.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ea(l);
      } catch (t) {
        ul(e, e.return, t);
      }
  }
  function u0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var e = l.stateNode;
        return (e === null && (e = l.stateNode = new $d()), e);
      case 22:
        return (
          (l = l.stateNode),
          (e = l._retryCache),
          e === null && (e = l._retryCache = new $d()),
          e
        );
      default:
        throw Error(g(435, l.tag));
    }
  }
  function vu(l, e) {
    var t = u0(l);
    e.forEach(function (a) {
      if (!t.has(a)) {
        t.add(a);
        var n = h0.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function Il(l, e) {
    var t = e.deletions;
    if (t !== null)
      for (var a = 0; a < t.length; a++) {
        var n = t[a],
          u = l,
          i = e,
          f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (yt(f.type)) {
                ((bl = f.stateNode), (Fl = !1));
                break l;
              }
              break;
            case 5:
              ((bl = f.stateNode), (Fl = !1));
              break l;
            case 3:
            case 4:
              ((bl = f.stateNode.containerInfo), (Fl = !0));
              break l;
          }
          f = f.return;
        }
        if (bl === null) throw Error(g(160));
        (Pd(u, i, n),
          (bl = null),
          (Fl = !1),
          (u = n.alternate),
          u !== null && (u.return = null),
          (n.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (to(e, l), (e = e.sibling));
  }
  var Ee = null;
  function to(l, e) {
    var t = l.alternate,
      a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Il(e, l),
          Pl(l),
          a & 4 && (dt(3, l, l.return), nn(3, l), dt(5, l, l.return)));
        break;
      case 1:
        (Il(e, l),
          Pl(l),
          a & 512 && (_l || t === null || Me(t, t.return)),
          a & 64 &&
            Ve &&
            ((l = l.updateQueue),
            l !== null &&
              ((a = l.callbacks),
              a !== null &&
                ((t = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = t === null ? a : t.concat(a))))));
        break;
      case 26:
        var n = Ee;
        if (
          (Il(e, l),
          Pl(l),
          a & 512 && (_l || t === null || Me(t, t.return)),
          a & 4)
        ) {
          var u = t !== null ? t.memoizedState : null;
          if (((a = l.memoizedState), t === null))
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  ((a = l.type),
                    (t = l.memoizedProps),
                    (n = n.ownerDocument || n));
                  e: switch (a) {
                    case "title":
                      ((u = n.getElementsByTagName("title")[0]),
                        (!u ||
                          u[Ca] ||
                          u[ql] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = n.createElement(a)),
                          n.head.insertBefore(
                            u,
                            n.querySelector("head > title"),
                          )),
                        Ql(u, a, t),
                        (u[ql] = l),
                        Cl(u),
                        (a = u));
                      break l;
                    case "link":
                      var i = ar("link", "href", n).get(a + (t.href || ""));
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("href") ===
                              (t.href == null || t.href === ""
                                ? null
                                : t.href) &&
                              u.getAttribute("rel") ===
                                (t.rel == null ? null : t.rel) &&
                              u.getAttribute("title") ===
                                (t.title == null ? null : t.title) &&
                              u.getAttribute("crossorigin") ===
                                (t.crossOrigin == null ? null : t.crossOrigin))
                          ) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        Ql(u, a, t),
                        n.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (i = ar("meta", "content", n).get(
                          a + (t.content || ""),
                        ))
                      ) {
                        for (f = 0; f < i.length; f++)
                          if (
                            ((u = i[f]),
                            u.getAttribute("content") ===
                              (t.content == null ? null : "" + t.content) &&
                              u.getAttribute("name") ===
                                (t.name == null ? null : t.name) &&
                              u.getAttribute("property") ===
                                (t.property == null ? null : t.property) &&
                              u.getAttribute("http-equiv") ===
                                (t.httpEquiv == null ? null : t.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (t.charSet == null ? null : t.charSet))
                          ) {
                            i.splice(f, 1);
                            break e;
                          }
                      }
                      ((u = n.createElement(a)),
                        Ql(u, a, t),
                        n.head.appendChild(u));
                      break;
                    default:
                      throw Error(g(468, a));
                  }
                  ((u[ql] = l), Cl(u), (a = u));
                }
                l.stateNode = a;
              } else nr(n, l.type, l.stateNode);
            else l.stateNode = tr(n, a, l.memoizedProps);
          else
            u !== a
              ? (u === null
                  ? t.stateNode !== null &&
                    ((t = t.stateNode), t.parentNode.removeChild(t))
                  : u.count--,
                a === null
                  ? nr(n, l.type, l.stateNode)
                  : tr(n, a, l.memoizedProps))
              : a === null &&
                l.stateNode !== null &&
                Sc(l, l.memoizedProps, t.memoizedProps);
        }
        break;
      case 27:
        (Il(e, l),
          Pl(l),
          a & 512 && (_l || t === null || Me(t, t.return)),
          t !== null && a & 4 && Sc(l, l.memoizedProps, t.memoizedProps));
        break;
      case 5:
        if (
          (Il(e, l),
          Pl(l),
          a & 512 && (_l || t === null || Me(t, t.return)),
          l.flags & 32)
        ) {
          n = l.stateNode;
          try {
            Wt(n, "");
          } catch (_) {
            ul(l, l.return, _);
          }
        }
        (a & 4 &&
          l.stateNode != null &&
          ((n = l.memoizedProps), Sc(l, n, t !== null ? t.memoizedProps : n)),
          a & 1024 && (jc = !0));
        break;
      case 6:
        if ((Il(e, l), Pl(l), a & 4)) {
          if (l.stateNode === null) throw Error(g(162));
          ((a = l.memoizedProps), (t = l.stateNode));
          try {
            t.nodeValue = a;
          } catch (_) {
            ul(l, l.return, _);
          }
        }
        break;
      case 3:
        if (
          ((Ou = null),
          (n = Ee),
          (Ee = Du(e.containerInfo)),
          Il(e, l),
          (Ee = n),
          Pl(l),
          a & 4 && t !== null && t.memoizedState.isDehydrated)
        )
          try {
            Ea(e.containerInfo);
          } catch (_) {
            ul(l, l.return, _);
          }
        jc && ((jc = !1), ao(l));
        break;
      case 4:
        ((a = Ee),
          (Ee = Du(l.stateNode.containerInfo)),
          Il(e, l),
          Pl(l),
          (Ee = a));
        break;
      case 12:
        (Il(e, l), Pl(l));
        break;
      case 31:
        (Il(e, l),
          Pl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vu(l, a))));
        break;
      case 13:
        (Il(e, l),
          Pl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (t !== null && t.memoizedState !== null) &&
            (yu = te()),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vu(l, a))));
        break;
      case 22:
        n = l.memoizedState !== null;
        var s = t !== null && t.memoizedState !== null,
          h = Ve,
          b = _l;
        if (
          ((Ve = h || n),
          (_l = b || s),
          Il(e, l),
          (_l = b),
          (Ve = h),
          Pl(l),
          a & 8192)
        )
          l: for (
            e = l.stateNode,
              e._visibility = n ? e._visibility & -2 : e._visibility | 1,
              n && (t === null || s || Ve || _l || Xt(l)),
              t = null,
              e = l;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (t === null) {
                s = t = e;
                try {
                  if (((u = s.stateNode), n))
                    ((i = u.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    f = s.stateNode;
                    var z = s.memoizedProps.style,
                      v =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    f.style.display =
                      v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (_) {
                  ul(s, s.return, _);
                }
              }
            } else if (e.tag === 6) {
              if (t === null) {
                s = e;
                try {
                  s.stateNode.nodeValue = n ? "" : s.memoizedProps;
                } catch (_) {
                  ul(s, s.return, _);
                }
              }
            } else if (e.tag === 18) {
              if (t === null) {
                s = e;
                try {
                  var y = s.stateNode;
                  n ? wo(y, !0) : wo(s.stateNode, !1);
                } catch (_) {
                  ul(s, s.return, _);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === l) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === l) break l;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === l) break l;
              (t === e && (t = null), (e = e.return));
            }
            (t === e && (t = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = l.updateQueue),
          a !== null &&
            ((t = a.retryQueue),
            t !== null && ((a.retryQueue = null), vu(l, t))));
        break;
      case 19:
        (Il(e, l),
          Pl(l),
          a & 4 &&
            ((a = l.updateQueue),
            a !== null && ((l.updateQueue = null), vu(l, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Il(e, l), Pl(l));
    }
  }
  function Pl(l) {
    var e = l.flags;
    if (e & 2) {
      try {
        for (var t, a = l.return; a !== null; ) {
          if (kd(a)) {
            t = a;
            break;
          }
          a = a.return;
        }
        if (t == null) throw Error(g(160));
        switch (t.tag) {
          case 27:
            var n = t.stateNode,
              u = zc(l);
            hu(l, u, n);
            break;
          case 5:
            var i = t.stateNode;
            t.flags & 32 && (Wt(i, ""), (t.flags &= -33));
            var f = zc(l);
            hu(l, f, i);
            break;
          case 3:
          case 4:
            var s = t.stateNode.containerInfo,
              h = zc(l);
            Nc(l, h, s);
            break;
          default:
            throw Error(g(161));
        }
      } catch (b) {
        ul(l, l.return, b);
      }
      l.flags &= -3;
    }
    e & 4096 && (l.flags &= -4097);
  }
  function ao(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var e = l;
        (ao(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Je(l, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (Fd(l, e.alternate, e), (e = e.sibling));
  }
  function Xt(l) {
    for (l = l.child; l !== null; ) {
      var e = l;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (dt(4, e, e.return), Xt(e));
          break;
        case 1:
          Me(e, e.return);
          var t = e.stateNode;
          (typeof t.componentWillUnmount == "function" && Jd(e, e.return, t),
            Xt(e));
          break;
        case 27:
          vn(e.stateNode);
        case 26:
        case 5:
          (Me(e, e.return), Xt(e));
          break;
        case 22:
          e.memoizedState === null && Xt(e);
          break;
        case 30:
          Xt(e);
          break;
        default:
          Xt(e);
      }
      l = l.sibling;
    }
  }
  function we(l, e, t) {
    for (t = t && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        n = l,
        u = e,
        i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (we(n, u, t), nn(4, u));
          break;
        case 1:
          if (
            (we(n, u, t),
            (a = u),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (h) {
              ul(a, a.return, h);
            }
          if (((a = u), (n = a.updateQueue), n !== null)) {
            var f = a.stateNode;
            try {
              var s = n.shared.hiddenCallbacks;
              if (s !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < s.length; n++)
                  Rs(s[n], f);
            } catch (h) {
              ul(a, a.return, h);
            }
          }
          (t && i & 64 && Kd(u), un(u, u.return));
          break;
        case 27:
          Wd(u);
        case 26:
        case 5:
          (we(n, u, t), t && a === null && i & 4 && wd(u), un(u, u.return));
          break;
        case 12:
          we(n, u, t);
          break;
        case 31:
          (we(n, u, t), t && i & 4 && lo(n, u));
          break;
        case 13:
          (we(n, u, t), t && i & 4 && eo(n, u));
          break;
        case 22:
          (u.memoizedState === null && we(n, u, t), un(u, u.return));
          break;
        case 30:
          break;
        default:
          we(n, u, t);
      }
      e = e.sibling;
    }
  }
  function Tc(l, e) {
    var t = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (t = l.memoizedState.cachePool.pool),
      (l = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (l = e.memoizedState.cachePool.pool),
      l !== t && (l != null && l.refCount++, t != null && Ka(t)));
  }
  function Ec(l, e) {
    ((l = null),
      e.alternate !== null && (l = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== l && (e.refCount++, l != null && Ka(l)));
  }
  function Ae(l, e, t, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (no(l, e, t, a), (e = e.sibling));
  }
  function no(l, e, t, a) {
    var n = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ae(l, e, t, a), n & 2048 && nn(9, e));
        break;
      case 1:
        Ae(l, e, t, a);
        break;
      case 3:
        (Ae(l, e, t, a),
          n & 2048 &&
            ((l = null),
            e.alternate !== null && (l = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== l && (e.refCount++, l != null && Ka(l))));
        break;
      case 12:
        if (n & 2048) {
          (Ae(l, e, t, a), (l = e.stateNode));
          try {
            var u = e.memoizedProps,
              i = u.id,
              f = u.onPostCommit;
            typeof f == "function" &&
              f(
                i,
                e.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (s) {
            ul(e, e.return, s);
          }
        } else Ae(l, e, t, a);
        break;
      case 31:
        Ae(l, e, t, a);
        break;
      case 13:
        Ae(l, e, t, a);
        break;
      case 23:
        break;
      case 22:
        ((u = e.stateNode),
          (i = e.alternate),
          e.memoizedState !== null
            ? u._visibility & 2
              ? Ae(l, e, t, a)
              : cn(l, e)
            : u._visibility & 2
              ? Ae(l, e, t, a)
              : ((u._visibility |= 2),
                va(l, e, t, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          n & 2048 && Tc(i, e));
        break;
      case 24:
        (Ae(l, e, t, a), n & 2048 && Ec(e.alternate, e));
        break;
      default:
        Ae(l, e, t, a);
    }
  }
  function va(l, e, t, a, n) {
    for (
      n = n && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var u = l,
        i = e,
        f = t,
        s = a,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (va(u, i, f, s, n), nn(8, i));
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          (i.memoizedState !== null
            ? b._visibility & 2
              ? va(u, i, f, s, n)
              : cn(u, i)
            : ((b._visibility |= 2), va(u, i, f, s, n)),
            n && h & 2048 && Tc(i.alternate, i));
          break;
        case 24:
          (va(u, i, f, s, n), n && h & 2048 && Ec(i.alternate, i));
          break;
        default:
          va(u, i, f, s, n);
      }
      e = e.sibling;
    }
  }
  function cn(l, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var t = l,
          a = e,
          n = a.flags;
        switch (a.tag) {
          case 22:
            (cn(t, a), n & 2048 && Tc(a.alternate, a));
            break;
          case 24:
            (cn(t, a), n & 2048 && Ec(a.alternate, a));
            break;
          default:
            cn(t, a);
        }
        e = e.sibling;
      }
  }
  var fn = 8192;
  function ga(l, e, t) {
    if (l.subtreeFlags & fn)
      for (l = l.child; l !== null; ) (uo(l, e, t), (l = l.sibling));
  }
  function uo(l, e, t) {
    switch (l.tag) {
      case 26:
        (ga(l, e, t),
          l.flags & fn &&
            l.memoizedState !== null &&
            K0(t, Ee, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ga(l, e, t);
        break;
      case 3:
      case 4:
        var a = Ee;
        ((Ee = Du(l.stateNode.containerInfo)), ga(l, e, t), (Ee = a));
        break;
      case 22:
        l.memoizedState === null &&
          ((a = l.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = fn), (fn = 16777216), ga(l, e, t), (fn = a))
            : ga(l, e, t));
        break;
      default:
        ga(l, e, t);
    }
  }
  function io(l) {
    var e = l.alternate;
    if (e !== null && ((l = e.child), l !== null)) {
      e.child = null;
      do ((e = l.sibling), (l.sibling = null), (l = e));
      while (l !== null);
    }
  }
  function sn(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          ((Ul = a), fo(a, l));
        }
      io(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (co(l), (l = l.sibling));
  }
  function co(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (sn(l), l.flags & 2048 && dt(9, l, l.return));
        break;
      case 3:
        sn(l);
        break;
      case 12:
        sn(l);
        break;
      case 22:
        var e = l.stateNode;
        l.memoizedState !== null &&
        e._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((e._visibility &= -3), gu(l))
          : sn(l);
        break;
      default:
        sn(l);
    }
  }
  function gu(l) {
    var e = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (e !== null)
        for (var t = 0; t < e.length; t++) {
          var a = e[t];
          ((Ul = a), fo(a, l));
        }
      io(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((e = l), e.tag)) {
        case 0:
        case 11:
        case 15:
          (dt(8, e, e.return), gu(e));
          break;
        case 22:
          ((t = e.stateNode),
            t._visibility & 2 && ((t._visibility &= -3), gu(e)));
          break;
        default:
          gu(e);
      }
      l = l.sibling;
    }
  }
  function fo(l, e) {
    for (; Ul !== null; ) {
      var t = Ul;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          dt(8, t, e);
          break;
        case 23:
        case 22:
          if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
            var a = t.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Ka(t.memoizedState.cache);
      }
      if (((a = t.child), a !== null)) ((a.return = t), (Ul = a));
      else
        l: for (t = l; Ul !== null; ) {
          a = Ul;
          var n = a.sibling,
            u = a.return;
          if ((Id(a), a === t)) {
            Ul = null;
            break l;
          }
          if (n !== null) {
            ((n.return = u), (Ul = n));
            break l;
          }
          Ul = u;
        }
    }
  }
  var i0 = {
      getCacheForType: function (l) {
        var e = Yl(Tl),
          t = e.data.get(l);
        return (t === void 0 && ((t = l()), e.data.set(l, t)), t);
      },
      cacheSignal: function () {
        return Yl(Tl).controller.signal;
      },
    },
    c0 = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    ol = null,
    w = null,
    W = 0,
    nl = 0,
    se = null,
    ot = !1,
    ya = !1,
    Ac = !1,
    ke = 0,
    Sl = 0,
    rt = 0,
    Zt = 0,
    _c = 0,
    de = 0,
    ba = 0,
    dn = null,
    le = null,
    Dc = !1,
    yu = 0,
    so = 0,
    bu = 1 / 0,
    xu = null,
    mt = null,
    Dl = 0,
    ht = null,
    xa = null,
    We = 0,
    Mc = 0,
    Oc = null,
    oo = null,
    on = 0,
    Cc = null;
  function oe() {
    return (tl & 2) !== 0 && W !== 0 ? W & -W : x.T !== null ? Yc() : Ef();
  }
  function ro() {
    if (de === 0)
      if ((W & 536870912) === 0 || P) {
        var l = An;
        ((An <<= 1), (An & 3932160) === 0 && (An = 262144), (de = l));
      } else de = 536870912;
    return ((l = ce.current), l !== null && (l.flags |= 32), de);
  }
  function ee(l, e, t) {
    (((l === ol && (nl === 2 || nl === 9)) || l.cancelPendingCommit !== null) &&
      (pa(l, 0), vt(l, W, de, !1)),
      Oa(l, t),
      ((tl & 2) === 0 || l !== ol) &&
        (l === ol &&
          ((tl & 2) === 0 && (Zt |= t), Sl === 4 && vt(l, W, de, !1)),
        Oe(l)));
  }
  function mo(l, e, t) {
    if ((tl & 6) !== 0) throw Error(g(327));
    var a = (!t && (e & 127) === 0 && (e & l.expiredLanes) === 0) || Ma(l, e),
      n = a ? d0(l, e) : Rc(l, e, !0),
      u = a;
    do {
      if (n === 0) {
        ya && !a && vt(l, e, 0, !1);
        break;
      } else {
        if (((t = l.current.alternate), u && !f0(t))) {
          ((n = Rc(l, e, !1)), (u = !1));
          continue;
        }
        if (n === 2) {
          if (((u = e), l.errorRecoveryDisabledLanes & u)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            e = i;
            l: {
              var f = l;
              n = dn;
              var s = f.current.memoizedState.isDehydrated;
              if ((s && (pa(f, i).flags |= 256), (i = Rc(f, i, !1)), i !== 2)) {
                if (Ac && !s) {
                  ((f.errorRecoveryDisabledLanes |= u), (Zt |= u), (n = 4));
                  break l;
                }
                ((u = le),
                  (le = n),
                  u !== null &&
                    (le === null ? (le = u) : le.push.apply(le, u)));
              }
              n = i;
            }
            if (((u = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          (pa(l, 0), vt(l, e, 0, !0));
          break;
        }
        l: {
          switch (((a = l), (u = n), u)) {
            case 0:
            case 1:
              throw Error(g(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              vt(a, e, de, !ot);
              break l;
            case 2:
              le = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(g(329));
          }
          if ((e & 62914560) === e && ((n = yu + 300 - te()), 10 < n)) {
            if ((vt(a, e, de, !ot), Dn(a, 0, !0) !== 0)) break l;
            ((We = e),
              (a.timeoutHandle = Vo(
                ho.bind(
                  null,
                  a,
                  t,
                  le,
                  xu,
                  Dc,
                  e,
                  de,
                  Zt,
                  ba,
                  ot,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                n,
              )));
            break l;
          }
          ho(a, t, le, xu, Dc, e, de, Zt, ba, ot, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Oe(l);
  }
  function ho(l, e, t, a, n, u, i, f, s, h, b, z, v, y) {
    if (
      ((l.timeoutHandle = -1),
      (z = e.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Re,
      }),
        uo(e, u, z));
      var _ =
        (u & 62914560) === u ? yu - te() : (u & 4194048) === u ? so - te() : 0;
      if (((_ = J0(z, _)), _ !== null)) {
        ((We = u),
          (l.cancelPendingCommit = _(
            zo.bind(null, l, e, u, t, a, n, i, f, s, b, z, null, v, y),
          )),
          vt(l, u, i, !h));
        return;
      }
    }
    zo(l, e, u, t, a, n, i, f, s);
  }
  function f0(l) {
    for (var e = l; ; ) {
      var t = e.tag;
      if (
        (t === 0 || t === 11 || t === 15) &&
        e.flags & 16384 &&
        ((t = e.updateQueue), t !== null && ((t = t.stores), t !== null))
      )
        for (var a = 0; a < t.length; a++) {
          var n = t[a],
            u = n.getSnapshot;
          n = n.value;
          try {
            if (!ue(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((t = e.child), e.subtreeFlags & 16384 && t !== null))
        ((t.return = e), (e = t));
      else {
        if (e === l) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function vt(l, e, t, a) {
    ((e &= ~_c),
      (e &= ~Zt),
      (l.suspendedLanes |= e),
      (l.pingedLanes &= ~e),
      a && (l.warmLanes |= e),
      (a = l.expirationTimes));
    for (var n = e; 0 < n; ) {
      var u = 31 - ne(n),
        i = 1 << u;
      ((a[u] = -1), (n &= ~i));
    }
    t !== 0 && Nf(l, t, e);
  }
  function pu() {
    return (tl & 6) === 0 ? (rn(0), !1) : !0;
  }
  function Uc() {
    if (w !== null) {
      if (nl === 0) var l = w.return;
      else ((l = w), (Ye = Ut = null), Wi(l), (da = null), (wa = 0), (l = w));
      for (; l !== null; ) (Vd(l.alternate, l), (l = l.return));
      w = null;
    }
  }
  function pa(l, e) {
    var t = l.timeoutHandle;
    (t !== -1 && ((l.timeoutHandle = -1), _0(t)),
      (t = l.cancelPendingCommit),
      t !== null && ((l.cancelPendingCommit = null), t()),
      (We = 0),
      Uc(),
      (ol = l),
      (w = t = qe(l.current, null)),
      (W = e),
      (nl = 0),
      (se = null),
      (ot = !1),
      (ya = Ma(l, e)),
      (Ac = !1),
      (ba = de = _c = Zt = rt = Sl = 0),
      (le = dn = null),
      (Dc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ne(a),
          u = 1 << n;
        ((e |= l[n]), (a &= ~u));
      }
    return ((ke = e), Xn(), t);
  }
  function vo(l, e) {
    ((L = null),
      (x.H = en),
      e === sa || e === Wn
        ? ((e = Ms()), (nl = 3))
        : e === Bi
          ? ((e = Ms()), (nl = 4))
          : (nl =
              e === oc
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (se = e),
      w === null && ((Sl = 1), su(l, ve(e, l.current))));
  }
  function go() {
    var l = ce.current;
    return l === null
      ? !0
      : (W & 4194048) === W
        ? xe === null
        : (W & 62914560) === W || (W & 536870912) !== 0
          ? l === xe
          : !1;
  }
  function yo() {
    var l = x.H;
    return ((x.H = en), l === null ? en : l);
  }
  function bo() {
    var l = x.A;
    return ((x.A = i0), l);
  }
  function Su() {
    ((Sl = 4),
      ot || ((W & 4194048) !== W && ce.current !== null) || (ya = !0),
      ((rt & 134217727) === 0 && (Zt & 134217727) === 0) ||
        ol === null ||
        vt(ol, W, de, !1));
  }
  function Rc(l, e, t) {
    var a = tl;
    tl |= 2;
    var n = yo(),
      u = bo();
    ((ol !== l || W !== e) && ((xu = null), pa(l, e)), (e = !1));
    var i = Sl;
    l: do
      try {
        if (nl !== 0 && w !== null) {
          var f = w,
            s = se;
          switch (nl) {
            case 8:
              (Uc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              ce.current === null && (e = !0);
              var h = nl;
              if (((nl = 0), (se = null), Sa(l, f, s, h), t && ya)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((h = nl), (nl = 0), (se = null), Sa(l, f, s, h));
          }
        }
        (s0(), (i = Sl));
        break;
      } catch (b) {
        vo(l, b);
      }
    while (!0);
    return (
      e && l.shellSuspendCounter++,
      (Ye = Ut = null),
      (tl = a),
      (x.H = n),
      (x.A = u),
      w === null && ((ol = null), (W = 0), Xn()),
      i
    );
  }
  function s0() {
    for (; w !== null; ) xo(w);
  }
  function d0(l, e) {
    var t = tl;
    tl |= 2;
    var a = yo(),
      n = bo();
    ol !== l || W !== e
      ? ((xu = null), (bu = te() + 500), pa(l, e))
      : (ya = Ma(l, e));
    l: do
      try {
        if (nl !== 0 && w !== null) {
          e = w;
          var u = se;
          e: switch (nl) {
            case 1:
              ((nl = 0), (se = null), Sa(l, e, u, 1));
              break;
            case 2:
            case 9:
              if (_s(u)) {
                ((nl = 0), (se = null), po(e));
                break;
              }
              ((e = function () {
                ((nl !== 2 && nl !== 9) || ol !== l || (nl = 7), Oe(l));
              }),
                u.then(e, e));
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              _s(u)
                ? ((nl = 0), (se = null), po(e))
                : ((nl = 0), (se = null), Sa(l, e, u, 7));
              break;
            case 5:
              var i = null;
              switch (w.tag) {
                case 26:
                  i = w.memoizedState;
                case 5:
                case 27:
                  var f = w;
                  if (i ? ur(i) : f.stateNode.complete) {
                    ((nl = 0), (se = null));
                    var s = f.sibling;
                    if (s !== null) w = s;
                    else {
                      var h = f.return;
                      h !== null ? ((w = h), zu(h)) : (w = null);
                    }
                    break e;
                  }
              }
              ((nl = 0), (se = null), Sa(l, e, u, 5));
              break;
            case 6:
              ((nl = 0), (se = null), Sa(l, e, u, 6));
              break;
            case 8:
              (Uc(), (Sl = 6));
              break l;
            default:
              throw Error(g(462));
          }
        }
        o0();
        break;
      } catch (b) {
        vo(l, b);
      }
    while (!0);
    return (
      (Ye = Ut = null),
      (x.H = a),
      (x.A = n),
      (tl = t),
      w !== null ? 0 : ((ol = null), (W = 0), Xn(), Sl)
    );
  }
  function o0() {
    for (; w !== null && !Rr(); ) xo(w);
  }
  function xo(l) {
    var e = Zd(l.alternate, l, ke);
    ((l.memoizedProps = l.pendingProps), e === null ? zu(l) : (w = e));
  }
  function po(l) {
    var e = l,
      t = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = qd(t, e, e.pendingProps, e.type, void 0, W);
        break;
      case 11:
        e = qd(t, e, e.pendingProps, e.type.render, e.ref, W);
        break;
      case 5:
        Wi(e);
      default:
        (Vd(t, e), (e = w = ys(e, ke)), (e = Zd(t, e, ke)));
    }
    ((l.memoizedProps = l.pendingProps), e === null ? zu(l) : (w = e));
  }
  function Sa(l, e, t, a) {
    ((Ye = Ut = null), Wi(e), (da = null), (wa = 0));
    var n = e.return;
    try {
      if (Pm(l, n, e, t, W)) {
        ((Sl = 1), su(l, ve(t, l.current)), (w = null));
        return;
      }
    } catch (u) {
      if (n !== null) throw ((w = n), u);
      ((Sl = 1), su(l, ve(t, l.current)), (w = null));
      return;
    }
    e.flags & 32768
      ? (P || a === 1
          ? (l = !0)
          : ya || (W & 536870912) !== 0
            ? (l = !1)
            : ((ot = l = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = ce.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        So(e, l))
      : zu(e);
  }
  function zu(l) {
    var e = l;
    do {
      if ((e.flags & 32768) !== 0) {
        So(e, ot);
        return;
      }
      l = e.return;
      var t = t0(e.alternate, e, ke);
      if (t !== null) {
        w = t;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        w = e;
        return;
      }
      w = e = l;
    } while (e !== null);
    Sl === 0 && (Sl = 5);
  }
  function So(l, e) {
    do {
      var t = a0(l.alternate, l);
      if (t !== null) {
        ((t.flags &= 32767), (w = t));
        return;
      }
      if (
        ((t = l.return),
        t !== null &&
          ((t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null)),
        !e && ((l = l.sibling), l !== null))
      ) {
        w = l;
        return;
      }
      w = l = t;
    } while (l !== null);
    ((Sl = 6), (w = null));
  }
  function zo(l, e, t, a, n, u, i, f, s) {
    l.cancelPendingCommit = null;
    do Nu();
    while (Dl !== 0);
    if ((tl & 6) !== 0) throw Error(g(327));
    if (e !== null) {
      if (e === l.current) throw Error(g(177));
      if (
        ((u = e.lanes | e.childLanes),
        (u |= zi),
        Vr(l, t, u, i, f, s),
        l === ol && ((w = ol = null), (W = 0)),
        (xa = e),
        (ht = l),
        (We = t),
        (Mc = u),
        (Oc = n),
        (oo = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            v0(Tn, function () {
              return (Ao(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = x.T), (x.T = null), (n = E.p), (E.p = 2), (i = tl), (tl |= 4));
        try {
          n0(l, e, t);
        } finally {
          ((tl = i), (E.p = n), (x.T = a));
        }
      }
      ((Dl = 1), No(), jo(), To());
    }
  }
  function No() {
    if (Dl === 1) {
      Dl = 0;
      var l = ht,
        e = xa,
        t = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || t) {
        ((t = x.T), (x.T = null));
        var a = E.p;
        E.p = 2;
        var n = tl;
        tl |= 4;
        try {
          to(e, l);
          var u = Jc,
            i = fs(l.containerInfo),
            f = u.focusedElem,
            s = u.selectionRange;
          if (
            i !== f &&
            f &&
            f.ownerDocument &&
            cs(f.ownerDocument.documentElement, f)
          ) {
            if (s !== null && yi(f)) {
              var h = s.start,
                b = s.end;
              if ((b === void 0 && (b = h), "selectionStart" in f))
                ((f.selectionStart = h),
                  (f.selectionEnd = Math.min(b, f.value.length)));
              else {
                var z = f.ownerDocument || document,
                  v = (z && z.defaultView) || window;
                if (v.getSelection) {
                  var y = v.getSelection(),
                    _ = f.textContent.length,
                    R = Math.min(s.start, _),
                    sl = s.end === void 0 ? R : Math.min(s.end, _);
                  !y.extend && R > sl && ((i = sl), (sl = R), (R = i));
                  var r = is(f, R),
                    d = is(f, sl);
                  if (
                    r &&
                    d &&
                    (y.rangeCount !== 1 ||
                      y.anchorNode !== r.node ||
                      y.anchorOffset !== r.offset ||
                      y.focusNode !== d.node ||
                      y.focusOffset !== d.offset)
                  ) {
                    var m = z.createRange();
                    (m.setStart(r.node, r.offset),
                      y.removeAllRanges(),
                      R > sl
                        ? (y.addRange(m), y.extend(d.node, d.offset))
                        : (m.setEnd(d.node, d.offset), y.addRange(m)));
                  }
                }
              }
            }
            for (z = [], y = f; (y = y.parentNode); )
              y.nodeType === 1 &&
                z.push({ element: y, left: y.scrollLeft, top: y.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < z.length;
              f++
            ) {
              var S = z[f];
              ((S.element.scrollLeft = S.left), (S.element.scrollTop = S.top));
            }
          }
          ((Hu = !!Kc), (Jc = Kc = null));
        } finally {
          ((tl = n), (E.p = a), (x.T = t));
        }
      }
      ((l.current = e), (Dl = 2));
    }
  }
  function jo() {
    if (Dl === 2) {
      Dl = 0;
      var l = ht,
        e = xa,
        t = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || t) {
        ((t = x.T), (x.T = null));
        var a = E.p;
        E.p = 2;
        var n = tl;
        tl |= 4;
        try {
          Fd(l, e.alternate, e);
        } finally {
          ((tl = n), (E.p = a), (x.T = t));
        }
      }
      Dl = 3;
    }
  }
  function To() {
    if (Dl === 4 || Dl === 3) {
      ((Dl = 0), Hr());
      var l = ht,
        e = xa,
        t = We,
        a = oo;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Dl = 5)
        : ((Dl = 0), (xa = ht = null), Eo(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (
        (n === 0 && (mt = null),
        Iu(t),
        (e = e.stateNode),
        ae && typeof ae.onCommitFiberRoot == "function")
      )
        try {
          ae.onCommitFiberRoot(Da, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = x.T), (n = E.p), (E.p = 2), (x.T = null));
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var f = a[i];
            u(f.value, { componentStack: f.stack });
          }
        } finally {
          ((x.T = e), (E.p = n));
        }
      }
      ((We & 3) !== 0 && Nu(),
        Oe(l),
        (n = l.pendingLanes),
        (t & 261930) !== 0 && (n & 42) !== 0
          ? l === Cc
            ? on++
            : ((on = 0), (Cc = l))
          : (on = 0),
        rn(0));
    }
  }
  function Eo(l, e) {
    (l.pooledCacheLanes &= e) === 0 &&
      ((e = l.pooledCache), e != null && ((l.pooledCache = null), Ka(e)));
  }
  function Nu() {
    return (No(), jo(), To(), Ao());
  }
  function Ao() {
    if (Dl !== 5) return !1;
    var l = ht,
      e = Mc;
    Mc = 0;
    var t = Iu(We),
      a = x.T,
      n = E.p;
    try {
      ((E.p = 32 > t ? 32 : t), (x.T = null), (t = Oc), (Oc = null));
      var u = ht,
        i = We;
      if (((Dl = 0), (xa = ht = null), (We = 0), (tl & 6) !== 0))
        throw Error(g(331));
      var f = tl;
      if (
        ((tl |= 4),
        co(u.current),
        no(u, u.current, i, t),
        (tl = f),
        rn(0, !1),
        ae && typeof ae.onPostCommitFiberRoot == "function")
      )
        try {
          ae.onPostCommitFiberRoot(Da, u);
        } catch {}
      return !0;
    } finally {
      ((E.p = n), (x.T = a), Eo(l, e));
    }
  }
  function _o(l, e, t) {
    ((e = ve(t, e)),
      (e = dc(l.stateNode, e, 2)),
      (l = ct(l, e, 2)),
      l !== null && (Oa(l, 2), Oe(l)));
  }
  function ul(l, e, t) {
    if (l.tag === 3) _o(l, l, t);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _o(e, l, t);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (mt === null || !mt.has(a)))
          ) {
            ((l = ve(t, l)),
              (t = _d(2)),
              (a = ct(e, t, 2)),
              a !== null && (Dd(t, a, e, l), Oa(a, 2), Oe(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function Hc(l, e, t) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new c0();
      var n = new Set();
      a.set(e, n);
    } else ((n = a.get(e)), n === void 0 && ((n = new Set()), a.set(e, n)));
    n.has(t) ||
      ((Ac = !0), n.add(t), (l = r0.bind(null, l, e, t)), e.then(l, l));
  }
  function r0(l, e, t) {
    var a = l.pingCache;
    (a !== null && a.delete(e),
      (l.pingedLanes |= l.suspendedLanes & t),
      (l.warmLanes &= ~t),
      ol === l &&
        (W & t) === t &&
        (Sl === 4 || (Sl === 3 && (W & 62914560) === W && 300 > te() - yu)
          ? (tl & 2) === 0 && pa(l, 0)
          : (_c |= t),
        ba === W && (ba = 0)),
      Oe(l));
  }
  function Do(l, e) {
    (e === 0 && (e = zf()), (l = Mt(l, e)), l !== null && (Oa(l, e), Oe(l)));
  }
  function m0(l) {
    var e = l.memoizedState,
      t = 0;
    (e !== null && (t = e.retryLane), Do(l, t));
  }
  function h0(l, e) {
    var t = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode,
          n = l.memoizedState;
        n !== null && (t = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(g(314));
    }
    (a !== null && a.delete(e), Do(l, t));
  }
  function v0(l, e) {
    return ku(l, e);
  }
  var ju = null,
    za = null,
    qc = !1,
    Tu = !1,
    Bc = !1,
    gt = 0;
  function Oe(l) {
    (l !== za &&
      l.next === null &&
      (za === null ? (ju = za = l) : (za = za.next = l)),
      (Tu = !0),
      qc || ((qc = !0), y0()));
  }
  function rn(l, e) {
    if (!Bc && Tu) {
      Bc = !0;
      do
        for (var t = !1, a = ju; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes;
              ((u = (1 << (31 - ne(42 | l) + 1)) - 1),
                (u &= n & ~(i & ~f)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((t = !0), Uo(a, u));
          } else
            ((u = W),
              (u = Dn(
                a,
                a === ol ? u : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Ma(a, u) || ((t = !0), Uo(a, u)));
          a = a.next;
        }
      while (t);
      Bc = !1;
    }
  }
  function g0() {
    Mo();
  }
  function Mo() {
    Tu = qc = !1;
    var l = 0;
    gt !== 0 && A0() && (l = gt);
    for (var e = te(), t = null, a = ju; a !== null; ) {
      var n = a.next,
        u = Oo(a, e);
      (u === 0
        ? ((a.next = null),
          t === null ? (ju = n) : (t.next = n),
          n === null && (za = t))
        : ((t = a), (l !== 0 || (u & 3) !== 0) && (Tu = !0)),
        (a = n));
    }
    ((Dl !== 0 && Dl !== 5) || rn(l), gt !== 0 && (gt = 0));
  }
  function Oo(l, e) {
    for (
      var t = l.suspendedLanes,
        a = l.pingedLanes,
        n = l.expirationTimes,
        u = l.pendingLanes & -62914561;
      0 < u;
    ) {
      var i = 31 - ne(u),
        f = 1 << i,
        s = n[i];
      (s === -1
        ? ((f & t) === 0 || (f & a) !== 0) && (n[i] = Lr(f, e))
        : s <= e && (l.expiredLanes |= f),
        (u &= ~f));
    }
    if (
      ((e = ol),
      (t = W),
      (t = Dn(
        l,
        l === e ? t : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (a = l.callbackNode),
      t === 0 ||
        (l === e && (nl === 2 || nl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Wu(a),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((t & 3) === 0 || Ma(l, t)) {
      if (((e = t & -t), e === l.callbackPriority)) return e;
      switch ((a !== null && Wu(a), Iu(t))) {
        case 2:
        case 8:
          t = pf;
          break;
        case 32:
          t = Tn;
          break;
        case 268435456:
          t = Sf;
          break;
        default:
          t = Tn;
      }
      return (
        (a = Co.bind(null, l)),
        (t = ku(t, a)),
        (l.callbackPriority = e),
        (l.callbackNode = t),
        e
      );
    }
    return (
      a !== null && a !== null && Wu(a),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function Co(l, e) {
    if (Dl !== 0 && Dl !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var t = l.callbackNode;
    if (Nu() && l.callbackNode !== t) return null;
    var a = W;
    return (
      (a = Dn(
        l,
        l === ol ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (mo(l, a, e),
          Oo(l, te()),
          l.callbackNode != null && l.callbackNode === t
            ? Co.bind(null, l)
            : null)
    );
  }
  function Uo(l, e) {
    if (Nu()) return null;
    mo(l, e, !0);
  }
  function y0() {
    D0(function () {
      (tl & 6) !== 0 ? ku(xf, g0) : Mo();
    });
  }
  function Yc() {
    if (gt === 0) {
      var l = ca;
      (l === 0 && ((l = En), (En <<= 1), (En & 261888) === 0 && (En = 256)),
        (gt = l));
    }
    return gt;
  }
  function Ro(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Un("" + l);
  }
  function Ho(l, e) {
    var t = e.ownerDocument.createElement("input");
    return (
      (t.name = e.name),
      (t.value = e.value),
      l.id && t.setAttribute("form", l.id),
      e.parentNode.insertBefore(t, e),
      (l = new FormData(l)),
      t.parentNode.removeChild(t),
      l
    );
  }
  function b0(l, e, t, a, n) {
    if (e === "submit" && t && t.stateNode === n) {
      var u = Ro((n[Wl] || null).action),
        i = a.submitter;
      i &&
        ((e = (e = i[Wl] || null)
          ? Ro(e.formAction)
          : i.getAttribute("formAction")),
        e !== null && ((u = e), (i = null)));
      var f = new Bn("action", "action", null, a, n);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (gt !== 0) {
                  var s = i ? Ho(n, i) : new FormData(n);
                  nc(
                    t,
                    { pending: !0, data: s, method: n.method, action: u },
                    null,
                    s,
                  );
                }
              } else
                typeof u == "function" &&
                  (f.preventDefault(),
                  (s = i ? Ho(n, i) : new FormData(n)),
                  nc(
                    t,
                    { pending: !0, data: s, method: n.method, action: u },
                    u,
                    s,
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Gc = 0; Gc < Si.length; Gc++) {
    var Qc = Si[Gc],
      x0 = Qc.toLowerCase(),
      p0 = Qc[0].toUpperCase() + Qc.slice(1);
    Te(x0, "on" + p0);
  }
  (Te(os, "onAnimationEnd"),
    Te(rs, "onAnimationIteration"),
    Te(ms, "onAnimationStart"),
    Te("dblclick", "onDoubleClick"),
    Te("focusin", "onFocus"),
    Te("focusout", "onBlur"),
    Te(qm, "onTransitionRun"),
    Te(Bm, "onTransitionStart"),
    Te(Ym, "onTransitionCancel"),
    Te(hs, "onTransitionEnd"),
    wt("onMouseEnter", ["mouseout", "mouseover"]),
    wt("onMouseLeave", ["mouseout", "mouseover"]),
    wt("onPointerEnter", ["pointerout", "pointerover"]),
    wt("onPointerLeave", ["pointerout", "pointerover"]),
    Et(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Et(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Et("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Et(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Et(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Et(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var mn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    S0 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(mn),
    );
  function qo(l, e) {
    e = (e & 4) !== 0;
    for (var t = 0; t < l.length; t++) {
      var a = l[t],
        n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              h = f.currentTarget;
            if (((f = f.listener), s !== u && n.isPropagationStopped()))
              break l;
            ((u = f), (n.currentTarget = h));
            try {
              u(n);
            } catch (b) {
              Qn(b);
            }
            ((n.currentTarget = null), (u = s));
          }
        else
          for (i = 0; i < a.length; i++) {
            if (
              ((f = a[i]),
              (s = f.instance),
              (h = f.currentTarget),
              (f = f.listener),
              s !== u && n.isPropagationStopped())
            )
              break l;
            ((u = f), (n.currentTarget = h));
            try {
              u(n);
            } catch (b) {
              Qn(b);
            }
            ((n.currentTarget = null), (u = s));
          }
      }
    }
  }
  function k(l, e) {
    var t = e[Pu];
    t === void 0 && (t = e[Pu] = new Set());
    var a = l + "__bubble";
    t.has(a) || (Bo(e, l, 2, !1), t.add(a));
  }
  function Xc(l, e, t) {
    var a = 0;
    (e && (a |= 4), Bo(t, l, a, e));
  }
  var Eu = "_reactListening" + Math.random().toString(36).slice(2);
  function Zc(l) {
    if (!l[Eu]) {
      ((l[Eu] = !0),
        Df.forEach(function (t) {
          t !== "selectionchange" && (S0.has(t) || Xc(t, !1, l), Xc(t, !0, l));
        }));
      var e = l.nodeType === 9 ? l : l.ownerDocument;
      e === null || e[Eu] || ((e[Eu] = !0), Xc("selectionchange", !1, e));
    }
  }
  function Bo(l, e, t, a) {
    switch (rr(e)) {
      case 2:
        var n = W0;
        break;
      case 8:
        n = $0;
        break;
      default:
        n = af;
    }
    ((t = n.bind(null, e, t, l)),
      (n = void 0),
      !fi ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? l.addEventListener(e, t, { capture: !0, passive: n })
          : l.addEventListener(e, t, !0)
        : n !== void 0
          ? l.addEventListener(e, t, { passive: n })
          : l.addEventListener(e, t, !1));
  }
  function Lc(l, e, t, a, n) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      l: for (;;) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo;
          if (f === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag;
              if ((s === 3 || s === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; f !== null; ) {
            if (((i = Vt(f)), i === null)) return;
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = u = i;
              continue l;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    Xf(function () {
      var h = u,
        b = ii(t),
        z = [];
      l: {
        var v = vs.get(l);
        if (v !== void 0) {
          var y = Bn,
            _ = l;
          switch (l) {
            case "keypress":
              if (Hn(t) === 0) break l;
            case "keydown":
            case "keyup":
              y = hm;
              break;
            case "focusin":
              ((_ = "focus"), (y = ri));
              break;
            case "focusout":
              ((_ = "blur"), (y = ri));
              break;
            case "beforeblur":
            case "afterblur":
              y = ri;
              break;
            case "click":
              if (t.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              y = Vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              y = tm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              y = ym;
              break;
            case os:
            case rs:
            case ms:
              y = um;
              break;
            case hs:
              y = xm;
              break;
            case "scroll":
            case "scrollend":
              y = lm;
              break;
            case "wheel":
              y = Sm;
              break;
            case "copy":
            case "cut":
            case "paste":
              y = cm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              y = Jf;
              break;
            case "toggle":
            case "beforetoggle":
              y = Nm;
          }
          var R = (e & 4) !== 0,
            sl = !R && (l === "scroll" || l === "scrollend"),
            r = R ? (v !== null ? v + "Capture" : null) : v;
          R = [];
          for (var d = h, m; d !== null; ) {
            var S = d;
            if (
              ((m = S.stateNode),
              (S = S.tag),
              (S !== 5 && S !== 26 && S !== 27) ||
                m === null ||
                r === null ||
                ((S = Ra(d, r)), S != null && R.push(hn(d, S, m))),
              sl)
            )
              break;
            d = d.return;
          }
          0 < R.length &&
            ((v = new y(v, _, null, t, b)), z.push({ event: v, listeners: R }));
        }
      }
      if ((e & 7) === 0) {
        l: {
          if (
            ((v = l === "mouseover" || l === "pointerover"),
            (y = l === "mouseout" || l === "pointerout"),
            v &&
              t !== ui &&
              (_ = t.relatedTarget || t.fromElement) &&
              (Vt(_) || _[Lt]))
          )
            break l;
          if (
            (y || v) &&
            ((v =
              b.window === b
                ? b
                : (v = b.ownerDocument)
                  ? v.defaultView || v.parentWindow
                  : window),
            y
              ? ((_ = t.relatedTarget || t.toElement),
                (y = h),
                (_ = _ ? Vt(_) : null),
                _ !== null &&
                  ((sl = F(_)),
                  (R = _.tag),
                  _ !== sl || (R !== 5 && R !== 27 && R !== 6)) &&
                  (_ = null))
              : ((y = null), (_ = h)),
            y !== _)
          ) {
            if (
              ((R = Vf),
              (S = "onMouseLeave"),
              (r = "onMouseEnter"),
              (d = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((R = Jf),
                (S = "onPointerLeave"),
                (r = "onPointerEnter"),
                (d = "pointer")),
              (sl = y == null ? v : Ua(y)),
              (m = _ == null ? v : Ua(_)),
              (v = new R(S, d + "leave", y, t, b)),
              (v.target = sl),
              (v.relatedTarget = m),
              (S = null),
              Vt(b) === h &&
                ((R = new R(r, d + "enter", _, t, b)),
                (R.target = m),
                (R.relatedTarget = sl),
                (S = R)),
              (sl = S),
              y && _)
            )
              e: {
                for (R = z0, r = y, d = _, m = 0, S = r; S; S = R(S)) m++;
                S = 0;
                for (var U = d; U; U = R(U)) S++;
                for (; 0 < m - S; ) ((r = R(r)), m--);
                for (; 0 < S - m; ) ((d = R(d)), S--);
                for (; m--; ) {
                  if (r === d || (d !== null && r === d.alternate)) {
                    R = r;
                    break e;
                  }
                  ((r = R(r)), (d = R(d)));
                }
                R = null;
              }
            else R = null;
            (y !== null && Yo(z, v, y, R, !1),
              _ !== null && sl !== null && Yo(z, sl, _, R, !0));
          }
        }
        l: {
          if (
            ((v = h ? Ua(h) : window),
            (y = v.nodeName && v.nodeName.toLowerCase()),
            y === "select" || (y === "input" && v.type === "file"))
          )
            var ll = ls;
          else if (If(v))
            if (es) ll = Um;
            else {
              ll = Om;
              var M = Mm;
            }
          else
            ((y = v.nodeName),
              !y ||
              y.toLowerCase() !== "input" ||
              (v.type !== "checkbox" && v.type !== "radio")
                ? h && ni(h.elementType) && (ll = ls)
                : (ll = Cm));
          if (ll && (ll = ll(l, h))) {
            Pf(z, ll, t, b);
            break l;
          }
          (M && M(l, v, h),
            l === "focusout" &&
              h &&
              v.type === "number" &&
              h.memoizedProps.value != null &&
              ai(v, "number", v.value));
        }
        switch (((M = h ? Ua(h) : window), l)) {
          case "focusin":
            (If(M) || M.contentEditable === "true") &&
              ((Pt = M), (bi = h), (Za = null));
            break;
          case "focusout":
            Za = bi = Pt = null;
            break;
          case "mousedown":
            xi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((xi = !1), ss(z, t, b));
            break;
          case "selectionchange":
            if (Hm) break;
          case "keydown":
          case "keyup":
            ss(z, t, b);
        }
        var V;
        if (hi)
          l: {
            switch (l) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break l;
              case "compositionend":
                $ = "onCompositionEnd";
                break l;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break l;
            }
            $ = void 0;
          }
        else
          It
            ? $f(l, t) && ($ = "onCompositionEnd")
            : l === "keydown" &&
              t.keyCode === 229 &&
              ($ = "onCompositionStart");
        ($ &&
          (wf &&
            t.locale !== "ko" &&
            (It || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && It && (V = Zf())
              : ((lt = b),
                (si = "value" in lt ? lt.value : lt.textContent),
                (It = !0))),
          (M = Au(h, $)),
          0 < M.length &&
            (($ = new Kf($, l, null, t, b)),
            z.push({ event: $, listeners: M }),
            V ? ($.data = V) : ((V = Ff(t)), V !== null && ($.data = V)))),
          (V = Tm ? Em(l, t) : Am(l, t)) &&
            (($ = Au(h, "onBeforeInput")),
            0 < $.length &&
              ((M = new Kf("onBeforeInput", "beforeinput", null, t, b)),
              z.push({ event: M, listeners: $ }),
              (M.data = V))),
          b0(z, l, h, t, b));
      }
      qo(z, e);
    });
  }
  function hn(l, e, t) {
    return { instance: l, listener: e, currentTarget: t };
  }
  function Au(l, e) {
    for (var t = e + "Capture", a = []; l !== null; ) {
      var n = l,
        u = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          u === null ||
          ((n = Ra(l, t)),
          n != null && a.unshift(hn(l, n, u)),
          (n = Ra(l, e)),
          n != null && a.push(hn(l, n, u))),
        l.tag === 3)
      )
        return a;
      l = l.return;
    }
    return [];
  }
  function z0(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Yo(l, e, t, a, n) {
    for (var u = e._reactName, i = []; t !== null && t !== a; ) {
      var f = t,
        s = f.alternate,
        h = f.stateNode;
      if (((f = f.tag), s !== null && s === a)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        h === null ||
        ((s = h),
        n
          ? ((h = Ra(t, u)), h != null && i.unshift(hn(t, h, s)))
          : n || ((h = Ra(t, u)), h != null && i.push(hn(t, h, s)))),
        (t = t.return));
    }
    i.length !== 0 && l.push({ event: e, listeners: i });
  }
  var N0 = /\r\n?/g,
    j0 = /\u0000|\uFFFD/g;
  function Go(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        N0,
        `
`,
      )
      .replace(j0, "");
  }
  function Qo(l, e) {
    return ((e = Go(e)), Go(l) === e);
  }
  function fl(l, e, t, a, n, u) {
    switch (t) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || Wt(l, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            Wt(l, "" + a);
        break;
      case "className":
        On(l, "class", a);
        break;
      case "tabIndex":
        On(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        On(l, t, a);
        break;
      case "style":
        Gf(l, a, u);
        break;
      case "data":
        if (e !== "object") {
          On(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || t !== "href")) {
          l.removeAttribute(t);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          l.removeAttribute(t);
          break;
        }
        ((a = Un("" + a)), l.setAttribute(t, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            t,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (t === "formAction"
              ? (e !== "input" && fl(l, e, "name", n.name, n, null),
                fl(l, e, "formEncType", n.formEncType, n, null),
                fl(l, e, "formMethod", n.formMethod, n, null),
                fl(l, e, "formTarget", n.formTarget, n, null))
              : (fl(l, e, "encType", n.encType, n, null),
                fl(l, e, "method", n.method, n, null),
                fl(l, e, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(t);
          break;
        }
        ((a = Un("" + a)), l.setAttribute(t, a));
        break;
      case "onClick":
        a != null && (l.onclick = Re);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(g(61));
          if (((t = a.__html), t != null)) {
            if (n.children != null) throw Error(g(60));
            l.innerHTML = t;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((t = Un("" + a)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(t, "" + a)
          : l.removeAttribute(t);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? l.setAttribute(t, "")
          : l.removeAttribute(t);
        break;
      case "capture":
      case "download":
        a === !0
          ? l.setAttribute(t, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? l.setAttribute(t, a)
            : l.removeAttribute(t);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? l.setAttribute(t, a)
          : l.removeAttribute(t);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? l.removeAttribute(t)
          : l.setAttribute(t, a);
        break;
      case "popover":
        (k("beforetoggle", l), k("toggle", l), Mn(l, "popover", a));
        break;
      case "xlinkActuate":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Ue(l, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Ue(l, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Ue(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Ue(l, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        Mn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
          ((t = Ir.get(t) || t), Mn(l, t, a));
    }
  }
  function Vc(l, e, t, a, n, u) {
    switch (t) {
      case "style":
        Gf(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(g(61));
          if (((t = a.__html), t != null)) {
            if (n.children != null) throw Error(g(60));
            l.innerHTML = t;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? Wt(l, a)
          : (typeof a == "number" || typeof a == "bigint") && Wt(l, "" + a);
        break;
      case "onScroll":
        a != null && k("scroll", l);
        break;
      case "onScrollEnd":
        a != null && k("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Re);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mf.hasOwnProperty(t))
          l: {
            if (
              t[0] === "o" &&
              t[1] === "n" &&
              ((n = t.endsWith("Capture")),
              (e = t.slice(2, n ? t.length - 7 : void 0)),
              (u = l[Wl] || null),
              (u = u != null ? u[t] : null),
              typeof u == "function" && l.removeEventListener(e, u, n),
              typeof a == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (t in l
                  ? (l[t] = null)
                  : l.hasAttribute(t) && l.removeAttribute(t)),
                l.addEventListener(e, a, n));
              break l;
            }
            t in l
              ? (l[t] = a)
              : a === !0
                ? l.setAttribute(t, "")
                : Mn(l, t, a);
          }
    }
  }
  function Ql(l, e, t) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (k("error", l), k("load", l));
        var a = !1,
          n = !1,
          u;
        for (u in t)
          if (t.hasOwnProperty(u)) {
            var i = t[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(g(137, e));
                default:
                  fl(l, e, u, i, t, null);
              }
          }
        (n && fl(l, e, "srcSet", t.srcSet, t, null),
          a && fl(l, e, "src", t.src, t, null));
        return;
      case "input":
        k("invalid", l);
        var f = (u = i = n = null),
          s = null,
          h = null;
        for (a in t)
          if (t.hasOwnProperty(a)) {
            var b = t[a];
            if (b != null)
              switch (a) {
                case "name":
                  n = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  s = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  u = b;
                  break;
                case "defaultValue":
                  f = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(g(137, e));
                  break;
                default:
                  fl(l, e, a, b, t, null);
              }
          }
        Hf(l, u, f, s, h, i, n, !1);
        return;
      case "select":
        (k("invalid", l), (a = i = u = null));
        for (n in t)
          if (t.hasOwnProperty(n) && ((f = t[n]), f != null))
            switch (n) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                i = f;
                break;
              case "multiple":
                a = f;
              default:
                fl(l, e, n, f, t, null);
            }
        ((e = u),
          (t = i),
          (l.multiple = !!a),
          e != null ? kt(l, !!a, e, !1) : t != null && kt(l, !!a, t, !0));
        return;
      case "textarea":
        (k("invalid", l), (u = n = a = null));
        for (i in t)
          if (t.hasOwnProperty(i) && ((f = t[i]), f != null))
            switch (i) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                n = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(g(91));
                break;
              default:
                fl(l, e, i, f, t, null);
            }
        Bf(l, a, n, u);
        return;
      case "option":
        for (s in t)
          if (t.hasOwnProperty(s) && ((a = t[s]), a != null))
            switch (s) {
              case "selected":
                l.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                fl(l, e, s, a, t, null);
            }
        return;
      case "dialog":
        (k("beforetoggle", l), k("toggle", l), k("cancel", l), k("close", l));
        break;
      case "iframe":
      case "object":
        k("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < mn.length; a++) k(mn[a], l);
        break;
      case "image":
        (k("error", l), k("load", l));
        break;
      case "details":
        k("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (k("error", l), k("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in t)
          if (t.hasOwnProperty(h) && ((a = t[h]), a != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(g(137, e));
              default:
                fl(l, e, h, a, t, null);
            }
        return;
      default:
        if (ni(e)) {
          for (b in t)
            t.hasOwnProperty(b) &&
              ((a = t[b]), a !== void 0 && Vc(l, e, b, a, t, void 0));
          return;
        }
    }
    for (f in t)
      t.hasOwnProperty(f) && ((a = t[f]), a != null && fl(l, e, f, a, t, null));
  }
  function T0(l, e, t, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          u = null,
          i = null,
          f = null,
          s = null,
          h = null,
          b = null;
        for (y in t) {
          var z = t[y];
          if (t.hasOwnProperty(y) && z != null)
            switch (y) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                s = z;
              default:
                a.hasOwnProperty(y) || fl(l, e, y, null, a, z);
            }
        }
        for (var v in a) {
          var y = a[v];
          if (((z = t[v]), a.hasOwnProperty(v) && (y != null || z != null)))
            switch (v) {
              case "type":
                u = y;
                break;
              case "name":
                n = y;
                break;
              case "checked":
                h = y;
                break;
              case "defaultChecked":
                b = y;
                break;
              case "value":
                i = y;
                break;
              case "defaultValue":
                f = y;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(g(137, e));
                break;
              default:
                y !== z && fl(l, e, v, y, a, z);
            }
        }
        ti(l, i, f, s, h, b, u, n);
        return;
      case "select":
        y = i = f = v = null;
        for (u in t)
          if (((s = t[u]), t.hasOwnProperty(u) && s != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                y = s;
              default:
                a.hasOwnProperty(u) || fl(l, e, u, null, a, s);
            }
        for (n in a)
          if (
            ((u = a[n]),
            (s = t[n]),
            a.hasOwnProperty(n) && (u != null || s != null))
          )
            switch (n) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                f = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== s && fl(l, e, n, u, a, s);
            }
        ((e = f),
          (t = i),
          (a = y),
          v != null
            ? kt(l, !!t, v, !1)
            : !!a != !!t &&
              (e != null ? kt(l, !!t, e, !0) : kt(l, !!t, t ? [] : "", !1)));
        return;
      case "textarea":
        y = v = null;
        for (f in t)
          if (
            ((n = t[f]),
            t.hasOwnProperty(f) && n != null && !a.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, e, f, null, a, n);
            }
        for (i in a)
          if (
            ((n = a[i]),
            (u = t[i]),
            a.hasOwnProperty(i) && (n != null || u != null))
          )
            switch (i) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                y = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(g(91));
                break;
              default:
                n !== u && fl(l, e, i, n, a, u);
            }
        qf(l, v, y);
        return;
      case "option":
        for (var _ in t)
          if (
            ((v = t[_]),
            t.hasOwnProperty(_) && v != null && !a.hasOwnProperty(_))
          )
            switch (_) {
              case "selected":
                l.selected = !1;
                break;
              default:
                fl(l, e, _, null, a, v);
            }
        for (s in a)
          if (
            ((v = a[s]),
            (y = t[s]),
            a.hasOwnProperty(s) && v !== y && (v != null || y != null))
          )
            switch (s) {
              case "selected":
                l.selected =
                  v && typeof v != "function" && typeof v != "symbol";
                break;
              default:
                fl(l, e, s, v, a, y);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var R in t)
          ((v = t[R]),
            t.hasOwnProperty(R) &&
              v != null &&
              !a.hasOwnProperty(R) &&
              fl(l, e, R, null, a, v));
        for (h in a)
          if (
            ((v = a[h]),
            (y = t[h]),
            a.hasOwnProperty(h) && v !== y && (v != null || y != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(g(137, e));
                break;
              default:
                fl(l, e, h, v, a, y);
            }
        return;
      default:
        if (ni(e)) {
          for (var sl in t)
            ((v = t[sl]),
              t.hasOwnProperty(sl) &&
                v !== void 0 &&
                !a.hasOwnProperty(sl) &&
                Vc(l, e, sl, void 0, a, v));
          for (b in a)
            ((v = a[b]),
              (y = t[b]),
              !a.hasOwnProperty(b) ||
                v === y ||
                (v === void 0 && y === void 0) ||
                Vc(l, e, b, v, a, y));
          return;
        }
    }
    for (var r in t)
      ((v = t[r]),
        t.hasOwnProperty(r) &&
          v != null &&
          !a.hasOwnProperty(r) &&
          fl(l, e, r, null, a, v));
    for (z in a)
      ((v = a[z]),
        (y = t[z]),
        !a.hasOwnProperty(z) ||
          v === y ||
          (v == null && y == null) ||
          fl(l, e, z, v, a, y));
  }
  function Xo(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function E0() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, e = 0, t = performance.getEntriesByType("resource"), a = 0;
        a < t.length;
        a++
      ) {
        var n = t[a],
          u = n.transferSize,
          i = n.initiatorType,
          f = n.duration;
        if (u && f && Xo(i)) {
          for (i = 0, f = n.responseEnd, a += 1; a < t.length; a++) {
            var s = t[a],
              h = s.startTime;
            if (h > f) break;
            var b = s.transferSize,
              z = s.initiatorType;
            b &&
              Xo(z) &&
              ((s = s.responseEnd), (i += b * (s < f ? 1 : (f - h) / (s - h))));
          }
          if ((--a, (e += (8 * (u + i)) / (n.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return e / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Kc = null,
    Jc = null;
  function _u(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Zo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Lo(l, e) {
    if (l === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && e === "foreignObject" ? 0 : l;
  }
  function wc(l, e) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var kc = null;
  function A0() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === kc
        ? !1
        : ((kc = l), !0)
      : ((kc = null), !1);
  }
  var Vo = typeof setTimeout == "function" ? setTimeout : void 0,
    _0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ko = typeof Promise == "function" ? Promise : void 0,
    D0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Ko < "u"
          ? function (l) {
              return Ko.resolve(null).then(l).catch(M0);
            }
          : Vo;
  function M0(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function yt(l) {
    return l === "head";
  }
  function Jo(l, e) {
    var t = e,
      a = 0;
    do {
      var n = t.nextSibling;
      if ((l.removeChild(t), n && n.nodeType === 8))
        if (((t = n.data), t === "/$" || t === "/&")) {
          if (a === 0) {
            (l.removeChild(n), Ea(e));
            return;
          }
          a--;
        } else if (
          t === "$" ||
          t === "$?" ||
          t === "$~" ||
          t === "$!" ||
          t === "&"
        )
          a++;
        else if (t === "html") vn(l.ownerDocument.documentElement);
        else if (t === "head") {
          ((t = l.ownerDocument.head), vn(t));
          for (var u = t.firstChild; u; ) {
            var i = u.nextSibling,
              f = u.nodeName;
            (u[Ca] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              t.removeChild(u),
              (u = i));
          }
        } else t === "body" && vn(l.ownerDocument.body);
      t = n;
    } while (t);
    Ea(e);
  }
  function wo(l, e) {
    var t = l;
    l = 0;
    do {
      var a = t.nextSibling;
      if (
        (t.nodeType === 1
          ? e
            ? ((t._stashedDisplay = t.style.display),
              (t.style.display = "none"))
            : ((t.style.display = t._stashedDisplay || ""),
              t.getAttribute("style") === "" && t.removeAttribute("style"))
          : t.nodeType === 3 &&
            (e
              ? ((t._stashedText = t.nodeValue), (t.nodeValue = ""))
              : (t.nodeValue = t._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((t = a.data), t === "/$")) {
          if (l === 0) break;
          l--;
        } else (t !== "$" && t !== "$?" && t !== "$~" && t !== "$!") || l++;
      t = a;
    } while (t);
  }
  function Wc(l) {
    var e = l.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var t = e;
      switch (((e = e.nextSibling), t.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Wc(t), li(t));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (t.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(t);
    }
  }
  function O0(l, e, t, a) {
    for (; l.nodeType === 1; ) {
      var n = t;
      if (l.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (a) {
        if (!l[Ca])
          switch (e) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((u = l.getAttribute("rel")),
                u === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== n.rel ||
                l.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                l.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                l.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((u = l.getAttribute("src")),
                (u !== (n.src == null ? null : n.src) ||
                  l.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  l.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  u &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (e === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u) return l;
      } else return l;
      if (((l = pe(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function C0(l, e, t) {
    if (e === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = pe(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function ko(l, e) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !e) ||
        ((l = pe(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function $c(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Fc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function U0(l, e) {
    var t = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = e;
    else if (l.data !== "$?" || t.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), t.removeEventListener("DOMContentLoaded", a));
      };
      (t.addEventListener("DOMContentLoaded", a), (l._reactRetry = a));
    }
  }
  function pe(l) {
    for (; l != null; l = l.nextSibling) {
      var e = l.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = l.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return l;
  }
  var Ic = null;
  function Wo(l) {
    l = l.nextSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "/$" || t === "/&") {
          if (e === 0) return pe(l.nextSibling);
          e--;
        } else
          (t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&") ||
            e++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function $o(l) {
    l = l.previousSibling;
    for (var e = 0; l; ) {
      if (l.nodeType === 8) {
        var t = l.data;
        if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
          if (e === 0) return l;
          e--;
        } else (t !== "/$" && t !== "/&") || e++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Fo(l, e, t) {
    switch (((e = _u(t)), l)) {
      case "html":
        if (((l = e.documentElement), !l)) throw Error(g(452));
        return l;
      case "head":
        if (((l = e.head), !l)) throw Error(g(453));
        return l;
      case "body":
        if (((l = e.body), !l)) throw Error(g(454));
        return l;
      default:
        throw Error(g(451));
    }
  }
  function vn(l) {
    for (var e = l.attributes; e.length; ) l.removeAttributeNode(e[0]);
    li(l);
  }
  var Se = new Map(),
    Io = new Set();
  function Du(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var $e = E.d;
  E.d = { f: R0, r: H0, D: q0, C: B0, L: Y0, m: G0, X: X0, S: Q0, M: Z0 };
  function R0() {
    var l = $e.f(),
      e = pu();
    return l || e;
  }
  function H0(l) {
    var e = Kt(l);
    e !== null && e.tag === 5 && e.type === "form" ? hd(e) : $e.r(l);
  }
  var Na = typeof document > "u" ? null : document;
  function Po(l, e, t) {
    var a = Na;
    if (a && typeof e == "string" && e) {
      var n = me(e);
      ((n = 'link[rel="' + l + '"][href="' + n + '"]'),
        typeof t == "string" && (n += '[crossorigin="' + t + '"]'),
        Io.has(n) ||
          (Io.add(n),
          (l = { rel: l, crossOrigin: t, href: e }),
          a.querySelector(n) === null &&
            ((e = a.createElement("link")),
            Ql(e, "link", l),
            Cl(e),
            a.head.appendChild(e))));
    }
  }
  function q0(l) {
    ($e.D(l), Po("dns-prefetch", l, null));
  }
  function B0(l, e) {
    ($e.C(l, e), Po("preconnect", l, e));
  }
  function Y0(l, e, t) {
    $e.L(l, e, t);
    var a = Na;
    if (a && l && e) {
      var n = 'link[rel="preload"][as="' + me(e) + '"]';
      e === "image" && t && t.imageSrcSet
        ? ((n += '[imagesrcset="' + me(t.imageSrcSet) + '"]'),
          typeof t.imageSizes == "string" &&
            (n += '[imagesizes="' + me(t.imageSizes) + '"]'))
        : (n += '[href="' + me(l) + '"]');
      var u = n;
      switch (e) {
        case "style":
          u = ja(l);
          break;
        case "script":
          u = Ta(l);
      }
      Se.has(u) ||
        ((l = H(
          {
            rel: "preload",
            href: e === "image" && t && t.imageSrcSet ? void 0 : l,
            as: e,
          },
          t,
        )),
        Se.set(u, l),
        a.querySelector(n) !== null ||
          (e === "style" && a.querySelector(gn(u))) ||
          (e === "script" && a.querySelector(yn(u))) ||
          ((e = a.createElement("link")),
          Ql(e, "link", l),
          Cl(e),
          a.head.appendChild(e)));
    }
  }
  function G0(l, e) {
    $e.m(l, e);
    var t = Na;
    if (t && l) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        n =
          'link[rel="modulepreload"][as="' + me(a) + '"][href="' + me(l) + '"]',
        u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ta(l);
      }
      if (
        !Se.has(u) &&
        ((l = H({ rel: "modulepreload", href: l }, e)),
        Se.set(u, l),
        t.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (t.querySelector(yn(u))) return;
        }
        ((a = t.createElement("link")),
          Ql(a, "link", l),
          Cl(a),
          t.head.appendChild(a));
      }
    }
  }
  function Q0(l, e, t) {
    $e.S(l, e, t);
    var a = Na;
    if (a && l) {
      var n = Jt(a).hoistableStyles,
        u = ja(l);
      e = e || "default";
      var i = n.get(u);
      if (!i) {
        var f = { loading: 0, preload: null };
        if ((i = a.querySelector(gn(u)))) f.loading = 5;
        else {
          ((l = H({ rel: "stylesheet", href: l, "data-precedence": e }, t)),
            (t = Se.get(u)) && Pc(l, t));
          var s = (i = a.createElement("link"));
          (Cl(s),
            Ql(s, "link", l),
            (s._p = new Promise(function (h, b) {
              ((s.onload = h), (s.onerror = b));
            })),
            s.addEventListener("load", function () {
              f.loading |= 1;
            }),
            s.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Mu(i, e, a));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: f }),
          n.set(u, i));
      }
    }
  }
  function X0(l, e) {
    $e.X(l, e);
    var t = Na;
    if (t && l) {
      var a = Jt(t).hoistableScripts,
        n = Ta(l),
        u = a.get(n);
      u ||
        ((u = t.querySelector(yn(n))),
        u ||
          ((l = H({ src: l, async: !0 }, e)),
          (e = Se.get(n)) && lf(l, e),
          (u = t.createElement("script")),
          Cl(u),
          Ql(u, "link", l),
          t.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function Z0(l, e) {
    $e.M(l, e);
    var t = Na;
    if (t && l) {
      var a = Jt(t).hoistableScripts,
        n = Ta(l),
        u = a.get(n);
      u ||
        ((u = t.querySelector(yn(n))),
        u ||
          ((l = H({ src: l, async: !0, type: "module" }, e)),
          (e = Se.get(n)) && lf(l, e),
          (u = t.createElement("script")),
          Cl(u),
          Ql(u, "link", l),
          t.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        a.set(n, u));
    }
  }
  function lr(l, e, t, a) {
    var n = (n = J.current) ? Du(n) : null;
    if (!n) throw Error(g(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof t.precedence == "string" && typeof t.href == "string"
          ? ((e = ja(t.href)),
            (t = Jt(n).hoistableStyles),
            (a = t.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              t.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          t.rel === "stylesheet" &&
          typeof t.href == "string" &&
          typeof t.precedence == "string"
        ) {
          l = ja(t.href);
          var u = Jt(n).hoistableStyles,
            i = u.get(l);
          if (
            (i ||
              ((n = n.ownerDocument || n),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(l, i),
              (u = n.querySelector(gn(l))) &&
                !u._p &&
                ((i.instance = u), (i.state.loading = 5)),
              Se.has(l) ||
                ((t = {
                  rel: "preload",
                  as: "style",
                  href: t.href,
                  crossOrigin: t.crossOrigin,
                  integrity: t.integrity,
                  media: t.media,
                  hrefLang: t.hrefLang,
                  referrerPolicy: t.referrerPolicy,
                }),
                Se.set(l, t),
                u || L0(n, l, t, i.state))),
            e && a === null)
          )
            throw Error(g(528, ""));
          return i;
        }
        if (e && a !== null) throw Error(g(529, ""));
        return null;
      case "script":
        return (
          (e = t.async),
          (t = t.src),
          typeof t == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = Ta(t)),
              (t = Jt(n).hoistableScripts),
              (a = t.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                t.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(g(444, l));
    }
  }
  function ja(l) {
    return 'href="' + me(l) + '"';
  }
  function gn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function er(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function L0(l, e, t, a) {
    l.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = l.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        Ql(e, "link", t),
        Cl(e),
        l.head.appendChild(e));
  }
  function Ta(l) {
    return '[src="' + me(l) + '"]';
  }
  function yn(l) {
    return "script[async]" + l;
  }
  function tr(l, e, t) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = l.querySelector('style[data-href~="' + me(t.href) + '"]');
          if (a) return ((e.instance = a), Cl(a), a);
          var n = H({}, t, {
            "data-href": t.href,
            "data-precedence": t.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (l.ownerDocument || l).createElement("style")),
            Cl(a),
            Ql(a, "style", n),
            Mu(a, t.precedence, l),
            (e.instance = a)
          );
        case "stylesheet":
          n = ja(t.href);
          var u = l.querySelector(gn(n));
          if (u) return ((e.state.loading |= 4), (e.instance = u), Cl(u), u);
          ((a = er(t)),
            (n = Se.get(n)) && Pc(a, n),
            (u = (l.ownerDocument || l).createElement("link")),
            Cl(u));
          var i = u;
          return (
            (i._p = new Promise(function (f, s) {
              ((i.onload = f), (i.onerror = s));
            })),
            Ql(u, "link", a),
            (e.state.loading |= 4),
            Mu(u, t.precedence, l),
            (e.instance = u)
          );
        case "script":
          return (
            (u = Ta(t.src)),
            (n = l.querySelector(yn(u)))
              ? ((e.instance = n), Cl(n), n)
              : ((a = t),
                (n = Se.get(u)) && ((a = H({}, t)), lf(a, n)),
                (l = l.ownerDocument || l),
                (n = l.createElement("script")),
                Cl(n),
                Ql(n, "link", a),
                l.head.appendChild(n),
                (e.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(g(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Mu(a, t.precedence, l));
    return e.instance;
  }
  function Mu(l, e, t) {
    for (
      var a = t.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        n = a.length ? a[a.length - 1] : null,
        u = n,
        i = 0;
      i < a.length;
      i++
    ) {
      var f = a[i];
      if (f.dataset.precedence === e) u = f;
      else if (u !== n) break;
    }
    u
      ? u.parentNode.insertBefore(l, u.nextSibling)
      : ((e = t.nodeType === 9 ? t.head : t), e.insertBefore(l, e.firstChild));
  }
  function Pc(l, e) {
    (l.crossOrigin == null && (l.crossOrigin = e.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy),
      l.title == null && (l.title = e.title));
  }
  function lf(l, e) {
    (l.crossOrigin == null && (l.crossOrigin = e.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = e.referrerPolicy),
      l.integrity == null && (l.integrity = e.integrity));
  }
  var Ou = null;
  function ar(l, e, t) {
    if (Ou === null) {
      var a = new Map(),
        n = (Ou = new Map());
      n.set(t, a);
    } else ((n = Ou), (a = n.get(t)), a || ((a = new Map()), n.set(t, a)));
    if (a.has(l)) return a;
    for (
      a.set(l, null), t = t.getElementsByTagName(l), n = 0;
      n < t.length;
      n++
    ) {
      var u = t[n];
      if (
        !(
          u[Ca] ||
          u[ql] ||
          (l === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = u.getAttribute(e) || "";
        i = l + i;
        var f = a.get(i);
        f ? f.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function nr(l, e, t) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        t,
        e === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function V0(l, e, t) {
    if (t === 1 || e.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (l = e.disabled),
              typeof e.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ur(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function K0(l, e, t, a) {
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = ja(a.href),
          u = e.querySelector(gn(n));
        if (u) {
          ((e = u._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = Cu.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = u),
            Cl(u));
          return;
        }
        ((u = e.ownerDocument || e),
          (a = er(a)),
          (n = Se.get(n)) && Pc(a, n),
          (u = u.createElement("link")),
          Cl(u));
        var i = u;
        ((i._p = new Promise(function (f, s) {
          ((i.onload = f), (i.onerror = s));
        })),
          Ql(u, "link", a),
          (t.instance = u));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (l.count++,
          (t = Cu.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t)));
    }
  }
  var ef = 0;
  function J0(l, e) {
    return (
      l.stylesheets && l.count === 0 && Ru(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (t) {
            var a = setTimeout(function () {
              if ((l.stylesheets && Ru(l, l.stylesheets), l.unsuspend)) {
                var u = l.unsuspend;
                ((l.unsuspend = null), u());
              }
            }, 6e4 + e);
            0 < l.imgBytes && ef === 0 && (ef = 62500 * E0());
            var n = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Ru(l, l.stylesheets), l.unsuspend))
                ) {
                  var u = l.unsuspend;
                  ((l.unsuspend = null), u());
                }
              },
              (l.imgBytes > ef ? 50 : 800) + e,
            );
            return (
              (l.unsuspend = t),
              function () {
                ((l.unsuspend = null), clearTimeout(a), clearTimeout(n));
              }
            );
          }
        : null
    );
  }
  function Cu() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Ru(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Uu = null;
  function Ru(l, e) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Uu = new Map()),
        e.forEach(w0, l),
        (Uu = null),
        Cu.call(l)));
  }
  function w0(l, e) {
    if (!(e.state.loading & 4)) {
      var t = Uu.get(l);
      if (t) var a = t.get(null);
      else {
        ((t = new Map()), Uu.set(l, t));
        for (
          var n = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < n.length;
          u++
        ) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (t.set(i.dataset.precedence, i), (a = i));
        }
        a && t.set(null, a);
      }
      ((n = e.instance),
        (i = n.getAttribute("data-precedence")),
        (u = t.get(i) || a),
        u === a && t.set(null, n),
        t.set(i, n),
        this.count++,
        (a = Cu.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        u
          ? u.parentNode.insertBefore(n, u.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(n, l.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var bn = {
    $$typeof: xl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0,
  };
  function k0(l, e, t, a, n, u, i, f, s) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = $u(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = $u(0)),
      (this.hiddenUpdates = $u(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = u),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = s),
      (this.incompleteTransitions = new Map()));
  }
  function ir(l, e, t, a, n, u, i, f, s, h, b, z) {
    return (
      (l = new k0(l, e, t, i, s, h, b, z, f)),
      (e = 1),
      u === !0 && (e |= 24),
      (u = ie(3, null, null, e)),
      (l.current = u),
      (u.stateNode = l),
      (e = Ri()),
      e.refCount++,
      (l.pooledCache = e),
      e.refCount++,
      (u.memoizedState = { element: a, isDehydrated: t, cache: e }),
      Yi(u),
      l
    );
  }
  function cr(l) {
    return l ? ((l = ta), l) : ta;
  }
  function fr(l, e, t, a, n, u) {
    ((n = cr(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = it(e)),
      (a.payload = { element: t }),
      (u = u === void 0 ? null : u),
      u !== null && (a.callback = u),
      (t = ct(l, a, e)),
      t !== null && (ee(t, l, e), Wa(t, l, e)));
  }
  function sr(l, e) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var t = l.retryLane;
      l.retryLane = t !== 0 && t < e ? t : e;
    }
  }
  function tf(l, e) {
    (sr(l, e), (l = l.alternate) && sr(l, e));
  }
  function dr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = Mt(l, 67108864);
      (e !== null && ee(e, l, 67108864), tf(l, 67108864));
    }
  }
  function or(l) {
    if (l.tag === 13 || l.tag === 31) {
      var e = oe();
      e = Fu(e);
      var t = Mt(l, e);
      (t !== null && ee(t, l, e), tf(l, e));
    }
  }
  var Hu = !0;
  function W0(l, e, t, a) {
    var n = x.T;
    x.T = null;
    var u = E.p;
    try {
      ((E.p = 2), af(l, e, t, a));
    } finally {
      ((E.p = u), (x.T = n));
    }
  }
  function $0(l, e, t, a) {
    var n = x.T;
    x.T = null;
    var u = E.p;
    try {
      ((E.p = 8), af(l, e, t, a));
    } finally {
      ((E.p = u), (x.T = n));
    }
  }
  function af(l, e, t, a) {
    if (Hu) {
      var n = nf(a);
      if (n === null) (Lc(l, e, a, qu, t), mr(l, a));
      else if (I0(n, l, e, t, a)) a.stopPropagation();
      else if ((mr(l, a), e & 4 && -1 < F0.indexOf(l))) {
        for (; n !== null; ) {
          var u = Kt(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var i = Tt(u.pendingLanes);
                  if (i !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - ne(i));
                      ((f.entanglements[1] |= s), (i &= ~s));
                    }
                    (Oe(u), (tl & 6) === 0 && ((bu = te() + 500), rn(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Mt(u, 2)), f !== null && ee(f, u, 2), pu(), tf(u, 2));
            }
          if (((u = nf(a)), u === null && Lc(l, e, a, qu, t), u === n)) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else Lc(l, e, a, null, t);
    }
  }
  function nf(l) {
    return ((l = ii(l)), uf(l));
  }
  var qu = null;
  function uf(l) {
    if (((qu = null), (l = Vt(l)), l !== null)) {
      var e = F(l);
      if (e === null) l = null;
      else {
        var t = e.tag;
        if (t === 13) {
          if (((l = O(e)), l !== null)) return l;
          l = null;
        } else if (t === 31) {
          if (((l = hl(e)), l !== null)) return l;
          l = null;
        } else if (t === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          l = null;
        } else e !== l && (l = null);
      }
    }
    return ((qu = l), null);
  }
  function rr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qr()) {
          case xf:
            return 2;
          case pf:
            return 8;
          case Tn:
          case Br:
            return 32;
          case Sf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var cf = !1,
    bt = null,
    xt = null,
    pt = null,
    xn = new Map(),
    pn = new Map(),
    St = [],
    F0 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function mr(l, e) {
    switch (l) {
      case "focusin":
      case "focusout":
        bt = null;
        break;
      case "dragenter":
      case "dragleave":
        xt = null;
        break;
      case "mouseover":
      case "mouseout":
        pt = null;
        break;
      case "pointerover":
      case "pointerout":
        xn.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        pn.delete(e.pointerId);
    }
  }
  function Sn(l, e, t, a, n, u) {
    return l === null || l.nativeEvent !== u
      ? ((l = {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: a,
          nativeEvent: u,
          targetContainers: [n],
        }),
        e !== null && ((e = Kt(e)), e !== null && dr(e)),
        l)
      : ((l.eventSystemFlags |= a),
        (e = l.targetContainers),
        n !== null && e.indexOf(n) === -1 && e.push(n),
        l);
  }
  function I0(l, e, t, a, n) {
    switch (e) {
      case "focusin":
        return ((bt = Sn(bt, l, e, t, a, n)), !0);
      case "dragenter":
        return ((xt = Sn(xt, l, e, t, a, n)), !0);
      case "mouseover":
        return ((pt = Sn(pt, l, e, t, a, n)), !0);
      case "pointerover":
        var u = n.pointerId;
        return (xn.set(u, Sn(xn.get(u) || null, l, e, t, a, n)), !0);
      case "gotpointercapture":
        return (
          (u = n.pointerId),
          pn.set(u, Sn(pn.get(u) || null, l, e, t, a, n)),
          !0
        );
    }
    return !1;
  }
  function hr(l) {
    var e = Vt(l.target);
    if (e !== null) {
      var t = F(e);
      if (t !== null) {
        if (((e = t.tag), e === 13)) {
          if (((e = O(t)), e !== null)) {
            ((l.blockedOn = e),
              Af(l.priority, function () {
                or(t);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = hl(t)), e !== null)) {
            ((l.blockedOn = e),
              Af(l.priority, function () {
                or(t);
              }));
            return;
          }
        } else if (e === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Bu(l) {
    if (l.blockedOn !== null) return !1;
    for (var e = l.targetContainers; 0 < e.length; ) {
      var t = nf(l.nativeEvent);
      if (t === null) {
        t = l.nativeEvent;
        var a = new t.constructor(t.type, t);
        ((ui = a), t.target.dispatchEvent(a), (ui = null));
      } else return ((e = Kt(t)), e !== null && dr(e), (l.blockedOn = t), !1);
      e.shift();
    }
    return !0;
  }
  function vr(l, e, t) {
    Bu(l) && t.delete(e);
  }
  function P0() {
    ((cf = !1),
      bt !== null && Bu(bt) && (bt = null),
      xt !== null && Bu(xt) && (xt = null),
      pt !== null && Bu(pt) && (pt = null),
      xn.forEach(vr),
      pn.forEach(vr));
  }
  function Yu(l, e) {
    l.blockedOn === e &&
      ((l.blockedOn = null),
      cf ||
        ((cf = !0),
        p.unstable_scheduleCallback(p.unstable_NormalPriority, P0)));
  }
  var Gu = null;
  function gr(l) {
    Gu !== l &&
      ((Gu = l),
      p.unstable_scheduleCallback(p.unstable_NormalPriority, function () {
        Gu === l && (Gu = null);
        for (var e = 0; e < l.length; e += 3) {
          var t = l[e],
            a = l[e + 1],
            n = l[e + 2];
          if (typeof a != "function") {
            if (uf(a || t) === null) continue;
            break;
          }
          var u = Kt(t);
          u !== null &&
            (l.splice(e, 3),
            (e -= 3),
            nc(u, { pending: !0, data: n, method: t.method, action: a }, a, n));
        }
      }));
  }
  function Ea(l) {
    function e(s) {
      return Yu(s, l);
    }
    (bt !== null && Yu(bt, l),
      xt !== null && Yu(xt, l),
      pt !== null && Yu(pt, l),
      xn.forEach(e),
      pn.forEach(e));
    for (var t = 0; t < St.length; t++) {
      var a = St[t];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < St.length && ((t = St[0]), t.blockedOn === null); )
      (hr(t), t.blockedOn === null && St.shift());
    if (((t = (l.ownerDocument || l).$$reactFormReplay), t != null))
      for (a = 0; a < t.length; a += 3) {
        var n = t[a],
          u = t[a + 1],
          i = n[Wl] || null;
        if (typeof u == "function") i || gr(t);
        else if (i) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (((n = u), (i = u[Wl] || null))) f = i.formAction;
            else if (uf(n) !== null) continue;
          } else f = i.action;
          (typeof f == "function" ? (t[a + 1] = f) : (t.splice(a, 3), (a -= 3)),
            gr(t));
        }
      }
  }
  function yr() {
    function l(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (n = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (n !== null && (n(), (n = null)), a || setTimeout(t, 20));
    }
    function t() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        n = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(t, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            n !== null && (n(), (n = null)));
        }
      );
    }
  }
  function ff(l) {
    this._internalRoot = l;
  }
  ((Qu.prototype.render = ff.prototype.render =
    function (l) {
      var e = this._internalRoot;
      if (e === null) throw Error(g(409));
      var t = e.current,
        a = oe();
      fr(t, a, l, e, null, null);
    }),
    (Qu.prototype.unmount = ff.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var e = l.containerInfo;
          (fr(l.current, 2, null, l, null, null), pu(), (e[Lt] = null));
        }
      }));
  function Qu(l) {
    this._internalRoot = l;
  }
  Qu.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var e = Ef();
      l = { blockedOn: null, target: l, priority: e };
      for (var t = 0; t < St.length && e !== 0 && e < St[t].priority; t++);
      (St.splice(t, 0, l), t === 0 && hr(l));
    }
  };
  var br = X.version;
  if (br !== "19.2.3") throw Error(g(527, br, "19.2.3"));
  E.findDOMNode = function (l) {
    var e = l._reactInternals;
    if (e === void 0)
      throw typeof l.render == "function"
        ? Error(g(188))
        : ((l = Object.keys(l).join(",")), Error(g(268, l)));
    return (
      (l = T(e)),
      (l = l !== null ? I(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var lh = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: x,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xu.isDisabled && Xu.supportsFiber)
      try {
        ((Da = Xu.inject(lh)), (ae = Xu));
      } catch {}
  }
  return (
    (Nn.createRoot = function (l, e) {
      if (!Q(l)) throw Error(g(299));
      var t = !1,
        a = "",
        n = jd,
        u = Td,
        i = Ed;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (t = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (n = e.onUncaughtError),
          e.onCaughtError !== void 0 && (u = e.onCaughtError),
          e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
        (e = ir(l, 1, !1, null, null, t, a, null, n, u, i, yr)),
        (l[Lt] = e.current),
        Zc(l),
        new ff(e)
      );
    }),
    (Nn.hydrateRoot = function (l, e, t) {
      if (!Q(l)) throw Error(g(299));
      var a = !1,
        n = "",
        u = jd,
        i = Td,
        f = Ed,
        s = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.formState !== void 0 && (s = t.formState)),
        (e = ir(l, 1, !0, e, t ?? null, a, n, s, u, i, f, yr)),
        (e.context = cr(null)),
        (t = e.current),
        (a = oe()),
        (a = Fu(a)),
        (n = it(a)),
        (n.callback = null),
        ct(t, n, a),
        (t = a),
        (e.current.lanes = t),
        Oa(e, t),
        Oe(e),
        (l[Lt] = e.current),
        Zc(l),
        new Qu(e)
      );
    }),
    (Nn.version = "19.2.3"),
    Nn
  );
}
var _r;
function dh() {
  if (_r) return of.exports;
  _r = 1;
  function p() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p);
      } catch (X) {
        console.error(X);
      }
  }
  return (p(), (of.exports = sh()), of.exports);
}
var oh = dh();
const rh = { tagline: "Cumplimiento RGPD/LOPDGDD para pymes en minutos" },
  Fe = (...p) => p.filter(Boolean).join(" "),
  mh = () => Math.random().toString(36).slice(2, 9),
  Lu = () =>
    new Date().toLocaleDateString("es-ES", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
function Aa(p, X) {
  const [B, g] = Nt.useState(() => {
    try {
      const Q = localStorage.getItem(p);
      return Q ? JSON.parse(Q) : X;
    } catch {
      return X;
    }
  });
  return (
    Nt.useEffect(() => {
      try {
        localStorage.setItem(p, JSON.stringify(B));
      } catch {}
    }, [p, B]),
    [B, g]
  );
}
const hh = {
    razonSocial: "",
    cif: "",
    actividad: "",
    empleados: "2-10",
    direccion: "",
    localidad: "",
    provincia: "",
    cp: "",
    web: "",
    emailDPO: "",
    telefono: "",
    tratamientos: [],
    origenDatos: [],
    cesiones: [],
    transferencias: "no",
    medidas: [],
    videovigilancia: !1,
    ecommerce: !1,
    newsletter: !1,
    cookies: !0,
  },
  vh = [
    "Clientes",
    "Proveedores",
    "Empleados / RRHH",
    "Candidatos",
    "Videovigilancia",
    "Marketing / Newsletter",
    "Usuarios web",
    "Facturación / Contabilidad",
  ],
  gh = [
    "Formulario web",
    "Email",
    "Teléfono",
    "Presencial",
    "Redes sociales",
    "Marketplace",
  ],
  yh = [
    "Asesoría fiscal/laboral",
    "Gestoría",
    "Hosting/Cloud",
    "ERP/CRM",
    "Agencia marketing",
    "Transporte",
  ],
  bh = [
    "Contraseñas seguras",
    "Copias de seguridad",
    "Control de accesos",
    "Cifrado dispositivos",
    "Formación equipo",
    "Registro de accesos",
  ];
function vf({ value: p }) {
  const B = 2 * Math.PI * 36,
    g = B - (p / 100) * B;
  return c.jsxs("svg", {
    width: "88",
    height: "88",
    viewBox: "0 0 88 88",
    className: "shrink-0",
    children: [
      c.jsx("circle", {
        cx: "44",
        cy: "44",
        r: 36,
        stroke: "#e5e7eb",
        strokeWidth: "8",
        fill: "none",
      }),
      c.jsx("circle", {
        cx: "44",
        cy: "44",
        r: 36,
        stroke: "url(#grad)",
        strokeWidth: "8",
        fill: "none",
        strokeDasharray: B,
        strokeDashoffset: g,
        strokeLinecap: "round",
        transform: "rotate(-90 44 44)",
      }),
      c.jsx("defs", {
        children: c.jsxs("linearGradient", {
          id: "grad",
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "1",
          children: [
            c.jsx("stop", { offset: "0%", stopColor: "#7c3aed" }),
            c.jsx("stop", { offset: "100%", stopColor: "#4f46e5" }),
          ],
        }),
      }),
      c.jsxs("text", {
        x: "44",
        y: "48",
        textAnchor: "middle",
        fontSize: "18",
        fontWeight: 700,
        fill: "#111827",
        children: [Math.round(p), "%"],
      }),
    ],
  });
}
function Dr() {
  return c.jsxs("div", {
    className: "rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm",
    children: [
      c.jsxs("div", {
        className: "grid grid-cols-12 gap-3",
        children: [
          c.jsx("div", { className: "col-span-12 h-7 rounded bg-zinc-100" }),
          c.jsx("div", {
            className:
              "col-span-7 h-36 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-inset ring-violet-200",
          }),
          c.jsxs("div", {
            className: "col-span-5 grid grid-rows-3 gap-3",
            children: [
              c.jsx("div", { className: "h-10 rounded bg-zinc-100" }),
              c.jsx("div", { className: "h-10 rounded bg-zinc-100" }),
              c.jsx("div", { className: "h-10 rounded bg-zinc-100" }),
            ],
          }),
          c.jsx("div", {
            className:
              "col-span-4 h-24 rounded-xl bg-zinc-50 ring-1 ring-zinc-200",
          }),
          c.jsx("div", {
            className:
              "col-span-4 h-24 rounded-xl bg-zinc-50 ring-1 ring-zinc-200",
          }),
          c.jsx("div", {
            className:
              "col-span-4 h-24 rounded-xl bg-zinc-50 ring-1 ring-zinc-200",
          }),
        ],
      }),
      c.jsx("p", {
        className: "mt-3 text-center text-xs text-zinc-500",
        children: "Wireframe básico de la landing",
      }),
    ],
  });
}
function Mr(p) {
  const X = p.tratamientos.length
    ? p.tratamientos.join(", ").toLowerCase()
    : "gestión de clientes y proveedores";
  return `
  <h1>Política de Privacidad</h1>
  <p><strong>${p.razonSocial || "[Razón social]"}</strong> (en adelante, "el Responsable"), con CIF ${p.cif || "[CIF]"} y domicilio en ${p.direccion || "[dirección]"}, ${p.cp || ""} ${p.localidad || ""} (${p.provincia || ""}), es titular del sitio web ${p.web || "[web]"}.</p>
  <h2>1. Responsable del tratamiento</h2>
  <p>Email de contacto: ${p.emailDPO || p.telefono || "[contacto]"}.</p>
  <h2>2. Finalidades</h2>
  <p>Tratamos datos para ${X}${p.newsletter ? ", envío de comunicaciones comerciales" : ""}${p.ecommerce ? ", gestión de compras online" : ""}.</p>
  <h2>3. Legitimación</h2>
  <p>Ejecución de contrato, interés legítimo y consentimiento cuando proceda (art. 6 RGPD).</p>
  <h2>4. Conservación</h2>
  <p>Durante la relación y plazos legales aplicables.</p>
  <h2>5. Destinatarios</h2>
  <p>${p.cesiones.length ? p.cesiones.join(", ") : "No se ceden datos salvo obligación legal"}.</p>
  <h2>6. Transferencias internacionales</h2>
  <p>${p.transferencias === "si" ? "Pueden existir. Se adoptan garantías adecuadas." : "No previstas."}</p>
  <h2>7. Derechos</h2>
  <p>Acceso, rectificación, supresión, oposición, limitación y portabilidad. Contacto: ${p.emailDPO || "[email]"}.</p>
  <h2>8. Medidas de seguridad</h2>
  <p>${p.medidas.length ? p.medidas.join(", ") : "Medidas técnicas y organizativas apropiadas"}.</p>
  <p style="margin-top:24px"><small>Última actualización: ${Lu()}</small></p>
  `;
}
function Or(p) {
  const X = p.tratamientos
    .map(
      (B) => `
    <tr>
      <td>${B}</td>
      <td>${p.origenDatos.join(", ") || "Varios"}</td>
      <td>${B.toLowerCase().includes("emplead") ? "Ejecución contrato" : "Interés legítimo / Consentimiento"}</td>
      <td>${p.cesiones.join(", ") || "-"}</td>
      <td>${p.transferencias === "si" ? "Sí" : "No"}</td>
      <td>Plazo legal / relación activa</td>
    </tr>
  `,
    )
    .join("");
  return `
  <h1>Registro de Actividades de Tratamiento</h1>
  <p>Responsable: <strong>${p.razonSocial || "[Razón social]"}</strong> — CIF ${p.cif || "[CIF]"}</p>
  <table border="1" cellspacing="0" cellpadding="6" width="100%">
    <thead><tr><th>Actividad</th><th>Origen</th><th>Base jurídica</th><th>Cesiones</th><th>Transf. int.</th><th>Conservación</th></tr></thead>
    <tbody>${X || '<tr><td colspan="6">Sin actividades definidas</td></tr>'}</tbody>
  </table>
  <p><small>Generado el ${Lu()}</small></p>
  `;
}
function Cr(p) {
  return `
  <h1>Contrato de Encargado del Tratamiento</h1>
  <p>Entre <strong>${p.razonSocial || "[Responsable]"}</strong> (Responsable) y [Nombre del Encargado], con domicilio en [dirección], se acuerda:</p>
  <ol>
    <li><strong>Objeto:</strong> prestación de servicios de ${p.cesiones.join(", ") || "[servicios]"}.</li>
    <li><strong>Duración:</strong> vigencia del servicio.</li>
    <li><strong>Obligaciones del Encargado:</strong> tratar datos solo según instrucciones, confidencialidad, medidas de seguridad, notificación de brechas &lt;72h, subencargos autorizados, devolución/supresión al finalizar.</li>
    <li><strong>Medidas:</strong> ${p.medidas.join(", ") || "apropiadas al riesgo"}.</li>
    <li><strong>Auditoría:</strong> derecho del Responsable a verificar cumplimiento.</li>
  </ol>
  <p>Firmado a ${Lu()}.</p>
  `;
}
function xh(p) {
  return `
  <h1>Política de Cookies</h1>
  <p>En ${p.web || "[web]"} utilizamos cookies propias y de terceros para funcionamiento, analítica y, en su caso, publicidad.</p>
  <ul>
    <li><strong>Técnicas:</strong> necesarias para el funcionamiento.</li>
    <li><strong>Analíticas:</strong> medir uso y mejorar.</li>
    <li><strong>Publicitarias:</strong> ${p.newsletter ? "personalizar contenidos" : "no utilizadas por defecto"}.</li>
  </ul>
  <p>Puede gestionar sus preferencias en cualquier momento.</p>
  <p><small>Actualizado: ${Lu()}</small></p>
  `;
}
function ph(p) {
  return `
  <h1>Aviso Legal</h1>
  <p>Titular: ${p.razonSocial || "[Razón social]"} — CIF ${p.cif || ""}. Domicilio: ${p.direccion || ""}, ${p.cp || ""} ${p.localidad || ""} (${p.provincia || ""}). Contacto: ${p.emailDPO || ""}.</p>
  <p>Propiedad intelectual, uso del sitio, responsabilidades y ley aplicable (España).</p>
  `;
}
function Sh(p) {
  return `
  <h1>Cláusula informativa para empleados</h1>
  <p>${p.razonSocial || "[Empresa]"} tratará sus datos para gestión laboral, nóminas y obligaciones legales. Base: ejecución de contrato y obligación legal. Conservación: plazos laborales y fiscales. Cesiones: asesoría laboral, Seguridad Social, AEAT. Derechos en ${p.emailDPO || "[email]"}.</p>
  `;
}
const zh = {
    politica: Mr,
    rat: Or,
    encargado: Cr,
    cookies: xh,
    avisoLegal: ph,
    clausulaEmpleados: Sh,
  },
  Nh = {
    politica: "Política de Privacidad",
    rat: "Registro de Actividades (RAT)",
    encargado: "Contrato Encargado de Tratamiento",
    cookies: "Política de Cookies",
    avisoLegal: "Aviso Legal",
    clausulaEmpleados: "Cláusula Empleados",
  };
function Zu(p, X) {
  return p.includes(X) ? p.filter((B) => B !== X) : [...p, X];
}
function jh() {
  const [p, X] = Aa("normia_route", "landing"),
    [B, g] = Aa("normia_user", null),
    [Q, F] = Aa("normia_paid", !1),
    [O, hl] = Aa("normia_data", hh),
    [C, T] = Aa("normia_docs", []),
    [I, H] = Aa("normia_checklist", [
      {
        id: "pwd",
        title: "Cambiar contraseñas por defecto",
        detail: "Activa 2FA en servicios críticos.",
        done: !1,
      },
      {
        id: "contratos",
        title: "Firmar contratos con encargados",
        detail: "Asesoría, hosting, CRM, etc.",
        done: !1,
      },
      {
        id: "backup",
        title: "Implementar copias de seguridad",
        detail: "Semanal + prueba de restauración.",
        done: !1,
      },
      {
        id: "formacion",
        title: "Formación básica al equipo",
        detail: "Phishing, contraseñas, protocolos.",
        done: !1,
      },
      {
        id: "registro",
        title: "Publicar textos legales en la web",
        detail: "Política, cookies, aviso legal.",
        done: !1,
      },
    ]),
    [rl, Ll] = Nt.useState(Date.now());
  Nt.useEffect(() => {
    const N = setInterval(() => Ll(Date.now()), 2e3);
    return () => clearInterval(N);
  }, [O]);
  const Ml = Nt.useMemo(() => {
      const N = [
          O.razonSocial,
          O.cif,
          O.actividad,
          O.direccion,
          O.localidad,
          O.provincia,
          O.cp,
          O.web || O.emailDPO,
        ].filter(Boolean).length,
        Y = Math.min(O.tratamientos.length, 4),
        ml = (N / 8) * 60 + (Y / 4) * 25,
        yl = (Math.min(C.length, 4) / 4) * 10,
        Ce = (I.filter((Ne) => Ne.done).length / I.length) * 5;
      return Math.min(100, Math.round(ml + yl + Ce));
    }, [O, C.length, I]),
    Ol = () => {
      const N = [
          "politica",
          "rat",
          "encargado",
          "cookies",
          "avisoLegal",
          "clausulaEmpleados",
        ],
        Y = Date.now(),
        ml = N.map((yl) => ({
          id: mh(),
          type: yl,
          title: Nh[yl],
          createdAt: Y,
          html: zh[yl](O),
        }));
      T(ml);
    },
    ze = async (N) => {
      const Y = window.open("", "_blank");
      Y &&
        (Y.document.write(`
      <html><head><title>${N.title}</title>
      <style>
        body{font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial; padding:40px; color:#111827; line-height:1.6}
        h1{font-size:24px; margin-bottom:12px} h2{font-size:18px; margin-top:20px}
        table{border-collapse:collapse; font-size:12px} th,td{border:1px solid #e5e7eb; padding:6px}
        small{color:#6b7280}
        @page{margin:20mm}
      </style></head><body>${N.html}<script>window.print()<\/script></body></html>
    `),
        Y.document.close());
    },
    Rl = (N, Y) => {
      console.log(`[Normia email] to=${N} subject="${Y}"`);
    },
    [wl, xl] = Nt.useState(1),
    isAlert = Nt.useMemo(() => {
      const searchStr = JSON.stringify(O).toLowerCase();
      return (
        searchStr.includes("salud") ||
        searchStr.includes("riesgo") ||
        searchStr.includes("dpd") ||
        O.dpo === true
      );
    }, [O]),
    annaMessage = Nt.useMemo(() => {
      if (isAlert)
        return "¡Aviso importante! He detectado que tratas datos sensibles o de riesgo. En estos casos, lo mejor es contactar con soporte para un asesoramiento más profesional y personalizado.";
      if (p === "landing")
        return "¡Hola! Soy ANNA. Estoy aquí para ayudarte a cumplir con el RGPD de forma sencilla. ¿Empezamos?";
      if (p === "app") {
        if (wl === 1)
          return "En este primer apartado, necesitamos la información básica de tu empresa y qué tipo de tratamientos de datos realizas.";
        if (wl === 2)
          return "Aquí puedes ver y descargar todos los documentos legales generados automáticamente para tu empresa.";
        if (wl === 3)
          return "Por último, sigue estas medidas técnicas para asegurar la protección de los datos en tu día a día.";
      }
      return "Soy ANNA, tu asistente legal. ¿En qué puedo ayudarte hoy?";
    }, [p, wl, isAlert]),
    kl = Nt.useRef(null),
    Vl = () => {
      const N = {
        name: "Ana García",
        company: "Tapas & Co. SL",
        email: "demo@normia.app",
      };
      (g(N),
        F(!0),
        hl({
          razonSocial: "Tapas & Co. SL",
          cif: "B12345678",
          actividad: "Restauración y catering",
          empleados: "2-10",
          direccion: "Calle Mayor 42",
          localidad: "Madrid",
          provincia: "Madrid",
          cp: "28013",
          web: "https://tapasandco.es",
          emailDPO: "privacidad@tapasandco.es",
          telefono: "915 123 456",
          tratamientos: [
            "Clientes",
            "Proveedores",
            "Empleados / RRHH",
            "Marketing / Newsletter",
          ],
          origenDatos: ["Formulario web", "Teléfono", "Presencial"],
          cesiones: ["Asesoría fiscal/laboral", "Gestoría", "Hosting/Cloud"],
          transferencias: "no",
          medidas: [
            "Contraseñas seguras",
            "Copias de seguridad",
            "Control de accesos",
          ],
          videovigilancia: !0,
          ecommerce: !0,
          newsletter: !0,
          cookies: !0,
        }),
        Rl(N.email, "Bienvenida a Normia"),
        X("app"));
    },
    Hl = c.jsx("div", {
      className: "min-h-screen bg-zinc-50 flex items-center justify-center p-4",
      children: c.jsxs("div", {
        className: "w-full max-w-5xl grid lg:grid-cols-2 gap-8",
        children: [
          c.jsxs("div", {
            className: "hidden lg:flex flex-col justify-center",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3 mb-8",
                children: [
                  c.jsx("div", {
                    className:
                      "h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 grid place-items-center shadow-lg",
                    children: c.jsxs("svg", {
                      width: "20",
                      height: "20",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      className: "text-white",
                      children: [
                        c.jsx("path", {
                          d: "M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z",
                          stroke: "currentColor",
                          strokeWidth: "1.6",
                          fill: "currentColor",
                          opacity: "0.9",
                        }),
                        c.jsx("path", {
                          d: "M8.5 12.5l2.5 2.5 4.5-5",
                          stroke: "white",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("div", {
                        className: "text-lg font-semibold",
                        children: "Normia",
                      }),
                      c.jsx("div", {
                        className: "text-xs text-zinc-500 -mt-1",
                        children: "Cumplimiento simple",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsx("h1", {
                className: "text-3xl font-semibold tracking-tight",
                children: "Empieza a cumplir hoy",
              }),
              c.jsx("p", {
                className: "mt-3 text-zinc-600",
                children:
                  "Crea tu cuenta, realiza el pago seguro y accede al dashboard en menos de 2 minutos.",
              }),
              c.jsx("div", {
                className: "mt-8 space-y-3",
                children: [
                  "Registro en 30s",
                  "Pago seguro con Stripe",
                  "Documentos listos al instante",
                ].map((N, Y) =>
                  c.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 text-sm",
                      children: [
                        c.jsx("div", {
                          className:
                            "h-6 w-6 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center",
                          children: "✓",
                        }),
                        c.jsx("span", { children: N }),
                      ],
                    },
                    Y,
                  ),
                ),
              }),
              c.jsx("div", { className: "mt-10", children: c.jsx(Dr, {}) }),
            ],
          }),
          c.jsxs("div", {
            className:
              "bg-white rounded-2xl border border-zinc-200 shadow-sm p-6 sm:p-8",
            children: [
              c.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  c.jsx("h2", {
                    className: "text-xl font-semibold",
                    children: "Crear cuenta",
                  }),
                  c.jsx("button", {
                    onClick: () => X("landing"),
                    className: "text-sm text-zinc-600 hover:text-zinc-900",
                    children: "Volver",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  "mt-4 rounded-xl border border-amber-200 bg-amber-50 p-3",
                children: c.jsxs("div", {
                  className: "flex items-start gap-3",
                  children: [
                    c.jsx("div", {
                      className:
                        "h-8 w-8 rounded-lg bg-amber-500 text-white grid place-items-center shrink-0 mt-0.5",
                      children: c.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: c.jsx("path", {
                          d: "M13 10V3L4 14h7v7l9-11h-7z",
                          fill: "currentColor",
                        }),
                      }),
                    }),
                    c.jsxs("div", {
                      className: "flex-1",
                      children: [
                        c.jsx("div", {
                          className: "text-sm font-medium text-amber-900",
                          children: "Prueba la plataforma ahora",
                        }),
                        c.jsx("div", {
                          className: "text-xs text-amber-800 mt-0.5",
                          children:
                            "Accede con datos de demostración preconfigurados. Sin tarjeta.",
                        }),
                        c.jsxs("button", {
                          onClick: Vl,
                          className:
                            "mt-2.5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700",
                          children: [
                            "Entrar con cuenta demo",
                            c.jsx("svg", {
                              width: "14",
                              height: "14",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              children: c.jsx("path", {
                                d: "M5 12h12M13 6l6 6-6 6",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              c.jsxs("form", {
                onSubmit: (N) => {
                  N.preventDefault();
                  const Y = new FormData(N.currentTarget),
                    ml = {
                      name: String(Y.get("name") || ""),
                      company: String(Y.get("company") || ""),
                      email: String(Y.get("email") || ""),
                    };
                  (g(ml), F(!0), Rl(ml.email, "Bienvenida a Normia"), X("app"));
                },
                className: "mt-5 space-y-3",
                children: [
                  c.jsxs("div", {
                    className: "grid sm:grid-cols-2 gap-3",
                    children: [
                      c.jsxs("label", {
                        className: "text-sm",
                        children: [
                          "Nombre",
                          c.jsx("input", {
                            name: "name",
                            required: !0,
                            className:
                              "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Tu nombre",
                          }),
                        ],
                      }),
                      c.jsxs("label", {
                        className: "text-sm",
                        children: [
                          "Empresa",
                          c.jsx("input", {
                            name: "company",
                            required: !0,
                            className:
                              "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
                            placeholder: "Razón social",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    className: "text-sm block",
                    children: [
                      "Email",
                      c.jsx("input", {
                        name: "email",
                        type: "email",
                        required: !0,
                        className:
                          "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "tu@empresa.com",
                      }),
                    ],
                  }),
                  c.jsxs("label", {
                    className: "text-sm block",
                    children: [
                      "Contraseña",
                      c.jsx("input", {
                        name: "password",
                        type: "password",
                        required: !0,
                        minLength: 6,
                        className:
                          "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
                        placeholder: "••••••••",
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "rounded-xl border border-zinc-200 p-3 bg-zinc-50",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          c.jsxs("div", {
                            children: [
                              c.jsx("div", {
                                className: "text-sm font-medium",
                                children: "Plan Pro — 29€/mes",
                              }),
                              c.jsx("div", {
                                className: "text-xs text-zinc-600",
                                children:
                                  "Documentos ilimitados, actualizaciones legales, soporte prioritario",
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "text-right",
                            children: [
                              c.jsx("div", {
                                className: "text-lg font-semibold",
                                children: "29€",
                              }),
                              c.jsx("div", {
                                className: "text-[11px] text-zinc-500",
                                children: "IVA incl.",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "mt-3 grid grid-cols-2 gap-2 text-[12px] text-zinc-600",
                        children: [
                          c.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              c.jsx("span", {
                                className:
                                  "h-1.5 w-1.5 rounded-full bg-emerald-500",
                              }),
                              "Pago seguro (Stripe)",
                            ],
                          }),
                          c.jsxs("div", {
                            className: "flex items-center gap-1.5",
                            children: [
                              c.jsx("span", {
                                className:
                                  "h-1.5 w-1.5 rounded-full bg-emerald-500",
                              }),
                              "Cancela cuando quieras",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsx("button", {
                    type: "submit",
                    className:
                      "w-full rounded-xl bg-zinc-900 text-white py-2.5 font-semibold hover:bg-black",
                    children: "Pagar y acceder",
                  }),
                  c.jsx("p", {
                    className: "text-[11px] text-zinc-500 text-center",
                    children:
                      "Al continuar aceptas Términos y Política de Privacidad.",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "mt-6 pt-6 border-t border-zinc-200",
                children: [
                  c.jsxs("button", {
                    onClick: Vl,
                    className:
                      "w-full rounded-xl border border-zinc-300 py-2.5 text-sm font-medium hover:bg-zinc-50 flex items-center justify-center gap-2",
                    children: [
                      c.jsx("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: c.jsx("path", {
                          d: "M12 5v14M5 12h14",
                          stroke: "currentColor",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                        }),
                      }),
                      "¿Ya tienes cuenta? Entrar con demo",
                    ],
                  }),
                  c.jsx("p", {
                    className: "mt-2 text-center text-[11px] text-zinc-500",
                    children: "demo@normia.app / cualquier contraseña",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
    K = c.jsxs("div", {
      className:
        "min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(46,163,242,0.12),transparent),radial-gradient(800px_400px_at_0%_0%,rgba(26,115,191,0.08),transparent)]",
      children: [
        c.jsx("header", {
          className:
            "sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-zinc-200",
          children: c.jsxs("div", {
            className:
              "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  c.jsx("div", {
                    className:
                      "h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-md shadow-blue-200 grid place-items-center",
                    children: c.jsxs("svg", {
                      width: "18",
                      height: "18",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      className: "text-white",
                      children: [
                        c.jsx("path", {
                          d: "M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z",
                          stroke: "currentColor",
                          strokeWidth: "1.6",
                          fill: "currentColor",
                          opacity: "0.9",
                        }),
                        c.jsx("path", {
                          d: "M8.5 12.5l2.5 2.5 4.5-5",
                          stroke: "white",
                          strokeWidth: "1.8",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      ],
                    }),
                  }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("div", {
                        className: "text-[15px] font-semibold tracking-tight",
                        children: "Normia",
                      }),
                      c.jsx("div", {
                        className: "text-[11px] -mt-1 text-zinc-500",
                        children: "Cumplimiento simple",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("nav", {
                className:
                  "hidden md:flex items-center gap-6 text-sm text-zinc-600",
                children: [
                  c.jsx("a", {
                    href: "#como",
                    className: "hover:text-zinc-900",
                    children: "Cómo funciona",
                  }),
                  c.jsx("a", {
                    href: "#beneficios",
                    className: "hover:text-zinc-900",
                    children: "Beneficios",
                  }),
                  c.jsx("a", {
                    href: "#precios",
                    className: "hover:text-zinc-900",
                    children: "Precios",
                  }),
                  c.jsx("a", {
                    href: "#arquitectura",
                    className: "hover:text-zinc-900",
                    children: "Arquitectura",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  c.jsx("button", {
                    onClick: () => X("auth"),
                    className:
                      "hidden sm:inline-flex px-3 py-2 rounded-lg text-sm font-medium text-zinc-700 hover:bg-zinc-100",
                    children: "Entrar",
                  }),
                  c.jsx("button", {
                    onClick: () => X("auth"),
                    className:
                      "inline-flex px-3.5 py-2 rounded-lg text-sm font-semibold text-white bg-zinc-900 hover:bg-black",
                    children: "Cumple en minutos",
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsxs("main", {
          children: [
            c.jsx("section", {
              className:
                "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 lg:pt-20",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-10 items-center",
                children: [
                  c.jsxs("div", {
                    children: [
                      c.jsx("div", {
                        className:
                          "inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-[11px] font-medium text-blue-700",
                        children:
                          "Nuevo — Generación automática de documentos RGPD/LOPDGDD",
                      }),
                      c.jsx("h1", {
                        className:
                          "mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900",
                        children: rh.tagline,
                      }),
                      c.jsx("p", {
                        className:
                          "mt-4 text-zinc-600 text-base sm:text-lg max-w-xl",
                        children:
                          "Responde un cuestionario guiado y obtén en segundos tu Política de Privacidad, RAT, contratos de encargado y más. Sin abogados, sin plantillas genéricas.",
                      }),
                      c.jsxs("div", {
                        className: "mt-6 flex flex-wrap gap-3",
                        children: [
                          c.jsxs("button", {
                            onClick: () => X("auth"),
                            className:
                              "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg shadow-blue-200 hover:opacity-95",
                            children: [
                              "Cumple en minutos",
                              c.jsx("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: c.jsx("path", {
                                  d: "M5 12h12M13 6l6 6-6 6",
                                  stroke: "currentColor",
                                  strokeWidth: "1.8",
                                  strokeLinecap: "round",
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("button", {
                            onClick: Vl,
                            className:
                              "inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100 font-medium",
                            children: [
                              c.jsx("svg", {
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: c.jsx("path", {
                                  d: "M13 10V3L4 14h7v7l9-11h-7z",
                                  fill: "currentColor",
                                }),
                              }),
                              "Probar demo",
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200 inline-flex items-center gap-2.5",
                        children: [
                          c.jsx("div", {
                            className:
                              "h-6 w-6 rounded-full bg-amber-500 text-white grid place-items-center text-[11px] font-bold",
                            children: "!",
                          }),
                          c.jsxs("div", {
                            className: "text-xs",
                            children: [
                              c.jsx("span", {
                                className: "font-medium text-amber-900",
                                children: "Cuenta demo disponible:",
                              }),
                              c.jsx("span", {
                                className: "text-amber-800 ml-1",
                                children:
                                  "demo@normia.app — entra sin registrarte",
                              }),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className:
                          "mt-6 flex items-center gap-4 text-xs text-zinc-500",
                        children: [
                          c.jsx("div", {
                            className: "flex -space-x-2",
                            children: [...Array(4)].map((N, Y) =>
                              c.jsx(
                                "div",
                                {
                                  className:
                                    "h-7 w-7 rounded-full border-2 border-white bg-zinc-200 grid place-items-center text-[10px] font-semibold text-zinc-600",
                                  children: ["AC", "MG", "LP", "JR"][Y],
                                },
                                Y,
                              ),
                            ),
                          }),
                          c.jsx("span", {
                            children: "+1.200 pymes ya cumplen con Normia",
                          }),
                        ],
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className: "relative",
                    children: [
                      c.jsx("div", {
                        className:
                          "absolute -inset-6 bg-gradient-to-br from-blue-200/40 to-blue-300/30 blur-2xl rounded-[2rem]",
                      }),
                      c.jsxs("div", {
                        className:
                          "relative rounded-[1.5rem] border border-zinc-200 bg-white shadow-xl overflow-hidden",
                        children: [
                          c.jsxs("div", {
                            className:
                              "border-b border-zinc-200 px-4 py-3 flex items-center gap-2",
                            children: [
                              c.jsx("div", {
                                className:
                                  "h-2.5 w-2.5 rounded-full bg-red-400",
                              }),
                              c.jsx("div", {
                                className:
                                  "h-2.5 w-2.5 rounded-full bg-yellow-400",
                              }),
                              c.jsx("div", {
                                className:
                                  "h-2.5 w-2.5 rounded-full bg-green-500",
                              }),
                              c.jsx("div", {
                                className: "ml-2 text-xs text-zinc-500",
                                children: "app.normia.es/dashboard",
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "p-4",
                            children: c.jsxs("div", {
                              className: "grid grid-cols-12 gap-3",
                              children: [
                                c.jsxs("div", {
                                  className: "col-span-5",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "rounded-xl border border-zinc-200 p-3",
                                      children: [
                                        c.jsx("div", {
                                          className:
                                            "text-[11px] text-zinc-500",
                                          children: "Progreso",
                                        }),
                                        c.jsxs("div", {
                                          className:
                                            "mt-2 flex items-center gap-3",
                                          children: [
                                            c.jsx(vf, { value: 72 }),
                                            c.jsx("div", {
                                              className:
                                                "text-xs text-zinc-600",
                                              children:
                                                "Completa los 3 pasos para llegar al 100%.",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "mt-3 rounded-xl border border-zinc-200 p-3",
                                      children: [
                                        c.jsx("div", {
                                          className:
                                            "text-[11px] text-zinc-500",
                                          children: "Checklist",
                                        }),
                                        c.jsx("ul", {
                                          className: "mt-2 space-y-1.5 text-xs",
                                          children: [
                                            "Contratos firmados",
                                            "Copias de seguridad",
                                            "Formación equipo",
                                          ].map((N, Y) =>
                                            c.jsxs(
                                              "li",
                                              {
                                                className:
                                                  "flex items-center gap-2",
                                                children: [
                                                  c.jsx("span", {
                                                    className: Fe(
                                                      "h-4 w-4 rounded border grid place-items-center",
                                                      Y < 2
                                                        ? "bg-emerald-500 border-emerald-500 text-white"
                                                        : "border-zinc-300",
                                                    ),
                                                    children: Y < 2 ? "✓" : "",
                                                  }),
                                                  N,
                                                ],
                                              },
                                              Y,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c.jsxs("div", {
                                  className: "col-span-7",
                                  children: [
                                    c.jsxs("div", {
                                      className:
                                        "rounded-xl border border-zinc-200 p-3",
                                      children: [
                                        c.jsx("div", {
                                          className:
                                            "text-[11px] text-zinc-500",
                                          children: "Documentos generados",
                                        }),
                                        c.jsx("div", {
                                          className:
                                            "mt-2 grid grid-cols-2 gap-2",
                                          children: [
                                            "Política de Privacidad",
                                            "RAT",
                                            "Encargado",
                                            "Cookies",
                                          ].map((N) =>
                                            c.jsxs(
                                              "div",
                                              {
                                                className:
                                                  "rounded-lg border border-zinc-200 p-2.5",
                                                children: [
                                                  c.jsx("div", {
                                                    className:
                                                      "text-xs font-medium",
                                                    children: N,
                                                  }),
                                                  c.jsx("div", {
                                                    className:
                                                      "mt-1 text-[10px] text-zinc-500",
                                                    children:
                                                      "PDF • actualizado hoy",
                                                  }),
                                                ],
                                              },
                                              N,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    c.jsxs("div", {
                                      className:
                                        "mt-3 rounded-xl border border-zinc-200 p-3",
                                      children: [
                                        c.jsx("div", {
                                          className:
                                            "text-[11px] text-zinc-500",
                                          children: "Datos de empresa",
                                        }),
                                        c.jsx("div", {
                                          className:
                                            "mt-2 grid grid-cols-2 gap-2 text-[11px]",
                                          children: [
                                            "Razón social",
                                            "CIF",
                                            "Web",
                                            "Email DPO",
                                          ].map((N) =>
                                            c.jsx(
                                              "div",
                                              {
                                                className:
                                                  "rounded-lg bg-zinc-50 border border-zinc-200 px-2.5 py-2",
                                                children: N,
                                              },
                                              N,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        className:
                          "absolute -bottom-4 -right-4 hidden sm:block",
                        children: c.jsx("button", {
                          onClick: Vl,
                          className:
                            "rounded-full bg-zinc-900 text-white text-xs px-3 py-1.5 shadow-lg hover:bg-black",
                          children: "Ver demo interactiva →",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c.jsx("section", {
              id: "como",
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
              children: c.jsx("div", {
                className: "grid lg:grid-cols-3 gap-6",
                children: [
                  {
                    n: "1",
                    t: "Responde el cuestionario",
                    d: "6-8 minutos. Preguntas claras sobre tu actividad, web, empleados y proveedores.",
                  },
                  {
                    n: "2",
                    t: "Generamos tus documentos",
                    d: "Política, RAT, encargado, cookies, aviso legal y cláusulas, personalizados con tus datos.",
                  },
                  {
                    n: "3",
                    t: "Implanta y mantén",
                    d: "Checklist accionable, recordatorios y actualizaciones cuando cambie la normativa.",
                  },
                ].map((N) =>
                  c.jsxs(
                    "div",
                    {
                      className:
                        "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                      children: [
                        c.jsx("div", {
                          className:
                            "h-8 w-8 rounded-lg bg-zinc-900 text-white grid place-items-center font-semibold",
                          children: N.n,
                        }),
                        c.jsx("h3", {
                          className: "mt-4 font-semibold",
                          children: N.t,
                        }),
                        c.jsx("p", {
                          className: "mt-1 text-sm text-zinc-600",
                          children: N.d,
                        }),
                      ],
                    },
                    N.n,
                  ),
                ),
              }),
            }),
            c.jsx("section", {
              id: "beneficios",
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
              children: c.jsx("div", {
                className:
                  "rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8",
                children: c.jsxs("div", {
                  className: "grid md:grid-cols-2 gap-8",
                  children: [
                    c.jsxs("div", {
                      children: [
                        c.jsx("h3", {
                          className: "text-xl font-semibold",
                          children: "Por qué Normia",
                        }),
                        c.jsxs("ul", {
                          className: "mt-4 space-y-3 text-sm text-zinc-700",
                          children: [
                            c.jsxs("li", {
                              className: "flex gap-3",
                              children: [
                                c.jsx("span", {
                                  className:
                                    "mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center",
                                  children: "✓",
                                }),
                                " Ahorra horas de abogado y evita plantillas genéricas.",
                              ],
                            }),
                            c.jsxs("li", {
                              className: "flex gap-3",
                              children: [
                                c.jsx("span", {
                                  className:
                                    "mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center",
                                  children: "✓",
                                }),
                                " Todo en español, adaptado a RGPD y LOPDGDD.",
                              ],
                            }),
                            c.jsxs("li", {
                              className: "flex gap-3",
                              children: [
                                c.jsx("span", {
                                  className:
                                    "mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center",
                                  children: "✓",
                                }),
                                " Actualizaciones automáticas y trazabilidad.",
                              ],
                            }),
                            c.jsxs("li", {
                              className: "flex gap-3",
                              children: [
                                c.jsx("span", {
                                  className:
                                    "mt-0.5 h-5 w-5 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center",
                                  children: "✓",
                                }),
                                " Diseñado para pymes: simple, rápido y accionable.",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsx("div", { children: c.jsx(Dr, {}) }),
                  ],
                }),
              }),
            }),
            c.jsxs("section", {
              id: "precios",
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12",
              children: [
                c.jsxs("div", {
                  className: "text-center mb-8",
                  children: [
                    c.jsx("h2", {
                      className:
                        "text-2xl font-semibold tracking-tight text-zinc-900",
                      children: "Precio único, sin sorpresas",
                    }),
                    c.jsx("p", {
                      className: "mt-2 text-zinc-600 text-sm",
                      children:
                        "Pago único por implantación. Sin cuotas mensuales.",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "grid md:grid-cols-3 gap-6 max-w-5xl mx-auto",
                  children: [
                    {
                      name: "LOPD Básico",
                      price: "80€",
                      sub: "pago único",
                      tag: null,
                      features: [
                        "Adaptación RGPD/LOPDGDD",
                        "Registro de Actividades (RAT)",
                        "Política de Privacidad y Cookies",
                        "Contratos con encargados",
                        "Aviso legal y cláusulas web",
                        "Checklist de implantación",
                      ],
                    },
                    {
                      name: "LOPD + Canal denuncia",
                      price: "100€",
                      sub: "pago único",
                      tag: "Más solicitado",
                      features: [
                        "Todo lo del plan Básico",
                        "Canal de denuncias interno",
                        "Protocolo acoso sexual/laboral",
                        "Procedimiento de investigación",
                        "Política de gestión de alertas",
                        "Documentación para empleados",
                      ],
                    },
                    {
                      name: "Compliance Completo",
                      price: "150€",
                      sub: "pago único",
                      tag: null,
                      features: [
                        "Todo lo del plan anterior",
                        "Adaptación LOPIVI",
                        "Canal ético corporativo",
                        "Política de tolerancia cero",
                        "Formularios de denuncia",
                        "Actualizaciones normativas incluidas",
                      ],
                    },
                  ].map((N, Y) =>
                    c.jsxs(
                      "div",
                      {
                        className: Fe(
                          "rounded-2xl border p-6 bg-white shadow-sm flex flex-col",
                          Y === 1 && "ring-2 ring-blue-500 shadow-blue-100",
                        ),
                        children: [
                          c.jsxs("div", {
                            className: "flex items-start justify-between gap-2",
                            children: [
                              c.jsx("h4", {
                                className:
                                  "text-base font-semibold leading-tight",
                                children: N.name,
                              }),
                              N.tag &&
                                c.jsx("span", {
                                  className:
                                    "shrink-0 text-[11px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 font-medium",
                                  children: N.tag,
                                }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "mt-3 flex items-baseline gap-1",
                            children: [
                              c.jsx("span", {
                                className: "text-4xl font-bold text-zinc-900",
                                children: N.price,
                              }),
                              c.jsx("span", {
                                className: "text-zinc-500 text-sm",
                                children: N.sub,
                              }),
                            ],
                          }),
                          c.jsx("ul", {
                            className: "mt-5 space-y-2.5 text-sm flex-1",
                            children: N.features.map((ml) =>
                              c.jsxs(
                                "li",
                                {
                                  className: "flex gap-2.5 items-start",
                                  children: [
                                    c.jsx("span", {
                                      className:
                                        "mt-0.5 h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 grid place-items-center shrink-0 text-[10px] font-bold",
                                      children: "✓",
                                    }),
                                    ml,
                                  ],
                                },
                                ml,
                              ),
                            ),
                          }),
                          c.jsx("button", {
                            onClick: () => X("auth"),
                            className: Fe(
                              "mt-6 w-full rounded-xl py-2.5 font-semibold text-sm",
                              Y === 1
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-zinc-900 text-white hover:bg-black",
                            ),
                            children: "Contratar ahora",
                          }),
                        ],
                      },
                      N.name,
                    ),
                  ),
                }),
                c.jsx("p", {
                  className: "mt-6 text-center text-xs text-zinc-500",
                  children:
                    "Todos los precios incluyen IVA. Contrato de encargo de tratamiento incluido.",
                }),
              ],
            }),
            c.jsx("section", {
              id: "arquitectura",
              className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16",
              children: c.jsxs("div", {
                className: "grid lg:grid-cols-2 gap-6",
                children: [
                  c.jsxs("div", {
                    className:
                      "rounded-2xl border border-zinc-200 bg-white p-6",
                    children: [
                      c.jsx("h3", {
                        className: "font-semibold",
                        children: "Arquitectura del sistema",
                      }),
                      c.jsx("div", {
                        className: "mt-4 grid grid-cols-2 gap-3 text-sm",
                        children: [
                          [
                            "Frontend",
                            "React + Vite / Next.js",
                            "UI, onboarding, dashboard",
                          ],
                          [
                            "Backend",
                            "Node.js (Nest) o FastAPI",
                            "API, jobs, webhooks",
                          ],
                          ["DB", "PostgreSQL", "multi-tenant"],
                          ["Auth", "JWT + refresh", "RBAC por empresa"],
                          ["Pagos", "Stripe", "suscripciones"],
                          [
                            "PDFs",
                            "Puppeteer / WeasyPrint",
                            "plantillas dinámicas",
                          ],
                          ["Email", "Resend / SES", "transaccionales"],
                          ["Hosting", "Vercel + Railway/Fly", "CI/CD"],
                        ].map(([N, Y, ml]) =>
                          c.jsxs(
                            "div",
                            {
                              className:
                                "rounded-xl border border-zinc-200 p-3",
                              children: [
                                c.jsx("div", {
                                  className: "text-[11px] text-zinc-500",
                                  children: N,
                                }),
                                c.jsx("div", {
                                  className: "font-medium",
                                  children: Y,
                                }),
                                c.jsx("div", {
                                  className: "text-xs text-zinc-600",
                                  children: ml,
                                }),
                              ],
                            },
                            N,
                          ),
                        ),
                      }),
                    ],
                  }),
                  c.jsxs("div", {
                    className:
                      "rounded-2xl border border-zinc-200 bg-white p-6",
                    children: [
                      c.jsx("h3", {
                        className: "font-semibold",
                        children: "Esquema de base de datos (simplificado)",
                      }),
                      c.jsx("pre", {
                        className:
                          "mt-3 text-[12px] leading-5 overflow-auto bg-zinc-50 border border-zinc-200 rounded-xl p-3",
                        children: `users(id, email, password_hash, created_at)
companies(id, owner_id, name, cif, address, ...)
subscriptions(id, company_id, status, plan, stripe_id)
treatments(id, company_id, name, purpose, basis, retention)
recipients(id, company_id, name, type)
documents(id, company_id, type, version, html, pdf_url, created_at)
checklist_items(id, company_id, key, done, updated_at)
audit_log(id, company_id, user_id, action, meta, created_at)`,
                      }),
                      c.jsx("p", {
                        className: "mt-2 text-xs text-zinc-600",
                        children:
                          "Modelo multi-tenant por company_id con auditoría básica.",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        c.jsx("footer", {
          className: "border-t border-zinc-200 py-8",
          children: c.jsxs("div", {
            className:
              "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-zinc-600",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  c.jsx("div", {
                    className:
                      "h-6 w-6 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700",
                  }),
                  c.jsxs("span", {
                    children: ["© ", new Date().getFullYear(), " Normia"],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center gap-4",
                children: [
                  c.jsx("a", {
                    className: "hover:text-zinc-900",
                    href: "#",
                    children: "Privacidad",
                  }),
                  c.jsx("a", {
                    className: "hover:text-zinc-900",
                    href: "#",
                    children: "Términos",
                  }),
                  c.jsx("a", {
                    className: "hover:text-zinc-900",
                    href: "#",
                    children: "Contacto",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
    Xl = c.jsxs("div", {
      className: "min-h-screen bg-zinc-50",
      children: [
        c.jsx("header", {
          className:
            "sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur",
          children: c.jsxs("div", {
            className:
              "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between",
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  c.jsx("div", {
                    className:
                      "h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700",
                  }),
                  c.jsxs("div", {
                    className: "leading-tight",
                    children: [
                      c.jsx("div", {
                        className: "text-sm font-semibold",
                        children: "Normia",
                      }),
                      c.jsx("div", {
                        className: "text-[11px] text-zinc-500 -mt-0.5",
                        children: B?.company || "Tu empresa",
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  c.jsxs("div", {
                    className:
                      "hidden sm:flex items-center gap-2 text-xs text-zinc-600",
                    children: [
                      c.jsx("span", {
                        className: "h-2 w-2 rounded-full bg-emerald-500",
                      }),
                      Q ? "Suscripción activa" : "Prueba",
                    ],
                  }),
                  c.jsx("button", {
                    onClick: () => {
                      (g(null), F(!1), X("landing"));
                    },
                    className:
                      "text-sm px-3 py-1.5 rounded-lg border border-zinc-300 hover:bg-zinc-50",
                    children: "Salir",
                  }),
                ],
              }),
            ],
          }),
        }),
        c.jsxs("main", {
          className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8",
          children: [
            c.jsxs("div", {
              className: "grid lg:grid-cols-12 gap-6",
              children: [
                c.jsx("aside", {
                  className: "lg:col-span-4 xl:col-span-3",
                  children: c.jsxs("div", {
                    className:
                      "rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sticky top-20",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          c.jsx("h2", {
                            className: "font-semibold",
                            children: "Tu cumplimiento",
                          }),
                          c.jsxs("span", {
                            className: "text-[11px] text-zinc-500",
                            children: [
                              "Guardado ",
                              new Date(rl).toLocaleTimeString(),
                            ],
                          }),
                        ],
                      }),
                      c.jsxs("div", {
                        className: "mt-4 flex items-center gap-4",
                        children: [
                          c.jsx(vf, { value: Ml }),
                          c.jsx("div", {
                            className: "text-sm text-zinc-600",
                            children:
                              "Completa los 3 pasos para llegar al 100%.",
                          }),
                        ],
                      }),
                      c.jsx("div", {
                        ref: kl,
                        className: "mt-5 space-y-2",
                        children: [
                          {
                            i: 1,
                            t: "Toma de datos",
                            d: "Información básica y tratamientos",
                          },
                          { i: 2, t: "Documentos", d: "Generación automática" },
                          { i: 3, t: "Medidas", d: "Checklist de seguridad" },
                        ].map((N) =>
                          c.jsxs(
                            "button",
                            {
                              onClick: () => xl(N.i),
                              className: Fe(
                                "w-full text-left rounded-xl border px-3 py-2.5 hover:bg-zinc-50",
                                wl === N.i
                                  ? "border-blue-300 ring-2 ring-blue-100 bg-blue-50/40"
                                  : "border-zinc-200 bg-white",
                              ),
                              children: [
                                c.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    c.jsxs("div", {
                                      className: "font-medium text-sm",
                                      children: [N.i, ". ", N.t],
                                    }),
                                    wl === N.i &&
                                      c.jsx("span", {
                                        className:
                                          "text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 text-white",
                                        children: "activo",
                                      }),
                                  ],
                                }),
                                c.jsx("div", {
                                  className: "text-xs text-zinc-500",
                                  children: N.d,
                                }),
                              ],
                            },
                            N.i,
                          ),
                        ),
                      }),
                      c.jsxs("div", {
                        className: "mt-5",
                        children: [
                          c.jsx("button", {
                            onClick: Ol,
                            className:
                              "w-full rounded-xl bg-zinc-900 text-white py-2.5 text-sm font-semibold hover:bg-black",
                            children: "Generar documentos",
                          }),
                          c.jsx("p", {
                            className: "mt-2 text-[11px] text-zinc-500",
                            children:
                              "Se crean/actualizan con tus datos actuales.",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsxs("section", {
                  className: "lg:col-span-8 xl:col-span-9",
                  children: [
                    wl === 1 &&
                      c.jsxs("div", {
                        className:
                          "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                        children: [
                          c.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              c.jsx("h3", {
                                className: "text-lg font-semibold",
                                children: "Paso 1 — Toma de datos",
                              }),
                              c.jsx("div", {
                                className:
                                  "h-2 w-40 rounded-full bg-zinc-100 overflow-hidden",
                                children: c.jsx("div", {
                                  className:
                                    "h-full bg-gradient-to-r from-blue-600 to-blue-700",
                                  style: {
                                    width: `${Math.min(100, (Object.values(O).filter(Boolean).length / 10) * 100)}%`,
                                  },
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "mt-5 grid md:grid-cols-2 gap-4",
                            children: [
                              [
                                ["Razón social", "razonSocial"],
                                ["CIF/NIF", "cif"],
                                ["Actividad", "actividad"],
                                ["Dirección", "direccion"],
                                ["Localidad", "localidad"],
                                ["Provincia", "provincia"],
                                ["CP", "cp"],
                                ["Web", "web"],
                                ["Email DPO/contacto", "emailDPO"],
                                ["Teléfono", "telefono"],
                              ].map(([N, Y]) =>
                                c.jsxs(
                                  "label",
                                  {
                                    className: "text-sm",
                                    children: [
                                      N,
                                      c.jsx("input", {
                                        value: O[Y],
                                        onChange: (ml) =>
                                          hl({ ...O, [Y]: ml.target.value }),
                                        className:
                                          "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500",
                                        placeholder: N,
                                      }),
                                    ],
                                  },
                                  Y,
                                ),
                              ),
                              c.jsxs("label", {
                                className: "text-sm",
                                children: [
                                  "Nº empleados",
                                  c.jsx("select", {
                                    value: O.empleados,
                                    onChange: (N) =>
                                      hl({ ...O, empleados: N.target.value }),
                                    className:
                                      "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2",
                                    children: ["1", "2-10", "11-50", "50+"].map(
                                      (N) =>
                                        c.jsx(
                                          "option",
                                          { value: N, children: N },
                                          N,
                                        ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "mt-6 grid lg:grid-cols-2 gap-6",
                            children: [
                              c.jsxs("div", {
                                children: [
                                  c.jsx("h4", {
                                    className: "font-medium",
                                    children: "Tratamientos de datos",
                                  }),
                                  c.jsx("div", {
                                    className: "mt-2 grid grid-cols-2 gap-2",
                                    children: vh.map((N) =>
                                      c.jsx(
                                        "button",
                                        {
                                          onClick: () =>
                                            hl({
                                              ...O,
                                              tratamientos: Zu(
                                                O.tratamientos,
                                                N,
                                              ),
                                            }),
                                          className: Fe(
                                            "text-sm rounded-xl border px-3 py-2 text-left hover:bg-zinc-50",
                                            O.tratamientos.includes(N)
                                              ? "border-blue-300 bg-blue-50"
                                              : "border-zinc-200",
                                          ),
                                          children: N,
                                        },
                                        N,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("h4", {
                                    className: "font-medium",
                                    children: "Origen de los datos",
                                  }),
                                  c.jsx("div", {
                                    className: "mt-2 grid grid-cols-2 gap-2",
                                    children: gh.map((N) =>
                                      c.jsx(
                                        "button",
                                        {
                                          onClick: () =>
                                            hl({
                                              ...O,
                                              origenDatos: Zu(O.origenDatos, N),
                                            }),
                                          className: Fe(
                                            "text-sm rounded-xl border px-3 py-2 text-left hover:bg-zinc-50",
                                            O.origenDatos.includes(N)
                                              ? "border-blue-300 bg-blue-50"
                                              : "border-zinc-200",
                                          ),
                                          children: N,
                                        },
                                        N,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("h4", {
                                    className: "font-medium",
                                    children: "Cesiones / Encargados",
                                  }),
                                  c.jsx("div", {
                                    className: "mt-2 grid grid-cols-2 gap-2",
                                    children: yh.map((N) =>
                                      c.jsx(
                                        "button",
                                        {
                                          onClick: () =>
                                            hl({
                                              ...O,
                                              cesiones: Zu(O.cesiones, N),
                                            }),
                                          className: Fe(
                                            "text-sm rounded-xl border px-3 py-2 text-left hover:bg-zinc-50",
                                            O.cesiones.includes(N)
                                              ? "border-blue-300 bg-blue-50"
                                              : "border-zinc-200",
                                          ),
                                          children: N,
                                        },
                                        N,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                children: [
                                  c.jsx("h4", {
                                    className: "font-medium",
                                    children: "Otros",
                                  }),
                                  c.jsxs("div", {
                                    className: "mt-2 grid grid-cols-2 gap-2",
                                    children: [
                                      [
                                        "videovigilancia",
                                        "ecommerce",
                                        "newsletter",
                                        "cookies",
                                      ].map((N) =>
                                        c.jsxs(
                                          "label",
                                          {
                                            className:
                                              "flex items-center gap-2 text-sm rounded-xl border border-zinc-200 px-3 py-2",
                                            children: [
                                              c.jsx("input", {
                                                type: "checkbox",
                                                checked: O[N],
                                                onChange: (Y) =>
                                                  hl({
                                                    ...O,
                                                    [N]: Y.target.checked,
                                                  }),
                                              }),
                                              c.jsx("span", {
                                                className: "capitalize",
                                                children: N,
                                              }),
                                            ],
                                          },
                                          N,
                                        ),
                                      ),
                                      c.jsxs("label", {
                                        className: "text-sm col-span-2",
                                        children: [
                                          "Transferencias internacionales",
                                          c.jsxs("select", {
                                            value: O.transferencias,
                                            onChange: (N) =>
                                              hl({
                                                ...O,
                                                transferencias: N.target.value,
                                              }),
                                            className:
                                              "mt-1 w-full rounded-xl border border-zinc-300 px-3 py-2",
                                            children: [
                                              c.jsx("option", {
                                                value: "no",
                                                children: "No",
                                              }),
                                              c.jsx("option", {
                                                value: "si",
                                                children: "Sí",
                                              }),
                                              c.jsx("option", {
                                                value: "ns",
                                                children: "No estoy seguro",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              c.jsxs("div", {
                                className: "lg:col-span-2",
                                children: [
                                  c.jsx("h4", {
                                    className: "font-medium",
                                    children:
                                      "Medidas técnicas y organizativas",
                                  }),
                                  c.jsx("div", {
                                    className:
                                      "mt-2 grid grid-cols-2 md:grid-cols-3 gap-2",
                                    children: bh.map((N) =>
                                      c.jsx(
                                        "button",
                                        {
                                          onClick: () =>
                                            hl({
                                              ...O,
                                              medidas: Zu(O.medidas, N),
                                            }),
                                          className: Fe(
                                            "text-sm rounded-xl border px-3 py-2 text-left hover:bg-zinc-50",
                                            O.medidas.includes(N)
                                              ? "border-blue-300 bg-blue-50"
                                              : "border-zinc-200",
                                          ),
                                          children: N,
                                        },
                                        N,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          c.jsx("div", {
                            className: "mt-6 flex justify-end",
                            children: c.jsx("button", {
                              onClick: () => xl(2),
                              className:
                                "rounded-xl bg-zinc-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-black",
                              children: "Continuar a documentos",
                            }),
                          }),
                        ],
                      }),
                    wl === 2 &&
                      c.jsxs("div", {
                        className:
                          "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                        children: [
                          c.jsxs("div", {
                            className: "flex items-center justify-between",
                            children: [
                              c.jsx("h3", {
                                className: "text-lg font-semibold",
                                children: "Paso 2 — Generación de documentos",
                              }),
                              c.jsx("button", {
                                onClick: Ol,
                                className:
                                  "text-sm rounded-lg border border-zinc-300 px-3 py-1.5 hover:bg-zinc-50",
                                children: "Regenerar",
                              }),
                            ],
                          }),
                          c.jsx("p", {
                            className: "mt-1 text-sm text-zinc-600",
                            children:
                              "Documentos personalizados con tus datos. Puedes descargarlos en PDF.",
                          }),
                          c.jsxs("div", {
                            className: "mt-5 grid md:grid-cols-2 gap-4",
                            children: [
                              (C.length ? C : []).map((N) =>
                                c.jsxs(
                                  "div",
                                  {
                                    className:
                                      "rounded-xl border border-zinc-200 p-4",
                                    children: [
                                      c.jsxs("div", {
                                        className:
                                          "flex items-start justify-between gap-3",
                                        children: [
                                          c.jsxs("div", {
                                            children: [
                                              c.jsx("div", {
                                                className: "font-medium",
                                                children: N.title,
                                              }),
                                              c.jsxs("div", {
                                                className:
                                                  "text-[12px] text-zinc-500",
                                                children: [
                                                  "Generado ",
                                                  new Date(
                                                    N.createdAt,
                                                  ).toLocaleString(),
                                                ],
                                              }),
                                            ],
                                          }),
                                          c.jsx("button", {
                                            onClick: () => ze(N),
                                            className:
                                              "text-xs rounded-lg bg-zinc-900 text-white px-2.5 py-1.5 hover:bg-black",
                                            children: "Descargar PDF",
                                          }),
                                        ],
                                      }),
                                      c.jsx("div", {
                                        className:
                                          "mt-3 max-h-40 overflow-auto rounded-lg bg-zinc-50 border border-zinc-200 p-3 text-[12px] leading-5",
                                        dangerouslySetInnerHTML: {
                                          __html: N.html,
                                        },
                                      }),
                                    ],
                                  },
                                  N.id,
                                ),
                              ),
                              C.length === 0 &&
                                c.jsx("div", {
                                  className:
                                    "md:col-span-2 rounded-xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-600",
                                  children:
                                    "Aún no has generado documentos. Pulsa “Generar documentos”.",
                                }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "mt-6 flex justify-between",
                            children: [
                              c.jsx("button", {
                                onClick: () => xl(1),
                                className:
                                  "rounded-xl border border-zinc-300 px-4 py-2.5 text-sm hover:bg-zinc-50",
                                children: "Volver",
                              }),
                              c.jsx("button", {
                                onClick: () => xl(3),
                                className:
                                  "rounded-xl bg-zinc-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-black",
                                children: "Continuar a medidas",
                              }),
                            ],
                          }),
                        ],
                      }),
                    wl === 3 &&
                      c.jsxs("div", {
                        className:
                          "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                        children: [
                          c.jsx("h3", {
                            className: "text-lg font-semibold",
                            children: "Paso 3 — Medidas de seguridad",
                          }),
                          c.jsx("p", {
                            className: "mt-1 text-sm text-zinc-600",
                            children:
                              "Marca las acciones completadas para aumentar tu nivel de cumplimiento.",
                          }),
                          c.jsx("div", {
                            className: "mt-4 grid sm:grid-cols-2 gap-3",
                            children: I.map((N) =>
                              c.jsxs(
                                "label",
                                {
                                  className: Fe(
                                    "flex items-start gap-3 rounded-xl border p-3",
                                    N.done
                                      ? "border-emerald-300 bg-emerald-50/50"
                                      : "border-zinc-200 bg-white",
                                  ),
                                  children: [
                                    c.jsx("input", {
                                      type: "checkbox",
                                      checked: N.done,
                                      onChange: (Y) =>
                                        H((ml) =>
                                          ml.map((yl) =>
                                            yl.id === N.id
                                              ? {
                                                  ...yl,
                                                  done: Y.target.checked,
                                                }
                                              : yl,
                                          ),
                                        ),
                                      className: "mt-0.5 h-4 w-4",
                                    }),
                                    c.jsxs("div", {
                                      children: [
                                        c.jsx("div", {
                                          className: "text-sm font-medium",
                                          children: N.title,
                                        }),
                                        c.jsx("div", {
                                          className: "text-xs text-zinc-600",
                                          children: N.detail,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                N.id,
                              ),
                            ),
                          }),
                          c.jsxs("div", {
                            className:
                              "mt-6 rounded-xl border border-zinc-200 p-4",
                            children: [
                              c.jsxs("div", {
                                className: "flex items-center justify-between",
                                children: [
                                  c.jsxs("div", {
                                    children: [
                                      c.jsx("div", {
                                        className: "text-sm font-medium",
                                        children: "Nivel de cumplimiento",
                                      }),
                                      c.jsx("div", {
                                        className: "text-xs text-zinc-600",
                                        children:
                                          "Basado en datos, documentos y checklist.",
                                      }),
                                    ],
                                  }),
                                  c.jsx(vf, { value: Ml }),
                                ],
                              }),
                              c.jsx("div", {
                                className:
                                  "mt-3 h-2 rounded-full bg-zinc-100 overflow-hidden",
                                children: c.jsx("div", {
                                  className:
                                    "h-full bg-gradient-to-r from-blue-600 to-blue-700",
                                  style: { width: `${Ml}%` },
                                }),
                              }),
                            ],
                          }),
                          c.jsxs("div", {
                            className: "mt-6 flex justify-between",
                            children: [
                              c.jsx("button", {
                                onClick: () => xl(2),
                                className:
                                  "rounded-xl border border-zinc-300 px-4 py-2.5 text-sm hover:bg-zinc-50",
                                children: "Volver",
                              }),
                              c.jsx("button", {
                                onClick: () => {
                                  (Rl(
                                    B?.email || "",
                                    "Recordatorio semanal Normia",
                                  ),
                                    alert(
                                      "¡Todo listo! Te enviaremos recordatorios y actualizaciones legales.",
                                    ));
                                },
                                className:
                                  "rounded-xl bg-zinc-900 text-white px-4 py-2.5 text-sm font-semibold hover:bg-black",
                                children: "Finalizar",
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            c.jsx("section", {
              className: "mt-10",
              children: c.jsxs("div", {
                className:
                  "rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm",
                children: [
                  c.jsx("h3", {
                    className: "text-lg font-semibold",
                    children: "Ejemplo de documentos generados",
                  }),
                  c.jsx("div", {
                    className: "mt-4 grid lg:grid-cols-3 gap-4",
                    children: [
                      { t: "Política de Privacidad", h: Mr(O) },
                      { t: "Registro de Actividades (RAT)", h: Or(O) },
                      { t: "Contrato Encargado", h: Cr(O) },
                    ].map((N, Y) =>
                      c.jsxs(
                        "div",
                        {
                          className: "rounded-xl border border-zinc-200",
                          children: [
                            c.jsx("div", {
                              className:
                                "px-4 py-2 border-b border-zinc-200 bg-zinc-50 text-sm font-medium",
                              children: N.t,
                            }),
                            c.jsx("div", {
                              className:
                                "p-4 max-h-56 overflow-auto text-[12px] leading-6",
                              dangerouslySetInnerHTML: { __html: N.h },
                            }),
                          ],
                        },
                        Y,
                      ),
                    ),
                  }),
                  c.jsx("p", {
                    className: "mt-3 text-[12px] text-zinc-500",
                    children:
                      "Los textos son plantillas dinámicas de demostración. En producción se adaptan a jurisprudencia y guías AEPD.",
                  }),
                ],
              }),
            }),
            c.jsxs("section", {
              className: "mt-10 grid lg:grid-cols-3 gap-4",
              children: [
                c.jsxs("div", {
                  className: "rounded-2xl border border-zinc-200 bg-white p-5",
                  children: [
                    c.jsx("h4", {
                      className: "font-semibold",
                      children: "Nombre y branding",
                    }),
                    c.jsxs("div", {
                      className: "mt-2 flex items-center gap-3",
                      children: [
                        c.jsx("div", {
                          className:
                            "h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700",
                        }),
                        c.jsxs("div", {
                          children: [
                            c.jsx("div", {
                              className: "font-medium",
                              children: "Normia",
                            }),
                            c.jsx("div", {
                              className: "text-xs text-zinc-600",
                              children:
                                "Corto, memorable, profesional. Evoca “normativa”.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    c.jsxs("ul", {
                      className:
                        "mt-3 text-xs text-zinc-600 list-disc pl-5 space-y-1",
                      children: [
                        c.jsx("li", {
                          children:
                            "Paleta: violeta/indigo + acentos esmeralda.",
                        }),
                        c.jsx("li", {
                          children:
                            "Tipografía: Plus Jakarta Sans (humana y legible).",
                        }),
                        c.jsx("li", {
                          children:
                            "Tono: claro, directo, sin jerga legal innecesaria.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "rounded-2xl border border-zinc-200 bg-white p-5",
                  children: [
                    c.jsx("h4", {
                      className: "font-semibold",
                      children: "Escalabilidad",
                    }),
                    c.jsxs("ul", {
                      className: "mt-2 text-sm text-zinc-700 space-y-1",
                      children: [
                        c.jsx("li", {
                          children: "• Multi-tenant por company_id.",
                        }),
                        c.jsx("li", {
                          children: "• PDFs en almacenamiento S3-compat.",
                        }),
                        c.jsx("li", {
                          children: "• Webhooks Stripe → activación inmediata.",
                        }),
                        c.jsx("li", {
                          children: "• Jobs programados para recordatorios.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "rounded-2xl border border-zinc-200 bg-white p-5",
                  children: [
                    c.jsx("h4", {
                      className: "font-semibold",
                      children: "Legal-tech responsable",
                    }),
                    c.jsx("p", {
                      className: "mt-2 text-sm text-zinc-700",
                      children:
                        "Normia automatiza la parte repetitiva y mantiene trazabilidad. Para casos complejos, sugiere derivación a profesional colegiado.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  return c.jsxs("div", {
    style: {
      fontFamily:
        '"Plus Jakarta Sans", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
    },
    className: "text-zinc-900 antialiased",
    children: [
      p === "landing" && K,
      p === "auth" && Hl,
      p === "app" && (Q ? Xl : Hl),
      c.jsx(AnnaChatbot, { message: annaMessage, isAlert: isAlert }),
      c.jsx("style", {
        children: `
        ::-webkit-scrollbar{width:10px;height:10px}
        ::-webkit-scrollbar-thumb{background:#e4e4e7;border-radius:8px}
        ::-webkit-scrollbar-thumb:hover{background:#d4d4d8}
      `,
      }),
    ],
  });
}
export default jh;
