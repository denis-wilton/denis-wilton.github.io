var O1 = Object.defineProperty;
var T1 = (e, t, n) =>
  t in e
    ? O1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var M = (e, t, n) => (T1(e, typeof t != "symbol" ? t + "" : t, n), n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = n(l);
    fetch(l.href, i);
  }
})();
function F1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ed = { exports: {} },
  Hi = {},
  xd = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vl = Symbol.for("react.element"),
  A1 = Symbol.for("react.portal"),
  D1 = Symbol.for("react.fragment"),
  V1 = Symbol.for("react.strict_mode"),
  U1 = Symbol.for("react.profiler"),
  B1 = Symbol.for("react.provider"),
  W1 = Symbol.for("react.context"),
  Q1 = Symbol.for("react.forward_ref"),
  H1 = Symbol.for("react.suspense"),
  Z1 = Symbol.for("react.memo"),
  G1 = Symbol.for("react.lazy"),
  Na = Symbol.iterator;
function Y1(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Na && e[Na]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var _d = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ld = Object.assign,
  $d = {};
function ir(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $d),
    (this.updater = n || _d);
}
ir.prototype.isReactComponent = {};
ir.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ir.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Pd() {}
Pd.prototype = ir.prototype;
function ms(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = $d),
    (this.updater = n || _d);
}
var gs = (ms.prototype = new Pd());
gs.constructor = ms;
Ld(gs, ir.prototype);
gs.isPureReactComponent = !0;
var Ma = Array.isArray,
  Nd = Object.prototype.hasOwnProperty,
  vs = { current: null },
  Md = { key: !0, ref: !0, __self: !0, __source: !0 };
function zd(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Nd.call(t, r) && !Md.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: vl,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: vs.current,
  };
}
function K1(e, t) {
  return {
    $$typeof: vl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ys(e) {
  return typeof e == "object" && e !== null && e.$$typeof === vl;
}
function X1(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var za = /\/+/g;
function Co(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? X1("" + e.key)
    : t.toString(36);
}
function Xl(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case vl:
          case A1:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + Co(o, 0) : r),
      Ma(l)
        ? ((n = ""),
          e != null && (n = e.replace(za, "$&/") + "/"),
          Xl(l, t, n, "", function (a) {
            return a;
          }))
        : l != null &&
          (ys(l) &&
            (l = K1(
              l,
              n +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(za, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Ma(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + Co(i, u);
      o += Xl(i, t, n, s, l);
    }
  else if (((s = Y1(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + Co(i, u++)), (o += Xl(i, t, n, s, l));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Pl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Xl(e, r, "", "", function (i) {
      return t.call(n, i, l++);
    }),
    r
  );
}
function q1(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Se = { current: null },
  ql = { transition: null },
  J1 = {
    ReactCurrentDispatcher: Se,
    ReactCurrentBatchConfig: ql,
    ReactCurrentOwner: vs,
  };
F.Children = {
  map: Pl,
  forEach: function (e, t, n) {
    Pl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Pl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Pl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ys(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = ir;
F.Fragment = D1;
F.Profiler = U1;
F.PureComponent = ms;
F.StrictMode = V1;
F.Suspense = H1;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J1;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ld({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = vs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Nd.call(t, s) &&
        !Md.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: vl, type: e.type, key: l, ref: i, props: r, _owner: o };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: W1,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: B1, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = zd;
F.createFactory = function (e) {
  var t = zd.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: Q1, render: e };
};
F.isValidElement = ys;
F.lazy = function (e) {
  return { $$typeof: G1, _payload: { _status: -1, _result: e }, _init: q1 };
};
F.memo = function (e, t) {
  return { $$typeof: Z1, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = ql.transition;
  ql.transition = {};
  try {
    e();
  } finally {
    ql.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Se.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Se.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Se.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Se.current.useEffect(e, t);
};
F.useId = function () {
  return Se.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Se.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Se.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Se.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Se.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Se.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Se.current.useRef(e);
};
F.useState = function (e) {
  return Se.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Se.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Se.current.useTransition();
};
F.version = "18.2.0";
xd.exports = F;
var S = xd.exports;
const yl = F1(S);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var b1 = S,
  eh = Symbol.for("react.element"),
  th = Symbol.for("react.fragment"),
  nh = Object.prototype.hasOwnProperty,
  rh = b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  lh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rd(e, t, n) {
  var r,
    l = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) nh.call(t, r) && !lh.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: eh,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: rh.current,
  };
}
Hi.Fragment = th;
Hi.jsx = Rd;
Hi.jsxs = Rd;
Ed.exports = Hi;
var P = Ed.exports,
  ou = {},
  Id = { exports: {} },
  Te = {},
  jd = { exports: {} },
  Od = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, j) {
    var I = N.length;
    N.push(j);
    e: for (; 0 < I; ) {
      var W = (I - 1) >>> 1,
        Y = N[W];
      if (0 < l(Y, j)) (N[W] = j), (N[I] = Y), (I = W);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var j = N[0],
      I = N.pop();
    if (I !== j) {
      N[0] = I;
      e: for (var W = 0, Y = N.length, Me = Y >>> 1; W < Me; ) {
        var ot = 2 * (W + 1) - 1,
          en = N[ot],
          Ae = ot + 1,
          ut = N[Ae];
        if (0 > l(en, I))
          Ae < Y && 0 > l(ut, en)
            ? ((N[W] = ut), (N[Ae] = I), (W = Ae))
            : ((N[W] = en), (N[ot] = I), (W = ot));
        else if (Ae < Y && 0 > l(ut, I)) (N[W] = ut), (N[Ae] = I), (W = Ae);
        else break e;
      }
    }
    return j;
  }
  function l(N, j) {
    var I = N.sortIndex - j.sortIndex;
    return I !== 0 ? I : N.id - j.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    a = [],
    m = 1,
    h = null,
    p = 3,
    y = !1,
    v = !1,
    w = !1,
    L = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(N) {
    for (var j = n(a); j !== null; ) {
      if (j.callback === null) r(a);
      else if (j.startTime <= N)
        r(a), (j.sortIndex = j.expirationTime), t(s, j);
      else break;
      j = n(a);
    }
  }
  function g(N) {
    if (((w = !1), f(N), !v))
      if (n(s) !== null) (v = !0), dr(k);
      else {
        var j = n(a);
        j !== null && fr(g, j.startTime - N);
      }
  }
  function k(N, j) {
    (v = !1), w && ((w = !1), d($), ($ = -1)), (y = !0);
    var I = p;
    try {
      for (
        f(j), h = n(s);
        h !== null && (!(h.expirationTime > j) || (N && !re()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (p = h.priorityLevel);
          var Y = W(h.expirationTime <= j);
          (j = e.unstable_now()),
            typeof Y == "function" ? (h.callback = Y) : h === n(s) && r(s),
            f(j);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var Me = !0;
      else {
        var ot = n(a);
        ot !== null && fr(g, ot.startTime - j), (Me = !1);
      }
      return Me;
    } finally {
      (h = null), (p = I), (y = !1);
    }
  }
  var E = !1,
    C = null,
    $ = -1,
    V = 5,
    R = -1;
  function re() {
    return !(e.unstable_now() - R < V);
  }
  function le() {
    if (C !== null) {
      var N = e.unstable_now();
      R = N;
      var j = !0;
      try {
        j = C(!0, N);
      } finally {
        j ? Ce() : ((E = !1), (C = null));
      }
    } else E = !1;
  }
  var Ce;
  if (typeof c == "function")
    Ce = function () {
      c(le);
    };
  else if (typeof MessageChannel < "u") {
    var Ye = new MessageChannel(),
      cr = Ye.port2;
    (Ye.port1.onmessage = le),
      (Ce = function () {
        cr.postMessage(null);
      });
  } else
    Ce = function () {
      L(le, 0);
    };
  function dr(N) {
    (C = N), E || ((E = !0), Ce());
  }
  function fr(N, j) {
    $ = L(function () {
      N(e.unstable_now());
    }, j);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || y || ((v = !0), dr(k));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (N) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var j = 3;
          break;
        default:
          j = p;
      }
      var I = p;
      p = j;
      try {
        return N();
      } finally {
        p = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, j) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var I = p;
      p = N;
      try {
        return j();
      } finally {
        p = I;
      }
    }),
    (e.unstable_scheduleCallback = function (N, j, I) {
      var W = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? W + I : W))
          : (I = W),
        N)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = I + Y),
        (N = {
          id: m++,
          callback: j,
          priorityLevel: N,
          startTime: I,
          expirationTime: Y,
          sortIndex: -1,
        }),
        I > W
          ? ((N.sortIndex = I),
            t(a, N),
            n(s) === null &&
              N === n(a) &&
              (w ? (d($), ($ = -1)) : (w = !0), fr(g, I - W)))
          : ((N.sortIndex = Y), t(s, N), v || y || ((v = !0), dr(k))),
        N
      );
    }),
    (e.unstable_shouldYield = re),
    (e.unstable_wrapCallback = function (N) {
      var j = p;
      return function () {
        var I = p;
        p = j;
        try {
          return N.apply(this, arguments);
        } finally {
          p = I;
        }
      };
    });
})(Od);
jd.exports = Od;
var ih = jd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td = S,
  Oe = ih;
function x(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Fd = new Set(),
  Hr = {};
function kn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Hr[e] = t, e = 0; e < t.length; e++) Fd.add(t[e]);
}
var Et = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  uu = Object.prototype.hasOwnProperty,
  oh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ra = {},
  Ia = {};
function uh(e) {
  return uu.call(Ia, e)
    ? !0
    : uu.call(Ra, e)
    ? !1
    : oh.test(e)
    ? (Ia[e] = !0)
    : ((Ra[e] = !0), !1);
}
function sh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function ah(e, t, n, r) {
  if (t === null || typeof t > "u" || sh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ke(e, t, n, r, l, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  fe[t] = new ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  fe[e] = new ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    fe[e] = new ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  fe[e] = new ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  fe[e] = new ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  fe[e] = new ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  fe[e] = new ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ws = /[\-:]([a-z])/g;
function Ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ws, Ss);
    fe[t] = new ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(ws, Ss);
    fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(ws, Ss);
  fe[t] = new ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
fe.xlinkHref = new ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  fe[e] = new ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ks(e, t, n, r) {
  var l = fe.hasOwnProperty(t) ? fe[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (ah(t, n, l, r) && (n = null),
    r || l === null
      ? uh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var $t = Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Nl = Symbol.for("react.element"),
  Ln = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  Cs = Symbol.for("react.strict_mode"),
  su = Symbol.for("react.profiler"),
  Ad = Symbol.for("react.provider"),
  Dd = Symbol.for("react.context"),
  Es = Symbol.for("react.forward_ref"),
  au = Symbol.for("react.suspense"),
  cu = Symbol.for("react.suspense_list"),
  xs = Symbol.for("react.memo"),
  Rt = Symbol.for("react.lazy"),
  Vd = Symbol.for("react.offscreen"),
  ja = Symbol.iterator;
function pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ja && e[ja]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  Eo;
function _r(e) {
  if (Eo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Eo = (t && t[1]) || "";
    }
  return (
    `
` +
    Eo +
    e
  );
}
var xo = !1;
function _o(e, t) {
  if (!e || xo) return "";
  xo = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == "string") {
      for (
        var l = a.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (xo = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? _r(e) : "";
}
function ch(e) {
  switch (e.tag) {
    case 5:
      return _r(e.type);
    case 16:
      return _r("Lazy");
    case 13:
      return _r("Suspense");
    case 19:
      return _r("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = _o(e.type, !1)), e;
    case 11:
      return (e = _o(e.type.render, !1)), e;
    case 1:
      return (e = _o(e.type, !0)), e;
    default:
      return "";
  }
}
function du(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Ln:
      return "Portal";
    case su:
      return "Profiler";
    case Cs:
      return "StrictMode";
    case au:
      return "Suspense";
    case cu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Dd:
        return (e.displayName || "Context") + ".Consumer";
      case Ad:
        return (e._context.displayName || "Context") + ".Provider";
      case Es:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case xs:
        return (
          (t = e.displayName || null), t !== null ? t : du(e.type) || "Memo"
        );
      case Rt:
        (t = e._payload), (e = e._init);
        try {
          return du(e(t));
        } catch {}
    }
  return null;
}
function dh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return du(t);
    case 8:
      return t === Cs ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ud(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function fh(e) {
  var t = Ud(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Ml(e) {
  e._valueTracker || (e._valueTracker = fh(e));
}
function Bd(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Ud(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function hi(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fu(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Oa(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Wd(e, t) {
  (t = t.checked), t != null && ks(e, "checked", t, !1);
}
function pu(e, t) {
  Wd(e, t);
  var n = Kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? hu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && hu(e, t.type, Kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ta(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function hu(e, t, n) {
  (t !== "number" || hi(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lr = Array.isArray;
function Dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(x(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(x(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(x(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Kt(n) };
}
function Qd(e, t) {
  var n = Kt(t.value),
    r = Kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Aa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hd(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function gu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Hd(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var zl,
  Zd = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        zl = zl || document.createElement("div"),
          zl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = zl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Zr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  ph = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function (e) {
  ph.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]);
  });
});
function Gd(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Yd(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Gd(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var hh = J(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function vu(e, t) {
  if (t) {
    if (hh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(x(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(x(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(x(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(x(62));
  }
}
function yu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var wu = null;
function _s(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Su = null,
  Vn = null,
  Un = null;
function Da(e) {
  if ((e = kl(e))) {
    if (typeof Su != "function") throw Error(x(280));
    var t = e.stateNode;
    t && ((t = Xi(t)), Su(e.stateNode, e.type, t));
  }
}
function Kd(e) {
  Vn ? (Un ? Un.push(e) : (Un = [e])) : (Vn = e);
}
function Xd() {
  if (Vn) {
    var e = Vn,
      t = Un;
    if (((Un = Vn = null), Da(e), t)) for (e = 0; e < t.length; e++) Da(t[e]);
  }
}
function qd(e, t) {
  return e(t);
}
function Jd() {}
var Lo = !1;
function bd(e, t, n) {
  if (Lo) return e(t, n);
  Lo = !0;
  try {
    return qd(e, t, n);
  } finally {
    (Lo = !1), (Vn !== null || Un !== null) && (Jd(), Xd());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Xi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(x(231, t, typeof n));
  return n;
}
var ku = !1;
if (Et)
  try {
    var hr = {};
    Object.defineProperty(hr, "passive", {
      get: function () {
        ku = !0;
      },
    }),
      window.addEventListener("test", hr, hr),
      window.removeEventListener("test", hr, hr);
  } catch {
    ku = !1;
  }
function mh(e, t, n, r, l, i, o, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var zr = !1,
  mi = null,
  gi = !1,
  Cu = null,
  gh = {
    onError: function (e) {
      (zr = !0), (mi = e);
    },
  };
function vh(e, t, n, r, l, i, o, u, s) {
  (zr = !1), (mi = null), mh.apply(gh, arguments);
}
function yh(e, t, n, r, l, i, o, u, s) {
  if ((vh.apply(this, arguments), zr)) {
    if (zr) {
      var a = mi;
      (zr = !1), (mi = null);
    } else throw Error(x(198));
    gi || ((gi = !0), (Cu = a));
  }
}
function Cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ef(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Va(e) {
  if (Cn(e) !== e) throw Error(x(188));
}
function wh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Cn(e)), t === null)) throw Error(x(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return Va(l), e;
        if (i === r) return Va(l), t;
        i = i.sibling;
      }
      throw Error(x(188));
    }
    if (n.return !== r.return) (n = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          (o = !0), (n = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            (o = !0), (n = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(x(189));
      }
    }
    if (n.alternate !== r) throw Error(x(190));
  }
  if (n.tag !== 3) throw Error(x(188));
  return n.stateNode.current === n ? e : t;
}
function tf(e) {
  return (e = wh(e)), e !== null ? nf(e) : null;
}
function nf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = nf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var rf = Oe.unstable_scheduleCallback,
  Ua = Oe.unstable_cancelCallback,
  Sh = Oe.unstable_shouldYield,
  kh = Oe.unstable_requestPaint,
  ee = Oe.unstable_now,
  Ch = Oe.unstable_getCurrentPriorityLevel,
  Ls = Oe.unstable_ImmediatePriority,
  lf = Oe.unstable_UserBlockingPriority,
  vi = Oe.unstable_NormalPriority,
  Eh = Oe.unstable_LowPriority,
  of = Oe.unstable_IdlePriority,
  Zi = null,
  ft = null;
function xh(e) {
  if (ft && typeof ft.onCommitFiberRoot == "function")
    try {
      ft.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var tt = Math.clz32 ? Math.clz32 : $h,
  _h = Math.log,
  Lh = Math.LN2;
function $h(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((_h(e) / Lh) | 0)) | 0;
}
var Rl = 64,
  Il = 4194304;
function $r(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function yi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = $r(u)) : ((i &= o), i !== 0 && (r = $r(i)));
  } else (o = n & ~l), o !== 0 ? (r = $r(o)) : i !== 0 && (r = $r(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (i = t & -t), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Ph(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - tt(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & n) || u & r) && (l[o] = Ph(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function Eu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function uf() {
  var e = Rl;
  return (Rl <<= 1), !(Rl & 4194240) && (Rl = 64), e;
}
function $o(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function wl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tt(t)),
    (e[t] = n);
}
function Mh(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - tt(n),
      i = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~i);
  }
}
function $s(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - tt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var B = 0;
function sf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var af,
  Ps,
  cf,
  df,
  ff,
  xu = !1,
  jl = [],
  Vt = null,
  Ut = null,
  Bt = null,
  Yr = new Map(),
  Kr = new Map(),
  jt = [],
  zh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ba(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      Ut = null;
      break;
    case "mouseover":
    case "mouseout":
      Bt = null;
      break;
    case "pointerover":
    case "pointerout":
      Yr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function mr(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      t !== null && ((t = kl(t)), t !== null && Ps(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Rh(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Vt = mr(Vt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Ut = mr(Ut, e, t, n, r, l)), !0;
    case "mouseover":
      return (Bt = mr(Bt, e, t, n, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Yr.set(i, mr(Yr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Kr.set(i, mr(Kr.get(i) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function pf(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = Cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ef(n)), t !== null)) {
          (e.blockedOn = t),
            ff(e.priority, function () {
              cf(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Jl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _u(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (wu = r), n.target.dispatchEvent(r), (wu = null);
    } else return (t = kl(n)), t !== null && Ps(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Wa(e, t, n) {
  Jl(e) && n.delete(t);
}
function Ih() {
  (xu = !1),
    Vt !== null && Jl(Vt) && (Vt = null),
    Ut !== null && Jl(Ut) && (Ut = null),
    Bt !== null && Jl(Bt) && (Bt = null),
    Yr.forEach(Wa),
    Kr.forEach(Wa);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    xu ||
      ((xu = !0),
      Oe.unstable_scheduleCallback(Oe.unstable_NormalPriority, Ih)));
}
function Xr(e) {
  function t(l) {
    return gr(l, e);
  }
  if (0 < jl.length) {
    gr(jl[0], e);
    for (var n = 1; n < jl.length; n++) {
      var r = jl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && gr(Vt, e),
      Ut !== null && gr(Ut, e),
      Bt !== null && gr(Bt, e),
      Yr.forEach(t),
      Kr.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    pf(n), n.blockedOn === null && jt.shift();
}
var Bn = $t.ReactCurrentBatchConfig,
  wi = !0;
function jh(e, t, n, r) {
  var l = B,
    i = Bn.transition;
  Bn.transition = null;
  try {
    (B = 1), Ns(e, t, n, r);
  } finally {
    (B = l), (Bn.transition = i);
  }
}
function Oh(e, t, n, r) {
  var l = B,
    i = Bn.transition;
  Bn.transition = null;
  try {
    (B = 4), Ns(e, t, n, r);
  } finally {
    (B = l), (Bn.transition = i);
  }
}
function Ns(e, t, n, r) {
  if (wi) {
    var l = _u(e, t, n, r);
    if (l === null) Fo(e, t, r, Si, n), Ba(e, r);
    else if (Rh(l, e, t, n, r)) r.stopPropagation();
    else if ((Ba(e, r), t & 4 && -1 < zh.indexOf(e))) {
      for (; l !== null; ) {
        var i = kl(l);
        if (
          (i !== null && af(i),
          (i = _u(e, t, n, r)),
          i === null && Fo(e, t, r, Si, n),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Fo(e, t, r, null, n);
  }
}
var Si = null;
function _u(e, t, n, r) {
  if (((Si = null), (e = _s(r)), (e = ln(e)), e !== null))
    if (((t = Cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ef(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Si = e), null;
}
function hf(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ch()) {
        case Ls:
          return 1;
        case lf:
          return 4;
        case vi:
        case Eh:
          return 16;
        case of:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Tt = null,
  Ms = null,
  bl = null;
function mf() {
  if (bl) return bl;
  var e,
    t = Ms,
    n = t.length,
    r,
    l = "value" in Tt ? Tt.value : Tt.textContent,
    i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
  return (bl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ei(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ol() {
  return !0;
}
function Qa() {
  return !1;
}
function Fe(e) {
  function t(n, r, l, i, o) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? Ol
        : Qa),
      (this.isPropagationStopped = Qa),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ol));
      },
      persist: function () {},
      isPersistent: Ol,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  zs = Fe(or),
  Sl = J({}, or, { view: 0, detail: 0 }),
  Th = Fe(Sl),
  Po,
  No,
  vr,
  Gi = J({}, Sl, {
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
    getModifierState: Rs,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== vr &&
            (vr && e.type === "mousemove"
              ? ((Po = e.screenX - vr.screenX), (No = e.screenY - vr.screenY))
              : (No = Po = 0),
            (vr = e)),
          Po);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : No;
    },
  }),
  Ha = Fe(Gi),
  Fh = J({}, Gi, { dataTransfer: 0 }),
  Ah = Fe(Fh),
  Dh = J({}, Sl, { relatedTarget: 0 }),
  Mo = Fe(Dh),
  Vh = J({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Uh = Fe(Vh),
  Bh = J({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Wh = Fe(Bh),
  Qh = J({}, or, { data: 0 }),
  Za = Fe(Qh),
  Hh = {
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
  Zh = {
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
  Gh = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Yh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Gh[e]) ? !!t[e] : !1;
}
function Rs() {
  return Yh;
}
var Kh = J({}, Sl, {
    key: function (e) {
      if (e.key) {
        var t = Hh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ei(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Zh[e.keyCode] || "Unidentified"
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
    getModifierState: Rs,
    charCode: function (e) {
      return e.type === "keypress" ? ei(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ei(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xh = Fe(Kh),
  qh = J({}, Gi, {
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
  Ga = Fe(qh),
  Jh = J({}, Sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rs,
  }),
  bh = Fe(Jh),
  e0 = J({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  t0 = Fe(e0),
  n0 = J({}, Gi, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  r0 = Fe(n0),
  l0 = [9, 13, 27, 32],
  Is = Et && "CompositionEvent" in window,
  Rr = null;
Et && "documentMode" in document && (Rr = document.documentMode);
var i0 = Et && "TextEvent" in window && !Rr,
  gf = Et && (!Is || (Rr && 8 < Rr && 11 >= Rr)),
  Ya = String.fromCharCode(32),
  Ka = !1;
function vf(e, t) {
  switch (e) {
    case "keyup":
      return l0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function yf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Pn = !1;
function o0(e, t) {
  switch (e) {
    case "compositionend":
      return yf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ka = !0), Ya);
    case "textInput":
      return (e = t.data), e === Ya && Ka ? null : e;
    default:
      return null;
  }
}
function u0(e, t) {
  if (Pn)
    return e === "compositionend" || (!Is && vf(e, t))
      ? ((e = mf()), (bl = Ms = Tt = null), (Pn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return gf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var s0 = {
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
function Xa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!s0[e.type] : t === "textarea";
}
function wf(e, t, n, r) {
  Kd(r),
    (t = ki(t, "onChange")),
    0 < t.length &&
      ((n = new zs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Ir = null,
  qr = null;
function a0(e) {
  Mf(e, 0);
}
function Yi(e) {
  var t = zn(e);
  if (Bd(t)) return e;
}
function c0(e, t) {
  if (e === "change") return t;
}
var Sf = !1;
if (Et) {
  var zo;
  if (Et) {
    var Ro = "oninput" in document;
    if (!Ro) {
      var qa = document.createElement("div");
      qa.setAttribute("oninput", "return;"),
        (Ro = typeof qa.oninput == "function");
    }
    zo = Ro;
  } else zo = !1;
  Sf = zo && (!document.documentMode || 9 < document.documentMode);
}
function Ja() {
  Ir && (Ir.detachEvent("onpropertychange", kf), (qr = Ir = null));
}
function kf(e) {
  if (e.propertyName === "value" && Yi(qr)) {
    var t = [];
    wf(t, qr, e, _s(e)), bd(a0, t);
  }
}
function d0(e, t, n) {
  e === "focusin"
    ? (Ja(), (Ir = t), (qr = n), Ir.attachEvent("onpropertychange", kf))
    : e === "focusout" && Ja();
}
function f0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Yi(qr);
}
function p0(e, t) {
  if (e === "click") return Yi(t);
}
function h0(e, t) {
  if (e === "input" || e === "change") return Yi(t);
}
function m0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var lt = typeof Object.is == "function" ? Object.is : m0;
function Jr(e, t) {
  if (lt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!uu.call(t, l) || !lt(e[l], t[l])) return !1;
  }
  return !0;
}
function ba(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ec(e, t) {
  var n = ba(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ba(n);
  }
}
function Cf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Cf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ef() {
  for (var e = window, t = hi(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = hi(e.document);
  }
  return t;
}
function js(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function g0(e) {
  var t = Ef(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Cf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && js(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ec(n, i));
        var o = ec(n, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var v0 = Et && "documentMode" in document && 11 >= document.documentMode,
  Nn = null,
  Lu = null,
  jr = null,
  $u = !1;
function tc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  $u ||
    Nn == null ||
    Nn !== hi(r) ||
    ((r = Nn),
    "selectionStart" in r && js(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (jr && Jr(jr, r)) ||
      ((jr = r),
      (r = ki(Lu, "onSelect")),
      0 < r.length &&
        ((t = new zs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Nn))));
}
function Tl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mn = {
    animationend: Tl("Animation", "AnimationEnd"),
    animationiteration: Tl("Animation", "AnimationIteration"),
    animationstart: Tl("Animation", "AnimationStart"),
    transitionend: Tl("Transition", "TransitionEnd"),
  },
  Io = {},
  xf = {};
Et &&
  ((xf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mn.animationend.animation,
    delete Mn.animationiteration.animation,
    delete Mn.animationstart.animation),
  "TransitionEvent" in window || delete Mn.transitionend.transition);
function Ki(e) {
  if (Io[e]) return Io[e];
  if (!Mn[e]) return e;
  var t = Mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in xf) return (Io[e] = t[n]);
  return e;
}
var _f = Ki("animationend"),
  Lf = Ki("animationiteration"),
  $f = Ki("animationstart"),
  Pf = Ki("transitionend"),
  Nf = new Map(),
  nc =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  Nf.set(e, t), kn(t, [e]);
}
for (var jo = 0; jo < nc.length; jo++) {
  var Oo = nc[jo],
    y0 = Oo.toLowerCase(),
    w0 = Oo[0].toUpperCase() + Oo.slice(1);
  qt(y0, "on" + w0);
}
qt(_f, "onAnimationEnd");
qt(Lf, "onAnimationIteration");
qt($f, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(Pf, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
kn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
kn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
kn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Pr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  S0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));
function rc(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yh(r, t, void 0, e), (e.currentTarget = null);
}
function Mf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          rc(l, u, a), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          rc(l, u, a), (i = s);
        }
    }
  }
  if (gi) throw ((e = Cu), (gi = !1), (Cu = null), e);
}
function H(e, t) {
  var n = t[Ru];
  n === void 0 && (n = t[Ru] = new Set());
  var r = e + "__bubble";
  n.has(r) || (zf(t, e, 2, !1), n.add(r));
}
function To(e, t, n) {
  var r = 0;
  t && (r |= 4), zf(n, e, r, t);
}
var Fl = "_reactListening" + Math.random().toString(36).slice(2);
function br(e) {
  if (!e[Fl]) {
    (e[Fl] = !0),
      Fd.forEach(function (n) {
        n !== "selectionchange" && (S0.has(n) || To(n, !1, e), To(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Fl] || ((t[Fl] = !0), To("selectionchange", !1, t));
  }
}
function zf(e, t, n, r) {
  switch (hf(t)) {
    case 1:
      var l = jh;
      break;
    case 4:
      l = Oh;
      break;
    default:
      l = Ns;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ku ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Fo(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = ln(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  bd(function () {
    var a = i,
      m = _s(n),
      h = [];
    e: {
      var p = Nf.get(e);
      if (p !== void 0) {
        var y = zs,
          v = e;
        switch (e) {
          case "keypress":
            if (ei(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Xh;
            break;
          case "focusin":
            (v = "focus"), (y = Mo);
            break;
          case "focusout":
            (v = "blur"), (y = Mo);
            break;
          case "beforeblur":
          case "afterblur":
            y = Mo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ah;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = bh;
            break;
          case _f:
          case Lf:
          case $f:
            y = Uh;
            break;
          case Pf:
            y = t0;
            break;
          case "scroll":
            y = Th;
            break;
          case "wheel":
            y = r0;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Wh;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Ga;
        }
        var w = (t & 4) !== 0,
          L = !w && e === "scroll",
          d = w ? (p !== null ? p + "Capture" : null) : p;
        w = [];
        for (var c = a, f; c !== null; ) {
          f = c;
          var g = f.stateNode;
          if (
            (f.tag === 5 &&
              g !== null &&
              ((f = g),
              d !== null && ((g = Gr(c, d)), g != null && w.push(el(c, g, f)))),
            L)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((p = new y(p, v, null, n, m)), h.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (y = e === "mouseout" || e === "pointerout"),
          p &&
            n !== wu &&
            (v = n.relatedTarget || n.fromElement) &&
            (ln(v) || v[xt]))
        )
          break e;
        if (
          (y || p) &&
          ((p =
            m.window === m
              ? m
              : (p = m.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          y
            ? ((v = n.relatedTarget || n.toElement),
              (y = a),
              (v = v ? ln(v) : null),
              v !== null &&
                ((L = Cn(v)), v !== L || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((y = null), (v = a)),
          y !== v)
        ) {
          if (
            ((w = Ha),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Ga),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (L = y == null ? p : zn(y)),
            (f = v == null ? p : zn(v)),
            (p = new w(g, c + "leave", y, n, m)),
            (p.target = L),
            (p.relatedTarget = f),
            (g = null),
            ln(m) === a &&
              ((w = new w(d, c + "enter", v, n, m)),
              (w.target = f),
              (w.relatedTarget = L),
              (g = w)),
            (L = g),
            y && v)
          )
            t: {
              for (w = y, d = v, c = 0, f = w; f; f = xn(f)) c++;
              for (f = 0, g = d; g; g = xn(g)) f++;
              for (; 0 < c - f; ) (w = xn(w)), c--;
              for (; 0 < f - c; ) (d = xn(d)), f--;
              for (; c--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = xn(w)), (d = xn(d));
              }
              w = null;
            }
          else w = null;
          y !== null && lc(h, p, y, w, !1),
            v !== null && L !== null && lc(h, L, v, w, !0);
        }
      }
      e: {
        if (
          ((p = a ? zn(a) : window),
          (y = p.nodeName && p.nodeName.toLowerCase()),
          y === "select" || (y === "input" && p.type === "file"))
        )
          var k = c0;
        else if (Xa(p))
          if (Sf) k = h0;
          else {
            k = f0;
            var E = d0;
          }
        else
          (y = p.nodeName) &&
            y.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (k = p0);
        if (k && (k = k(e, a))) {
          wf(h, k, n, m);
          break e;
        }
        E && E(e, p, a),
          e === "focusout" &&
            (E = p._wrapperState) &&
            E.controlled &&
            p.type === "number" &&
            hu(p, "number", p.value);
      }
      switch (((E = a ? zn(a) : window), e)) {
        case "focusin":
          (Xa(E) || E.contentEditable === "true") &&
            ((Nn = E), (Lu = a), (jr = null));
          break;
        case "focusout":
          jr = Lu = Nn = null;
          break;
        case "mousedown":
          $u = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ($u = !1), tc(h, n, m);
          break;
        case "selectionchange":
          if (v0) break;
        case "keydown":
        case "keyup":
          tc(h, n, m);
      }
      var C;
      if (Is)
        e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
      else
        Pn
          ? vf(e, n) && ($ = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
      $ &&
        (gf &&
          n.locale !== "ko" &&
          (Pn || $ !== "onCompositionStart"
            ? $ === "onCompositionEnd" && Pn && (C = mf())
            : ((Tt = m),
              (Ms = "value" in Tt ? Tt.value : Tt.textContent),
              (Pn = !0))),
        (E = ki(a, $)),
        0 < E.length &&
          (($ = new Za($, e, null, n, m)),
          h.push({ event: $, listeners: E }),
          C ? ($.data = C) : ((C = yf(n)), C !== null && ($.data = C)))),
        (C = i0 ? o0(e, n) : u0(e, n)) &&
          ((a = ki(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new Za("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: a }),
            (m.data = C)));
    }
    Mf(h, t);
  });
}
function el(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ki(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Gr(e, n)),
      i != null && r.unshift(el(e, i, l)),
      (i = Gr(e, t)),
      i != null && r.push(el(e, i, l))),
      (e = e.return);
  }
  return r;
}
function xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      l
        ? ((s = Gr(n, i)), s != null && o.unshift(el(n, s, u)))
        : l || ((s = Gr(n, i)), s != null && o.push(el(n, s, u)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var k0 = /\r\n?/g,
  C0 = /\u0000|\uFFFD/g;
function ic(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      k0,
      `
`
    )
    .replace(C0, "");
}
function Al(e, t, n) {
  if (((t = ic(t)), ic(e) !== t && n)) throw Error(x(425));
}
function Ci() {}
var Pu = null,
  Nu = null;
function Mu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var zu = typeof setTimeout == "function" ? setTimeout : void 0,
  E0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  oc = typeof Promise == "function" ? Promise : void 0,
  x0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof oc < "u"
      ? function (e) {
          return oc.resolve(null).then(e).catch(_0);
        }
      : zu;
function _0(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ao(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Xr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Xr(t);
}
function Wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function uc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ur = Math.random().toString(36).slice(2),
  dt = "__reactFiber$" + ur,
  tl = "__reactProps$" + ur,
  xt = "__reactContainer$" + ur,
  Ru = "__reactEvents$" + ur,
  L0 = "__reactListeners$" + ur,
  $0 = "__reactHandles$" + ur;
function ln(e) {
  var t = e[dt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[xt] || n[dt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = uc(e); e !== null; ) {
          if ((n = e[dt])) return n;
          e = uc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function kl(e) {
  return (
    (e = e[dt] || e[xt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function zn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(x(33));
}
function Xi(e) {
  return e[tl] || null;
}
var Iu = [],
  Rn = -1;
function Jt(e) {
  return { current: e };
}
function G(e) {
  0 > Rn || ((e.current = Iu[Rn]), (Iu[Rn] = null), Rn--);
}
function Q(e, t) {
  Rn++, (Iu[Rn] = e.current), (e.current = t);
}
var Xt = {},
  ge = Jt(Xt),
  $e = Jt(!1),
  pn = Xt;
function Yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in n) l[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ei() {
  G($e), G(ge);
}
function sc(e, t, n) {
  if (ge.current !== Xt) throw Error(x(168));
  Q(ge, t), Q($e, n);
}
function Rf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(x(108, dh(e) || "Unknown", l));
  return J({}, n, r);
}
function xi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Xt),
    (pn = ge.current),
    Q(ge, e),
    Q($e, $e.current),
    !0
  );
}
function ac(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(x(169));
  n
    ? ((e = Rf(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      G($e),
      G(ge),
      Q(ge, e))
    : G($e),
    Q($e, n);
}
var yt = null,
  qi = !1,
  Do = !1;
function If(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
function P0(e) {
  (qi = !0), If(e);
}
function bt() {
  if (!Do && yt !== null) {
    Do = !0;
    var e = 0,
      t = B;
    try {
      var n = yt;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (yt = null), (qi = !1);
    } catch (l) {
      throw (yt !== null && (yt = yt.slice(e + 1)), rf(Ls, bt), l);
    } finally {
      (B = t), (Do = !1);
    }
  }
  return null;
}
var In = [],
  jn = 0,
  _i = null,
  Li = 0,
  De = [],
  Ve = 0,
  hn = null,
  St = 1,
  kt = "";
function tn(e, t) {
  (In[jn++] = Li), (In[jn++] = _i), (_i = e), (Li = t);
}
function jf(e, t, n) {
  (De[Ve++] = St), (De[Ve++] = kt), (De[Ve++] = hn), (hn = e);
  var r = St;
  e = kt;
  var l = 32 - tt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var i = 32 - tt(t) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (St = (1 << (32 - tt(t) + l)) | (n << l) | r),
      (kt = i + e);
  } else (St = (1 << i) | (n << l) | r), (kt = e);
}
function Os(e) {
  e.return !== null && (tn(e, 1), jf(e, 1, 0));
}
function Ts(e) {
  for (; e === _i; )
    (_i = In[--jn]), (In[jn] = null), (Li = In[--jn]), (In[jn] = null);
  for (; e === hn; )
    (hn = De[--Ve]),
      (De[Ve] = null),
      (kt = De[--Ve]),
      (De[Ve] = null),
      (St = De[--Ve]),
      (De[Ve] = null);
}
var je = null,
  Re = null,
  K = !1,
  Je = null;
function Of(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (je = e), (Re = Wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (je = e), (Re = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: St, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (je = e),
            (Re = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ju(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ou(e) {
  if (K) {
    var t = Re;
    if (t) {
      var n = t;
      if (!cc(e, t)) {
        if (ju(e)) throw Error(x(418));
        t = Wt(n.nextSibling);
        var r = je;
        t && cc(e, t)
          ? Of(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (K = !1), (je = e));
      }
    } else {
      if (ju(e)) throw Error(x(418));
      (e.flags = (e.flags & -4097) | 2), (K = !1), (je = e);
    }
  }
}
function dc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  je = e;
}
function Dl(e) {
  if (e !== je) return !1;
  if (!K) return dc(e), (K = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Mu(e.type, e.memoizedProps))),
    t && (t = Re))
  ) {
    if (ju(e)) throw (Tf(), Error(x(418)));
    for (; t; ) Of(e, t), (t = Wt(t.nextSibling));
  }
  if ((dc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(x(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Re = Wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Re = null;
    }
  } else Re = je ? Wt(e.stateNode.nextSibling) : null;
  return !0;
}
function Tf() {
  for (var e = Re; e; ) e = Wt(e.nextSibling);
}
function Kn() {
  (Re = je = null), (K = !1);
}
function Fs(e) {
  Je === null ? (Je = [e]) : Je.push(e);
}
var N0 = $t.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var $i = Jt(null),
  Pi = null,
  On = null,
  As = null;
function Ds() {
  As = On = Pi = null;
}
function Vs(e) {
  var t = $i.current;
  G($i), (e._currentValue = t);
}
function Tu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Wn(e, t) {
  (Pi = e),
    (As = On = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (_e = !0), (e.firstContext = null));
}
function He(e) {
  var t = e._currentValue;
  if (As !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), On === null)) {
      if (Pi === null) throw Error(x(308));
      (On = e), (Pi.dependencies = { lanes: 0, firstContext: e });
    } else On = On.next = e;
  return t;
}
var on = null;
function Us(e) {
  on === null ? (on = [e]) : on.push(e);
}
function Ff(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Us(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    _t(e, r)
  );
}
function _t(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var It = !1;
function Bs(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Af(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), D & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      _t(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Us(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    _t(e, n)
  );
}
function ti(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
function fc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (l = i = t) : (i = i.next = t);
    } else l = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ni(e, t, n, r) {
  var l = e.updateQueue;
  It = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), o === null ? (i = a) : (o.next = a), (o = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== o &&
        (u === null ? (m.firstBaseUpdate = a) : (u.next = a),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (m = a = s = null), (u = i);
    do {
      var p = u.lane,
        y = u.eventTime;
      if ((r & p) === p) {
        m !== null &&
          (m = m.next =
            {
              eventTime: y,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var v = e,
            w = u;
          switch (((p = t), (y = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                h = v.call(y, h, p);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (p = typeof v == "function" ? v.call(y, h, p) : v),
                p == null)
              )
                break e;
              h = J({}, h, p);
              break e;
            case 2:
              It = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (y = {
          eventTime: y,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((a = m = y), (s = h)) : (m = m.next = y),
          (o |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = a),
      (l.lastBaseUpdate = m),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (o |= l.lane), (l = l.next);
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    (gn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function pc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(x(191, l));
        l.call(r);
      }
    }
}
var Df = new Td.Component().refs;
function Fu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ji = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Zt(e),
      i = Ct(r, l);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, l)),
      t !== null && (nt(t, e, l, r), ti(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = we(),
      l = Zt(e),
      i = Ct(r, l);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, l)),
      t !== null && (nt(t, e, l, r), ti(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = we(),
      r = Zt(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Qt(e, l, r)),
      t !== null && (nt(t, e, r, n), ti(t, e, r));
  },
};
function hc(e, t, n, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Jr(n, r) || !Jr(l, i)
      : !0
  );
}
function Vf(e, t, n) {
  var r = !1,
    l = Xt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = He(i))
      : ((l = Pe(t) ? pn : ge.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Yn(e, l) : Xt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ji),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function mc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ji.enqueueReplaceState(t, t.state, null);
}
function Au(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Df), Bs(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (l.context = He(i))
    : ((i = Pe(t) ? pn : ge.current), (l.context = Yn(e, i))),
    (l.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Fu(e, t, i, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ji.enqueueReplaceState(l, l.state, null),
      Ni(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function yr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(x(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(x(147, e));
      var l = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var u = l.refs;
            u === Df && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(x(284));
    if (!n._owner) throw Error(x(290, e));
  }
  return e;
}
function Vl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      x(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gc(e) {
  var t = e._init;
  return t(e._payload);
}
function Uf(e) {
  function t(d, c) {
    if (e) {
      var f = d.deletions;
      f === null ? ((d.deletions = [c]), (d.flags |= 16)) : f.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = Gt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, f) {
    return (
      (d.index = f),
      e
        ? ((f = d.alternate),
          f !== null
            ? ((f = f.index), f < c ? ((d.flags |= 2), c) : f)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, c, f, g) {
    return c === null || c.tag !== 6
      ? ((c = Zo(f, d.mode, g)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function s(d, c, f, g) {
    var k = f.type;
    return k === $n
      ? m(d, c, f.props.children, g, f.key)
      : c !== null &&
        (c.elementType === k ||
          (typeof k == "object" &&
            k !== null &&
            k.$$typeof === Rt &&
            gc(k) === c.type))
      ? ((g = l(c, f.props)), (g.ref = yr(d, c, f)), (g.return = d), g)
      : ((g = ui(f.type, f.key, f.props, null, d.mode, g)),
        (g.ref = yr(d, c, f)),
        (g.return = d),
        g);
  }
  function a(d, c, f, g) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== f.containerInfo ||
      c.stateNode.implementation !== f.implementation
      ? ((c = Go(f, d.mode, g)), (c.return = d), c)
      : ((c = l(c, f.children || [])), (c.return = d), c);
  }
  function m(d, c, f, g, k) {
    return c === null || c.tag !== 7
      ? ((c = cn(f, d.mode, g, k)), (c.return = d), c)
      : ((c = l(c, f)), (c.return = d), c);
  }
  function h(d, c, f) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Zo("" + c, d.mode, f)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case Nl:
          return (
            (f = ui(c.type, c.key, c.props, null, d.mode, f)),
            (f.ref = yr(d, null, c)),
            (f.return = d),
            f
          );
        case Ln:
          return (c = Go(c, d.mode, f)), (c.return = d), c;
        case Rt:
          var g = c._init;
          return h(d, g(c._payload), f);
      }
      if (Lr(c) || pr(c))
        return (c = cn(c, d.mode, f, null)), (c.return = d), c;
      Vl(d, c);
    }
    return null;
  }
  function p(d, c, f, g) {
    var k = c !== null ? c.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return k !== null ? null : u(d, c, "" + f, g);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case Nl:
          return f.key === k ? s(d, c, f, g) : null;
        case Ln:
          return f.key === k ? a(d, c, f, g) : null;
        case Rt:
          return (k = f._init), p(d, c, k(f._payload), g);
      }
      if (Lr(f) || pr(f)) return k !== null ? null : m(d, c, f, g, null);
      Vl(d, f);
    }
    return null;
  }
  function y(d, c, f, g, k) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(f) || null), u(c, d, "" + g, k);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case Nl:
          return (d = d.get(g.key === null ? f : g.key) || null), s(c, d, g, k);
        case Ln:
          return (d = d.get(g.key === null ? f : g.key) || null), a(c, d, g, k);
        case Rt:
          var E = g._init;
          return y(d, c, f, E(g._payload), k);
      }
      if (Lr(g) || pr(g)) return (d = d.get(f) || null), m(c, d, g, k, null);
      Vl(c, g);
    }
    return null;
  }
  function v(d, c, f, g) {
    for (
      var k = null, E = null, C = c, $ = (c = 0), V = null;
      C !== null && $ < f.length;
      $++
    ) {
      C.index > $ ? ((V = C), (C = null)) : (V = C.sibling);
      var R = p(d, C, f[$], g);
      if (R === null) {
        C === null && (C = V);
        break;
      }
      e && C && R.alternate === null && t(d, C),
        (c = i(R, c, $)),
        E === null ? (k = R) : (E.sibling = R),
        (E = R),
        (C = V);
    }
    if ($ === f.length) return n(d, C), K && tn(d, $), k;
    if (C === null) {
      for (; $ < f.length; $++)
        (C = h(d, f[$], g)),
          C !== null &&
            ((c = i(C, c, $)), E === null ? (k = C) : (E.sibling = C), (E = C));
      return K && tn(d, $), k;
    }
    for (C = r(d, C); $ < f.length; $++)
      (V = y(C, d, $, f[$], g)),
        V !== null &&
          (e && V.alternate !== null && C.delete(V.key === null ? $ : V.key),
          (c = i(V, c, $)),
          E === null ? (k = V) : (E.sibling = V),
          (E = V));
    return (
      e &&
        C.forEach(function (re) {
          return t(d, re);
        }),
      K && tn(d, $),
      k
    );
  }
  function w(d, c, f, g) {
    var k = pr(f);
    if (typeof k != "function") throw Error(x(150));
    if (((f = k.call(f)), f == null)) throw Error(x(151));
    for (
      var E = (k = null), C = c, $ = (c = 0), V = null, R = f.next();
      C !== null && !R.done;
      $++, R = f.next()
    ) {
      C.index > $ ? ((V = C), (C = null)) : (V = C.sibling);
      var re = p(d, C, R.value, g);
      if (re === null) {
        C === null && (C = V);
        break;
      }
      e && C && re.alternate === null && t(d, C),
        (c = i(re, c, $)),
        E === null ? (k = re) : (E.sibling = re),
        (E = re),
        (C = V);
    }
    if (R.done) return n(d, C), K && tn(d, $), k;
    if (C === null) {
      for (; !R.done; $++, R = f.next())
        (R = h(d, R.value, g)),
          R !== null &&
            ((c = i(R, c, $)), E === null ? (k = R) : (E.sibling = R), (E = R));
      return K && tn(d, $), k;
    }
    for (C = r(d, C); !R.done; $++, R = f.next())
      (R = y(C, d, $, R.value, g)),
        R !== null &&
          (e && R.alternate !== null && C.delete(R.key === null ? $ : R.key),
          (c = i(R, c, $)),
          E === null ? (k = R) : (E.sibling = R),
          (E = R));
    return (
      e &&
        C.forEach(function (le) {
          return t(d, le);
        }),
      K && tn(d, $),
      k
    );
  }
  function L(d, c, f, g) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === $n &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case Nl:
          e: {
            for (var k = f.key, E = c; E !== null; ) {
              if (E.key === k) {
                if (((k = f.type), k === $n)) {
                  if (E.tag === 7) {
                    n(d, E.sibling),
                      (c = l(E, f.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  E.elementType === k ||
                  (typeof k == "object" &&
                    k !== null &&
                    k.$$typeof === Rt &&
                    gc(k) === E.type)
                ) {
                  n(d, E.sibling),
                    (c = l(E, f.props)),
                    (c.ref = yr(d, E, f)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            f.type === $n
              ? ((c = cn(f.props.children, d.mode, g, f.key)),
                (c.return = d),
                (d = c))
              : ((g = ui(f.type, f.key, f.props, null, d.mode, g)),
                (g.ref = yr(d, c, f)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case Ln:
          e: {
            for (E = f.key; c !== null; ) {
              if (c.key === E)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === f.containerInfo &&
                  c.stateNode.implementation === f.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, f.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = Go(f, d.mode, g)), (c.return = d), (d = c);
          }
          return o(d);
        case Rt:
          return (E = f._init), L(d, c, E(f._payload), g);
      }
      if (Lr(f)) return v(d, c, f, g);
      if (pr(f)) return w(d, c, f, g);
      Vl(d, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, f)), (c.return = d), (d = c))
          : (n(d, c), (c = Zo(f, d.mode, g)), (c.return = d), (d = c)),
        o(d))
      : n(d, c);
  }
  return L;
}
var Xn = Uf(!0),
  Bf = Uf(!1),
  Cl = {},
  pt = Jt(Cl),
  nl = Jt(Cl),
  rl = Jt(Cl);
function un(e) {
  if (e === Cl) throw Error(x(174));
  return e;
}
function Ws(e, t) {
  switch ((Q(rl, t), Q(nl, e), Q(pt, Cl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : gu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = gu(t, e));
  }
  G(pt), Q(pt, t);
}
function qn() {
  G(pt), G(nl), G(rl);
}
function Wf(e) {
  un(rl.current);
  var t = un(pt.current),
    n = gu(t, e.type);
  t !== n && (Q(nl, e), Q(pt, n));
}
function Qs(e) {
  nl.current === e && (G(pt), G(nl));
}
var X = Jt(0);
function Mi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vo = [];
function Hs() {
  for (var e = 0; e < Vo.length; e++)
    Vo[e]._workInProgressVersionPrimary = null;
  Vo.length = 0;
}
var ni = $t.ReactCurrentDispatcher,
  Uo = $t.ReactCurrentBatchConfig,
  mn = 0,
  q = null,
  ie = null,
  ue = null,
  zi = !1,
  Or = !1,
  ll = 0,
  M0 = 0;
function pe() {
  throw Error(x(321));
}
function Zs(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!lt(e[n], t[n])) return !1;
  return !0;
}
function Gs(e, t, n, r, l, i) {
  if (
    ((mn = i),
    (q = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (ni.current = e === null || e.memoizedState === null ? j0 : O0),
    (e = n(r, l)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (ll = 0), 25 <= i)) throw Error(x(301));
      (i += 1),
        (ue = ie = null),
        (t.updateQueue = null),
        (ni.current = T0),
        (e = n(r, l));
    } while (Or);
  }
  if (
    ((ni.current = Ri),
    (t = ie !== null && ie.next !== null),
    (mn = 0),
    (ue = ie = q = null),
    (zi = !1),
    t)
  )
    throw Error(x(300));
  return e;
}
function Ys() {
  var e = ll !== 0;
  return (ll = 0), e;
}
function at() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ue === null ? (q.memoizedState = ue = e) : (ue = ue.next = e), ue;
}
function Ze() {
  if (ie === null) {
    var e = q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ie.next;
  var t = ue === null ? q.memoizedState : ue.next;
  if (t !== null) (ue = t), (ie = e);
  else {
    if (e === null) throw Error(x(310));
    (ie = e),
      (e = {
        memoizedState: ie.memoizedState,
        baseState: ie.baseState,
        baseQueue: ie.baseQueue,
        queue: ie.queue,
        next: null,
      }),
      ue === null ? (q.memoizedState = ue = e) : (ue = ue.next = e);
  }
  return ue;
}
function il(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bo(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = ie,
    l = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (n.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      a = i;
    do {
      var m = a.lane;
      if ((mn & m) === m)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var h = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (q.lanes |= m),
          (gn |= m);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (o = r) : (s.next = u),
      lt(r, t.memoizedState) || (_e = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (q.lanes |= i), (gn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Wo(e) {
  var t = Ze(),
    n = t.queue;
  if (n === null) throw Error(x(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    lt(i, t.memoizedState) || (_e = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Qf() {}
function Hf(e, t) {
  var n = q,
    r = Ze(),
    l = t(),
    i = !lt(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (_e = !0)),
    (r = r.queue),
    Ks(Yf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ue !== null && ue.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ol(9, Gf.bind(null, n, r, l, t), void 0, null),
      ae === null)
    )
      throw Error(x(349));
    mn & 30 || Zf(n, t, l);
  }
  return l;
}
function Zf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Gf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Kf(t) && Xf(e);
}
function Yf(e, t, n) {
  return n(function () {
    Kf(t) && Xf(e);
  });
}
function Kf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !lt(e, n);
  } catch {
    return !0;
  }
}
function Xf(e) {
  var t = _t(e, 1);
  t !== null && nt(t, e, 1, -1);
}
function vc(e) {
  var t = at();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: il,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = I0.bind(null, q, e)),
    [t.memoizedState, e]
  );
}
function ol(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = q.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (q.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function qf() {
  return Ze().memoizedState;
}
function ri(e, t, n, r) {
  var l = at();
  (q.flags |= e),
    (l.memoizedState = ol(1 | t, n, void 0, r === void 0 ? null : r));
}
function bi(e, t, n, r) {
  var l = Ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ie !== null) {
    var o = ie.memoizedState;
    if (((i = o.destroy), r !== null && Zs(r, o.deps))) {
      l.memoizedState = ol(t, n, i, r);
      return;
    }
  }
  (q.flags |= e), (l.memoizedState = ol(1 | t, n, i, r));
}
function yc(e, t) {
  return ri(8390656, 8, e, t);
}
function Ks(e, t) {
  return bi(2048, 8, e, t);
}
function Jf(e, t) {
  return bi(4, 2, e, t);
}
function bf(e, t) {
  return bi(4, 4, e, t);
}
function ep(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function tp(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bi(4, 4, ep.bind(null, t, e), n)
  );
}
function Xs() {}
function np(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function rp(e, t) {
  var n = Ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Zs(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function lp(e, t, n) {
  return mn & 21
    ? (lt(n, t) || ((n = uf()), (q.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (_e = !0)), (e.memoizedState = n));
}
function z0(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Uo.transition;
  Uo.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (Uo.transition = r);
  }
}
function ip() {
  return Ze().memoizedState;
}
function R0(e, t, n) {
  var r = Zt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    op(e))
  )
    up(t, n);
  else if (((n = Ff(e, t, n, r)), n !== null)) {
    var l = we();
    nt(n, e, r, l), sp(n, t, r);
  }
}
function I0(e, t, n) {
  var r = Zt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (op(e)) up(t, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          u = i(o, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), lt(u, o))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), Us(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Ff(e, t, l, r)),
      n !== null && ((l = we()), nt(n, e, r, l), sp(n, t, r));
  }
}
function op(e) {
  var t = e.alternate;
  return e === q || (t !== null && t === q);
}
function up(e, t) {
  Or = zi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), $s(e, n);
  }
}
var Ri = {
    readContext: He,
    useCallback: pe,
    useContext: pe,
    useEffect: pe,
    useImperativeHandle: pe,
    useInsertionEffect: pe,
    useLayoutEffect: pe,
    useMemo: pe,
    useReducer: pe,
    useRef: pe,
    useState: pe,
    useDebugValue: pe,
    useDeferredValue: pe,
    useTransition: pe,
    useMutableSource: pe,
    useSyncExternalStore: pe,
    useId: pe,
    unstable_isNewReconciler: !1,
  },
  j0 = {
    readContext: He,
    useCallback: function (e, t) {
      return (at().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: He,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ri(4194308, 4, ep.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ri(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ri(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = at();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = at();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = R0.bind(null, q, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = at();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: vc,
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      return (at().memoizedState = e);
    },
    useTransition: function () {
      var e = vc(!1),
        t = e[0];
      return (e = z0.bind(null, e[1])), (at().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = q,
        l = at();
      if (K) {
        if (n === void 0) throw Error(x(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(x(349));
        mn & 30 || Zf(r, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (l.queue = i),
        yc(Yf.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        ol(9, Gf.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = at(),
        t = ae.identifierPrefix;
      if (K) {
        var n = kt,
          r = St;
        (n = (r & ~(1 << (32 - tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = ll++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = M0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  O0 = {
    readContext: He,
    useCallback: np,
    useContext: He,
    useEffect: Ks,
    useImperativeHandle: tp,
    useInsertionEffect: Jf,
    useLayoutEffect: bf,
    useMemo: rp,
    useReducer: Bo,
    useRef: qf,
    useState: function () {
      return Bo(il);
    },
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      var t = Ze();
      return lp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Bo(il)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Qf,
    useSyncExternalStore: Hf,
    useId: ip,
    unstable_isNewReconciler: !1,
  },
  T0 = {
    readContext: He,
    useCallback: np,
    useContext: He,
    useEffect: Ks,
    useImperativeHandle: tp,
    useInsertionEffect: Jf,
    useLayoutEffect: bf,
    useMemo: rp,
    useReducer: Wo,
    useRef: qf,
    useState: function () {
      return Wo(il);
    },
    useDebugValue: Xs,
    useDeferredValue: function (e) {
      var t = Ze();
      return ie === null ? (t.memoizedState = e) : lp(t, ie.memoizedState, e);
    },
    useTransition: function () {
      var e = Wo(il)[0],
        t = Ze().memoizedState;
      return [e, t];
    },
    useMutableSource: Qf,
    useSyncExternalStore: Hf,
    useId: ip,
    unstable_isNewReconciler: !1,
  };
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += ch(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Qo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var F0 = typeof WeakMap == "function" ? WeakMap : Map;
function ap(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ji || ((ji = !0), (Ku = r)), Du(e, t);
    }),
    n
  );
}
function cp(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Du(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Du(e, t),
          typeof r != "function" &&
            (Ht === null ? (Ht = new Set([this])) : Ht.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function wc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new F0();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = q0.bind(null, e, t, n)), t.then(e, e));
}
function Sc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function kc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var A0 = $t.ReactCurrentOwner,
  _e = !1;
function ye(e, t, n, r) {
  t.child = e === null ? Bf(t, null, n, r) : Xn(t, e.child, n, r);
}
function Cc(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return (
    Wn(t, l),
    (r = Gs(e, t, n, r, i, l)),
    (n = Ys()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (K && n && Os(t), (t.flags |= 1), ye(e, t, r, l), t.child)
  );
}
function Ec(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !la(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), dp(e, t, i, r, l))
      : ((e = ui(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Jr), n(o, r) && e.ref === t.ref)
    )
      return Lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Gt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function dp(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Jr(i, r) && e.ref === t.ref)
      if (((_e = !1), (t.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (_e = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return Vu(e, t, n, r, l);
}
function fp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Q(Fn, ze),
        (ze |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Q(Fn, ze),
          (ze |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        Q(Fn, ze),
        (ze |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      Q(Fn, ze),
      (ze |= r);
  return ye(e, t, l, n), t.child;
}
function pp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vu(e, t, n, r, l) {
  var i = Pe(n) ? pn : ge.current;
  return (
    (i = Yn(t, i)),
    Wn(t, l),
    (n = Gs(e, t, n, r, i, l)),
    (r = Ys()),
    e !== null && !_e
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (K && r && Os(t), (t.flags |= 1), ye(e, t, n, l), t.child)
  );
}
function xc(e, t, n, r, l) {
  if (Pe(n)) {
    var i = !0;
    xi(t);
  } else i = !1;
  if ((Wn(t, l), t.stateNode === null))
    li(e, t), Vf(t, n, r), Au(t, n, r, l), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      u = t.memoizedProps;
    o.props = u;
    var s = o.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = He(a))
      : ((a = Pe(n) ? pn : ge.current), (a = Yn(t, a)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && mc(t, o, r, a)),
      (It = !1);
    var p = t.memoizedState;
    (o.state = p),
      Ni(t, r, o, l),
      (s = t.memoizedState),
      u !== r || p !== s || $e.current || It
        ? (typeof m == "function" && (Fu(t, n, m, r), (s = t.memoizedState)),
          (u = It || hc(t, n, u, r, p, s, a))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = a),
          (r = u))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Af(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : Xe(t.type, u)),
      (o.props = a),
      (h = t.pendingProps),
      (p = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = He(s))
        : ((s = Pe(n) ? pn : ge.current), (s = Yn(t, s)));
    var y = n.getDerivedStateFromProps;
    (m =
      typeof y == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || p !== s) && mc(t, o, r, s)),
      (It = !1),
      (p = t.memoizedState),
      (o.state = p),
      Ni(t, r, o, l);
    var v = t.memoizedState;
    u !== h || p !== v || $e.current || It
      ? (typeof y == "function" && (Fu(t, n, y, r), (v = t.memoizedState)),
        (a = It || hc(t, n, a, r, p, v, s) || !1)
          ? (m ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, v, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, v, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (o.props = r),
        (o.state = v),
        (o.context = s),
        (r = a))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Uu(e, t, n, r, i, l);
}
function Uu(e, t, n, r, l, i) {
  pp(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ac(t, n, !1), Lt(e, t, i);
  (r = t.stateNode), (A0.current = t);
  var u =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Xn(t, e.child, null, i)), (t.child = Xn(t, null, u, i)))
      : ye(e, t, u, i),
    (t.memoizedState = r.state),
    l && ac(t, n, !0),
    t.child
  );
}
function hp(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    Ws(e, t.containerInfo);
}
function _c(e, t, n, r, l) {
  return Kn(), Fs(l), (t.flags |= 256), ye(e, t, n, r), t.child;
}
var Bu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function mp(e, t, n) {
  var r = t.pendingProps,
    l = X.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Q(X, l & 1),
    e === null)
  )
    return (
      Ou(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = no(o, r, 0, null)),
              (e = cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Wu(n)),
              (t.memoizedState = Bu),
              e)
            : qs(t, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return D0(e, t, o, r, u, l, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Gt(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = Gt(u, i)) : ((i = cn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Wu(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Bu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Gt(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function qs(e, t) {
  return (
    (t = no({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ul(e, t, n, r) {
  return (
    r !== null && Fs(r),
    Xn(t, e.child, null, n),
    (e = qs(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function D0(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Qo(Error(x(422)))), Ul(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (l = t.mode),
        (r = no({ mode: "visible", children: r.children }, l, 0, null)),
        (i = cn(i, l, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, o),
        (t.child.memoizedState = Wu(o)),
        (t.memoizedState = Bu),
        i);
  if (!(t.mode & 1)) return Ul(e, t, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(x(419))), (r = Qo(i, r, void 0)), Ul(e, t, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), _e || u)) {
    if (((r = ae), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), _t(e, l), nt(r, e, l, -1));
    }
    return ra(), (r = Qo(Error(x(421)))), Ul(e, t, o, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = J0.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Re = Wt(l.nextSibling)),
      (je = t),
      (K = !0),
      (Je = null),
      e !== null &&
        ((De[Ve++] = St),
        (De[Ve++] = kt),
        (De[Ve++] = hn),
        (St = e.id),
        (kt = e.overflow),
        (hn = t)),
      (t = qs(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Tu(e.return, t, n);
}
function Ho(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = l));
}
function gp(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ye(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Lc(e, n, t);
        else if (e.tag === 19) Lc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((Q(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Mi(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ho(t, !1, l, n, i);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Mi(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Ho(t, !0, n, null, i);
        break;
      case "together":
        Ho(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function li(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(x(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Gt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function V0(e, t, n) {
  switch (t.tag) {
    case 3:
      hp(t), Kn();
      break;
    case 5:
      Wf(t);
      break;
    case 1:
      Pe(t.type) && xi(t);
      break;
    case 4:
      Ws(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      Q($i, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (Q(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? mp(e, t, n)
          : (Q(X, X.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      Q(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return gp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Q(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), fp(e, t, n);
  }
  return Lt(e, t, n);
}
var vp, Qu, yp, wp;
vp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Qu = function () {};
yp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), un(pt.current);
    var i = null;
    switch (n) {
      case "input":
        (l = fu(e, l)), (r = fu(e, r)), (i = []);
        break;
      case "select":
        (l = J({}, l, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = mu(e, l)), (r = mu(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ci);
    }
    vu(n, r);
    var o;
    n = null;
    for (a in l)
      if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
        if (a === "style") {
          var u = l[a];
          for (o in u) u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Hr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = l != null ? l[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Hr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && H("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
wp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function wr(e, t) {
  if (!K)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function he(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function U0(e, t, n) {
  var r = t.pendingProps;
  switch ((Ts(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return he(t), null;
    case 1:
      return Pe(t.type) && Ei(), he(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        G($e),
        G(ge),
        Hs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Dl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Je !== null && (Ju(Je), (Je = null)))),
        Qu(e, t),
        he(t),
        null
      );
    case 5:
      Qs(t);
      var l = un(rl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        yp(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(x(166));
          return he(t), null;
        }
        if (((e = un(pt.current)), Dl(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[dt] = t), (r[tl] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Pr.length; l++) H(Pr[l], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Oa(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Fa(r, i), H("invalid", r);
          }
          vu(n, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Al(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Hr.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Ml(r), Ta(r, i, !0);
              break;
            case "textarea":
              Ml(r), Aa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ci);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Hd(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[dt] = t),
            (e[tl] = r),
            vp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = yu(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Pr.length; l++) H(Pr[l], e);
                l = r;
                break;
              case "source":
                H("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (l = r);
                break;
              case "details":
                H("toggle", e), (l = r);
                break;
              case "input":
                Oa(e, r), (l = fu(e, r)), H("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = J({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                Fa(e, r), (l = mu(e, r)), H("invalid", e);
                break;
              default:
                l = r;
            }
            vu(n, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? Yd(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Zd(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Zr(e, s)
                    : typeof s == "number" && Zr(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Hr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && H("scroll", e)
                      : s != null && ks(e, i, s, o));
              }
            switch (n) {
              case "input":
                Ml(e), Ta(e, r, !1);
                break;
              case "textarea":
                Ml(e), Aa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Dn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ci);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return he(t), null;
    case 6:
      if (e && t.stateNode != null) wp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(x(166));
        if (((n = un(rl.current)), un(pt.current), Dl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[dt] = t),
            (i = r.nodeValue !== n) && ((e = je), e !== null))
          )
            switch (e.tag) {
              case 3:
                Al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[dt] = t),
            (t.stateNode = r);
      }
      return he(t), null;
    case 13:
      if (
        (G(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (K && Re !== null && t.mode & 1 && !(t.flags & 128))
          Tf(), Kn(), (t.flags |= 98560), (i = !1);
        else if (((i = Dl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(x(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(x(317));
            i[dt] = t;
          } else
            Kn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          he(t), (i = !1);
        } else Je !== null && (Ju(Je), (Je = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? oe === 0 && (oe = 3) : ra())),
          t.updateQueue !== null && (t.flags |= 4),
          he(t),
          null);
    case 4:
      return (
        qn(), Qu(e, t), e === null && br(t.stateNode.containerInfo), he(t), null
      );
    case 10:
      return Vs(t.type._context), he(t), null;
    case 17:
      return Pe(t.type) && Ei(), he(t), null;
    case 19:
      if ((G(X), (i = t.memoizedState), i === null)) return he(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) wr(i, !1);
        else {
          if (oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Mi(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    wr(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Q(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            ee() > bn &&
            ((t.flags |= 128), (r = !0), wr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Mi(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              wr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !K)
            )
              return he(t), null;
          } else
            2 * ee() - i.renderingStartTime > bn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), wr(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = ee()),
          (t.sibling = null),
          (n = X.current),
          Q(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (he(t), null);
    case 22:
    case 23:
      return (
        na(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ze & 1073741824 && (he(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : he(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(x(156, t.tag));
}
function B0(e, t) {
  switch ((Ts(t), t.tag)) {
    case 1:
      return (
        Pe(t.type) && Ei(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        G($e),
        G(ge),
        Hs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Qs(t), null;
    case 13:
      if ((G(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(x(340));
        Kn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return G(X), null;
    case 4:
      return qn(), null;
    case 10:
      return Vs(t.type._context), null;
    case 22:
    case 23:
      return na(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Bl = !1,
  me = !1,
  W0 = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Tn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        b(e, t, r);
      }
    else n.current = null;
}
function Hu(e, t, n) {
  try {
    n();
  } catch (r) {
    b(e, t, r);
  }
}
var $c = !1;
function Q0(e, t) {
  if (((Pu = wi), (e = Ef()), js(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            a = 0,
            m = 0,
            h = e,
            p = null;
          t: for (;;) {
            for (
              var y;
              h !== n || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (y = h.firstChild) !== null;

            )
              (p = h), (h = y);
            for (;;) {
              if (h === e) break t;
              if (
                (p === n && ++a === l && (u = o),
                p === i && ++m === r && (s = o),
                (y = h.nextSibling) !== null)
              )
                break;
              (h = p), (p = h.parentNode);
            }
            h = y;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Nu = { focusedElem: e, selectionRange: n }, wi = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    L = v.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Xe(t.type, w),
                      L
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(x(163));
            }
        } catch (g) {
          b(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (v = $c), ($c = !1), v;
}
function Tr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Hu(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function eo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Zu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Sp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[dt], delete t[tl], delete t[Ru], delete t[L0], delete t[$0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Pc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ci));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Gu(e, t, n), e = e.sibling; e !== null; ) Gu(e, t, n), (e = e.sibling);
}
function Yu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Yu(e, t, n), e = e.sibling; e !== null; ) Yu(e, t, n), (e = e.sibling);
}
var ce = null,
  qe = !1;
function Nt(e, t, n) {
  for (n = n.child; n !== null; ) Cp(e, t, n), (n = n.sibling);
}
function Cp(e, t, n) {
  if (ft && typeof ft.onCommitFiberUnmount == "function")
    try {
      ft.onCommitFiberUnmount(Zi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      me || Tn(n, t);
    case 6:
      var r = ce,
        l = qe;
      (ce = null),
        Nt(e, t, n),
        (ce = r),
        (qe = l),
        ce !== null &&
          (qe
            ? ((e = ce),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ce.removeChild(n.stateNode));
      break;
    case 18:
      ce !== null &&
        (qe
          ? ((e = ce),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ao(e.parentNode, n)
              : e.nodeType === 1 && Ao(e, n),
            Xr(e))
          : Ao(ce, n.stateNode));
      break;
    case 4:
      (r = ce),
        (l = qe),
        (ce = n.stateNode.containerInfo),
        (qe = !0),
        Nt(e, t, n),
        (ce = r),
        (qe = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !me &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Hu(n, t, o),
            (l = l.next);
        } while (l !== r);
      }
      Nt(e, t, n);
      break;
    case 1:
      if (
        !me &&
        (Tn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          b(n, t, u);
        }
      Nt(e, t, n);
      break;
    case 21:
      Nt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((me = (r = me) || n.memoizedState !== null), Nt(e, t, n), (me = r))
        : Nt(e, t, n);
      break;
    default:
      Nt(e, t, n);
  }
}
function Nc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new W0()),
      t.forEach(function (r) {
        var l = b0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ke(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var i = e,
          o = t,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (ce = u.stateNode), (qe = !1);
              break e;
            case 3:
              (ce = u.stateNode.containerInfo), (qe = !0);
              break e;
            case 4:
              (ce = u.stateNode.containerInfo), (qe = !0);
              break e;
          }
          u = u.return;
        }
        if (ce === null) throw Error(x(160));
        Cp(i, o, l), (ce = null), (qe = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (a) {
        b(l, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ep(t, e), (t = t.sibling);
}
function Ep(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ke(t, e), st(e), r & 4)) {
        try {
          Tr(3, e, e.return), eo(3, e);
        } catch (w) {
          b(e, e.return, w);
        }
        try {
          Tr(5, e, e.return);
        } catch (w) {
          b(e, e.return, w);
        }
      }
      break;
    case 1:
      Ke(t, e), st(e), r & 512 && n !== null && Tn(n, n.return);
      break;
    case 5:
      if (
        (Ke(t, e),
        st(e),
        r & 512 && n !== null && Tn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Zr(l, "");
        } catch (w) {
          b(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && Wd(l, i),
              yu(u, o);
            var a = yu(u, i);
            for (o = 0; o < s.length; o += 2) {
              var m = s[o],
                h = s[o + 1];
              m === "style"
                ? Yd(l, h)
                : m === "dangerouslySetInnerHTML"
                ? Zd(l, h)
                : m === "children"
                ? Zr(l, h)
                : ks(l, m, h, a);
            }
            switch (u) {
              case "input":
                pu(l, i);
                break;
              case "textarea":
                Qd(l, i);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var y = i.value;
                y != null
                  ? Dn(l, !!i.multiple, y, !1)
                  : p !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Dn(l, !!i.multiple, i.defaultValue, !0)
                      : Dn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[tl] = i;
          } catch (w) {
            b(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Ke(t, e), st(e), r & 4)) {
        if (e.stateNode === null) throw Error(x(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (w) {
          b(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (Ke(t, e), st(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Xr(t.containerInfo);
        } catch (w) {
          b(e, e.return, w);
        }
      break;
    case 4:
      Ke(t, e), st(e);
      break;
    case 13:
      Ke(t, e),
        st(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ea = ee())),
        r & 4 && Nc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((me = (a = me) || m), Ke(t, e), (me = a)) : Ke(t, e),
        st(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (z = e, m = e.child; m !== null; ) {
            for (h = z = m; z !== null; ) {
              switch (((p = z), (y = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tr(4, p, p.return);
                  break;
                case 1:
                  Tn(p, p.return);
                  var v = p.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      b(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Tn(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    zc(h);
                    continue;
                  }
              }
              y !== null ? ((y.return = p), (z = y)) : zc(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (l = h.stateNode),
                  a
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = Gd("display", o)));
              } catch (w) {
                b(e, e.return, w);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (w) {
                b(e, e.return, w);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      Ke(t, e), st(e), r & 4 && Nc(e);
      break;
    case 21:
      break;
    default:
      Ke(t, e), st(e);
  }
}
function st(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(x(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Zr(l, ""), (r.flags &= -33));
          var i = Pc(e);
          Yu(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Pc(e);
          Gu(e, u, o);
          break;
        default:
          throw Error(x(161));
      }
    } catch (s) {
      b(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function H0(e, t, n) {
  (z = e), xp(e);
}
function xp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Bl;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || me;
        u = Bl;
        var a = me;
        if (((Bl = o), (me = s) && !a))
          for (z = l; z !== null; )
            (o = z),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Rc(l)
                : s !== null
                ? ((s.return = o), (z = s))
                : Rc(l);
        for (; i !== null; ) (z = i), xp(i), (i = i.sibling);
        (z = l), (Bl = u), (me = a);
      }
      Mc(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (z = i)) : Mc(e);
  }
}
function Mc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              me || eo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !me)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && pc(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                pc(t, o, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var h = m.dehydrated;
                    h !== null && Xr(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(x(163));
          }
        me || (t.flags & 512 && Zu(t));
      } catch (p) {
        b(t, t.return, p);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function zc(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Rc(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            eo(4, t);
          } catch (s) {
            b(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              b(t, l, s);
            }
          }
          var i = t.return;
          try {
            Zu(t);
          } catch (s) {
            b(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Zu(t);
          } catch (s) {
            b(t, o, s);
          }
      }
    } catch (s) {
      b(t, t.return, s);
    }
    if (t === e) {
      z = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (z = u);
      break;
    }
    z = t.return;
  }
}
var Z0 = Math.ceil,
  Ii = $t.ReactCurrentDispatcher,
  Js = $t.ReactCurrentOwner,
  Qe = $t.ReactCurrentBatchConfig,
  D = 0,
  ae = null,
  ne = null,
  de = 0,
  ze = 0,
  Fn = Jt(0),
  oe = 0,
  ul = null,
  gn = 0,
  to = 0,
  bs = 0,
  Fr = null,
  xe = null,
  ea = 0,
  bn = 1 / 0,
  gt = null,
  ji = !1,
  Ku = null,
  Ht = null,
  Wl = !1,
  Ft = null,
  Oi = 0,
  Ar = 0,
  Xu = null,
  ii = -1,
  oi = 0;
function we() {
  return D & 6 ? ee() : ii !== -1 ? ii : (ii = ee());
}
function Zt(e) {
  return e.mode & 1
    ? D & 2 && de !== 0
      ? de & -de
      : N0.transition !== null
      ? (oi === 0 && (oi = uf()), oi)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : hf(e.type))),
        e)
    : 1;
}
function nt(e, t, n, r) {
  if (50 < Ar) throw ((Ar = 0), (Xu = null), Error(x(185)));
  wl(e, n, r),
    (!(D & 2) || e !== ae) &&
      (e === ae && (!(D & 2) && (to |= n), oe === 4 && Ot(e, de)),
      Ne(e, r),
      n === 1 && D === 0 && !(t.mode & 1) && ((bn = ee() + 500), qi && bt()));
}
function Ne(e, t) {
  var n = e.callbackNode;
  Nh(e, t);
  var r = yi(e, e === ae ? de : 0);
  if (r === 0)
    n !== null && Ua(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ua(n), t === 1))
      e.tag === 0 ? P0(Ic.bind(null, e)) : If(Ic.bind(null, e)),
        x0(function () {
          !(D & 6) && bt();
        }),
        (n = null);
    else {
      switch (sf(r)) {
        case 1:
          n = Ls;
          break;
        case 4:
          n = lf;
          break;
        case 16:
          n = vi;
          break;
        case 536870912:
          n = of;
          break;
        default:
          n = vi;
      }
      n = Rp(n, _p.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function _p(e, t) {
  if (((ii = -1), (oi = 0), D & 6)) throw Error(x(327));
  var n = e.callbackNode;
  if (Qn() && e.callbackNode !== n) return null;
  var r = yi(e, e === ae ? de : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ti(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var i = $p();
    (ae !== e || de !== t) && ((gt = null), (bn = ee() + 500), an(e, t));
    do
      try {
        K0();
        break;
      } catch (u) {
        Lp(e, u);
      }
    while (1);
    Ds(),
      (Ii.current = i),
      (D = l),
      ne !== null ? (t = 0) : ((ae = null), (de = 0), (t = oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Eu(e)), l !== 0 && ((r = l), (t = qu(e, l)))), t === 1)
    )
      throw ((n = ul), an(e, 0), Ot(e, r), Ne(e, ee()), n);
    if (t === 6) Ot(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !G0(l) &&
          ((t = Ti(e, r)),
          t === 2 && ((i = Eu(e)), i !== 0 && ((r = i), (t = qu(e, i)))),
          t === 1))
      )
        throw ((n = ul), an(e, 0), Ot(e, r), Ne(e, ee()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(x(345));
        case 2:
          nn(e, xe, gt);
          break;
        case 3:
          if (
            (Ot(e, r), (r & 130023424) === r && ((t = ea + 500 - ee()), 10 < t))
          ) {
            if (yi(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              we(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = zu(nn.bind(null, e, xe, gt), t);
            break;
          }
          nn(e, xe, gt);
          break;
        case 4:
          if ((Ot(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - tt(r);
            (i = 1 << o), (o = t[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = ee() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Z0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = zu(nn.bind(null, e, xe, gt), r);
            break;
          }
          nn(e, xe, gt);
          break;
        case 5:
          nn(e, xe, gt);
          break;
        default:
          throw Error(x(329));
      }
    }
  }
  return Ne(e, ee()), e.callbackNode === n ? _p.bind(null, e) : null;
}
function qu(e, t) {
  var n = Fr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = Ti(e, t)),
    e !== 2 && ((t = xe), (xe = n), t !== null && Ju(t)),
    e
  );
}
function Ju(e) {
  xe === null ? (xe = e) : xe.push.apply(xe, e);
}
function G0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!lt(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ot(e, t) {
  for (
    t &= ~bs,
      t &= ~to,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ic(e) {
  if (D & 6) throw Error(x(327));
  Qn();
  var t = yi(e, 0);
  if (!(t & 1)) return Ne(e, ee()), null;
  var n = Ti(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Eu(e);
    r !== 0 && ((t = r), (n = qu(e, r)));
  }
  if (n === 1) throw ((n = ul), an(e, 0), Ot(e, t), Ne(e, ee()), n);
  if (n === 6) throw Error(x(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, xe, gt),
    Ne(e, ee()),
    null
  );
}
function ta(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    (D = n), D === 0 && ((bn = ee() + 500), qi && bt());
  }
}
function vn(e) {
  Ft !== null && Ft.tag === 0 && !(D & 6) && Qn();
  var t = D;
  D |= 1;
  var n = Qe.transition,
    r = B;
  try {
    if (((Qe.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Qe.transition = n), (D = t), !(D & 6) && bt();
  }
}
function na() {
  (ze = Fn.current), G(Fn);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), E0(n)), ne !== null))
    for (n = ne.return; n !== null; ) {
      var r = n;
      switch ((Ts(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ei();
          break;
        case 3:
          qn(), G($e), G(ge), Hs();
          break;
        case 5:
          Qs(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          G(X);
          break;
        case 19:
          G(X);
          break;
        case 10:
          Vs(r.type._context);
          break;
        case 22:
        case 23:
          na();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (ne = e = Gt(e.current, null)),
    (de = ze = t),
    (oe = 0),
    (ul = null),
    (bs = to = gn = 0),
    (xe = Fr = null),
    on !== null)
  ) {
    for (t = 0; t < on.length; t++)
      if (((n = on[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        n.pending = r;
      }
    on = null;
  }
  return e;
}
function Lp(e, t) {
  do {
    var n = ne;
    try {
      if ((Ds(), (ni.current = Ri), zi)) {
        for (var r = q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        zi = !1;
      }
      if (
        ((mn = 0),
        (ue = ie = q = null),
        (Or = !1),
        (ll = 0),
        (Js.current = null),
        n === null || n.return === null)
      ) {
        (oe = 1), (ul = t), (ne = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          u = n,
          s = t;
        if (
          ((t = de),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            m = u,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p
              ? ((m.updateQueue = p.updateQueue),
                (m.memoizedState = p.memoizedState),
                (m.lanes = p.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var y = Sc(o);
          if (y !== null) {
            (y.flags &= -257),
              kc(y, o, u, i, t),
              y.mode & 1 && wc(i, a, t),
              (t = y),
              (s = a);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              wc(i, a, t), ra();
              break e;
            }
            s = Error(x(426));
          }
        } else if (K && u.mode & 1) {
          var L = Sc(o);
          if (L !== null) {
            !(L.flags & 65536) && (L.flags |= 256),
              kc(L, o, u, i, t),
              Fs(Jn(s, u));
            break e;
          }
        }
        (i = s = Jn(s, u)),
          oe !== 4 && (oe = 2),
          Fr === null ? (Fr = [i]) : Fr.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = ap(i, s, t);
              fc(i, d);
              break e;
            case 1:
              u = s;
              var c = i.type,
                f = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (Ht === null || !Ht.has(f))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = cp(i, u, t);
                fc(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Np(n);
    } catch (k) {
      (t = k), ne === n && n !== null && (ne = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function $p() {
  var e = Ii.current;
  return (Ii.current = Ri), e === null ? Ri : e;
}
function ra() {
  (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ae === null || (!(gn & 268435455) && !(to & 268435455)) || Ot(ae, de);
}
function Ti(e, t) {
  var n = D;
  D |= 2;
  var r = $p();
  (ae !== e || de !== t) && ((gt = null), an(e, t));
  do
    try {
      Y0();
      break;
    } catch (l) {
      Lp(e, l);
    }
  while (1);
  if ((Ds(), (D = n), (Ii.current = r), ne !== null)) throw Error(x(261));
  return (ae = null), (de = 0), oe;
}
function Y0() {
  for (; ne !== null; ) Pp(ne);
}
function K0() {
  for (; ne !== null && !Sh(); ) Pp(ne);
}
function Pp(e) {
  var t = zp(e.alternate, e, ze);
  (e.memoizedProps = e.pendingProps),
    t === null ? Np(e) : (ne = t),
    (Js.current = null);
}
function Np(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = B0(n, t)), n !== null)) {
        (n.flags &= 32767), (ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (oe = 6), (ne = null);
        return;
      }
    } else if (((n = U0(n, t, ze)), n !== null)) {
      ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ne = t;
      return;
    }
    ne = t = e;
  } while (t !== null);
  oe === 0 && (oe = 5);
}
function nn(e, t, n) {
  var r = B,
    l = Qe.transition;
  try {
    (Qe.transition = null), (B = 1), X0(e, t, n, r);
  } finally {
    (Qe.transition = l), (B = r);
  }
  return null;
}
function X0(e, t, n, r) {
  do Qn();
  while (Ft !== null);
  if (D & 6) throw Error(x(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(x(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Mh(e, i),
    e === ae && ((ne = ae = null), (de = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Wl ||
      ((Wl = !0),
      Rp(vi, function () {
        return Qn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = Qe.transition), (Qe.transition = null);
    var o = B;
    B = 1;
    var u = D;
    (D |= 4),
      (Js.current = null),
      Q0(e, n),
      Ep(n, e),
      g0(Nu),
      (wi = !!Pu),
      (Nu = Pu = null),
      (e.current = n),
      H0(n),
      kh(),
      (D = u),
      (B = o),
      (Qe.transition = i);
  } else e.current = n;
  if (
    (Wl && ((Wl = !1), (Ft = e), (Oi = l)),
    (i = e.pendingLanes),
    i === 0 && (Ht = null),
    xh(n.stateNode),
    Ne(e, ee()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ji) throw ((ji = !1), (e = Ku), (Ku = null), e);
  return (
    Oi & 1 && e.tag !== 0 && Qn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Xu ? Ar++ : ((Ar = 0), (Xu = e))) : (Ar = 0),
    bt(),
    null
  );
}
function Qn() {
  if (Ft !== null) {
    var e = sf(Oi),
      t = Qe.transition,
      n = B;
    try {
      if (((Qe.transition = null), (B = 16 > e ? 16 : e), Ft === null))
        var r = !1;
      else {
        if (((e = Ft), (Ft = null), (Oi = 0), D & 6)) throw Error(x(331));
        var l = D;
        for (D |= 4, z = e.current; z !== null; ) {
          var i = z,
            o = i.child;
          if (z.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (z = a; z !== null; ) {
                  var m = z;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tr(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (z = h);
                  else
                    for (; z !== null; ) {
                      m = z;
                      var p = m.sibling,
                        y = m.return;
                      if ((Sp(m), m === a)) {
                        z = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = y), (z = p);
                        break;
                      }
                      z = y;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var L = w.sibling;
                    (w.sibling = null), (w = L);
                  } while (w !== null);
                }
              }
              z = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (z = o);
          else
            e: for (; z !== null; ) {
              if (((i = z), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tr(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (z = d);
                break e;
              }
              z = i.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          o = z;
          var f = o.child;
          if (o.subtreeFlags & 2064 && f !== null) (f.return = o), (z = f);
          else
            e: for (o = c; z !== null; ) {
              if (((u = z), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      eo(9, u);
                  }
                } catch (k) {
                  b(u, u.return, k);
                }
              if (u === o) {
                z = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (z = g);
                break e;
              }
              z = u.return;
            }
        }
        if (
          ((D = l), bt(), ft && typeof ft.onPostCommitFiberRoot == "function")
        )
          try {
            ft.onPostCommitFiberRoot(Zi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Qe.transition = t);
    }
  }
  return !1;
}
function jc(e, t, n) {
  (t = Jn(n, t)),
    (t = ap(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = we()),
    e !== null && (wl(e, 1, t), Ne(e, t));
}
function b(e, t, n) {
  if (e.tag === 3) jc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ht === null || !Ht.has(r)))
        ) {
          (e = Jn(n, e)),
            (e = cp(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = we()),
            t !== null && (wl(t, 1, e), Ne(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function q0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = we()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (de & n) === n &&
      (oe === 4 || (oe === 3 && (de & 130023424) === de && 500 > ee() - ea)
        ? an(e, 0)
        : (bs |= n)),
    Ne(e, t);
}
function Mp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Il), (Il <<= 1), !(Il & 130023424) && (Il = 4194304))
      : (t = 1));
  var n = we();
  (e = _t(e, t)), e !== null && (wl(e, t, n), Ne(e, n));
}
function J0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Mp(e, n);
}
function b0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(x(314));
  }
  r !== null && r.delete(t), Mp(e, n);
}
var zp;
zp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || $e.current) _e = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (_e = !1), V0(e, t, n);
      _e = !!(e.flags & 131072);
    }
  else (_e = !1), K && t.flags & 1048576 && jf(t, Li, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      li(e, t), (e = t.pendingProps);
      var l = Yn(t, ge.current);
      Wn(t, n), (l = Gs(null, t, r, e, l, n));
      var i = Ys();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Pe(r) ? ((i = !0), xi(t)) : (i = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Bs(t),
            (l.updater = Ji),
            (t.stateNode = l),
            (l._reactInternals = t),
            Au(t, r, e, n),
            (t = Uu(null, t, r, !0, i, n)))
          : ((t.tag = 0), K && i && Os(t), ye(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (li(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = tm(r)),
          (e = Xe(r, e)),
          l)
        ) {
          case 0:
            t = Vu(null, t, r, e, n);
            break e;
          case 1:
            t = xc(null, t, r, e, n);
            break e;
          case 11:
            t = Cc(null, t, r, e, n);
            break e;
          case 14:
            t = Ec(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(x(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Vu(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        xc(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((hp(t), e === null)) throw Error(x(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (l = i.element),
          Af(e, t),
          Ni(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (l = Jn(Error(x(423)), t)), (t = _c(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Jn(Error(x(424)), t)), (t = _c(e, t, r, n, l));
            break e;
          } else
            for (
              Re = Wt(t.stateNode.containerInfo.firstChild),
                je = t,
                K = !0,
                Je = null,
                n = Bf(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Kn(), r === l)) {
            t = Lt(e, t, n);
            break e;
          }
          ye(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wf(t),
        e === null && Ou(t),
        (r = t.type),
        (l = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        Mu(r, l) ? (o = null) : i !== null && Mu(r, i) && (t.flags |= 32),
        pp(e, t),
        ye(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Ou(t), null;
    case 13:
      return mp(e, t, n);
    case 4:
      return (
        Ws(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : ye(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Cc(e, t, r, l, n)
      );
    case 7:
      return ye(e, t, t.pendingProps, n), t.child;
    case 8:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ye(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (i = t.memoizedProps),
          (o = l.value),
          Q($i, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (lt(i.value, o)) {
            if (i.children === l.children && !$e.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ct(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Tu(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(x(341));
                (o.lanes |= n),
                  (u = o.alternate),
                  u !== null && (u.lanes |= n),
                  Tu(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ye(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Wn(t, n),
        (l = He(l)),
        (r = r(l)),
        (t.flags |= 1),
        ye(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Xe(r, t.pendingProps)),
        (l = Xe(r.type, l)),
        Ec(e, t, r, l, n)
      );
    case 15:
      return dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        li(e, t),
        (t.tag = 1),
        Pe(r) ? ((e = !0), xi(t)) : (e = !1),
        Wn(t, n),
        Vf(t, r, l),
        Au(t, r, l, n),
        Uu(null, t, r, !0, e, n)
      );
    case 19:
      return gp(e, t, n);
    case 22:
      return fp(e, t, n);
  }
  throw Error(x(156, t.tag));
};
function Rp(e, t) {
  return rf(e, t);
}
function em(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new em(e, t, n, r);
}
function la(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function tm(e) {
  if (typeof e == "function") return la(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Es)) return 11;
    if (e === xs) return 14;
  }
  return 2;
}
function Gt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ui(e, t, n, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) la(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case $n:
        return cn(n.children, l, i, t);
      case Cs:
        (o = 8), (l |= 8);
        break;
      case su:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = su), (e.lanes = i), e
        );
      case au:
        return (e = We(13, n, t, l)), (e.elementType = au), (e.lanes = i), e;
      case cu:
        return (e = We(19, n, t, l)), (e.elementType = cu), (e.lanes = i), e;
      case Vd:
        return no(n, l, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ad:
              o = 10;
              break e;
            case Dd:
              o = 9;
              break e;
            case Es:
              o = 11;
              break e;
            case xs:
              o = 14;
              break e;
            case Rt:
              (o = 16), (r = null);
              break e;
          }
        throw Error(x(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(o, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function cn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function no(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Vd),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zo(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function Go(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function nm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = $o(0)),
    (this.expirationTimes = $o(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = $o(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ia(e, t, n, r, l, i, o, u, s) {
  return (
    (e = new nm(e, t, n, u, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = We(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bs(i),
    e
  );
}
function rm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ln,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ip(e) {
  if (!e) return Xt;
  e = e._reactInternals;
  e: {
    if (Cn(e) !== e || e.tag !== 1) throw Error(x(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(x(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Pe(n)) return Rf(e, n, t);
  }
  return t;
}
function jp(e, t, n, r, l, i, o, u, s) {
  return (
    (e = ia(n, r, !0, e, l, i, o, u, s)),
    (e.context = Ip(null)),
    (n = e.current),
    (r = we()),
    (l = Zt(n)),
    (i = Ct(r, l)),
    (i.callback = t ?? null),
    Qt(n, i, l),
    (e.current.lanes = l),
    wl(e, l, r),
    Ne(e, r),
    e
  );
}
function ro(e, t, n, r) {
  var l = t.current,
    i = we(),
    o = Zt(l);
  return (
    (n = Ip(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(l, t, o)),
    e !== null && (nt(e, l, o, i), ti(e, l, o)),
    o
  );
}
function Fi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Oc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oa(e, t) {
  Oc(e, t), (e = e.alternate) && Oc(e, t);
}
function lm() {
  return null;
}
var Op =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function ua(e) {
  this._internalRoot = e;
}
lo.prototype.render = ua.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(x(409));
  ro(e, t, null, null);
};
lo.prototype.unmount = ua.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    vn(function () {
      ro(null, e, null, null);
    }),
      (t[xt] = null);
  }
};
function lo(e) {
  this._internalRoot = e;
}
lo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = df();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && pf(e);
  }
};
function sa(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function io(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Tc() {}
function im(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Fi(o);
        i.call(a);
      };
    }
    var o = jp(t, r, e, 0, null, !1, !1, "", Tc);
    return (
      (e._reactRootContainer = o),
      (e[xt] = o.current),
      br(e.nodeType === 8 ? e.parentNode : e),
      vn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = Fi(s);
      u.call(a);
    };
  }
  var s = ia(e, 0, !1, null, null, !1, !1, "", Tc);
  return (
    (e._reactRootContainer = s),
    (e[xt] = s.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    vn(function () {
      ro(t, s, n, r);
    }),
    s
  );
}
function oo(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = Fi(o);
        u.call(s);
      };
    }
    ro(t, o, e, l);
  } else o = im(n, t, e, l, r);
  return Fi(o);
}
af = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $r(t.pendingLanes);
        n !== 0 &&
          ($s(t, n | 1), Ne(t, ee()), !(D & 6) && ((bn = ee() + 500), bt()));
      }
      break;
    case 13:
      vn(function () {
        var r = _t(e, 1);
        if (r !== null) {
          var l = we();
          nt(r, e, 1, l);
        }
      }),
        oa(e, 1);
  }
};
Ps = function (e) {
  if (e.tag === 13) {
    var t = _t(e, 134217728);
    if (t !== null) {
      var n = we();
      nt(t, e, 134217728, n);
    }
    oa(e, 134217728);
  }
};
cf = function (e) {
  if (e.tag === 13) {
    var t = Zt(e),
      n = _t(e, t);
    if (n !== null) {
      var r = we();
      nt(n, e, t, r);
    }
    oa(e, t);
  }
};
df = function () {
  return B;
};
ff = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
Su = function (e, t, n) {
  switch (t) {
    case "input":
      if ((pu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Xi(r);
            if (!l) throw Error(x(90));
            Bd(r), pu(r, l);
          }
        }
      }
      break;
    case "textarea":
      Qd(e, n);
      break;
    case "select":
      (t = n.value), t != null && Dn(e, !!n.multiple, t, !1);
  }
};
qd = ta;
Jd = vn;
var om = { usingClientEntryPoint: !1, Events: [kl, zn, Xi, Kd, Xd, ta] },
  Sr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  um = {
    bundleType: Sr.bundleType,
    version: Sr.version,
    rendererPackageName: Sr.rendererPackageName,
    rendererConfig: Sr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: $t.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = tf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Sr.findFiberByHostInstance || lm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ql = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ql.isDisabled && Ql.supportsFiber)
    try {
      (Zi = Ql.inject(um)), (ft = Ql);
    } catch {}
}
Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = om;
Te.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!sa(t)) throw Error(x(200));
  return rm(e, t, null, n);
};
Te.createRoot = function (e, t) {
  if (!sa(e)) throw Error(x(299));
  var n = !1,
    r = "",
    l = Op;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ia(e, 1, !1, null, null, n, !1, r, l)),
    (e[xt] = t.current),
    br(e.nodeType === 8 ? e.parentNode : e),
    new ua(t)
  );
};
Te.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(x(188))
      : ((e = Object.keys(e).join(",")), Error(x(268, e)));
  return (e = tf(t)), (e = e === null ? null : e.stateNode), e;
};
Te.flushSync = function (e) {
  return vn(e);
};
Te.hydrate = function (e, t, n) {
  if (!io(t)) throw Error(x(200));
  return oo(null, e, t, !0, n);
};
Te.hydrateRoot = function (e, t, n) {
  if (!sa(e)) throw Error(x(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    i = "",
    o = Op;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = jp(t, null, e, 1, n ?? null, l, !1, i, o)),
    (e[xt] = t.current),
    br(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new lo(t);
};
Te.render = function (e, t, n) {
  if (!io(t)) throw Error(x(200));
  return oo(null, e, t, !1, n);
};
Te.unmountComponentAtNode = function (e) {
  if (!io(e)) throw Error(x(40));
  return e._reactRootContainer
    ? (vn(function () {
        oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[xt] = null);
        });
      }),
      !0)
    : !1;
};
Te.unstable_batchedUpdates = ta;
Te.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!io(n)) throw Error(x(200));
  if (e == null || e._reactInternals === void 0) throw Error(x(38));
  return oo(e, t, n, !1, r);
};
Te.version = "18.2.0-next-9e3b772b8-20220608";
function Tp() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tp);
    } catch (e) {
      console.error(e);
    }
}
Tp(), (Id.exports = Te);
var Fp = Id.exports,
  Fc = Fp;
(ou.createRoot = Fc.createRoot), (ou.hydrateRoot = Fc.hydrateRoot);
var Le = function () {
  return (
    (Le =
      Object.assign ||
      function (t) {
        for (var n, r = 1, l = arguments.length; r < l; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Le.apply(this, arguments)
  );
};
function Ai(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, l = t.length, i; r < l; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Z = "-ms-",
  Dr = "-moz-",
  U = "-webkit-",
  Ap = "comm",
  uo = "rule",
  aa = "decl",
  sm = "@import",
  Dp = "@keyframes",
  am = "@layer",
  cm = Math.abs,
  ca = String.fromCharCode,
  dm = Object.assign;
function fm(e, t) {
  return se(e, 0) ^ 45
    ? (((((((t << 2) ^ se(e, 0)) << 2) ^ se(e, 1)) << 2) ^ se(e, 2)) << 2) ^
        se(e, 3)
    : 0;
}
function Vp(e) {
  return e.trim();
}
function zt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function T(e, t, n) {
  return e.replace(t, n);
}
function si(e, t) {
  return e.indexOf(t);
}
function se(e, t) {
  return e.charCodeAt(t) | 0;
}
function er(e, t, n) {
  return e.slice(t, n);
}
function wt(e) {
  return e.length;
}
function da(e) {
  return e.length;
}
function Hl(e, t) {
  return t.push(e), e;
}
function pm(e, t) {
  return e.map(t).join("");
}
var so = 1,
  tr = 1,
  Up = 0,
  Ge = 0,
  te = 0,
  sr = "";
function ao(e, t, n, r, l, i, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: l,
    children: i,
    line: so,
    column: tr,
    length: o,
    return: "",
  };
}
function kr(e, t) {
  return dm(ao("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hm() {
  return te;
}
function mm() {
  return (
    (te = Ge > 0 ? se(sr, --Ge) : 0), tr--, te === 10 && ((tr = 1), so--), te
  );
}
function rt() {
  return (
    (te = Ge < Up ? se(sr, Ge++) : 0), tr++, te === 10 && ((tr = 1), so++), te
  );
}
function dn() {
  return se(sr, Ge);
}
function ai() {
  return Ge;
}
function co(e, t) {
  return er(sr, e, t);
}
function bu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function gm(e) {
  return (so = tr = 1), (Up = wt((sr = e))), (Ge = 0), [];
}
function vm(e) {
  return (sr = ""), e;
}
function Yo(e) {
  return Vp(co(Ge - 1, es(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ym(e) {
  for (; (te = dn()) && te < 33; ) rt();
  return bu(e) > 2 || bu(te) > 3 ? "" : " ";
}
function wm(e, t) {
  for (
    ;
    --t &&
    rt() &&
    !(te < 48 || te > 102 || (te > 57 && te < 65) || (te > 70 && te < 97));

  );
  return co(e, ai() + (t < 6 && dn() == 32 && rt() == 32));
}
function es(e) {
  for (; rt(); )
    switch (te) {
      case e:
        return Ge;
      case 34:
      case 39:
        e !== 34 && e !== 39 && es(te);
        break;
      case 40:
        e === 41 && es(e);
        break;
      case 92:
        rt();
        break;
    }
  return Ge;
}
function Sm(e, t) {
  for (; rt() && e + te !== 47 + 10; )
    if (e + te === 42 + 42 && dn() === 47) break;
  return "/*" + co(t, Ge - 1) + "*" + ca(e === 47 ? e : rt());
}
function km(e) {
  for (; !bu(dn()); ) rt();
  return co(e, Ge);
}
function Cm(e) {
  return vm(ci("", null, null, null, [""], (e = gm(e)), 0, [0], e));
}
function ci(e, t, n, r, l, i, o, u, s) {
  for (
    var a = 0,
      m = 0,
      h = o,
      p = 0,
      y = 0,
      v = 0,
      w = 1,
      L = 1,
      d = 1,
      c = 0,
      f = "",
      g = l,
      k = i,
      E = r,
      C = f;
    L;

  )
    switch (((v = c), (c = rt()))) {
      case 40:
        if (v != 108 && se(C, h - 1) == 58) {
          si((C += T(Yo(c), "&", "&\f")), "&\f") != -1 && (d = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Yo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += ym(v);
        break;
      case 92:
        C += wm(ai() - 1, 7);
        continue;
      case 47:
        switch (dn()) {
          case 42:
          case 47:
            Hl(Em(Sm(rt(), ai()), t, n), s);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * w:
        u[a++] = wt(C) * d;
      case 125 * w:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            L = 0;
          case 59 + m:
            d == -1 && (C = T(C, /\f/g, "")),
              y > 0 &&
                wt(C) - h &&
                Hl(
                  y > 32
                    ? Dc(C + ";", r, n, h - 1)
                    : Dc(T(C, " ", "") + ";", r, n, h - 2),
                  s
                );
            break;
          case 59:
            C += ";";
          default:
            if (
              (Hl((E = Ac(C, t, n, a, m, l, u, f, (g = []), (k = []), h)), i),
              c === 123)
            )
              if (m === 0) ci(C, t, E, E, g, i, h, u, k);
              else
                switch (p === 99 && se(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ci(
                      e,
                      E,
                      E,
                      r && Hl(Ac(e, E, E, 0, 0, l, u, f, l, (g = []), h), k),
                      l,
                      k,
                      h,
                      u,
                      r ? g : k
                    );
                    break;
                  default:
                    ci(C, E, E, E, [""], k, 0, u, k);
                }
        }
        (a = m = y = 0), (w = d = 1), (f = C = ""), (h = o);
        break;
      case 58:
        (h = 1 + wt(C)), (y = v);
      default:
        if (w < 1) {
          if (c == 123) --w;
          else if (c == 125 && w++ == 0 && mm() == 125) continue;
        }
        switch (((C += ca(c)), c * w)) {
          case 38:
            d = m > 0 ? 1 : ((C += "\f"), -1);
            break;
          case 44:
            (u[a++] = (wt(C) - 1) * d), (d = 1);
            break;
          case 64:
            dn() === 45 && (C += Yo(rt())),
              (p = dn()),
              (m = h = wt((f = C += km(ai())))),
              c++;
            break;
          case 45:
            v === 45 && wt(C) == 2 && (w = 0);
        }
    }
  return i;
}
function Ac(e, t, n, r, l, i, o, u, s, a, m) {
  for (
    var h = l - 1, p = l === 0 ? i : [""], y = da(p), v = 0, w = 0, L = 0;
    v < r;
    ++v
  )
    for (var d = 0, c = er(e, h + 1, (h = cm((w = o[v])))), f = e; d < y; ++d)
      (f = Vp(w > 0 ? p[d] + " " + c : T(c, /&\f/g, p[d]))) && (s[L++] = f);
  return ao(e, t, n, l === 0 ? uo : u, s, a, m);
}
function Em(e, t, n) {
  return ao(e, t, n, Ap, ca(hm()), er(e, 2, -2), 0);
}
function Dc(e, t, n, r) {
  return ao(e, t, n, aa, er(e, 0, r), er(e, r + 1, -1), r);
}
function Bp(e, t, n) {
  switch (fm(e, t)) {
    case 5103:
      return U + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    case 4789:
      return Dr + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + Dr + e + Z + e + e;
    case 5936:
      switch (se(e, t + 11)) {
        case 114:
          return U + e + Z + T(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return U + e + Z + T(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return U + e + Z + T(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return U + e + Z + e + e;
    case 6165:
      return U + e + Z + "flex-" + e + e;
    case 5187:
      return (
        U + e + T(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + Z + "flex-$1$2") + e
      );
    case 5443:
      return (
        U +
        e +
        Z +
        "flex-item-" +
        T(e, /flex-|-self/g, "") +
        (zt(e, /flex-|baseline/)
          ? ""
          : Z + "grid-row-" + T(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return (
        U +
        e +
        Z +
        "flex-line-pack" +
        T(e, /align-content|flex-|-self/g, "") +
        e
      );
    case 5548:
      return U + e + Z + T(e, "shrink", "negative") + e;
    case 5292:
      return U + e + Z + T(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        U +
        "box-" +
        T(e, "-grow", "") +
        U +
        e +
        Z +
        T(e, "grow", "positive") +
        e
      );
    case 4554:
      return U + T(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    case 6187:
      return (
        T(T(T(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return T(e, /(image-set\([^]*)/, U + "$1$`$1");
    case 4968:
      return (
        T(
          T(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + Z + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        U +
        e +
        e
      );
    case 4200:
      if (!zt(e, /flex-|baseline/))
        return Z + "grid-column-align" + er(e, t) + e;
      break;
    case 2592:
    case 3360:
      return Z + T(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, l) {
          return (t = l), zt(r.props, /grid-\w+-end/);
        })
        ? ~si(e + (n = n[t].value), "span")
          ? e
          : Z +
            T(e, "-start", "") +
            e +
            Z +
            "grid-row-span:" +
            (~si(n, "span") ? zt(n, /\d+/) : +zt(n, /\d+/) - +zt(e, /\d+/)) +
            ";"
        : Z + T(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return zt(r.props, /grid-\w+-start/);
        })
        ? e
        : Z + T(T(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return T(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (wt(e) - 1 - t > 6)
        switch (se(e, t + 1)) {
          case 109:
            if (se(e, t + 4) !== 45) break;
          case 102:
            return (
              T(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  U +
                  "$2-$3$1" +
                  Dr +
                  (se(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~si(e, "stretch")
              ? Bp(T(e, "stretch", "fill-available"), t, n) + e
              : e;
        }
      break;
    case 5152:
    case 5920:
      return T(
        e,
        /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
        function (r, l, i, o, u, s, a) {
          return (
            Z +
            l +
            ":" +
            i +
            a +
            (o ? Z + l + "-span:" + (u ? s : +s - +i) + a : "") +
            e
          );
        }
      );
    case 4949:
      if (se(e, t + 6) === 121) return T(e, ":", ":" + U) + e;
      break;
    case 6444:
      switch (se(e, se(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            T(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" +
                U +
                (se(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                U +
                "$2$3$1" +
                Z +
                "$2box$3"
            ) + e
          );
        case 100:
          return T(e, ":", ":" + Z) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return T(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Vr(e, t) {
  for (var n = "", r = da(e), l = 0; l < r; l++) n += t(e[l], l, e, t) || "";
  return n;
}
function xm(e, t, n, r) {
  switch (e.type) {
    case am:
      if (e.children.length) break;
    case sm:
    case aa:
      return (e.return = e.return || e.value);
    case Ap:
      return "";
    case Dp:
      return (e.return = e.value + "{" + Vr(e.children, r) + "}");
    case uo:
      e.value = e.props.join(",");
  }
  return wt((n = Vr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function _m(e) {
  var t = da(e);
  return function (n, r, l, i) {
    for (var o = "", u = 0; u < t; u++) o += e[u](n, r, l, i) || "";
    return o;
  };
}
function Lm(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case aa:
        e.return = Bp(e.value, e.length, n);
        return;
      case Dp:
        return Vr([kr(e, { value: T(e.value, "@", "@" + U) })], r);
      case uo:
        if (e.length)
          return pm(e.props, function (l) {
            switch (zt(l, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Vr(
                  [kr(e, { props: [T(l, /:(read-\w+)/, ":" + Dr + "$1")] })],
                  r
                );
              case "::placeholder":
                return Vr(
                  [
                    kr(e, {
                      props: [T(l, /:(plac\w+)/, ":" + U + "input-$1")],
                    }),
                    kr(e, { props: [T(l, /:(plac\w+)/, ":" + Dr + "$1")] }),
                    kr(e, { props: [T(l, /:(plac\w+)/, Z + "input-$1")] }),
                  ],
                  r
                );
            }
            return "";
          });
    }
}
var $m = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  nr =
    (typeof process < "u" &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    "data-styled",
  fa = typeof window < "u" && "HTMLElement" in window,
  Pm = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
      {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
    ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
      {}.REACT_APP_SC_DISABLE_SPEEDY
    : typeof process < "u" &&
      process.env !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== void 0 &&
      {}.SC_DISABLE_SPEEDY !== "" &&
      {}.SC_DISABLE_SPEEDY !== "false" &&
      {}.SC_DISABLE_SPEEDY),
  pa = Object.freeze([]),
  yn = Object.freeze({});
function Nm(e, t, n) {
  return (
    n === void 0 && (n = yn), (e.theme !== n.theme && e.theme) || t || n.theme
  );
}
var Wp = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  Mm = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  zm = /(^-|-$)/g;
function Vc(e) {
  return e.replace(Mm, "-").replace(zm, "");
}
var Rm = /(a)(d)/gi,
  Uc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function ts(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Uc(t % 52) + n;
  return (Uc(t % 52) + n).replace(Rm, "$1-$2");
}
var Ko,
  An = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Qp = function (e) {
    return An(5381, e);
  };
function Im(e) {
  return ts(Qp(e) >>> 0);
}
function jm(e) {
  return e.displayName || e.name || "Component";
}
function Xo(e) {
  return typeof e == "string" && !0;
}
var Hp = typeof Symbol == "function" && Symbol.for,
  Zp = Hp ? Symbol.for("react.memo") : 60115,
  Om = Hp ? Symbol.for("react.forward_ref") : 60112,
  Tm = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  Fm = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  Gp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  Am =
    (((Ko = {})[Om] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
    (Ko[Zp] = Gp),
    Ko);
function Bc(e) {
  return ("type" in (t = e) && t.type.$$typeof) === Zp
    ? Gp
    : "$$typeof" in e
    ? Am[e.$$typeof]
    : Tm;
  var t;
}
var Dm = Object.defineProperty,
  Vm = Object.getOwnPropertyNames,
  Wc = Object.getOwnPropertySymbols,
  Um = Object.getOwnPropertyDescriptor,
  Bm = Object.getPrototypeOf,
  Qc = Object.prototype;
function Yp(e, t, n) {
  if (typeof t != "string") {
    if (Qc) {
      var r = Bm(t);
      r && r !== Qc && Yp(e, r, n);
    }
    var l = Vm(t);
    Wc && (l = l.concat(Wc(t)));
    for (var i = Bc(e), o = Bc(t), u = 0; u < l.length; ++u) {
      var s = l[u];
      if (!(s in Fm || (n && n[s]) || (o && s in o) || (i && s in i))) {
        var a = Um(t, s);
        try {
          Dm(e, s, a);
        } catch {}
      }
    }
  }
  return e;
}
function rr(e) {
  return typeof e == "function";
}
function ha(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function sn(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Hc(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += t ? t + e[r] : e[r];
  return n;
}
function sl(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    e.constructor.name === Object.name &&
    !("props" in e && e.$$typeof)
  );
}
function ns(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !sl(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t))
    for (var r = 0; r < t.length; r++) e[r] = ns(e[r], t[r]);
  else if (sl(t)) for (var r in t) e[r] = ns(e[r], t[r]);
  return e;
}
function El(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var Wm = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, l = r.length, i = l; t >= i; )
            if ((i <<= 1) < 0) throw El(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)),
            this.groupSizes.set(r),
            (this.length = i);
          for (var o = l; o < i; o++) this.groupSizes[o] = 0;
        }
        for (
          var u = this.indexOfGroup(t + 1), s = ((o = 0), n.length);
          o < s;
          o++
        )
          this.tag.insertRule(u, n[o]) && (this.groupSizes[t]++, u++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            l = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < l; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (
          var r = this.groupSizes[t],
            l = this.indexOfGroup(t),
            i = l + r,
            o = l;
          o < i;
          o++
        )
          n += "".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);
        return n;
      }),
      e
    );
  })(),
  di = new Map(),
  Di = new Map(),
  qo = 1,
  Zl = function (e) {
    if (di.has(e)) return di.get(e);
    for (; Di.has(qo); ) qo++;
    var t = qo++;
    return di.set(e, t), Di.set(t, e), t;
  },
  Qm = function (e, t) {
    di.set(e, t), Di.set(t, e);
  },
  Hm = "style["
    .concat(nr, "][")
    .concat("data-styled-version", '="')
    .concat("6.0.0-rc.1", '"]'),
  Zm = new RegExp(
    "^".concat(nr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
  ),
  Gm = function (e, t, n) {
    for (var r, l = n.split(","), i = 0, o = l.length; i < o; i++)
      (r = l[i]) && e.registerName(t, r);
  },
  Ym = function (e, t) {
    for (
      var n,
        r = ((n = t.textContent) !== null && n !== void 0 ? n : "")
          .split(`/*!sc*/
`),
        l = [],
        i = 0,
        o = r.length;
      i < o;
      i++
    ) {
      var u = r[i].trim();
      if (u) {
        var s = u.match(Zm);
        if (s) {
          var a = 0 | parseInt(s[1], 10),
            m = s[2];
          a !== 0 && (Qm(m, a), Gm(e, m, s[3]), e.getTag().insertRules(a, l)),
            (l.length = 0);
        } else l.push(u);
      }
    }
  };
function Km() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Kp = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      l = (function (u) {
        for (var s = u.childNodes, a = s.length; a >= 0; a--) {
          var m = s[a];
          if (m && m.nodeType === 1 && m.hasAttribute(nr)) return m;
        }
      })(n),
      i = l !== void 0 ? l.nextSibling : null;
    r.setAttribute(nr, "active"),
      r.setAttribute("data-styled-version", "6.0.0-rc.1");
    var o = Km();
    return o && r.setAttribute("nonce", o), n.insertBefore(r, i), r;
  },
  Xm = (function () {
    function e(t) {
      (this.element = Kp(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, l = 0, i = r.length; l < i; l++) {
            var o = r[l];
            if (o.ownerNode === n) return o;
          }
          throw El(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  qm = (function () {
    function e(t) {
      (this.element = Kp(t)),
        (this.nodes = this.element.childNodes),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return (
            this.element.insertBefore(r, this.nodes[t] || null),
            this.length++,
            !0
          );
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  Jm = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return (
          t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0)
        );
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Zc = fa,
  bm = { isServer: !fa, useCSSOMInjection: !Pm },
  Xp = (function () {
    function e(t, n, r) {
      t === void 0 && (t = yn),
        n === void 0 && (n = {}),
        (this.options = Le(Le({}, bm), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          fa &&
          Zc &&
          ((Zc = !1),
          (function (l) {
            for (
              var i = document.querySelectorAll(Hm), o = 0, u = i.length;
              o < u;
              o++
            ) {
              var s = i[o];
              s &&
                s.getAttribute(nr) !== "active" &&
                (Ym(l, s), s.parentNode && s.parentNode.removeChild(s));
            }
          })(this));
    }
    return (
      (e.registerId = function (t) {
        return Zl(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return (
          n === void 0 && (n = !0),
          new e(
            Le(Le({}, this.options), t),
            this.gs,
            (n && this.names) || void 0
          )
        );
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                l = n.target;
              return n.isServer ? new Jm(l) : r ? new Xm(l) : new qm(l);
            })(this.options)),
            new Wm(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Zl(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Zl(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Zl(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      (e.prototype.toString = function () {
        return (function (t) {
          for (
            var n = t.getTag(),
              r = n.length,
              l = "",
              i = function (u) {
                var s = (function (y) {
                  return Di.get(y);
                })(u);
                if (s === void 0) return "continue";
                var a = t.names.get(s),
                  m = n.getGroup(u);
                if (a === void 0 || m.length === 0) return "continue";
                var h = "".concat(nr, ".g").concat(u, '[id="').concat(s, '"]'),
                  p = "";
                a !== void 0 &&
                  a.forEach(function (y) {
                    y.length > 0 && (p += "".concat(y, ","));
                  }),
                  (l += "".concat(m).concat(h, '{content:"').concat(p, '"}')
                    .concat(`/*!sc*/
`));
              },
              o = 0;
            o < r;
            o++
          )
            i(o);
          return l;
        })(this);
      }),
      e
    );
  })(),
  e2 = /&/g,
  t2 = /^\s*\/\/.*$/gm;
function qp(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) &&
        n.type !== "@keyframes" &&
        (n.children = qp(n.children, t)),
      n
    );
  });
}
function n2(e) {
  var t,
    n,
    r,
    l = e === void 0 ? yn : e,
    i = l.options,
    o = i === void 0 ? yn : i,
    u = l.plugins,
    s = u === void 0 ? pa : u,
    a = function (p, y, v) {
      return v === n ||
        (v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0)
        ? ".".concat(t)
        : p;
    },
    m = s.slice();
  o.prefix && m.unshift(Lm),
    m.push(function (p) {
      p.type === uo &&
        p.value.includes("&") &&
        (p.props[0] = p.props[0].replace(e2, n).replace(r, a));
    }, xm);
  var h = function (p, y, v, w) {
    y === void 0 && (y = ""),
      v === void 0 && (v = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = y),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var L = p.replace(t2, ""),
      d = Cm(v || y ? "".concat(v, " ").concat(y, " { ").concat(L, " }") : L);
    return (
      o.namespace && (d = qp(d, o.namespace)),
      (function (c, f) {
        for (var g = [], k = 0, E = void 0; k < c.length; k += 1)
          (E = f(c[k], k, c, f)) && g.push(E);
        return g;
      })(d, _m(m))
    );
  };
  return (
    (h.hash = s.length
      ? s
          .reduce(function (p, y) {
            return y.name || El(15), An(p, y.name);
          }, 5381)
          .toString()
      : ""),
    h
  );
}
var r2 = new Xp(),
  rs = n2(),
  Jp = yl.createContext({
    shouldForwardProp: void 0,
    styleSheet: r2,
    stylis: rs,
  });
Jp.Consumer;
yl.createContext(void 0);
function Gc() {
  return S.useContext(Jp);
}
var l2 = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (l, i) {
        i === void 0 && (i = rs);
        var o = r.name + i.hash;
        l.hasNameForId(r.id, o) ||
          l.insertRules(r.id, o, i(r.rules, o, "@keyframes"));
      }),
        (this.toString = function () {
          throw El(12, String(r.name));
        }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = rs), this.name + t.hash;
      }),
      e
    );
  })(),
  i2 = function (e) {
    return e >= "A" && e <= "Z";
  };
function Yc(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    i2(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var bp = function (e) {
    return e == null || e === !1 || e === "";
  },
  e1 = function (e) {
    var t,
      n,
      r = [];
    for (var l in e) {
      var i = e[l];
      e.hasOwnProperty(l) &&
        !bp(i) &&
        ((Array.isArray(i) && i.isCss) || rr(i)
          ? r.push("".concat(Yc(l), ":"), i, ";")
          : sl(i)
          ? r.push.apply(r, Ai(Ai(["".concat(l, " {")], e1(i), !1), ["}"], !1))
          : r.push(
              ""
                .concat(Yc(l), ": ")
                .concat(
                  ((t = l),
                  (n = i) == null || typeof n == "boolean" || n === ""
                    ? ""
                    : typeof n != "number" ||
                      n === 0 ||
                      t in $m ||
                      t.startsWith("--")
                    ? String(n).trim()
                    : "".concat(n, "px")),
                  ";"
                )
            ));
    }
    return r;
  };
function fn(e, t, n, r) {
  if (bp(e)) return [];
  if (ha(e)) return [".".concat(e.styledComponentId)];
  if (rr(e)) {
    if (!rr((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t)
      return [e];
    var l = e(t);
    return fn(l, t, n, r);
  }
  var i;
  return e instanceof l2
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : sl(e)
    ? e1(e)
    : Array.isArray(e)
    ? e.flatMap(function (o) {
        return fn(o, t, n, r);
      })
    : [e.toString()];
}
function o2(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (rr(n) && !ha(n)) return !1;
  }
  return !0;
}
var u2 = Qp("6.0.0-rc.1"),
  s2 = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && o2(t)),
        (this.componentId = n),
        (this.baseHash = An(u2, n)),
        (this.baseStyle = r),
        Xp.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var l = this.baseStyle
          ? this.baseStyle.generateAndInjectStyles(t, n, r)
          : "";
        if (this.isStatic && !r.hash)
          if (
            this.staticRulesId &&
            n.hasNameForId(this.componentId, this.staticRulesId)
          )
            l = sn(l, this.staticRulesId);
          else {
            var i = Hc(fn(this.rules, t, n, r)),
              o = ts(An(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, o)) {
              var u = r(i, ".".concat(o), void 0, this.componentId);
              n.insertRules(this.componentId, o, u);
            }
            (l = sn(l, o)), (this.staticRulesId = o);
          }
        else {
          for (
            var s = An(this.baseHash, r.hash), a = "", m = 0;
            m < this.rules.length;
            m++
          ) {
            var h = this.rules[m];
            if (typeof h == "string") a += h;
            else if (h) {
              var p = Hc(fn(h, t, n, r));
              (s = An(s, p)), (a += p);
            }
          }
          if (a) {
            var y = ts(s >>> 0);
            n.hasNameForId(this.componentId, y) ||
              n.insertRules(
                this.componentId,
                y,
                r(a, ".".concat(y), void 0, this.componentId)
              ),
              (l = sn(l, y));
          }
        }
        return l;
      }),
      e
    );
  })(),
  t1 = yl.createContext(void 0);
t1.Consumer;
function a2() {
  return S.useContext(t1);
}
var Jo = {};
function c2(e, t, n) {
  var r = ha(e),
    l = e,
    i = !Xo(e),
    o = t.attrs,
    u = o === void 0 ? pa : o,
    s = t.componentId,
    a =
      s === void 0
        ? (function (k, E) {
            var C = typeof k != "string" ? "sc" : Vc(k);
            Jo[C] = (Jo[C] || 0) + 1;
            var $ = "".concat(C, "-").concat(Im("6.0.0-rc.1" + C + Jo[C]));
            return E ? "".concat(E, "-").concat($) : $;
          })(t.displayName, t.parentComponentId)
        : s,
    m = t.displayName,
    h =
      m === void 0
        ? (function (k) {
            return Xo(k) ? "styled.".concat(k) : "Styled(".concat(jm(k), ")");
          })(e)
        : m,
    p =
      t.displayName && t.componentId
        ? "".concat(Vc(t.displayName), "-").concat(t.componentId)
        : t.componentId || a,
    y = r && l.attrs ? l.attrs.concat(u).filter(Boolean) : u,
    v = t.shouldForwardProp;
  if (r && l.shouldForwardProp) {
    var w = l.shouldForwardProp;
    if (t.shouldForwardProp) {
      var L = t.shouldForwardProp;
      v = function (k, E) {
        return w(k, E) && L(k, E);
      };
    } else v = w;
  }
  var d = new s2(n, p, r ? l.componentStyle : void 0),
    c = d.isStatic && u.length === 0;
  function f(k, E) {
    return (function (C, $, V, R) {
      var re = C.attrs,
        le = C.componentStyle,
        Ce = C.defaultProps,
        Ye = C.foldedComponentIds,
        cr = C.styledComponentId,
        dr = C.target,
        fr = a2(),
        N = Gc(),
        j = C.shouldForwardProp || N.shouldForwardProp,
        I = (function (Ae, ut, So) {
          for (
            var En,
              mt = Le(Le({}, ut), { className: void 0, theme: So }),
              ko = 0;
            ko < Ae.length;
            ko += 1
          ) {
            var $l = rr((En = Ae[ko])) ? En(mt) : En;
            for (var Pt in $l)
              mt[Pt] =
                Pt === "className"
                  ? sn(mt[Pt], $l[Pt])
                  : Pt === "style"
                  ? Le(Le({}, mt[Pt]), $l[Pt])
                  : $l[Pt];
          }
          return (
            ut.className && (mt.className = sn(mt.className, ut.className)), mt
          );
        })(re, $, Nm($, fr, Ce) || yn),
        W = I.as || dr,
        Y = {};
      for (var Me in I)
        I[Me] === void 0 ||
          Me[0] === "$" ||
          Me === "as" ||
          Me === "theme" ||
          (Me === "forwardedAs"
            ? (Y.as = I.forwardedAs)
            : (j && !j(Me, W)) || (Y[Me] = I[Me]));
      var ot = (function (Ae, ut, So) {
          var En = Gc(),
            mt = Ae.generateAndInjectStyles(
              ut ? yn : So,
              En.styleSheet,
              En.stylis
            );
          return mt;
        })(le, R, I),
        en = sn(Ye, cr);
      return (
        ot && (en += " " + ot),
        I.className && (en += " " + I.className),
        (Y[Xo(W) && !Wp.has(W) ? "class" : "className"] = en),
        (Y.ref = V),
        S.createElement(W, Y)
      );
    })(g, k, E, c);
  }
  f.displayName = h;
  var g = yl.forwardRef(f);
  return (
    (g.attrs = y),
    (g.componentStyle = d),
    (g.displayName = h),
    (g.shouldForwardProp = v),
    (g.foldedComponentIds = r
      ? sn(l.foldedComponentIds, l.styledComponentId)
      : ""),
    (g.styledComponentId = p),
    (g.target = r ? l.target : e),
    Object.defineProperty(g, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (k) {
        this._foldedDefaultProps = r
          ? (function (E) {
              for (var C = [], $ = 1; $ < arguments.length; $++)
                C[$ - 1] = arguments[$];
              for (var V = 0, R = C; V < R.length; V++) ns(E, R[V], !0);
              return E;
            })({}, l.defaultProps, k)
          : k;
      },
    }),
    Object.defineProperty(g, "toString", {
      value: function () {
        return ".".concat(g.styledComponentId);
      },
    }),
    i &&
      Yp(g, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    g
  );
}
function Kc(e, t) {
  for (var n = [e[0]], r = 0, l = t.length; r < l; r += 1)
    n.push(t[r], e[r + 1]);
  return n;
}
var Xc = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function d2(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (rr(e) || sl(e)) {
    var r = e;
    return Xc(fn(Kc(pa, Ai([r], t, !0))));
  }
  var l = e;
  return t.length === 0 && l.length === 1 && typeof l[0] == "string"
    ? fn(l)
    : Xc(fn(Kc(l, t)));
}
function ls(e, t, n) {
  if ((n === void 0 && (n = yn), !t)) throw El(1, t);
  var r = function (l) {
    for (var i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    return e(t, n, d2.apply(void 0, Ai([l], i, !1)));
  };
  return (
    (r.attrs = function (l) {
      return ls(
        e,
        t,
        Le(Le({}, n), {
          attrs: Array.prototype.concat(n.attrs, l).filter(Boolean),
        })
      );
    }),
    (r.withConfig = function (l) {
      return ls(e, t, Le(Le({}, n), l));
    }),
    r
  );
}
var n1 = function (e) {
    return ls(c2, e);
  },
  ve = n1;
Wp.forEach(function (e) {
  ve[e] = n1(e);
});
const f2 = ve.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`,
  qc = ve.div`
  grid-row: 1/2;
  grid-column: 1/2;
`;
function p2(e) {
  return P.jsxs(f2, {
    id: "corner-wrapper",
    children: [
      P.jsx(qc, { children: e.children }),
      P.jsx(qc, {
        style: {
          alignSelf: "start",
          justifySelf: "end",
          transform: "translateY(-50%) translateX(50%)",
        },
        children: e.topRight,
      }),
    ],
  });
}
const h2 = ve.div`
  max-width: 530px;
  height: 100%;
  margin: 0 auto;
  font-size: 1.4rem;
  padding: 5rem 1rem;
`;
var ma = _l(),
  O = (e) => xl(e, ma),
  ga = _l();
O.write = (e) => xl(e, ga);
var fo = _l();
O.onStart = (e) => xl(e, fo);
var va = _l();
O.onFrame = (e) => xl(e, va);
var ya = _l();
O.onFinish = (e) => xl(e, ya);
var Hn = [];
O.setTimeout = (e, t) => {
  let n = O.now() + t,
    r = () => {
      let i = Hn.findIndex((o) => o.cancel == r);
      ~i && Hn.splice(i, 1), (Dt -= ~i ? 1 : 0);
    },
    l = { time: n, handler: e, cancel: r };
  return Hn.splice(r1(n), 0, l), (Dt += 1), l1(), l;
};
var r1 = (e) => ~(~Hn.findIndex((t) => t.time > e) || ~Hn.length);
O.cancel = (e) => {
  fo.delete(e), va.delete(e), ya.delete(e), ma.delete(e), ga.delete(e);
};
O.sync = (e) => {
  (is = !0), O.batchedUpdates(e), (is = !1);
};
O.throttle = (e) => {
  let t;
  function n() {
    try {
      e(...t);
    } finally {
      t = null;
    }
  }
  function r(...l) {
    (t = l), O.onStart(n);
  }
  return (
    (r.handler = e),
    (r.cancel = () => {
      fo.delete(n), (t = null);
    }),
    r
  );
};
var wa = typeof window < "u" ? window.requestAnimationFrame : () => {};
O.use = (e) => (wa = e);
O.now = typeof performance < "u" ? () => performance.now() : Date.now;
O.batchedUpdates = (e) => e();
O.catch = console.error;
O.frameLoop = "always";
O.advance = () => {
  O.frameLoop !== "demand"
    ? console.warn(
        "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
      )
    : o1();
};
var At = -1,
  Dt = 0,
  is = !1;
function xl(e, t) {
  is ? (t.delete(e), e(0)) : (t.add(e), l1());
}
function l1() {
  At < 0 && ((At = 0), O.frameLoop !== "demand" && wa(i1));
}
function m2() {
  At = -1;
}
function i1() {
  ~At && (wa(i1), O.batchedUpdates(o1));
}
function o1() {
  let e = At;
  At = O.now();
  let t = r1(At);
  if ((t && (u1(Hn.splice(0, t), (n) => n.handler()), (Dt -= t)), !Dt)) {
    m2();
    return;
  }
  fo.flush(),
    ma.flush(e ? Math.min(64, At - e) : 16.667),
    va.flush(),
    ga.flush(),
    ya.flush();
}
function _l() {
  let e = new Set(),
    t = e;
  return {
    add(n) {
      (Dt += t == e && !e.has(n) ? 1 : 0), e.add(n);
    },
    delete(n) {
      return (Dt -= t == e && e.has(n) ? 1 : 0), e.delete(n);
    },
    flush(n) {
      t.size &&
        ((e = new Set()),
        (Dt -= t.size),
        u1(t, (r) => r(n) && e.add(r)),
        (Dt += e.size),
        (t = e));
    },
  };
}
function u1(e, t) {
  e.forEach((n) => {
    try {
      t(n);
    } catch (r) {
      O.catch(r);
    }
  });
}
var g2 = Object.defineProperty,
  v2 = (e, t) => {
    for (var n in t) g2(e, n, { get: t[n], enumerable: !0 });
  },
  it = {};
v2(it, {
  assign: () => w2,
  colors: () => Yt,
  createStringInterpolator: () => ka,
  skipAnimation: () => a1,
  to: () => s1,
  willAdvance: () => Ca,
});
function os() {}
var y2 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  _ = {
    arr: Array.isArray,
    obj: (e) => !!e && e.constructor.name === "Object",
    fun: (e) => typeof e == "function",
    str: (e) => typeof e == "string",
    num: (e) => typeof e == "number",
    und: (e) => e === void 0,
  };
function vt(e, t) {
  if (_.arr(e)) {
    if (!_.arr(t) || e.length !== t.length) return !1;
    for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }
  return e === t;
}
var A = (e, t) => e.forEach(t);
function ht(e, t, n) {
  if (_.arr(e)) {
    for (let r = 0; r < e.length; r++) t.call(n, e[r], `${r}`);
    return;
  }
  for (let r in e) e.hasOwnProperty(r) && t.call(n, e[r], r);
}
var Ie = (e) => (_.und(e) ? [] : _.arr(e) ? e : [e]);
function Ur(e, t) {
  if (e.size) {
    let n = Array.from(e);
    e.clear(), A(n, t);
  }
}
var Nr = (e, ...t) => Ur(e, (n) => n(...t)),
  Sa = () =>
    typeof window > "u" ||
    !window.navigator ||
    /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
  ka,
  s1,
  Yt = null,
  a1 = !1,
  Ca = os,
  w2 = (e) => {
    e.to && (s1 = e.to),
      e.now && (O.now = e.now),
      e.colors !== void 0 && (Yt = e.colors),
      e.skipAnimation != null && (a1 = e.skipAnimation),
      e.createStringInterpolator && (ka = e.createStringInterpolator),
      e.requestAnimationFrame && O.use(e.requestAnimationFrame),
      e.batchedUpdates && (O.batchedUpdates = e.batchedUpdates),
      e.willAdvance && (Ca = e.willAdvance),
      e.frameLoop && (O.frameLoop = e.frameLoop);
  },
  Br = new Set(),
  Be = [],
  bo = [],
  Vi = 0,
  po = {
    get idle() {
      return !Br.size && !Be.length;
    },
    start(e) {
      Vi > e.priority ? (Br.add(e), O.onStart(S2)) : (c1(e), O(us));
    },
    advance: us,
    sort(e) {
      if (Vi) O.onFrame(() => po.sort(e));
      else {
        let t = Be.indexOf(e);
        ~t && (Be.splice(t, 1), d1(e));
      }
    },
    clear() {
      (Be = []), Br.clear();
    },
  };
function S2() {
  Br.forEach(c1), Br.clear(), O(us);
}
function c1(e) {
  Be.includes(e) || d1(e);
}
function d1(e) {
  Be.splice(
    k2(Be, (t) => t.priority > e.priority),
    0,
    e
  );
}
function us(e) {
  let t = bo;
  for (let n = 0; n < Be.length; n++) {
    let r = Be[n];
    (Vi = r.priority), r.idle || (Ca(r), r.advance(e), r.idle || t.push(r));
  }
  return (Vi = 0), (bo = Be), (bo.length = 0), (Be = t), Be.length > 0;
}
function k2(e, t) {
  let n = e.findIndex(t);
  return n < 0 ? e.length : n;
}
var C2 = (e, t, n) => Math.min(Math.max(n, e), t),
  E2 = {
    transparent: 0,
    aliceblue: 4042850303,
    antiquewhite: 4209760255,
    aqua: 16777215,
    aquamarine: 2147472639,
    azure: 4043309055,
    beige: 4126530815,
    bisque: 4293182719,
    black: 255,
    blanchedalmond: 4293643775,
    blue: 65535,
    blueviolet: 2318131967,
    brown: 2771004159,
    burlywood: 3736635391,
    burntsienna: 3934150143,
    cadetblue: 1604231423,
    chartreuse: 2147418367,
    chocolate: 3530104575,
    coral: 4286533887,
    cornflowerblue: 1687547391,
    cornsilk: 4294499583,
    crimson: 3692313855,
    cyan: 16777215,
    darkblue: 35839,
    darkcyan: 9145343,
    darkgoldenrod: 3095792639,
    darkgray: 2846468607,
    darkgreen: 6553855,
    darkgrey: 2846468607,
    darkkhaki: 3182914559,
    darkmagenta: 2332068863,
    darkolivegreen: 1433087999,
    darkorange: 4287365375,
    darkorchid: 2570243327,
    darkred: 2332033279,
    darksalmon: 3918953215,
    darkseagreen: 2411499519,
    darkslateblue: 1211993087,
    darkslategray: 793726975,
    darkslategrey: 793726975,
    darkturquoise: 13554175,
    darkviolet: 2483082239,
    deeppink: 4279538687,
    deepskyblue: 12582911,
    dimgray: 1768516095,
    dimgrey: 1768516095,
    dodgerblue: 512819199,
    firebrick: 2988581631,
    floralwhite: 4294635775,
    forestgreen: 579543807,
    fuchsia: 4278255615,
    gainsboro: 3705462015,
    ghostwhite: 4177068031,
    gold: 4292280575,
    goldenrod: 3668254975,
    gray: 2155905279,
    green: 8388863,
    greenyellow: 2919182335,
    grey: 2155905279,
    honeydew: 4043305215,
    hotpink: 4285117695,
    indianred: 3445382399,
    indigo: 1258324735,
    ivory: 4294963455,
    khaki: 4041641215,
    lavender: 3873897215,
    lavenderblush: 4293981695,
    lawngreen: 2096890111,
    lemonchiffon: 4294626815,
    lightblue: 2916673279,
    lightcoral: 4034953471,
    lightcyan: 3774873599,
    lightgoldenrodyellow: 4210742015,
    lightgray: 3553874943,
    lightgreen: 2431553791,
    lightgrey: 3553874943,
    lightpink: 4290167295,
    lightsalmon: 4288707327,
    lightseagreen: 548580095,
    lightskyblue: 2278488831,
    lightslategray: 2005441023,
    lightslategrey: 2005441023,
    lightsteelblue: 2965692159,
    lightyellow: 4294959359,
    lime: 16711935,
    limegreen: 852308735,
    linen: 4210091775,
    magenta: 4278255615,
    maroon: 2147483903,
    mediumaquamarine: 1724754687,
    mediumblue: 52735,
    mediumorchid: 3126187007,
    mediumpurple: 2473647103,
    mediumseagreen: 1018393087,
    mediumslateblue: 2070474495,
    mediumspringgreen: 16423679,
    mediumturquoise: 1221709055,
    mediumvioletred: 3340076543,
    midnightblue: 421097727,
    mintcream: 4127193855,
    mistyrose: 4293190143,
    moccasin: 4293178879,
    navajowhite: 4292783615,
    navy: 33023,
    oldlace: 4260751103,
    olive: 2155872511,
    olivedrab: 1804477439,
    orange: 4289003775,
    orangered: 4282712319,
    orchid: 3664828159,
    palegoldenrod: 4008225535,
    palegreen: 2566625535,
    paleturquoise: 2951671551,
    palevioletred: 3681588223,
    papayawhip: 4293907967,
    peachpuff: 4292524543,
    peru: 3448061951,
    pink: 4290825215,
    plum: 3718307327,
    powderblue: 2967529215,
    purple: 2147516671,
    rebeccapurple: 1714657791,
    red: 4278190335,
    rosybrown: 3163525119,
    royalblue: 1097458175,
    saddlebrown: 2336560127,
    salmon: 4202722047,
    sandybrown: 4104413439,
    seagreen: 780883967,
    seashell: 4294307583,
    sienna: 2689740287,
    silver: 3233857791,
    skyblue: 2278484991,
    slateblue: 1784335871,
    slategray: 1887473919,
    slategrey: 1887473919,
    snow: 4294638335,
    springgreen: 16744447,
    steelblue: 1182971135,
    tan: 3535047935,
    teal: 8421631,
    thistle: 3636451583,
    tomato: 4284696575,
    turquoise: 1088475391,
    violet: 4001558271,
    wheat: 4125012991,
    white: 4294967295,
    whitesmoke: 4126537215,
    yellow: 4294902015,
    yellowgreen: 2597139199,
  },
  et = "[-+]?\\d*\\.?\\d+",
  Ui = et + "%";
function ho(...e) {
  return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var x2 = new RegExp("rgb" + ho(et, et, et)),
  _2 = new RegExp("rgba" + ho(et, et, et, et)),
  L2 = new RegExp("hsl" + ho(et, Ui, Ui)),
  $2 = new RegExp("hsla" + ho(et, Ui, Ui, et)),
  P2 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  N2 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  M2 = /^#([0-9a-fA-F]{6})$/,
  z2 = /^#([0-9a-fA-F]{8})$/;
function R2(e) {
  let t;
  return typeof e == "number"
    ? e >>> 0 === e && e >= 0 && e <= 4294967295
      ? e
      : null
    : (t = M2.exec(e))
    ? parseInt(t[1] + "ff", 16) >>> 0
    : Yt && Yt[e] !== void 0
    ? Yt[e]
    : (t = x2.exec(e))
    ? ((_n(t[1]) << 24) | (_n(t[2]) << 16) | (_n(t[3]) << 8) | 255) >>> 0
    : (t = _2.exec(e))
    ? ((_n(t[1]) << 24) | (_n(t[2]) << 16) | (_n(t[3]) << 8) | ed(t[4])) >>> 0
    : (t = P2.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
    : (t = z2.exec(e))
    ? parseInt(t[1], 16) >>> 0
    : (t = N2.exec(e))
    ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
    : (t = L2.exec(e))
    ? (Jc(bc(t[1]), Gl(t[2]), Gl(t[3])) | 255) >>> 0
    : (t = $2.exec(e))
    ? (Jc(bc(t[1]), Gl(t[2]), Gl(t[3])) | ed(t[4])) >>> 0
    : null;
}
function eu(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function Jc(e, t, n) {
  let r = n < 0.5 ? n * (1 + t) : n + t - n * t,
    l = 2 * n - r,
    i = eu(l, r, e + 1 / 3),
    o = eu(l, r, e),
    u = eu(l, r, e - 1 / 3);
  return (
    (Math.round(i * 255) << 24) |
    (Math.round(o * 255) << 16) |
    (Math.round(u * 255) << 8)
  );
}
function _n(e) {
  let t = parseInt(e, 10);
  return t < 0 ? 0 : t > 255 ? 255 : t;
}
function bc(e) {
  return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function ed(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 1 ? 255 : Math.round(t * 255);
}
function Gl(e) {
  let t = parseFloat(e);
  return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function td(e) {
  let t = R2(e);
  if (t === null) return e;
  t = t || 0;
  let n = (t & 4278190080) >>> 24,
    r = (t & 16711680) >>> 16,
    l = (t & 65280) >>> 8,
    i = (t & 255) / 255;
  return `rgba(${n}, ${r}, ${l}, ${i})`;
}
var al = (e, t, n) => {
  if (_.fun(e)) return e;
  if (_.arr(e)) return al({ range: e, output: t, extrapolate: n });
  if (_.str(e.output[0])) return ka(e);
  let r = e,
    l = r.output,
    i = r.range || [0, 1],
    o = r.extrapolateLeft || r.extrapolate || "extend",
    u = r.extrapolateRight || r.extrapolate || "extend",
    s = r.easing || ((a) => a);
  return (a) => {
    let m = j2(a, i);
    return I2(a, i[m], i[m + 1], l[m], l[m + 1], s, o, u, r.map);
  };
};
function I2(e, t, n, r, l, i, o, u, s) {
  let a = s ? s(e) : e;
  if (a < t) {
    if (o === "identity") return a;
    o === "clamp" && (a = t);
  }
  if (a > n) {
    if (u === "identity") return a;
    u === "clamp" && (a = n);
  }
  return r === l
    ? r
    : t === n
    ? e <= t
      ? r
      : l
    : (t === -1 / 0
        ? (a = -a)
        : n === 1 / 0
        ? (a = a - t)
        : (a = (a - t) / (n - t)),
      (a = i(a)),
      r === -1 / 0
        ? (a = -a)
        : l === 1 / 0
        ? (a = a + r)
        : (a = a * (l - r) + r),
      a);
}
function j2(e, t) {
  for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
  return n - 1;
}
var O2 =
    (e, t = "end") =>
    (n) => {
      n = t === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
      let r = n * e,
        l = t === "end" ? Math.floor(r) : Math.ceil(r);
      return C2(0, 1, l / e);
    },
  Bi = 1.70158,
  Yl = Bi * 1.525,
  nd = Bi + 1,
  rd = (2 * Math.PI) / 3,
  ld = (2 * Math.PI) / 4.5,
  Kl = (e) =>
    e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
      : e < 2.5 / 2.75
      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375,
  T2 = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => 1 - (1 - e) * (1 - e),
    easeInOutQuad: (e) =>
      e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => 1 - Math.pow(1 - e, 3),
    easeInOutCubic: (e) =>
      e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => 1 - Math.pow(1 - e, 4),
    easeInOutQuart: (e) =>
      e < 0.5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => 1 - Math.pow(1 - e, 5),
    easeInOutQuint: (e) =>
      e < 0.5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
    easeInSine: (e) => 1 - Math.cos((e * Math.PI) / 2),
    easeOutSine: (e) => Math.sin((e * Math.PI) / 2),
    easeInOutSine: (e) => -(Math.cos(Math.PI * e) - 1) / 2,
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * e - 10)),
    easeOutExpo: (e) => (e === 1 ? 1 : 1 - Math.pow(2, -10 * e)),
    easeInOutExpo: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? Math.pow(2, 20 * e - 10) / 2
        : (2 - Math.pow(2, -20 * e + 10)) / 2,
    easeInCirc: (e) => 1 - Math.sqrt(1 - Math.pow(e, 2)),
    easeOutCirc: (e) => Math.sqrt(1 - Math.pow(e - 1, 2)),
    easeInOutCirc: (e) =>
      e < 0.5
        ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2
        : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
    easeInBack: (e) => nd * e * e * e - Bi * e * e,
    easeOutBack: (e) => 1 + nd * Math.pow(e - 1, 3) + Bi * Math.pow(e - 1, 2),
    easeInOutBack: (e) =>
      e < 0.5
        ? (Math.pow(2 * e, 2) * ((Yl + 1) * 2 * e - Yl)) / 2
        : (Math.pow(2 * e - 2, 2) * ((Yl + 1) * (e * 2 - 2) + Yl) + 2) / 2,
    easeInElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : -Math.pow(2, 10 * e - 10) * Math.sin((e * 10 - 10.75) * rd),
    easeOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : Math.pow(2, -10 * e) * Math.sin((e * 10 - 0.75) * rd) + 1,
    easeInOutElastic: (e) =>
      e === 0
        ? 0
        : e === 1
        ? 1
        : e < 0.5
        ? -(Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * ld)) / 2
        : (Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * ld)) / 2 +
          1,
    easeInBounce: (e) => 1 - Kl(1 - e),
    easeOutBounce: Kl,
    easeInOutBounce: (e) =>
      e < 0.5 ? (1 - Kl(1 - 2 * e)) / 2 : (1 + Kl(2 * e - 1)) / 2,
    steps: O2,
  },
  lr = Symbol.for("FluidValue.get"),
  wn = Symbol.for("FluidValue.observers"),
  Ue = (e) => !!(e && e[lr]),
  Ee = (e) => (e && e[lr] ? e[lr]() : e),
  id = (e) => e[wn] || null;
function F2(e, t) {
  e.eventObserved ? e.eventObserved(t) : e(t);
}
function cl(e, t) {
  let n = e[wn];
  n &&
    n.forEach((r) => {
      F2(r, t);
    });
}
var iv,
  ov,
  Cd,
  f1 =
    ((Cd = class {
      constructor(e) {
        M(this, iv);
        M(this, ov);
        if (!e && !(e = this.get)) throw Error("Unknown getter");
        A2(this, e);
      }
    }),
    (iv = lr),
    (ov = wn),
    Cd),
  A2 = (e, t) => p1(e, lr, t);
function ar(e, t) {
  if (e[lr]) {
    let n = e[wn];
    n || p1(e, wn, (n = new Set())),
      n.has(t) || (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
  }
  return t;
}
function dl(e, t) {
  let n = e[wn];
  if (n && n.has(t)) {
    let r = n.size - 1;
    r ? n.delete(t) : (e[wn] = null),
      e.observerRemoved && e.observerRemoved(r, t);
  }
}
var p1 = (e, t, n) =>
    Object.defineProperty(e, t, { value: n, writable: !0, configurable: !0 }),
  fi = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
  D2 =
    /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
  od = new RegExp(`(${fi.source})(%|[a-z]+)`, "i"),
  V2 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
  mo = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
  h1 = (e) => {
    let [t, n] = U2(e);
    if (!t || Sa()) return e;
    let r = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue(t);
    return r
      ? r.trim()
      : n && n.startsWith("--")
      ? window.getComputedStyle(document.documentElement).getPropertyValue(n) ||
        e
      : n && mo.test(n)
      ? h1(n)
      : n || e;
  },
  U2 = (e) => {
    let t = mo.exec(e);
    if (!t) return [,];
    let [, n, r] = t;
    return [n, r];
  },
  tu,
  B2 = (e, t, n, r, l) =>
    `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${l})`,
  m1 = (e) => {
    tu ||
      (tu = Yt
        ? new RegExp(`(${Object.keys(Yt).join("|")})(?!\\w)`, "g")
        : /^\b$/);
    let t = e.output.map((l) =>
        Ee(l).replace(mo, h1).replace(D2, td).replace(tu, td)
      ),
      n = t.map((l) => l.match(fi).map(Number)),
      r = n[0]
        .map((l, i) =>
          n.map((o) => {
            if (!(i in o))
              throw Error('The arity of each "output" value must be equal');
            return o[i];
          })
        )
        .map((l) => al({ ...e, output: l }));
    return (l) => {
      var u;
      let i =
          !od.test(t[0]) &&
          ((u = t.find((s) => od.test(s))) == null
            ? void 0
            : u.replace(fi, "")),
        o = 0;
      return t[0].replace(fi, () => `${r[o++](l)}${i || ""}`).replace(V2, B2);
    };
  },
  Ea = "react-spring: ",
  g1 = (e) => {
    let t = e,
      n = !1;
    if (typeof t != "function")
      throw new TypeError(`${Ea}once requires a function parameter`);
    return (...r) => {
      n || (t(...r), (n = !0));
    };
  },
  W2 = g1(console.warn);
function Q2() {
  W2(`${Ea}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var H2 = g1(console.warn);
function Z2() {
  H2(
    `${Ea}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
  );
}
function go(e) {
  return (
    _.str(e) &&
    (e[0] == "#" || /\d/.test(e) || (!Sa() && mo.test(e)) || e in (Yt || {}))
  );
}
var xa = Sa() ? S.useEffect : S.useLayoutEffect,
  G2 = () => {
    let e = S.useRef(!1);
    return (
      xa(
        () => (
          (e.current = !0),
          () => {
            e.current = !1;
          }
        ),
        []
      ),
      e
    );
  };
function v1() {
  let e = S.useState()[1],
    t = G2();
  return () => {
    t.current && e(Math.random());
  };
}
function Y2(e, t) {
  let [n] = S.useState(() => ({ inputs: t, result: e() })),
    r = S.useRef(),
    l = r.current,
    i = l;
  return (
    i
      ? (t && i.inputs && K2(t, i.inputs)) || (i = { inputs: t, result: e() })
      : (i = n),
    S.useEffect(() => {
      (r.current = i), l == n && (n.inputs = n.result = void 0);
    }, [i]),
    i.result
  );
}
function K2(e, t) {
  if (e.length !== t.length) return !1;
  for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var y1 = (e) => S.useEffect(e, X2),
  X2 = [];
function ud(e) {
  let t = S.useRef();
  return (
    S.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
var fl = Symbol.for("Animated:node"),
  q2 = (e) => !!e && e[fl] === e,
  ct = (e) => e && e[fl],
  _a = (e, t) => y2(e, fl, t),
  vo = (e) => e && e[fl] && e[fl].getPayload(),
  w1 = class {
    constructor() {
      M(this, "payload");
      _a(this, this);
    }
    getPayload() {
      return this.payload || [];
    }
  },
  Ll = class extends w1 {
    constructor(t) {
      super();
      M(this, "done", !0);
      M(this, "elapsedTime");
      M(this, "lastPosition");
      M(this, "lastVelocity");
      M(this, "v0");
      M(this, "durationProgress", 0);
      (this._value = t),
        _.num(this._value) && (this.lastPosition = this._value);
    }
    static create(t) {
      return new Ll(t);
    }
    getPayload() {
      return [this];
    }
    getValue() {
      return this._value;
    }
    setValue(t, n) {
      return (
        _.num(t) &&
          ((this.lastPosition = t),
          n &&
            ((t = Math.round(t / n) * n),
            this.done && (this.lastPosition = t))),
        this._value === t ? !1 : ((this._value = t), !0)
      );
    }
    reset() {
      let { done: t } = this;
      (this.done = !1),
        _.num(this._value) &&
          ((this.elapsedTime = 0),
          (this.durationProgress = 0),
          (this.lastPosition = this._value),
          t && (this.lastVelocity = null),
          (this.v0 = null));
    }
  },
  pl = class extends Ll {
    constructor(t) {
      super(0);
      M(this, "_string", null);
      M(this, "_toString");
      this._toString = al({ output: [t, t] });
    }
    static create(t) {
      return new pl(t);
    }
    getValue() {
      return this._string ?? (this._string = this._toString(this._value));
    }
    setValue(t) {
      if (_.str(t)) {
        if (t == this._string) return !1;
        (this._string = t), (this._value = 1);
      } else if (super.setValue(t)) this._string = null;
      else return !1;
      return !0;
    }
    reset(t) {
      t && (this._toString = al({ output: [this.getValue(), t] })),
        (this._value = 0),
        super.reset();
    }
  },
  Wi = { dependencies: null },
  yo = class extends w1 {
    constructor(e) {
      super(), (this.source = e), this.setValue(e);
    }
    getValue(e) {
      let t = {};
      return (
        ht(this.source, (n, r) => {
          q2(n)
            ? (t[r] = n.getValue(e))
            : Ue(n)
            ? (t[r] = Ee(n))
            : e || (t[r] = n);
        }),
        t
      );
    }
    setValue(e) {
      (this.source = e), (this.payload = this._makePayload(e));
    }
    reset() {
      this.payload && A(this.payload, (e) => e.reset());
    }
    _makePayload(e) {
      if (e) {
        let t = new Set();
        return ht(e, this._addToPayload, t), Array.from(t);
      }
    }
    _addToPayload(e) {
      Wi.dependencies && Ue(e) && Wi.dependencies.add(e);
      let t = vo(e);
      t && A(t, (n) => this.add(n));
    }
  },
  S1 = class extends yo {
    constructor(t) {
      super(t);
    }
    static create(t) {
      return new S1(t);
    }
    getValue() {
      return this.source.map((t) => t.getValue());
    }
    setValue(t) {
      let n = this.getPayload();
      return t.length == n.length
        ? n.map((r, l) => r.setValue(t[l])).some(Boolean)
        : (super.setValue(t.map(J2)), !0);
    }
  };
function J2(e) {
  return (go(e) ? pl : Ll).create(e);
}
function ss(e) {
  let t = ct(e);
  return t ? t.constructor : _.arr(e) ? S1 : go(e) ? pl : Ll;
}
var sd = (e, t) => {
    let n = !_.fun(e) || (e.prototype && e.prototype.isReactComponent);
    return S.forwardRef((r, l) => {
      let i = S.useRef(null),
        o =
          n &&
          S.useCallback(
            (v) => {
              i.current = tg(l, v);
            },
            [l]
          ),
        [u, s] = eg(r, t),
        a = v1(),
        m = () => {
          let v = i.current;
          (n && !v) ||
            ((v ? t.applyAnimatedValues(v, u.getValue(!0)) : !1) === !1 && a());
        },
        h = new b2(m, s),
        p = S.useRef();
      xa(
        () => (
          (p.current = h),
          A(s, (v) => ar(v, h)),
          () => {
            p.current &&
              (A(p.current.deps, (v) => dl(v, p.current)),
              O.cancel(p.current.update));
          }
        )
      ),
        S.useEffect(m, []),
        y1(() => () => {
          let v = p.current;
          A(v.deps, (w) => dl(w, v));
        });
      let y = t.getComponentProps(u.getValue());
      return S.createElement(e, { ...y, ref: o });
    });
  },
  b2 = class {
    constructor(e, t) {
      (this.update = e), (this.deps = t);
    }
    eventObserved(e) {
      e.type == "change" && O.write(this.update);
    }
  };
function eg(e, t) {
  let n = new Set();
  return (
    (Wi.dependencies = n),
    e.style && (e = { ...e, style: t.createAnimatedStyle(e.style) }),
    (e = new yo(e)),
    (Wi.dependencies = null),
    [e, n]
  );
}
function tg(e, t) {
  return e && (_.fun(e) ? e(t) : (e.current = t)), t;
}
var ad = Symbol.for("AnimatedComponent"),
  ng = (
    e,
    {
      applyAnimatedValues: t = () => !1,
      createAnimatedStyle: n = (l) => new yo(l),
      getComponentProps: r = (l) => l,
    } = {}
  ) => {
    let l = {
        applyAnimatedValues: t,
        createAnimatedStyle: n,
        getComponentProps: r,
      },
      i = (o) => {
        let u = cd(o) || "Anonymous";
        return (
          _.str(o)
            ? (o = i[o] || (i[o] = sd(o, l)))
            : (o = o[ad] || (o[ad] = sd(o, l))),
          (o.displayName = `Animated(${u})`),
          o
        );
      };
    return (
      ht(e, (o, u) => {
        _.arr(e) && (u = cd(o)), (i[u] = i(o));
      }),
      { animated: i }
    );
  },
  cd = (e) =>
    _.str(e)
      ? e
      : e && _.str(e.displayName)
      ? e.displayName
      : (_.fun(e) && e.name) || null;
function rn(e, ...t) {
  return _.fun(e) ? e(...t) : e;
}
var Wr = (e, t) =>
    e === !0 || !!(t && e && (_.fun(e) ? e(t) : Ie(e).includes(t))),
  k1 = (e, t) => (_.obj(e) ? t && e[t] : e),
  C1 = (e, t) => (e.default === !0 ? e[t] : e.default ? e.default[t] : void 0),
  rg = (e) => e,
  La = (e, t = rg) => {
    let n = lg;
    e.default && e.default !== !0 && ((e = e.default), (n = Object.keys(e)));
    let r = {};
    for (let l of n) {
      let i = t(e[l], l);
      _.und(i) || (r[l] = i);
    }
    return r;
  },
  lg = [
    "config",
    "onProps",
    "onStart",
    "onChange",
    "onPause",
    "onResume",
    "onRest",
  ],
  ig = {
    config: 1,
    from: 1,
    to: 1,
    ref: 1,
    loop: 1,
    reset: 1,
    pause: 1,
    cancel: 1,
    reverse: 1,
    immediate: 1,
    default: 1,
    delay: 1,
    onProps: 1,
    onStart: 1,
    onChange: 1,
    onPause: 1,
    onResume: 1,
    onRest: 1,
    onResolve: 1,
    items: 1,
    trail: 1,
    sort: 1,
    expires: 1,
    initial: 1,
    enter: 1,
    update: 1,
    leave: 1,
    children: 1,
    onDestroyed: 1,
    keys: 1,
    callId: 1,
    parentId: 1,
  };
function og(e) {
  let t = {},
    n = 0;
  if (
    (ht(e, (r, l) => {
      ig[l] || ((t[l] = r), n++);
    }),
    n)
  )
    return t;
}
function E1(e) {
  let t = og(e);
  if (t) {
    let n = { to: t };
    return ht(e, (r, l) => l in t || (n[l] = r)), n;
  }
  return { ...e };
}
function hl(e) {
  return (
    (e = Ee(e)),
    _.arr(e)
      ? e.map(hl)
      : go(e)
      ? it.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
      : e
  );
}
function ug(e) {
  for (let t in e) return !0;
  return !1;
}
function as(e) {
  return _.fun(e) || (_.arr(e) && _.obj(e[0]));
}
function sg(e, t) {
  var n;
  (n = e.ref) == null || n.delete(e), t == null || t.delete(e);
}
function ag(e, t) {
  var n;
  t &&
    e.ref !== t &&
    ((n = e.ref) == null || n.delete(e), t.add(e), (e.ref = t));
}
var cg = {
    default: { tension: 170, friction: 26 },
    gentle: { tension: 120, friction: 14 },
    wobbly: { tension: 180, friction: 12 },
    stiff: { tension: 210, friction: 20 },
    slow: { tension: 280, friction: 60 },
    molasses: { tension: 280, friction: 120 },
  },
  cs = { ...cg.default, mass: 1, damping: 1, easing: T2.linear, clamp: !1 },
  dg = class {
    constructor() {
      M(this, "tension");
      M(this, "friction");
      M(this, "frequency");
      M(this, "damping");
      M(this, "mass");
      M(this, "velocity", 0);
      M(this, "restVelocity");
      M(this, "precision");
      M(this, "progress");
      M(this, "duration");
      M(this, "easing");
      M(this, "clamp");
      M(this, "bounce");
      M(this, "decay");
      M(this, "round");
      Object.assign(this, cs);
    }
  };
function fg(e, t, n) {
  n && ((n = { ...n }), dd(n, t), (t = { ...n, ...t })),
    dd(e, t),
    Object.assign(e, t);
  for (let o in cs) e[o] == null && (e[o] = cs[o]);
  let { frequency: r, damping: l } = e,
    { mass: i } = e;
  return (
    _.und(r) ||
      (r < 0.01 && (r = 0.01),
      l < 0 && (l = 0),
      (e.tension = Math.pow((2 * Math.PI) / r, 2) * i),
      (e.friction = (4 * Math.PI * l * i) / r)),
    e
  );
}
function dd(e, t) {
  if (!_.und(t.decay)) e.duration = void 0;
  else {
    let n = !_.und(t.tension) || !_.und(t.friction);
    (n || !_.und(t.frequency) || !_.und(t.damping) || !_.und(t.mass)) &&
      ((e.duration = void 0), (e.decay = void 0)),
      n && (e.frequency = void 0);
  }
}
var fd = [],
  pg = class {
    constructor() {
      M(this, "changed", !1);
      M(this, "values", fd);
      M(this, "toValues", null);
      M(this, "fromValues", fd);
      M(this, "to");
      M(this, "from");
      M(this, "config", new dg());
      M(this, "immediate", !1);
    }
  };
function x1(e, { key: t, props: n, defaultProps: r, state: l, actions: i }) {
  return new Promise((o, u) => {
    let s,
      a,
      m = Wr(n.cancel ?? (r == null ? void 0 : r.cancel), t);
    if (m) y();
    else {
      _.und(n.pause) || (l.paused = Wr(n.pause, t));
      let v = r == null ? void 0 : r.pause;
      v !== !0 && (v = l.paused || Wr(v, t)),
        (s = rn(n.delay || 0, t)),
        v ? (l.resumeQueue.add(p), i.pause()) : (i.resume(), p());
    }
    function h() {
      l.resumeQueue.add(p),
        l.timeouts.delete(a),
        a.cancel(),
        (s = a.time - O.now());
    }
    function p() {
      s > 0 && !it.skipAnimation
        ? ((l.delayed = !0),
          (a = O.setTimeout(y, s)),
          l.pauseQueue.add(h),
          l.timeouts.add(a))
        : y();
    }
    function y() {
      l.delayed && (l.delayed = !1),
        l.pauseQueue.delete(h),
        l.timeouts.delete(a),
        e <= (l.cancelId || 0) && (m = !0);
      try {
        i.start({ ...n, callId: e, cancel: m }, o);
      } catch (v) {
        u(v);
      }
    }
  });
}
var $a = (e, t) =>
    t.length == 1
      ? t[0]
      : t.some((n) => n.cancelled)
      ? Zn(e.get())
      : t.every((n) => n.noop)
      ? _1(e.get())
      : be(
          e.get(),
          t.every((n) => n.finished)
        ),
  _1 = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
  be = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
  Zn = (e) => ({ value: e, cancelled: !0, finished: !1 });
function L1(e, t, n, r) {
  let { callId: l, parentId: i, onRest: o } = t,
    { asyncTo: u, promise: s } = n;
  return !i && e === u && !t.reset
    ? s
    : (n.promise = (async () => {
        (n.asyncId = l), (n.asyncTo = e);
        let a = La(t, (L, d) => (d === "onRest" ? void 0 : L)),
          m,
          h,
          p = new Promise((L, d) => ((m = L), (h = d))),
          y = (L) => {
            let d =
              (l <= (n.cancelId || 0) && Zn(r)) ||
              (l !== n.asyncId && be(r, !1));
            if (d) throw ((L.result = d), h(L), L);
          },
          v = (L, d) => {
            let c = new pd(),
              f = new hd();
            return (async () => {
              if (it.skipAnimation)
                throw (ml(n), (f.result = be(r, !1)), h(f), f);
              y(c);
              let g = _.obj(L) ? { ...L } : { ...d, to: L };
              (g.parentId = l),
                ht(a, (E, C) => {
                  _.und(g[C]) && (g[C] = E);
                });
              let k = await r.start(g);
              return (
                y(c),
                n.paused &&
                  (await new Promise((E) => {
                    n.resumeQueue.add(E);
                  })),
                k
              );
            })();
          },
          w;
        if (it.skipAnimation) return ml(n), be(r, !1);
        try {
          let L;
          _.arr(e)
            ? (L = (async (d) => {
                for (let c of d) await v(c);
              })(e))
            : (L = Promise.resolve(e(v, r.stop.bind(r)))),
            await Promise.all([L.then(m), p]),
            (w = be(r.get(), !0, !1));
        } catch (L) {
          if (L instanceof pd) w = L.result;
          else if (L instanceof hd) w = L.result;
          else throw L;
        } finally {
          l == n.asyncId &&
            ((n.asyncId = i),
            (n.asyncTo = i ? u : void 0),
            (n.promise = i ? s : void 0));
        }
        return (
          _.fun(o) &&
            O.batchedUpdates(() => {
              o(w, r, r.item);
            }),
          w
        );
      })());
}
function ml(e, t) {
  Ur(e.timeouts, (n) => n.cancel()),
    e.pauseQueue.clear(),
    e.resumeQueue.clear(),
    (e.asyncId = e.asyncTo = e.promise = void 0),
    t && (e.cancelId = t);
}
var pd = class extends Error {
    constructor() {
      super(
        "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
      );
      M(this, "result");
    }
  },
  hd = class extends Error {
    constructor() {
      super("SkipAnimationSignal");
      M(this, "result");
    }
  },
  ds = (e) => e instanceof Pa,
  hg = 1,
  Pa = class extends f1 {
    constructor() {
      super(...arguments);
      M(this, "id", hg++);
      M(this, "_priority", 0);
    }
    get priority() {
      return this._priority;
    }
    set priority(t) {
      this._priority != t && ((this._priority = t), this._onPriorityChange(t));
    }
    get() {
      let t = ct(this);
      return t && t.getValue();
    }
    to(...t) {
      return it.to(this, t);
    }
    interpolate(...t) {
      return Q2(), it.to(this, t);
    }
    toJSON() {
      return this.get();
    }
    observerAdded(t) {
      t == 1 && this._attach();
    }
    observerRemoved(t) {
      t == 0 && this._detach();
    }
    _attach() {}
    _detach() {}
    _onChange(t, n = !1) {
      cl(this, { type: "change", parent: this, value: t, idle: n });
    }
    _onPriorityChange(t) {
      this.idle || po.sort(this),
        cl(this, { type: "priority", parent: this, priority: t });
    }
  },
  Sn = Symbol.for("SpringPhase"),
  $1 = 1,
  fs = 2,
  ps = 4,
  nu = (e) => (e[Sn] & $1) > 0,
  Mt = (e) => (e[Sn] & fs) > 0,
  Cr = (e) => (e[Sn] & ps) > 0,
  md = (e, t) => (t ? (e[Sn] |= fs | $1) : (e[Sn] &= ~fs)),
  gd = (e, t) => (t ? (e[Sn] |= ps) : (e[Sn] &= ~ps)),
  mg = class extends Pa {
    constructor(t, n) {
      super();
      M(this, "key");
      M(this, "animation", new pg());
      M(this, "queue");
      M(this, "defaultProps", {});
      M(this, "_state", {
        paused: !1,
        delayed: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      M(this, "_pendingCalls", new Set());
      M(this, "_lastCallId", 0);
      M(this, "_lastToId", 0);
      M(this, "_memoizedDuration", 0);
      if (!_.und(t) || !_.und(n)) {
        let r = _.obj(t) ? { ...t } : { ...n, from: t };
        _.und(r.default) && (r.default = !0), this.start(r);
      }
    }
    get idle() {
      return !(Mt(this) || this._state.asyncTo) || Cr(this);
    }
    get goal() {
      return Ee(this.animation.to);
    }
    get velocity() {
      let t = ct(this);
      return t instanceof Ll
        ? t.lastVelocity || 0
        : t.getPayload().map((n) => n.lastVelocity || 0);
    }
    get hasAnimated() {
      return nu(this);
    }
    get isAnimating() {
      return Mt(this);
    }
    get isPaused() {
      return Cr(this);
    }
    get isDelayed() {
      return this._state.delayed;
    }
    advance(t) {
      let n = !0,
        r = !1,
        l = this.animation,
        { toValues: i } = l,
        { config: o } = l,
        u = vo(l.to);
      !u && Ue(l.to) && (i = Ie(Ee(l.to))),
        l.values.forEach((m, h) => {
          if (m.done) return;
          let p = m.constructor == pl ? 1 : u ? u[h].lastPosition : i[h],
            y = l.immediate,
            v = p;
          if (!y) {
            if (((v = m.lastPosition), o.tension <= 0)) {
              m.done = !0;
              return;
            }
            let w = (m.elapsedTime += t),
              L = l.fromValues[h],
              d =
                m.v0 != null
                  ? m.v0
                  : (m.v0 = _.arr(o.velocity) ? o.velocity[h] : o.velocity),
              c,
              f =
                o.precision ||
                (L == p ? 0.005 : Math.min(1, Math.abs(p - L) * 0.001));
            if (_.und(o.duration))
              if (o.decay) {
                let g = o.decay === !0 ? 0.998 : o.decay,
                  k = Math.exp(-(1 - g) * w);
                (v = L + (d / (1 - g)) * (1 - k)),
                  (y = Math.abs(m.lastPosition - v) <= f),
                  (c = d * k);
              } else {
                c = m.lastVelocity == null ? d : m.lastVelocity;
                let g = o.restVelocity || f / 10,
                  k = o.clamp ? 0 : o.bounce,
                  E = !_.und(k),
                  C = L == p ? m.v0 > 0 : L < p,
                  $,
                  V = !1,
                  R = 1,
                  re = Math.ceil(t / R);
                for (
                  let le = 0;
                  le < re &&
                  (($ = Math.abs(c) > g),
                  !(!$ && ((y = Math.abs(p - v) <= f), y)));
                  ++le
                ) {
                  E &&
                    ((V = v == p || v > p == C), V && ((c = -c * k), (v = p)));
                  let Ce = -o.tension * 1e-6 * (v - p),
                    Ye = -o.friction * 0.001 * c,
                    cr = (Ce + Ye) / o.mass;
                  (c = c + cr * R), (v = v + c * R);
                }
              }
            else {
              let g = 1;
              o.duration > 0 &&
                (this._memoizedDuration !== o.duration &&
                  ((this._memoizedDuration = o.duration),
                  m.durationProgress > 0 &&
                    ((m.elapsedTime = o.duration * m.durationProgress),
                    (w = m.elapsedTime += t))),
                (g = (o.progress || 0) + w / this._memoizedDuration),
                (g = g > 1 ? 1 : g < 0 ? 0 : g),
                (m.durationProgress = g)),
                (v = L + o.easing(g) * (p - L)),
                (c = (v - m.lastPosition) / t),
                (y = g == 1);
            }
            (m.lastVelocity = c),
              Number.isNaN(v) &&
                (console.warn("Got NaN while animating:", this), (y = !0));
          }
          u && !u[h].done && (y = !1),
            y ? (m.done = !0) : (n = !1),
            m.setValue(v, o.round) && (r = !0);
        });
      let s = ct(this),
        a = s.getValue();
      if (n) {
        let m = Ee(l.to);
        (a !== m || r) && !o.decay
          ? (s.setValue(m), this._onChange(m))
          : r && o.decay && this._onChange(a),
          this._stop();
      } else r && this._onChange(a);
    }
    set(t) {
      return (
        O.batchedUpdates(() => {
          this._stop(), this._focus(t), this._set(t);
        }),
        this
      );
    }
    pause() {
      this._update({ pause: !0 });
    }
    resume() {
      this._update({ pause: !1 });
    }
    finish() {
      if (Mt(this)) {
        let { to: t, config: n } = this.animation;
        O.batchedUpdates(() => {
          this._onStart(), n.decay || this._set(t, !1), this._stop();
        });
      }
      return this;
    }
    update(t) {
      return (this.queue || (this.queue = [])).push(t), this;
    }
    start(t, n) {
      let r;
      return (
        _.und(t)
          ? ((r = this.queue || []), (this.queue = []))
          : (r = [_.obj(t) ? t : { ...n, to: t }]),
        Promise.all(r.map((l) => this._update(l))).then((l) => $a(this, l))
      );
    }
    stop(t) {
      let { to: n } = this.animation;
      return (
        this._focus(this.get()),
        ml(this._state, t && this._lastCallId),
        O.batchedUpdates(() => this._stop(n, t)),
        this
      );
    }
    reset() {
      this._update({ reset: !0 });
    }
    eventObserved(t) {
      t.type == "change"
        ? this._start()
        : t.type == "priority" && (this.priority = t.priority + 1);
    }
    _prepareNode(t) {
      let n = this.key || "",
        { to: r, from: l } = t;
      (r = _.obj(r) ? r[n] : r),
        (r == null || as(r)) && (r = void 0),
        (l = _.obj(l) ? l[n] : l),
        l == null && (l = void 0);
      let i = { to: r, from: l };
      return (
        nu(this) ||
          (t.reverse && ([r, l] = [l, r]),
          (l = Ee(l)),
          _.und(l) ? ct(this) || this._set(r) : this._set(l)),
        i
      );
    }
    _update({ ...t }, n) {
      let { key: r, defaultProps: l } = this;
      t.default &&
        Object.assign(
          l,
          La(t, (u, s) => (/^on/.test(s) ? k1(u, r) : u))
        ),
        yd(this, t, "onProps"),
        xr(this, "onProps", t, this);
      let i = this._prepareNode(t);
      if (Object.isFrozen(this))
        throw Error(
          "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
        );
      let o = this._state;
      return x1(++this._lastCallId, {
        key: r,
        props: t,
        defaultProps: l,
        state: o,
        actions: {
          pause: () => {
            Cr(this) ||
              (gd(this, !0),
              Nr(o.pauseQueue),
              xr(this, "onPause", be(this, Er(this, this.animation.to)), this));
          },
          resume: () => {
            Cr(this) &&
              (gd(this, !1),
              Mt(this) && this._resume(),
              Nr(o.resumeQueue),
              xr(
                this,
                "onResume",
                be(this, Er(this, this.animation.to)),
                this
              ));
          },
          start: this._merge.bind(this, i),
        },
      }).then((u) => {
        if (t.loop && u.finished && !(n && u.noop)) {
          let s = P1(t);
          if (s) return this._update(s, !0);
        }
        return u;
      });
    }
    _merge(t, n, r) {
      if (n.cancel) return this.stop(!0), r(Zn(this));
      let l = !_.und(t.to),
        i = !_.und(t.from);
      if (l || i)
        if (n.callId > this._lastToId) this._lastToId = n.callId;
        else return r(Zn(this));
      let { key: o, defaultProps: u, animation: s } = this,
        { to: a, from: m } = s,
        { to: h = a, from: p = m } = t;
      i && !l && (!n.default || _.und(h)) && (h = p),
        n.reverse && ([h, p] = [p, h]);
      let y = !vt(p, m);
      y && (s.from = p), (p = Ee(p));
      let v = !vt(h, a);
      v && this._focus(h);
      let w = as(n.to),
        { config: L } = s,
        { decay: d, velocity: c } = L;
      (l || i) && (L.velocity = 0),
        n.config &&
          !w &&
          fg(
            L,
            rn(n.config, o),
            n.config !== u.config ? rn(u.config, o) : void 0
          );
      let f = ct(this);
      if (!f || _.und(h)) return r(be(this, !0));
      let g = _.und(n.reset) ? i && !n.default : !_.und(p) && Wr(n.reset, o),
        k = g ? p : this.get(),
        E = hl(h),
        C = _.num(E) || _.arr(E) || go(E),
        $ = !w && (!C || Wr(u.immediate || n.immediate, o));
      if (v) {
        let le = ss(h);
        if (le !== f.constructor)
          if ($) f = this._set(E);
          else
            throw Error(
              `Cannot animate between ${f.constructor.name} and ${le.name}, as the "to" prop suggests`
            );
      }
      let V = f.constructor,
        R = Ue(h),
        re = !1;
      if (!R) {
        let le = g || (!nu(this) && y);
        (v || le) && ((re = vt(hl(k), E)), (R = !re)),
          ((!vt(s.immediate, $) && !$) ||
            !vt(L.decay, d) ||
            !vt(L.velocity, c)) &&
            (R = !0);
      }
      if (
        (re && Mt(this) && (s.changed && !g ? (R = !0) : R || this._stop(a)),
        !w &&
          ((R || Ue(a)) &&
            ((s.values = f.getPayload()),
            (s.toValues = Ue(h) ? null : V == pl ? [1] : Ie(E))),
          s.immediate != $ && ((s.immediate = $), !$ && !g && this._set(a)),
          R))
      ) {
        let { onRest: le } = s;
        A(vg, (Ye) => yd(this, n, Ye));
        let Ce = be(this, Er(this, a));
        Nr(this._pendingCalls, Ce),
          this._pendingCalls.add(r),
          s.changed &&
            O.batchedUpdates(() => {
              var Ye;
              (s.changed = !g),
                le == null || le(Ce, this),
                g
                  ? rn(u.onRest, Ce)
                  : (Ye = s.onStart) == null || Ye.call(s, Ce, this);
            });
      }
      g && this._set(k),
        w
          ? r(L1(n.to, n, this._state, this))
          : R
          ? this._start()
          : Mt(this) && !v
          ? this._pendingCalls.add(r)
          : r(_1(k));
    }
    _focus(t) {
      let n = this.animation;
      t !== n.to &&
        (id(this) && this._detach(), (n.to = t), id(this) && this._attach());
    }
    _attach() {
      let t = 0,
        { to: n } = this.animation;
      Ue(n) && (ar(n, this), ds(n) && (t = n.priority + 1)),
        (this.priority = t);
    }
    _detach() {
      let { to: t } = this.animation;
      Ue(t) && dl(t, this);
    }
    _set(t, n = !0) {
      let r = Ee(t);
      if (!_.und(r)) {
        let l = ct(this);
        if (!l || !vt(r, l.getValue())) {
          let i = ss(r);
          !l || l.constructor != i ? _a(this, i.create(r)) : l.setValue(r),
            l &&
              O.batchedUpdates(() => {
                this._onChange(r, n);
              });
        }
      }
      return ct(this);
    }
    _onStart() {
      let t = this.animation;
      t.changed ||
        ((t.changed = !0), xr(this, "onStart", be(this, Er(this, t.to)), this));
    }
    _onChange(t, n) {
      n || (this._onStart(), rn(this.animation.onChange, t, this)),
        rn(this.defaultProps.onChange, t, this),
        super._onChange(t, n);
    }
    _start() {
      let t = this.animation;
      ct(this).reset(Ee(t.to)),
        t.immediate || (t.fromValues = t.values.map((n) => n.lastPosition)),
        Mt(this) || (md(this, !0), Cr(this) || this._resume());
    }
    _resume() {
      it.skipAnimation ? this.finish() : po.start(this);
    }
    _stop(t, n) {
      if (Mt(this)) {
        md(this, !1);
        let r = this.animation;
        A(r.values, (i) => {
          i.done = !0;
        }),
          r.toValues && (r.onChange = r.onPause = r.onResume = void 0),
          cl(this, { type: "idle", parent: this });
        let l = n ? Zn(this.get()) : be(this.get(), Er(this, t ?? r.to));
        Nr(this._pendingCalls, l),
          r.changed && ((r.changed = !1), xr(this, "onRest", l, this));
      }
    }
  };
function Er(e, t) {
  let n = hl(t),
    r = hl(e.get());
  return vt(r, n);
}
function P1(e, t = e.loop, n = e.to) {
  let r = rn(t);
  if (r) {
    let l = r !== !0 && E1(r),
      i = (l || e).reverse,
      o = !l || l.reset;
    return gl({
      ...e,
      loop: t,
      default: !1,
      pause: void 0,
      to: !i || as(n) ? n : void 0,
      from: o ? e.from : void 0,
      reset: o,
      ...l,
    });
  }
}
function gl(e) {
  let { to: t, from: n } = (e = E1(e)),
    r = new Set();
  return (
    _.obj(t) && vd(t, r),
    _.obj(n) && vd(n, r),
    (e.keys = r.size ? Array.from(r) : null),
    e
  );
}
function gg(e) {
  let t = gl(e);
  return _.und(t.default) && (t.default = La(t)), t;
}
function vd(e, t) {
  ht(e, (n, r) => n != null && t.add(r));
}
var vg = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function yd(e, t, n) {
  e.animation[n] = t[n] !== C1(t, n) ? k1(t[n], e.key) : void 0;
}
function xr(e, t, ...n) {
  var r, l, i, o;
  (l = (r = e.animation)[t]) == null || l.call(r, ...n),
    (o = (i = e.defaultProps)[t]) == null || o.call(i, ...n);
}
var yg = ["onStart", "onChange", "onRest"],
  wg = 1,
  Sg = class {
    constructor(e, t) {
      M(this, "id", wg++);
      M(this, "springs", {});
      M(this, "queue", []);
      M(this, "ref");
      M(this, "_flush");
      M(this, "_initialProps");
      M(this, "_lastAsyncId", 0);
      M(this, "_active", new Set());
      M(this, "_changed", new Set());
      M(this, "_started", !1);
      M(this, "_item");
      M(this, "_state", {
        paused: !1,
        pauseQueue: new Set(),
        resumeQueue: new Set(),
        timeouts: new Set(),
      });
      M(this, "_events", {
        onStart: new Map(),
        onChange: new Map(),
        onRest: new Map(),
      });
      (this._onFrame = this._onFrame.bind(this)),
        t && (this._flush = t),
        e && this.start({ default: !0, ...e });
    }
    get idle() {
      return (
        !this._state.asyncTo &&
        Object.values(this.springs).every(
          (e) => e.idle && !e.isDelayed && !e.isPaused
        )
      );
    }
    get item() {
      return this._item;
    }
    set item(e) {
      this._item = e;
    }
    get() {
      let e = {};
      return this.each((t, n) => (e[n] = t.get())), e;
    }
    set(e) {
      for (let t in e) {
        let n = e[t];
        _.und(n) || this.springs[t].set(n);
      }
    }
    update(e) {
      return e && this.queue.push(gl(e)), this;
    }
    start(e) {
      let { queue: t } = this;
      return (
        e ? (t = Ie(e).map(gl)) : (this.queue = []),
        this._flush ? this._flush(this, t) : (I1(this, t), hs(this, t))
      );
    }
    stop(e, t) {
      if ((e !== !!e && (t = e), t)) {
        let n = this.springs;
        A(Ie(t), (r) => n[r].stop(!!e));
      } else ml(this._state, this._lastAsyncId), this.each((n) => n.stop(!!e));
      return this;
    }
    pause(e) {
      if (_.und(e)) this.start({ pause: !0 });
      else {
        let t = this.springs;
        A(Ie(e), (n) => t[n].pause());
      }
      return this;
    }
    resume(e) {
      if (_.und(e)) this.start({ pause: !1 });
      else {
        let t = this.springs;
        A(Ie(e), (n) => t[n].resume());
      }
      return this;
    }
    each(e) {
      ht(this.springs, e);
    }
    _onFrame() {
      let { onStart: e, onChange: t, onRest: n } = this._events,
        r = this._active.size > 0,
        l = this._changed.size > 0;
      ((r && !this._started) || (l && !this._started)) &&
        ((this._started = !0),
        Ur(e, ([u, s]) => {
          (s.value = this.get()), u(s, this, this._item);
        }));
      let i = !r && this._started,
        o = l || (i && n.size) ? this.get() : null;
      l &&
        t.size &&
        Ur(t, ([u, s]) => {
          (s.value = o), u(s, this, this._item);
        }),
        i &&
          ((this._started = !1),
          Ur(n, ([u, s]) => {
            (s.value = o), u(s, this, this._item);
          }));
    }
    eventObserved(e) {
      if (e.type == "change")
        this._changed.add(e.parent), e.idle || this._active.add(e.parent);
      else if (e.type == "idle") this._active.delete(e.parent);
      else return;
      O.onFrame(this._onFrame);
    }
  };
function hs(e, t) {
  return Promise.all(t.map((n) => N1(e, n))).then((n) => $a(e, n));
}
async function N1(e, t, n) {
  let { keys: r, to: l, from: i, loop: o, onRest: u, onResolve: s } = t,
    a = _.obj(t.default) && t.default;
  o && (t.loop = !1), l === !1 && (t.to = null), i === !1 && (t.from = null);
  let m = _.arr(l) || _.fun(l) ? l : void 0;
  m
    ? ((t.to = void 0), (t.onRest = void 0), a && (a.onRest = void 0))
    : A(yg, (w) => {
        let L = t[w];
        if (_.fun(L)) {
          let d = e._events[w];
          (t[w] = ({ finished: c, cancelled: f }) => {
            let g = d.get(L);
            g
              ? (c || (g.finished = !1), f && (g.cancelled = !0))
              : d.set(L, {
                  value: null,
                  finished: c || !1,
                  cancelled: f || !1,
                });
          }),
            a && (a[w] = t[w]);
        }
      });
  let h = e._state;
  t.pause === !h.paused
    ? ((h.paused = t.pause), Nr(t.pause ? h.pauseQueue : h.resumeQueue))
    : h.paused && (t.pause = !0);
  let p = (r || Object.keys(e.springs)).map((w) => e.springs[w].start(t)),
    y = t.cancel === !0 || C1(t, "cancel") === !0;
  (m || (y && h.asyncId)) &&
    p.push(
      x1(++e._lastAsyncId, {
        props: t,
        state: h,
        actions: {
          pause: os,
          resume: os,
          start(w, L) {
            y
              ? (ml(h, e._lastAsyncId), L(Zn(e)))
              : ((w.onRest = u), L(L1(m, w, h, e)));
          },
        },
      })
    ),
    h.paused &&
      (await new Promise((w) => {
        h.resumeQueue.add(w);
      }));
  let v = $a(e, await Promise.all(p));
  if (o && v.finished && !(n && v.noop)) {
    let w = P1(t, o, l);
    if (w) return I1(e, [w]), N1(e, w, !0);
  }
  return s && O.batchedUpdates(() => s(v, e, e.item)), v;
}
function wd(e, t) {
  let n = { ...e.springs };
  return (
    t &&
      A(Ie(t), (r) => {
        _.und(r.keys) && (r = gl(r)),
          _.obj(r.to) || (r = { ...r, to: void 0 }),
          R1(n, r, (l) => z1(l));
      }),
    M1(e, n),
    n
  );
}
function M1(e, t) {
  ht(t, (n, r) => {
    e.springs[r] || ((e.springs[r] = n), ar(n, e));
  });
}
function z1(e, t) {
  let n = new mg();
  return (n.key = e), t && ar(n, t), n;
}
function R1(e, t, n) {
  t.keys &&
    A(t.keys, (r) => {
      (e[r] || (e[r] = n(r)))._prepareNode(t);
    });
}
function I1(e, t) {
  A(t, (n) => {
    R1(e.springs, n, (r) => z1(r, e));
  });
}
var wo = ({ children: e, ...t }) => {
    let n = S.useContext(Qi),
      r = t.pause || !!n.pause,
      l = t.immediate || !!n.immediate;
    t = Y2(() => ({ pause: r, immediate: l }), [r, l]);
    let { Provider: i } = Qi;
    return S.createElement(i, { value: t }, e);
  },
  Qi = kg(wo, {});
wo.Provider = Qi.Provider;
wo.Consumer = Qi.Consumer;
function kg(e, t) {
  return (
    Object.assign(e, S.createContext(t)),
    (e.Provider._context = e),
    (e.Consumer._context = e),
    e
  );
}
var Cg = () => {
  let e = [],
    t = function (r) {
      Z2();
      let l = [];
      return (
        A(e, (i, o) => {
          if (_.und(r)) l.push(i.start());
          else {
            let u = n(r, i, o);
            u && l.push(i.start(u));
          }
        }),
        l
      );
    };
  (t.current = e),
    (t.add = function (r) {
      e.includes(r) || e.push(r);
    }),
    (t.delete = function (r) {
      let l = e.indexOf(r);
      ~l && e.splice(l, 1);
    }),
    (t.pause = function () {
      return A(e, (r) => r.pause(...arguments)), this;
    }),
    (t.resume = function () {
      return A(e, (r) => r.resume(...arguments)), this;
    }),
    (t.set = function (r) {
      A(e, (l, i) => {
        let o = _.fun(r) ? r(i, l) : r;
        o && l.set(o);
      });
    }),
    (t.start = function (r) {
      let l = [];
      return (
        A(e, (i, o) => {
          if (_.und(r)) l.push(i.start());
          else {
            let u = this._getProps(r, i, o);
            u && l.push(i.start(u));
          }
        }),
        l
      );
    }),
    (t.stop = function () {
      return A(e, (r) => r.stop(...arguments)), this;
    }),
    (t.update = function (r) {
      return A(e, (l, i) => l.update(this._getProps(r, l, i))), this;
    });
  let n = function (r, l, i) {
    return _.fun(r) ? r(i, l) : r;
  };
  return (t._getProps = n), t;
};
function Eg(e, t, n) {
  let r = _.fun(t) && t;
  r && !n && (n = []);
  let l = S.useMemo(() => (r || arguments.length == 3 ? Cg() : void 0), []),
    i = S.useRef(0),
    o = v1(),
    u = S.useMemo(
      () => ({
        ctrls: [],
        queue: [],
        flush(d, c) {
          let f = wd(d, c);
          return i.current > 0 &&
            !u.queue.length &&
            !Object.keys(f).some((g) => !d.springs[g])
            ? hs(d, c)
            : new Promise((g) => {
                M1(d, f),
                  u.queue.push(() => {
                    g(hs(d, c));
                  }),
                  o();
              });
        },
      }),
      []
    ),
    s = S.useRef([...u.ctrls]),
    a = [],
    m = ud(e) || 0;
  S.useMemo(() => {
    A(s.current.slice(e, m), (d) => {
      sg(d, l), d.stop(!0);
    }),
      (s.current.length = e),
      h(m, e);
  }, [e]),
    S.useMemo(() => {
      h(0, Math.min(m, e));
    }, n);
  function h(d, c) {
    for (let f = d; f < c; f++) {
      let g = s.current[f] || (s.current[f] = new Sg(null, u.flush)),
        k = r ? r(f, g) : t[f];
      k && (a[f] = gg(k));
    }
  }
  let p = s.current.map((d, c) => wd(d, a[c])),
    y = S.useContext(wo),
    v = ud(y),
    w = y !== v && ug(y);
  xa(() => {
    i.current++, (u.ctrls = s.current);
    let { queue: d } = u;
    d.length && ((u.queue = []), A(d, (c) => c())),
      A(s.current, (c, f) => {
        l == null || l.add(c), w && c.start({ default: y });
        let g = a[f];
        g && (ag(c, g.ref), c.ref ? c.queue.push(g) : c.start(g));
      });
  }),
    y1(() => () => {
      A(u.ctrls, (d) => d.stop(!0));
    });
  let L = p.map((d) => ({ ...d }));
  return l ? [L, l] : L;
}
function xg(e, t) {
  let n = _.fun(e),
    [[r], l] = Eg(1, n ? e : [e], n ? t || [] : t);
  return n || arguments.length == 2 ? [r, l] : r;
}
var _g = class extends Pa {
  constructor(t, n) {
    super();
    M(this, "key");
    M(this, "idle", !0);
    M(this, "calc");
    M(this, "_active", new Set());
    (this.source = t), (this.calc = al(...n));
    let r = this._get(),
      l = ss(r);
    _a(this, l.create(r));
  }
  advance(t) {
    let n = this._get(),
      r = this.get();
    vt(n, r) || (ct(this).setValue(n), this._onChange(n, this.idle)),
      !this.idle && Sd(this._active) && ru(this);
  }
  _get() {
    let t = _.arr(this.source) ? this.source.map(Ee) : Ie(Ee(this.source));
    return this.calc(...t);
  }
  _start() {
    this.idle &&
      !Sd(this._active) &&
      ((this.idle = !1),
      A(vo(this), (t) => {
        t.done = !1;
      }),
      it.skipAnimation
        ? (O.batchedUpdates(() => this.advance()), ru(this))
        : po.start(this));
  }
  _attach() {
    let t = 1;
    A(Ie(this.source), (n) => {
      Ue(n) && ar(n, this),
        ds(n) &&
          (n.idle || this._active.add(n), (t = Math.max(t, n.priority + 1)));
    }),
      (this.priority = t),
      this._start();
  }
  _detach() {
    A(Ie(this.source), (t) => {
      Ue(t) && dl(t, this);
    }),
      this._active.clear(),
      ru(this);
  }
  eventObserved(t) {
    t.type == "change"
      ? t.idle
        ? this.advance()
        : (this._active.add(t.parent), this._start())
      : t.type == "idle"
      ? this._active.delete(t.parent)
      : t.type == "priority" &&
        (this.priority = Ie(this.source).reduce(
          (n, r) => Math.max(n, (ds(r) ? r.priority : 0) + 1),
          0
        ));
  }
};
function Lg(e) {
  return e.idle !== !1;
}
function Sd(e) {
  return !e.size || Array.from(e).every(Lg);
}
function ru(e) {
  e.idle ||
    ((e.idle = !0),
    A(vo(e), (t) => {
      t.done = !0;
    }),
    cl(e, { type: "idle", parent: e }));
}
it.assign({ createStringInterpolator: m1, to: (e, t) => new _g(e, t) });
var j1 = /^--/;
function $g(e, t) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : typeof t == "number" &&
      t !== 0 &&
      !j1.test(e) &&
      !(Qr.hasOwnProperty(e) && Qr[e])
    ? t + "px"
    : ("" + t).trim();
}
var kd = {};
function Pg(e, t) {
  if (!e.nodeType || !e.setAttribute) return !1;
  let n =
      e.nodeName === "filter" ||
      (e.parentNode && e.parentNode.nodeName === "filter"),
    {
      style: r,
      children: l,
      scrollTop: i,
      scrollLeft: o,
      viewBox: u,
      ...s
    } = t,
    a = Object.values(s),
    m = Object.keys(s).map((h) =>
      n || e.hasAttribute(h)
        ? h
        : kd[h] || (kd[h] = h.replace(/([A-Z])/g, (p) => "-" + p.toLowerCase()))
    );
  l !== void 0 && (e.textContent = l);
  for (let h in r)
    if (r.hasOwnProperty(h)) {
      let p = $g(h, r[h]);
      j1.test(h) ? e.style.setProperty(h, p) : (e.style[h] = p);
    }
  m.forEach((h, p) => {
    e.setAttribute(h, a[p]);
  }),
    i !== void 0 && (e.scrollTop = i),
    o !== void 0 && (e.scrollLeft = o),
    u !== void 0 && e.setAttribute("viewBox", u);
}
var Qr = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ng = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
  Mg = ["Webkit", "Ms", "Moz", "O"];
Qr = Object.keys(Qr).reduce(
  (e, t) => (Mg.forEach((n) => (e[Ng(n, t)] = e[t])), e),
  Qr
);
var zg = /^(matrix|translate|scale|rotate|skew)/,
  Rg = /^(translate)/,
  Ig = /^(rotate|skew)/,
  lu = (e, t) => (_.num(e) && e !== 0 ? e + t : e),
  pi = (e, t) =>
    _.arr(e)
      ? e.every((n) => pi(n, t))
      : _.num(e)
      ? e === t
      : parseFloat(e) === t,
  jg = class extends yo {
    constructor({ x: e, y: t, z: n, ...r }) {
      let l = [],
        i = [];
      (e || t || n) &&
        (l.push([e || 0, t || 0, n || 0]),
        i.push((o) => [
          `translate3d(${o.map((u) => lu(u, "px")).join(",")})`,
          pi(o, 0),
        ])),
        ht(r, (o, u) => {
          if (u === "transform")
            l.push([o || ""]), i.push((s) => [s, s === ""]);
          else if (zg.test(u)) {
            if ((delete r[u], _.und(o))) return;
            let s = Rg.test(u) ? "px" : Ig.test(u) ? "deg" : "";
            l.push(Ie(o)),
              i.push(
                u === "rotate3d"
                  ? ([a, m, h, p]) => [
                      `rotate3d(${a},${m},${h},${lu(p, s)})`,
                      pi(p, 0),
                    ]
                  : (a) => [
                      `${u}(${a.map((m) => lu(m, s)).join(",")})`,
                      pi(a, u.startsWith("scale") ? 1 : 0),
                    ]
              );
          }
        }),
        l.length && (r.transform = new Og(l, i)),
        super(r);
    }
  },
  Og = class extends f1 {
    constructor(t, n) {
      super();
      M(this, "_value", null);
      (this.inputs = t), (this.transforms = n);
    }
    get() {
      return this._value || (this._value = this._get());
    }
    _get() {
      let t = "",
        n = !0;
      return (
        A(this.inputs, (r, l) => {
          let i = Ee(r[0]),
            [o, u] = this.transforms[l](_.arr(i) ? i : r.map(Ee));
          (t += " " + o), (n = n && u);
        }),
        n ? "none" : t
      );
    }
    observerAdded(t) {
      t == 1 && A(this.inputs, (n) => A(n, (r) => Ue(r) && ar(r, this)));
    }
    observerRemoved(t) {
      t == 0 && A(this.inputs, (n) => A(n, (r) => Ue(r) && dl(r, this)));
    }
    eventObserved(t) {
      t.type == "change" && (this._value = null), cl(this, t);
    }
  },
  Tg = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ];
it.assign({
  batchedUpdates: Fp.unstable_batchedUpdates,
  createStringInterpolator: m1,
  colors: E2,
});
var Fg = ng(Tg, {
    applyAnimatedValues: Pg,
    createAnimatedStyle: (e) => new jg(e),
    getComponentProps: ({ scrollTop: e, scrollLeft: t, ...n }) => n,
  }),
  Ag = Fg.animated;
const Dg = ve.img`
    pointer-events: none;
    transform-origin: center;
`,
  Vg = ve(Ag.div)``;
function Ug(e) {
  const t = Bg(),
    n = xg({ x: t.x / (e.intensity ?? 1), y: t.y / (e.intensity ?? 1) });
  return P.jsx(P.Fragment, {
    children: P.jsx(Vg, {
      style: { ...n },
      children:
        e.children ?? P.jsx(Dg, { src: e.image, width: 200, height: 200 }),
    }),
  });
}
function Bg() {
  const e = S.useRef(),
    [t, n] = S.useState({ x: 0, y: 0 });
  return (
    Wg("mousemove", (r) => {
      n({ x: r.movementX, y: r.movementY });
    }),
    S.useEffect(() => {
      clearTimeout(e.current),
        (e.current = setTimeout(() => {
          n({ x: 0, y: 0 });
        }, 100));
    }, [t]),
    t
  );
}
function Wg(e, t) {
  S.useEffect(
    () => (
      window.addEventListener(e, t),
      () => {
        window.removeEventListener(e, t);
      }
    ),
    []
  );
}
const Qg = ve.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr;
  place-items: center;
`,
  Hg = ve.div`
  grid-row: 1/3;
  grid-column: 1/2;
  justify-self: end;
  z-index: 0;
`,
  Zg = ve.div`
  grid-row: 1/3;
  grid-column: 1/2;
  justify-self: end;
  width: 320px;
  height: 320px;

  border-radius: 50%;
  background: #232323;
`,
  Gg = ve.h1`
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: start;
  align-self: end;

  font-size: 10.4rem;
  line-height: 80%;

  z-index: 0;
`,
  Yg = ve.p`
  grid-row: 2/3;
  grid-column: 1/2;
  justify-self: start;
  align-self: start;

  font-size: 3.6rem;
  line-height: 100%;

  color: #6fbf4a;

  z-index: 0;
`;
function Kg() {
  const e = "Denis Wilton",
    t = "Web developer";
  return P.jsxs(Qg, {
    children: [
      P.jsx(Hg, {
        children: P.jsx(Ug, { intensity: 8.5, children: P.jsx(Zg, {}) }),
      }),
      P.jsx(Gg, { className: "font-bold", children: e }),
      P.jsx(Yg, { className: "transform translate-x-5", children: t }),
    ],
  });
}
const Xg = ve.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  justify-items: start;
  height: 15rem;
`,
  qg = ve.h3`
  font-size: 3.2rem;
`,
  Jg = ve.p`
  font-size: 1.6rem;
  color: #6fbf4a;
`;
function bg() {
  const e = ["Typescript", "Vue", "React"],
    t = e[0],
    n = e.slice(1);
  return P.jsx(Xg, {
    children: P.jsxs("div", {
      children: [
        P.jsx(qg, { children: t }),
        P.jsx(Jg, { children: n.join(", ") }),
      ],
    }),
  });
}
const ev = (e) =>
    S.createElement(
      "svg",
      {
        width: 284,
        height: 323,
        viewBox: "0 0 284 323",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      S.createElement(
        "g",
        { clipPath: "url(#clip0_1_69)" },
        S.createElement("path", {
          d: "M84.0646 207.026L25.0208 241.041L166.117 322.311L225.161 288.297L84.0646 207.026Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M61.911 202.599L0 238.266L147.109 323L209.02 287.333L61.911 202.599Z",
          fill: "#5E5E5E",
        }),
        S.createElement("path", {
          d: "M61.7454 204.931L8.31874 235.71L149.898 317.259L203.325 286.48L61.7454 204.931Z",
          fill: "#F2F2F2",
        }),
        S.createElement("path", {
          d: "M63.0609 212.28L56.8741 215.844L64.2053 220.067L70.3922 216.502L63.0609 212.28Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M72.1522 217.32L65.9656 220.884L138.668 262.76L144.854 259.196L72.1522 217.32Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M158.394 266.993L152.208 270.557L142.153 264.766L148.339 261.202L158.394 266.993Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M161.927 269.029L155.74 272.593L176.856 284.755L183.042 281.191L161.927 269.029Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M53.9024 219.043L47.7159 222.607L169.119 292.535L175.306 288.971L53.9024 219.043Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M45.8207 224.083L39.6342 227.647L161.038 297.575L167.224 294.011L45.8207 224.083Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M37.7393 229.123L31.553 232.687L152.957 302.615L159.143 299.051L37.7393 229.123Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M29.658 234.163L23.4716 237.727L144.875 307.655L151.061 304.09L29.658 234.163Z",
          fill: "#C4C4C4",
        }),
        S.createElement("path", {
          d: "M89.3345 149.558L283.821 261.611L283.816 112.053L89.3287 -3.43323e-05L89.3345 149.558Z",
          fill: "#3A3A3C",
        }),
        S.createElement("path", {
          d: "M78.2223 153.59L272.709 265.643L272.703 116.085L78.2168 4.03201L78.2223 153.59Z",
          fill: "#C3C3C3",
        }),
        S.createElement("path", {
          d: "M274.929 120.771L66.1597 0.489389L66.1607 26.7955L274.93 147.077L274.929 120.771Z",
          fill: "#418621",
        }),
        S.createElement("path", {
          d: "M67.3478 153.903L261.835 265.956L261.829 116.398L67.3423 4.34522L67.3478 153.903Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M261.417 115.824L66.7258 3.65355L66.7319 166.843L261.424 279.013L261.417 115.824Z",
          fill: "#F2F2F2",
        }),
        S.createElement("path", {
          d: "M252.375 219.342L174.051 174.216V177.776L252.375 222.902L252.375 219.342Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M252.402 226.478L174.051 181.337V184.897L252.402 230.038V226.478Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M216.366 212.836L174.051 188.457V192.018L216.366 216.397V212.836Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M204.428 123.807L191.694 116.47V118.718L204.428 126.055V123.807Z",
          fill: "#B1B1B1",
        }),
        S.createElement("path", {
          d: "M187.978 110.302L174.051 102.279L174.052 112.937L187.979 120.961L187.978 110.302Z",
          fill: "#5E5E5E",
        }),
        S.createElement("path", {
          d: "M207.376 125.279L220.111 132.616V134.864L207.376 127.527L207.376 125.279Z",
          fill: "#B1B1B1",
        }),
        S.createElement(
          "mask",
          {
            id: "mask0_1_69",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: 173,
            y: 122,
            width: 81,
            height: 90,
          },
          S.createElement("path", {
            d: "M252.225 168.684L174.331 123.806L174.333 164.967L252.226 209.845L252.225 168.684Z",
            fill: "#F2F2F2",
            stroke: "#5E5E5E",
            strokeWidth: 2,
          })
        ),
        S.createElement(
          "g",
          { mask: "url(#mask0_1_69)" },
          S.createElement("path", {
            d: "M252.225 168.684L174.331 123.806L174.333 164.967L252.226 209.845L252.225 168.684Z",
            fill: "#F2F2F2",
            stroke: "#5E5E5E",
            strokeWidth: 2,
          }),
          S.createElement("path", {
            d: "M224.41 175.74C211.794 167.719 208.552 193.919 204.436 194.989L269.615 221.196V218.522C269.615 218.522 249.991 212.931 241.931 202.722C233.871 192.513 237.025 183.762 224.41 175.74Z",
            fill: "#C3C3C3",
          }),
          S.createElement("path", {
            d: "M247.558 172.867C263.088 174.913 259.61 210.852 261.671 214.031L187.773 187.304L189.953 185.484C189.953 185.484 208.496 193.357 222.563 191.201C236.631 189.046 232.028 170.821 247.558 172.867Z",
            fill: "#B1B1B1",
          }),
          S.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M174.9 124.789L251.656 169.012L251.658 208.861L174.902 164.639L174.9 124.789ZM174.051 123.321L174.053 165.128L252.507 210.329L252.505 168.522L174.051 123.321Z",
            fill: "#5E5E5E",
          }),
          S.createElement("path", {
            d: "M191.115 162.401L181.892 157.088L181.893 163.63L191.115 168.943L191.115 162.401Z",
            fill: "#418621",
          }),
          S.createElement("path", {
            d: "M218.624 158.915L180.912 137.188V142.081L218.624 163.809L218.624 158.915Z",
            fill: "#C3C3C3",
          }),
          S.createElement("path", {
            d: "M197.789 156.045L180.912 146.322V151.215L197.789 160.939L197.789 156.045Z",
            fill: "#5E5E5E",
          }),
          S.createElement("path", {
            d: "M190.135 162.401L180.912 157.088L180.913 163.63L190.135 168.943L190.135 162.401Z",
            fill: "#6FBF4A",
          })
        ),
        S.createElement("path", {
          d: "M237.753 142.892L225.019 135.556V137.804L237.753 145.141V142.892Z",
          fill: "#B1B1B1",
        }),
        S.createElement("path", {
          d: "M164.071 59.9385L66.7258 3.85307L66.7319 166.843L164.078 222.928L164.071 59.9385Z",
          fill: "#F2F2F2",
        }),
        S.createElement(
          "mask",
          {
            id: "mask1_1_69",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: 215,
            y: 169,
            width: 53,
            height: 75,
          },
          S.createElement("path", {
            d: "M266.739 200.276L216.402 171.275L216.403 212.436L266.74 241.437L266.739 200.276Z",
            fill: "#F2F2F2",
            stroke: "#5E5E5E",
            strokeWidth: 2,
          })
        ),
        S.createElement(
          "g",
          { mask: "url(#mask1_1_69)" },
          S.createElement("path", {
            d: "M266.79 200.306L216.402 171.275L216.403 212.436L266.792 241.467L266.79 200.306Z",
            fill: "#F2F2F2",
            stroke: "#5E5E5E",
            strokeWidth: 2,
          }),
          S.createElement("path", {
            d: "M266.48 223.209C253.865 215.187 250.622 241.388 246.506 242.458L311.685 268.664V265.991C311.685 265.991 292.061 260.4 284.001 250.191C275.942 239.981 279.095 231.231 266.48 223.209Z",
            fill: "#C3C3C3",
          }),
          S.createElement("path", {
            d: "M289.628 220.336C305.158 222.382 301.679 258.321 303.741 261.5L229.843 234.774L232.023 232.952C232.023 232.952 250.566 240.825 264.633 238.671C278.7 236.515 274.098 218.29 289.628 220.336Z",
            fill: "#B1B1B1",
          }),
          S.createElement("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M216.97 172.258L266.35 200.708L266.352 240.557L216.972 212.108L216.97 172.258ZM216.121 170.79L216.123 212.597L267.201 242.026L267.199 200.218L216.121 170.79Z",
            fill: "#5E5E5E",
          }),
          S.createElement("path", {
            d: "M260.694 206.384L222.982 184.657L222.982 189.55L260.694 211.278V206.384Z",
            fill: "#C3C3C3",
          }),
          S.createElement("path", {
            d: "M239.859 203.514L222.982 193.791L222.983 198.684L239.859 208.408V203.514Z",
            fill: "#5E5E5E",
          }),
          S.createElement("path", {
            d: "M233.185 209.87L223.962 204.557L223.963 211.099L233.185 216.412V209.87Z",
            fill: "#418621",
          }),
          S.createElement("path", {
            d: "M232.205 209.87L222.982 204.557L222.983 211.099L232.205 216.412L232.205 209.87Z",
            fill: "#6FBF4A",
          })
        ),
        S.createElement("path", {
          d: "M92.9447 155.375L98.3355 146.811",
          stroke: "#6FBF4A",
          strokeWidth: 2,
        }),
        S.createElement("path", {
          d: "M166.521 86.8198L162.604 84.563L162.609 222.289L166.526 224.546L166.521 86.8198Z",
          fill: "#B1B1B1",
        }),
        S.createElement("path", {
          d: "M272.48 122.107L63.2191 1.54253L63.2201 27.8486L272.481 148.413L272.48 122.107Z",
          fill: "#6FBF4A",
        }),
        S.createElement("path", {
          d: "M256.34 121.054L246.133 115.174L246.133 126.877L256.34 132.758L256.34 121.054Z",
          fill: "#F2F2F2",
        }),
        S.createElement("path", {
          d: "M243.067 122.168L232.86 116.287V118.875L243.067 124.756L243.067 122.168Z",
          fill: "#F2F2F2",
        }),
        S.createElement("path", {
          d: "M76.5273 64.5974L80.9377 63.2822L76.527 56.7669",
          stroke: "#6FBF4A",
          strokeWidth: 3,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        S.createElement("path", {
          d: "M91.4166 143.875L85.8385 145.843L91.4166 154.238",
          stroke: "#6FBF4A",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        S.createElement("path", {
          d: "M99.5614 157.664L105.14 155.696L99.5604 147.301",
          stroke: "#6FBF4A",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 63.8629C87.3087 63.4575 87.4561 63.214 87.6383 63.3187L154.467 101.822C154.649 101.927 154.797 102.341 154.797 102.746C154.797 103.151 154.649 103.395 154.467 103.29L87.6386 64.787C87.4562 64.682 87.3087 64.2683 87.3087 63.8629Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 74.8517C87.3087 74.4463 87.4561 74.2028 87.6383 74.3078L154.467 112.811C154.649 112.916 154.797 113.329 154.797 113.735C154.797 114.14 154.649 114.384 154.467 114.279L87.6386 75.7758C87.4562 75.6708 87.3087 75.2574 87.3087 74.8517Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 85.8408C87.3087 85.4354 87.4561 85.1919 87.6383 85.2965L154.467 123.8C154.649 123.905 154.797 124.319 154.797 124.724C154.797 125.129 154.649 125.373 154.467 125.268L87.6386 86.7649C87.4562 86.6599 87.3087 86.2462 87.3087 85.8408Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 96.8296C87.3087 96.4242 87.4561 96.1807 87.6383 96.2856L154.467 134.789C154.649 134.894 154.797 135.307 154.797 135.713C154.797 136.118 154.649 136.362 154.467 136.257L87.6386 97.7537C87.4562 97.6487 87.3087 97.2353 87.3087 96.8296Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 107.818C87.3087 107.413 87.4561 107.169 87.6383 107.274L154.467 145.777C154.649 145.882 154.797 146.296 154.797 146.701C154.797 147.107 154.649 147.351 154.467 147.246L87.6386 108.742C87.4562 108.637 87.3087 108.224 87.3087 107.818Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 118.808C87.3087 118.402 87.4561 118.159 87.6383 118.264L154.467 156.767C154.649 156.872 154.797 157.285 154.797 157.691C154.797 158.096 154.649 158.34 154.467 158.235L87.6386 119.732C87.4562 119.627 87.3087 119.213 87.3087 118.808Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M87.3087 129.797C87.3087 129.391 87.4561 129.147 87.6383 129.252L154.467 167.756C154.649 167.861 154.797 168.274 154.797 168.68C154.797 169.085 154.649 169.329 154.467 169.224L87.6386 130.72C87.4562 130.616 87.3087 130.202 87.3087 129.797Z",
          fill: "#C2C2C2",
        }),
        S.createElement("path", {
          d: "M72.9812 27.0432C74.812 28.0979 76.2957 26.8323 76.2957 24.2163C76.2957 21.6003 74.8117 18.6245 72.9809 17.5698C71.1501 16.515 69.666 17.7807 69.6664 20.3967C69.6664 23.0127 71.1504 25.9885 72.9812 27.0432Z",
          fill: "white",
        }),
        S.createElement("path", {
          d: "M81.3123 32.4263C83.1431 33.4809 84.6271 32.2153 84.6268 29.5993C84.6268 26.9833 83.1428 24.0075 81.312 22.9528C79.4812 21.898 77.9971 23.1637 77.9975 25.7797C77.9975 28.3957 79.4815 31.3714 81.3123 32.4263Z",
          fill: "white",
        }),
        S.createElement("path", {
          d: "M89.6434 37.8091C91.4742 38.864 92.9582 37.5982 92.9582 34.9822C92.9579 32.3662 91.4739 29.3905 89.6431 28.3358C87.8126 27.281 86.3286 28.5467 86.3286 31.1627C86.3286 33.7787 87.8129 36.7545 89.6434 37.8091Z",
          fill: "white",
        }),
        S.createElement("path", {
          d: "M226.556 226.689L175.401 197.216L175.402 210.738L226.556 240.211L226.556 226.689Z",
          fill: "#418621",
        }),
        S.createElement("path", {
          d: "M224.907 227.272L173.975 197.928L173.976 210.945L224.908 240.289L224.907 227.272Z",
          fill: "#6FBF4A",
        }),
        S.createElement(
          "mask",
          {
            id: "mask2_1_69",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: 173,
            y: 197,
            width: 53,
            height: 44,
          },
          S.createElement("path", {
            d: "M225.049 227.355L173.975 197.928L173.976 210.946L225.05 240.372L225.049 227.355Z",
            fill: "#FBBB51",
          })
        ),
        S.createElement(
          "g",
          { mask: "url(#mask2_1_69)" },
          S.createElement("path", {
            d: "M169.319 209.94L235.969 230.004",
            stroke: "#418621",
            strokeWidth: 2,
          }),
          S.createElement("path", {
            d: "M169.074 194.769L228.618 242.972",
            stroke: "#418621",
            strokeWidth: 2,
          })
        )
      ),
      S.createElement(
        "defs",
        null,
        S.createElement(
          "clipPath",
          { id: "clip0_1_69" },
          S.createElement("rect", { width: 284, height: 323, fill: "white" })
        )
      )
    ),
  tv = () =>
    P.jsx("div", {
      className:
        "bg-primary h-[12px] w-[230px] rounded-[20px] transform translate-x-[-50px] mt-5 mb-[-7.5px]",
    }),
  iu = (e) =>
    P.jsx(P.Fragment, {
      children: P.jsx("div", {
        className: "shadow-lg",
        children: P.jsxs(nv, {
          margin: 50,
          children: [
            P.jsx("h3", {
              className: "text-[2.5rem] text-neutral-900",
              children: e.title,
            }),
            P.jsx(tv, {}),
            P.jsx("div", {
              className: "w-full max-w-full overflow-hidden pt-10",
              children: e.children,
            }),
          ],
        }),
      }),
    }),
  nv = ve.div`
  background: #fff;
  color: #000;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  margin-top: ${(e) => e.margin ?? 0}px;
`,
  rv = ve.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  span.call {
    font-size: 2.25rem;
    font-weight: 400;
  }

  span.mail {
    font-size: 2.5rem;
    font-weight: 700;
    color: #6fbf4a;
    line-height: normal;

    &:hover {
      color: #9fef7a;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
function lv() {
  const [e, t] = S.useState(null),
    [n, r] = S.useState(null),
    [l, i] = S.useState(null);
  return (
    S.useEffect(() => {
      (async () => {
        const o = await (await fetch("./exp.json")).json();
        t(o.data), r(o.education), i(o.articles);
      })();
    }, []),
    P.jsxs(h2, {
      children: [
        P.jsx(Kg, {}),
        P.jsx(bg, {}),
        P.jsx(p2, {
          topRight: P.jsx("div", {
            className: "w-[200px] h-[200px]",
            children: P.jsx(ev, { className: "w-full h-full" }),
          }),
          children: P.jsx(iu, {
            title: "Experience",
            children: e
              ? P.jsx("div", {
                  className: "flex flex-col gap-10",
                  children: e.map((o) =>
                    P.jsxs("div", {
                      className: "flex flex-col group",
                      children: [
                        P.jsxs("div", {
                          className: "flex flex-row justify-between",
                          children: [
                            P.jsxs("span", {
                              className:
                                "font-semibold text-neutral-900 group-hover:text-black  group-hover:animate-pulse",
                              children: [
                                o.company,
                                " | ",
                                P.jsx("span", {
                                  className: "font-normal text-primary",
                                  children: [...o.role].reverse()[0].name,
                                }),
                              ],
                            }),
                            P.jsx("a", {
                              className:
                                "text-neutral-400 underline cursor-pointer hover:text-primary",
                              href: o.website,
                              target: "_blank",
                              children: "Visit website",
                            }),
                          ],
                        }),
                        P.jsxs("div", {
                          className:
                            "flex flex-row justify-start gap-2 items-center",
                          children: [
                            P.jsx("span", {
                              className: "text-neutral-500",
                              children: o.location,
                            }),
                            P.jsx("span", {
                              className:
                                "text-[1rem] text-neutral-400 transform translate-y-[-0.5px]",
                              children: "|",
                            }),
                            P.jsx("span", {
                              className:
                                "text-[1rem] text-neutral-400 transform translate-y-[-0.5px]",
                              children: o.date,
                            }),
                          ],
                        }),
                        P.jsxs("div", {
                          className:
                            "py-3 px-5 bg-primary/20 text-primary rounded-md mt-2",
                          children: [
                            [...o.role]
                              .reverse()
                              .slice(0, -1)
                              .map((u) =>
                                P.jsx(P.Fragment, {
                                  children: P.jsxs("div", {
                                    children: [
                                      "Promoted to",
                                      " ",
                                      P.jsx("span", {
                                        className: "font-bold",
                                        children: u.name,
                                      }),
                                    ],
                                  }),
                                })
                              ),
                            P.jsxs("div", {
                              children: [
                                "Joined as",
                                " ",
                                P.jsx("span", {
                                  className: "font-bold",
                                  children: [...o.role].reverse().at(-1).name,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  ),
                })
              : P.jsx("div", {
                  className: "animate-pulse",
                  children: "Loading...",
                }),
          }),
        }),
        P.jsx(iu, {
          title: "Articles and Projects",
          children: P.jsx("div", {
            className: "flex flex-col gap-0 justify-between",
            children: l
              ? l.map((o) =>
                  P.jsxs("div", {
                    onClick: () => window.open(o.url, "_blank"),
                    className:
                      "flex flex-col bg-neutral-200 hover:bg-primary/20 py-1 px-5 rounded-md hover:animate-pulse cursor-pointer",
                    children: [
                      P.jsx("span", {
                        className: "font-bold",
                        children: o.name,
                      }),
                      P.jsxs("span", {
                        children: [
                          o.source,
                          " -",
                          " ",
                          P.jsx("span", {
                            className: "text-neutral-400",
                            children: o.date,
                          }),
                        ],
                      }),
                    ],
                  })
                )
              : P.jsx("div", {
                  className: "animate-pulse",
                  children: "Loading...",
                }),
          }),
        }),
        P.jsx(iu, {
          title: "Education",
          children: P.jsx("div", {
            className: "flex flex-col gap-5 justify-between",
            children: n
              ? P.jsx(P.Fragment, {
                  children: n.map((o) =>
                    P.jsxs("div", {
                      className: "flex flex-col",
                      children: [
                        P.jsx("span", {
                          className: "font-bold",
                          children: o.course,
                        }),
                        P.jsxs("span", {
                          className: "text-neutral-500",
                          children: [o.name, " - (", o.location, ")"],
                        }),
                        P.jsx("span", {
                          className: "text-primary",
                          children: o.date,
                        }),
                      ],
                    })
                  ),
                })
              : P.jsx("div", {
                  className: "animate-pulse",
                  children: "Loading...",
                }),
          }),
        }),
        P.jsx("div", {
          className:
            "bg-primary h-[12px] w-[330px] rounded-[20px] mx-auto my-20",
        }),
        P.jsxs(rv, {
          children: [
            P.jsx("span", { className: "call", children: "Send me an e-mail" }),
            P.jsx("span", {
              className: "mail",
              children: "deniswiltonpa@gmail.com",
            }),
          ],
        }),
      ],
    })
  );
}
ou.createRoot(document.getElementById("root")).render(
  P.jsx(yl.StrictMode, { children: P.jsx(lv, {}) })
);
