var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var react = { exports: {} };
var react_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n$1 = typeof Symbol === "function" && Symbol.for, p = n$1 ? Symbol.for("react.element") : 60103, q = n$1 ? Symbol.for("react.portal") : 60106, r$1 = n$1 ? Symbol.for("react.fragment") : 60107, t = n$1 ? Symbol.for("react.strict_mode") : 60108, u$1 = n$1 ? Symbol.for("react.profiler") : 60114, v$1 = n$1 ? Symbol.for("react.provider") : 60109, w = n$1 ? Symbol.for("react.context") : 60110, x = n$1 ? Symbol.for("react.forward_ref") : 60112, y = n$1 ? Symbol.for("react.suspense") : 60113, z = n$1 ? Symbol.for("react.memo") : 60115, A = n$1 ? Symbol.for("react.lazy") : 60116, B = typeof Symbol === "function" && Symbol.iterator;
function C$1(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var D = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, E$1 = {};
function F$1(a, b, c2) {
  this.props = a;
  this.context = b;
  this.refs = E$1;
  this.updater = c2 || D;
}
F$1.prototype.isReactComponent = {};
F$1.prototype.setState = function(a, b) {
  if (typeof a !== "object" && typeof a !== "function" && a != null)
    throw Error(C$1(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
F$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function G$1() {
}
G$1.prototype = F$1.prototype;
function H$1(a, b, c2) {
  this.props = a;
  this.context = b;
  this.refs = E$1;
  this.updater = c2 || D;
}
var I$1 = H$1.prototype = new G$1();
I$1.constructor = H$1;
l(I$1, F$1.prototype);
I$1.isPureReactComponent = true;
var J$1 = { current: null }, K$1 = Object.prototype.hasOwnProperty, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, c2) {
  var e, d = {}, g = null, k = null;
  if (b != null)
    for (e in b.ref !== void 0 && (k = b.ref), b.key !== void 0 && (g = "" + b.key), b)
      K$1.call(b, e) && !L$1.hasOwnProperty(e) && (d[e] = b[e]);
  var f = arguments.length - 2;
  if (f === 1)
    d.children = c2;
  else if (1 < f) {
    for (var h = Array(f), m = 0; m < f; m++)
      h[m] = arguments[m + 2];
    d.children = h;
  }
  if (a && a.defaultProps)
    for (e in f = a.defaultProps, f)
      d[e] === void 0 && (d[e] = f[e]);
  return { $$typeof: p, type: a, key: g, ref: k, props: d, _owner: J$1.current };
}
function N$1(a, b) {
  return { $$typeof: p, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return typeof a === "object" && a !== null && a.$$typeof === p;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + ("" + a).replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g, Q$1 = [];
function R$1(a, b, c2, e) {
  if (Q$1.length) {
    var d = Q$1.pop();
    d.result = a;
    d.keyPrefix = b;
    d.func = c2;
    d.context = e;
    d.count = 0;
    return d;
  }
  return { result: a, keyPrefix: b, func: c2, context: e, count: 0 };
}
function S$1(a) {
  a.result = null;
  a.keyPrefix = null;
  a.func = null;
  a.context = null;
  a.count = 0;
  10 > Q$1.length && Q$1.push(a);
}
function T$1(a, b, c2, e) {
  var d = typeof a;
  if (d === "undefined" || d === "boolean")
    a = null;
  var g = false;
  if (a === null)
    g = true;
  else
    switch (d) {
      case "string":
      case "number":
        g = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case p:
          case q:
            g = true;
        }
    }
  if (g)
    return c2(e, a, b === "" ? "." + U$1(a, 0) : b), 1;
  g = 0;
  b = b === "" ? "." : b + ":";
  if (Array.isArray(a))
    for (var k = 0; k < a.length; k++) {
      d = a[k];
      var f = b + U$1(d, k);
      g += T$1(d, f, c2, e);
    }
  else if (a === null || typeof a !== "object" ? f = null : (f = B && a[B] || a["@@iterator"], f = typeof f === "function" ? f : null), typeof f === "function")
    for (a = f.call(a), k = 0; !(d = a.next()).done; )
      d = d.value, f = b + U$1(d, k++), g += T$1(d, f, c2, e);
  else if (d === "object")
    throw c2 = "" + a, Error(C$1(31, c2 === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : c2, ""));
  return g;
}
function V$1(a, b, c2) {
  return a == null ? 0 : T$1(a, "", b, c2);
}
function U$1(a, b) {
  return typeof a === "object" && a !== null && a.key != null ? escape(a.key) : b.toString(36);
}
function W$1(a, b) {
  a.func.call(a.context, b, a.count++);
}
function aa$1(a, b, c2) {
  var e = a.result, d = a.keyPrefix;
  a = a.func.call(a.context, b, a.count++);
  Array.isArray(a) ? X$1(a, e, c2, function(a2) {
    return a2;
  }) : a != null && (O$1(a) && (a = N$1(a, d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(P$1, "$&/") + "/") + c2)), e.push(a));
}
function X$1(a, b, c2, e, d) {
  var g = "";
  c2 != null && (g = ("" + c2).replace(P$1, "$&/") + "/");
  b = R$1(b, g, e, d);
  V$1(a, aa$1, b);
  S$1(b);
}
var Y$1 = { current: null };
function Z$1() {
  var a = Y$1.current;
  if (a === null)
    throw Error(C$1(321));
  return a;
}
var ba$1 = { ReactCurrentDispatcher: Y$1, ReactCurrentBatchConfig: { suspense: null }, ReactCurrentOwner: J$1, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: function(a, b, c2) {
  if (a == null)
    return a;
  var e = [];
  X$1(a, e, null, b, c2);
  return e;
}, forEach: function(a, b, c2) {
  if (a == null)
    return a;
  b = R$1(null, null, b, c2);
  V$1(a, W$1, b);
  S$1(b);
}, count: function(a) {
  return V$1(a, function() {
    return null;
  }, null);
}, toArray: function(a) {
  var b = [];
  X$1(a, b, null, function(a2) {
    return a2;
  });
  return b;
}, only: function(a) {
  if (!O$1(a))
    throw Error(C$1(143));
  return a;
} };
react_production_min.Component = F$1;
react_production_min.Fragment = r$1;
react_production_min.Profiler = u$1;
react_production_min.PureComponent = H$1;
react_production_min.StrictMode = t;
react_production_min.Suspense = y;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ba$1;
react_production_min.cloneElement = function(a, b, c2) {
  if (a === null || a === void 0)
    throw Error(C$1(267, a));
  var e = l({}, a.props), d = a.key, g = a.ref, k = a._owner;
  if (b != null) {
    b.ref !== void 0 && (g = b.ref, k = J$1.current);
    b.key !== void 0 && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var f = a.type.defaultProps;
    for (h in b)
      K$1.call(b, h) && !L$1.hasOwnProperty(h) && (e[h] = b[h] === void 0 && f !== void 0 ? f[h] : b[h]);
  }
  var h = arguments.length - 2;
  if (h === 1)
    e.children = c2;
  else if (1 < h) {
    f = Array(h);
    for (var m = 0; m < h; m++)
      f[m] = arguments[m + 2];
    e.children = f;
  }
  return {
    $$typeof: p,
    type: a.type,
    key: d,
    ref: g,
    props: e,
    _owner: k
  };
};
react_production_min.createContext = function(a, b) {
  b === void 0 && (b = null);
  a = { $$typeof: w, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: v$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: x, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: A, _ctor: a, _status: -1, _result: null };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: z, type: a, compare: b === void 0 ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return Z$1().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return Z$1().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return Z$1().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c2) {
  return Z$1().useImperativeHandle(a, b, c2);
};
react_production_min.useLayoutEffect = function(a, b) {
  return Z$1().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return Z$1().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c2) {
  return Z$1().useReducer(a, b, c2);
};
react_production_min.useRef = function(a) {
  return Z$1().useRef(a);
};
react_production_min.useState = function(a) {
  return Z$1().useState(a);
};
react_production_min.version = "16.14.0";
{
  react.exports = react_production_min;
}
var React = react.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  var f, g, h, k, l2;
  if (typeof window === "undefined" || typeof MessageChannel !== "function") {
    var p2 = null, q2 = null, t2 = function() {
      if (p2 !== null)
        try {
          var a = exports.unstable_now();
          p2(true, a);
          p2 = null;
        } catch (b) {
          throw setTimeout(t2, 0), b;
        }
    }, u2 = Date.now();
    exports.unstable_now = function() {
      return Date.now() - u2;
    };
    f = function(a) {
      p2 !== null ? setTimeout(f, 0, a) : (p2 = a, setTimeout(t2, 0));
    };
    g = function(a, b) {
      q2 = setTimeout(a, b);
    };
    h = function() {
      clearTimeout(q2);
    };
    k = function() {
      return false;
    };
    l2 = exports.unstable_forceFrameRate = function() {
    };
  } else {
    var w2 = window.performance, x2 = window.Date, y2 = window.setTimeout, z2 = window.clearTimeout;
    if (typeof console !== "undefined") {
      var A2 = window.cancelAnimationFrame;
      typeof window.requestAnimationFrame !== "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
      typeof A2 !== "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");
    }
    if (typeof w2 === "object" && typeof w2.now === "function")
      exports.unstable_now = function() {
        return w2.now();
      };
    else {
      var B2 = x2.now();
      exports.unstable_now = function() {
        return x2.now() - B2;
      };
    }
    var C2 = false, D2 = null, E2 = -1, F2 = 5, G2 = 0;
    k = function() {
      return exports.unstable_now() >= G2;
    };
    l2 = function() {
    };
    exports.unstable_forceFrameRate = function(a) {
      0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported") : F2 = 0 < a ? Math.floor(1e3 / a) : 5;
    };
    var H2 = new MessageChannel(), I2 = H2.port2;
    H2.port1.onmessage = function() {
      if (D2 !== null) {
        var a = exports.unstable_now();
        G2 = a + F2;
        try {
          D2(true, a) ? I2.postMessage(null) : (C2 = false, D2 = null);
        } catch (b) {
          throw I2.postMessage(null), b;
        }
      } else
        C2 = false;
    };
    f = function(a) {
      D2 = a;
      C2 || (C2 = true, I2.postMessage(null));
    };
    g = function(a, b) {
      E2 = y2(function() {
        a(exports.unstable_now());
      }, b);
    };
    h = function() {
      z2(E2);
      E2 = -1;
    };
  }
  function J2(a, b) {
    var c2 = a.length;
    a.push(b);
    a:
      for (; ; ) {
        var d = c2 - 1 >>> 1, e = a[d];
        if (e !== void 0 && 0 < K2(e, b))
          a[d] = b, a[c2] = e, c2 = d;
        else
          break a;
      }
  }
  function L2(a) {
    a = a[0];
    return a === void 0 ? null : a;
  }
  function M2(a) {
    var b = a[0];
    if (b !== void 0) {
      var c2 = a.pop();
      if (c2 !== b) {
        a[0] = c2;
        a:
          for (var d = 0, e = a.length; d < e; ) {
            var m = 2 * (d + 1) - 1, n2 = a[m], v2 = m + 1, r2 = a[v2];
            if (n2 !== void 0 && 0 > K2(n2, c2))
              r2 !== void 0 && 0 > K2(r2, n2) ? (a[d] = r2, a[v2] = c2, d = v2) : (a[d] = n2, a[m] = c2, d = m);
            else if (r2 !== void 0 && 0 > K2(r2, c2))
              a[d] = r2, a[v2] = c2, d = v2;
            else
              break a;
          }
      }
      return b;
    }
    return null;
  }
  function K2(a, b) {
    var c2 = a.sortIndex - b.sortIndex;
    return c2 !== 0 ? c2 : a.id - b.id;
  }
  var N2 = [], O2 = [], P2 = 1, Q2 = null, R2 = 3, S2 = false, T2 = false, U2 = false;
  function V2(a) {
    for (var b = L2(O2); b !== null; ) {
      if (b.callback === null)
        M2(O2);
      else if (b.startTime <= a)
        M2(O2), b.sortIndex = b.expirationTime, J2(N2, b);
      else
        break;
      b = L2(O2);
    }
  }
  function W2(a) {
    U2 = false;
    V2(a);
    if (!T2)
      if (L2(N2) !== null)
        T2 = true, f(X2);
      else {
        var b = L2(O2);
        b !== null && g(W2, b.startTime - a);
      }
  }
  function X2(a, b) {
    T2 = false;
    U2 && (U2 = false, h());
    S2 = true;
    var c2 = R2;
    try {
      V2(b);
      for (Q2 = L2(N2); Q2 !== null && (!(Q2.expirationTime > b) || a && !k()); ) {
        var d = Q2.callback;
        if (d !== null) {
          Q2.callback = null;
          R2 = Q2.priorityLevel;
          var e = d(Q2.expirationTime <= b);
          b = exports.unstable_now();
          typeof e === "function" ? Q2.callback = e : Q2 === L2(N2) && M2(N2);
          V2(b);
        } else
          M2(N2);
        Q2 = L2(N2);
      }
      if (Q2 !== null)
        var m = true;
      else {
        var n2 = L2(O2);
        n2 !== null && g(W2, n2.startTime - b);
        m = false;
      }
      return m;
    } finally {
      Q2 = null, R2 = c2, S2 = false;
    }
  }
  function Y2(a) {
    switch (a) {
      case 1:
        return -1;
      case 2:
        return 250;
      case 5:
        return 1073741823;
      case 4:
        return 1e4;
      default:
        return 5e3;
    }
  }
  var Z2 = l2;
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    T2 || S2 || (T2 = true, f(X2));
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return R2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return L2(N2);
  };
  exports.unstable_next = function(a) {
    switch (R2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = R2;
    }
    var c2 = R2;
    R2 = b;
    try {
      return a();
    } finally {
      R2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = Z2;
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = R2;
    R2 = a;
    try {
      return b();
    } finally {
      R2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c2) {
    var d = exports.unstable_now();
    if (typeof c2 === "object" && c2 !== null) {
      var e = c2.delay;
      e = typeof e === "number" && 0 < e ? d + e : d;
      c2 = typeof c2.timeout === "number" ? c2.timeout : Y2(a);
    } else
      c2 = Y2(a), e = d;
    c2 = e + c2;
    a = { id: P2++, callback: b, priorityLevel: a, startTime: e, expirationTime: c2, sortIndex: -1 };
    e > d ? (a.sortIndex = e, J2(O2, a), L2(N2) === null && a === L2(O2) && (U2 ? h() : U2 = true, g(W2, e - d))) : (a.sortIndex = c2, J2(N2, a), T2 || S2 || (T2 = true, f(X2)));
    return a;
  };
  exports.unstable_shouldYield = function() {
    var a = exports.unstable_now();
    V2(a);
    var b = L2(N2);
    return b !== Q2 && Q2 !== null && b !== null && b.callback !== null && b.startTime <= a && b.expirationTime < Q2.expirationTime || k();
  };
  exports.unstable_wrapCallback = function(a) {
    var b = R2;
    return function() {
      var c2 = R2;
      R2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        R2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = react.exports, n = objectAssign, r = scheduler.exports;
function u(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
if (!aa)
  throw Error(u(227));
function ba(a, b, c2, d, e, f, g, h, k) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c2, l2);
  } catch (m) {
    this.onError(m);
  }
}
var da = false, ea = null, fa = false, ha = null, ia = { onError: function(a) {
  da = true;
  ea = a;
} };
function ja(a, b, c2, d, e, f, g, h, k) {
  da = false;
  ea = null;
  ba.apply(ia, arguments);
}
function ka(a, b, c2, d, e, f, g, h, k) {
  ja.apply(this, arguments);
  if (da) {
    if (da) {
      var l2 = ea;
      da = false;
      ea = null;
    } else
      throw Error(u(198));
    fa || (fa = true, ha = l2);
  }
}
var la = null, ma = null, na = null;
function oa(a, b, c2) {
  var d = a.type || "unknown-event";
  a.currentTarget = na(c2);
  ka(d, b, void 0, a);
  a.currentTarget = null;
}
var pa = null, qa = {};
function ra() {
  if (pa)
    for (var a in qa) {
      var b = qa[a], c2 = pa.indexOf(a);
      if (!(-1 < c2))
        throw Error(u(96, a));
      if (!sa[c2]) {
        if (!b.extractEvents)
          throw Error(u(97, a));
        sa[c2] = b;
        c2 = b.eventTypes;
        for (var d in c2) {
          var e = void 0;
          var f = c2[d], g = b, h = d;
          if (ta.hasOwnProperty(h))
            throw Error(u(99, h));
          ta[h] = f;
          var k = f.phasedRegistrationNames;
          if (k) {
            for (e in k)
              k.hasOwnProperty(e) && ua(k[e], g, h);
            e = true;
          } else
            f.registrationName ? (ua(f.registrationName, g, h), e = true) : e = false;
          if (!e)
            throw Error(u(98, d, a));
        }
      }
    }
}
function ua(a, b, c2) {
  if (va[a])
    throw Error(u(100, a));
  va[a] = b;
  wa[a] = b.eventTypes[c2].dependencies;
}
var sa = [], ta = {}, va = {}, wa = {};
function xa(a) {
  var b = false, c2;
  for (c2 in a)
    if (a.hasOwnProperty(c2)) {
      var d = a[c2];
      if (!qa.hasOwnProperty(c2) || qa[c2] !== d) {
        if (qa[c2])
          throw Error(u(102, c2));
        qa[c2] = d;
        b = true;
      }
    }
  b && ra();
}
var ya = !(typeof window === "undefined" || typeof window.document === "undefined" || typeof window.document.createElement === "undefined"), za = null, Aa = null, Ba = null;
function Ca(a) {
  if (a = ma(a)) {
    if (typeof za !== "function")
      throw Error(u(280));
    var b = a.stateNode;
    b && (b = la(b), za(a.stateNode, a.type, b));
  }
}
function Da(a) {
  Aa ? Ba ? Ba.push(a) : Ba = [a] : Aa = a;
}
function Ea() {
  if (Aa) {
    var a = Aa, b = Ba;
    Ba = Aa = null;
    Ca(a);
    if (b)
      for (a = 0; a < b.length; a++)
        Ca(b[a]);
  }
}
function Fa(a, b) {
  return a(b);
}
function Ga(a, b, c2, d, e) {
  return a(b, c2, d, e);
}
function Ha() {
}
var Ia = Fa, Ja = false, Ka = false;
function La() {
  if (Aa !== null || Ba !== null)
    Ha(), Ea();
}
function Ma(a, b, c2) {
  if (Ka)
    return a(b, c2);
  Ka = true;
  try {
    return Ia(a, b, c2);
  } finally {
    Ka = false, La();
  }
}
var Na = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Oa = Object.prototype.hasOwnProperty, Pa = {}, Qa = {};
function Ra(a) {
  if (Oa.call(Qa, a))
    return true;
  if (Oa.call(Pa, a))
    return false;
  if (Na.test(a))
    return Qa[a] = true;
  Pa[a] = true;
  return false;
}
function Sa(a, b, c2, d) {
  if (c2 !== null && c2.type === 0)
    return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (c2 !== null)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return a !== "data-" && a !== "aria-";
    default:
      return false;
  }
}
function Ta(a, b, c2, d) {
  if (b === null || typeof b === "undefined" || Sa(a, b, c2, d))
    return true;
  if (d)
    return false;
  if (c2 !== null)
    switch (c2.type) {
      case 3:
        return !b;
      case 4:
        return b === false;
      case 5:
        return isNaN(b);
      case 6:
        return isNaN(b) || 1 > b;
    }
  return false;
}
function v(a, b, c2, d, e, f) {
  this.acceptsBooleans = b === 2 || b === 3 || b === 4;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f;
}
var C = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  C[a] = new v(a, 0, false, a, null, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  C[b] = new v(b, 1, false, a[1], null, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  C[a] = new v(a, 2, false, a.toLowerCase(), null, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  C[a] = new v(a, 2, false, a, null, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  C[a] = new v(a, 3, false, a.toLowerCase(), null, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  C[a] = new v(a, 3, true, a, null, false);
});
["capture", "download"].forEach(function(a) {
  C[a] = new v(a, 4, false, a, null, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  C[a] = new v(a, 6, false, a, null, false);
});
["rowSpan", "start"].forEach(function(a) {
  C[a] = new v(a, 5, false, a.toLowerCase(), null, false);
});
var Ua = /[\-:]([a-z])/g;
function Va(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, null, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(Ua, Va);
  C[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  C[a] = new v(a, 1, false, a.toLowerCase(), null, false);
});
C.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true);
["src", "href", "action", "formAction"].forEach(function(a) {
  C[a] = new v(a, 1, false, a.toLowerCase(), null, true);
});
var Wa = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
Wa.hasOwnProperty("ReactCurrentDispatcher") || (Wa.ReactCurrentDispatcher = { current: null });
Wa.hasOwnProperty("ReactCurrentBatchConfig") || (Wa.ReactCurrentBatchConfig = { suspense: null });
function Xa(a, b, c2, d) {
  var e = C.hasOwnProperty(b) ? C[b] : null;
  var f = e !== null ? e.type === 0 : d ? false : !(2 < b.length) || b[0] !== "o" && b[0] !== "O" || b[1] !== "n" && b[1] !== "N" ? false : true;
  f || (Ta(b, c2, e, d) && (c2 = null), d || e === null ? Ra(b) && (c2 === null ? a.removeAttribute(b) : a.setAttribute(b, "" + c2)) : e.mustUseProperty ? a[e.propertyName] = c2 === null ? e.type === 3 ? false : "" : c2 : (b = e.attributeName, d = e.attributeNamespace, c2 === null ? a.removeAttribute(b) : (e = e.type, c2 = e === 3 || e === 4 && c2 === true ? "" : "" + c2, d ? a.setAttributeNS(d, b, c2) : a.setAttribute(b, c2))));
}
var Ya = /^(.*)[\\\/]/, E = typeof Symbol === "function" && Symbol.for, Za = E ? Symbol.for("react.element") : 60103, $a = E ? Symbol.for("react.portal") : 60106, ab = E ? Symbol.for("react.fragment") : 60107, bb = E ? Symbol.for("react.strict_mode") : 60108, cb = E ? Symbol.for("react.profiler") : 60114, db = E ? Symbol.for("react.provider") : 60109, eb = E ? Symbol.for("react.context") : 60110, fb = E ? Symbol.for("react.concurrent_mode") : 60111, gb = E ? Symbol.for("react.forward_ref") : 60112, hb = E ? Symbol.for("react.suspense") : 60113, ib = E ? Symbol.for("react.suspense_list") : 60120, jb = E ? Symbol.for("react.memo") : 60115, kb = E ? Symbol.for("react.lazy") : 60116, lb = E ? Symbol.for("react.block") : 60121, mb = typeof Symbol === "function" && Symbol.iterator;
function nb(a) {
  if (a === null || typeof a !== "object")
    return null;
  a = mb && a[mb] || a["@@iterator"];
  return typeof a === "function" ? a : null;
}
function ob(a) {
  if (a._status === -1) {
    a._status = 0;
    var b = a._ctor;
    b = b();
    a._result = b;
    b.then(function(b2) {
      a._status === 0 && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      a._status === 0 && (a._status = 2, a._result = b2);
    });
  }
}
function pb(a) {
  if (a == null)
    return null;
  if (typeof a === "function")
    return a.displayName || a.name || null;
  if (typeof a === "string")
    return a;
  switch (a) {
    case ab:
      return "Fragment";
    case $a:
      return "Portal";
    case cb:
      return "Profiler";
    case bb:
      return "StrictMode";
    case hb:
      return "Suspense";
    case ib:
      return "SuspenseList";
  }
  if (typeof a === "object")
    switch (a.$$typeof) {
      case eb:
        return "Context.Consumer";
      case db:
        return "Context.Provider";
      case gb:
        var b = a.render;
        b = b.displayName || b.name || "";
        return a.displayName || (b !== "" ? "ForwardRef(" + b + ")" : "ForwardRef");
      case jb:
        return pb(a.type);
      case lb:
        return pb(a.render);
      case kb:
        if (a = a._status === 1 ? a._result : null)
          return pb(a);
    }
  return null;
}
function qb(a) {
  var b = "";
  do {
    a:
      switch (a.tag) {
        case 3:
        case 4:
        case 6:
        case 7:
        case 10:
        case 9:
          var c2 = "";
          break a;
        default:
          var d = a._debugOwner, e = a._debugSource, f = pb(a.type);
          c2 = null;
          d && (c2 = pb(d.type));
          d = f;
          f = "";
          e ? f = " (at " + e.fileName.replace(Ya, "") + ":" + e.lineNumber + ")" : c2 && (f = " (created by " + c2 + ")");
          c2 = "\n    in " + (d || "Unknown") + f;
      }
    b += c2;
    a = a.return;
  } while (a);
  return b;
}
function rb(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "object":
    case "string":
    case "undefined":
      return a;
    default:
      return "";
  }
}
function sb(a) {
  var b = a.type;
  return (a = a.nodeName) && a.toLowerCase() === "input" && (b === "checkbox" || b === "radio");
}
function tb(a) {
  var b = sb(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && typeof c2 !== "undefined" && typeof c2.get === "function" && typeof c2.set === "function") {
    var e = c2.get, f = c2.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function xb(a) {
  a._valueTracker || (a._valueTracker = tb(a));
}
function yb(a) {
  if (!a)
    return false;
  var b = a._valueTracker;
  if (!b)
    return true;
  var c2 = b.getValue();
  var d = "";
  a && (d = sb(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c2 ? (b.setValue(a), true) : false;
}
function zb(a, b) {
  var c2 = b.checked;
  return n({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: c2 != null ? c2 : a._wrapperState.initialChecked });
}
function Ab(a, b) {
  var c2 = b.defaultValue == null ? "" : b.defaultValue, d = b.checked != null ? b.checked : b.defaultChecked;
  c2 = rb(b.value != null ? b.value : c2);
  a._wrapperState = { initialChecked: d, initialValue: c2, controlled: b.type === "checkbox" || b.type === "radio" ? b.checked != null : b.value != null };
}
function Bb(a, b) {
  b = b.checked;
  b != null && Xa(a, "checked", b, false);
}
function Cb(a, b) {
  Bb(a, b);
  var c2 = rb(b.value), d = b.type;
  if (c2 != null)
    if (d === "number") {
      if (c2 === 0 && a.value === "" || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if (d === "submit" || d === "reset") {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? Db(a, b.type, c2) : b.hasOwnProperty("defaultValue") && Db(a, b.type, rb(b.defaultValue));
  b.checked == null && b.defaultChecked != null && (a.defaultChecked = !!b.defaultChecked);
}
function Eb(a, b, c2) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!(d !== "submit" && d !== "reset" || b.value !== void 0 && b.value !== null))
      return;
    b = "" + a._wrapperState.initialValue;
    c2 || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c2 = a.name;
  c2 !== "" && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  c2 !== "" && (a.name = c2);
}
function Db(a, b, c2) {
  if (b !== "number" || a.ownerDocument.activeElement !== a)
    c2 == null ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
function Fb(a) {
  var b = "";
  aa.Children.forEach(a, function(a2) {
    a2 != null && (b += a2);
  });
  return b;
}
function Gb(a, b) {
  a = n({ children: void 0 }, b);
  if (b = Fb(b.children))
    a.children = b;
  return a;
}
function Hb(a, b, c2, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c2.length; e++)
      b["$" + c2[e]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e = b.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e && (a[c2].selected = e), e && d && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + rb(c2);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c2) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      b !== null || a[e].disabled || (b = a[e]);
    }
    b !== null && (b.selected = true);
  }
}
function Ib(a, b) {
  if (b.dangerouslySetInnerHTML != null)
    throw Error(u(91));
  return n({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function Jb(a, b) {
  var c2 = b.value;
  if (c2 == null) {
    c2 = b.children;
    b = b.defaultValue;
    if (c2 != null) {
      if (b != null)
        throw Error(u(92));
      if (Array.isArray(c2)) {
        if (!(1 >= c2.length))
          throw Error(u(93));
        c2 = c2[0];
      }
      b = c2;
    }
    b == null && (b = "");
    c2 = b;
  }
  a._wrapperState = { initialValue: rb(c2) };
}
function Kb(a, b) {
  var c2 = rb(b.value), d = rb(b.defaultValue);
  c2 != null && (c2 = "" + c2, c2 !== a.value && (a.value = c2), b.defaultValue == null && a.defaultValue !== c2 && (a.defaultValue = c2));
  d != null && (a.defaultValue = "" + d);
}
function Lb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && b !== "" && b !== null && (a.value = b);
}
var Mb = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
function Nb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ob(a, b) {
  return a == null || a === "http://www.w3.org/1999/xhtml" ? Nb(b) : a === "http://www.w3.org/2000/svg" && b === "foreignObject" ? "http://www.w3.org/1999/xhtml" : a;
}
var Pb, Qb = function(a) {
  return typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction ? function(b, c2, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c2, d, e);
    });
  } : a;
}(function(a, b) {
  if (a.namespaceURI !== Mb.svg || "innerHTML" in a)
    a.innerHTML = b;
  else {
    Pb = Pb || document.createElement("div");
    Pb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = Pb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b.firstChild; )
      a.appendChild(b.firstChild);
  }
});
function Rb(a, b) {
  if (b) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && c2.nodeType === 3) {
      c2.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
function Sb(a, b) {
  var c2 = {};
  c2[a.toLowerCase()] = b.toLowerCase();
  c2["Webkit" + a] = "webkit" + b;
  c2["Moz" + a] = "moz" + b;
  return c2;
}
var Tb = { animationend: Sb("Animation", "AnimationEnd"), animationiteration: Sb("Animation", "AnimationIteration"), animationstart: Sb("Animation", "AnimationStart"), transitionend: Sb("Transition", "TransitionEnd") }, Ub = {}, Vb = {};
ya && (Vb = document.createElement("div").style, "AnimationEvent" in window || (delete Tb.animationend.animation, delete Tb.animationiteration.animation, delete Tb.animationstart.animation), "TransitionEvent" in window || delete Tb.transitionend.transition);
function Wb(a) {
  if (Ub[a])
    return Ub[a];
  if (!Tb[a])
    return a;
  var b = Tb[a], c2;
  for (c2 in b)
    if (b.hasOwnProperty(c2) && c2 in Vb)
      return Ub[a] = b[c2];
  return a;
}
var Xb = Wb("animationend"), Yb = Wb("animationiteration"), Zb = Wb("animationstart"), $b = Wb("transitionend"), ac = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), bc = new (typeof WeakMap === "function" ? WeakMap : Map)();
function cc(a) {
  var b = bc.get(a);
  b === void 0 && (b = new Map(), bc.set(a, b));
  return b;
}
function dc(a) {
  var b = a, c2 = a;
  if (a.alternate)
    for (; b.return; )
      b = b.return;
  else {
    a = b;
    do
      b = a, (b.effectTag & 1026) !== 0 && (c2 = b.return), a = b.return;
    while (a);
  }
  return b.tag === 3 ? c2 : null;
}
function ec(a) {
  if (a.tag === 13) {
    var b = a.memoizedState;
    b === null && (a = a.alternate, a !== null && (b = a.memoizedState));
    if (b !== null)
      return b.dehydrated;
  }
  return null;
}
function fc(a) {
  if (dc(a) !== a)
    throw Error(u(188));
}
function gc(a) {
  var b = a.alternate;
  if (!b) {
    b = dc(a);
    if (b === null)
      throw Error(u(188));
    return b !== a ? null : a;
  }
  for (var c2 = a, d = b; ; ) {
    var e = c2.return;
    if (e === null)
      break;
    var f = e.alternate;
    if (f === null) {
      d = e.return;
      if (d !== null) {
        c2 = d;
        continue;
      }
      break;
    }
    if (e.child === f.child) {
      for (f = e.child; f; ) {
        if (f === c2)
          return fc(e), a;
        if (f === d)
          return fc(e), b;
        f = f.sibling;
      }
      throw Error(u(188));
    }
    if (c2.return !== d.return)
      c2 = e, d = f;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c2) {
          g = true;
          c2 = e;
          d = f;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c2 = f;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f.child; h; ) {
          if (h === c2) {
            g = true;
            c2 = f;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f;
            c2 = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(u(189));
      }
    }
    if (c2.alternate !== d)
      throw Error(u(190));
  }
  if (c2.tag !== 3)
    throw Error(u(188));
  return c2.stateNode.current === c2 ? a : b;
}
function hc(a) {
  a = gc(a);
  if (!a)
    return null;
  for (var b = a; ; ) {
    if (b.tag === 5 || b.tag === 6)
      return b;
    if (b.child)
      b.child.return = b, b = b.child;
    else {
      if (b === a)
        break;
      for (; !b.sibling; ) {
        if (!b.return || b.return === a)
          return null;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return null;
}
function ic(a, b) {
  if (b == null)
    throw Error(u(30));
  if (a == null)
    return b;
  if (Array.isArray(a)) {
    if (Array.isArray(b))
      return a.push.apply(a, b), a;
    a.push(b);
    return a;
  }
  return Array.isArray(b) ? [a].concat(b) : [a, b];
}
function jc(a, b, c2) {
  Array.isArray(a) ? a.forEach(b, c2) : a && b.call(c2, a);
}
var kc = null;
function lc(a) {
  if (a) {
    var b = a._dispatchListeners, c2 = a._dispatchInstances;
    if (Array.isArray(b))
      for (var d = 0; d < b.length && !a.isPropagationStopped(); d++)
        oa(a, b[d], c2[d]);
    else
      b && oa(a, b, c2);
    a._dispatchListeners = null;
    a._dispatchInstances = null;
    a.isPersistent() || a.constructor.release(a);
  }
}
function mc(a) {
  a !== null && (kc = ic(kc, a));
  a = kc;
  kc = null;
  if (a) {
    jc(a, lc);
    if (kc)
      throw Error(u(95));
    if (fa)
      throw a = ha, fa = false, ha = null, a;
  }
}
function nc(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return a.nodeType === 3 ? a.parentNode : a;
}
function oc(a) {
  if (!ya)
    return false;
  a = "on" + a;
  var b = a in document;
  b || (b = document.createElement("div"), b.setAttribute(a, "return;"), b = typeof b[a] === "function");
  return b;
}
var pc = [];
function qc(a) {
  a.topLevelType = null;
  a.nativeEvent = null;
  a.targetInst = null;
  a.ancestors.length = 0;
  10 > pc.length && pc.push(a);
}
function rc(a, b, c2, d) {
  if (pc.length) {
    var e = pc.pop();
    e.topLevelType = a;
    e.eventSystemFlags = d;
    e.nativeEvent = b;
    e.targetInst = c2;
    return e;
  }
  return { topLevelType: a, eventSystemFlags: d, nativeEvent: b, targetInst: c2, ancestors: [] };
}
function sc(a) {
  var b = a.targetInst, c2 = b;
  do {
    if (!c2) {
      a.ancestors.push(c2);
      break;
    }
    var d = c2;
    if (d.tag === 3)
      d = d.stateNode.containerInfo;
    else {
      for (; d.return; )
        d = d.return;
      d = d.tag !== 3 ? null : d.stateNode.containerInfo;
    }
    if (!d)
      break;
    b = c2.tag;
    b !== 5 && b !== 6 || a.ancestors.push(c2);
    c2 = tc(d);
  } while (c2);
  for (c2 = 0; c2 < a.ancestors.length; c2++) {
    b = a.ancestors[c2];
    var e = nc(a.nativeEvent);
    d = a.topLevelType;
    var f = a.nativeEvent, g = a.eventSystemFlags;
    c2 === 0 && (g |= 64);
    for (var h = null, k = 0; k < sa.length; k++) {
      var l2 = sa[k];
      l2 && (l2 = l2.extractEvents(d, b, f, e, g)) && (h = ic(h, l2));
    }
    mc(h);
  }
}
function uc(a, b, c2) {
  if (!c2.has(a)) {
    switch (a) {
      case "scroll":
        vc(b, "scroll", true);
        break;
      case "focus":
      case "blur":
        vc(b, "focus", true);
        vc(b, "blur", true);
        c2.set("blur", null);
        c2.set("focus", null);
        break;
      case "cancel":
      case "close":
        oc(a) && vc(b, a, true);
        break;
      case "invalid":
      case "submit":
      case "reset":
        break;
      default:
        ac.indexOf(a) === -1 && F(a, b);
    }
    c2.set(a, null);
  }
}
var wc, xc, yc, zc = false, Ac = [], Bc = null, Cc = null, Dc = null, Ec = new Map(), Fc = new Map(), Gc = [], Hc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "), Ic = "focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a, b) {
  var c2 = cc(b);
  Hc.forEach(function(a2) {
    uc(a2, b, c2);
  });
  Ic.forEach(function(a2) {
    uc(a2, b, c2);
  });
}
function Kc(a, b, c2, d, e) {
  return { blockedOn: a, topLevelType: b, eventSystemFlags: c2 | 32, nativeEvent: e, container: d };
}
function Lc(a, b) {
  switch (a) {
    case "focus":
    case "blur":
      Bc = null;
      break;
    case "dragenter":
    case "dragleave":
      Cc = null;
      break;
    case "mouseover":
    case "mouseout":
      Dc = null;
      break;
    case "pointerover":
    case "pointerout":
      Ec.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fc.delete(b.pointerId);
  }
}
function Mc(a, b, c2, d, e, f) {
  if (a === null || a.nativeEvent !== f)
    return a = Kc(b, c2, d, e, f), b !== null && (b = Nc(b), b !== null && xc(b)), a;
  a.eventSystemFlags |= d;
  return a;
}
function Oc(a, b, c2, d, e) {
  switch (b) {
    case "focus":
      return Bc = Mc(Bc, a, b, c2, d, e), true;
    case "dragenter":
      return Cc = Mc(Cc, a, b, c2, d, e), true;
    case "mouseover":
      return Dc = Mc(Dc, a, b, c2, d, e), true;
    case "pointerover":
      var f = e.pointerId;
      Ec.set(f, Mc(Ec.get(f) || null, a, b, c2, d, e));
      return true;
    case "gotpointercapture":
      return f = e.pointerId, Fc.set(f, Mc(Fc.get(f) || null, a, b, c2, d, e)), true;
  }
  return false;
}
function Pc(a) {
  var b = tc(a.target);
  if (b !== null) {
    var c2 = dc(b);
    if (c2 !== null) {
      if (b = c2.tag, b === 13) {
        if (b = ec(c2), b !== null) {
          a.blockedOn = b;
          r.unstable_runWithPriority(a.priority, function() {
            yc(c2);
          });
          return;
        }
      } else if (b === 3 && c2.stateNode.hydrate) {
        a.blockedOn = c2.tag === 3 ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Qc(a) {
  if (a.blockedOn !== null)
    return false;
  var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
  if (b !== null) {
    var c2 = Nc(b);
    c2 !== null && xc(c2);
    a.blockedOn = b;
    return false;
  }
  return true;
}
function Sc(a, b, c2) {
  Qc(a) && c2.delete(b);
}
function Tc() {
  for (zc = false; 0 < Ac.length; ) {
    var a = Ac[0];
    if (a.blockedOn !== null) {
      a = Nc(a.blockedOn);
      a !== null && wc(a);
      break;
    }
    var b = Rc(a.topLevelType, a.eventSystemFlags, a.container, a.nativeEvent);
    b !== null ? a.blockedOn = b : Ac.shift();
  }
  Bc !== null && Qc(Bc) && (Bc = null);
  Cc !== null && Qc(Cc) && (Cc = null);
  Dc !== null && Qc(Dc) && (Dc = null);
  Ec.forEach(Sc);
  Fc.forEach(Sc);
}
function Uc(a, b) {
  a.blockedOn === b && (a.blockedOn = null, zc || (zc = true, r.unstable_scheduleCallback(r.unstable_NormalPriority, Tc)));
}
function Vc(a) {
  function b(b2) {
    return Uc(b2, a);
  }
  if (0 < Ac.length) {
    Uc(Ac[0], a);
    for (var c2 = 1; c2 < Ac.length; c2++) {
      var d = Ac[c2];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  Bc !== null && Uc(Bc, a);
  Cc !== null && Uc(Cc, a);
  Dc !== null && Uc(Dc, a);
  Ec.forEach(b);
  Fc.forEach(b);
  for (c2 = 0; c2 < Gc.length; c2++)
    d = Gc[c2], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Gc.length && (c2 = Gc[0], c2.blockedOn === null); )
    Pc(c2), c2.blockedOn === null && Gc.shift();
}
var Wc = {}, Yc = new Map(), Zc = new Map(), $c = [
  "abort",
  "abort",
  Xb,
  "animationEnd",
  Yb,
  "animationIteration",
  Zb,
  "animationStart",
  "canplay",
  "canPlay",
  "canplaythrough",
  "canPlayThrough",
  "durationchange",
  "durationChange",
  "emptied",
  "emptied",
  "encrypted",
  "encrypted",
  "ended",
  "ended",
  "error",
  "error",
  "gotpointercapture",
  "gotPointerCapture",
  "load",
  "load",
  "loadeddata",
  "loadedData",
  "loadedmetadata",
  "loadedMetadata",
  "loadstart",
  "loadStart",
  "lostpointercapture",
  "lostPointerCapture",
  "playing",
  "playing",
  "progress",
  "progress",
  "seeking",
  "seeking",
  "stalled",
  "stalled",
  "suspend",
  "suspend",
  "timeupdate",
  "timeUpdate",
  $b,
  "transitionEnd",
  "waiting",
  "waiting"
];
function ad(a, b) {
  for (var c2 = 0; c2 < a.length; c2 += 2) {
    var d = a[c2], e = a[c2 + 1], f = "on" + (e[0].toUpperCase() + e.slice(1));
    f = { phasedRegistrationNames: { bubbled: f, captured: f + "Capture" }, dependencies: [d], eventPriority: b };
    Zc.set(d, b);
    Yc.set(d, f);
    Wc[e] = f;
  }
}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1);
ad($c, 2);
for (var bd = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), cd = 0; cd < bd.length; cd++)
  Zc.set(bd[cd], 0);
var dd = r.unstable_UserBlockingPriority, ed = r.unstable_runWithPriority, fd = true;
function F(a, b) {
  vc(b, a, false);
}
function vc(a, b, c2) {
  var d = Zc.get(b);
  switch (d === void 0 ? 2 : d) {
    case 0:
      d = gd.bind(null, b, 1, a);
      break;
    case 1:
      d = hd.bind(null, b, 1, a);
      break;
    default:
      d = id.bind(null, b, 1, a);
  }
  c2 ? a.addEventListener(b, d, true) : a.addEventListener(b, d, false);
}
function gd(a, b, c2, d) {
  Ja || Ha();
  var e = id, f = Ja;
  Ja = true;
  try {
    Ga(e, a, b, c2, d);
  } finally {
    (Ja = f) || La();
  }
}
function hd(a, b, c2, d) {
  ed(dd, id.bind(null, a, b, c2, d));
}
function id(a, b, c2, d) {
  if (fd)
    if (0 < Ac.length && -1 < Hc.indexOf(a))
      a = Kc(null, a, b, c2, d), Ac.push(a);
    else {
      var e = Rc(a, b, c2, d);
      if (e === null)
        Lc(a, d);
      else if (-1 < Hc.indexOf(a))
        a = Kc(e, a, b, c2, d), Ac.push(a);
      else if (!Oc(e, a, b, c2, d)) {
        Lc(a, d);
        a = rc(a, d, null, b);
        try {
          Ma(sc, a);
        } finally {
          qc(a);
        }
      }
    }
}
function Rc(a, b, c2, d) {
  c2 = nc(d);
  c2 = tc(c2);
  if (c2 !== null) {
    var e = dc(c2);
    if (e === null)
      c2 = null;
    else {
      var f = e.tag;
      if (f === 13) {
        c2 = ec(e);
        if (c2 !== null)
          return c2;
        c2 = null;
      } else if (f === 3) {
        if (e.stateNode.hydrate)
          return e.tag === 3 ? e.stateNode.containerInfo : null;
        c2 = null;
      } else
        e !== c2 && (c2 = null);
    }
  }
  a = rc(a, d, c2, b);
  try {
    Ma(sc, a);
  } finally {
    qc(a);
  }
  return null;
}
var jd = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, kd = ["Webkit", "ms", "Moz", "O"];
Object.keys(jd).forEach(function(a) {
  kd.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    jd[b] = jd[a];
  });
});
function ld(a, b, c2) {
  return b == null || typeof b === "boolean" || b === "" ? "" : c2 || typeof b !== "number" || b === 0 || jd.hasOwnProperty(a) && jd[a] ? ("" + b).trim() : b + "px";
}
function md(a, b) {
  a = a.style;
  for (var c2 in b)
    if (b.hasOwnProperty(c2)) {
      var d = c2.indexOf("--") === 0, e = ld(c2, b[c2], d);
      c2 === "float" && (c2 = "cssFloat");
      d ? a.setProperty(c2, e) : a[c2] = e;
    }
}
var nd = n({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function od(a, b) {
  if (b) {
    if (nd[a] && (b.children != null || b.dangerouslySetInnerHTML != null))
      throw Error(u(137, a, ""));
    if (b.dangerouslySetInnerHTML != null) {
      if (b.children != null)
        throw Error(u(60));
      if (!(typeof b.dangerouslySetInnerHTML === "object" && "__html" in b.dangerouslySetInnerHTML))
        throw Error(u(61));
    }
    if (b.style != null && typeof b.style !== "object")
      throw Error(u(62, ""));
  }
}
function pd(a, b) {
  if (a.indexOf("-") === -1)
    return typeof b.is === "string";
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var qd = Mb.html;
function rd(a, b) {
  a = a.nodeType === 9 || a.nodeType === 11 ? a : a.ownerDocument;
  var c2 = cc(a);
  b = wa[b];
  for (var d = 0; d < b.length; d++)
    uc(b[d], a, c2);
}
function sd() {
}
function td(a) {
  a = a || (typeof document !== "undefined" ? document : void 0);
  if (typeof a === "undefined")
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function ud(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function vd(a, b) {
  var c2 = ud(a);
  a = 0;
  for (var d; c2; ) {
    if (c2.nodeType === 3) {
      d = a + c2.textContent.length;
      if (a <= b && d >= b)
        return { node: c2, offset: b - a };
      a = d;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = ud(c2);
  }
}
function wd(a, b) {
  return a && b ? a === b ? true : a && a.nodeType === 3 ? false : b && b.nodeType === 3 ? wd(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function xd() {
  for (var a = window, b = td(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = typeof b.contentWindow.location.href === "string";
    } catch (d) {
      c2 = false;
    }
    if (c2)
      a = b.contentWindow;
    else
      break;
    b = td(a.document);
  }
  return b;
}
function yd(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && (b === "input" && (a.type === "text" || a.type === "search" || a.type === "tel" || a.type === "url" || a.type === "password") || b === "textarea" || a.contentEditable === "true");
}
var zd = "$", Ad = "/$", Bd = "$?", Cd = "$!", Dd = null, Ed = null;
function Fd(a, b) {
  switch (a) {
    case "button":
    case "input":
    case "select":
    case "textarea":
      return !!b.autoFocus;
  }
  return false;
}
function Gd(a, b) {
  return a === "textarea" || a === "option" || a === "noscript" || typeof b.children === "string" || typeof b.children === "number" || typeof b.dangerouslySetInnerHTML === "object" && b.dangerouslySetInnerHTML !== null && b.dangerouslySetInnerHTML.__html != null;
}
var Hd = typeof setTimeout === "function" ? setTimeout : void 0, Id = typeof clearTimeout === "function" ? clearTimeout : void 0;
function Jd(a) {
  for (; a != null; a = a.nextSibling) {
    var b = a.nodeType;
    if (b === 1 || b === 3)
      break;
  }
  return a;
}
function Kd(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (a.nodeType === 8) {
      var c2 = a.data;
      if (c2 === zd || c2 === Cd || c2 === Bd) {
        if (b === 0)
          return a;
        b--;
      } else
        c2 === Ad && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Ld = Math.random().toString(36).slice(2), Md = "__reactInternalInstance$" + Ld, Nd = "__reactEventHandlers$" + Ld, Od = "__reactContainere$" + Ld;
function tc(a) {
  var b = a[Md];
  if (b)
    return b;
  for (var c2 = a.parentNode; c2; ) {
    if (b = c2[Od] || c2[Md]) {
      c2 = b.alternate;
      if (b.child !== null || c2 !== null && c2.child !== null)
        for (a = Kd(a); a !== null; ) {
          if (c2 = a[Md])
            return c2;
          a = Kd(a);
        }
      return b;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Nc(a) {
  a = a[Md] || a[Od];
  return !a || a.tag !== 5 && a.tag !== 6 && a.tag !== 13 && a.tag !== 3 ? null : a;
}
function Pd(a) {
  if (a.tag === 5 || a.tag === 6)
    return a.stateNode;
  throw Error(u(33));
}
function Qd(a) {
  return a[Nd] || null;
}
function Rd(a) {
  do
    a = a.return;
  while (a && a.tag !== 5);
  return a ? a : null;
}
function Sd(a, b) {
  var c2 = a.stateNode;
  if (!c2)
    return null;
  var d = la(c2);
  if (!d)
    return null;
  c2 = d[b];
  a:
    switch (b) {
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
        (d = !d.disabled) || (a = a.type, d = !(a === "button" || a === "input" || a === "select" || a === "textarea"));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && typeof c2 !== "function")
    throw Error(u(231, b, typeof c2));
  return c2;
}
function Td(a, b, c2) {
  if (b = Sd(a, c2.dispatchConfig.phasedRegistrationNames[b]))
    c2._dispatchListeners = ic(c2._dispatchListeners, b), c2._dispatchInstances = ic(c2._dispatchInstances, a);
}
function Ud(a) {
  if (a && a.dispatchConfig.phasedRegistrationNames) {
    for (var b = a._targetInst, c2 = []; b; )
      c2.push(b), b = Rd(b);
    for (b = c2.length; 0 < b--; )
      Td(c2[b], "captured", a);
    for (b = 0; b < c2.length; b++)
      Td(c2[b], "bubbled", a);
  }
}
function Vd(a, b, c2) {
  a && c2 && c2.dispatchConfig.registrationName && (b = Sd(a, c2.dispatchConfig.registrationName)) && (c2._dispatchListeners = ic(c2._dispatchListeners, b), c2._dispatchInstances = ic(c2._dispatchInstances, a));
}
function Wd(a) {
  a && a.dispatchConfig.registrationName && Vd(a._targetInst, null, a);
}
function Xd(a) {
  jc(a, Ud);
}
var Yd = null, Zd = null, $d = null;
function ae() {
  if ($d)
    return $d;
  var a, b = Zd, c2 = b.length, d, e = "value" in Yd ? Yd.value : Yd.textContent, f = e.length;
  for (a = 0; a < c2 && b[a] === e[a]; a++)
    ;
  var g = c2 - a;
  for (d = 1; d <= g && b[c2 - d] === e[f - d]; d++)
    ;
  return $d = e.slice(a, 1 < d ? 1 - d : void 0);
}
function be() {
  return true;
}
function ce() {
  return false;
}
function G(a, b, c2, d) {
  this.dispatchConfig = a;
  this._targetInst = b;
  this.nativeEvent = c2;
  a = this.constructor.Interface;
  for (var e in a)
    a.hasOwnProperty(e) && ((b = a[e]) ? this[e] = b(c2) : e === "target" ? this.target = d : this[e] = c2[e]);
  this.isDefaultPrevented = (c2.defaultPrevented != null ? c2.defaultPrevented : c2.returnValue === false) ? be : ce;
  this.isPropagationStopped = ce;
  return this;
}
n(G.prototype, { preventDefault: function() {
  this.defaultPrevented = true;
  var a = this.nativeEvent;
  a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue !== "unknown" && (a.returnValue = false), this.isDefaultPrevented = be);
}, stopPropagation: function() {
  var a = this.nativeEvent;
  a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble !== "unknown" && (a.cancelBubble = true), this.isPropagationStopped = be);
}, persist: function() {
  this.isPersistent = be;
}, isPersistent: ce, destructor: function() {
  var a = this.constructor.Interface, b;
  for (b in a)
    this[b] = null;
  this.nativeEvent = this._targetInst = this.dispatchConfig = null;
  this.isPropagationStopped = this.isDefaultPrevented = ce;
  this._dispatchInstances = this._dispatchListeners = null;
} });
G.Interface = { type: null, target: null, currentTarget: function() {
  return null;
}, eventPhase: null, bubbles: null, cancelable: null, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: null, isTrusted: null };
G.extend = function(a) {
  function b() {
  }
  function c2() {
    return d.apply(this, arguments);
  }
  var d = this;
  b.prototype = d.prototype;
  var e = new b();
  n(e, c2.prototype);
  c2.prototype = e;
  c2.prototype.constructor = c2;
  c2.Interface = n({}, d.Interface, a);
  c2.extend = d.extend;
  de(c2);
  return c2;
};
de(G);
function ee(a, b, c2, d) {
  if (this.eventPool.length) {
    var e = this.eventPool.pop();
    this.call(e, a, b, c2, d);
    return e;
  }
  return new this(a, b, c2, d);
}
function fe(a) {
  if (!(a instanceof this))
    throw Error(u(279));
  a.destructor();
  10 > this.eventPool.length && this.eventPool.push(a);
}
function de(a) {
  a.eventPool = [];
  a.getPooled = ee;
  a.release = fe;
}
var ge = G.extend({ data: null }), he = G.extend({ data: null }), ie = [9, 13, 27, 32], je = ya && "CompositionEvent" in window, ke = null;
ya && "documentMode" in document && (ke = document.documentMode);
var le = ya && "TextEvent" in window && !ke, me = ya && (!je || ke && 8 < ke && 11 >= ke), ne = String.fromCharCode(32), oe = { beforeInput: { phasedRegistrationNames: { bubbled: "onBeforeInput", captured: "onBeforeInputCapture" }, dependencies: ["compositionend", "keypress", "textInput", "paste"] }, compositionEnd: { phasedRegistrationNames: { bubbled: "onCompositionEnd", captured: "onCompositionEndCapture" }, dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ") }, compositionStart: { phasedRegistrationNames: {
  bubbled: "onCompositionStart",
  captured: "onCompositionStartCapture"
}, dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ") }, compositionUpdate: { phasedRegistrationNames: { bubbled: "onCompositionUpdate", captured: "onCompositionUpdateCapture" }, dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ") } }, pe = false;
function qe(a, b) {
  switch (a) {
    case "keyup":
      return ie.indexOf(b.keyCode) !== -1;
    case "keydown":
      return b.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "blur":
      return true;
    default:
      return false;
  }
}
function re(a) {
  a = a.detail;
  return typeof a === "object" && "data" in a ? a.data : null;
}
var se = false;
function te(a, b) {
  switch (a) {
    case "compositionend":
      return re(b);
    case "keypress":
      if (b.which !== 32)
        return null;
      pe = true;
      return ne;
    case "textInput":
      return a = b.data, a === ne && pe ? null : a;
    default:
      return null;
  }
}
function ue(a, b) {
  if (se)
    return a === "compositionend" || !je && qe(a, b) ? (a = ae(), $d = Zd = Yd = null, se = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length)
          return b.char;
        if (b.which)
          return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return me && b.locale !== "ko" ? null : b.data;
    default:
      return null;
  }
}
var ve = { eventTypes: oe, extractEvents: function(a, b, c2, d) {
  var e;
  if (je)
    b: {
      switch (a) {
        case "compositionstart":
          var f = oe.compositionStart;
          break b;
        case "compositionend":
          f = oe.compositionEnd;
          break b;
        case "compositionupdate":
          f = oe.compositionUpdate;
          break b;
      }
      f = void 0;
    }
  else
    se ? qe(a, c2) && (f = oe.compositionEnd) : a === "keydown" && c2.keyCode === 229 && (f = oe.compositionStart);
  f ? (me && c2.locale !== "ko" && (se || f !== oe.compositionStart ? f === oe.compositionEnd && se && (e = ae()) : (Yd = d, Zd = "value" in Yd ? Yd.value : Yd.textContent, se = true)), f = ge.getPooled(f, b, c2, d), e ? f.data = e : (e = re(c2), e !== null && (f.data = e)), Xd(f), e = f) : e = null;
  (a = le ? te(a, c2) : ue(a, c2)) ? (b = he.getPooled(oe.beforeInput, b, c2, d), b.data = a, Xd(b)) : b = null;
  return e === null ? b : b === null ? e : [e, b];
} }, we = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function xe(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b === "input" ? !!we[a.type] : b === "textarea" ? true : false;
}
var ye = { change: { phasedRegistrationNames: { bubbled: "onChange", captured: "onChangeCapture" }, dependencies: "blur change click focus input keydown keyup selectionchange".split(" ") } };
function ze(a, b, c2) {
  a = G.getPooled(ye.change, a, b, c2);
  a.type = "change";
  Da(c2);
  Xd(a);
  return a;
}
var Ae = null, Be = null;
function Ce(a) {
  mc(a);
}
function De(a) {
  var b = Pd(a);
  if (yb(b))
    return a;
}
function Ee(a, b) {
  if (a === "change")
    return b;
}
var Fe = false;
ya && (Fe = oc("input") && (!document.documentMode || 9 < document.documentMode));
function Ge() {
  Ae && (Ae.detachEvent("onpropertychange", He), Be = Ae = null);
}
function He(a) {
  if (a.propertyName === "value" && De(Be))
    if (a = ze(Be, a, nc(a)), Ja)
      mc(a);
    else {
      Ja = true;
      try {
        Fa(Ce, a);
      } finally {
        Ja = false, La();
      }
    }
}
function Ie(a, b, c2) {
  a === "focus" ? (Ge(), Ae = b, Be = c2, Ae.attachEvent("onpropertychange", He)) : a === "blur" && Ge();
}
function Je(a) {
  if (a === "selectionchange" || a === "keyup" || a === "keydown")
    return De(Be);
}
function Ke(a, b) {
  if (a === "click")
    return De(b);
}
function Le(a, b) {
  if (a === "input" || a === "change")
    return De(b);
}
var Me = { eventTypes: ye, _isInputEventSupported: Fe, extractEvents: function(a, b, c2, d) {
  var e = b ? Pd(b) : window, f = e.nodeName && e.nodeName.toLowerCase();
  if (f === "select" || f === "input" && e.type === "file")
    var g = Ee;
  else if (xe(e))
    if (Fe)
      g = Le;
    else {
      g = Je;
      var h = Ie;
    }
  else
    (f = e.nodeName) && f.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio") && (g = Ke);
  if (g && (g = g(a, b)))
    return ze(g, c2, d);
  h && h(a, e, b);
  a === "blur" && (a = e._wrapperState) && a.controlled && e.type === "number" && Db(e, "number", e.value);
} }, Ne = G.extend({ view: null, detail: null }), Oe = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pe(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Oe[a]) ? !!b[a] : false;
}
function Qe() {
  return Pe;
}
var Re = 0, Se = 0, Te = false, Ue = false, Ve = Ne.extend({ screenX: null, screenY: null, clientX: null, clientY: null, pageX: null, pageY: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, getModifierState: Qe, button: null, buttons: null, relatedTarget: function(a) {
  return a.relatedTarget || (a.fromElement === a.srcElement ? a.toElement : a.fromElement);
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  var b = Re;
  Re = a.screenX;
  return Te ? a.type === "mousemove" ? a.screenX - b : 0 : (Te = true, 0);
}, movementY: function(a) {
  if ("movementY" in a)
    return a.movementY;
  var b = Se;
  Se = a.screenY;
  return Ue ? a.type === "mousemove" ? a.screenY - b : 0 : (Ue = true, 0);
} }), We = Ve.extend({ pointerId: null, width: null, height: null, pressure: null, tangentialPressure: null, tiltX: null, tiltY: null, twist: null, pointerType: null, isPrimary: null }), Xe = { mouseEnter: { registrationName: "onMouseEnter", dependencies: ["mouseout", "mouseover"] }, mouseLeave: { registrationName: "onMouseLeave", dependencies: ["mouseout", "mouseover"] }, pointerEnter: { registrationName: "onPointerEnter", dependencies: ["pointerout", "pointerover"] }, pointerLeave: {
  registrationName: "onPointerLeave",
  dependencies: ["pointerout", "pointerover"]
} }, Ye = { eventTypes: Xe, extractEvents: function(a, b, c2, d, e) {
  var f = a === "mouseover" || a === "pointerover", g = a === "mouseout" || a === "pointerout";
  if (f && (e & 32) === 0 && (c2.relatedTarget || c2.fromElement) || !g && !f)
    return null;
  f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window;
  if (g) {
    if (g = b, b = (b = c2.relatedTarget || c2.toElement) ? tc(b) : null, b !== null) {
      var h = dc(b);
      if (b !== h || b.tag !== 5 && b.tag !== 6)
        b = null;
    }
  } else
    g = null;
  if (g === b)
    return null;
  if (a === "mouseout" || a === "mouseover") {
    var k = Ve;
    var l2 = Xe.mouseLeave;
    var m = Xe.mouseEnter;
    var p2 = "mouse";
  } else if (a === "pointerout" || a === "pointerover")
    k = We, l2 = Xe.pointerLeave, m = Xe.pointerEnter, p2 = "pointer";
  a = g == null ? f : Pd(g);
  f = b == null ? f : Pd(b);
  l2 = k.getPooled(l2, g, c2, d);
  l2.type = p2 + "leave";
  l2.target = a;
  l2.relatedTarget = f;
  c2 = k.getPooled(m, b, c2, d);
  c2.type = p2 + "enter";
  c2.target = f;
  c2.relatedTarget = a;
  d = g;
  p2 = b;
  if (d && p2)
    a: {
      k = d;
      m = p2;
      g = 0;
      for (a = k; a; a = Rd(a))
        g++;
      a = 0;
      for (b = m; b; b = Rd(b))
        a++;
      for (; 0 < g - a; )
        k = Rd(k), g--;
      for (; 0 < a - g; )
        m = Rd(m), a--;
      for (; g--; ) {
        if (k === m || k === m.alternate)
          break a;
        k = Rd(k);
        m = Rd(m);
      }
      k = null;
    }
  else
    k = null;
  m = k;
  for (k = []; d && d !== m; ) {
    g = d.alternate;
    if (g !== null && g === m)
      break;
    k.push(d);
    d = Rd(d);
  }
  for (d = []; p2 && p2 !== m; ) {
    g = p2.alternate;
    if (g !== null && g === m)
      break;
    d.push(p2);
    p2 = Rd(p2);
  }
  for (p2 = 0; p2 < k.length; p2++)
    Vd(k[p2], "bubbled", l2);
  for (p2 = d.length; 0 < p2--; )
    Vd(d[p2], "captured", c2);
  return (e & 64) === 0 ? [l2] : [l2, c2];
} };
function Ze(a, b) {
  return a === b && (a !== 0 || 1 / a === 1 / b) || a !== a && b !== b;
}
var $e = typeof Object.is === "function" ? Object.is : Ze, af = Object.prototype.hasOwnProperty;
function bf(a, b) {
  if ($e(a, b))
    return true;
  if (typeof a !== "object" || a === null || typeof b !== "object" || b === null)
    return false;
  var c2 = Object.keys(a), d = Object.keys(b);
  if (c2.length !== d.length)
    return false;
  for (d = 0; d < c2.length; d++)
    if (!af.call(b, c2[d]) || !$e(a[c2[d]], b[c2[d]]))
      return false;
  return true;
}
var cf = ya && "documentMode" in document && 11 >= document.documentMode, df = { select: { phasedRegistrationNames: { bubbled: "onSelect", captured: "onSelectCapture" }, dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ") } }, ef = null, ff = null, gf = null, hf = false;
function jf(a, b) {
  var c2 = b.window === b ? b.document : b.nodeType === 9 ? b : b.ownerDocument;
  if (hf || ef == null || ef !== td(c2))
    return null;
  c2 = ef;
  "selectionStart" in c2 && yd(c2) ? c2 = { start: c2.selectionStart, end: c2.selectionEnd } : (c2 = (c2.ownerDocument && c2.ownerDocument.defaultView || window).getSelection(), c2 = { anchorNode: c2.anchorNode, anchorOffset: c2.anchorOffset, focusNode: c2.focusNode, focusOffset: c2.focusOffset });
  return gf && bf(gf, c2) ? null : (gf = c2, a = G.getPooled(df.select, ff, a, b), a.type = "select", a.target = ef, Xd(a), a);
}
var kf = { eventTypes: df, extractEvents: function(a, b, c2, d, e, f) {
  e = f || (d.window === d ? d.document : d.nodeType === 9 ? d : d.ownerDocument);
  if (!(f = !e)) {
    a: {
      e = cc(e);
      f = wa.onSelect;
      for (var g = 0; g < f.length; g++)
        if (!e.has(f[g])) {
          e = false;
          break a;
        }
      e = true;
    }
    f = !e;
  }
  if (f)
    return null;
  e = b ? Pd(b) : window;
  switch (a) {
    case "focus":
      if (xe(e) || e.contentEditable === "true")
        ef = e, ff = b, gf = null;
      break;
    case "blur":
      gf = ff = ef = null;
      break;
    case "mousedown":
      hf = true;
      break;
    case "contextmenu":
    case "mouseup":
    case "dragend":
      return hf = false, jf(c2, d);
    case "selectionchange":
      if (cf)
        break;
    case "keydown":
    case "keyup":
      return jf(c2, d);
  }
  return null;
} }, lf = G.extend({ animationName: null, elapsedTime: null, pseudoElement: null }), mf = G.extend({ clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), nf = Ne.extend({ relatedTarget: null });
function of(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, a === 0 && b === 13 && (a = 13)) : a = b;
  a === 10 && (a = 13);
  return 32 <= a || a === 13 ? a : 0;
}
var pf = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, qf = {
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
  224: "Meta"
}, rf = Ne.extend({ key: function(a) {
  if (a.key) {
    var b = pf[a.key] || a.key;
    if (b !== "Unidentified")
      return b;
  }
  return a.type === "keypress" ? (a = of(a), a === 13 ? "Enter" : String.fromCharCode(a)) : a.type === "keydown" || a.type === "keyup" ? qf[a.keyCode] || "Unidentified" : "";
}, location: null, ctrlKey: null, shiftKey: null, altKey: null, metaKey: null, repeat: null, locale: null, getModifierState: Qe, charCode: function(a) {
  return a.type === "keypress" ? of(a) : 0;
}, keyCode: function(a) {
  return a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
}, which: function(a) {
  return a.type === "keypress" ? of(a) : a.type === "keydown" || a.type === "keyup" ? a.keyCode : 0;
} }), sf = Ve.extend({ dataTransfer: null }), tf = Ne.extend({ touches: null, targetTouches: null, changedTouches: null, altKey: null, metaKey: null, ctrlKey: null, shiftKey: null, getModifierState: Qe }), uf = G.extend({ propertyName: null, elapsedTime: null, pseudoElement: null }), vf = Ve.extend({ deltaX: function(a) {
  return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
}, deltaY: function(a) {
  return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
}, deltaZ: null, deltaMode: null }), wf = { eventTypes: Wc, extractEvents: function(a, b, c2, d) {
  var e = Yc.get(a);
  if (!e)
    return null;
  switch (a) {
    case "keypress":
      if (of(c2) === 0)
        return null;
    case "keydown":
    case "keyup":
      a = rf;
      break;
    case "blur":
    case "focus":
      a = nf;
      break;
    case "click":
      if (c2.button === 2)
        return null;
    case "auxclick":
    case "dblclick":
    case "mousedown":
    case "mousemove":
    case "mouseup":
    case "mouseout":
    case "mouseover":
    case "contextmenu":
      a = Ve;
      break;
    case "drag":
    case "dragend":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "dragstart":
    case "drop":
      a = sf;
      break;
    case "touchcancel":
    case "touchend":
    case "touchmove":
    case "touchstart":
      a = tf;
      break;
    case Xb:
    case Yb:
    case Zb:
      a = lf;
      break;
    case $b:
      a = uf;
      break;
    case "scroll":
      a = Ne;
      break;
    case "wheel":
      a = vf;
      break;
    case "copy":
    case "cut":
    case "paste":
      a = mf;
      break;
    case "gotpointercapture":
    case "lostpointercapture":
    case "pointercancel":
    case "pointerdown":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "pointerup":
      a = We;
      break;
    default:
      a = G;
  }
  b = a.getPooled(e, b, c2, d);
  Xd(b);
  return b;
} };
if (pa)
  throw Error(u(101));
pa = Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));
ra();
var xf = Nc;
la = Qd;
ma = xf;
na = Pd;
xa({ SimpleEventPlugin: wf, EnterLeaveEventPlugin: Ye, ChangeEventPlugin: Me, SelectEventPlugin: kf, BeforeInputEventPlugin: ve });
var yf = [], zf = -1;
function H(a) {
  0 > zf || (a.current = yf[zf], yf[zf] = null, zf--);
}
function I(a, b) {
  zf++;
  yf[zf] = a.current;
  a.current = b;
}
var Af = {}, J = { current: Af }, K = { current: false }, Bf = Af;
function Cf(a, b) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Af;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f;
  for (f in c2)
    e[f] = b[f];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function L(a) {
  a = a.childContextTypes;
  return a !== null && a !== void 0;
}
function Df() {
  H(K);
  H(J);
}
function Ef(a, b, c2) {
  if (J.current !== Af)
    throw Error(u(168));
  I(J, b);
  I(K, c2);
}
function Ff(a, b, c2) {
  var d = a.stateNode;
  a = b.childContextTypes;
  if (typeof d.getChildContext !== "function")
    return c2;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in a))
      throw Error(u(108, pb(b) || "Unknown", e));
  return n({}, c2, {}, d);
}
function Gf(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Af;
  Bf = J.current;
  I(J, a);
  I(K, K.current);
  return true;
}
function Hf(a, b, c2) {
  var d = a.stateNode;
  if (!d)
    throw Error(u(169));
  c2 ? (a = Ff(a, b, Bf), d.__reactInternalMemoizedMergedChildContext = a, H(K), H(J), I(J, a)) : H(K);
  I(K, c2);
}
var If = r.unstable_runWithPriority, Jf = r.unstable_scheduleCallback, Kf = r.unstable_cancelCallback, Lf = r.unstable_requestPaint, Mf = r.unstable_now, Nf = r.unstable_getCurrentPriorityLevel, Of = r.unstable_ImmediatePriority, Pf = r.unstable_UserBlockingPriority, Qf = r.unstable_NormalPriority, Rf = r.unstable_LowPriority, Sf = r.unstable_IdlePriority, Tf = {}, Uf = r.unstable_shouldYield, Vf = Lf !== void 0 ? Lf : function() {
}, Wf = null, Xf = null, Yf = false, Zf = Mf(), $f = 1e4 > Zf ? Mf : function() {
  return Mf() - Zf;
};
function ag() {
  switch (Nf()) {
    case Of:
      return 99;
    case Pf:
      return 98;
    case Qf:
      return 97;
    case Rf:
      return 96;
    case Sf:
      return 95;
    default:
      throw Error(u(332));
  }
}
function bg(a) {
  switch (a) {
    case 99:
      return Of;
    case 98:
      return Pf;
    case 97:
      return Qf;
    case 96:
      return Rf;
    case 95:
      return Sf;
    default:
      throw Error(u(332));
  }
}
function cg(a, b) {
  a = bg(a);
  return If(a, b);
}
function dg(a, b, c2) {
  a = bg(a);
  return Jf(a, b, c2);
}
function eg(a) {
  Wf === null ? (Wf = [a], Xf = Jf(Of, fg)) : Wf.push(a);
  return Tf;
}
function gg() {
  if (Xf !== null) {
    var a = Xf;
    Xf = null;
    Kf(a);
  }
  fg();
}
function fg() {
  if (!Yf && Wf !== null) {
    Yf = true;
    var a = 0;
    try {
      var b = Wf;
      cg(99, function() {
        for (; a < b.length; a++) {
          var c2 = b[a];
          do
            c2 = c2(true);
          while (c2 !== null);
        }
      });
      Wf = null;
    } catch (c2) {
      throw Wf !== null && (Wf = Wf.slice(a + 1)), Jf(Of, gg), c2;
    } finally {
      Yf = false;
    }
  }
}
function hg(a, b, c2) {
  c2 /= 10;
  return 1073741821 - (((1073741821 - a + b / 10) / c2 | 0) + 1) * c2;
}
function ig(a, b) {
  if (a && a.defaultProps) {
    b = n({}, b);
    a = a.defaultProps;
    for (var c2 in a)
      b[c2] === void 0 && (b[c2] = a[c2]);
  }
  return b;
}
var jg = { current: null }, kg = null, lg = null, mg = null;
function ng() {
  mg = lg = kg = null;
}
function og(a) {
  var b = jg.current;
  H(jg);
  a.type._context._currentValue = b;
}
function pg(a, b) {
  for (; a !== null; ) {
    var c2 = a.alternate;
    if (a.childExpirationTime < b)
      a.childExpirationTime = b, c2 !== null && c2.childExpirationTime < b && (c2.childExpirationTime = b);
    else if (c2 !== null && c2.childExpirationTime < b)
      c2.childExpirationTime = b;
    else
      break;
    a = a.return;
  }
}
function qg(a, b) {
  kg = a;
  mg = lg = null;
  a = a.dependencies;
  a !== null && a.firstContext !== null && (a.expirationTime >= b && (rg = true), a.firstContext = null);
}
function sg(a, b) {
  if (mg !== a && b !== false && b !== 0) {
    if (typeof b !== "number" || b === 1073741823)
      mg = a, b = 1073741823;
    b = { context: a, observedBits: b, next: null };
    if (lg === null) {
      if (kg === null)
        throw Error(u(308));
      lg = b;
      kg.dependencies = { expirationTime: 0, firstContext: b, responders: null };
    } else
      lg = lg.next = b;
  }
  return a._currentValue;
}
var tg = false;
function ug(a) {
  a.updateQueue = { baseState: a.memoizedState, baseQueue: null, shared: { pending: null }, effects: null };
}
function vg(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, baseQueue: a.baseQueue, shared: a.shared, effects: a.effects });
}
function wg(a, b) {
  a = { expirationTime: a, suspenseConfig: b, tag: 0, payload: null, callback: null, next: null };
  return a.next = a;
}
function xg(a, b) {
  a = a.updateQueue;
  if (a !== null) {
    a = a.shared;
    var c2 = a.pending;
    c2 === null ? b.next = b : (b.next = c2.next, c2.next = b);
    a.pending = b;
  }
}
function yg(a, b) {
  var c2 = a.alternate;
  c2 !== null && vg(c2, a);
  a = a.updateQueue;
  c2 = a.baseQueue;
  c2 === null ? (a.baseQueue = b.next = b, b.next = b) : (b.next = c2.next, c2.next = b);
}
function zg(a, b, c2, d) {
  var e = a.updateQueue;
  tg = false;
  var f = e.baseQueue, g = e.shared.pending;
  if (g !== null) {
    if (f !== null) {
      var h = f.next;
      f.next = g.next;
      g.next = h;
    }
    f = g;
    e.shared.pending = null;
    h = a.alternate;
    h !== null && (h = h.updateQueue, h !== null && (h.baseQueue = g));
  }
  if (f !== null) {
    h = f.next;
    var k = e.baseState, l2 = 0, m = null, p2 = null, x2 = null;
    if (h !== null) {
      var z2 = h;
      do {
        g = z2.expirationTime;
        if (g < d) {
          var ca = { expirationTime: z2.expirationTime, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null };
          x2 === null ? (p2 = x2 = ca, m = k) : x2 = x2.next = ca;
          g > l2 && (l2 = g);
        } else {
          x2 !== null && (x2 = x2.next = { expirationTime: 1073741823, suspenseConfig: z2.suspenseConfig, tag: z2.tag, payload: z2.payload, callback: z2.callback, next: null });
          Ag(g, z2.suspenseConfig);
          a: {
            var D2 = a, t2 = z2;
            g = b;
            ca = c2;
            switch (t2.tag) {
              case 1:
                D2 = t2.payload;
                if (typeof D2 === "function") {
                  k = D2.call(ca, k, g);
                  break a;
                }
                k = D2;
                break a;
              case 3:
                D2.effectTag = D2.effectTag & -4097 | 64;
              case 0:
                D2 = t2.payload;
                g = typeof D2 === "function" ? D2.call(ca, k, g) : D2;
                if (g === null || g === void 0)
                  break a;
                k = n({}, k, g);
                break a;
              case 2:
                tg = true;
            }
          }
          z2.callback !== null && (a.effectTag |= 32, g = e.effects, g === null ? e.effects = [z2] : g.push(z2));
        }
        z2 = z2.next;
        if (z2 === null || z2 === h)
          if (g = e.shared.pending, g === null)
            break;
          else
            z2 = f.next = g.next, g.next = h, e.baseQueue = f = g, e.shared.pending = null;
      } while (1);
    }
    x2 === null ? m = k : x2.next = p2;
    e.baseState = m;
    e.baseQueue = x2;
    Bg(l2);
    a.expirationTime = l2;
    a.memoizedState = k;
  }
}
function Cg(a, b, c2) {
  a = b.effects;
  b.effects = null;
  if (a !== null)
    for (b = 0; b < a.length; b++) {
      var d = a[b], e = d.callback;
      if (e !== null) {
        d.callback = null;
        d = e;
        e = c2;
        if (typeof d !== "function")
          throw Error(u(191, d));
        d.call(e);
      }
    }
}
var Dg = Wa.ReactCurrentBatchConfig, Eg = new aa.Component().refs;
function Fg(a, b, c2, d) {
  b = a.memoizedState;
  c2 = c2(d, b);
  c2 = c2 === null || c2 === void 0 ? b : n({}, b, c2);
  a.memoizedState = c2;
  a.expirationTime === 0 && (a.updateQueue.baseState = c2);
}
var Jg = { isMounted: function(a) {
  return (a = a._reactInternalFiber) ? dc(a) === a : false;
}, enqueueSetState: function(a, b, c2) {
  a = a._reactInternalFiber;
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = wg(d, e);
  e.payload = b;
  c2 !== void 0 && c2 !== null && (e.callback = c2);
  xg(a, e);
  Ig(a, d);
}, enqueueReplaceState: function(a, b, c2) {
  a = a._reactInternalFiber;
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = wg(d, e);
  e.tag = 1;
  e.payload = b;
  c2 !== void 0 && c2 !== null && (e.callback = c2);
  xg(a, e);
  Ig(a, d);
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternalFiber;
  var c2 = Gg(), d = Dg.suspense;
  c2 = Hg(c2, a, d);
  d = wg(c2, d);
  d.tag = 2;
  b !== void 0 && b !== null && (d.callback = b);
  xg(a, d);
  Ig(a, c2);
} };
function Kg(a, b, c2, d, e, f, g) {
  a = a.stateNode;
  return typeof a.shouldComponentUpdate === "function" ? a.shouldComponentUpdate(d, f, g) : b.prototype && b.prototype.isPureReactComponent ? !bf(c2, d) || !bf(e, f) : true;
}
function Lg(a, b, c2) {
  var d = false, e = Af;
  var f = b.contextType;
  typeof f === "object" && f !== null ? f = sg(f) : (e = L(b) ? Bf : J.current, d = b.contextTypes, f = (d = d !== null && d !== void 0) ? Cf(a, e) : Af);
  b = new b(c2, f);
  a.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null;
  b.updater = Jg;
  a.stateNode = b;
  b._reactInternalFiber = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f);
  return b;
}
function Mg(a, b, c2, d) {
  a = b.state;
  typeof b.componentWillReceiveProps === "function" && b.componentWillReceiveProps(c2, d);
  typeof b.UNSAFE_componentWillReceiveProps === "function" && b.UNSAFE_componentWillReceiveProps(c2, d);
  b.state !== a && Jg.enqueueReplaceState(b, b.state, null);
}
function Ng(a, b, c2, d) {
  var e = a.stateNode;
  e.props = c2;
  e.state = a.memoizedState;
  e.refs = Eg;
  ug(a);
  var f = b.contextType;
  typeof f === "object" && f !== null ? e.context = sg(f) : (f = L(b) ? Bf : J.current, e.context = Cf(a, f));
  zg(a, c2, e, d);
  e.state = a.memoizedState;
  f = b.getDerivedStateFromProps;
  typeof f === "function" && (Fg(a, b, f, c2), e.state = a.memoizedState);
  typeof b.getDerivedStateFromProps === "function" || typeof e.getSnapshotBeforeUpdate === "function" || typeof e.UNSAFE_componentWillMount !== "function" && typeof e.componentWillMount !== "function" || (b = e.state, typeof e.componentWillMount === "function" && e.componentWillMount(), typeof e.UNSAFE_componentWillMount === "function" && e.UNSAFE_componentWillMount(), b !== e.state && Jg.enqueueReplaceState(e, e.state, null), zg(a, c2, e, d), e.state = a.memoizedState);
  typeof e.componentDidMount === "function" && (a.effectTag |= 4);
}
var Og = Array.isArray;
function Pg(a, b, c2) {
  a = c2.ref;
  if (a !== null && typeof a !== "function" && typeof a !== "object") {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (c2.tag !== 1)
          throw Error(u(309));
        var d = c2.stateNode;
      }
      if (!d)
        throw Error(u(147, a));
      var e = "" + a;
      if (b !== null && b.ref !== null && typeof b.ref === "function" && b.ref._stringRef === e)
        return b.ref;
      b = function(a2) {
        var b2 = d.refs;
        b2 === Eg && (b2 = d.refs = {});
        a2 === null ? delete b2[e] : b2[e] = a2;
      };
      b._stringRef = e;
      return b;
    }
    if (typeof a !== "string")
      throw Error(u(284));
    if (!c2._owner)
      throw Error(u(290, a));
  }
  return a;
}
function Qg(a, b) {
  if (a.type !== "textarea")
    throw Error(u(31, Object.prototype.toString.call(b) === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : b, ""));
}
function Rg(a) {
  function b(b2, c3) {
    if (a) {
      var d2 = b2.lastEffect;
      d2 !== null ? (d2.nextEffect = c3, b2.lastEffect = c3) : b2.firstEffect = b2.lastEffect = c3;
      c3.nextEffect = null;
      c3.effectTag = 8;
    }
  }
  function c2(c3, d2) {
    if (!a)
      return null;
    for (; d2 !== null; )
      b(c3, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = new Map(); b2 !== null; )
      b2.key !== null ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Sg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f(b2, c3, d2) {
    b2.index = d2;
    if (!a)
      return c3;
    d2 = b2.alternate;
    if (d2 !== null)
      return d2 = d2.index, d2 < c3 ? (b2.effectTag = 2, c3) : d2;
    b2.effectTag = 2;
    return c3;
  }
  function g(b2) {
    a && b2.alternate === null && (b2.effectTag = 2);
    return b2;
  }
  function h(a2, b2, c3, d2) {
    if (b2 === null || b2.tag !== 6)
      return b2 = Tg(c3, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c3);
    b2.return = a2;
    return b2;
  }
  function k(a2, b2, c3, d2) {
    if (b2 !== null && b2.elementType === c3.type)
      return d2 = e(b2, c3.props), d2.ref = Pg(a2, b2, c3), d2.return = a2, d2;
    d2 = Ug(c3.type, c3.key, c3.props, null, a2.mode, d2);
    d2.ref = Pg(a2, b2, c3);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c3, d2) {
    if (b2 === null || b2.tag !== 4 || b2.stateNode.containerInfo !== c3.containerInfo || b2.stateNode.implementation !== c3.implementation)
      return b2 = Vg(c3, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c3.children || []);
    b2.return = a2;
    return b2;
  }
  function m(a2, b2, c3, d2, f2) {
    if (b2 === null || b2.tag !== 7)
      return b2 = Wg(c3, a2.mode, d2, f2), b2.return = a2, b2;
    b2 = e(b2, c3);
    b2.return = a2;
    return b2;
  }
  function p2(a2, b2, c3) {
    if (typeof b2 === "string" || typeof b2 === "number")
      return b2 = Tg("" + b2, a2.mode, c3), b2.return = a2, b2;
    if (typeof b2 === "object" && b2 !== null) {
      switch (b2.$$typeof) {
        case Za:
          return c3 = Ug(b2.type, b2.key, b2.props, null, a2.mode, c3), c3.ref = Pg(a2, null, b2), c3.return = a2, c3;
        case $a:
          return b2 = Vg(b2, a2.mode, c3), b2.return = a2, b2;
      }
      if (Og(b2) || nb(b2))
        return b2 = Wg(b2, a2.mode, c3, null), b2.return = a2, b2;
      Qg(a2, b2);
    }
    return null;
  }
  function x2(a2, b2, c3, d2) {
    var e2 = b2 !== null ? b2.key : null;
    if (typeof c3 === "string" || typeof c3 === "number")
      return e2 !== null ? null : h(a2, b2, "" + c3, d2);
    if (typeof c3 === "object" && c3 !== null) {
      switch (c3.$$typeof) {
        case Za:
          return c3.key === e2 ? c3.type === ab ? m(a2, b2, c3.props.children, d2, e2) : k(a2, b2, c3, d2) : null;
        case $a:
          return c3.key === e2 ? l2(a2, b2, c3, d2) : null;
      }
      if (Og(c3) || nb(c3))
        return e2 !== null ? null : m(a2, b2, c3, d2, null);
      Qg(a2, c3);
    }
    return null;
  }
  function z2(a2, b2, c3, d2, e2) {
    if (typeof d2 === "string" || typeof d2 === "number")
      return a2 = a2.get(c3) || null, h(b2, a2, "" + d2, e2);
    if (typeof d2 === "object" && d2 !== null) {
      switch (d2.$$typeof) {
        case Za:
          return a2 = a2.get(d2.key === null ? c3 : d2.key) || null, d2.type === ab ? m(b2, a2, d2.props.children, e2, d2.key) : k(b2, a2, d2, e2);
        case $a:
          return a2 = a2.get(d2.key === null ? c3 : d2.key) || null, l2(b2, a2, d2, e2);
      }
      if (Og(d2) || nb(d2))
        return a2 = a2.get(c3) || null, m(b2, a2, d2, e2, null);
      Qg(b2, d2);
    }
    return null;
  }
  function ca(e2, g2, h2, k2) {
    for (var l3 = null, t2 = null, m2 = g2, y2 = g2 = 0, A2 = null; m2 !== null && y2 < h2.length; y2++) {
      m2.index > y2 ? (A2 = m2, m2 = null) : A2 = m2.sibling;
      var q2 = x2(e2, m2, h2[y2], k2);
      if (q2 === null) {
        m2 === null && (m2 = A2);
        break;
      }
      a && m2 && q2.alternate === null && b(e2, m2);
      g2 = f(q2, g2, y2);
      t2 === null ? l3 = q2 : t2.sibling = q2;
      t2 = q2;
      m2 = A2;
    }
    if (y2 === h2.length)
      return c2(e2, m2), l3;
    if (m2 === null) {
      for (; y2 < h2.length; y2++)
        m2 = p2(e2, h2[y2], k2), m2 !== null && (g2 = f(m2, g2, y2), t2 === null ? l3 = m2 : t2.sibling = m2, t2 = m2);
      return l3;
    }
    for (m2 = d(e2, m2); y2 < h2.length; y2++)
      A2 = z2(m2, e2, y2, h2[y2], k2), A2 !== null && (a && A2.alternate !== null && m2.delete(A2.key === null ? y2 : A2.key), g2 = f(A2, g2, y2), t2 === null ? l3 = A2 : t2.sibling = A2, t2 = A2);
    a && m2.forEach(function(a2) {
      return b(e2, a2);
    });
    return l3;
  }
  function D2(e2, g2, h2, l3) {
    var k2 = nb(h2);
    if (typeof k2 !== "function")
      throw Error(u(150));
    h2 = k2.call(h2);
    if (h2 == null)
      throw Error(u(151));
    for (var m2 = k2 = null, t2 = g2, y2 = g2 = 0, A2 = null, q2 = h2.next(); t2 !== null && !q2.done; y2++, q2 = h2.next()) {
      t2.index > y2 ? (A2 = t2, t2 = null) : A2 = t2.sibling;
      var D3 = x2(e2, t2, q2.value, l3);
      if (D3 === null) {
        t2 === null && (t2 = A2);
        break;
      }
      a && t2 && D3.alternate === null && b(e2, t2);
      g2 = f(D3, g2, y2);
      m2 === null ? k2 = D3 : m2.sibling = D3;
      m2 = D3;
      t2 = A2;
    }
    if (q2.done)
      return c2(e2, t2), k2;
    if (t2 === null) {
      for (; !q2.done; y2++, q2 = h2.next())
        q2 = p2(e2, q2.value, l3), q2 !== null && (g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
      return k2;
    }
    for (t2 = d(e2, t2); !q2.done; y2++, q2 = h2.next())
      q2 = z2(t2, e2, y2, q2.value, l3), q2 !== null && (a && q2.alternate !== null && t2.delete(q2.key === null ? y2 : q2.key), g2 = f(q2, g2, y2), m2 === null ? k2 = q2 : m2.sibling = q2, m2 = q2);
    a && t2.forEach(function(a2) {
      return b(e2, a2);
    });
    return k2;
  }
  return function(a2, d2, f2, h2) {
    var k2 = typeof f2 === "object" && f2 !== null && f2.type === ab && f2.key === null;
    k2 && (f2 = f2.props.children);
    var l3 = typeof f2 === "object" && f2 !== null;
    if (l3)
      switch (f2.$$typeof) {
        case Za:
          a: {
            l3 = f2.key;
            for (k2 = d2; k2 !== null; ) {
              if (k2.key === l3) {
                switch (k2.tag) {
                  case 7:
                    if (f2.type === ab) {
                      c2(a2, k2.sibling);
                      d2 = e(k2, f2.props.children);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                    break;
                  default:
                    if (k2.elementType === f2.type) {
                      c2(a2, k2.sibling);
                      d2 = e(k2, f2.props);
                      d2.ref = Pg(a2, k2, f2);
                      d2.return = a2;
                      a2 = d2;
                      break a;
                    }
                }
                c2(a2, k2);
                break;
              } else
                b(a2, k2);
              k2 = k2.sibling;
            }
            f2.type === ab ? (d2 = Wg(f2.props.children, a2.mode, h2, f2.key), d2.return = a2, a2 = d2) : (h2 = Ug(f2.type, f2.key, f2.props, null, a2.mode, h2), h2.ref = Pg(a2, d2, f2), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case $a:
          a: {
            for (k2 = f2.key; d2 !== null; ) {
              if (d2.key === k2)
                if (d2.tag === 4 && d2.stateNode.containerInfo === f2.containerInfo && d2.stateNode.implementation === f2.implementation) {
                  c2(a2, d2.sibling);
                  d2 = e(d2, f2.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c2(a2, d2);
                  break;
                }
              else
                b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Vg(f2, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
      }
    if (typeof f2 === "string" || typeof f2 === "number")
      return f2 = "" + f2, d2 !== null && d2.tag === 6 ? (c2(a2, d2.sibling), d2 = e(d2, f2), d2.return = a2, a2 = d2) : (c2(a2, d2), d2 = Tg(f2, a2.mode, h2), d2.return = a2, a2 = d2), g(a2);
    if (Og(f2))
      return ca(a2, d2, f2, h2);
    if (nb(f2))
      return D2(a2, d2, f2, h2);
    l3 && Qg(a2, f2);
    if (typeof f2 === "undefined" && !k2)
      switch (a2.tag) {
        case 1:
        case 0:
          throw a2 = a2.type, Error(u(152, a2.displayName || a2.name || "Component"));
      }
    return c2(a2, d2);
  };
}
var Xg = Rg(true), Yg = Rg(false), Zg = {}, $g = { current: Zg }, ah = { current: Zg }, bh = { current: Zg };
function ch(a) {
  if (a === Zg)
    throw Error(u(174));
  return a;
}
function dh(a, b) {
  I(bh, b);
  I(ah, a);
  I($g, Zg);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : Ob(null, "");
      break;
    default:
      a = a === 8 ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = Ob(b, a);
  }
  H($g);
  I($g, b);
}
function eh() {
  H($g);
  H(ah);
  H(bh);
}
function fh(a) {
  ch(bh.current);
  var b = ch($g.current);
  var c2 = Ob(b, a.type);
  b !== c2 && (I(ah, a), I($g, c2));
}
function gh(a) {
  ah.current === a && (H($g), H(ah));
}
var M = { current: 0 };
function hh(a) {
  for (var b = a; b !== null; ) {
    if (b.tag === 13) {
      var c2 = b.memoizedState;
      if (c2 !== null && (c2 = c2.dehydrated, c2 === null || c2.data === Bd || c2.data === Cd))
        return b;
    } else if (b.tag === 19 && b.memoizedProps.revealOrder !== void 0) {
      if ((b.effectTag & 64) !== 0)
        return b;
    } else if (b.child !== null) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a)
      break;
    for (; b.sibling === null; ) {
      if (b.return === null || b.return === a)
        return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
function ih(a, b) {
  return { responder: a, props: b };
}
var jh = Wa.ReactCurrentDispatcher, kh = Wa.ReactCurrentBatchConfig, lh = 0, N = null, O = null, P = null, mh = false;
function Q() {
  throw Error(u(321));
}
function nh(a, b) {
  if (b === null)
    return false;
  for (var c2 = 0; c2 < b.length && c2 < a.length; c2++)
    if (!$e(a[c2], b[c2]))
      return false;
  return true;
}
function oh(a, b, c2, d, e, f) {
  lh = f;
  N = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.expirationTime = 0;
  jh.current = a === null || a.memoizedState === null ? ph : qh;
  a = c2(d, e);
  if (b.expirationTime === lh) {
    f = 0;
    do {
      b.expirationTime = 0;
      if (!(25 > f))
        throw Error(u(301));
      f += 1;
      P = O = null;
      b.updateQueue = null;
      jh.current = rh;
      a = c2(d, e);
    } while (b.expirationTime === lh);
  }
  jh.current = sh;
  b = O !== null && O.next !== null;
  lh = 0;
  P = O = N = null;
  mh = false;
  if (b)
    throw Error(u(300));
  return a;
}
function th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  P === null ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function uh() {
  if (O === null) {
    var a = N.alternate;
    a = a !== null ? a.memoizedState : null;
  } else
    a = O.next;
  var b = P === null ? N.memoizedState : P.next;
  if (b !== null)
    P = b, O = a;
  else {
    if (a === null)
      throw Error(u(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    P === null ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function vh(a, b) {
  return typeof b === "function" ? b(a) : b;
}
function wh(a) {
  var b = uh(), c2 = b.queue;
  if (c2 === null)
    throw Error(u(311));
  c2.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f = c2.pending;
  if (f !== null) {
    if (e !== null) {
      var g = e.next;
      e.next = f.next;
      f.next = g;
    }
    d.baseQueue = e = f;
    c2.pending = null;
  }
  if (e !== null) {
    e = e.next;
    d = d.baseState;
    var h = g = f = null, k = e;
    do {
      var l2 = k.expirationTime;
      if (l2 < lh) {
        var m = { expirationTime: k.expirationTime, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null };
        h === null ? (g = h = m, f = d) : h = h.next = m;
        l2 > N.expirationTime && (N.expirationTime = l2, Bg(l2));
      } else
        h !== null && (h = h.next = { expirationTime: 1073741823, suspenseConfig: k.suspenseConfig, action: k.action, eagerReducer: k.eagerReducer, eagerState: k.eagerState, next: null }), Ag(l2, k.suspenseConfig), d = k.eagerReducer === a ? k.eagerState : a(d, k.action);
      k = k.next;
    } while (k !== null && k !== e);
    h === null ? f = d : h.next = g;
    $e(d, b.memoizedState) || (rg = true);
    b.memoizedState = d;
    b.baseState = f;
    b.baseQueue = h;
    c2.lastRenderedState = d;
  }
  return [b.memoizedState, c2.dispatch];
}
function xh(a) {
  var b = uh(), c2 = b.queue;
  if (c2 === null)
    throw Error(u(311));
  c2.lastRenderedReducer = a;
  var d = c2.dispatch, e = c2.pending, f = b.memoizedState;
  if (e !== null) {
    c2.pending = null;
    var g = e = e.next;
    do
      f = a(f, g.action), g = g.next;
    while (g !== e);
    $e(f, b.memoizedState) || (rg = true);
    b.memoizedState = f;
    b.baseQueue === null && (b.baseState = f);
    c2.lastRenderedState = f;
  }
  return [f, d];
}
function yh(a) {
  var b = th();
  typeof a === "function" && (a = a());
  b.memoizedState = b.baseState = a;
  a = b.queue = { pending: null, dispatch: null, lastRenderedReducer: vh, lastRenderedState: a };
  a = a.dispatch = zh.bind(null, N, a);
  return [b.memoizedState, a];
}
function Ah(a, b, c2, d) {
  a = { tag: a, create: b, destroy: c2, deps: d, next: null };
  b = N.updateQueue;
  b === null ? (b = { lastEffect: null }, N.updateQueue = b, b.lastEffect = a.next = a) : (c2 = b.lastEffect, c2 === null ? b.lastEffect = a.next = a : (d = c2.next, c2.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function Bh() {
  return uh().memoizedState;
}
function Ch(a, b, c2, d) {
  var e = th();
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c2, void 0, d === void 0 ? null : d);
}
function Dh(a, b, c2, d) {
  var e = uh();
  d = d === void 0 ? null : d;
  var f = void 0;
  if (O !== null) {
    var g = O.memoizedState;
    f = g.destroy;
    if (d !== null && nh(d, g.deps)) {
      Ah(b, c2, f, d);
      return;
    }
  }
  N.effectTag |= a;
  e.memoizedState = Ah(1 | b, c2, f, d);
}
function Eh(a, b) {
  return Ch(516, 4, a, b);
}
function Fh(a, b) {
  return Dh(516, 4, a, b);
}
function Gh(a, b) {
  return Dh(4, 2, a, b);
}
function Hh(a, b) {
  if (typeof b === "function")
    return a = a(), b(a), function() {
      b(null);
    };
  if (b !== null && b !== void 0)
    return a = a(), b.current = a, function() {
      b.current = null;
    };
}
function Ih(a, b, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Dh(4, 2, Hh.bind(null, b, a), c2);
}
function Jh() {
}
function Kh(a, b) {
  th().memoizedState = [a, b === void 0 ? null : b];
  return a;
}
function Lh(a, b) {
  var c2 = uh();
  b = b === void 0 ? null : b;
  var d = c2.memoizedState;
  if (d !== null && b !== null && nh(b, d[1]))
    return d[0];
  c2.memoizedState = [a, b];
  return a;
}
function Mh(a, b) {
  var c2 = uh();
  b = b === void 0 ? null : b;
  var d = c2.memoizedState;
  if (d !== null && b !== null && nh(b, d[1]))
    return d[0];
  a = a();
  c2.memoizedState = [a, b];
  return a;
}
function Nh(a, b, c2) {
  var d = ag();
  cg(98 > d ? 98 : d, function() {
    a(true);
  });
  cg(97 < d ? 97 : d, function() {
    var d2 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      a(false), c2();
    } finally {
      kh.suspense = d2;
    }
  });
}
function zh(a, b, c2) {
  var d = Gg(), e = Dg.suspense;
  d = Hg(d, a, e);
  e = { expirationTime: d, suspenseConfig: e, action: c2, eagerReducer: null, eagerState: null, next: null };
  var f = b.pending;
  f === null ? e.next = e : (e.next = f.next, f.next = e);
  b.pending = e;
  f = a.alternate;
  if (a === N || f !== null && f === N)
    mh = true, e.expirationTime = lh, N.expirationTime = lh;
  else {
    if (a.expirationTime === 0 && (f === null || f.expirationTime === 0) && (f = b.lastRenderedReducer, f !== null))
      try {
        var g = b.lastRenderedState, h = f(g, c2);
        e.eagerReducer = f;
        e.eagerState = h;
        if ($e(h, g))
          return;
      } catch (k) {
      } finally {
      }
    Ig(a, d);
  }
}
var sh = { readContext: sg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useResponder: Q, useDeferredValue: Q, useTransition: Q }, ph = { readContext: sg, useCallback: Kh, useContext: sg, useEffect: Eh, useImperativeHandle: function(a, b, c2) {
  c2 = c2 !== null && c2 !== void 0 ? c2.concat([a]) : null;
  return Ch(4, 2, Hh.bind(null, b, a), c2);
}, useLayoutEffect: function(a, b) {
  return Ch(4, 2, a, b);
}, useMemo: function(a, b) {
  var c2 = th();
  b = b === void 0 ? null : b;
  a = a();
  c2.memoizedState = [
    a,
    b
  ];
  return a;
}, useReducer: function(a, b, c2) {
  var d = th();
  b = c2 !== void 0 ? c2(b) : b;
  d.memoizedState = d.baseState = b;
  a = d.queue = { pending: null, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  a = a.dispatch = zh.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: yh, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c2 = yh(a), d = c2[0], e = c2[1];
  Eh(function() {
    var c3 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c3;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = yh(false), c2 = b[0];
  b = b[1];
  return [Kh(Nh.bind(null, b, a), [b, a]), c2];
} }, qh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: wh, useRef: Bh, useState: function() {
  return wh(vh);
}, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c2 = wh(vh), d = c2[0], e = c2[1];
  Fh(function() {
    var c3 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c3;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = wh(vh), c2 = b[0];
  b = b[1];
  return [Lh(Nh.bind(null, b, a), [b, a]), c2];
} }, rh = { readContext: sg, useCallback: Lh, useContext: sg, useEffect: Fh, useImperativeHandle: Ih, useLayoutEffect: Gh, useMemo: Mh, useReducer: xh, useRef: Bh, useState: function() {
  return xh(vh);
}, useDebugValue: Jh, useResponder: ih, useDeferredValue: function(a, b) {
  var c2 = xh(vh), d = c2[0], e = c2[1];
  Fh(function() {
    var c3 = kh.suspense;
    kh.suspense = b === void 0 ? null : b;
    try {
      e(a);
    } finally {
      kh.suspense = c3;
    }
  }, [a, b]);
  return d;
}, useTransition: function(a) {
  var b = xh(vh), c2 = b[0];
  b = b[1];
  return [Lh(Nh.bind(null, b, a), [b, a]), c2];
} }, Oh = null, Ph = null, Qh = false;
function Rh(a, b) {
  var c2 = Sh(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.type = "DELETED";
  c2.stateNode = b;
  c2.return = a;
  c2.effectTag = 8;
  a.lastEffect !== null ? (a.lastEffect.nextEffect = c2, a.lastEffect = c2) : a.firstEffect = a.lastEffect = c2;
}
function Th(a, b) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b = b.nodeType !== 1 || c2.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return b !== null ? (a.stateNode = b, true) : false;
    case 6:
      return b = a.pendingProps === "" || b.nodeType !== 3 ? null : b, b !== null ? (a.stateNode = b, true) : false;
    case 13:
      return false;
    default:
      return false;
  }
}
function Uh(a) {
  if (Qh) {
    var b = Ph;
    if (b) {
      var c2 = b;
      if (!Th(a, b)) {
        b = Jd(c2.nextSibling);
        if (!b || !Th(a, b)) {
          a.effectTag = a.effectTag & -1025 | 2;
          Qh = false;
          Oh = a;
          return;
        }
        Rh(Oh, c2);
      }
      Oh = a;
      Ph = Jd(b.firstChild);
    } else
      a.effectTag = a.effectTag & -1025 | 2, Qh = false, Oh = a;
  }
}
function Vh(a) {
  for (a = a.return; a !== null && a.tag !== 5 && a.tag !== 3 && a.tag !== 13; )
    a = a.return;
  Oh = a;
}
function Wh(a) {
  if (a !== Oh)
    return false;
  if (!Qh)
    return Vh(a), Qh = true, false;
  var b = a.type;
  if (a.tag !== 5 || b !== "head" && b !== "body" && !Gd(b, a.memoizedProps))
    for (b = Ph; b; )
      Rh(a, b), b = Jd(b.nextSibling);
  Vh(a);
  if (a.tag === 13) {
    a = a.memoizedState;
    a = a !== null ? a.dehydrated : null;
    if (!a)
      throw Error(u(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (a.nodeType === 8) {
          var c2 = a.data;
          if (c2 === Ad) {
            if (b === 0) {
              Ph = Jd(a.nextSibling);
              break a;
            }
            b--;
          } else
            c2 !== zd && c2 !== Cd && c2 !== Bd || b++;
        }
        a = a.nextSibling;
      }
      Ph = null;
    }
  } else
    Ph = Oh ? Jd(a.stateNode.nextSibling) : null;
  return true;
}
function Xh() {
  Ph = Oh = null;
  Qh = false;
}
var Yh = Wa.ReactCurrentOwner, rg = false;
function R(a, b, c2, d) {
  b.child = a === null ? Yg(b, null, c2, d) : Xg(b, a.child, c2, d);
}
function Zh(a, b, c2, d, e) {
  c2 = c2.render;
  var f = b.ref;
  qg(b, e);
  d = oh(a, b, c2, d, f, e);
  if (a !== null && !rg)
    return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, d, e);
  return b.child;
}
function ai(a, b, c2, d, e, f) {
  if (a === null) {
    var g = c2.type;
    if (typeof g === "function" && !bi(g) && g.defaultProps === void 0 && c2.compare === null && c2.defaultProps === void 0)
      return b.tag = 15, b.type = g, ci(a, b, g, d, e, f);
    a = Ug(c2.type, null, d, null, b.mode, f);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  g = a.child;
  if (e < f && (e = g.memoizedProps, c2 = c2.compare, c2 = c2 !== null ? c2 : bf, c2(e, d) && a.ref === b.ref))
    return $h(a, b, f);
  b.effectTag |= 1;
  a = Sg(g, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function ci(a, b, c2, d, e, f) {
  return a !== null && bf(a.memoizedProps, d) && a.ref === b.ref && (rg = false, e < f) ? (b.expirationTime = a.expirationTime, $h(a, b, f)) : di(a, b, c2, d, f);
}
function ei(a, b) {
  var c2 = b.ref;
  if (a === null && c2 !== null || a !== null && a.ref !== c2)
    b.effectTag |= 128;
}
function di(a, b, c2, d, e) {
  var f = L(c2) ? Bf : J.current;
  f = Cf(b, f);
  qg(b, e);
  c2 = oh(a, b, c2, d, f, e);
  if (a !== null && !rg)
    return b.updateQueue = a.updateQueue, b.effectTag &= -517, a.expirationTime <= e && (a.expirationTime = 0), $h(a, b, e);
  b.effectTag |= 1;
  R(a, b, c2, e);
  return b.child;
}
function fi(a, b, c2, d, e) {
  if (L(c2)) {
    var f = true;
    Gf(b);
  } else
    f = false;
  qg(b, e);
  if (b.stateNode === null)
    a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), Lg(b, c2, d), Ng(b, c2, d, e), d = true;
  else if (a === null) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k = g.context, l2 = c2.contextType;
    typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c2) ? Bf : J.current, l2 = Cf(b, l2));
    var m = c2.getDerivedStateFromProps, p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function";
    p2 || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2);
    tg = false;
    var x2 = b.memoizedState;
    g.state = x2;
    zg(b, d, g, e);
    k = b.memoizedState;
    h !== d || x2 !== k || K.current || tg ? (typeof m === "function" && (Fg(b, c2, m, d), k = b.memoizedState), (h = tg || Kg(b, c2, h, d, x2, k, l2)) ? (p2 || typeof g.UNSAFE_componentWillMount !== "function" && typeof g.componentWillMount !== "function" || (typeof g.componentWillMount === "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount === "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount === "function" && (b.effectTag |= 4)) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l2, d = h) : (typeof g.componentDidMount === "function" && (b.effectTag |= 4), d = false);
  } else
    g = b.stateNode, vg(a, b), h = b.memoizedProps, g.props = b.type === b.elementType ? h : ig(b.type, h), k = g.context, l2 = c2.contextType, typeof l2 === "object" && l2 !== null ? l2 = sg(l2) : (l2 = L(c2) ? Bf : J.current, l2 = Cf(b, l2)), m = c2.getDerivedStateFromProps, (p2 = typeof m === "function" || typeof g.getSnapshotBeforeUpdate === "function") || typeof g.UNSAFE_componentWillReceiveProps !== "function" && typeof g.componentWillReceiveProps !== "function" || (h !== d || k !== l2) && Mg(b, g, d, l2), tg = false, k = b.memoizedState, g.state = k, zg(b, d, g, e), x2 = b.memoizedState, h !== d || k !== x2 || K.current || tg ? (typeof m === "function" && (Fg(b, c2, m, d), x2 = b.memoizedState), (m = tg || Kg(b, c2, h, d, k, x2, l2)) ? (p2 || typeof g.UNSAFE_componentWillUpdate !== "function" && typeof g.componentWillUpdate !== "function" || (typeof g.componentWillUpdate === "function" && g.componentWillUpdate(d, x2, l2), typeof g.UNSAFE_componentWillUpdate === "function" && g.UNSAFE_componentWillUpdate(d, x2, l2)), typeof g.componentDidUpdate === "function" && (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate === "function" && (b.effectTag |= 256)) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), b.memoizedProps = d, b.memoizedState = x2), g.props = d, g.state = x2, g.context = l2, d = m) : (typeof g.componentDidUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 4), typeof g.getSnapshotBeforeUpdate !== "function" || h === a.memoizedProps && k === a.memoizedState || (b.effectTag |= 256), d = false);
  return gi(a, b, c2, d, f, e);
}
function gi(a, b, c2, d, e, f) {
  ei(a, b);
  var g = (b.effectTag & 64) !== 0;
  if (!d && !g)
    return e && Hf(b, c2, false), $h(a, b, f);
  d = b.stateNode;
  Yh.current = b;
  var h = g && typeof c2.getDerivedStateFromError !== "function" ? null : d.render();
  b.effectTag |= 1;
  a !== null && g ? (b.child = Xg(b, a.child, null, f), b.child = Xg(b, null, h, f)) : R(a, b, h, f);
  b.memoizedState = d.state;
  e && Hf(b, c2, true);
  return b.child;
}
function hi(a) {
  var b = a.stateNode;
  b.pendingContext ? Ef(a, b.pendingContext, b.pendingContext !== b.context) : b.context && Ef(a, b.context, false);
  dh(a, b.containerInfo);
}
var ii = { dehydrated: null, retryTime: 0 };
function ji(a, b, c2) {
  var d = b.mode, e = b.pendingProps, f = M.current, g = false, h;
  (h = (b.effectTag & 64) !== 0) || (h = (f & 2) !== 0 && (a === null || a.memoizedState !== null));
  h ? (g = true, b.effectTag &= -65) : a !== null && a.memoizedState === null || e.fallback === void 0 || e.unstable_avoidThisFallback === true || (f |= 1);
  I(M, f & 1);
  if (a === null) {
    e.fallback !== void 0 && Uh(b);
    if (g) {
      g = e.fallback;
      e = Wg(null, d, 0, null);
      e.return = b;
      if ((b.mode & 2) === 0)
        for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
          a.return = e, a = a.sibling;
      c2 = Wg(g, d, c2, null);
      c2.return = b;
      e.sibling = c2;
      b.memoizedState = ii;
      b.child = e;
      return c2;
    }
    d = e.children;
    b.memoizedState = null;
    return b.child = Yg(b, null, d, c2);
  }
  if (a.memoizedState !== null) {
    a = a.child;
    d = a.sibling;
    if (g) {
      e = e.fallback;
      c2 = Sg(a, a.pendingProps);
      c2.return = b;
      if ((b.mode & 2) === 0 && (g = b.memoizedState !== null ? b.child.child : b.child, g !== a.child))
        for (c2.child = g; g !== null; )
          g.return = c2, g = g.sibling;
      d = Sg(d, e);
      d.return = b;
      c2.sibling = d;
      c2.childExpirationTime = 0;
      b.memoizedState = ii;
      b.child = c2;
      return d;
    }
    c2 = Xg(b, a.child, e.children, c2);
    b.memoizedState = null;
    return b.child = c2;
  }
  a = a.child;
  if (g) {
    g = e.fallback;
    e = Wg(null, d, 0, null);
    e.return = b;
    e.child = a;
    a !== null && (a.return = e);
    if ((b.mode & 2) === 0)
      for (a = b.memoizedState !== null ? b.child.child : b.child, e.child = a; a !== null; )
        a.return = e, a = a.sibling;
    c2 = Wg(g, d, c2, null);
    c2.return = b;
    e.sibling = c2;
    c2.effectTag |= 2;
    e.childExpirationTime = 0;
    b.memoizedState = ii;
    b.child = e;
    return c2;
  }
  b.memoizedState = null;
  return b.child = Xg(b, a, e.children, c2);
}
function ki(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c2 = a.alternate;
  c2 !== null && c2.expirationTime < b && (c2.expirationTime = b);
  pg(a.return, b);
}
function li(a, b, c2, d, e, f) {
  var g = a.memoizedState;
  g === null ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c2, tailExpiration: 0, tailMode: e, lastEffect: f } : (g.isBackwards = b, g.rendering = null, g.renderingStartTime = 0, g.last = d, g.tail = c2, g.tailExpiration = 0, g.tailMode = e, g.lastEffect = f);
}
function mi(a, b, c2) {
  var d = b.pendingProps, e = d.revealOrder, f = d.tail;
  R(a, b, d.children, c2);
  d = M.current;
  if ((d & 2) !== 0)
    d = d & 1 | 2, b.effectTag |= 64;
  else {
    if (a !== null && (a.effectTag & 64) !== 0)
      a:
        for (a = b.child; a !== null; ) {
          if (a.tag === 13)
            a.memoizedState !== null && ki(a, c2);
          else if (a.tag === 19)
            ki(a, c2);
          else if (a.child !== null) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b)
            break a;
          for (; a.sibling === null; ) {
            if (a.return === null || a.return === b)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  I(M, d);
  if ((b.mode & 2) === 0)
    b.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c2 = b.child;
        for (e = null; c2 !== null; )
          a = c2.alternate, a !== null && hh(a) === null && (e = c2), c2 = c2.sibling;
        c2 = e;
        c2 === null ? (e = b.child, b.child = null) : (e = c2.sibling, c2.sibling = null);
        li(b, false, e, c2, f, b.lastEffect);
        break;
      case "backwards":
        c2 = null;
        e = b.child;
        for (b.child = null; e !== null; ) {
          a = e.alternate;
          if (a !== null && hh(a) === null) {
            b.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c2;
          c2 = e;
          e = a;
        }
        li(b, true, c2, null, f, b.lastEffect);
        break;
      case "together":
        li(b, false, null, null, void 0, b.lastEffect);
        break;
      default:
        b.memoizedState = null;
    }
  return b.child;
}
function $h(a, b, c2) {
  a !== null && (b.dependencies = a.dependencies);
  var d = b.expirationTime;
  d !== 0 && Bg(d);
  if (b.childExpirationTime < c2)
    return null;
  if (a !== null && b.child !== a.child)
    throw Error(u(153));
  if (b.child !== null) {
    a = b.child;
    c2 = Sg(a, a.pendingProps);
    b.child = c2;
    for (c2.return = b; a.sibling !== null; )
      a = a.sibling, c2 = c2.sibling = Sg(a, a.pendingProps), c2.return = b;
    c2.sibling = null;
  }
  return b.child;
}
var ni, oi, pi, qi;
ni = function(a, b) {
  for (var c2 = b.child; c2 !== null; ) {
    if (c2.tag === 5 || c2.tag === 6)
      a.appendChild(c2.stateNode);
    else if (c2.tag !== 4 && c2.child !== null) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b)
      break;
    for (; c2.sibling === null; ) {
      if (c2.return === null || c2.return === b)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
oi = function() {
};
pi = function(a, b, c2, d, e) {
  var f = a.memoizedProps;
  if (f !== d) {
    var g = b.stateNode;
    ch($g.current);
    a = null;
    switch (c2) {
      case "input":
        f = zb(g, f);
        d = zb(g, d);
        a = [];
        break;
      case "option":
        f = Gb(g, f);
        d = Gb(g, d);
        a = [];
        break;
      case "select":
        f = n({}, f, { value: void 0 });
        d = n({}, d, { value: void 0 });
        a = [];
        break;
      case "textarea":
        f = Ib(g, f);
        d = Ib(g, d);
        a = [];
        break;
      default:
        typeof f.onClick !== "function" && typeof d.onClick === "function" && (g.onclick = sd);
    }
    od(c2, d);
    var h, k;
    c2 = null;
    for (h in f)
      if (!d.hasOwnProperty(h) && f.hasOwnProperty(h) && f[h] != null)
        if (h === "style")
          for (k in g = f[h], g)
            g.hasOwnProperty(k) && (c2 || (c2 = {}), c2[k] = "");
        else
          h !== "dangerouslySetInnerHTML" && h !== "children" && h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (va.hasOwnProperty(h) ? a || (a = []) : (a = a || []).push(h, null));
    for (h in d) {
      var l2 = d[h];
      g = f != null ? f[h] : void 0;
      if (d.hasOwnProperty(h) && l2 !== g && (l2 != null || g != null))
        if (h === "style")
          if (g) {
            for (k in g)
              !g.hasOwnProperty(k) || l2 && l2.hasOwnProperty(k) || (c2 || (c2 = {}), c2[k] = "");
            for (k in l2)
              l2.hasOwnProperty(k) && g[k] !== l2[k] && (c2 || (c2 = {}), c2[k] = l2[k]);
          } else
            c2 || (a || (a = []), a.push(h, c2)), c2 = l2;
        else
          h === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, g = g ? g.__html : void 0, l2 != null && g !== l2 && (a = a || []).push(h, l2)) : h === "children" ? g === l2 || typeof l2 !== "string" && typeof l2 !== "number" || (a = a || []).push(h, "" + l2) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && (va.hasOwnProperty(h) ? (l2 != null && rd(e, h), a || g === l2 || (a = [])) : (a = a || []).push(h, l2));
    }
    c2 && (a = a || []).push("style", c2);
    e = a;
    if (b.updateQueue = e)
      b.effectTag |= 4;
  }
};
qi = function(a, b, c2, d) {
  c2 !== d && (b.effectTag |= 4);
};
function ri(a, b) {
  switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c2 = null; b !== null; )
        b.alternate !== null && (c2 = b), b = b.sibling;
      c2 === null ? a.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a.tail;
      for (var d = null; c2 !== null; )
        c2.alternate !== null && (d = c2), c2 = c2.sibling;
      d === null ? b || a.tail === null ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function si(a, b, c2) {
  var d = b.pendingProps;
  switch (b.tag) {
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
      return null;
    case 1:
      return L(b.type) && Df(), null;
    case 3:
      return eh(), H(K), H(J), c2 = b.stateNode, c2.pendingContext && (c2.context = c2.pendingContext, c2.pendingContext = null), a !== null && a.child !== null || !Wh(b) || (b.effectTag |= 4), oi(b), null;
    case 5:
      gh(b);
      c2 = ch(bh.current);
      var e = b.type;
      if (a !== null && b.stateNode != null)
        pi(a, b, e, d, c2), a.ref !== b.ref && (b.effectTag |= 128);
      else {
        if (!d) {
          if (b.stateNode === null)
            throw Error(u(166));
          return null;
        }
        a = ch($g.current);
        if (Wh(b)) {
          d = b.stateNode;
          e = b.type;
          var f = b.memoizedProps;
          d[Md] = b;
          d[Nd] = f;
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", d);
              break;
            case "video":
            case "audio":
              for (a = 0; a < ac.length; a++)
                F(ac[a], d);
              break;
            case "source":
              F("error", d);
              break;
            case "img":
            case "image":
            case "link":
              F("error", d);
              F("load", d);
              break;
            case "form":
              F("reset", d);
              F("submit", d);
              break;
            case "details":
              F("toggle", d);
              break;
            case "input":
              Ab(d, f);
              F("invalid", d);
              rd(c2, "onChange");
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f.multiple };
              F("invalid", d);
              rd(c2, "onChange");
              break;
            case "textarea":
              Jb(d, f), F("invalid", d), rd(c2, "onChange");
          }
          od(e, f);
          a = null;
          for (var g in f)
            if (f.hasOwnProperty(g)) {
              var h = f[g];
              g === "children" ? typeof h === "string" ? d.textContent !== h && (a = ["children", h]) : typeof h === "number" && d.textContent !== "" + h && (a = ["children", "" + h]) : va.hasOwnProperty(g) && h != null && rd(c2, g);
            }
          switch (e) {
            case "input":
              xb(d);
              Eb(d, f, true);
              break;
            case "textarea":
              xb(d);
              Lb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof f.onClick === "function" && (d.onclick = sd);
          }
          c2 = a;
          b.updateQueue = c2;
          c2 !== null && (b.effectTag |= 4);
        } else {
          g = c2.nodeType === 9 ? c2 : c2.ownerDocument;
          a === qd && (a = Nb(e));
          a === qd ? e === "script" ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : typeof d.is === "string" ? a = g.createElement(e, { is: d.is }) : (a = g.createElement(e), e === "select" && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, e);
          a[Md] = b;
          a[Nd] = d;
          ni(a, b, false, false);
          b.stateNode = a;
          g = pd(e, d);
          switch (e) {
            case "iframe":
            case "object":
            case "embed":
              F("load", a);
              h = d;
              break;
            case "video":
            case "audio":
              for (h = 0; h < ac.length; h++)
                F(ac[h], a);
              h = d;
              break;
            case "source":
              F("error", a);
              h = d;
              break;
            case "img":
            case "image":
            case "link":
              F("error", a);
              F("load", a);
              h = d;
              break;
            case "form":
              F("reset", a);
              F("submit", a);
              h = d;
              break;
            case "details":
              F("toggle", a);
              h = d;
              break;
            case "input":
              Ab(a, d);
              h = zb(a, d);
              F("invalid", a);
              rd(c2, "onChange");
              break;
            case "option":
              h = Gb(a, d);
              break;
            case "select":
              a._wrapperState = { wasMultiple: !!d.multiple };
              h = n({}, d, { value: void 0 });
              F("invalid", a);
              rd(c2, "onChange");
              break;
            case "textarea":
              Jb(a, d);
              h = Ib(a, d);
              F("invalid", a);
              rd(c2, "onChange");
              break;
            default:
              h = d;
          }
          od(e, h);
          var k = h;
          for (f in k)
            if (k.hasOwnProperty(f)) {
              var l2 = k[f];
              f === "style" ? md(a, l2) : f === "dangerouslySetInnerHTML" ? (l2 = l2 ? l2.__html : void 0, l2 != null && Qb(a, l2)) : f === "children" ? typeof l2 === "string" ? (e !== "textarea" || l2 !== "") && Rb(a, l2) : typeof l2 === "number" && Rb(a, "" + l2) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (va.hasOwnProperty(f) ? l2 != null && rd(c2, f) : l2 != null && Xa(a, f, l2, g));
            }
          switch (e) {
            case "input":
              xb(a);
              Eb(a, d, false);
              break;
            case "textarea":
              xb(a);
              Lb(a);
              break;
            case "option":
              d.value != null && a.setAttribute("value", "" + rb(d.value));
              break;
            case "select":
              a.multiple = !!d.multiple;
              c2 = d.value;
              c2 != null ? Hb(a, !!d.multiple, c2, false) : d.defaultValue != null && Hb(a, !!d.multiple, d.defaultValue, true);
              break;
            default:
              typeof h.onClick === "function" && (a.onclick = sd);
          }
          Fd(e, d) && (b.effectTag |= 4);
        }
        b.ref !== null && (b.effectTag |= 128);
      }
      return null;
    case 6:
      if (a && b.stateNode != null)
        qi(a, b, a.memoizedProps, d);
      else {
        if (typeof d !== "string" && b.stateNode === null)
          throw Error(u(166));
        c2 = ch(bh.current);
        ch($g.current);
        Wh(b) ? (c2 = b.stateNode, d = b.memoizedProps, c2[Md] = b, c2.nodeValue !== d && (b.effectTag |= 4)) : (c2 = (c2.nodeType === 9 ? c2 : c2.ownerDocument).createTextNode(d), c2[Md] = b, b.stateNode = c2);
      }
      return null;
    case 13:
      H(M);
      d = b.memoizedState;
      if ((b.effectTag & 64) !== 0)
        return b.expirationTime = c2, b;
      c2 = d !== null;
      d = false;
      a === null ? b.memoizedProps.fallback !== void 0 && Wh(b) : (e = a.memoizedState, d = e !== null, c2 || e === null || (e = a.child.sibling, e !== null && (f = b.firstEffect, f !== null ? (b.firstEffect = e, e.nextEffect = f) : (b.firstEffect = b.lastEffect = e, e.nextEffect = null), e.effectTag = 8)));
      if (c2 && !d && (b.mode & 2) !== 0)
        if (a === null && b.memoizedProps.unstable_avoidThisFallback !== true || (M.current & 1) !== 0)
          S === ti && (S = ui);
        else {
          if (S === ti || S === ui)
            S = vi;
          wi !== 0 && T !== null && (xi(T, U), yi(T, wi));
        }
      if (c2 || d)
        b.effectTag |= 4;
      return null;
    case 4:
      return eh(), oi(b), null;
    case 10:
      return og(b), null;
    case 17:
      return L(b.type) && Df(), null;
    case 19:
      H(M);
      d = b.memoizedState;
      if (d === null)
        return null;
      e = (b.effectTag & 64) !== 0;
      f = d.rendering;
      if (f === null)
        if (e)
          ri(d, false);
        else {
          if (S !== ti || a !== null && (a.effectTag & 64) !== 0)
            for (f = b.child; f !== null; ) {
              a = hh(f);
              if (a !== null) {
                b.effectTag |= 64;
                ri(d, false);
                e = a.updateQueue;
                e !== null && (b.updateQueue = e, b.effectTag |= 4);
                d.lastEffect === null && (b.firstEffect = null);
                b.lastEffect = d.lastEffect;
                for (d = b.child; d !== null; )
                  e = d, f = c2, e.effectTag &= 2, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null, a = e.alternate, a === null ? (e.childExpirationTime = 0, e.expirationTime = f, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null) : (e.childExpirationTime = a.childExpirationTime, e.expirationTime = a.expirationTime, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, f = a.dependencies, e.dependencies = f === null ? null : { expirationTime: f.expirationTime, firstContext: f.firstContext, responders: f.responders }), d = d.sibling;
                I(M, M.current & 1 | 2);
                return b.child;
              }
              f = f.sibling;
            }
        }
      else {
        if (!e)
          if (a = hh(f), a !== null) {
            if (b.effectTag |= 64, e = true, c2 = a.updateQueue, c2 !== null && (b.updateQueue = c2, b.effectTag |= 4), ri(d, true), d.tail === null && d.tailMode === "hidden" && !f.alternate)
              return b = b.lastEffect = d.lastEffect, b !== null && (b.nextEffect = null), null;
          } else
            2 * $f() - d.renderingStartTime > d.tailExpiration && 1 < c2 && (b.effectTag |= 64, e = true, ri(d, false), b.expirationTime = b.childExpirationTime = c2 - 1);
        d.isBackwards ? (f.sibling = b.child, b.child = f) : (c2 = d.last, c2 !== null ? c2.sibling = f : b.child = f, d.last = f);
      }
      return d.tail !== null ? (d.tailExpiration === 0 && (d.tailExpiration = $f() + 500), c2 = d.tail, d.rendering = c2, d.tail = c2.sibling, d.lastEffect = b.lastEffect, d.renderingStartTime = $f(), c2.sibling = null, b = M.current, I(M, e ? b & 1 | 2 : b & 1), c2) : null;
  }
  throw Error(u(156, b.tag));
}
function zi(a) {
  switch (a.tag) {
    case 1:
      L(a.type) && Df();
      var b = a.effectTag;
      return b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 3:
      eh();
      H(K);
      H(J);
      b = a.effectTag;
      if ((b & 64) !== 0)
        throw Error(u(285));
      a.effectTag = b & -4097 | 64;
      return a;
    case 5:
      return gh(a), null;
    case 13:
      return H(M), b = a.effectTag, b & 4096 ? (a.effectTag = b & -4097 | 64, a) : null;
    case 19:
      return H(M), null;
    case 4:
      return eh(), null;
    case 10:
      return og(a), null;
    default:
      return null;
  }
}
function Ai(a, b) {
  return { value: a, source: b, stack: qb(b) };
}
var Bi = typeof WeakSet === "function" ? WeakSet : Set;
function Ci(a, b) {
  var c2 = b.source, d = b.stack;
  d === null && c2 !== null && (d = qb(c2));
  c2 !== null && pb(c2.type);
  b = b.value;
  a !== null && a.tag === 1 && pb(a.type);
  try {
    console.error(b);
  } catch (e) {
    setTimeout(function() {
      throw e;
    });
  }
}
function Di(a, b) {
  try {
    b.props = a.memoizedProps, b.state = a.memoizedState, b.componentWillUnmount();
  } catch (c2) {
    Ei(a, c2);
  }
}
function Fi(a) {
  var b = a.ref;
  if (b !== null)
    if (typeof b === "function")
      try {
        b(null);
      } catch (c2) {
        Ei(a, c2);
      }
    else
      b.current = null;
}
function Gi(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      return;
    case 1:
      if (b.effectTag & 256 && a !== null) {
        var c2 = a.memoizedProps, d = a.memoizedState;
        a = b.stateNode;
        b = a.getSnapshotBeforeUpdate(b.elementType === b.type ? c2 : ig(b.type, c2), d);
        a.__reactInternalSnapshotBeforeUpdate = b;
      }
      return;
    case 3:
    case 5:
    case 6:
    case 4:
    case 17:
      return;
  }
  throw Error(u(163));
}
function Hi(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c2 = b = b.next;
    do {
      if ((c2.tag & a) === a) {
        var d = c2.destroy;
        c2.destroy = void 0;
        d !== void 0 && d();
      }
      c2 = c2.next;
    } while (c2 !== b);
  }
}
function Ii(a, b) {
  b = b.updateQueue;
  b = b !== null ? b.lastEffect : null;
  if (b !== null) {
    var c2 = b = b.next;
    do {
      if ((c2.tag & a) === a) {
        var d = c2.create;
        c2.destroy = d();
      }
      c2 = c2.next;
    } while (c2 !== b);
  }
}
function Ji(a, b, c2) {
  switch (c2.tag) {
    case 0:
    case 11:
    case 15:
    case 22:
      Ii(3, c2);
      return;
    case 1:
      a = c2.stateNode;
      if (c2.effectTag & 4)
        if (b === null)
          a.componentDidMount();
        else {
          var d = c2.elementType === c2.type ? b.memoizedProps : ig(c2.type, b.memoizedProps);
          a.componentDidUpdate(d, b.memoizedState, a.__reactInternalSnapshotBeforeUpdate);
        }
      b = c2.updateQueue;
      b !== null && Cg(c2, b, a);
      return;
    case 3:
      b = c2.updateQueue;
      if (b !== null) {
        a = null;
        if (c2.child !== null)
          switch (c2.child.tag) {
            case 5:
              a = c2.child.stateNode;
              break;
            case 1:
              a = c2.child.stateNode;
          }
        Cg(c2, b, a);
      }
      return;
    case 5:
      a = c2.stateNode;
      b === null && c2.effectTag & 4 && Fd(c2.type, c2.memoizedProps) && a.focus();
      return;
    case 6:
      return;
    case 4:
      return;
    case 12:
      return;
    case 13:
      c2.memoizedState === null && (c2 = c2.alternate, c2 !== null && (c2 = c2.memoizedState, c2 !== null && (c2 = c2.dehydrated, c2 !== null && Vc(c2))));
      return;
    case 19:
    case 17:
    case 20:
    case 21:
      return;
  }
  throw Error(u(163));
}
function Ki(a, b, c2) {
  typeof Li === "function" && Li(b);
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      a = b.updateQueue;
      if (a !== null && (a = a.lastEffect, a !== null)) {
        var d = a.next;
        cg(97 < c2 ? 97 : c2, function() {
          var a2 = d;
          do {
            var c3 = a2.destroy;
            if (c3 !== void 0) {
              var g = b;
              try {
                c3();
              } catch (h) {
                Ei(g, h);
              }
            }
            a2 = a2.next;
          } while (a2 !== d);
        });
      }
      break;
    case 1:
      Fi(b);
      c2 = b.stateNode;
      typeof c2.componentWillUnmount === "function" && Di(b, c2);
      break;
    case 5:
      Fi(b);
      break;
    case 4:
      Mi(a, b, c2);
  }
}
function Ni(a) {
  var b = a.alternate;
  a.return = null;
  a.child = null;
  a.memoizedState = null;
  a.updateQueue = null;
  a.dependencies = null;
  a.alternate = null;
  a.firstEffect = null;
  a.lastEffect = null;
  a.pendingProps = null;
  a.memoizedProps = null;
  a.stateNode = null;
  b !== null && Ni(b);
}
function Oi(a) {
  return a.tag === 5 || a.tag === 3 || a.tag === 4;
}
function Pi(a) {
  a: {
    for (var b = a.return; b !== null; ) {
      if (Oi(b)) {
        var c2 = b;
        break a;
      }
      b = b.return;
    }
    throw Error(u(160));
  }
  b = c2.stateNode;
  switch (c2.tag) {
    case 5:
      var d = false;
      break;
    case 3:
      b = b.containerInfo;
      d = true;
      break;
    case 4:
      b = b.containerInfo;
      d = true;
      break;
    default:
      throw Error(u(161));
  }
  c2.effectTag & 16 && (Rb(b, ""), c2.effectTag &= -17);
  a:
    b:
      for (c2 = a; ; ) {
        for (; c2.sibling === null; ) {
          if (c2.return === null || Oi(c2.return)) {
            c2 = null;
            break a;
          }
          c2 = c2.return;
        }
        c2.sibling.return = c2.return;
        for (c2 = c2.sibling; c2.tag !== 5 && c2.tag !== 6 && c2.tag !== 18; ) {
          if (c2.effectTag & 2)
            continue b;
          if (c2.child === null || c2.tag === 4)
            continue b;
          else
            c2.child.return = c2, c2 = c2.child;
        }
        if (!(c2.effectTag & 2)) {
          c2 = c2.stateNode;
          break a;
        }
      }
  d ? Qi(a, c2, b) : Ri(a, c2, b);
}
function Qi(a, b, c2) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c2.nodeType === 8 ? c2.parentNode.insertBefore(a, b) : c2.insertBefore(a, b) : (c2.nodeType === 8 ? (b = c2.parentNode, b.insertBefore(a, c2)) : (b = c2, b.appendChild(a)), c2 = c2._reactRootContainer, c2 !== null && c2 !== void 0 || b.onclick !== null || (b.onclick = sd));
  else if (d !== 4 && (a = a.child, a !== null))
    for (Qi(a, b, c2), a = a.sibling; a !== null; )
      Qi(a, b, c2), a = a.sibling;
}
function Ri(a, b, c2) {
  var d = a.tag, e = d === 5 || d === 6;
  if (e)
    a = e ? a.stateNode : a.stateNode.instance, b ? c2.insertBefore(a, b) : c2.appendChild(a);
  else if (d !== 4 && (a = a.child, a !== null))
    for (Ri(a, b, c2), a = a.sibling; a !== null; )
      Ri(a, b, c2), a = a.sibling;
}
function Mi(a, b, c2) {
  for (var d = b, e = false, f, g; ; ) {
    if (!e) {
      e = d.return;
      a:
        for (; ; ) {
          if (e === null)
            throw Error(u(160));
          f = e.stateNode;
          switch (e.tag) {
            case 5:
              g = false;
              break a;
            case 3:
              f = f.containerInfo;
              g = true;
              break a;
            case 4:
              f = f.containerInfo;
              g = true;
              break a;
          }
          e = e.return;
        }
      e = true;
    }
    if (d.tag === 5 || d.tag === 6) {
      a:
        for (var h = a, k = d, l2 = c2, m = k; ; )
          if (Ki(h, m, l2), m.child !== null && m.tag !== 4)
            m.child.return = m, m = m.child;
          else {
            if (m === k)
              break a;
            for (; m.sibling === null; ) {
              if (m.return === null || m.return === k)
                break a;
              m = m.return;
            }
            m.sibling.return = m.return;
            m = m.sibling;
          }
      g ? (h = f, k = d.stateNode, h.nodeType === 8 ? h.parentNode.removeChild(k) : h.removeChild(k)) : f.removeChild(d.stateNode);
    } else if (d.tag === 4) {
      if (d.child !== null) {
        f = d.stateNode.containerInfo;
        g = true;
        d.child.return = d;
        d = d.child;
        continue;
      }
    } else if (Ki(a, d, c2), d.child !== null) {
      d.child.return = d;
      d = d.child;
      continue;
    }
    if (d === b)
      break;
    for (; d.sibling === null; ) {
      if (d.return === null || d.return === b)
        return;
      d = d.return;
      d.tag === 4 && (e = false);
    }
    d.sibling.return = d.return;
    d = d.sibling;
  }
}
function Si(a, b) {
  switch (b.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
    case 22:
      Hi(3, b);
      return;
    case 1:
      return;
    case 5:
      var c2 = b.stateNode;
      if (c2 != null) {
        var d = b.memoizedProps, e = a !== null ? a.memoizedProps : d;
        a = b.type;
        var f = b.updateQueue;
        b.updateQueue = null;
        if (f !== null) {
          c2[Nd] = d;
          a === "input" && d.type === "radio" && d.name != null && Bb(c2, d);
          pd(a, e);
          b = pd(a, d);
          for (e = 0; e < f.length; e += 2) {
            var g = f[e], h = f[e + 1];
            g === "style" ? md(c2, h) : g === "dangerouslySetInnerHTML" ? Qb(c2, h) : g === "children" ? Rb(c2, h) : Xa(c2, g, h, b);
          }
          switch (a) {
            case "input":
              Cb(c2, d);
              break;
            case "textarea":
              Kb(c2, d);
              break;
            case "select":
              b = c2._wrapperState.wasMultiple, c2._wrapperState.wasMultiple = !!d.multiple, a = d.value, a != null ? Hb(c2, !!d.multiple, a, false) : b !== !!d.multiple && (d.defaultValue != null ? Hb(c2, !!d.multiple, d.defaultValue, true) : Hb(c2, !!d.multiple, d.multiple ? [] : "", false));
          }
        }
      }
      return;
    case 6:
      if (b.stateNode === null)
        throw Error(u(162));
      b.stateNode.nodeValue = b.memoizedProps;
      return;
    case 3:
      b = b.stateNode;
      b.hydrate && (b.hydrate = false, Vc(b.containerInfo));
      return;
    case 12:
      return;
    case 13:
      c2 = b;
      b.memoizedState === null ? d = false : (d = true, c2 = b.child, Ti = $f());
      if (c2 !== null)
        a:
          for (a = c2; ; ) {
            if (a.tag === 5)
              f = a.stateNode, d ? (f = f.style, typeof f.setProperty === "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (f = a.stateNode, e = a.memoizedProps.style, e = e !== void 0 && e !== null && e.hasOwnProperty("display") ? e.display : null, f.style.display = ld("display", e));
            else if (a.tag === 6)
              a.stateNode.nodeValue = d ? "" : a.memoizedProps;
            else if (a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null) {
              f = a.child.sibling;
              f.return = a;
              a = f;
              continue;
            } else if (a.child !== null) {
              a.child.return = a;
              a = a.child;
              continue;
            }
            if (a === c2)
              break;
            for (; a.sibling === null; ) {
              if (a.return === null || a.return === c2)
                break a;
              a = a.return;
            }
            a.sibling.return = a.return;
            a = a.sibling;
          }
      Ui(b);
      return;
    case 19:
      Ui(b);
      return;
    case 17:
      return;
  }
  throw Error(u(163));
}
function Ui(a) {
  var b = a.updateQueue;
  if (b !== null) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    c2 === null && (c2 = a.stateNode = new Bi());
    b.forEach(function(b2) {
      var d = Vi.bind(null, a, b2);
      c2.has(b2) || (c2.add(b2), b2.then(d, d));
    });
  }
}
var Wi = typeof WeakMap === "function" ? WeakMap : Map;
function Xi(a, b, c2) {
  c2 = wg(c2, null);
  c2.tag = 3;
  c2.payload = { element: null };
  var d = b.value;
  c2.callback = function() {
    Yi || (Yi = true, Zi = d);
    Ci(a, b);
  };
  return c2;
}
function $i(a, b, c2) {
  c2 = wg(c2, null);
  c2.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if (typeof d === "function") {
    var e = b.value;
    c2.payload = function() {
      Ci(a, b);
      return d(e);
    };
  }
  var f = a.stateNode;
  f !== null && typeof f.componentDidCatch === "function" && (c2.callback = function() {
    typeof d !== "function" && (aj === null ? aj = new Set([this]) : aj.add(this), Ci(a, b));
    var c3 = b.stack;
    this.componentDidCatch(b.value, { componentStack: c3 !== null ? c3 : "" });
  });
  return c2;
}
var bj = Math.ceil, cj = Wa.ReactCurrentDispatcher, dj = Wa.ReactCurrentOwner, V = 0, ej = 8, fj = 16, gj = 32, ti = 0, hj = 1, ij = 2, ui = 3, vi = 4, jj = 5, W = V, T = null, X = null, U = 0, S = ti, kj = null, lj = 1073741823, mj = 1073741823, nj = null, wi = 0, oj = false, Ti = 0, pj = 500, Y = null, Yi = false, Zi = null, aj = null, qj = false, rj = null, sj = 90, tj = null, uj = 0, vj = null, wj = 0;
function Gg() {
  return (W & (fj | gj)) !== V ? 1073741821 - ($f() / 10 | 0) : wj !== 0 ? wj : wj = 1073741821 - ($f() / 10 | 0);
}
function Hg(a, b, c2) {
  b = b.mode;
  if ((b & 2) === 0)
    return 1073741823;
  var d = ag();
  if ((b & 4) === 0)
    return d === 99 ? 1073741823 : 1073741822;
  if ((W & fj) !== V)
    return U;
  if (c2 !== null)
    a = hg(a, c2.timeoutMs | 0 || 5e3, 250);
  else
    switch (d) {
      case 99:
        a = 1073741823;
        break;
      case 98:
        a = hg(a, 150, 100);
        break;
      case 97:
      case 96:
        a = hg(a, 5e3, 250);
        break;
      case 95:
        a = 2;
        break;
      default:
        throw Error(u(326));
    }
  T !== null && a === U && --a;
  return a;
}
function Ig(a, b) {
  if (50 < uj)
    throw uj = 0, vj = null, Error(u(185));
  a = xj(a, b);
  if (a !== null) {
    var c2 = ag();
    b === 1073741823 ? (W & ej) !== V && (W & (fj | gj)) === V ? yj(a) : (Z(a), W === V && gg()) : Z(a);
    (W & 4) === V || c2 !== 98 && c2 !== 99 || (tj === null ? tj = new Map([[a, b]]) : (c2 = tj.get(a), (c2 === void 0 || c2 > b) && tj.set(a, b)));
  }
}
function xj(a, b) {
  a.expirationTime < b && (a.expirationTime = b);
  var c2 = a.alternate;
  c2 !== null && c2.expirationTime < b && (c2.expirationTime = b);
  var d = a.return, e = null;
  if (d === null && a.tag === 3)
    e = a.stateNode;
  else
    for (; d !== null; ) {
      c2 = d.alternate;
      d.childExpirationTime < b && (d.childExpirationTime = b);
      c2 !== null && c2.childExpirationTime < b && (c2.childExpirationTime = b);
      if (d.return === null && d.tag === 3) {
        e = d.stateNode;
        break;
      }
      d = d.return;
    }
  e !== null && (T === e && (Bg(b), S === vi && xi(e, U)), yi(e, b));
  return e;
}
function zj(a) {
  var b = a.lastExpiredTime;
  if (b !== 0)
    return b;
  b = a.firstPendingTime;
  if (!Aj(a, b))
    return b;
  var c2 = a.lastPingedTime;
  a = a.nextKnownPendingLevel;
  a = c2 > a ? c2 : a;
  return 2 >= a && b !== a ? 0 : a;
}
function Z(a) {
  if (a.lastExpiredTime !== 0)
    a.callbackExpirationTime = 1073741823, a.callbackPriority = 99, a.callbackNode = eg(yj.bind(null, a));
  else {
    var b = zj(a), c2 = a.callbackNode;
    if (b === 0)
      c2 !== null && (a.callbackNode = null, a.callbackExpirationTime = 0, a.callbackPriority = 90);
    else {
      var d = Gg();
      b === 1073741823 ? d = 99 : b === 1 || b === 2 ? d = 95 : (d = 10 * (1073741821 - b) - 10 * (1073741821 - d), d = 0 >= d ? 99 : 250 >= d ? 98 : 5250 >= d ? 97 : 95);
      if (c2 !== null) {
        var e = a.callbackPriority;
        if (a.callbackExpirationTime === b && e >= d)
          return;
        c2 !== Tf && Kf(c2);
      }
      a.callbackExpirationTime = b;
      a.callbackPriority = d;
      b = b === 1073741823 ? eg(yj.bind(null, a)) : dg(d, Bj.bind(null, a), { timeout: 10 * (1073741821 - b) - $f() });
      a.callbackNode = b;
    }
  }
}
function Bj(a, b) {
  wj = 0;
  if (b)
    return b = Gg(), Cj(a, b), Z(a), null;
  var c2 = zj(a);
  if (c2 !== 0) {
    b = a.callbackNode;
    if ((W & (fj | gj)) !== V)
      throw Error(u(327));
    Dj();
    a === T && c2 === U || Ej(a, c2);
    if (X !== null) {
      var d = W;
      W |= fj;
      var e = Fj();
      do
        try {
          Gj();
          break;
        } catch (h) {
          Hj(a, h);
        }
      while (1);
      ng();
      W = d;
      cj.current = e;
      if (S === hj)
        throw b = kj, Ej(a, c2), xi(a, c2), Z(a), b;
      if (X === null)
        switch (e = a.finishedWork = a.current.alternate, a.finishedExpirationTime = c2, d = S, T = null, d) {
          case ti:
          case hj:
            throw Error(u(345));
          case ij:
            Cj(a, 2 < c2 ? 2 : c2);
            break;
          case ui:
            xi(a, c2);
            d = a.lastSuspendedTime;
            c2 === d && (a.nextKnownPendingLevel = Ij(e));
            if (lj === 1073741823 && (e = Ti + pj - $f(), 10 < e)) {
              if (oj) {
                var f = a.lastPingedTime;
                if (f === 0 || f >= c2) {
                  a.lastPingedTime = c2;
                  Ej(a, c2);
                  break;
                }
              }
              f = zj(a);
              if (f !== 0 && f !== c2)
                break;
              if (d !== 0 && d !== c2) {
                a.lastPingedTime = d;
                break;
              }
              a.timeoutHandle = Hd(Jj.bind(null, a), e);
              break;
            }
            Jj(a);
            break;
          case vi:
            xi(a, c2);
            d = a.lastSuspendedTime;
            c2 === d && (a.nextKnownPendingLevel = Ij(e));
            if (oj && (e = a.lastPingedTime, e === 0 || e >= c2)) {
              a.lastPingedTime = c2;
              Ej(a, c2);
              break;
            }
            e = zj(a);
            if (e !== 0 && e !== c2)
              break;
            if (d !== 0 && d !== c2) {
              a.lastPingedTime = d;
              break;
            }
            mj !== 1073741823 ? d = 10 * (1073741821 - mj) - $f() : lj === 1073741823 ? d = 0 : (d = 10 * (1073741821 - lj) - 5e3, e = $f(), c2 = 10 * (1073741821 - c2) - e, d = e - d, 0 > d && (d = 0), d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * bj(d / 1960)) - d, c2 < d && (d = c2));
            if (10 < d) {
              a.timeoutHandle = Hd(Jj.bind(null, a), d);
              break;
            }
            Jj(a);
            break;
          case jj:
            if (lj !== 1073741823 && nj !== null) {
              f = lj;
              var g = nj;
              d = g.busyMinDurationMs | 0;
              0 >= d ? d = 0 : (e = g.busyDelayMs | 0, f = $f() - (10 * (1073741821 - f) - (g.timeoutMs | 0 || 5e3)), d = f <= e ? 0 : e + d - f);
              if (10 < d) {
                xi(a, c2);
                a.timeoutHandle = Hd(Jj.bind(null, a), d);
                break;
              }
            }
            Jj(a);
            break;
          default:
            throw Error(u(329));
        }
      Z(a);
      if (a.callbackNode === b)
        return Bj.bind(null, a);
    }
  }
  return null;
}
function yj(a) {
  var b = a.lastExpiredTime;
  b = b !== 0 ? b : 1073741823;
  if ((W & (fj | gj)) !== V)
    throw Error(u(327));
  Dj();
  a === T && b === U || Ej(a, b);
  if (X !== null) {
    var c2 = W;
    W |= fj;
    var d = Fj();
    do
      try {
        Kj();
        break;
      } catch (e) {
        Hj(a, e);
      }
    while (1);
    ng();
    W = c2;
    cj.current = d;
    if (S === hj)
      throw c2 = kj, Ej(a, b), xi(a, b), Z(a), c2;
    if (X !== null)
      throw Error(u(261));
    a.finishedWork = a.current.alternate;
    a.finishedExpirationTime = b;
    T = null;
    Jj(a);
    Z(a);
  }
  return null;
}
function Lj() {
  if (tj !== null) {
    var a = tj;
    tj = null;
    a.forEach(function(a2, c2) {
      Cj(c2, a2);
      Z(c2);
    });
    gg();
  }
}
function Mj(a, b) {
  var c2 = W;
  W |= 1;
  try {
    return a(b);
  } finally {
    W = c2, W === V && gg();
  }
}
function Nj(a, b) {
  var c2 = W;
  W &= -2;
  W |= ej;
  try {
    return a(b);
  } finally {
    W = c2, W === V && gg();
  }
}
function Ej(a, b) {
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  var c2 = a.timeoutHandle;
  c2 !== -1 && (a.timeoutHandle = -1, Id(c2));
  if (X !== null)
    for (c2 = X.return; c2 !== null; ) {
      var d = c2;
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          d !== null && d !== void 0 && Df();
          break;
        case 3:
          eh();
          H(K);
          H(J);
          break;
        case 5:
          gh(d);
          break;
        case 4:
          eh();
          break;
        case 13:
          H(M);
          break;
        case 19:
          H(M);
          break;
        case 10:
          og(d);
      }
      c2 = c2.return;
    }
  T = a;
  X = Sg(a.current, null);
  U = b;
  S = ti;
  kj = null;
  mj = lj = 1073741823;
  nj = null;
  wi = 0;
  oj = false;
}
function Hj(a, b) {
  do {
    try {
      ng();
      jh.current = sh;
      if (mh)
        for (var c2 = N.memoizedState; c2 !== null; ) {
          var d = c2.queue;
          d !== null && (d.pending = null);
          c2 = c2.next;
        }
      lh = 0;
      P = O = N = null;
      mh = false;
      if (X === null || X.return === null)
        return S = hj, kj = b, X = null;
      a: {
        var e = a, f = X.return, g = X, h = b;
        b = U;
        g.effectTag |= 2048;
        g.firstEffect = g.lastEffect = null;
        if (h !== null && typeof h === "object" && typeof h.then === "function") {
          var k = h;
          if ((g.mode & 2) === 0) {
            var l2 = g.alternate;
            l2 ? (g.updateQueue = l2.updateQueue, g.memoizedState = l2.memoizedState, g.expirationTime = l2.expirationTime) : (g.updateQueue = null, g.memoizedState = null);
          }
          var m = (M.current & 1) !== 0, p2 = f;
          do {
            var x2;
            if (x2 = p2.tag === 13) {
              var z2 = p2.memoizedState;
              if (z2 !== null)
                x2 = z2.dehydrated !== null ? true : false;
              else {
                var ca = p2.memoizedProps;
                x2 = ca.fallback === void 0 ? false : ca.unstable_avoidThisFallback !== true ? true : m ? false : true;
              }
            }
            if (x2) {
              var D2 = p2.updateQueue;
              if (D2 === null) {
                var t2 = new Set();
                t2.add(k);
                p2.updateQueue = t2;
              } else
                D2.add(k);
              if ((p2.mode & 2) === 0) {
                p2.effectTag |= 64;
                g.effectTag &= -2981;
                if (g.tag === 1)
                  if (g.alternate === null)
                    g.tag = 17;
                  else {
                    var y2 = wg(1073741823, null);
                    y2.tag = 2;
                    xg(g, y2);
                  }
                g.expirationTime = 1073741823;
                break a;
              }
              h = void 0;
              g = b;
              var A2 = e.pingCache;
              A2 === null ? (A2 = e.pingCache = new Wi(), h = new Set(), A2.set(k, h)) : (h = A2.get(k), h === void 0 && (h = new Set(), A2.set(k, h)));
              if (!h.has(g)) {
                h.add(g);
                var q2 = Oj.bind(null, e, k, g);
                k.then(q2, q2);
              }
              p2.effectTag |= 4096;
              p2.expirationTime = b;
              break a;
            }
            p2 = p2.return;
          } while (p2 !== null);
          h = Error((pb(g.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + qb(g));
        }
        S !== jj && (S = ij);
        h = Ai(h, g);
        p2 = f;
        do {
          switch (p2.tag) {
            case 3:
              k = h;
              p2.effectTag |= 4096;
              p2.expirationTime = b;
              var B2 = Xi(p2, k, b);
              yg(p2, B2);
              break a;
            case 1:
              k = h;
              var w2 = p2.type, ub = p2.stateNode;
              if ((p2.effectTag & 64) === 0 && (typeof w2.getDerivedStateFromError === "function" || ub !== null && typeof ub.componentDidCatch === "function" && (aj === null || !aj.has(ub)))) {
                p2.effectTag |= 4096;
                p2.expirationTime = b;
                var vb = $i(p2, k, b);
                yg(p2, vb);
                break a;
              }
          }
          p2 = p2.return;
        } while (p2 !== null);
      }
      X = Pj(X);
    } catch (Xc) {
      b = Xc;
      continue;
    }
    break;
  } while (1);
}
function Fj() {
  var a = cj.current;
  cj.current = sh;
  return a === null ? sh : a;
}
function Ag(a, b) {
  a < lj && 2 < a && (lj = a);
  b !== null && a < mj && 2 < a && (mj = a, nj = b);
}
function Bg(a) {
  a > wi && (wi = a);
}
function Kj() {
  for (; X !== null; )
    X = Qj(X);
}
function Gj() {
  for (; X !== null && !Uf(); )
    X = Qj(X);
}
function Qj(a) {
  var b = Rj(a.alternate, a, U);
  a.memoizedProps = a.pendingProps;
  b === null && (b = Pj(a));
  dj.current = null;
  return b;
}
function Pj(a) {
  X = a;
  do {
    var b = X.alternate;
    a = X.return;
    if ((X.effectTag & 2048) === 0) {
      b = si(b, X, U);
      if (U === 1 || X.childExpirationTime !== 1) {
        for (var c2 = 0, d = X.child; d !== null; ) {
          var e = d.expirationTime, f = d.childExpirationTime;
          e > c2 && (c2 = e);
          f > c2 && (c2 = f);
          d = d.sibling;
        }
        X.childExpirationTime = c2;
      }
      if (b !== null)
        return b;
      a !== null && (a.effectTag & 2048) === 0 && (a.firstEffect === null && (a.firstEffect = X.firstEffect), X.lastEffect !== null && (a.lastEffect !== null && (a.lastEffect.nextEffect = X.firstEffect), a.lastEffect = X.lastEffect), 1 < X.effectTag && (a.lastEffect !== null ? a.lastEffect.nextEffect = X : a.firstEffect = X, a.lastEffect = X));
    } else {
      b = zi(X);
      if (b !== null)
        return b.effectTag &= 2047, b;
      a !== null && (a.firstEffect = a.lastEffect = null, a.effectTag |= 2048);
    }
    b = X.sibling;
    if (b !== null)
      return b;
    X = a;
  } while (X !== null);
  S === ti && (S = jj);
  return null;
}
function Ij(a) {
  var b = a.expirationTime;
  a = a.childExpirationTime;
  return b > a ? b : a;
}
function Jj(a) {
  var b = ag();
  cg(99, Sj.bind(null, a, b));
  return null;
}
function Sj(a, b) {
  do
    Dj();
  while (rj !== null);
  if ((W & (fj | gj)) !== V)
    throw Error(u(327));
  var c2 = a.finishedWork, d = a.finishedExpirationTime;
  if (c2 === null)
    return null;
  a.finishedWork = null;
  a.finishedExpirationTime = 0;
  if (c2 === a.current)
    throw Error(u(177));
  a.callbackNode = null;
  a.callbackExpirationTime = 0;
  a.callbackPriority = 90;
  a.nextKnownPendingLevel = 0;
  var e = Ij(c2);
  a.firstPendingTime = e;
  d <= a.lastSuspendedTime ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : d <= a.firstSuspendedTime && (a.firstSuspendedTime = d - 1);
  d <= a.lastPingedTime && (a.lastPingedTime = 0);
  d <= a.lastExpiredTime && (a.lastExpiredTime = 0);
  a === T && (X = T = null, U = 0);
  1 < c2.effectTag ? c2.lastEffect !== null ? (c2.lastEffect.nextEffect = c2, e = c2.firstEffect) : e = c2 : e = c2.firstEffect;
  if (e !== null) {
    var f = W;
    W |= gj;
    dj.current = null;
    Dd = fd;
    var g = xd();
    if (yd(g)) {
      if ("selectionStart" in g)
        var h = { start: g.selectionStart, end: g.selectionEnd };
      else
        a: {
          h = (h = g.ownerDocument) && h.defaultView || window;
          var k = h.getSelection && h.getSelection();
          if (k && k.rangeCount !== 0) {
            h = k.anchorNode;
            var l2 = k.anchorOffset, m = k.focusNode;
            k = k.focusOffset;
            try {
              h.nodeType, m.nodeType;
            } catch (wb) {
              h = null;
              break a;
            }
            var p2 = 0, x2 = -1, z2 = -1, ca = 0, D2 = 0, t2 = g, y2 = null;
            b:
              for (; ; ) {
                for (var A2; ; ) {
                  t2 !== h || l2 !== 0 && t2.nodeType !== 3 || (x2 = p2 + l2);
                  t2 !== m || k !== 0 && t2.nodeType !== 3 || (z2 = p2 + k);
                  t2.nodeType === 3 && (p2 += t2.nodeValue.length);
                  if ((A2 = t2.firstChild) === null)
                    break;
                  y2 = t2;
                  t2 = A2;
                }
                for (; ; ) {
                  if (t2 === g)
                    break b;
                  y2 === h && ++ca === l2 && (x2 = p2);
                  y2 === m && ++D2 === k && (z2 = p2);
                  if ((A2 = t2.nextSibling) !== null)
                    break;
                  t2 = y2;
                  y2 = t2.parentNode;
                }
                t2 = A2;
              }
            h = x2 === -1 || z2 === -1 ? null : { start: x2, end: z2 };
          } else
            h = null;
        }
      h = h || { start: 0, end: 0 };
    } else
      h = null;
    Ed = { activeElementDetached: null, focusedElem: g, selectionRange: h };
    fd = false;
    Y = e;
    do
      try {
        Tj();
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    Y = e;
    do
      try {
        for (g = a, h = b; Y !== null; ) {
          var q2 = Y.effectTag;
          q2 & 16 && Rb(Y.stateNode, "");
          if (q2 & 128) {
            var B2 = Y.alternate;
            if (B2 !== null) {
              var w2 = B2.ref;
              w2 !== null && (typeof w2 === "function" ? w2(null) : w2.current = null);
            }
          }
          switch (q2 & 1038) {
            case 2:
              Pi(Y);
              Y.effectTag &= -3;
              break;
            case 6:
              Pi(Y);
              Y.effectTag &= -3;
              Si(Y.alternate, Y);
              break;
            case 1024:
              Y.effectTag &= -1025;
              break;
            case 1028:
              Y.effectTag &= -1025;
              Si(Y.alternate, Y);
              break;
            case 4:
              Si(Y.alternate, Y);
              break;
            case 8:
              l2 = Y, Mi(g, l2, h), Ni(l2);
          }
          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    w2 = Ed;
    B2 = xd();
    q2 = w2.focusedElem;
    h = w2.selectionRange;
    if (B2 !== q2 && q2 && q2.ownerDocument && wd(q2.ownerDocument.documentElement, q2)) {
      h !== null && yd(q2) && (B2 = h.start, w2 = h.end, w2 === void 0 && (w2 = B2), "selectionStart" in q2 ? (q2.selectionStart = B2, q2.selectionEnd = Math.min(w2, q2.value.length)) : (w2 = (B2 = q2.ownerDocument || document) && B2.defaultView || window, w2.getSelection && (w2 = w2.getSelection(), l2 = q2.textContent.length, g = Math.min(h.start, l2), h = h.end === void 0 ? g : Math.min(h.end, l2), !w2.extend && g > h && (l2 = h, h = g, g = l2), l2 = vd(q2, g), m = vd(q2, h), l2 && m && (w2.rangeCount !== 1 || w2.anchorNode !== l2.node || w2.anchorOffset !== l2.offset || w2.focusNode !== m.node || w2.focusOffset !== m.offset) && (B2 = B2.createRange(), B2.setStart(l2.node, l2.offset), w2.removeAllRanges(), g > h ? (w2.addRange(B2), w2.extend(m.node, m.offset)) : (B2.setEnd(m.node, m.offset), w2.addRange(B2))))));
      B2 = [];
      for (w2 = q2; w2 = w2.parentNode; )
        w2.nodeType === 1 && B2.push({
          element: w2,
          left: w2.scrollLeft,
          top: w2.scrollTop
        });
      typeof q2.focus === "function" && q2.focus();
      for (q2 = 0; q2 < B2.length; q2++)
        w2 = B2[q2], w2.element.scrollLeft = w2.left, w2.element.scrollTop = w2.top;
    }
    fd = !!Dd;
    Ed = Dd = null;
    a.current = c2;
    Y = e;
    do
      try {
        for (q2 = a; Y !== null; ) {
          var ub = Y.effectTag;
          ub & 36 && Ji(q2, Y.alternate, Y);
          if (ub & 128) {
            B2 = void 0;
            var vb = Y.ref;
            if (vb !== null) {
              var Xc = Y.stateNode;
              switch (Y.tag) {
                case 5:
                  B2 = Xc;
                  break;
                default:
                  B2 = Xc;
              }
              typeof vb === "function" ? vb(B2) : vb.current = B2;
            }
          }
          Y = Y.nextEffect;
        }
      } catch (wb) {
        if (Y === null)
          throw Error(u(330));
        Ei(Y, wb);
        Y = Y.nextEffect;
      }
    while (Y !== null);
    Y = null;
    Vf();
    W = f;
  } else
    a.current = c2;
  if (qj)
    qj = false, rj = a, sj = b;
  else
    for (Y = e; Y !== null; )
      b = Y.nextEffect, Y.nextEffect = null, Y = b;
  b = a.firstPendingTime;
  b === 0 && (aj = null);
  b === 1073741823 ? a === vj ? uj++ : (uj = 0, vj = a) : uj = 0;
  typeof Uj === "function" && Uj(c2.stateNode, d);
  Z(a);
  if (Yi)
    throw Yi = false, a = Zi, Zi = null, a;
  if ((W & ej) !== V)
    return null;
  gg();
  return null;
}
function Tj() {
  for (; Y !== null; ) {
    var a = Y.effectTag;
    (a & 256) !== 0 && Gi(Y.alternate, Y);
    (a & 512) === 0 || qj || (qj = true, dg(97, function() {
      Dj();
      return null;
    }));
    Y = Y.nextEffect;
  }
}
function Dj() {
  if (sj !== 90) {
    var a = 97 < sj ? 97 : sj;
    sj = 90;
    return cg(a, Vj);
  }
}
function Vj() {
  if (rj === null)
    return false;
  var a = rj;
  rj = null;
  if ((W & (fj | gj)) !== V)
    throw Error(u(331));
  var b = W;
  W |= gj;
  for (a = a.current.firstEffect; a !== null; ) {
    try {
      var c2 = a;
      if ((c2.effectTag & 512) !== 0)
        switch (c2.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            Hi(5, c2), Ii(5, c2);
        }
    } catch (d) {
      if (a === null)
        throw Error(u(330));
      Ei(a, d);
    }
    c2 = a.nextEffect;
    a.nextEffect = null;
    a = c2;
  }
  W = b;
  gg();
  return true;
}
function Wj(a, b, c2) {
  b = Ai(c2, b);
  b = Xi(a, b, 1073741823);
  xg(a, b);
  a = xj(a, 1073741823);
  a !== null && Z(a);
}
function Ei(a, b) {
  if (a.tag === 3)
    Wj(a, a, b);
  else
    for (var c2 = a.return; c2 !== null; ) {
      if (c2.tag === 3) {
        Wj(c2, a, b);
        break;
      } else if (c2.tag === 1) {
        var d = c2.stateNode;
        if (typeof c2.type.getDerivedStateFromError === "function" || typeof d.componentDidCatch === "function" && (aj === null || !aj.has(d))) {
          a = Ai(b, a);
          a = $i(c2, a, 1073741823);
          xg(c2, a);
          c2 = xj(c2, 1073741823);
          c2 !== null && Z(c2);
          break;
        }
      }
      c2 = c2.return;
    }
}
function Oj(a, b, c2) {
  var d = a.pingCache;
  d !== null && d.delete(b);
  T === a && U === c2 ? S === vi || S === ui && lj === 1073741823 && $f() - Ti < pj ? Ej(a, U) : oj = true : Aj(a, c2) && (b = a.lastPingedTime, b !== 0 && b < c2 || (a.lastPingedTime = c2, Z(a)));
}
function Vi(a, b) {
  var c2 = a.stateNode;
  c2 !== null && c2.delete(b);
  b = 0;
  b === 0 && (b = Gg(), b = Hg(b, a, null));
  a = xj(a, b);
  a !== null && Z(a);
}
var Rj;
Rj = function(a, b, c2) {
  var d = b.expirationTime;
  if (a !== null) {
    var e = b.pendingProps;
    if (a.memoizedProps !== e || K.current)
      rg = true;
    else {
      if (d < c2) {
        rg = false;
        switch (b.tag) {
          case 3:
            hi(b);
            Xh();
            break;
          case 5:
            fh(b);
            if (b.mode & 4 && c2 !== 1 && e.hidden)
              return b.expirationTime = b.childExpirationTime = 1, null;
            break;
          case 1:
            L(b.type) && Gf(b);
            break;
          case 4:
            dh(b, b.stateNode.containerInfo);
            break;
          case 10:
            d = b.memoizedProps.value;
            e = b.type._context;
            I(jg, e._currentValue);
            e._currentValue = d;
            break;
          case 13:
            if (b.memoizedState !== null) {
              d = b.child.childExpirationTime;
              if (d !== 0 && d >= c2)
                return ji(a, b, c2);
              I(M, M.current & 1);
              b = $h(a, b, c2);
              return b !== null ? b.sibling : null;
            }
            I(M, M.current & 1);
            break;
          case 19:
            d = b.childExpirationTime >= c2;
            if ((a.effectTag & 64) !== 0) {
              if (d)
                return mi(a, b, c2);
              b.effectTag |= 64;
            }
            e = b.memoizedState;
            e !== null && (e.rendering = null, e.tail = null);
            I(M, M.current);
            if (!d)
              return null;
        }
        return $h(a, b, c2);
      }
      rg = false;
    }
  } else
    rg = false;
  b.expirationTime = 0;
  switch (b.tag) {
    case 2:
      d = b.type;
      a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
      a = b.pendingProps;
      e = Cf(b, J.current);
      qg(b, c2);
      e = oh(null, b, d, a, e, c2);
      b.effectTag |= 1;
      if (typeof e === "object" && e !== null && typeof e.render === "function" && e.$$typeof === void 0) {
        b.tag = 1;
        b.memoizedState = null;
        b.updateQueue = null;
        if (L(d)) {
          var f = true;
          Gf(b);
        } else
          f = false;
        b.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null;
        ug(b);
        var g = d.getDerivedStateFromProps;
        typeof g === "function" && Fg(b, d, g, a);
        e.updater = Jg;
        b.stateNode = e;
        e._reactInternalFiber = b;
        Ng(b, d, a, c2);
        b = gi(null, b, d, true, f, c2);
      } else
        b.tag = 0, R(null, b, e, c2), b = b.child;
      return b;
    case 16:
      a: {
        e = b.elementType;
        a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2);
        a = b.pendingProps;
        ob(e);
        if (e._status !== 1)
          throw e._result;
        e = e._result;
        b.type = e;
        f = b.tag = Xj(e);
        a = ig(e, a);
        switch (f) {
          case 0:
            b = di(null, b, e, a, c2);
            break a;
          case 1:
            b = fi(null, b, e, a, c2);
            break a;
          case 11:
            b = Zh(null, b, e, a, c2);
            break a;
          case 14:
            b = ai(null, b, e, ig(e.type, a), d, c2);
            break a;
        }
        throw Error(u(306, e, ""));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), di(a, b, d, e, c2);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), fi(a, b, d, e, c2);
    case 3:
      hi(b);
      d = b.updateQueue;
      if (a === null || d === null)
        throw Error(u(282));
      d = b.pendingProps;
      e = b.memoizedState;
      e = e !== null ? e.element : null;
      vg(a, b);
      zg(b, d, null, c2);
      d = b.memoizedState.element;
      if (d === e)
        Xh(), b = $h(a, b, c2);
      else {
        if (e = b.stateNode.hydrate)
          Ph = Jd(b.stateNode.containerInfo.firstChild), Oh = b, e = Qh = true;
        if (e)
          for (c2 = Yg(b, null, d, c2), b.child = c2; c2; )
            c2.effectTag = c2.effectTag & -3 | 1024, c2 = c2.sibling;
        else
          R(a, b, d, c2), Xh();
        b = b.child;
      }
      return b;
    case 5:
      return fh(b), a === null && Uh(b), d = b.type, e = b.pendingProps, f = a !== null ? a.memoizedProps : null, g = e.children, Gd(d, e) ? g = null : f !== null && Gd(d, f) && (b.effectTag |= 16), ei(a, b), b.mode & 4 && c2 !== 1 && e.hidden ? (b.expirationTime = b.childExpirationTime = 1, b = null) : (R(a, b, g, c2), b = b.child), b;
    case 6:
      return a === null && Uh(b), null;
    case 13:
      return ji(a, b, c2);
    case 4:
      return dh(b, b.stateNode.containerInfo), d = b.pendingProps, a === null ? b.child = Xg(b, null, d, c2) : R(a, b, d, c2), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), Zh(a, b, d, e, c2);
    case 7:
      return R(a, b, b.pendingProps, c2), b.child;
    case 8:
      return R(a, b, b.pendingProps.children, c2), b.child;
    case 12:
      return R(a, b, b.pendingProps.children, c2), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        g = b.memoizedProps;
        f = e.value;
        var h = b.type._context;
        I(jg, h._currentValue);
        h._currentValue = f;
        if (g !== null)
          if (h = g.value, f = $e(h, f) ? 0 : (typeof d._calculateChangedBits === "function" ? d._calculateChangedBits(h, f) : 1073741823) | 0, f === 0) {
            if (g.children === e.children && !K.current) {
              b = $h(a, b, c2);
              break a;
            }
          } else
            for (h = b.child, h !== null && (h.return = b); h !== null; ) {
              var k = h.dependencies;
              if (k !== null) {
                g = h.child;
                for (var l2 = k.firstContext; l2 !== null; ) {
                  if (l2.context === d && (l2.observedBits & f) !== 0) {
                    h.tag === 1 && (l2 = wg(c2, null), l2.tag = 2, xg(h, l2));
                    h.expirationTime < c2 && (h.expirationTime = c2);
                    l2 = h.alternate;
                    l2 !== null && l2.expirationTime < c2 && (l2.expirationTime = c2);
                    pg(h.return, c2);
                    k.expirationTime < c2 && (k.expirationTime = c2);
                    break;
                  }
                  l2 = l2.next;
                }
              } else
                g = h.tag === 10 ? h.type === b.type ? null : h.child : h.child;
              if (g !== null)
                g.return = h;
              else
                for (g = h; g !== null; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  h = g.sibling;
                  if (h !== null) {
                    h.return = g.return;
                    g = h;
                    break;
                  }
                  g = g.return;
                }
              h = g;
            }
        R(a, b, e.children, c2);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, f = b.pendingProps, d = f.children, qg(b, c2), e = sg(e, f.unstable_observedBits), d = d(e), b.effectTag |= 1, R(a, b, d, c2), b.child;
    case 14:
      return e = b.type, f = ig(e, b.pendingProps), f = ig(e.type, f), ai(a, b, e, f, d, c2);
    case 15:
      return ci(a, b, b.type, b.pendingProps, d, c2);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : ig(d, e), a !== null && (a.alternate = null, b.alternate = null, b.effectTag |= 2), b.tag = 1, L(d) ? (a = true, Gf(b)) : a = false, qg(b, c2), Lg(b, d, e), Ng(b, d, e, c2), gi(null, b, d, true, a, c2);
    case 19:
      return mi(a, b, c2);
  }
  throw Error(u(156, b.tag));
};
var Uj = null, Li = null;
function Yj(a) {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined")
    return false;
  var b = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (b.isDisabled || !b.supportsFiber)
    return true;
  try {
    var c2 = b.inject(a);
    Uj = function(a2) {
      try {
        b.onCommitFiberRoot(c2, a2, void 0, (a2.current.effectTag & 64) === 64);
      } catch (e) {
      }
    };
    Li = function(a2) {
      try {
        b.onCommitFiberUnmount(c2, a2);
      } catch (e) {
      }
    };
  } catch (d) {
  }
  return true;
}
function Zj(a, b, c2, d) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.effectTag = 0;
  this.lastEffect = this.firstEffect = this.nextEffect = null;
  this.childExpirationTime = this.expirationTime = 0;
  this.alternate = null;
}
function Sh(a, b, c2, d) {
  return new Zj(a, b, c2, d);
}
function bi(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Xj(a) {
  if (typeof a === "function")
    return bi(a) ? 1 : 0;
  if (a !== void 0 && a !== null) {
    a = a.$$typeof;
    if (a === gb)
      return 11;
    if (a === jb)
      return 14;
  }
  return 2;
}
function Sg(a, b) {
  var c2 = a.alternate;
  c2 === null ? (c2 = Sh(a.tag, b, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b, c2.effectTag = 0, c2.nextEffect = null, c2.firstEffect = null, c2.lastEffect = null);
  c2.childExpirationTime = a.childExpirationTime;
  c2.expirationTime = a.expirationTime;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b = a.dependencies;
  c2.dependencies = b === null ? null : {
    expirationTime: b.expirationTime,
    firstContext: b.firstContext,
    responders: b.responders
  };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function Ug(a, b, c2, d, e, f) {
  var g = 2;
  d = a;
  if (typeof a === "function")
    bi(a) && (g = 1);
  else if (typeof a === "string")
    g = 5;
  else
    a:
      switch (a) {
        case ab:
          return Wg(c2.children, e, f, b);
        case fb:
          g = 8;
          e |= 7;
          break;
        case bb:
          g = 8;
          e |= 1;
          break;
        case cb:
          return a = Sh(12, c2, b, e | 8), a.elementType = cb, a.type = cb, a.expirationTime = f, a;
        case hb:
          return a = Sh(13, c2, b, e), a.type = hb, a.elementType = hb, a.expirationTime = f, a;
        case ib:
          return a = Sh(19, c2, b, e), a.elementType = ib, a.expirationTime = f, a;
        default:
          if (typeof a === "object" && a !== null)
            switch (a.$$typeof) {
              case db:
                g = 10;
                break a;
              case eb:
                g = 9;
                break a;
              case gb:
                g = 11;
                break a;
              case jb:
                g = 14;
                break a;
              case kb:
                g = 16;
                d = null;
                break a;
              case lb:
                g = 22;
                break a;
            }
          throw Error(u(130, a == null ? a : typeof a, ""));
      }
  b = Sh(g, c2, b, e);
  b.elementType = a;
  b.type = d;
  b.expirationTime = f;
  return b;
}
function Wg(a, b, c2, d) {
  a = Sh(7, a, d, b);
  a.expirationTime = c2;
  return a;
}
function Tg(a, b, c2) {
  a = Sh(6, a, null, b);
  a.expirationTime = c2;
  return a;
}
function Vg(a, b, c2) {
  b = Sh(4, a.children !== null ? a.children : [], a.key, b);
  b.expirationTime = c2;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function ak(a, b, c2) {
  this.tag = b;
  this.current = null;
  this.containerInfo = a;
  this.pingCache = this.pendingChildren = null;
  this.finishedExpirationTime = 0;
  this.finishedWork = null;
  this.timeoutHandle = -1;
  this.pendingContext = this.context = null;
  this.hydrate = c2;
  this.callbackNode = null;
  this.callbackPriority = 90;
  this.lastExpiredTime = this.lastPingedTime = this.nextKnownPendingLevel = this.lastSuspendedTime = this.firstSuspendedTime = this.firstPendingTime = 0;
}
function Aj(a, b) {
  var c2 = a.firstSuspendedTime;
  a = a.lastSuspendedTime;
  return c2 !== 0 && c2 >= b && a <= b;
}
function xi(a, b) {
  var c2 = a.firstSuspendedTime, d = a.lastSuspendedTime;
  c2 < b && (a.firstSuspendedTime = b);
  if (d > b || c2 === 0)
    a.lastSuspendedTime = b;
  b <= a.lastPingedTime && (a.lastPingedTime = 0);
  b <= a.lastExpiredTime && (a.lastExpiredTime = 0);
}
function yi(a, b) {
  b > a.firstPendingTime && (a.firstPendingTime = b);
  var c2 = a.firstSuspendedTime;
  c2 !== 0 && (b >= c2 ? a.firstSuspendedTime = a.lastSuspendedTime = a.nextKnownPendingLevel = 0 : b >= a.lastSuspendedTime && (a.lastSuspendedTime = b + 1), b > a.nextKnownPendingLevel && (a.nextKnownPendingLevel = b));
}
function Cj(a, b) {
  var c2 = a.lastExpiredTime;
  if (c2 === 0 || c2 > b)
    a.lastExpiredTime = b;
}
function bk(a, b, c2, d) {
  var e = b.current, f = Gg(), g = Dg.suspense;
  f = Hg(f, e, g);
  a:
    if (c2) {
      c2 = c2._reactInternalFiber;
      b: {
        if (dc(c2) !== c2 || c2.tag !== 1)
          throw Error(u(170));
        var h = c2;
        do {
          switch (h.tag) {
            case 3:
              h = h.stateNode.context;
              break b;
            case 1:
              if (L(h.type)) {
                h = h.stateNode.__reactInternalMemoizedMergedChildContext;
                break b;
              }
          }
          h = h.return;
        } while (h !== null);
        throw Error(u(171));
      }
      if (c2.tag === 1) {
        var k = c2.type;
        if (L(k)) {
          c2 = Ff(c2, k, h);
          break a;
        }
      }
      c2 = h;
    } else
      c2 = Af;
  b.context === null ? b.context = c2 : b.pendingContext = c2;
  b = wg(f, g);
  b.payload = { element: a };
  d = d === void 0 ? null : d;
  d !== null && (b.callback = d);
  xg(e, b);
  Ig(e, f);
  return f;
}
function ck(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function dk(a, b) {
  a = a.memoizedState;
  a !== null && a.dehydrated !== null && a.retryTime < b && (a.retryTime = b);
}
function ek(a, b) {
  dk(a, b);
  (a = a.alternate) && dk(a, b);
}
function fk(a, b, c2) {
  c2 = c2 != null && c2.hydrate === true;
  var d = new ak(a, b, c2), e = Sh(3, null, null, b === 2 ? 7 : b === 1 ? 3 : 0);
  d.current = e;
  e.stateNode = d;
  ug(e);
  a[Od] = d.current;
  c2 && b !== 0 && Jc(a, a.nodeType === 9 ? a : a.ownerDocument);
  this._internalRoot = d;
}
fk.prototype.render = function(a) {
  bk(a, this._internalRoot, null, null);
};
fk.prototype.unmount = function() {
  var a = this._internalRoot, b = a.containerInfo;
  bk(null, a, null, function() {
    b[Od] = null;
  });
};
function gk(a) {
  return !(!a || a.nodeType !== 1 && a.nodeType !== 9 && a.nodeType !== 11 && (a.nodeType !== 8 || a.nodeValue !== " react-mount-point-unstable "));
}
function hk(a, b) {
  b || (b = a ? a.nodeType === 9 ? a.documentElement : a.firstChild : null, b = !(!b || b.nodeType !== 1 || !b.hasAttribute("data-reactroot")));
  if (!b)
    for (var c2; c2 = a.lastChild; )
      a.removeChild(c2);
  return new fk(a, 0, b ? { hydrate: true } : void 0);
}
function ik(a, b, c2, d, e) {
  var f = c2._reactRootContainer;
  if (f) {
    var g = f._internalRoot;
    if (typeof e === "function") {
      var h = e;
      e = function() {
        var a2 = ck(g);
        h.call(a2);
      };
    }
    bk(b, g, a, e);
  } else {
    f = c2._reactRootContainer = hk(c2, d);
    g = f._internalRoot;
    if (typeof e === "function") {
      var k = e;
      e = function() {
        var a2 = ck(g);
        k.call(a2);
      };
    }
    Nj(function() {
      bk(b, g, a, e);
    });
  }
  return ck(g);
}
function jk(a, b, c2) {
  var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: $a, key: d == null ? null : "" + d, children: a, containerInfo: b, implementation: c2 };
}
wc = function(a) {
  if (a.tag === 13) {
    var b = hg(Gg(), 150, 100);
    Ig(a, b);
    ek(a, b);
  }
};
xc = function(a) {
  a.tag === 13 && (Ig(a, 3), ek(a, 3));
};
yc = function(a) {
  if (a.tag === 13) {
    var b = Gg();
    b = Hg(b, a, null);
    Ig(a, b);
    ek(a, b);
  }
};
za = function(a, b, c2) {
  switch (b) {
    case "input":
      Cb(a, c2);
      b = c2.name;
      if (c2.type === "radio" && b != null) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c2.length; b++) {
          var d = c2[b];
          if (d !== a && d.form === a.form) {
            var e = Qd(d);
            if (!e)
              throw Error(u(90));
            yb(d);
            Cb(d, e);
          }
        }
      }
      break;
    case "textarea":
      Kb(a, c2);
      break;
    case "select":
      b = c2.value, b != null && Hb(a, !!c2.multiple, b, false);
  }
};
Fa = Mj;
Ga = function(a, b, c2, d, e) {
  var f = W;
  W |= 4;
  try {
    return cg(98, a.bind(null, b, c2, d, e));
  } finally {
    W = f, W === V && gg();
  }
};
Ha = function() {
  (W & (1 | fj | gj)) === V && (Lj(), Dj());
};
Ia = function(a, b) {
  var c2 = W;
  W |= 2;
  try {
    return a(b);
  } finally {
    W = c2, W === V && gg();
  }
};
function kk(a, b) {
  var c2 = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!gk(b))
    throw Error(u(200));
  return jk(a, b, null, c2);
}
var lk = { Events: [Nc, Pd, Qd, xa, ta, Xd, function(a) {
  jc(a, Wd);
}, Da, Ea, id, mc, Dj, { current: false }] };
(function(a) {
  var b = a.findFiberByHostInstance;
  return Yj(n({}, a, { overrideHookState: null, overrideProps: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Wa.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
    a2 = hc(a2);
    return a2 === null ? null : a2.stateNode;
  }, findFiberByHostInstance: function(a2) {
    return b ? b(a2) : null;
  }, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null }));
})({
  findFiberByHostInstance: tc,
  bundleType: 0,
  version: "16.14.0",
  rendererPackageName: "react-dom"
});
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lk;
reactDom_production_min.createPortal = kk;
reactDom_production_min.findDOMNode = function(a) {
  if (a == null)
    return null;
  if (a.nodeType === 1)
    return a;
  var b = a._reactInternalFiber;
  if (b === void 0) {
    if (typeof a.render === "function")
      throw Error(u(188));
    throw Error(u(268, Object.keys(a)));
  }
  a = hc(b);
  a = a === null ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a, b) {
  if ((W & (fj | gj)) !== V)
    throw Error(u(187));
  var c2 = W;
  W |= 1;
  try {
    return cg(99, a.bind(null, b));
  } finally {
    W = c2, gg();
  }
};
reactDom_production_min.hydrate = function(a, b, c2) {
  if (!gk(b))
    throw Error(u(200));
  return ik(null, a, b, true, c2);
};
reactDom_production_min.render = function(a, b, c2) {
  if (!gk(b))
    throw Error(u(200));
  return ik(null, a, b, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!gk(a))
    throw Error(u(40));
  return a._reactRootContainer ? (Nj(function() {
    ik(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[Od] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Mj;
reactDom_production_min.unstable_createPortal = function(a, b) {
  return kk(a, b, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
};
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c2, d) {
  if (!gk(c2))
    throw Error(u(200));
  if (a == null || a._reactInternalFiber === void 0)
    throw Error(u(38));
  return ik(a, b, c2, false, d);
};
reactDom_production_min.version = "16.14.0";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var ReactDOM = reactDom.exports;
const useIsoLayoutEffect = typeof window === "undefined" ? react.exports.useEffect : react.exports.useLayoutEffect;
function create(createState) {
  let state;
  let listeners = new Set();
  const setState = (partial) => {
    const partialState = typeof partial === "function" ? partial(state) : partial;
    if (partialState !== state) {
      state = Object.assign({}, state, partialState);
      listeners.forEach((listener) => listener());
    }
  };
  const getState = () => state;
  const getSubscriber = (listener, selector = getState, equalityFn = Object.is) => ({
    currentSlice: selector(state),
    equalityFn,
    errored: false,
    listener,
    selector,
    unsubscribe: () => {
    }
  });
  const subscribe = (subscriber) => {
    function listener() {
      try {
        const newStateSlice = subscriber.selector(state);
        if (!subscriber.equalityFn(subscriber.currentSlice, newStateSlice)) {
          subscriber.listener(subscriber.currentSlice = newStateSlice);
        }
      } catch (error) {
        subscriber.errored = true;
        subscriber.listener(null, error);
      }
    }
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  };
  const apiSubscribe = (listener, selector, equalityFn) => subscribe(getSubscriber(listener, selector, equalityFn));
  const destroy = () => listeners.clear();
  const useStore = (selector = getState, equalityFn = Object.is) => {
    const forceUpdate = react.exports.useReducer((c2) => c2 + 1, 0)[1];
    const subscriberRef = react.exports.useRef();
    if (!subscriberRef.current) {
      subscriberRef.current = getSubscriber(forceUpdate, selector, equalityFn);
      subscriberRef.current.unsubscribe = subscribe(subscriberRef.current);
    }
    const subscriber = subscriberRef.current;
    let newStateSlice;
    let hasNewStateSlice = false;
    if (subscriber.selector !== selector || subscriber.equalityFn !== equalityFn || subscriber.errored) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(subscriber.currentSlice, newStateSlice);
    }
    useIsoLayoutEffect(() => {
      if (hasNewStateSlice) {
        subscriber.currentSlice = newStateSlice;
      }
      subscriber.selector = selector;
      subscriber.equalityFn = equalityFn;
      subscriber.errored = false;
    });
    useIsoLayoutEffect(() => subscriber.unsubscribe, []);
    return hasNewStateSlice ? newStateSlice : subscriber.currentSlice;
  };
  const api = {
    setState,
    getState,
    subscribe: apiSubscribe,
    destroy
  };
  state = createState(setState, getState, api);
  return [useStore, api];
}
var pad$2 = function pad(num, size) {
  var s = "000000000" + num;
  return s.substr(s.length - size);
};
var pad$1 = pad$2;
var env = typeof window === "object" ? window : self;
var globalCount = Object.keys(env).length;
var mimeTypesLength = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
var clientId = pad$1((mimeTypesLength + navigator.userAgent.length).toString(36) + globalCount.toString(36), 4);
var fingerprint_browser = function fingerprint() {
  return clientId;
};
var getRandomValue$1;
var crypto = typeof window !== "undefined" && (window.crypto || window.msCrypto) || typeof self !== "undefined" && self.crypto;
if (crypto) {
  var lim = Math.pow(2, 32) - 1;
  getRandomValue$1 = function() {
    return Math.abs(crypto.getRandomValues(new Uint32Array(1))[0] / lim);
  };
} else {
  getRandomValue$1 = Math.random;
}
var getRandomValue_browser = getRandomValue$1;
var fingerprint2 = fingerprint_browser;
var pad2 = pad$2;
var getRandomValue = getRandomValue_browser;
var c = 0, blockSize = 4, base = 36, discreteValues = Math.pow(base, blockSize);
function randomBlock() {
  return pad2((getRandomValue() * discreteValues << 0).toString(base), blockSize);
}
function safeCounter() {
  c = c < discreteValues ? c : 0;
  c++;
  return c - 1;
}
function cuid() {
  var letter = "c", timestamp = new Date().getTime().toString(base), counter = pad2(safeCounter().toString(base), blockSize), print = fingerprint2(), random = randomBlock() + randomBlock();
  return letter + timestamp + counter + print + random;
}
cuid.slug = function slug() {
  var date = new Date().getTime().toString(36), counter = safeCounter().toString(36).slice(-4), print = fingerprint2().slice(0, 1) + fingerprint2().slice(-1), random = randomBlock().slice(-2);
  return date.slice(-2) + counter + print + random;
};
cuid.isCuid = function isCuid(stringToCheck) {
  if (typeof stringToCheck !== "string")
    return false;
  if (stringToCheck.startsWith("c"))
    return true;
  return false;
};
cuid.isSlug = function isSlug(stringToCheck) {
  if (typeof stringToCheck !== "string")
    return false;
  var stringLength = stringToCheck.length;
  if (stringLength >= 7 && stringLength <= 10)
    return true;
  return false;
};
cuid.fingerprint = fingerprint2;
var cuid_1 = cuid;
var lib = { exports: {} };
var _FullInternals = {};
var _CoreInternals = {};
var Global = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports._registerNode = exports._NODES_REGISTRY = exports.Konva = exports.glob = exports._parseUA = void 0;
  var PI_OVER_180 = Math.PI / 180;
  function detectBrowser() {
    return typeof window !== "undefined" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
  }
  var _detectIE = function(ua2) {
    var msie = ua2.indexOf("msie ");
    if (msie > 0) {
      return parseInt(ua2.substring(msie + 5, ua2.indexOf(".", msie)), 10);
    }
    var trident = ua2.indexOf("trident/");
    if (trident > 0) {
      var rv = ua2.indexOf("rv:");
      return parseInt(ua2.substring(rv + 3, ua2.indexOf(".", rv)), 10);
    }
    var edge = ua2.indexOf("edge/");
    if (edge > 0) {
      return parseInt(ua2.substring(edge + 5, ua2.indexOf(".", edge)), 10);
    }
    return false;
  };
  var _parseUA = function(userAgent) {
    var ua2 = userAgent.toLowerCase(), match = /(chrome)[ /]([\w.]+)/.exec(ua2) || /(webkit)[ /]([\w.]+)/.exec(ua2) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua2) || /(msie) ([\w.]+)/.exec(ua2) || ua2.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua2) || [], mobile = !!userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i), ieMobile = !!userAgent.match(/IEMobile/i);
    return {
      browser: match[1] || "",
      version: match[2] || "0",
      isIE: _detectIE(ua2),
      mobile,
      ieMobile
    };
  };
  exports._parseUA = _parseUA;
  exports.glob = typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof window !== "undefined" ? window : typeof WorkerGlobalScope !== "undefined" ? self : {};
  exports.Konva = {
    _global: exports.glob,
    version: "7.2.5",
    isBrowser: detectBrowser(),
    isUnminified: /param/.test(function(param) {
    }.toString()),
    dblClickWindow: 400,
    getAngle: function(angle) {
      return exports.Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    _pointerEventsEnabled: false,
    hitOnDragEnabled: false,
    captureTouchEventsEnabled: false,
    listenClickTap: false,
    inDblClickWindow: false,
    pixelRatio: void 0,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging: function() {
      return exports.Konva["DD"].isDragging;
    },
    isDragReady: function() {
      return !!exports.Konva["DD"].node;
    },
    UA: exports._parseUA(exports.glob.navigator && exports.glob.navigator.userAgent || ""),
    document: exports.glob.document,
    _injectGlobal: function(Konva2) {
      exports.glob.Konva = Konva2;
    },
    _parseUA: exports._parseUA
  };
  exports._NODES_REGISTRY = {};
  var _registerNode = function(NodeClass) {
    exports._NODES_REGISTRY[NodeClass.prototype.getClassName()] = NodeClass;
    exports.Konva[NodeClass.prototype.getClassName()] = NodeClass;
  };
  exports._registerNode = _registerNode;
})(Global);
var Util = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Util = exports.Transform = exports.Collection = void 0;
  var Global_12 = Global;
  var Collection = function() {
    function Collection2() {
    }
    Collection2.toCollection = function(arr) {
      var collection = new Collection2(), len = arr.length, n2;
      for (n2 = 0; n2 < len; n2++) {
        collection.push(arr[n2]);
      }
      return collection;
    };
    Collection2._mapMethod = function(methodName) {
      Collection2.prototype[methodName] = function() {
        var len = this.length, i;
        var args = [].slice.call(arguments);
        for (i = 0; i < len; i++) {
          this[i][methodName].apply(this[i], args);
        }
        return this;
      };
    };
    Collection2.mapMethods = function(constructor) {
      var prot = constructor.prototype;
      for (var methodName in prot) {
        Collection2._mapMethod(methodName);
      }
    };
    return Collection2;
  }();
  exports.Collection = Collection;
  Collection.prototype = [];
  Collection.prototype.each = function(func) {
    for (var n2 = 0; n2 < this.length; n2++) {
      func(this[n2], n2);
    }
  };
  Collection.prototype.toArray = function() {
    var arr = [], len = this.length, n2;
    for (n2 = 0; n2 < len; n2++) {
      arr.push(this[n2]);
    }
    return arr;
  };
  var Transform = function() {
    function Transform2(m) {
      if (m === void 0) {
        m = [1, 0, 0, 1, 0, 0];
      }
      this.dirty = false;
      this.m = m && m.slice() || [1, 0, 0, 1, 0, 0];
    }
    Transform2.prototype.reset = function() {
      this.m[0] = 1;
      this.m[1] = 0;
      this.m[2] = 0;
      this.m[3] = 1;
      this.m[4] = 0;
      this.m[5] = 0;
    };
    Transform2.prototype.copy = function() {
      return new Transform2(this.m);
    };
    Transform2.prototype.copyInto = function(tr) {
      tr.m[0] = this.m[0];
      tr.m[1] = this.m[1];
      tr.m[2] = this.m[2];
      tr.m[3] = this.m[3];
      tr.m[4] = this.m[4];
      tr.m[5] = this.m[5];
    };
    Transform2.prototype.point = function(point) {
      var m = this.m;
      return {
        x: m[0] * point.x + m[2] * point.y + m[4],
        y: m[1] * point.x + m[3] * point.y + m[5]
      };
    };
    Transform2.prototype.translate = function(x2, y2) {
      this.m[4] += this.m[0] * x2 + this.m[2] * y2;
      this.m[5] += this.m[1] * x2 + this.m[3] * y2;
      return this;
    };
    Transform2.prototype.scale = function(sx, sy) {
      this.m[0] *= sx;
      this.m[1] *= sx;
      this.m[2] *= sy;
      this.m[3] *= sy;
      return this;
    };
    Transform2.prototype.rotate = function(rad) {
      var c2 = Math.cos(rad);
      var s = Math.sin(rad);
      var m11 = this.m[0] * c2 + this.m[2] * s;
      var m12 = this.m[1] * c2 + this.m[3] * s;
      var m21 = this.m[0] * -s + this.m[2] * c2;
      var m22 = this.m[1] * -s + this.m[3] * c2;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    };
    Transform2.prototype.getTranslation = function() {
      return {
        x: this.m[4],
        y: this.m[5]
      };
    };
    Transform2.prototype.skew = function(sx, sy) {
      var m11 = this.m[0] + this.m[2] * sy;
      var m12 = this.m[1] + this.m[3] * sy;
      var m21 = this.m[2] + this.m[0] * sx;
      var m22 = this.m[3] + this.m[1] * sx;
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      return this;
    };
    Transform2.prototype.multiply = function(matrix) {
      var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
      var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
      var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
      var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
      var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
      var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
      this.m[0] = m11;
      this.m[1] = m12;
      this.m[2] = m21;
      this.m[3] = m22;
      this.m[4] = dx;
      this.m[5] = dy;
      return this;
    };
    Transform2.prototype.invert = function() {
      var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
      var m0 = this.m[3] * d;
      var m1 = -this.m[1] * d;
      var m2 = -this.m[2] * d;
      var m3 = this.m[0] * d;
      var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
      var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
      this.m[0] = m0;
      this.m[1] = m1;
      this.m[2] = m2;
      this.m[3] = m3;
      this.m[4] = m4;
      this.m[5] = m5;
      return this;
    };
    Transform2.prototype.getMatrix = function() {
      return this.m;
    };
    Transform2.prototype.setAbsolutePosition = function(x2, y2) {
      var m0 = this.m[0], m1 = this.m[1], m2 = this.m[2], m3 = this.m[3], m4 = this.m[4], m5 = this.m[5], yt = (m0 * (y2 - m5) - m1 * (x2 - m4)) / (m0 * m3 - m1 * m2), xt = (x2 - m4 - m2 * yt) / m0;
      return this.translate(xt, yt);
    };
    Transform2.prototype.decompose = function() {
      var a = this.m[0];
      var b = this.m[1];
      var c2 = this.m[2];
      var d = this.m[3];
      var e = this.m[4];
      var f = this.m[5];
      var delta = a * d - b * c2;
      var result = {
        x: e,
        y: f,
        rotation: 0,
        scaleX: 0,
        scaleY: 0,
        skewX: 0,
        skewY: 0
      };
      if (a != 0 || b != 0) {
        var r2 = Math.sqrt(a * a + b * b);
        result.rotation = b > 0 ? Math.acos(a / r2) : -Math.acos(a / r2);
        result.scaleX = r2;
        result.scaleY = delta / r2;
        result.skewX = (a * c2 + b * d) / delta;
        result.skewY = 0;
      } else if (c2 != 0 || d != 0) {
        var s = Math.sqrt(c2 * c2 + d * d);
        result.rotation = Math.PI / 2 - (d > 0 ? Math.acos(-c2 / s) : -Math.acos(c2 / s));
        result.scaleX = delta / s;
        result.scaleY = s;
        result.skewX = 0;
        result.skewY = (a * c2 + b * d) / delta;
      } else
        ;
      result.rotation = exports.Util._getRotation(result.rotation);
      return result;
    };
    return Transform2;
  }();
  exports.Transform = Transform;
  var OBJECT_ARRAY = "[object Array]", OBJECT_NUMBER = "[object Number]", OBJECT_STRING = "[object String]", OBJECT_BOOLEAN = "[object Boolean]", PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH2 = "#", EMPTY_STRING2 = "", ZERO = "0", KONVA_WARNING = "Konva warning: ", KONVA_ERROR = "Konva error: ", RGB_PAREN = "rgb(", COLORS = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5]
  }, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
  exports.Util = {
    _isElement: function(obj) {
      return !!(obj && obj.nodeType == 1);
    },
    _isFunction: function(obj) {
      return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject: function(obj) {
      return !!obj && obj.constructor === Object;
    },
    _isArray: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_NUMBER && !isNaN(obj) && isFinite(obj);
    },
    _isString: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean: function(obj) {
      return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject: function(val) {
      return val instanceof Object;
    },
    isValidSelector: function(selector) {
      if (typeof selector !== "string") {
        return false;
      }
      var firstChar = selector[0];
      return firstChar === "#" || firstChar === "." || firstChar === firstChar.toUpperCase();
    },
    _sign: function(number) {
      if (number === 0) {
        return 1;
      }
      if (number > 0) {
        return 1;
      } else {
        return -1;
      }
    },
    requestAnimFrame: function(callback) {
      animQueue.push(callback);
      if (animQueue.length === 1) {
        requestAnimationFrame(function() {
          var queue = animQueue;
          animQueue = [];
          queue.forEach(function(cb2) {
            cb2();
          });
        });
      }
    },
    createCanvasElement: function() {
      var canvas = document.createElement("canvas");
      try {
        canvas.style = canvas.style || {};
      } catch (e) {
      }
      return canvas;
    },
    createImageElement: function() {
      return document.createElement("img");
    },
    _isInDocument: function(el) {
      while (el = el.parentNode) {
        if (el == document) {
          return true;
        }
      }
      return false;
    },
    _simplifyArray: function(arr) {
      var retArr = [], len = arr.length, util = exports.Util, n2, val;
      for (n2 = 0; n2 < len; n2++) {
        val = arr[n2];
        if (util._isNumber(val)) {
          val = Math.round(val * 1e3) / 1e3;
        } else if (!util._isString(val)) {
          val = val.toString();
        }
        retArr.push(val);
      }
      return retArr;
    },
    _urlToImage: function(url, callback) {
      var imageObj = new Global_12.glob.Image();
      imageObj.onload = function() {
        callback(imageObj);
      };
      imageObj.src = url;
    },
    _rgbToHex: function(r2, g, b) {
      return ((1 << 24) + (r2 << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb: function(hex) {
      hex = hex.replace(HASH2, EMPTY_STRING2);
      var bigint = parseInt(hex, 16);
      return {
        r: bigint >> 16 & 255,
        g: bigint >> 8 & 255,
        b: bigint & 255
      };
    },
    getRandomColor: function() {
      var randColor = (Math.random() * 16777215 << 0).toString(16);
      while (randColor.length < 6) {
        randColor = ZERO + randColor;
      }
      return HASH2 + randColor;
    },
    get: function(val, def) {
      if (val === void 0) {
        return def;
      } else {
        return val;
      }
    },
    getRGB: function(color) {
      var rgb;
      if (color in COLORS) {
        rgb = COLORS[color];
        return {
          r: rgb[0],
          g: rgb[1],
          b: rgb[2]
        };
      } else if (color[0] === HASH2) {
        return this._hexToRgb(color.substring(1));
      } else if (color.substr(0, 4) === RGB_PAREN) {
        rgb = RGB_REGEX.exec(color.replace(/ /g, ""));
        return {
          r: parseInt(rgb[1], 10),
          g: parseInt(rgb[2], 10),
          b: parseInt(rgb[3], 10)
        };
      } else {
        return {
          r: 0,
          g: 0,
          b: 0
        };
      }
    },
    colorToRGBA: function(str) {
      str = str || "black";
      return exports.Util._namedColorToRBA(str) || exports.Util._hex3ColorToRGBA(str) || exports.Util._hex6ColorToRGBA(str) || exports.Util._rgbColorToRGBA(str) || exports.Util._rgbaColorToRGBA(str) || exports.Util._hslColorToRGBA(str);
    },
    _namedColorToRBA: function(str) {
      var c2 = COLORS[str.toLowerCase()];
      if (!c2) {
        return null;
      }
      return {
        r: c2[0],
        g: c2[1],
        b: c2[2],
        a: 1
      };
    },
    _rgbColorToRGBA: function(str) {
      if (str.indexOf("rgb(") === 0) {
        str = str.match(/rgb\(([^)]+)\)/)[1];
        var parts = str.split(/ *, */).map(Number);
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: 1
        };
      }
    },
    _rgbaColorToRGBA: function(str) {
      if (str.indexOf("rgba(") === 0) {
        str = str.match(/rgba\(([^)]+)\)/)[1];
        var parts = str.split(/ *, */).map(Number);
        return {
          r: parts[0],
          g: parts[1],
          b: parts[2],
          a: parts[3]
        };
      }
    },
    _hex6ColorToRGBA: function(str) {
      if (str[0] === "#" && str.length === 7) {
        return {
          r: parseInt(str.slice(1, 3), 16),
          g: parseInt(str.slice(3, 5), 16),
          b: parseInt(str.slice(5, 7), 16),
          a: 1
        };
      }
    },
    _hex3ColorToRGBA: function(str) {
      if (str[0] === "#" && str.length === 4) {
        return {
          r: parseInt(str[1] + str[1], 16),
          g: parseInt(str[2] + str[2], 16),
          b: parseInt(str[3] + str[3], 16),
          a: 1
        };
      }
    },
    _hslColorToRGBA: function(str) {
      if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
        var _a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
        _a[0];
        var hsl = _a.slice(1);
        var h = Number(hsl[0]) / 360;
        var s = Number(hsl[1]) / 100;
        var l2 = Number(hsl[2]) / 100;
        var t2 = void 0;
        var t3 = void 0;
        var val = void 0;
        if (s === 0) {
          val = l2 * 255;
          return {
            r: Math.round(val),
            g: Math.round(val),
            b: Math.round(val),
            a: 1
          };
        }
        if (l2 < 0.5) {
          t2 = l2 * (1 + s);
        } else {
          t2 = l2 + s - l2 * s;
        }
        var t1 = 2 * l2 - t2;
        var rgb = [0, 0, 0];
        for (var i = 0; i < 3; i++) {
          t3 = h + 1 / 3 * -(i - 1);
          if (t3 < 0) {
            t3++;
          }
          if (t3 > 1) {
            t3--;
          }
          if (6 * t3 < 1) {
            val = t1 + (t2 - t1) * 6 * t3;
          } else if (2 * t3 < 1) {
            val = t2;
          } else if (3 * t3 < 2) {
            val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
          } else {
            val = t1;
          }
          rgb[i] = val * 255;
        }
        return {
          r: Math.round(rgb[0]),
          g: Math.round(rgb[1]),
          b: Math.round(rgb[2]),
          a: 1
        };
      }
    },
    haveIntersection: function(r1, r2) {
      return !(r2.x > r1.x + r1.width || r2.x + r2.width < r1.x || r2.y > r1.y + r1.height || r2.y + r2.height < r1.y);
    },
    cloneObject: function(obj) {
      var retObj = {};
      for (var key in obj) {
        if (this._isPlainObject(obj[key])) {
          retObj[key] = this.cloneObject(obj[key]);
        } else if (this._isArray(obj[key])) {
          retObj[key] = this.cloneArray(obj[key]);
        } else {
          retObj[key] = obj[key];
        }
      }
      return retObj;
    },
    cloneArray: function(arr) {
      return arr.slice(0);
    },
    _degToRad: function(deg) {
      return deg * PI_OVER_DEG180;
    },
    _radToDeg: function(rad) {
      return rad * DEG180_OVER_PI;
    },
    _getRotation: function(radians) {
      return Global_12.Konva.angleDeg ? exports.Util._radToDeg(radians) : radians;
    },
    _capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw: function(str) {
      throw new Error(KONVA_ERROR + str);
    },
    error: function(str) {
      console.error(KONVA_ERROR + str);
    },
    warn: function(str) {
      if (!Global_12.Konva.showWarnings) {
        return;
      }
      console.warn(KONVA_WARNING + str);
    },
    extend: function(child, parent) {
      function Ctor() {
        this.constructor = child;
      }
      Ctor.prototype = parent.prototype;
      var oldProto = child.prototype;
      child.prototype = new Ctor();
      for (var key in oldProto) {
        if (oldProto.hasOwnProperty(key)) {
          child.prototype[key] = oldProto[key];
        }
      }
      child.__super__ = parent.prototype;
      child.super = parent;
    },
    _getControlPoints: function(x0, y0, x1, y1, x2, y2, t2) {
      var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa2 = t2 * d01 / (d01 + d12), fb2 = t2 * d12 / (d01 + d12), p1x = x1 - fa2 * (x2 - x0), p1y = y1 - fa2 * (y2 - y0), p2x = x1 + fb2 * (x2 - x0), p2y = y1 + fb2 * (y2 - y0);
      return [p1x, p1y, p2x, p2y];
    },
    _expandPoints: function(p2, tension) {
      var len = p2.length, allPoints = [], n2, cp;
      for (n2 = 2; n2 < len - 2; n2 += 2) {
        cp = exports.Util._getControlPoints(p2[n2 - 2], p2[n2 - 1], p2[n2], p2[n2 + 1], p2[n2 + 2], p2[n2 + 3], tension);
        if (isNaN(cp[0])) {
          continue;
        }
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p2[n2]);
        allPoints.push(p2[n2 + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
      }
      return allPoints;
    },
    each: function(obj, func) {
      for (var key in obj) {
        func(key, obj[key]);
      }
    },
    _inRange: function(val, left, right) {
      return left <= val && val < right;
    },
    _getProjectionToSegment: function(x1, y1, x2, y2, x3, y3) {
      var x4, y4, dist;
      var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
      if (pd2 == 0) {
        x4 = x1;
        y4 = y1;
        dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
      } else {
        var u2 = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
        if (u2 < 0) {
          x4 = x1;
          y4 = y1;
          dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
        } else if (u2 > 1) {
          x4 = x2;
          y4 = y2;
          dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
        } else {
          x4 = x1 + u2 * (x2 - x1);
          y4 = y1 + u2 * (y2 - y1);
          dist = (x4 - x3) * (x4 - x3) + (y4 - y3) * (y4 - y3);
        }
      }
      return [x4, y4, dist];
    },
    _getProjectionToLine: function(pt, line, isClosed) {
      var pc2 = exports.Util.cloneObject(pt);
      var dist = Number.MAX_VALUE;
      line.forEach(function(p1, i) {
        if (!isClosed && i === line.length - 1) {
          return;
        }
        var p2 = line[(i + 1) % line.length];
        var proj = exports.Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
        var px = proj[0], py = proj[1], pdist = proj[2];
        if (pdist < dist) {
          pc2.x = px;
          pc2.y = py;
          dist = pdist;
        }
      });
      return pc2;
    },
    _prepareArrayForTween: function(startArray, endArray, isClosed) {
      var n2, start = [], end = [];
      if (startArray.length > endArray.length) {
        var temp = endArray;
        endArray = startArray;
        startArray = temp;
      }
      for (n2 = 0; n2 < startArray.length; n2 += 2) {
        start.push({
          x: startArray[n2],
          y: startArray[n2 + 1]
        });
      }
      for (n2 = 0; n2 < endArray.length; n2 += 2) {
        end.push({
          x: endArray[n2],
          y: endArray[n2 + 1]
        });
      }
      var newStart = [];
      end.forEach(function(point) {
        var pr = exports.Util._getProjectionToLine(point, start, isClosed);
        newStart.push(pr.x);
        newStart.push(pr.y);
      });
      return newStart;
    },
    _prepareToStringify: function(obj) {
      var desc;
      obj.visitedByCircularReferenceRemoval = true;
      for (var key in obj) {
        if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == "object")) {
          continue;
        }
        desc = Object.getOwnPropertyDescriptor(obj, key);
        if (obj[key].visitedByCircularReferenceRemoval || exports.Util._isElement(obj[key])) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        } else if (exports.Util._prepareToStringify(obj[key]) === null) {
          if (desc.configurable) {
            delete obj[key];
          } else {
            return null;
          }
        }
      }
      delete obj.visitedByCircularReferenceRemoval;
      return obj;
    },
    _assign: function(target, source) {
      for (var key in source) {
        target[key] = source[key];
      }
      return target;
    },
    _getFirstPointerId: function(evt) {
      if (!evt.touches) {
        return 999;
      } else {
        return evt.changedTouches[0].identifier;
      }
    }
  };
})(Util);
var Node = {};
var Factory = {};
var Validators = {};
Object.defineProperty(Validators, "__esModule", { value: true });
Validators.getComponentValidator = Validators.getBooleanValidator = Validators.getNumberArrayValidator = Validators.getFunctionValidator = Validators.getStringOrGradientValidator = Validators.getStringValidator = Validators.getNumberOrAutoValidator = Validators.getNumberOrArrayOfNumbersValidator = Validators.getNumberValidator = Validators.alphaComponent = Validators.RGBComponent = void 0;
var Global_1$p = Global;
var Util_1$r = Util;
function _formatValue(val) {
  if (Util_1$r.Util._isString(val)) {
    return '"' + val + '"';
  }
  if (Object.prototype.toString.call(val) === "[object Number]") {
    return val;
  }
  if (Util_1$r.Util._isBoolean(val)) {
    return val;
  }
  return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
Validators.RGBComponent = RGBComponent;
function alphaComponent(val) {
  if (val > 1) {
    return 1;
  } else if (val < 1e-4) {
    return 1e-4;
  }
  return val;
}
Validators.alphaComponent = alphaComponent;
function getNumberValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$r.Util._isNumber(val)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number.');
      }
      return val;
    };
  }
}
Validators.getNumberValidator = getNumberValidator;
function getNumberOrArrayOfNumbersValidator(noOfElements) {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      var isNumber = Util_1$r.Util._isNumber(val);
      var isValidArray = Util_1$r.Util._isArray(val) && val.length == noOfElements;
      if (!isNumber && !isValidArray) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or Array<number>(' + noOfElements + ")");
      }
      return val;
    };
  }
}
Validators.getNumberOrArrayOfNumbersValidator = getNumberOrArrayOfNumbersValidator;
function getNumberOrAutoValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      var isNumber = Util_1$r.Util._isNumber(val);
      var isAuto = val === "auto";
      if (!(isNumber || isAuto)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a number or "auto".');
      }
      return val;
    };
  }
}
Validators.getNumberOrAutoValidator = getNumberOrAutoValidator;
function getStringValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$r.Util._isString(val)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string.');
      }
      return val;
    };
  }
}
Validators.getStringValidator = getStringValidator;
function getStringOrGradientValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      var isString = Util_1$r.Util._isString(val);
      var isGradient = Object.prototype.toString.call(val) === "[object CanvasGradient]";
      if (!(isString || isGradient)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a string or a native gradient.');
      }
      return val;
    };
  }
}
Validators.getStringOrGradientValidator = getStringOrGradientValidator;
function getFunctionValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$r.Util._isFunction(val)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a function.');
      }
      return val;
    };
  }
}
Validators.getFunctionValidator = getFunctionValidator;
function getNumberArrayValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$r.Util._isArray(val)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a array of numbers.');
      } else {
        val.forEach(function(item) {
          if (!Util_1$r.Util._isNumber(item)) {
            Util_1$r.Util.warn('"' + attr + '" attribute has non numeric element ' + item + ". Make sure that all elements are numbers.");
          }
        });
      }
      return val;
    };
  }
}
Validators.getNumberArrayValidator = getNumberArrayValidator;
function getBooleanValidator() {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      var isBool = val === true || val === false;
      if (!isBool) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be a boolean.');
      }
      return val;
    };
  }
}
Validators.getBooleanValidator = getBooleanValidator;
function getComponentValidator(components) {
  if (Global_1$p.Konva.isUnminified) {
    return function(val, attr) {
      if (!Util_1$r.Util.isObject(val)) {
        Util_1$r.Util.warn(_formatValue(val) + ' is a not valid value for "' + attr + '" attribute. The value should be an object with properties ' + components);
      }
      return val;
    };
  }
}
Validators.getComponentValidator = getComponentValidator;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Factory = void 0;
  var Util_12 = Util;
  var Validators_12 = Validators;
  var GET = "get", SET = "set";
  exports.Factory = {
    addGetterSetter: function(constructor, attr, def, validator, after) {
      exports.Factory.addGetter(constructor, attr, def);
      exports.Factory.addSetter(constructor, attr, validator, after);
      exports.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter: function(constructor, attr, def) {
      var method = GET + Util_12.Util._capitalize(attr);
      constructor.prototype[method] = constructor.prototype[method] || function() {
        var val = this.attrs[attr];
        return val === void 0 ? def : val;
      };
    },
    addSetter: function(constructor, attr, validator, after) {
      var method = SET + Util_12.Util._capitalize(attr);
      if (!constructor.prototype[method]) {
        exports.Factory.overWriteSetter(constructor, attr, validator, after);
      }
    },
    overWriteSetter: function(constructor, attr, validator, after) {
      var method = SET + Util_12.Util._capitalize(attr);
      constructor.prototype[method] = function(val) {
        if (validator && val !== void 0 && val !== null) {
          val = validator.call(this, val, attr);
        }
        this._setAttr(attr, val);
        if (after) {
          after.call(this);
        }
        return this;
      };
    },
    addComponentsGetterSetter: function(constructor, attr, components, validator, after) {
      var len = components.length, capitalize = Util_12.Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n2, component;
      constructor.prototype[getter] = function() {
        var ret = {};
        for (n2 = 0; n2 < len; n2++) {
          component = components[n2];
          ret[component] = this.getAttr(attr + capitalize(component));
        }
        return ret;
      };
      var basicValidator = Validators_12.getComponentValidator(components);
      constructor.prototype[setter] = function(val) {
        var oldVal = this.attrs[attr], key;
        if (validator) {
          val = validator.call(this, val);
        }
        if (basicValidator) {
          basicValidator.call(this, val, attr);
        }
        for (key in val) {
          if (!val.hasOwnProperty(key)) {
            continue;
          }
          this._setAttr(attr + capitalize(key), val[key]);
        }
        this._fireChangeEvent(attr, oldVal, val);
        if (after) {
          after.call(this);
        }
        return this;
      };
      exports.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter: function(constructor, attr) {
      var capitalizedAttr = Util_12.Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
      constructor.prototype[attr] = function() {
        if (arguments.length) {
          this[setter](arguments[0]);
          return this;
        }
        return this[getter]();
      };
    },
    addDeprecatedGetterSetter: function(constructor, attr, def, validator) {
      Util_12.Util.error("Adding deprecated " + attr);
      var method = GET + Util_12.Util._capitalize(attr);
      var message = attr + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
      constructor.prototype[method] = function() {
        Util_12.Util.error(message);
        var val = this.attrs[attr];
        return val === void 0 ? def : val;
      };
      exports.Factory.addSetter(constructor, attr, validator, function() {
        Util_12.Util.error(message);
      });
      exports.Factory.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat: function(constructor, methods) {
      Util_12.Util.each(methods, function(oldMethodName, newMethodName) {
        var method = constructor.prototype[newMethodName];
        var oldGetter = GET + Util_12.Util._capitalize(oldMethodName);
        var oldSetter = SET + Util_12.Util._capitalize(oldMethodName);
        function deprecated() {
          method.apply(this, arguments);
          Util_12.Util.error('"' + oldMethodName + '" method is deprecated and will be removed soon. Use ""' + newMethodName + '" instead.');
        }
        constructor.prototype[oldMethodName] = deprecated;
        constructor.prototype[oldGetter] = deprecated;
        constructor.prototype[oldSetter] = deprecated;
      });
    },
    afterSetFilter: function() {
      this._filterUpToDate = false;
    }
  };
})(Factory);
var Canvas$1 = {};
var Context$1 = {};
var __extends$m = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Context$1, "__esModule", { value: true });
Context$1.HitContext = Context$1.SceneContext = Context$1.Context = void 0;
var Util_1$q = Util;
var Global_1$o = Global;
var COMMA = ",", OPEN_PAREN = "(", CLOSE_PAREN = ")", OPEN_PAREN_BRACKET = "([", CLOSE_BRACKET_PAREN = "])", SEMICOLON = ";", DOUBLE_PAREN = "()", EQUALS = "=", CONTEXT_METHODS = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
];
var CONTEXT_PROPERTIES = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
var traceArrMax = 100;
var Context = function() {
  function Context2(canvas) {
    this.canvas = canvas;
    this._context = canvas._canvas.getContext("2d");
    if (Global_1$o.Konva.enableTrace) {
      this.traceArr = [];
      this._enableTrace();
    }
  }
  Context2.prototype.fillShape = function(shape) {
    if (shape.fillEnabled()) {
      this._fill(shape);
    }
  };
  Context2.prototype._fill = function(shape) {
  };
  Context2.prototype.strokeShape = function(shape) {
    if (shape.hasStroke()) {
      this._stroke(shape);
    }
  };
  Context2.prototype._stroke = function(shape) {
  };
  Context2.prototype.fillStrokeShape = function(shape) {
    if (shape.attrs.fillAfterStrokeEnabled) {
      this.strokeShape(shape);
      this.fillShape(shape);
    } else {
      this.fillShape(shape);
      this.strokeShape(shape);
    }
  };
  Context2.prototype.getTrace = function(relaxed) {
    var traceArr = this.traceArr, len = traceArr.length, str = "", n2, trace, method, args;
    for (n2 = 0; n2 < len; n2++) {
      trace = traceArr[n2];
      method = trace.method;
      if (method) {
        args = trace.args;
        str += method;
        if (relaxed) {
          str += DOUBLE_PAREN;
        } else {
          if (Util_1$q.Util._isArray(args[0])) {
            str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
          } else {
            str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
          }
        }
      } else {
        str += trace.property;
        if (!relaxed) {
          str += EQUALS + trace.val;
        }
      }
      str += SEMICOLON;
    }
    return str;
  };
  Context2.prototype.clearTrace = function() {
    this.traceArr = [];
  };
  Context2.prototype._trace = function(str) {
    var traceArr = this.traceArr, len;
    traceArr.push(str);
    len = traceArr.length;
    if (len >= traceArrMax) {
      traceArr.shift();
    }
  };
  Context2.prototype.reset = function() {
    var pixelRatio = this.getCanvas().getPixelRatio();
    this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
  };
  Context2.prototype.getCanvas = function() {
    return this.canvas;
  };
  Context2.prototype.clear = function(bounds) {
    var canvas = this.getCanvas();
    if (bounds) {
      this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
    } else {
      this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
    }
  };
  Context2.prototype._applyLineCap = function(shape) {
    var lineCap = shape.getLineCap();
    if (lineCap) {
      this.setAttr("lineCap", lineCap);
    }
  };
  Context2.prototype._applyOpacity = function(shape) {
    var absOpacity = shape.getAbsoluteOpacity();
    if (absOpacity !== 1) {
      this.setAttr("globalAlpha", absOpacity);
    }
  };
  Context2.prototype._applyLineJoin = function(shape) {
    var lineJoin = shape.attrs.lineJoin;
    if (lineJoin) {
      this.setAttr("lineJoin", lineJoin);
    }
  };
  Context2.prototype.setAttr = function(attr, val) {
    this._context[attr] = val;
  };
  Context2.prototype.arc = function(a0, a1, a2, a3, a4, a5) {
    this._context.arc(a0, a1, a2, a3, a4, a5);
  };
  Context2.prototype.arcTo = function(a0, a1, a2, a3, a4) {
    this._context.arcTo(a0, a1, a2, a3, a4);
  };
  Context2.prototype.beginPath = function() {
    this._context.beginPath();
  };
  Context2.prototype.bezierCurveTo = function(a0, a1, a2, a3, a4, a5) {
    this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
  };
  Context2.prototype.clearRect = function(a0, a1, a2, a3) {
    this._context.clearRect(a0, a1, a2, a3);
  };
  Context2.prototype.clip = function() {
    this._context.clip();
  };
  Context2.prototype.closePath = function() {
    this._context.closePath();
  };
  Context2.prototype.createImageData = function(a0, a1) {
    var a = arguments;
    if (a.length === 2) {
      return this._context.createImageData(a0, a1);
    } else if (a.length === 1) {
      return this._context.createImageData(a0);
    }
  };
  Context2.prototype.createLinearGradient = function(a0, a1, a2, a3) {
    return this._context.createLinearGradient(a0, a1, a2, a3);
  };
  Context2.prototype.createPattern = function(a0, a1) {
    return this._context.createPattern(a0, a1);
  };
  Context2.prototype.createRadialGradient = function(a0, a1, a2, a3, a4, a5) {
    return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
  };
  Context2.prototype.drawImage = function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
    var a = arguments, _context = this._context;
    if (a.length === 3) {
      _context.drawImage(a0, a1, a2);
    } else if (a.length === 5) {
      _context.drawImage(a0, a1, a2, a3, a4);
    } else if (a.length === 9) {
      _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
    }
  };
  Context2.prototype.ellipse = function(a0, a1, a2, a3, a4, a5, a6, a7) {
    this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
  };
  Context2.prototype.isPointInPath = function(x2, y2) {
    return this._context.isPointInPath(x2, y2);
  };
  Context2.prototype.fill = function() {
    this._context.fill();
  };
  Context2.prototype.fillRect = function(x2, y2, width, height) {
    this._context.fillRect(x2, y2, width, height);
  };
  Context2.prototype.strokeRect = function(x2, y2, width, height) {
    this._context.strokeRect(x2, y2, width, height);
  };
  Context2.prototype.fillText = function(a0, a1, a2) {
    this._context.fillText(a0, a1, a2);
  };
  Context2.prototype.measureText = function(text) {
    return this._context.measureText(text);
  };
  Context2.prototype.getImageData = function(a0, a1, a2, a3) {
    return this._context.getImageData(a0, a1, a2, a3);
  };
  Context2.prototype.lineTo = function(a0, a1) {
    this._context.lineTo(a0, a1);
  };
  Context2.prototype.moveTo = function(a0, a1) {
    this._context.moveTo(a0, a1);
  };
  Context2.prototype.rect = function(a0, a1, a2, a3) {
    this._context.rect(a0, a1, a2, a3);
  };
  Context2.prototype.putImageData = function(a0, a1, a2) {
    this._context.putImageData(a0, a1, a2);
  };
  Context2.prototype.quadraticCurveTo = function(a0, a1, a2, a3) {
    this._context.quadraticCurveTo(a0, a1, a2, a3);
  };
  Context2.prototype.restore = function() {
    this._context.restore();
  };
  Context2.prototype.rotate = function(a0) {
    this._context.rotate(a0);
  };
  Context2.prototype.save = function() {
    this._context.save();
  };
  Context2.prototype.scale = function(a0, a1) {
    this._context.scale(a0, a1);
  };
  Context2.prototype.setLineDash = function(a0) {
    if (this._context.setLineDash) {
      this._context.setLineDash(a0);
    } else if ("mozDash" in this._context) {
      this._context["mozDash"] = a0;
    } else if ("webkitLineDash" in this._context) {
      this._context["webkitLineDash"] = a0;
    }
  };
  Context2.prototype.getLineDash = function() {
    return this._context.getLineDash();
  };
  Context2.prototype.setTransform = function(a0, a1, a2, a3, a4, a5) {
    this._context.setTransform(a0, a1, a2, a3, a4, a5);
  };
  Context2.prototype.stroke = function() {
    this._context.stroke();
  };
  Context2.prototype.strokeText = function(a0, a1, a2, a3) {
    this._context.strokeText(a0, a1, a2, a3);
  };
  Context2.prototype.transform = function(a0, a1, a2, a3, a4, a5) {
    this._context.transform(a0, a1, a2, a3, a4, a5);
  };
  Context2.prototype.translate = function(a0, a1) {
    this._context.translate(a0, a1);
  };
  Context2.prototype._enableTrace = function() {
    var that = this, len = CONTEXT_METHODS.length, _simplifyArray = Util_1$q.Util._simplifyArray, origSetter = this.setAttr, n2, args;
    var func = function(methodName) {
      var origMethod = that[methodName], ret;
      that[methodName] = function() {
        args = _simplifyArray(Array.prototype.slice.call(arguments, 0));
        ret = origMethod.apply(that, arguments);
        that._trace({
          method: methodName,
          args
        });
        return ret;
      };
    };
    for (n2 = 0; n2 < len; n2++) {
      func(CONTEXT_METHODS[n2]);
    }
    that.setAttr = function() {
      origSetter.apply(that, arguments);
      var prop = arguments[0];
      var val = arguments[1];
      if (prop === "shadowOffsetX" || prop === "shadowOffsetY" || prop === "shadowBlur") {
        val = val / this.canvas.getPixelRatio();
      }
      that._trace({
        property: prop,
        val
      });
    };
  };
  Context2.prototype._applyGlobalCompositeOperation = function(node) {
    var globalCompositeOperation = node.getGlobalCompositeOperation();
    if (globalCompositeOperation !== "source-over") {
      this.setAttr("globalCompositeOperation", globalCompositeOperation);
    }
  };
  return Context2;
}();
Context$1.Context = Context;
CONTEXT_PROPERTIES.forEach(function(prop) {
  Object.defineProperty(Context.prototype, prop, {
    get: function() {
      return this._context[prop];
    },
    set: function(val) {
      this._context[prop] = val;
    }
  });
});
var SceneContext = function(_super) {
  __extends$m(SceneContext2, _super);
  function SceneContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SceneContext2.prototype._fillColor = function(shape) {
    var fill = shape.fill();
    this.setAttr("fillStyle", fill);
    shape._fillFunc(this);
  };
  SceneContext2.prototype._fillPattern = function(shape) {
    var fillPatternX = shape.getFillPatternX(), fillPatternY = shape.getFillPatternY(), fillPatternRotation = Global_1$o.Konva.getAngle(shape.getFillPatternRotation()), fillPatternOffsetX = shape.getFillPatternOffsetX(), fillPatternOffsetY = shape.getFillPatternOffsetY();
    shape.getFillPatternScaleX();
    shape.getFillPatternScaleY();
    if (fillPatternX || fillPatternY) {
      this.translate(fillPatternX || 0, fillPatternY || 0);
    }
    if (fillPatternRotation) {
      this.rotate(fillPatternRotation);
    }
    if (fillPatternOffsetX || fillPatternOffsetY) {
      this.translate(-1 * fillPatternOffsetX, -1 * fillPatternOffsetY);
    }
    this.setAttr("fillStyle", shape._getFillPattern());
    shape._fillFunc(this);
  };
  SceneContext2.prototype._fillLinearGradient = function(shape) {
    var grd = shape._getLinearGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  };
  SceneContext2.prototype._fillRadialGradient = function(shape) {
    var grd = shape._getRadialGradient();
    if (grd) {
      this.setAttr("fillStyle", grd);
      shape._fillFunc(this);
    }
  };
  SceneContext2.prototype._fill = function(shape) {
    var hasColor = shape.fill(), fillPriority = shape.getFillPriority();
    if (hasColor && fillPriority === "color") {
      this._fillColor(shape);
      return;
    }
    var hasPattern = shape.getFillPatternImage();
    if (hasPattern && fillPriority === "pattern") {
      this._fillPattern(shape);
      return;
    }
    var hasLinearGradient = shape.getFillLinearGradientColorStops();
    if (hasLinearGradient && fillPriority === "linear-gradient") {
      this._fillLinearGradient(shape);
      return;
    }
    var hasRadialGradient = shape.getFillRadialGradientColorStops();
    if (hasRadialGradient && fillPriority === "radial-gradient") {
      this._fillRadialGradient(shape);
      return;
    }
    if (hasColor) {
      this._fillColor(shape);
    } else if (hasPattern) {
      this._fillPattern(shape);
    } else if (hasLinearGradient) {
      this._fillLinearGradient(shape);
    } else if (hasRadialGradient) {
      this._fillRadialGradient(shape);
    }
  };
  SceneContext2.prototype._strokeLinearGradient = function(shape) {
    var start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
    if (colorStops) {
      for (var n2 = 0; n2 < colorStops.length; n2 += 2) {
        grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
      }
      this.setAttr("strokeStyle", grd);
    }
  };
  SceneContext2.prototype._stroke = function(shape) {
    var dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
    if (shape.hasStroke()) {
      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      if (dash && shape.dashEnabled()) {
        this.setLineDash(dash);
        this.setAttr("lineDashOffset", shape.dashOffset());
      }
      this.setAttr("lineWidth", shape.strokeWidth());
      if (!shape.getShadowForStrokeEnabled()) {
        this.setAttr("shadowColor", "rgba(0,0,0,0)");
      }
      var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
      if (hasLinearGradient) {
        this._strokeLinearGradient(shape);
      } else {
        this.setAttr("strokeStyle", shape.stroke());
      }
      shape._strokeFunc(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  };
  SceneContext2.prototype._applyShadow = function(shape) {
    var util = Util_1$q.Util, color = util.get(shape.getShadowRGBA(), "black"), blur = util.get(shape.getShadowBlur(), 5), offset = util.get(shape.getShadowOffset(), {
      x: 0,
      y: 0
    }), scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
    this.setAttr("shadowColor", color);
    this.setAttr("shadowBlur", blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
    this.setAttr("shadowOffsetX", offset.x * scaleX);
    this.setAttr("shadowOffsetY", offset.y * scaleY);
  };
  return SceneContext2;
}(Context);
Context$1.SceneContext = SceneContext;
var HitContext = function(_super) {
  __extends$m(HitContext2, _super);
  function HitContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  HitContext2.prototype._fill = function(shape) {
    this.save();
    this.setAttr("fillStyle", shape.colorKey);
    shape._fillFuncHit(this);
    this.restore();
  };
  HitContext2.prototype.strokeShape = function(shape) {
    if (shape.hasHitStroke()) {
      this._stroke(shape);
    }
  };
  HitContext2.prototype._stroke = function(shape) {
    if (shape.hasHitStroke()) {
      var strokeScaleEnabled = shape.getStrokeScaleEnabled();
      if (!strokeScaleEnabled) {
        this.save();
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      }
      this._applyLineCap(shape);
      var hitStrokeWidth = shape.hitStrokeWidth();
      var strokeWidth = hitStrokeWidth === "auto" ? shape.strokeWidth() : hitStrokeWidth;
      this.setAttr("lineWidth", strokeWidth);
      this.setAttr("strokeStyle", shape.colorKey);
      shape._strokeFuncHit(this);
      if (!strokeScaleEnabled) {
        this.restore();
      }
    }
  };
  return HitContext2;
}(Context);
Context$1.HitContext = HitContext;
var __extends$l = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Canvas$1, "__esModule", { value: true });
Canvas$1.HitCanvas = Canvas$1.SceneCanvas = Canvas$1.Canvas = void 0;
var Util_1$p = Util;
var Context_1$1 = Context$1;
var Global_1$n = Global;
var Factory_1$y = Factory;
var Validators_1$x = Validators;
var _pixelRatio;
function getDevicePixelRatio() {
  if (_pixelRatio) {
    return _pixelRatio;
  }
  var canvas = Util_1$p.Util.createCanvasElement();
  var context = canvas.getContext("2d");
  _pixelRatio = function() {
    var devicePixelRatio = Global_1$n.Konva._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio || context.backingStorePixelRatio || 1;
    return devicePixelRatio / backingStoreRatio;
  }();
  return _pixelRatio;
}
var Canvas = function() {
  function Canvas2(config) {
    this.pixelRatio = 1;
    this.width = 0;
    this.height = 0;
    this.isCache = false;
    var conf = config || {};
    var pixelRatio = conf.pixelRatio || Global_1$n.Konva.pixelRatio || getDevicePixelRatio();
    this.pixelRatio = pixelRatio;
    this._canvas = Util_1$p.Util.createCanvasElement();
    this._canvas.style.padding = "0";
    this._canvas.style.margin = "0";
    this._canvas.style.border = "0";
    this._canvas.style.background = "transparent";
    this._canvas.style.position = "absolute";
    this._canvas.style.top = "0";
    this._canvas.style.left = "0";
  }
  Canvas2.prototype.getContext = function() {
    return this.context;
  };
  Canvas2.prototype.getPixelRatio = function() {
    return this.pixelRatio;
  };
  Canvas2.prototype.setPixelRatio = function(pixelRatio) {
    var previousRatio = this.pixelRatio;
    this.pixelRatio = pixelRatio;
    this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
  };
  Canvas2.prototype.setWidth = function(width) {
    this.width = this._canvas.width = width * this.pixelRatio;
    this._canvas.style.width = width + "px";
    var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  };
  Canvas2.prototype.setHeight = function(height) {
    this.height = this._canvas.height = height * this.pixelRatio;
    this._canvas.style.height = height + "px";
    var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
    _context.scale(pixelRatio, pixelRatio);
  };
  Canvas2.prototype.getWidth = function() {
    return this.width;
  };
  Canvas2.prototype.getHeight = function() {
    return this.height;
  };
  Canvas2.prototype.setSize = function(width, height) {
    this.setWidth(width || 0);
    this.setHeight(height || 0);
  };
  Canvas2.prototype.toDataURL = function(mimeType, quality) {
    try {
      return this._canvas.toDataURL(mimeType, quality);
    } catch (e) {
      try {
        return this._canvas.toDataURL();
      } catch (err) {
        Util_1$p.Util.error("Unable to get data URL. " + err.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        return "";
      }
    }
  };
  return Canvas2;
}();
Canvas$1.Canvas = Canvas;
Factory_1$y.Factory.addGetterSetter(Canvas, "pixelRatio", void 0, Validators_1$x.getNumberValidator());
var SceneCanvas = function(_super) {
  __extends$l(SceneCanvas2, _super);
  function SceneCanvas2(config) {
    if (config === void 0) {
      config = { width: 0, height: 0 };
    }
    var _this = _super.call(this, config) || this;
    _this.context = new Context_1$1.SceneContext(_this);
    _this.setSize(config.width, config.height);
    return _this;
  }
  return SceneCanvas2;
}(Canvas);
Canvas$1.SceneCanvas = SceneCanvas;
var HitCanvas = function(_super) {
  __extends$l(HitCanvas2, _super);
  function HitCanvas2(config) {
    if (config === void 0) {
      config = { width: 0, height: 0 };
    }
    var _this = _super.call(this, config) || this;
    _this.hitCanvas = true;
    _this.context = new Context_1$1.HitContext(_this);
    _this.setSize(config.width, config.height);
    return _this;
  }
  return HitCanvas2;
}(Canvas);
Canvas$1.HitCanvas = HitCanvas;
var DragAndDrop = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DD = void 0;
  var Global_12 = Global;
  var Util_12 = Util;
  exports.DD = {
    get isDragging() {
      var flag = false;
      exports.DD._dragElements.forEach(function(elem) {
        if (elem.dragStatus === "dragging") {
          flag = true;
        }
      });
      return flag;
    },
    justDragged: false,
    get node() {
      var node;
      exports.DD._dragElements.forEach(function(elem) {
        node = elem.node;
      });
      return node;
    },
    _dragElements: new Map(),
    _drag: function(evt) {
      var nodesToFireEvents = [];
      exports.DD._dragElements.forEach(function(elem, key) {
        var node = elem.node;
        var stage = node.getStage();
        stage.setPointersPositions(evt);
        if (elem.pointerId === void 0) {
          elem.pointerId = Util_12.Util._getFirstPointerId(evt);
        }
        var pos = stage._changedPointerPositions.find(function(pos2) {
          return pos2.id === elem.pointerId;
        });
        if (!pos) {
          return;
        }
        if (elem.dragStatus !== "dragging") {
          var dragDistance = node.dragDistance();
          var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
          if (distance < dragDistance) {
            return;
          }
          node.startDrag({ evt });
          if (!node.isDragging()) {
            return;
          }
        }
        node._setDragPosition(evt, elem);
        nodesToFireEvents.push(node);
      });
      nodesToFireEvents.forEach(function(node) {
        node.fire("dragmove", {
          type: "dragmove",
          target: node,
          evt
        }, true);
      });
    },
    _endDragBefore: function(evt) {
      exports.DD._dragElements.forEach(function(elem, key) {
        var node = elem.node;
        var stage = node.getStage();
        if (evt) {
          stage.setPointersPositions(evt);
        }
        var pos = stage._changedPointerPositions.find(function(pos2) {
          return pos2.id === elem.pointerId;
        });
        if (!pos) {
          return;
        }
        if (elem.dragStatus === "dragging" || elem.dragStatus === "stopped") {
          exports.DD.justDragged = true;
          Global_12.Konva.listenClickTap = false;
          elem.dragStatus = "stopped";
        }
        var drawNode = elem.node.getLayer() || elem.node instanceof Global_12.Konva["Stage"] && elem.node;
        if (drawNode) {
          drawNode.batchDraw();
        }
      });
    },
    _endDragAfter: function(evt) {
      exports.DD._dragElements.forEach(function(elem, key) {
        if (elem.dragStatus === "stopped") {
          elem.node.fire("dragend", {
            type: "dragend",
            target: elem.node,
            evt
          }, true);
        }
        if (elem.dragStatus !== "dragging") {
          exports.DD._dragElements.delete(key);
        }
      });
    }
  };
  if (Global_12.Konva.isBrowser) {
    window.addEventListener("mouseup", exports.DD._endDragBefore, true);
    window.addEventListener("touchend", exports.DD._endDragBefore, true);
    window.addEventListener("mousemove", exports.DD._drag);
    window.addEventListener("touchmove", exports.DD._drag);
    window.addEventListener("mouseup", exports.DD._endDragAfter, false);
    window.addEventListener("touchend", exports.DD._endDragAfter, false);
  }
})(DragAndDrop);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Node = exports._removeName = exports._addName = exports._removeId = exports.names = exports.ids = void 0;
  var Util_12 = Util;
  var Factory_12 = Factory;
  var Canvas_12 = Canvas$1;
  var Global_12 = Global;
  var DragAndDrop_12 = DragAndDrop;
  var Validators_12 = Validators;
  exports.ids = {};
  exports.names = {};
  var _addId = function(node, id2) {
    if (!id2) {
      return;
    }
    exports.ids[id2] = node;
  };
  var _removeId = function(id2, node) {
    if (!id2) {
      return;
    }
    if (exports.ids[id2] !== node) {
      return;
    }
    delete exports.ids[id2];
  };
  exports._removeId = _removeId;
  var _addName = function(node, name) {
    if (name) {
      if (!exports.names[name]) {
        exports.names[name] = [];
      }
      exports.names[name].push(node);
    }
  };
  exports._addName = _addName;
  var _removeName = function(name, _id) {
    if (!name) {
      return;
    }
    var nodes = exports.names[name];
    if (!nodes) {
      return;
    }
    for (var n2 = 0; n2 < nodes.length; n2++) {
      var no = nodes[n2];
      if (no._id === _id) {
        nodes.splice(n2, 1);
      }
    }
    if (nodes.length === 0) {
      delete exports.names[name];
    }
  };
  exports._removeName = _removeName;
  var ABSOLUTE_OPACITY = "absoluteOpacity", ALL_LISTENERS = "allEventListeners", ABSOLUTE_TRANSFORM = "absoluteTransform", ABSOLUTE_SCALE = "absoluteScale", CANVAS = "canvas", CHANGE = "Change", CHILDREN = "children", KONVA = "konva", LISTENING = "listening", MOUSEENTER = "mouseenter", MOUSELEAVE = "mouseleave", NAME = "name", SET = "set", SHAPE = "Shape", SPACE2 = " ", STAGE = "stage", TRANSFORM = "transform", UPPER_STAGE = "Stage", VISIBLE = "visible", TRANSFORM_CHANGE_STR2 = [
    "xChange.konva",
    "yChange.konva",
    "scaleXChange.konva",
    "scaleYChange.konva",
    "skewXChange.konva",
    "skewYChange.konva",
    "rotationChange.konva",
    "offsetXChange.konva",
    "offsetYChange.konva",
    "transformsEnabledChange.konva"
  ].join(SPACE2);
  var emptyChildren = new Util_12.Collection();
  var idCounter = 1;
  var Node2 = function() {
    function Node3(config) {
      this._id = idCounter++;
      this.eventListeners = {};
      this.attrs = {};
      this.index = 0;
      this._allEventListeners = null;
      this.parent = null;
      this._cache = new Map();
      this._attachedDepsListeners = new Map();
      this._lastPos = null;
      this._batchingTransformChange = false;
      this._needClearTransformCache = false;
      this._filterUpToDate = false;
      this._isUnderCache = false;
      this.children = emptyChildren;
      this._dragEventId = null;
      this._shouldFireChangeEvents = false;
      this.setAttrs(config);
      this._shouldFireChangeEvents = true;
    }
    Node3.prototype.hasChildren = function() {
      return false;
    };
    Node3.prototype.getChildren = function() {
      return emptyChildren;
    };
    Node3.prototype._clearCache = function(attr) {
      if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) && this._cache.get(attr)) {
        this._cache.get(attr).dirty = true;
      } else if (attr) {
        this._cache.delete(attr);
      } else {
        this._cache.clear();
      }
    };
    Node3.prototype._getCache = function(attr, privateGetter) {
      var cache = this._cache.get(attr);
      var isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
      var invalid = cache === void 0 || isTransform && cache.dirty === true;
      if (invalid) {
        cache = privateGetter.call(this);
        this._cache.set(attr, cache);
      }
      return cache;
    };
    Node3.prototype._calculate = function(name, deps, getter) {
      var _this = this;
      if (!this._attachedDepsListeners.get(name)) {
        var depsString = deps.map(function(dep) {
          return dep + "Change.konva";
        }).join(SPACE2);
        this.on(depsString, function() {
          _this._clearCache(name);
        });
        this._attachedDepsListeners.set(name, true);
      }
      return this._getCache(name, getter);
    };
    Node3.prototype._getCanvasCache = function() {
      return this._cache.get(CANVAS);
    };
    Node3.prototype._clearSelfAndDescendantCache = function(attr, forceEvent) {
      this._clearCache(attr);
      if (forceEvent && attr === ABSOLUTE_TRANSFORM) {
        this.fire("_clearTransformCache");
      }
      if (this.isCached()) {
        return;
      }
      if (this.children) {
        this.children.each(function(node) {
          node._clearSelfAndDescendantCache(attr, true);
        });
      }
    };
    Node3.prototype.clearCache = function() {
      this._cache.delete(CANVAS);
      this._clearSelfAndDescendantCache();
      return this;
    };
    Node3.prototype.cache = function(config) {
      var conf = config || {};
      var rect = {};
      if (conf.x === void 0 || conf.y === void 0 || conf.width === void 0 || conf.height === void 0) {
        rect = this.getClientRect({
          skipTransform: true,
          relativeTo: this.getParent()
        });
      }
      var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x2 = conf.x === void 0 ? rect.x : conf.x, y2 = conf.y === void 0 ? rect.y : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false;
      if (!width || !height) {
        Util_12.Util.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
        return;
      }
      width += offset * 2;
      height += offset * 2;
      x2 -= offset;
      y2 -= offset;
      var cachedSceneCanvas = new Canvas_12.SceneCanvas({
        pixelRatio,
        width,
        height
      }), cachedFilterCanvas = new Canvas_12.SceneCanvas({
        pixelRatio,
        width: 0,
        height: 0
      }), cachedHitCanvas = new Canvas_12.HitCanvas({
        pixelRatio: 1,
        width,
        height
      }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
      cachedHitCanvas.isCache = true;
      cachedSceneCanvas.isCache = true;
      this._cache.delete("canvas");
      this._filterUpToDate = false;
      if (conf.imageSmoothingEnabled === false) {
        cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
        cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
      }
      sceneContext.save();
      hitContext.save();
      sceneContext.translate(-x2, -y2);
      hitContext.translate(-x2, -y2);
      this._isUnderCache = true;
      this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
      this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
      this.drawScene(cachedSceneCanvas, this);
      this.drawHit(cachedHitCanvas, this);
      this._isUnderCache = false;
      sceneContext.restore();
      hitContext.restore();
      if (drawBorder) {
        sceneContext.save();
        sceneContext.beginPath();
        sceneContext.rect(0, 0, width, height);
        sceneContext.closePath();
        sceneContext.setAttr("strokeStyle", "red");
        sceneContext.setAttr("lineWidth", 5);
        sceneContext.stroke();
        sceneContext.restore();
      }
      this._cache.set(CANVAS, {
        scene: cachedSceneCanvas,
        filter: cachedFilterCanvas,
        hit: cachedHitCanvas,
        x: x2,
        y: y2
      });
      return this;
    };
    Node3.prototype.isCached = function() {
      return this._cache.has("canvas");
    };
    Node3.prototype.getClientRect = function(config) {
      throw new Error('abstract "getClientRect" method call');
    };
    Node3.prototype._transformedRect = function(rect, top) {
      var points = [
        { x: rect.x, y: rect.y },
        { x: rect.x + rect.width, y: rect.y },
        { x: rect.x + rect.width, y: rect.y + rect.height },
        { x: rect.x, y: rect.y + rect.height }
      ];
      var minX, minY, maxX, maxY;
      var trans = this.getAbsoluteTransform(top);
      points.forEach(function(point) {
        var transformed = trans.point(point);
        if (minX === void 0) {
          minX = maxX = transformed.x;
          minY = maxY = transformed.y;
        }
        minX = Math.min(minX, transformed.x);
        minY = Math.min(minY, transformed.y);
        maxX = Math.max(maxX, transformed.x);
        maxY = Math.max(maxY, transformed.y);
      });
      return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    };
    Node3.prototype._drawCachedSceneCanvas = function(context) {
      context.save();
      context._applyOpacity(this);
      context._applyGlobalCompositeOperation(this);
      var canvasCache = this._getCanvasCache();
      context.translate(canvasCache.x, canvasCache.y);
      var cacheCanvas = this._getCachedSceneCanvas();
      var ratio = cacheCanvas.pixelRatio;
      context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
      context.restore();
    };
    Node3.prototype._drawCachedHitCanvas = function(context) {
      var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
      context.save();
      context.translate(canvasCache.x, canvasCache.y);
      context.drawImage(hitCanvas._canvas, 0, 0);
      context.restore();
    };
    Node3.prototype._getCachedSceneCanvas = function() {
      var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n2, filter;
      if (filters) {
        if (!this._filterUpToDate) {
          var ratio = sceneCanvas.pixelRatio;
          filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
          try {
            len = filters.length;
            filterContext.clear();
            filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
            imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
            for (n2 = 0; n2 < len; n2++) {
              filter = filters[n2];
              if (typeof filter !== "function") {
                Util_12.Util.error("Filter should be type of function, but got " + typeof filter + " instead. Please check correct filters");
                continue;
              }
              filter.call(this, imageData);
              filterContext.putImageData(imageData, 0, 0);
            }
          } catch (e) {
            Util_12.Util.error("Unable to apply filter. " + e.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
          }
          this._filterUpToDate = true;
        }
        return filterCanvas;
      }
      return sceneCanvas;
    };
    Node3.prototype.on = function(evtStr, handler) {
      this._cache && this._cache.delete(ALL_LISTENERS);
      if (arguments.length === 3) {
        return this._delegate.apply(this, arguments);
      }
      var events = evtStr.split(SPACE2), len = events.length, n2, event, parts, baseEvent, name;
      for (n2 = 0; n2 < len; n2++) {
        event = events[n2];
        parts = event.split(".");
        baseEvent = parts[0];
        name = parts[1] || "";
        if (!this.eventListeners[baseEvent]) {
          this.eventListeners[baseEvent] = [];
        }
        this.eventListeners[baseEvent].push({
          name,
          handler
        });
      }
      return this;
    };
    Node3.prototype.off = function(evtStr, callback) {
      var events = (evtStr || "").split(SPACE2), len = events.length, n2, t2, event, parts, baseEvent, name;
      this._cache && this._cache.delete(ALL_LISTENERS);
      if (!evtStr) {
        for (t2 in this.eventListeners) {
          this._off(t2);
        }
      }
      for (n2 = 0; n2 < len; n2++) {
        event = events[n2];
        parts = event.split(".");
        baseEvent = parts[0];
        name = parts[1];
        if (baseEvent) {
          if (this.eventListeners[baseEvent]) {
            this._off(baseEvent, name, callback);
          }
        } else {
          for (t2 in this.eventListeners) {
            this._off(t2, name, callback);
          }
        }
      }
      return this;
    };
    Node3.prototype.dispatchEvent = function(evt) {
      var e = {
        target: this,
        type: evt.type,
        evt
      };
      this.fire(evt.type, e);
      return this;
    };
    Node3.prototype.addEventListener = function(type, handler) {
      this.on(type, function(evt) {
        handler.call(this, evt.evt);
      });
      return this;
    };
    Node3.prototype.removeEventListener = function(type) {
      this.off(type);
      return this;
    };
    Node3.prototype._delegate = function(event, selector, handler) {
      var stopNode = this;
      this.on(event, function(evt) {
        var targets = evt.target.findAncestors(selector, true, stopNode);
        for (var i = 0; i < targets.length; i++) {
          evt = Util_12.Util.cloneObject(evt);
          evt.currentTarget = targets[i];
          handler.call(targets[i], evt);
        }
      });
    };
    Node3.prototype.remove = function() {
      if (this.isDragging()) {
        this.stopDrag();
      }
      DragAndDrop_12.DD._dragElements.delete(this._id);
      this._remove();
      return this;
    };
    Node3.prototype._clearCaches = function() {
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
      this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
      this._clearSelfAndDescendantCache(STAGE);
      this._clearSelfAndDescendantCache(VISIBLE);
      this._clearSelfAndDescendantCache(LISTENING);
    };
    Node3.prototype._remove = function() {
      this._clearCaches();
      var parent = this.getParent();
      if (parent && parent.children) {
        parent.children.splice(this.index, 1);
        parent._setChildrenIndices();
        this.parent = null;
      }
    };
    Node3.prototype.destroy = function() {
      exports._removeId(this.id(), this);
      var names = (this.name() || "").split(/\s/g);
      for (var i = 0; i < names.length; i++) {
        var subname = names[i];
        exports._removeName(subname, this._id);
      }
      this.remove();
      return this;
    };
    Node3.prototype.getAttr = function(attr) {
      var method = "get" + Util_12.Util._capitalize(attr);
      if (Util_12.Util._isFunction(this[method])) {
        return this[method]();
      }
      return this.attrs[attr];
    };
    Node3.prototype.getAncestors = function() {
      var parent = this.getParent(), ancestors = new Util_12.Collection();
      while (parent) {
        ancestors.push(parent);
        parent = parent.getParent();
      }
      return ancestors;
    };
    Node3.prototype.getAttrs = function() {
      return this.attrs || {};
    };
    Node3.prototype.setAttrs = function(config) {
      var _this = this;
      this._batchTransformChanges(function() {
        var key, method;
        if (!config) {
          return _this;
        }
        for (key in config) {
          if (key === CHILDREN) {
            continue;
          }
          method = SET + Util_12.Util._capitalize(key);
          if (Util_12.Util._isFunction(_this[method])) {
            _this[method](config[key]);
          } else {
            _this._setAttr(key, config[key]);
          }
        }
      });
      return this;
    };
    Node3.prototype.isListening = function() {
      return this._getCache(LISTENING, this._isListening);
    };
    Node3.prototype._isListening = function(relativeTo) {
      var listening = this.listening();
      if (!listening) {
        return false;
      }
      var parent = this.getParent();
      if (parent && parent !== relativeTo && this !== relativeTo) {
        return parent._isListening(relativeTo);
      } else {
        return true;
      }
    };
    Node3.prototype.isVisible = function() {
      return this._getCache(VISIBLE, this._isVisible);
    };
    Node3.prototype._isVisible = function(relativeTo) {
      var visible = this.visible();
      if (!visible) {
        return false;
      }
      var parent = this.getParent();
      if (parent && parent !== relativeTo && this !== relativeTo) {
        return parent._isVisible(relativeTo);
      } else {
        return true;
      }
    };
    Node3.prototype.shouldDrawHit = function(top, skipDragCheck) {
      if (skipDragCheck === void 0) {
        skipDragCheck = false;
      }
      if (top) {
        return this._isVisible(top) && this._isListening(top);
      }
      var layer = this.getLayer();
      var layerUnderDrag = false;
      DragAndDrop_12.DD._dragElements.forEach(function(elem) {
        if (elem.dragStatus !== "dragging") {
          return;
        } else if (elem.node.nodeType === "Stage") {
          layerUnderDrag = true;
        } else if (elem.node.getLayer() === layer) {
          layerUnderDrag = true;
        }
      });
      var dragSkip = !skipDragCheck && !Global_12.Konva.hitOnDragEnabled && layerUnderDrag;
      return this.isListening() && this.isVisible() && !dragSkip;
    };
    Node3.prototype.show = function() {
      this.visible(true);
      return this;
    };
    Node3.prototype.hide = function() {
      this.visible(false);
      return this;
    };
    Node3.prototype.getZIndex = function() {
      return this.index || 0;
    };
    Node3.prototype.getAbsoluteZIndex = function() {
      var depth = this.getDepth(), that = this, index = 0, nodes, len, n2, child;
      function addChildren(children) {
        nodes = [];
        len = children.length;
        for (n2 = 0; n2 < len; n2++) {
          child = children[n2];
          index++;
          if (child.nodeType !== SHAPE) {
            nodes = nodes.concat(child.getChildren().toArray());
          }
          if (child._id === that._id) {
            n2 = len;
          }
        }
        if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
          addChildren(nodes);
        }
      }
      if (that.nodeType !== UPPER_STAGE) {
        addChildren(that.getStage().getChildren());
      }
      return index;
    };
    Node3.prototype.getDepth = function() {
      var depth = 0, parent = this.parent;
      while (parent) {
        depth++;
        parent = parent.parent;
      }
      return depth;
    };
    Node3.prototype._batchTransformChanges = function(func) {
      this._batchingTransformChange = true;
      func();
      this._batchingTransformChange = false;
      if (this._needClearTransformCache) {
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM, true);
      }
      this._needClearTransformCache = false;
    };
    Node3.prototype.setPosition = function(pos) {
      var _this = this;
      this._batchTransformChanges(function() {
        _this.x(pos.x);
        _this.y(pos.y);
      });
      return this;
    };
    Node3.prototype.getPosition = function() {
      return {
        x: this.x(),
        y: this.y()
      };
    };
    Node3.prototype.getAbsolutePosition = function(top) {
      var haveCachedParent = false;
      var parent = this.parent;
      while (parent) {
        if (parent.isCached()) {
          haveCachedParent = true;
          break;
        }
        parent = parent.parent;
      }
      if (haveCachedParent && !top) {
        top = true;
      }
      var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Util_12.Transform(), offset = this.offset();
      absoluteTransform.m = absoluteMatrix.slice();
      absoluteTransform.translate(offset.x, offset.y);
      return absoluteTransform.getTranslation();
    };
    Node3.prototype.setAbsolutePosition = function(pos) {
      var origTrans = this._clearTransform();
      this.attrs.x = origTrans.x;
      this.attrs.y = origTrans.y;
      delete origTrans.x;
      delete origTrans.y;
      this._clearCache(TRANSFORM);
      var it = this._getAbsoluteTransform().copy();
      it.invert();
      it.translate(pos.x, pos.y);
      pos = {
        x: this.attrs.x + it.getTranslation().x,
        y: this.attrs.y + it.getTranslation().y
      };
      this._setTransform(origTrans);
      this.setPosition({ x: pos.x, y: pos.y });
      this._clearCache(TRANSFORM);
      this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
      return this;
    };
    Node3.prototype._setTransform = function(trans) {
      var key;
      for (key in trans) {
        this.attrs[key] = trans[key];
      }
    };
    Node3.prototype._clearTransform = function() {
      var trans = {
        x: this.x(),
        y: this.y(),
        rotation: this.rotation(),
        scaleX: this.scaleX(),
        scaleY: this.scaleY(),
        offsetX: this.offsetX(),
        offsetY: this.offsetY(),
        skewX: this.skewX(),
        skewY: this.skewY()
      };
      this.attrs.x = 0;
      this.attrs.y = 0;
      this.attrs.rotation = 0;
      this.attrs.scaleX = 1;
      this.attrs.scaleY = 1;
      this.attrs.offsetX = 0;
      this.attrs.offsetY = 0;
      this.attrs.skewX = 0;
      this.attrs.skewY = 0;
      return trans;
    };
    Node3.prototype.move = function(change) {
      var changeX = change.x, changeY = change.y, x2 = this.x(), y2 = this.y();
      if (changeX !== void 0) {
        x2 += changeX;
      }
      if (changeY !== void 0) {
        y2 += changeY;
      }
      this.setPosition({ x: x2, y: y2 });
      return this;
    };
    Node3.prototype._eachAncestorReverse = function(func, top) {
      var family = [], parent = this.getParent(), len, n2;
      if (top && top._id === this._id) {
        return;
      }
      family.unshift(this);
      while (parent && (!top || parent._id !== top._id)) {
        family.unshift(parent);
        parent = parent.parent;
      }
      len = family.length;
      for (n2 = 0; n2 < len; n2++) {
        func(family[n2]);
      }
    };
    Node3.prototype.rotate = function(theta) {
      this.rotation(this.rotation() + theta);
      return this;
    };
    Node3.prototype.moveToTop = function() {
      if (!this.parent) {
        Util_12.Util.warn("Node has no parent. moveToTop function is ignored.");
        return false;
      }
      var index = this.index;
      this.parent.children.splice(index, 1);
      this.parent.children.push(this);
      this.parent._setChildrenIndices();
      return true;
    };
    Node3.prototype.moveUp = function() {
      if (!this.parent) {
        Util_12.Util.warn("Node has no parent. moveUp function is ignored.");
        return false;
      }
      var index = this.index, len = this.parent.getChildren().length;
      if (index < len - 1) {
        this.parent.children.splice(index, 1);
        this.parent.children.splice(index + 1, 0, this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    };
    Node3.prototype.moveDown = function() {
      if (!this.parent) {
        Util_12.Util.warn("Node has no parent. moveDown function is ignored.");
        return false;
      }
      var index = this.index;
      if (index > 0) {
        this.parent.children.splice(index, 1);
        this.parent.children.splice(index - 1, 0, this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    };
    Node3.prototype.moveToBottom = function() {
      if (!this.parent) {
        Util_12.Util.warn("Node has no parent. moveToBottom function is ignored.");
        return false;
      }
      var index = this.index;
      if (index > 0) {
        this.parent.children.splice(index, 1);
        this.parent.children.unshift(this);
        this.parent._setChildrenIndices();
        return true;
      }
      return false;
    };
    Node3.prototype.setZIndex = function(zIndex) {
      if (!this.parent) {
        Util_12.Util.warn("Node has no parent. zIndex parameter is ignored.");
        return this;
      }
      if (zIndex < 0 || zIndex >= this.parent.children.length) {
        Util_12.Util.warn("Unexpected value " + zIndex + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
      }
      var index = this.index;
      this.parent.children.splice(index, 1);
      this.parent.children.splice(zIndex, 0, this);
      this.parent._setChildrenIndices();
      return this;
    };
    Node3.prototype.getAbsoluteOpacity = function() {
      return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    };
    Node3.prototype._getAbsoluteOpacity = function() {
      var absOpacity = this.opacity();
      var parent = this.getParent();
      if (parent && !parent._isUnderCache) {
        absOpacity *= parent.getAbsoluteOpacity();
      }
      return absOpacity;
    };
    Node3.prototype.moveTo = function(newContainer) {
      if (this.getParent() !== newContainer) {
        this._remove();
        newContainer.add(this);
      }
      return this;
    };
    Node3.prototype.toObject = function() {
      var obj = {}, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
      obj.attrs = {};
      for (key in attrs) {
        val = attrs[key];
        nonPlainObject = Util_12.Util.isObject(val) && !Util_12.Util._isPlainObject(val) && !Util_12.Util._isArray(val);
        if (nonPlainObject) {
          continue;
        }
        getter = typeof this[key] === "function" && this[key];
        delete attrs[key];
        defaultValue = getter ? getter.call(this) : null;
        attrs[key] = val;
        if (defaultValue !== val) {
          obj.attrs[key] = val;
        }
      }
      obj.className = this.getClassName();
      return Util_12.Util._prepareToStringify(obj);
    };
    Node3.prototype.toJSON = function() {
      return JSON.stringify(this.toObject());
    };
    Node3.prototype.getParent = function() {
      return this.parent;
    };
    Node3.prototype.findAncestors = function(selector, includeSelf, stopNode) {
      var res = [];
      if (includeSelf && this._isMatch(selector)) {
        res.push(this);
      }
      var ancestor = this.parent;
      while (ancestor) {
        if (ancestor === stopNode) {
          return res;
        }
        if (ancestor._isMatch(selector)) {
          res.push(ancestor);
        }
        ancestor = ancestor.parent;
      }
      return res;
    };
    Node3.prototype.isAncestorOf = function(node) {
      return false;
    };
    Node3.prototype.findAncestor = function(selector, includeSelf, stopNode) {
      return this.findAncestors(selector, includeSelf, stopNode)[0];
    };
    Node3.prototype._isMatch = function(selector) {
      if (!selector) {
        return false;
      }
      if (typeof selector === "function") {
        return selector(this);
      }
      var selectorArr = selector.replace(/ /g, "").split(","), len = selectorArr.length, n2, sel;
      for (n2 = 0; n2 < len; n2++) {
        sel = selectorArr[n2];
        if (!Util_12.Util.isValidSelector(sel)) {
          Util_12.Util.warn('Selector "' + sel + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
          Util_12.Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
          Util_12.Util.warn("Konva is awesome, right?");
        }
        if (sel.charAt(0) === "#") {
          if (this.id() === sel.slice(1)) {
            return true;
          }
        } else if (sel.charAt(0) === ".") {
          if (this.hasName(sel.slice(1))) {
            return true;
          }
        } else if (this.className === sel || this.nodeType === sel) {
          return true;
        }
      }
      return false;
    };
    Node3.prototype.getLayer = function() {
      var parent = this.getParent();
      return parent ? parent.getLayer() : null;
    };
    Node3.prototype.getStage = function() {
      return this._getCache(STAGE, this._getStage);
    };
    Node3.prototype._getStage = function() {
      var parent = this.getParent();
      if (parent) {
        return parent.getStage();
      } else {
        return void 0;
      }
    };
    Node3.prototype.fire = function(eventType, evt, bubble) {
      if (evt === void 0) {
        evt = {};
      }
      evt.target = evt.target || this;
      if (bubble) {
        this._fireAndBubble(eventType, evt);
      } else {
        this._fire(eventType, evt);
      }
      return this;
    };
    Node3.prototype.getAbsoluteTransform = function(top) {
      if (top) {
        return this._getAbsoluteTransform(top);
      } else {
        return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
      }
    };
    Node3.prototype._getAbsoluteTransform = function(top) {
      var at;
      if (top) {
        at = new Util_12.Transform();
        this._eachAncestorReverse(function(node) {
          var transformsEnabled2 = node.transformsEnabled();
          if (transformsEnabled2 === "all") {
            at.multiply(node.getTransform());
          } else if (transformsEnabled2 === "position") {
            at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
          }
        }, top);
        return at;
      } else {
        at = this._cache.get(ABSOLUTE_TRANSFORM) || new Util_12.Transform();
        if (this.parent) {
          this.parent.getAbsoluteTransform().copyInto(at);
        } else {
          at.reset();
        }
        var transformsEnabled = this.transformsEnabled();
        if (transformsEnabled === "all") {
          at.multiply(this.getTransform());
        } else if (transformsEnabled === "position") {
          var x2 = this.attrs.x || 0;
          var y2 = this.attrs.y || 0;
          var offsetX = this.attrs.offsetX || 0;
          var offsetY = this.attrs.offsetY || 0;
          at.translate(x2 - offsetX, y2 - offsetY);
        }
        at.dirty = false;
        return at;
      }
    };
    Node3.prototype.getAbsoluteScale = function(top) {
      var parent = this;
      while (parent) {
        if (parent._isUnderCache) {
          top = parent;
        }
        parent = parent.getParent();
      }
      var transform = this.getAbsoluteTransform(top);
      var attrs = transform.decompose();
      return {
        x: attrs.scaleX,
        y: attrs.scaleY
      };
    };
    Node3.prototype.getAbsoluteRotation = function() {
      return this.getAbsoluteTransform().decompose().rotation;
    };
    Node3.prototype.getTransform = function() {
      return this._getCache(TRANSFORM, this._getTransform);
    };
    Node3.prototype._getTransform = function() {
      var _a, _b;
      var m = this._cache.get(TRANSFORM) || new Util_12.Transform();
      m.reset();
      var x2 = this.x(), y2 = this.y(), rotation = Global_12.Konva.getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
      if (x2 !== 0 || y2 !== 0) {
        m.translate(x2, y2);
      }
      if (rotation !== 0) {
        m.rotate(rotation);
      }
      if (skewX !== 0 || skewY !== 0) {
        m.skew(skewX, skewY);
      }
      if (scaleX !== 1 || scaleY !== 1) {
        m.scale(scaleX, scaleY);
      }
      if (offsetX !== 0 || offsetY !== 0) {
        m.translate(-1 * offsetX, -1 * offsetY);
      }
      m.dirty = false;
      return m;
    };
    Node3.prototype.clone = function(obj) {
      var attrs = Util_12.Util.cloneObject(this.attrs), key, allListeners, len, n2, listener;
      for (key in obj) {
        attrs[key] = obj[key];
      }
      var node = new this.constructor(attrs);
      for (key in this.eventListeners) {
        allListeners = this.eventListeners[key];
        len = allListeners.length;
        for (n2 = 0; n2 < len; n2++) {
          listener = allListeners[n2];
          if (listener.name.indexOf(KONVA) < 0) {
            if (!node.eventListeners[key]) {
              node.eventListeners[key] = [];
            }
            node.eventListeners[key].push(listener);
          }
        }
      }
      return node;
    };
    Node3.prototype._toKonvaCanvas = function(config) {
      config = config || {};
      var box = this.getClientRect();
      var stage = this.getStage(), x2 = config.x !== void 0 ? config.x : box.x, y2 = config.y !== void 0 ? config.y : box.y, pixelRatio = config.pixelRatio || 1, canvas = new Canvas_12.SceneCanvas({
        width: config.width || box.width || (stage ? stage.width() : 0),
        height: config.height || box.height || (stage ? stage.height() : 0),
        pixelRatio
      }), context = canvas.getContext();
      context.save();
      if (x2 || y2) {
        context.translate(-1 * x2, -1 * y2);
      }
      this.drawScene(canvas);
      context.restore();
      return canvas;
    };
    Node3.prototype.toCanvas = function(config) {
      return this._toKonvaCanvas(config)._canvas;
    };
    Node3.prototype.toDataURL = function(config) {
      config = config || {};
      var mimeType = config.mimeType || null, quality = config.quality || null;
      var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
      if (config.callback) {
        config.callback(url);
      }
      return url;
    };
    Node3.prototype.toImage = function(config) {
      if (!config || !config.callback) {
        throw "callback required for toImage method config argument";
      }
      var callback = config.callback;
      delete config.callback;
      Util_12.Util._urlToImage(this.toDataURL(config), function(img) {
        callback(img);
      });
    };
    Node3.prototype.setSize = function(size) {
      this.width(size.width);
      this.height(size.height);
      return this;
    };
    Node3.prototype.getSize = function() {
      return {
        width: this.width(),
        height: this.height()
      };
    };
    Node3.prototype.getClassName = function() {
      return this.className || this.nodeType;
    };
    Node3.prototype.getType = function() {
      return this.nodeType;
    };
    Node3.prototype.getDragDistance = function() {
      if (this.attrs.dragDistance !== void 0) {
        return this.attrs.dragDistance;
      } else if (this.parent) {
        return this.parent.getDragDistance();
      } else {
        return Global_12.Konva.dragDistance;
      }
    };
    Node3.prototype._off = function(type, name, callback) {
      var evtListeners = this.eventListeners[type], i, evtName, handler;
      for (i = 0; i < evtListeners.length; i++) {
        evtName = evtListeners[i].name;
        handler = evtListeners[i].handler;
        if ((evtName !== "konva" || name === "konva") && (!name || evtName === name) && (!callback || callback === handler)) {
          evtListeners.splice(i, 1);
          if (evtListeners.length === 0) {
            delete this.eventListeners[type];
            break;
          }
          i--;
        }
      }
    };
    Node3.prototype._fireChangeEvent = function(attr, oldVal, newVal) {
      this._fire(attr + CHANGE, {
        oldVal,
        newVal
      });
    };
    Node3.prototype.setId = function(id2) {
      var oldId = this.id();
      exports._removeId(oldId, this);
      _addId(this, id2);
      this._setAttr("id", id2);
      return this;
    };
    Node3.prototype.setName = function(name) {
      var oldNames = (this.name() || "").split(/\s/g);
      var newNames = (name || "").split(/\s/g);
      var subname, i;
      for (i = 0; i < oldNames.length; i++) {
        subname = oldNames[i];
        if (newNames.indexOf(subname) === -1 && subname) {
          exports._removeName(subname, this._id);
        }
      }
      for (i = 0; i < newNames.length; i++) {
        subname = newNames[i];
        if (oldNames.indexOf(subname) === -1 && subname) {
          exports._addName(this, subname);
        }
      }
      this._setAttr(NAME, name);
      return this;
    };
    Node3.prototype.addName = function(name) {
      if (!this.hasName(name)) {
        var oldName = this.name();
        var newName = oldName ? oldName + " " + name : name;
        this.setName(newName);
      }
      return this;
    };
    Node3.prototype.hasName = function(name) {
      if (!name) {
        return false;
      }
      var fullName = this.name();
      if (!fullName) {
        return false;
      }
      var names = (fullName || "").split(/\s/g);
      return names.indexOf(name) !== -1;
    };
    Node3.prototype.removeName = function(name) {
      var names = (this.name() || "").split(/\s/g);
      var index = names.indexOf(name);
      if (index !== -1) {
        names.splice(index, 1);
        this.setName(names.join(" "));
      }
      return this;
    };
    Node3.prototype.setAttr = function(attr, val) {
      var func = this[SET + Util_12.Util._capitalize(attr)];
      if (Util_12.Util._isFunction(func)) {
        func.call(this, val);
      } else {
        this._setAttr(attr, val);
      }
      return this;
    };
    Node3.prototype._setAttr = function(key, val, skipFire) {
      var oldVal = this.attrs[key];
      if (oldVal === val && !Util_12.Util.isObject(val)) {
        return;
      }
      if (val === void 0 || val === null) {
        delete this.attrs[key];
      } else {
        this.attrs[key] = val;
      }
      if (this._shouldFireChangeEvents) {
        this._fireChangeEvent(key, oldVal, val);
      }
    };
    Node3.prototype._setComponentAttr = function(key, component, val) {
      var oldVal;
      if (val !== void 0) {
        oldVal = this.attrs[key];
        if (!oldVal) {
          this.attrs[key] = this.getAttr(key);
        }
        this.attrs[key][component] = val;
        this._fireChangeEvent(key, oldVal, val);
      }
    };
    Node3.prototype._fireAndBubble = function(eventType, evt, compareShape) {
      if (evt && this.nodeType === SHAPE) {
        evt.target = this;
      }
      var shouldStop = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && (compareShape && (this === compareShape || this.isAncestorOf && this.isAncestorOf(compareShape)) || this.nodeType === "Stage" && !compareShape);
      if (!shouldStop) {
        this._fire(eventType, evt);
        var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) && compareShape && compareShape.isAncestorOf && compareShape.isAncestorOf(this) && !compareShape.isAncestorOf(this.parent);
        if ((evt && !evt.cancelBubble || !evt) && this.parent && this.parent.isListening() && !stopBubble) {
          if (compareShape && compareShape.parent) {
            this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
          } else {
            this._fireAndBubble.call(this.parent, eventType, evt);
          }
        }
      }
    };
    Node3.prototype._getProtoListeners = function(eventType) {
      var listeners = this._cache.get(ALL_LISTENERS);
      if (!listeners) {
        listeners = {};
        var obj = Object.getPrototypeOf(this);
        while (obj) {
          if (!obj.eventListeners) {
            obj = Object.getPrototypeOf(obj);
            continue;
          }
          for (var event in obj.eventListeners) {
            var newEvents = obj.eventListeners[event];
            var oldEvents = listeners[event] || [];
            listeners[event] = newEvents.concat(oldEvents);
          }
          obj = Object.getPrototypeOf(obj);
        }
        this._cache.set(ALL_LISTENERS, listeners);
      }
      return listeners[eventType];
    };
    Node3.prototype._fire = function(eventType, evt) {
      evt = evt || {};
      evt.currentTarget = this;
      evt.type = eventType;
      var topListeners = this._getProtoListeners(eventType);
      if (topListeners) {
        for (var i = 0; i < topListeners.length; i++) {
          topListeners[i].handler.call(this, evt);
        }
      }
      var selfListeners = this.eventListeners[eventType];
      if (selfListeners) {
        for (var i = 0; i < selfListeners.length; i++) {
          selfListeners[i].handler.call(this, evt);
        }
      }
    };
    Node3.prototype.draw = function() {
      this.drawScene();
      this.drawHit();
      return this;
    };
    Node3.prototype._createDragElement = function(evt) {
      var pointerId = evt ? evt.pointerId : void 0;
      var stage = this.getStage();
      var ap = this.getAbsolutePosition();
      var pos = stage._getPointerById(pointerId) || stage._changedPointerPositions[0] || ap;
      DragAndDrop_12.DD._dragElements.set(this._id, {
        node: this,
        startPointerPos: pos,
        offset: {
          x: pos.x - ap.x,
          y: pos.y - ap.y
        },
        dragStatus: "ready",
        pointerId
      });
    };
    Node3.prototype.startDrag = function(evt, bubbleEvent) {
      if (bubbleEvent === void 0) {
        bubbleEvent = true;
      }
      if (!DragAndDrop_12.DD._dragElements.has(this._id)) {
        this._createDragElement(evt);
      }
      var elem = DragAndDrop_12.DD._dragElements.get(this._id);
      elem.dragStatus = "dragging";
      this.fire("dragstart", {
        type: "dragstart",
        target: this,
        evt: evt && evt.evt
      }, bubbleEvent);
    };
    Node3.prototype._setDragPosition = function(evt, elem) {
      var pos = this.getStage()._getPointerById(elem.pointerId);
      if (!pos) {
        return;
      }
      var newNodePos = {
        x: pos.x - elem.offset.x,
        y: pos.y - elem.offset.y
      };
      var dbf = this.dragBoundFunc();
      if (dbf !== void 0) {
        var bounded = dbf.call(this, newNodePos, evt);
        if (!bounded) {
          Util_12.Util.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
        } else {
          newNodePos = bounded;
        }
      }
      if (!this._lastPos || this._lastPos.x !== newNodePos.x || this._lastPos.y !== newNodePos.y) {
        this.setAbsolutePosition(newNodePos);
        if (this.getLayer()) {
          this.getLayer().batchDraw();
        } else if (this.getStage()) {
          this.getStage().batchDraw();
        }
      }
      this._lastPos = newNodePos;
    };
    Node3.prototype.stopDrag = function(evt) {
      var elem = DragAndDrop_12.DD._dragElements.get(this._id);
      if (elem) {
        elem.dragStatus = "stopped";
      }
      DragAndDrop_12.DD._endDragBefore(evt);
      DragAndDrop_12.DD._endDragAfter(evt);
    };
    Node3.prototype.setDraggable = function(draggable) {
      this._setAttr("draggable", draggable);
      this._dragChange();
    };
    Node3.prototype.isDragging = function() {
      var elem = DragAndDrop_12.DD._dragElements.get(this._id);
      return elem ? elem.dragStatus === "dragging" : false;
    };
    Node3.prototype._listenDrag = function() {
      this._dragCleanup();
      this.on("mousedown.konva touchstart.konva", function(evt) {
        var _this = this;
        var shouldCheckButton = evt.evt["button"] !== void 0;
        var canDrag = !shouldCheckButton || Global_12.Konva.dragButtons.indexOf(evt.evt["button"]) >= 0;
        if (!canDrag) {
          return;
        }
        if (this.isDragging()) {
          return;
        }
        var hasDraggingChild = false;
        DragAndDrop_12.DD._dragElements.forEach(function(elem) {
          if (_this.isAncestorOf(elem.node)) {
            hasDraggingChild = true;
          }
        });
        if (!hasDraggingChild) {
          this._createDragElement(evt);
        }
      });
    };
    Node3.prototype._dragChange = function() {
      if (this.attrs.draggable) {
        this._listenDrag();
      } else {
        this._dragCleanup();
        var stage = this.getStage();
        if (!stage) {
          return;
        }
        var dragElement = DragAndDrop_12.DD._dragElements.get(this._id);
        var isDragging = dragElement && dragElement.dragStatus === "dragging";
        var isReady = dragElement && dragElement.dragStatus === "ready";
        if (isDragging) {
          this.stopDrag();
        } else if (isReady) {
          DragAndDrop_12.DD._dragElements.delete(this._id);
        }
      }
    };
    Node3.prototype._dragCleanup = function() {
      this.off("mousedown.konva");
      this.off("touchstart.konva");
    };
    Node3.create = function(data, container) {
      if (Util_12.Util._isString(data)) {
        data = JSON.parse(data);
      }
      return this._createNode(data, container);
    };
    Node3._createNode = function(obj, container) {
      var className = Node3.prototype.getClassName.call(obj), children = obj.children, no, len, n2;
      if (container) {
        obj.attrs.container = container;
      }
      if (!Global_12._NODES_REGISTRY[className]) {
        Util_12.Util.warn('Can not find a node with class name "' + className + '". Fallback to "Shape".');
        className = "Shape";
      }
      var Class = Global_12._NODES_REGISTRY[className];
      no = new Class(obj.attrs);
      if (children) {
        len = children.length;
        for (n2 = 0; n2 < len; n2++) {
          no.add(Node3._createNode(children[n2]));
        }
      }
      return no;
    };
    return Node3;
  }();
  exports.Node = Node2;
  Node2.prototype.nodeType = "Node";
  Node2.prototype._attrsAffectingSize = [];
  Node2.prototype.eventListeners = {};
  Node2.prototype.on.call(Node2.prototype, TRANSFORM_CHANGE_STR2, function() {
    if (this._batchingTransformChange) {
      this._needClearTransformCache = true;
      return;
    }
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
  });
  Node2.prototype.on.call(Node2.prototype, "visibleChange.konva", function() {
    this._clearSelfAndDescendantCache(VISIBLE);
  });
  Node2.prototype.on.call(Node2.prototype, "listeningChange.konva", function() {
    this._clearSelfAndDescendantCache(LISTENING);
  });
  Node2.prototype.on.call(Node2.prototype, "opacityChange.konva", function() {
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
  });
  var addGetterSetter = Factory_12.Factory.addGetterSetter;
  addGetterSetter(Node2, "zIndex");
  addGetterSetter(Node2, "absolutePosition");
  addGetterSetter(Node2, "position");
  addGetterSetter(Node2, "x", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "y", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "globalCompositeOperation", "source-over", Validators_12.getStringValidator());
  addGetterSetter(Node2, "opacity", 1, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "name", "", Validators_12.getStringValidator());
  addGetterSetter(Node2, "id", "", Validators_12.getStringValidator());
  addGetterSetter(Node2, "rotation", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Node2, "scale", ["x", "y"]);
  addGetterSetter(Node2, "scaleX", 1, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "scaleY", 1, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Node2, "skew", ["x", "y"]);
  addGetterSetter(Node2, "skewX", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "skewY", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Node2, "offset", ["x", "y"]);
  addGetterSetter(Node2, "offsetX", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "offsetY", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "dragDistance", null, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "width", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "height", 0, Validators_12.getNumberValidator());
  addGetterSetter(Node2, "listening", true, Validators_12.getBooleanValidator());
  addGetterSetter(Node2, "preventDefault", true, Validators_12.getBooleanValidator());
  addGetterSetter(Node2, "filters", null, function(val) {
    this._filterUpToDate = false;
    return val;
  });
  addGetterSetter(Node2, "visible", true, Validators_12.getBooleanValidator());
  addGetterSetter(Node2, "transformsEnabled", "all", Validators_12.getStringValidator());
  addGetterSetter(Node2, "size");
  addGetterSetter(Node2, "dragBoundFunc");
  addGetterSetter(Node2, "draggable", false, Validators_12.getBooleanValidator());
  Factory_12.Factory.backCompat(Node2, {
    rotateDeg: "rotate",
    setRotationDeg: "setRotation",
    getRotationDeg: "getRotation"
  });
  Util_12.Collection.mapMethods(Node2);
})(Node);
var Container$1 = {};
var __extends$k = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Container$1, "__esModule", { value: true });
Container$1.Container = void 0;
var Util_1$o = Util;
var Factory_1$x = Factory;
var Node_1$i = Node;
var Validators_1$w = Validators;
var Container = function(_super) {
  __extends$k(Container2, _super);
  function Container2() {
    var _this = _super !== null && _super.apply(this, arguments) || this;
    _this.children = new Util_1$o.Collection();
    return _this;
  }
  Container2.prototype.getChildren = function(filterFunc) {
    if (!filterFunc) {
      return this.children;
    }
    var results = new Util_1$o.Collection();
    this.children.each(function(child) {
      if (filterFunc(child)) {
        results.push(child);
      }
    });
    return results;
  };
  Container2.prototype.hasChildren = function() {
    return this.getChildren().length > 0;
  };
  Container2.prototype.removeChildren = function() {
    var child;
    for (var i = 0; i < this.children.length; i++) {
      child = this.children[i];
      child.parent = null;
      child.index = 0;
      child.remove();
    }
    this.children = new Util_1$o.Collection();
    return this;
  };
  Container2.prototype.destroyChildren = function() {
    var child;
    for (var i = 0; i < this.children.length; i++) {
      child = this.children[i];
      child.parent = null;
      child.index = 0;
      child.destroy();
    }
    this.children = new Util_1$o.Collection();
    return this;
  };
  Container2.prototype.add = function() {
    var children = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      children[_i] = arguments[_i];
    }
    if (arguments.length > 1) {
      for (var i = 0; i < arguments.length; i++) {
        this.add(arguments[i]);
      }
      return this;
    }
    var child = children[0];
    if (child.getParent()) {
      child.moveTo(this);
      return this;
    }
    var _children = this.children;
    this._validateAdd(child);
    child._clearCaches();
    child.index = _children.length;
    child.parent = this;
    _children.push(child);
    this._fire("add", {
      child
    });
    return this;
  };
  Container2.prototype.destroy = function() {
    if (this.hasChildren()) {
      this.destroyChildren();
    }
    _super.prototype.destroy.call(this);
    return this;
  };
  Container2.prototype.find = function(selector) {
    return this._generalFind(selector, false);
  };
  Container2.prototype.get = function(selector) {
    Util_1$o.Util.warn("collection.get() method is deprecated. Please use collection.find() instead.");
    return this.find(selector);
  };
  Container2.prototype.findOne = function(selector) {
    var result = this._generalFind(selector, true);
    return result.length > 0 ? result[0] : void 0;
  };
  Container2.prototype._generalFind = function(selector, findOne) {
    var retArr = [];
    this._descendants(function(node) {
      var valid = node._isMatch(selector);
      if (valid) {
        retArr.push(node);
      }
      if (valid && findOne) {
        return true;
      }
      return false;
    });
    return Util_1$o.Collection.toCollection(retArr);
  };
  Container2.prototype._descendants = function(fn) {
    var shouldStop = false;
    for (var i = 0; i < this.children.length; i++) {
      var child = this.children[i];
      shouldStop = fn(child);
      if (shouldStop) {
        return true;
      }
      if (!child.hasChildren()) {
        continue;
      }
      shouldStop = child._descendants(fn);
      if (shouldStop) {
        return true;
      }
    }
    return false;
  };
  Container2.prototype.toObject = function() {
    var obj = Node_1$i.Node.prototype.toObject.call(this);
    obj.children = [];
    var children = this.getChildren();
    var len = children.length;
    for (var n2 = 0; n2 < len; n2++) {
      var child = children[n2];
      obj.children.push(child.toObject());
    }
    return obj;
  };
  Container2.prototype.isAncestorOf = function(node) {
    var parent = node.getParent();
    while (parent) {
      if (parent._id === this._id) {
        return true;
      }
      parent = parent.getParent();
    }
    return false;
  };
  Container2.prototype.clone = function(obj) {
    var node = Node_1$i.Node.prototype.clone.call(this, obj);
    this.getChildren().each(function(no) {
      node.add(no.clone());
    });
    return node;
  };
  Container2.prototype.getAllIntersections = function(pos) {
    var arr = [];
    this.find("Shape").each(function(shape) {
      if (shape.isVisible() && shape.intersects(pos)) {
        arr.push(shape);
      }
    });
    return arr;
  };
  Container2.prototype._setChildrenIndices = function() {
    this.children.each(function(child, n2) {
      child.index = n2;
    });
  };
  Container2.prototype.drawScene = function(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.getCanvas(), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
    var caching = canvas && canvas.isCache;
    if (!this.isVisible() && !caching) {
      return this;
    }
    if (cachedSceneCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedSceneCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawScene", canvas, top);
    }
    return this;
  };
  Container2.prototype.drawHit = function(can, top) {
    if (!this.shouldDrawHit(top)) {
      return this;
    }
    var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas, context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
    if (cachedHitCanvas) {
      context.save();
      var m = this.getAbsoluteTransform(top).getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      this._drawCachedHitCanvas(context);
      context.restore();
    } else {
      this._drawChildren("drawHit", canvas, top);
    }
    return this;
  };
  Container2.prototype._drawChildren = function(drawMethod, canvas, top) {
    var context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = clipWidth && clipHeight || clipFunc;
    var selfCache = top === this;
    if (hasClip) {
      context.save();
      var transform = this.getAbsoluteTransform(top);
      var m = transform.getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
      context.beginPath();
      if (clipFunc) {
        clipFunc.call(this, context, this);
      } else {
        var clipX = this.clipX();
        var clipY = this.clipY();
        context.rect(clipX, clipY, clipWidth, clipHeight);
      }
      context.clip();
      m = transform.copy().invert().getMatrix();
      context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
    }
    var hasComposition = !selfCache && this.globalCompositeOperation() !== "source-over" && drawMethod === "drawScene";
    if (hasComposition) {
      context.save();
      context._applyGlobalCompositeOperation(this);
    }
    this.children.each(function(child) {
      child[drawMethod](canvas, top);
    });
    if (hasComposition) {
      context.restore();
    }
    if (hasClip) {
      context.restore();
    }
  };
  Container2.prototype.getClientRect = function(config) {
    config = config || {};
    var skipTransform = config.skipTransform;
    var relativeTo = config.relativeTo;
    var minX, minY, maxX, maxY;
    var selfRect = {
      x: Infinity,
      y: Infinity,
      width: 0,
      height: 0
    };
    var that = this;
    this.children.each(function(child) {
      if (!child.visible()) {
        return;
      }
      var rect = child.getClientRect({
        relativeTo: that,
        skipShadow: config.skipShadow,
        skipStroke: config.skipStroke
      });
      if (rect.width === 0 && rect.height === 0) {
        return;
      }
      if (minX === void 0) {
        minX = rect.x;
        minY = rect.y;
        maxX = rect.x + rect.width;
        maxY = rect.y + rect.height;
      } else {
        minX = Math.min(minX, rect.x);
        minY = Math.min(minY, rect.y);
        maxX = Math.max(maxX, rect.x + rect.width);
        maxY = Math.max(maxY, rect.y + rect.height);
      }
    });
    var shapes = this.find("Shape");
    var hasVisible = false;
    for (var i = 0; i < shapes.length; i++) {
      var shape = shapes[i];
      if (shape._isVisible(this)) {
        hasVisible = true;
        break;
      }
    }
    if (hasVisible && minX !== void 0) {
      selfRect = {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
      };
    } else {
      selfRect = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    if (!skipTransform) {
      return this._transformedRect(selfRect, relativeTo);
    }
    return selfRect;
  };
  return Container2;
}(Node_1$i.Node);
Container$1.Container = Container;
Factory_1$x.Factory.addComponentsGetterSetter(Container, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
Factory_1$x.Factory.addGetterSetter(Container, "clipX", void 0, Validators_1$w.getNumberValidator());
Factory_1$x.Factory.addGetterSetter(Container, "clipY", void 0, Validators_1$w.getNumberValidator());
Factory_1$x.Factory.addGetterSetter(Container, "clipWidth", void 0, Validators_1$w.getNumberValidator());
Factory_1$x.Factory.addGetterSetter(Container, "clipHeight", void 0, Validators_1$w.getNumberValidator());
Factory_1$x.Factory.addGetterSetter(Container, "clipFunc");
Util_1$o.Collection.mapMethods(Container);
var Stage = {};
var PointerEvents = {};
Object.defineProperty(PointerEvents, "__esModule", { value: true });
PointerEvents.releaseCapture = PointerEvents.setPointerCapture = PointerEvents.hasPointerCapture = PointerEvents.createEvent = PointerEvents.getCapturedShape = void 0;
var Global_1$m = Global;
var Captures = new Map();
var SUPPORT_POINTER_EVENTS = Global_1$m.Konva._global["PointerEvent"] !== void 0;
function getCapturedShape(pointerId) {
  return Captures.get(pointerId);
}
PointerEvents.getCapturedShape = getCapturedShape;
function createEvent(evt) {
  return {
    evt,
    pointerId: evt.pointerId
  };
}
PointerEvents.createEvent = createEvent;
function hasPointerCapture(pointerId, shape) {
  return Captures.get(pointerId) === shape;
}
PointerEvents.hasPointerCapture = hasPointerCapture;
function setPointerCapture(pointerId, shape) {
  releaseCapture(pointerId);
  var stage = shape.getStage();
  if (!stage)
    return;
  Captures.set(pointerId, shape);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("gotpointercapture", createEvent(new PointerEvent("gotpointercapture")));
  }
}
PointerEvents.setPointerCapture = setPointerCapture;
function releaseCapture(pointerId, target) {
  var shape = Captures.get(pointerId);
  if (!shape)
    return;
  var stage = shape.getStage();
  if (stage && stage.content)
    ;
  Captures.delete(pointerId);
  if (SUPPORT_POINTER_EVENTS) {
    shape._fire("lostpointercapture", createEvent(new PointerEvent("lostpointercapture")));
  }
}
PointerEvents.releaseCapture = releaseCapture;
(function(exports) {
  var __extends2 = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Stage = exports.stages = void 0;
  var Util_12 = Util;
  var Factory_12 = Factory;
  var Container_12 = Container$1;
  var Global_12 = Global;
  var Canvas_12 = Canvas$1;
  var DragAndDrop_12 = DragAndDrop;
  var Global_22 = Global;
  var PointerEvents$1 = PointerEvents;
  var STAGE = "Stage", STRING = "string", PX = "px", MOUSEOUT = "mouseout", MOUSELEAVE = "mouseleave", MOUSEOVER = "mouseover", MOUSEENTER = "mouseenter", MOUSEMOVE = "mousemove", MOUSEDOWN = "mousedown", MOUSEUP = "mouseup", POINTERMOVE = "pointermove", POINTERDOWN = "pointerdown", POINTERUP = "pointerup", POINTERCANCEL = "pointercancel", LOSTPOINTERCAPTURE = "lostpointercapture", CONTEXTMENU = "contextmenu", CLICK = "click", DBL_CLICK = "dblclick", TOUCHSTART = "touchstart", TOUCHEND = "touchend", TAP = "tap", DBL_TAP = "dbltap", TOUCHMOVE = "touchmove", WHEEL = "wheel", CONTENT_MOUSEOUT = "contentMouseout", CONTENT_MOUSEOVER = "contentMouseover", CONTENT_MOUSEMOVE = "contentMousemove", CONTENT_MOUSEDOWN = "contentMousedown", CONTENT_MOUSEUP = "contentMouseup", CONTENT_CONTEXTMENU = "contentContextmenu", CONTENT_CLICK = "contentClick", CONTENT_DBL_CLICK = "contentDblclick", CONTENT_TOUCHSTART = "contentTouchstart", CONTENT_TOUCHEND = "contentTouchend", CONTENT_DBL_TAP = "contentDbltap", CONTENT_TAP = "contentTap", CONTENT_TOUCHMOVE = "contentTouchmove", CONTENT_WHEEL = "contentWheel", RELATIVE = "relative", KONVA_CONTENT = "konvajs-content", UNDERSCORE = "_", CONTAINER = "container", MAX_LAYERS_NUMBER = 5, EMPTY_STRING2 = "", EVENTS = [
    MOUSEENTER,
    MOUSEDOWN,
    MOUSEMOVE,
    MOUSEUP,
    MOUSELEAVE,
    TOUCHSTART,
    TOUCHMOVE,
    TOUCHEND,
    MOUSEOVER,
    WHEEL,
    CONTEXTMENU,
    POINTERDOWN,
    POINTERMOVE,
    POINTERUP,
    POINTERCANCEL,
    LOSTPOINTERCAPTURE
  ], eventsLength = EVENTS.length;
  function addEvent(ctx, eventName) {
    ctx.content.addEventListener(eventName, function(evt) {
      ctx[UNDERSCORE + eventName](evt);
    }, false);
  }
  var NO_POINTERS_MESSAGE = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);";
  exports.stages = [];
  function checkNoClip(attrs) {
    if (attrs === void 0) {
      attrs = {};
    }
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
      Util_12.Util.warn("Stage does not support clipping. Please use clip for Layers or Groups.");
    }
    return attrs;
  }
  var Stage2 = function(_super) {
    __extends2(Stage3, _super);
    function Stage3(config) {
      var _this = _super.call(this, checkNoClip(config)) || this;
      _this._pointerPositions = [];
      _this._changedPointerPositions = [];
      _this._buildDOM();
      _this._bindContentEvents();
      exports.stages.push(_this);
      _this.on("widthChange.konva heightChange.konva", _this._resizeDOM);
      _this.on("visibleChange.konva", _this._checkVisibility);
      _this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", function() {
        checkNoClip(_this.attrs);
      });
      _this._checkVisibility();
      return _this;
    }
    Stage3.prototype._validateAdd = function(child) {
      var isLayer = child.getType() === "Layer";
      var isFastLayer = child.getType() === "FastLayer";
      var valid = isLayer || isFastLayer;
      if (!valid) {
        Util_12.Util.throw("You may only add layers to the stage.");
      }
    };
    Stage3.prototype._checkVisibility = function() {
      if (!this.content) {
        return;
      }
      var style = this.visible() ? "" : "none";
      this.content.style.display = style;
    };
    Stage3.prototype.setContainer = function(container) {
      if (typeof container === STRING) {
        if (container.charAt(0) === ".") {
          var className = container.slice(1);
          container = document.getElementsByClassName(className)[0];
        } else {
          var id2;
          if (container.charAt(0) !== "#") {
            id2 = container;
          } else {
            id2 = container.slice(1);
          }
          container = document.getElementById(id2);
        }
        if (!container) {
          throw "Can not find container in document with id " + id2;
        }
      }
      this._setAttr(CONTAINER, container);
      if (this.content) {
        if (this.content.parentElement) {
          this.content.parentElement.removeChild(this.content);
        }
        container.appendChild(this.content);
      }
      return this;
    };
    Stage3.prototype.shouldDrawHit = function() {
      return true;
    };
    Stage3.prototype.clear = function() {
      var layers = this.children, len = layers.length, n2;
      for (n2 = 0; n2 < len; n2++) {
        layers[n2].clear();
      }
      return this;
    };
    Stage3.prototype.clone = function(obj) {
      if (!obj) {
        obj = {};
      }
      obj.container = document.createElement("div");
      return Container_12.Container.prototype.clone.call(this, obj);
    };
    Stage3.prototype.destroy = function() {
      _super.prototype.destroy.call(this);
      var content = this.content;
      if (content && Util_12.Util._isInDocument(content)) {
        this.container().removeChild(content);
      }
      var index = exports.stages.indexOf(this);
      if (index > -1) {
        exports.stages.splice(index, 1);
      }
      return this;
    };
    Stage3.prototype.getPointerPosition = function() {
      var pos = this._pointerPositions[0] || this._changedPointerPositions[0];
      if (!pos) {
        Util_12.Util.warn(NO_POINTERS_MESSAGE);
        return null;
      }
      return {
        x: pos.x,
        y: pos.y
      };
    };
    Stage3.prototype._getPointerById = function(id2) {
      return this._pointerPositions.find(function(p2) {
        return p2.id === id2;
      });
    };
    Stage3.prototype.getPointersPositions = function() {
      return this._pointerPositions;
    };
    Stage3.prototype.getStage = function() {
      return this;
    };
    Stage3.prototype.getContent = function() {
      return this.content;
    };
    Stage3.prototype._toKonvaCanvas = function(config) {
      config = config || {};
      config.x = config.x || 0;
      config.y = config.y || 0;
      config.width = config.width || this.width();
      config.height = config.height || this.height();
      var canvas = new Canvas_12.SceneCanvas({
        width: config.width,
        height: config.height,
        pixelRatio: config.pixelRatio || 1
      });
      var _context = canvas.getContext()._context;
      var layers = this.children;
      if (config.x || config.y) {
        _context.translate(-1 * config.x, -1 * config.y);
      }
      layers.each(function(layer) {
        if (!layer.isVisible()) {
          return;
        }
        var layerCanvas = layer._toKonvaCanvas(config);
        _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
      });
      return canvas;
    };
    Stage3.prototype.getIntersection = function(pos, selector) {
      if (!pos) {
        return null;
      }
      var layers = this.children, len = layers.length, end = len - 1, n2, shape;
      for (n2 = end; n2 >= 0; n2--) {
        shape = layers[n2].getIntersection(pos, selector);
        if (shape) {
          return shape;
        }
      }
      return null;
    };
    Stage3.prototype._resizeDOM = function() {
      var width = this.width();
      var height = this.height();
      if (this.content) {
        this.content.style.width = width + PX;
        this.content.style.height = height + PX;
      }
      this.bufferCanvas.setSize(width, height);
      this.bufferHitCanvas.setSize(width, height);
      this.children.each(function(layer) {
        layer.setSize({ width, height });
        layer.draw();
      });
    };
    Stage3.prototype.add = function(layer) {
      if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
          this.add(arguments[i]);
        }
        return this;
      }
      _super.prototype.add.call(this, layer);
      var length = this.children.length;
      if (length > MAX_LAYERS_NUMBER) {
        Util_12.Util.warn("The stage has " + length + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.");
      }
      layer.setSize({ width: this.width(), height: this.height() });
      layer.draw();
      if (Global_12.Konva.isBrowser) {
        this.content.appendChild(layer.canvas._canvas);
      }
      return this;
    };
    Stage3.prototype.getParent = function() {
      return null;
    };
    Stage3.prototype.getLayer = function() {
      return null;
    };
    Stage3.prototype.hasPointerCapture = function(pointerId) {
      return PointerEvents$1.hasPointerCapture(pointerId, this);
    };
    Stage3.prototype.setPointerCapture = function(pointerId) {
      PointerEvents$1.setPointerCapture(pointerId, this);
    };
    Stage3.prototype.releaseCapture = function(pointerId) {
      PointerEvents$1.releaseCapture(pointerId, this);
    };
    Stage3.prototype.getLayers = function() {
      return this.getChildren();
    };
    Stage3.prototype._bindContentEvents = function() {
      if (!Global_12.Konva.isBrowser) {
        return;
      }
      for (var n2 = 0; n2 < eventsLength; n2++) {
        addEvent(this, EVENTS[n2]);
      }
    };
    Stage3.prototype._mouseenter = function(evt) {
      this.setPointersPositions(evt);
      this._fire(MOUSEENTER, { evt, target: this, currentTarget: this });
    };
    Stage3.prototype._mouseover = function(evt) {
      this.setPointersPositions(evt);
      this._fire(CONTENT_MOUSEOVER, { evt });
      this._fire(MOUSEOVER, { evt, target: this, currentTarget: this });
    };
    Stage3.prototype._mouseleave = function(evt) {
      var _a;
      this.setPointersPositions(evt);
      var targetShape = ((_a = this.targetShape) === null || _a === void 0 ? void 0 : _a.getStage()) ? this.targetShape : null;
      var eventsEnabled = !DragAndDrop_12.DD.isDragging || Global_12.Konva.hitOnDragEnabled;
      if (targetShape && eventsEnabled) {
        targetShape._fireAndBubble(MOUSEOUT, { evt });
        targetShape._fireAndBubble(MOUSELEAVE, { evt });
        this._fire(MOUSELEAVE, { evt, target: this, currentTarget: this });
        this.targetShape = null;
      } else if (eventsEnabled) {
        this._fire(MOUSELEAVE, {
          evt,
          target: this,
          currentTarget: this
        });
        this._fire(MOUSEOUT, {
          evt,
          target: this,
          currentTarget: this
        });
      }
      this.pointerPos = void 0;
      this._pointerPositions = [];
      this._fire(CONTENT_MOUSEOUT, { evt });
    };
    Stage3.prototype._mousemove = function(evt) {
      var _a;
      if (Global_12.Konva.UA.ieMobile) {
        return this._touchmove(evt);
      }
      this.setPointersPositions(evt);
      var pointerId = Util_12.Util._getFirstPointerId(evt);
      var shape;
      var targetShape = ((_a = this.targetShape) === null || _a === void 0 ? void 0 : _a.getStage()) ? this.targetShape : null;
      var eventsEnabled = !DragAndDrop_12.DD.isDragging || Global_12.Konva.hitOnDragEnabled;
      if (eventsEnabled) {
        shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
          var differentTarget = targetShape !== shape;
          if (eventsEnabled && differentTarget) {
            if (targetShape) {
              targetShape._fireAndBubble(MOUSEOUT, { evt, pointerId }, shape);
              targetShape._fireAndBubble(MOUSELEAVE, { evt, pointerId }, shape);
            }
            shape._fireAndBubble(MOUSEOVER, { evt, pointerId }, targetShape);
            shape._fireAndBubble(MOUSEENTER, { evt, pointerId }, targetShape);
            shape._fireAndBubble(MOUSEMOVE, { evt, pointerId });
            this.targetShape = shape;
          } else {
            shape._fireAndBubble(MOUSEMOVE, { evt, pointerId });
          }
        } else {
          if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(MOUSEOUT, { evt, pointerId });
            targetShape._fireAndBubble(MOUSELEAVE, { evt, pointerId });
            this._fire(MOUSEOVER, {
              evt,
              target: this,
              currentTarget: this,
              pointerId
            });
            this.targetShape = null;
          }
          this._fire(MOUSEMOVE, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
        this._fire(CONTENT_MOUSEMOVE, { evt });
      }
      if (evt.cancelable) {
        evt.preventDefault();
      }
    };
    Stage3.prototype._mousedown = function(evt) {
      if (Global_12.Konva.UA.ieMobile) {
        return this._touchstart(evt);
      }
      this.setPointersPositions(evt);
      var pointerId = Util_12.Util._getFirstPointerId(evt);
      var shape = this.getIntersection(this.getPointerPosition());
      DragAndDrop_12.DD.justDragged = false;
      Global_12.Konva.listenClickTap = true;
      if (shape && shape.isListening()) {
        this.clickStartShape = shape;
        shape._fireAndBubble(MOUSEDOWN, { evt, pointerId });
      } else {
        this._fire(MOUSEDOWN, {
          evt,
          target: this,
          currentTarget: this,
          pointerId
        });
      }
      this._fire(CONTENT_MOUSEDOWN, { evt });
    };
    Stage3.prototype._mouseup = function(evt) {
      if (Global_12.Konva.UA.ieMobile) {
        return this._touchend(evt);
      }
      this.setPointersPositions(evt);
      var pointerId = Util_12.Util._getFirstPointerId(evt);
      var shape = this.getIntersection(this.getPointerPosition()), clickStartShape = this.clickStartShape, clickEndShape = this.clickEndShape, fireDblClick = false;
      if (Global_12.Konva.inDblClickWindow) {
        fireDblClick = true;
        clearTimeout(this.dblTimeout);
      } else if (!DragAndDrop_12.DD.justDragged) {
        Global_12.Konva.inDblClickWindow = true;
        clearTimeout(this.dblTimeout);
      }
      this.dblTimeout = setTimeout(function() {
        Global_12.Konva.inDblClickWindow = false;
      }, Global_12.Konva.dblClickWindow);
      if (shape && shape.isListening()) {
        this.clickEndShape = shape;
        shape._fireAndBubble(MOUSEUP, { evt, pointerId });
        if (Global_12.Konva.listenClickTap && clickStartShape && clickStartShape._id === shape._id) {
          shape._fireAndBubble(CLICK, { evt, pointerId });
          if (fireDblClick && clickEndShape && clickEndShape === shape) {
            shape._fireAndBubble(DBL_CLICK, { evt, pointerId });
          }
        }
      } else {
        this.clickEndShape = null;
        this._fire(MOUSEUP, {
          evt,
          target: this,
          currentTarget: this,
          pointerId
        });
        if (Global_12.Konva.listenClickTap) {
          this._fire(CLICK, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
        if (fireDblClick) {
          this._fire(DBL_CLICK, {
            evt,
            target: this,
            currentTarget: this,
            pointerId
          });
        }
      }
      this._fire(CONTENT_MOUSEUP, { evt });
      if (Global_12.Konva.listenClickTap) {
        this._fire(CONTENT_CLICK, { evt });
        if (fireDblClick) {
          this._fire(CONTENT_DBL_CLICK, { evt });
        }
      }
      Global_12.Konva.listenClickTap = false;
      if (evt.cancelable) {
        evt.preventDefault();
      }
    };
    Stage3.prototype._contextmenu = function(evt) {
      this.setPointersPositions(evt);
      var shape = this.getIntersection(this.getPointerPosition());
      if (shape && shape.isListening()) {
        shape._fireAndBubble(CONTEXTMENU, { evt });
      } else {
        this._fire(CONTEXTMENU, {
          evt,
          target: this,
          currentTarget: this
        });
      }
      this._fire(CONTENT_CONTEXTMENU, { evt });
    };
    Stage3.prototype._touchstart = function(evt) {
      var _this = this;
      this.setPointersPositions(evt);
      var triggeredOnShape = false;
      this._changedPointerPositions.forEach(function(pos) {
        var shape = _this.getIntersection(pos);
        Global_12.Konva.listenClickTap = true;
        DragAndDrop_12.DD.justDragged = false;
        var hasShape = shape && shape.isListening();
        if (!hasShape) {
          return;
        }
        if (Global_12.Konva.captureTouchEventsEnabled) {
          shape.setPointerCapture(pos.id);
        }
        _this.tapStartShape = shape;
        shape._fireAndBubble(TOUCHSTART, { evt, pointerId: pos.id }, _this);
        triggeredOnShape = true;
        if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
          evt.preventDefault();
        }
      });
      if (!triggeredOnShape) {
        this._fire(TOUCHSTART, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      this._fire(CONTENT_TOUCHSTART, { evt });
    };
    Stage3.prototype._touchmove = function(evt) {
      var _this = this;
      this.setPointersPositions(evt);
      var eventsEnabled = !DragAndDrop_12.DD.isDragging || Global_12.Konva.hitOnDragEnabled;
      if (eventsEnabled) {
        var triggeredOnShape = false;
        var processedShapesIds = {};
        this._changedPointerPositions.forEach(function(pos) {
          var shape = PointerEvents$1.getCapturedShape(pos.id) || _this.getIntersection(pos);
          var hasShape = shape && shape.isListening();
          if (!hasShape) {
            return;
          }
          if (processedShapesIds[shape._id]) {
            return;
          }
          processedShapesIds[shape._id] = true;
          shape._fireAndBubble(TOUCHMOVE, { evt, pointerId: pos.id });
          triggeredOnShape = true;
          if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
            evt.preventDefault();
          }
        });
        if (!triggeredOnShape) {
          this._fire(TOUCHMOVE, {
            evt,
            target: this,
            currentTarget: this,
            pointerId: this._changedPointerPositions[0].id
          });
        }
        this._fire(CONTENT_TOUCHMOVE, { evt });
      }
      if (DragAndDrop_12.DD.isDragging && DragAndDrop_12.DD.node.preventDefault() && evt.cancelable) {
        evt.preventDefault();
      }
    };
    Stage3.prototype._touchend = function(evt) {
      var _this = this;
      this.setPointersPositions(evt);
      var tapEndShape = this.tapEndShape, fireDblClick = false;
      if (Global_12.Konva.inDblClickWindow) {
        fireDblClick = true;
        clearTimeout(this.dblTimeout);
      } else if (!DragAndDrop_12.DD.justDragged) {
        Global_12.Konva.inDblClickWindow = true;
        clearTimeout(this.dblTimeout);
      }
      this.dblTimeout = setTimeout(function() {
        Global_12.Konva.inDblClickWindow = false;
      }, Global_12.Konva.dblClickWindow);
      var triggeredOnShape = false;
      var processedShapesIds = {};
      var tapTriggered = false;
      var dblTapTriggered = false;
      this._changedPointerPositions.forEach(function(pos) {
        var shape = PointerEvents$1.getCapturedShape(pos.id) || _this.getIntersection(pos);
        if (shape) {
          shape.releaseCapture(pos.id);
        }
        var hasShape = shape && shape.isListening();
        if (!hasShape) {
          return;
        }
        if (processedShapesIds[shape._id]) {
          return;
        }
        processedShapesIds[shape._id] = true;
        _this.tapEndShape = shape;
        shape._fireAndBubble(TOUCHEND, { evt, pointerId: pos.id });
        triggeredOnShape = true;
        if (Global_12.Konva.listenClickTap && shape === _this.tapStartShape) {
          tapTriggered = true;
          shape._fireAndBubble(TAP, { evt, pointerId: pos.id });
          if (fireDblClick && tapEndShape && tapEndShape === shape) {
            dblTapTriggered = true;
            shape._fireAndBubble(DBL_TAP, { evt, pointerId: pos.id });
          }
        }
        if (shape.isListening() && shape.preventDefault() && evt.cancelable) {
          evt.preventDefault();
        }
      });
      if (!triggeredOnShape) {
        this._fire(TOUCHEND, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      if (Global_12.Konva.listenClickTap && !tapTriggered) {
        this.tapEndShape = null;
        this._fire(TAP, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      if (fireDblClick && !dblTapTriggered) {
        this._fire(DBL_TAP, {
          evt,
          target: this,
          currentTarget: this,
          pointerId: this._changedPointerPositions[0].id
        });
      }
      this._fire(CONTENT_TOUCHEND, { evt });
      if (Global_12.Konva.listenClickTap) {
        this._fire(CONTENT_TAP, { evt });
        if (fireDblClick) {
          this._fire(CONTENT_DBL_TAP, { evt });
        }
      }
      if (this.preventDefault() && evt.cancelable) {
        evt.preventDefault();
      }
      Global_12.Konva.listenClickTap = false;
    };
    Stage3.prototype._wheel = function(evt) {
      this.setPointersPositions(evt);
      var shape = this.getIntersection(this.getPointerPosition());
      if (shape && shape.isListening()) {
        shape._fireAndBubble(WHEEL, { evt });
      } else {
        this._fire(WHEEL, {
          evt,
          target: this,
          currentTarget: this
        });
      }
      this._fire(CONTENT_WHEEL, { evt });
    };
    Stage3.prototype._pointerdown = function(evt) {
      if (!Global_12.Konva._pointerEventsEnabled) {
        return;
      }
      this.setPointersPositions(evt);
      var shape = PointerEvents$1.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
      if (shape) {
        shape._fireAndBubble(POINTERDOWN, PointerEvents$1.createEvent(evt));
      }
    };
    Stage3.prototype._pointermove = function(evt) {
      if (!Global_12.Konva._pointerEventsEnabled) {
        return;
      }
      this.setPointersPositions(evt);
      var shape = PointerEvents$1.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
      if (shape) {
        shape._fireAndBubble(POINTERMOVE, PointerEvents$1.createEvent(evt));
      }
    };
    Stage3.prototype._pointerup = function(evt) {
      if (!Global_12.Konva._pointerEventsEnabled) {
        return;
      }
      this.setPointersPositions(evt);
      var shape = PointerEvents$1.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
      if (shape) {
        shape._fireAndBubble(POINTERUP, PointerEvents$1.createEvent(evt));
      }
      PointerEvents$1.releaseCapture(evt.pointerId);
    };
    Stage3.prototype._pointercancel = function(evt) {
      if (!Global_12.Konva._pointerEventsEnabled) {
        return;
      }
      this.setPointersPositions(evt);
      var shape = PointerEvents$1.getCapturedShape(evt.pointerId) || this.getIntersection(this.getPointerPosition());
      if (shape) {
        shape._fireAndBubble(POINTERUP, PointerEvents$1.createEvent(evt));
      }
      PointerEvents$1.releaseCapture(evt.pointerId);
    };
    Stage3.prototype._lostpointercapture = function(evt) {
      PointerEvents$1.releaseCapture(evt.pointerId);
    };
    Stage3.prototype.setPointersPositions = function(evt) {
      var _this = this;
      var contentPosition = this._getContentPosition(), x2 = null, y2 = null;
      evt = evt ? evt : window.event;
      if (evt.touches !== void 0) {
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        Util_12.Collection.prototype.each.call(evt.touches, function(touch) {
          _this._pointerPositions.push({
            id: touch.identifier,
            x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
            y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
          });
        });
        Util_12.Collection.prototype.each.call(evt.changedTouches || evt.touches, function(touch) {
          _this._changedPointerPositions.push({
            id: touch.identifier,
            x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
            y: (touch.clientY - contentPosition.top) / contentPosition.scaleY
          });
        });
      } else {
        x2 = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
        y2 = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
        this.pointerPos = {
          x: x2,
          y: y2
        };
        this._pointerPositions = [{ x: x2, y: y2, id: Util_12.Util._getFirstPointerId(evt) }];
        this._changedPointerPositions = [
          { x: x2, y: y2, id: Util_12.Util._getFirstPointerId(evt) }
        ];
      }
    };
    Stage3.prototype._setPointerPosition = function(evt) {
      Util_12.Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
      this.setPointersPositions(evt);
    };
    Stage3.prototype._getContentPosition = function() {
      if (!this.content || !this.content.getBoundingClientRect) {
        return {
          top: 0,
          left: 0,
          scaleX: 1,
          scaleY: 1
        };
      }
      var rect = this.content.getBoundingClientRect();
      return {
        top: rect.top,
        left: rect.left,
        scaleX: rect.width / this.content.clientWidth || 1,
        scaleY: rect.height / this.content.clientHeight || 1
      };
    };
    Stage3.prototype._buildDOM = function() {
      this.bufferCanvas = new Canvas_12.SceneCanvas({
        width: this.width(),
        height: this.height()
      });
      this.bufferHitCanvas = new Canvas_12.HitCanvas({
        pixelRatio: 1,
        width: this.width(),
        height: this.height()
      });
      if (!Global_12.Konva.isBrowser) {
        return;
      }
      var container = this.container();
      if (!container) {
        throw "Stage has no container. A container is required.";
      }
      container.innerHTML = EMPTY_STRING2;
      this.content = document.createElement("div");
      this.content.style.position = RELATIVE;
      this.content.style.userSelect = "none";
      this.content.className = KONVA_CONTENT;
      this.content.setAttribute("role", "presentation");
      container.appendChild(this.content);
      this._resizeDOM();
    };
    Stage3.prototype.cache = function() {
      Util_12.Util.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.");
      return this;
    };
    Stage3.prototype.clearCache = function() {
      return this;
    };
    Stage3.prototype.batchDraw = function() {
      this.children.each(function(layer) {
        layer.batchDraw();
      });
      return this;
    };
    return Stage3;
  }(Container_12.Container);
  exports.Stage = Stage2;
  Stage2.prototype.nodeType = STAGE;
  Global_22._registerNode(Stage2);
  Factory_12.Factory.addGetterSetter(Stage2, "container");
})(Stage);
var Layer$1 = {};
var Shape = {};
(function(exports) {
  var __extends2 = commonjsGlobal && commonjsGlobal.__extends || function() {
    var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
  }();
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Shape = exports.shapes = void 0;
  var Util_12 = Util;
  var Factory_12 = Factory;
  var Node_12 = Node;
  var Validators_12 = Validators;
  var Global_12 = Global;
  var PointerEvents$1 = PointerEvents;
  var HAS_SHADOW = "hasShadow";
  var SHADOW_RGBA = "shadowRGBA";
  var patternImage = "patternImage";
  var linearGradient = "linearGradient";
  var radialGradient = "radialGradient";
  var dummyContext2;
  function getDummyContext2() {
    if (dummyContext2) {
      return dummyContext2;
    }
    dummyContext2 = Util_12.Util.createCanvasElement().getContext("2d");
    return dummyContext2;
  }
  exports.shapes = {};
  function _fillFunc2(context) {
    context.fill();
  }
  function _strokeFunc2(context) {
    context.stroke();
  }
  function _fillFuncHit(context) {
    context.fill();
  }
  function _strokeFuncHit(context) {
    context.stroke();
  }
  function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
  }
  function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
  }
  function _clearFillPatternCache() {
    this._clearCache(patternImage);
  }
  function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
  }
  function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
  }
  var Shape2 = function(_super) {
    __extends2(Shape3, _super);
    function Shape3(config) {
      var _this = _super.call(this, config) || this;
      var key;
      while (true) {
        key = Util_12.Util.getRandomColor();
        if (key && !(key in exports.shapes)) {
          break;
        }
      }
      _this.colorKey = key;
      exports.shapes[key] = _this;
      return _this;
    }
    Shape3.prototype.getContext = function() {
      return this.getLayer().getContext();
    };
    Shape3.prototype.getCanvas = function() {
      return this.getLayer().getCanvas();
    };
    Shape3.prototype.getSceneFunc = function() {
      return this.attrs.sceneFunc || this["_sceneFunc"];
    };
    Shape3.prototype.getHitFunc = function() {
      return this.attrs.hitFunc || this["_hitFunc"];
    };
    Shape3.prototype.hasShadow = function() {
      return this._getCache(HAS_SHADOW, this._hasShadow);
    };
    Shape3.prototype._hasShadow = function() {
      return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
    };
    Shape3.prototype._getFillPattern = function() {
      return this._getCache(patternImage, this.__getFillPattern);
    };
    Shape3.prototype.__getFillPattern = function() {
      if (this.fillPatternImage()) {
        var ctx = getDummyContext2();
        var pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
        if (pattern && pattern.setTransform) {
          pattern.setTransform({
            a: this.fillPatternScaleX(),
            b: 0,
            c: 0,
            d: this.fillPatternScaleY(),
            e: 0,
            f: 0
          });
        }
        return pattern;
      }
    };
    Shape3.prototype._getLinearGradient = function() {
      return this._getCache(linearGradient, this.__getLinearGradient);
    };
    Shape3.prototype.__getLinearGradient = function() {
      var colorStops = this.fillLinearGradientColorStops();
      if (colorStops) {
        var ctx = getDummyContext2();
        var start = this.fillLinearGradientStartPoint();
        var end = this.fillLinearGradientEndPoint();
        var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
        for (var n2 = 0; n2 < colorStops.length; n2 += 2) {
          grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
        }
        return grd;
      }
    };
    Shape3.prototype._getRadialGradient = function() {
      return this._getCache(radialGradient, this.__getRadialGradient);
    };
    Shape3.prototype.__getRadialGradient = function() {
      var colorStops = this.fillRadialGradientColorStops();
      if (colorStops) {
        var ctx = getDummyContext2();
        var start = this.fillRadialGradientStartPoint();
        var end = this.fillRadialGradientEndPoint();
        var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
        for (var n2 = 0; n2 < colorStops.length; n2 += 2) {
          grd.addColorStop(colorStops[n2], colorStops[n2 + 1]);
        }
        return grd;
      }
    };
    Shape3.prototype.getShadowRGBA = function() {
      return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    };
    Shape3.prototype._getShadowRGBA = function() {
      if (this.hasShadow()) {
        var rgba = Util_12.Util.colorToRGBA(this.shadowColor());
        return "rgba(" + rgba.r + "," + rgba.g + "," + rgba.b + "," + rgba.a * (this.shadowOpacity() || 1) + ")";
      }
    };
    Shape3.prototype.hasFill = function() {
      var _this = this;
      return this._calculate("hasFill", [
        "fillEnabled",
        "fill",
        "fillPatternImage",
        "fillLinearGradientColorStops",
        "fillRadialGradientColorStops"
      ], function() {
        return _this.fillEnabled() && !!(_this.fill() || _this.fillPatternImage() || _this.fillLinearGradientColorStops() || _this.fillRadialGradientColorStops());
      });
    };
    Shape3.prototype.hasStroke = function() {
      var _this = this;
      return this._calculate("hasStroke", [
        "strokeEnabled",
        "strokeWidth",
        "stroke",
        "strokeLinearGradientColorStops"
      ], function() {
        return _this.strokeEnabled() && _this.strokeWidth() && !!(_this.stroke() || _this.strokeLinearGradientColorStops());
      });
    };
    Shape3.prototype.hasHitStroke = function() {
      var width = this.hitStrokeWidth();
      if (width === "auto") {
        return this.hasStroke();
      }
      return this.strokeEnabled() && !!width;
    };
    Shape3.prototype.intersects = function(point) {
      var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p2;
      bufferHitCanvas.getContext().clear();
      this.drawHit(bufferHitCanvas, null, true);
      p2 = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
      return p2[3] > 0;
    };
    Shape3.prototype.destroy = function() {
      Node_12.Node.prototype.destroy.call(this);
      delete exports.shapes[this.colorKey];
      delete this.colorKey;
      return this;
    };
    Shape3.prototype._useBufferCanvas = function(forceFill) {
      var _a;
      if (!this.getStage()) {
        return false;
      }
      var perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
      if (!perfectDrawEnabled) {
        return false;
      }
      var hasFill = forceFill || this.hasFill();
      var hasStroke = this.hasStroke();
      var isTransparent = this.getAbsoluteOpacity() !== 1;
      if (hasFill && hasStroke && isTransparent) {
        return true;
      }
      var hasShadow = this.hasShadow();
      var strokeForShadow = this.shadowForStrokeEnabled();
      if (hasFill && hasStroke && hasShadow && strokeForShadow) {
        return true;
      }
      return false;
    };
    Shape3.prototype.setStrokeHitEnabled = function(val) {
      Util_12.Util.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.");
      if (val) {
        this.hitStrokeWidth("auto");
      } else {
        this.hitStrokeWidth(0);
      }
    };
    Shape3.prototype.getStrokeHitEnabled = function() {
      if (this.hitStrokeWidth() === 0) {
        return false;
      } else {
        return true;
      }
    };
    Shape3.prototype.getSelfRect = function() {
      var size = this.size();
      return {
        x: this._centroid ? -size.width / 2 : 0,
        y: this._centroid ? -size.height / 2 : 0,
        width: size.width,
        height: size.height
      };
    };
    Shape3.prototype.getClientRect = function(config) {
      if (config === void 0) {
        config = {};
      }
      var skipTransform = config.skipTransform;
      var relativeTo = config.relativeTo;
      var fillRect = this.getSelfRect();
      var applyStroke = !config.skipStroke && this.hasStroke();
      var strokeWidth = applyStroke && this.strokeWidth() || 0;
      var fillAndStrokeWidth = fillRect.width + strokeWidth;
      var fillAndStrokeHeight = fillRect.height + strokeWidth;
      var applyShadow = !config.skipShadow && this.hasShadow();
      var shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
      var shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
      var preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
      var preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
      var blurRadius = applyShadow && this.shadowBlur() || 0;
      var width = preWidth + blurRadius * 2;
      var height = preHeight + blurRadius * 2;
      var roundingOffset = 0;
      if (Math.round(strokeWidth / 2) !== strokeWidth / 2) {
        roundingOffset = 1;
      }
      var rect = {
        width: width + roundingOffset,
        height: height + roundingOffset,
        x: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetX, 0) + fillRect.x,
        y: -Math.round(strokeWidth / 2 + blurRadius) + Math.min(shadowOffsetY, 0) + fillRect.y
      };
      if (!skipTransform) {
        return this._transformedRect(rect, relativeTo);
      }
      return rect;
    };
    Shape3.prototype.drawScene = function(can, top) {
      var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow(), stage, bufferCanvas, bufferContext;
      var caching = canvas.isCache;
      var skipBuffer = canvas.isCache;
      var cachingSelf = top === this;
      if (!this.isVisible() && !caching) {
        return this;
      }
      if (cachedCanvas) {
        context.save();
        var m = this.getAbsoluteTransform(top).getMatrix();
        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        this._drawCachedSceneCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      if (this._useBufferCanvas() && !skipBuffer) {
        stage = this.getStage();
        bufferCanvas = stage.bufferCanvas;
        bufferContext = bufferCanvas.getContext();
        bufferContext.clear();
        bufferContext.save();
        bufferContext._applyLineJoin(this);
        var o = this.getAbsoluteTransform(top).getMatrix();
        bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        drawFunc.call(this, bufferContext, this);
        bufferContext.restore();
        var ratio = bufferCanvas.pixelRatio;
        if (hasShadow) {
          context._applyShadow(this);
        }
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
      } else {
        context._applyLineJoin(this);
        if (!cachingSelf) {
          var o = this.getAbsoluteTransform(top).getMatrix();
          context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
          context._applyOpacity(this);
          context._applyGlobalCompositeOperation(this);
        }
        if (hasShadow) {
          context._applyShadow(this);
        }
        drawFunc.call(this, context, this);
      }
      context.restore();
      return this;
    };
    Shape3.prototype.drawHit = function(can, top, skipDragCheck) {
      if (skipDragCheck === void 0) {
        skipDragCheck = false;
      }
      if (!this.shouldDrawHit(top, skipDragCheck)) {
        return this;
      }
      var layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
      if (!this.colorKey) {
        console.log(this);
        Util_12.Util.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. See the shape in logs above. If you want to reuse shape you should call remove() instead of destroy()");
      }
      if (cachedHitCanvas) {
        context.save();
        var m = this.getAbsoluteTransform(top).getMatrix();
        context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        this._drawCachedHitCanvas(context);
        context.restore();
        return this;
      }
      if (!drawFunc) {
        return this;
      }
      context.save();
      context._applyLineJoin(this);
      var selfCache = this === top;
      if (!selfCache) {
        var o = this.getAbsoluteTransform(top).getMatrix();
        context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
      }
      drawFunc.call(this, context, this);
      context.restore();
      return this;
    };
    Shape3.prototype.drawHitFromCache = function(alphaThreshold) {
      if (alphaThreshold === void 0) {
        alphaThreshold = 0;
      }
      var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
      hitContext.clear();
      hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
      try {
        hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
        hitData = hitImageData.data;
        len = hitData.length;
        rgbColorKey = Util_12.Util._hexToRgb(this.colorKey);
        for (i = 0; i < len; i += 4) {
          alpha = hitData[i + 3];
          if (alpha > alphaThreshold) {
            hitData[i] = rgbColorKey.r;
            hitData[i + 1] = rgbColorKey.g;
            hitData[i + 2] = rgbColorKey.b;
            hitData[i + 3] = 255;
          } else {
            hitData[i + 3] = 0;
          }
        }
        hitContext.putImageData(hitImageData, 0, 0);
      } catch (e) {
        Util_12.Util.error("Unable to draw hit graph from cached scene canvas. " + e.message);
      }
      return this;
    };
    Shape3.prototype.hasPointerCapture = function(pointerId) {
      return PointerEvents$1.hasPointerCapture(pointerId, this);
    };
    Shape3.prototype.setPointerCapture = function(pointerId) {
      PointerEvents$1.setPointerCapture(pointerId, this);
    };
    Shape3.prototype.releaseCapture = function(pointerId) {
      PointerEvents$1.releaseCapture(pointerId, this);
    };
    return Shape3;
  }(Node_12.Node);
  exports.Shape = Shape2;
  Shape2.prototype._fillFunc = _fillFunc2;
  Shape2.prototype._strokeFunc = _strokeFunc2;
  Shape2.prototype._fillFuncHit = _fillFuncHit;
  Shape2.prototype._strokeFuncHit = _strokeFuncHit;
  Shape2.prototype._centroid = false;
  Shape2.prototype.nodeType = "Shape";
  Global_12._registerNode(Shape2);
  Shape2.prototype.eventListeners = {};
  Shape2.prototype.on.call(Shape2.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearHasShadowCache);
  Shape2.prototype.on.call(Shape2.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", _clearGetShadowRGBACache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva", _clearFillPatternCache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", _clearLinearGradientCache);
  Shape2.prototype.on.call(Shape2.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", _clearRadialGradientCache);
  Factory_12.Factory.addGetterSetter(Shape2, "stroke", void 0, Validators_12.getStringOrGradientValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "strokeWidth", 2, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillAfterStrokeEnabled", false);
  Factory_12.Factory.addGetterSetter(Shape2, "hitStrokeWidth", "auto", Validators_12.getNumberOrAutoValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "strokeHitEnabled", true, Validators_12.getBooleanValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "perfectDrawEnabled", true, Validators_12.getBooleanValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowForStrokeEnabled", true, Validators_12.getBooleanValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "lineJoin");
  Factory_12.Factory.addGetterSetter(Shape2, "lineCap");
  Factory_12.Factory.addGetterSetter(Shape2, "sceneFunc");
  Factory_12.Factory.addGetterSetter(Shape2, "hitFunc");
  Factory_12.Factory.addGetterSetter(Shape2, "dash");
  Factory_12.Factory.addGetterSetter(Shape2, "dashOffset", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowColor", void 0, Validators_12.getStringValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowBlur", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOpacity", 1, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "shadowOffset", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOffsetX", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "shadowOffsetY", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternImage");
  Factory_12.Factory.addGetterSetter(Shape2, "fill", void 0, Validators_12.getStringOrGradientValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternX", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternY", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartRadius", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndRadius", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientColorStops");
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternRepeat", "repeat");
  Factory_12.Factory.addGetterSetter(Shape2, "fillEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "shadowEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "dashEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeScaleEnabled", true);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPriority", "color");
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillPatternOffset", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternOffsetX", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternOffsetY", 0, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillPatternScale", ["x", "y"]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternScaleX", 1, Validators_12.getNumberValidator());
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternScaleY", 1, Validators_12.getNumberValidator());
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillLinearGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "strokeLinearGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientStartPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientStartPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillLinearGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "strokeLinearGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillLinearGradientEndPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "strokeLinearGradientEndPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillRadialGradientStartPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientStartPointY", 0);
  Factory_12.Factory.addComponentsGetterSetter(Shape2, "fillRadialGradientEndPoint", [
    "x",
    "y"
  ]);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndPointX", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillRadialGradientEndPointY", 0);
  Factory_12.Factory.addGetterSetter(Shape2, "fillPatternRotation", 0);
  Factory_12.Factory.backCompat(Shape2, {
    dashArray: "dash",
    getDashArray: "getDash",
    setDashArray: "getDash",
    drawFunc: "sceneFunc",
    getDrawFunc: "getSceneFunc",
    setDrawFunc: "setSceneFunc",
    drawHitFunc: "hitFunc",
    getDrawHitFunc: "getHitFunc",
    setDrawHitFunc: "setHitFunc"
  });
  Util_12.Collection.mapMethods(Shape2);
})(Shape);
var __extends$j = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Layer$1, "__esModule", { value: true });
Layer$1.Layer = void 0;
var Util_1$n = Util;
var Container_1$2 = Container$1;
var Node_1$h = Node;
var Factory_1$w = Factory;
var Canvas_1$1 = Canvas$1;
var Validators_1$v = Validators;
var Shape_1$h = Shape;
var Global_1$l = Global;
var HASH = "#", BEFORE_DRAW = "beforeDraw", DRAW = "draw", INTERSECTION_OFFSETS = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
var Layer = function(_super) {
  __extends$j(Layer2, _super);
  function Layer2(config) {
    var _this = _super.call(this, config) || this;
    _this.canvas = new Canvas_1$1.SceneCanvas();
    _this.hitCanvas = new Canvas_1$1.HitCanvas({
      pixelRatio: 1
    });
    _this._waitingForDraw = false;
    _this.on("visibleChange.konva", _this._checkVisibility);
    _this._checkVisibility();
    _this.on("imageSmoothingEnabledChange.konva", _this._setSmoothEnabled);
    _this._setSmoothEnabled();
    return _this;
  }
  Layer2.prototype.createPNGStream = function() {
    var c2 = this.canvas._canvas;
    return c2.createPNGStream();
  };
  Layer2.prototype.getCanvas = function() {
    return this.canvas;
  };
  Layer2.prototype.getHitCanvas = function() {
    return this.hitCanvas;
  };
  Layer2.prototype.getContext = function() {
    return this.getCanvas().getContext();
  };
  Layer2.prototype.clear = function(bounds) {
    this.getContext().clear(bounds);
    this.getHitCanvas().getContext().clear(bounds);
    return this;
  };
  Layer2.prototype.setZIndex = function(index) {
    _super.prototype.setZIndex.call(this, index);
    var stage = this.getStage();
    if (stage) {
      stage.content.removeChild(this.getCanvas()._canvas);
      if (index < stage.children.length - 1) {
        stage.content.insertBefore(this.getCanvas()._canvas, stage.children[index + 1].getCanvas()._canvas);
      } else {
        stage.content.appendChild(this.getCanvas()._canvas);
      }
    }
    return this;
  };
  Layer2.prototype.moveToTop = function() {
    Node_1$h.Node.prototype.moveToTop.call(this);
    var stage = this.getStage();
    if (stage) {
      stage.content.removeChild(this.getCanvas()._canvas);
      stage.content.appendChild(this.getCanvas()._canvas);
    }
    return true;
  };
  Layer2.prototype.moveUp = function() {
    var moved = Node_1$h.Node.prototype.moveUp.call(this);
    if (!moved) {
      return false;
    }
    var stage = this.getStage();
    if (!stage) {
      return false;
    }
    stage.content.removeChild(this.getCanvas()._canvas);
    if (this.index < stage.children.length - 1) {
      stage.content.insertBefore(this.getCanvas()._canvas, stage.children[this.index + 1].getCanvas()._canvas);
    } else {
      stage.content.appendChild(this.getCanvas()._canvas);
    }
    return true;
  };
  Layer2.prototype.moveDown = function() {
    if (Node_1$h.Node.prototype.moveDown.call(this)) {
      var stage = this.getStage();
      if (stage) {
        var children = stage.children;
        stage.content.removeChild(this.getCanvas()._canvas);
        stage.content.insertBefore(this.getCanvas()._canvas, children[this.index + 1].getCanvas()._canvas);
      }
      return true;
    }
    return false;
  };
  Layer2.prototype.moveToBottom = function() {
    if (Node_1$h.Node.prototype.moveToBottom.call(this)) {
      var stage = this.getStage();
      if (stage) {
        var children = stage.children;
        stage.content.removeChild(this.getCanvas()._canvas);
        stage.content.insertBefore(this.getCanvas()._canvas, children[1].getCanvas()._canvas);
      }
      return true;
    }
    return false;
  };
  Layer2.prototype.getLayer = function() {
    return this;
  };
  Layer2.prototype.remove = function() {
    var _canvas = this.getCanvas()._canvas;
    Node_1$h.Node.prototype.remove.call(this);
    if (_canvas && _canvas.parentNode && Util_1$n.Util._isInDocument(_canvas)) {
      _canvas.parentNode.removeChild(_canvas);
    }
    return this;
  };
  Layer2.prototype.getStage = function() {
    return this.parent;
  };
  Layer2.prototype.setSize = function(_a) {
    var width = _a.width, height = _a.height;
    this.canvas.setSize(width, height);
    this.hitCanvas.setSize(width, height);
    this._setSmoothEnabled();
    return this;
  };
  Layer2.prototype._validateAdd = function(child) {
    var type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util_1$n.Util.throw("You may only add groups and shapes to a layer.");
    }
  };
  Layer2.prototype._toKonvaCanvas = function(config) {
    config = config || {};
    config.width = config.width || this.getWidth();
    config.height = config.height || this.getHeight();
    config.x = config.x !== void 0 ? config.x : this.x();
    config.y = config.y !== void 0 ? config.y : this.y();
    return Node_1$h.Node.prototype._toKonvaCanvas.call(this, config);
  };
  Layer2.prototype._checkVisibility = function() {
    var visible = this.visible();
    if (visible) {
      this.canvas._canvas.style.display = "block";
    } else {
      this.canvas._canvas.style.display = "none";
    }
  };
  Layer2.prototype._setSmoothEnabled = function() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  };
  Layer2.prototype.getWidth = function() {
    if (this.parent) {
      return this.parent.width();
    }
  };
  Layer2.prototype.setWidth = function() {
    Util_1$n.Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  };
  Layer2.prototype.getHeight = function() {
    if (this.parent) {
      return this.parent.height();
    }
  };
  Layer2.prototype.setHeight = function() {
    Util_1$n.Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  };
  Layer2.prototype.batchDraw = function() {
    var _this = this;
    if (!this._waitingForDraw) {
      this._waitingForDraw = true;
      Util_1$n.Util.requestAnimFrame(function() {
        _this.draw();
        _this._waitingForDraw = false;
      });
    }
    return this;
  };
  Layer2.prototype.getIntersection = function(pos, selector) {
    if (!this.isListening() || !this.isVisible()) {
      return null;
    }
    var spiralSearchDistance = 1;
    var continueSearch = false;
    while (true) {
      for (var i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
        var intersectionOffset = INTERSECTION_OFFSETS[i];
        var obj = this._getIntersection({
          x: pos.x + intersectionOffset.x * spiralSearchDistance,
          y: pos.y + intersectionOffset.y * spiralSearchDistance
        });
        var shape = obj.shape;
        if (shape && selector) {
          return shape.findAncestor(selector, true);
        } else if (shape) {
          return shape;
        }
        continueSearch = !!obj.antialiased;
        if (!obj.antialiased) {
          break;
        }
      }
      if (continueSearch) {
        spiralSearchDistance += 1;
      } else {
        return null;
      }
    }
  };
  Layer2.prototype._getIntersection = function(pos) {
    var ratio = this.hitCanvas.pixelRatio;
    var p2 = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
    var p3 = p2[3];
    if (p3 === 255) {
      var colorKey = Util_1$n.Util._rgbToHex(p2[0], p2[1], p2[2]);
      var shape = Shape_1$h.shapes[HASH + colorKey];
      if (shape) {
        return {
          shape
        };
      }
      return {
        antialiased: true
      };
    } else if (p3 > 0) {
      return {
        antialiased: true
      };
    }
    return {};
  };
  Layer2.prototype.drawScene = function(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.getCanvas();
    this._fire(BEFORE_DRAW, {
      node: this
    });
    if (this.clearBeforeDraw()) {
      canvas.getContext().clear();
    }
    Container_1$2.Container.prototype.drawScene.call(this, canvas, top);
    this._fire(DRAW, {
      node: this
    });
    return this;
  };
  Layer2.prototype.drawHit = function(can, top) {
    var layer = this.getLayer(), canvas = can || layer && layer.hitCanvas;
    if (layer && layer.clearBeforeDraw()) {
      layer.getHitCanvas().getContext().clear();
    }
    Container_1$2.Container.prototype.drawHit.call(this, canvas, top);
    return this;
  };
  Layer2.prototype.enableHitGraph = function() {
    this.hitGraphEnabled(true);
    return this;
  };
  Layer2.prototype.disableHitGraph = function() {
    this.hitGraphEnabled(false);
    return this;
  };
  Layer2.prototype.setHitGraphEnabled = function(val) {
    Util_1$n.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    this.listening(val);
  };
  Layer2.prototype.getHitGraphEnabled = function(val) {
    Util_1$n.Util.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead.");
    return this.listening();
  };
  Layer2.prototype.toggleHitCanvas = function() {
    if (!this.parent) {
      return;
    }
    var parent = this.parent;
    var added = !!this.hitCanvas._canvas.parentNode;
    if (added) {
      parent.content.removeChild(this.hitCanvas._canvas);
    } else {
      parent.content.appendChild(this.hitCanvas._canvas);
    }
  };
  return Layer2;
}(Container_1$2.Container);
Layer$1.Layer = Layer;
Layer.prototype.nodeType = "Layer";
Global_1$l._registerNode(Layer);
Factory_1$w.Factory.addGetterSetter(Layer, "imageSmoothingEnabled", true);
Factory_1$w.Factory.addGetterSetter(Layer, "clearBeforeDraw", true);
Factory_1$w.Factory.addGetterSetter(Layer, "hitGraphEnabled", true, Validators_1$v.getBooleanValidator());
Util_1$n.Collection.mapMethods(Layer);
var FastLayer$1 = {};
var __extends$i = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(FastLayer$1, "__esModule", { value: true });
FastLayer$1.FastLayer = void 0;
var Util_1$m = Util;
var Layer_1$1 = Layer$1;
var Global_1$k = Global;
var FastLayer = function(_super) {
  __extends$i(FastLayer2, _super);
  function FastLayer2(attrs) {
    var _this = _super.call(this, attrs) || this;
    _this.listening(false);
    Util_1$m.Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    return _this;
  }
  return FastLayer2;
}(Layer_1$1.Layer);
FastLayer$1.FastLayer = FastLayer;
FastLayer.prototype.nodeType = "FastLayer";
Global_1$k._registerNode(FastLayer);
Util_1$m.Collection.mapMethods(FastLayer);
var Group$1 = {};
var __extends$h = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Group$1, "__esModule", { value: true });
Group$1.Group = void 0;
var Util_1$l = Util;
var Container_1$1 = Container$1;
var Global_1$j = Global;
var Group = function(_super) {
  __extends$h(Group2, _super);
  function Group2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Group2.prototype._validateAdd = function(child) {
    var type = child.getType();
    if (type !== "Group" && type !== "Shape") {
      Util_1$l.Util.throw("You may only add groups and shapes to groups.");
    }
  };
  return Group2;
}(Container_1$1.Container);
Group$1.Group = Group;
Group.prototype.nodeType = "Group";
Global_1$j._registerNode(Group);
Util_1$l.Collection.mapMethods(Group);
var Animation$1 = {};
Object.defineProperty(Animation$1, "__esModule", { value: true });
Animation$1.Animation = void 0;
var Global_1$i = Global;
var now = function() {
  if (Global_1$i.glob.performance && Global_1$i.glob.performance.now) {
    return function() {
      return Global_1$i.glob.performance.now();
    };
  }
  return function() {
    return new Date().getTime();
  };
}();
var Animation = function() {
  function Animation2(func, layers) {
    this.id = Animation2.animIdCounter++;
    this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: now(),
      frameRate: 0
    };
    this.func = func;
    this.setLayers(layers);
  }
  Animation2.prototype.setLayers = function(layers) {
    var lays = [];
    if (!layers) {
      lays = [];
    } else if (layers.length > 0) {
      lays = layers;
    } else {
      lays = [layers];
    }
    this.layers = lays;
    return this;
  };
  Animation2.prototype.getLayers = function() {
    return this.layers;
  };
  Animation2.prototype.addLayer = function(layer) {
    var layers = this.layers, len = layers.length, n2;
    for (n2 = 0; n2 < len; n2++) {
      if (layers[n2]._id === layer._id) {
        return false;
      }
    }
    this.layers.push(layer);
    return true;
  };
  Animation2.prototype.isRunning = function() {
    var a = Animation2, animations = a.animations, len = animations.length, n2;
    for (n2 = 0; n2 < len; n2++) {
      if (animations[n2].id === this.id) {
        return true;
      }
    }
    return false;
  };
  Animation2.prototype.start = function() {
    this.stop();
    this.frame.timeDiff = 0;
    this.frame.lastTime = now();
    Animation2._addAnimation(this);
    return this;
  };
  Animation2.prototype.stop = function() {
    Animation2._removeAnimation(this);
    return this;
  };
  Animation2.prototype._updateFrameObject = function(time) {
    this.frame.timeDiff = time - this.frame.lastTime;
    this.frame.lastTime = time;
    this.frame.time += this.frame.timeDiff;
    this.frame.frameRate = 1e3 / this.frame.timeDiff;
  };
  Animation2._addAnimation = function(anim) {
    this.animations.push(anim);
    this._handleAnimation();
  };
  Animation2._removeAnimation = function(anim) {
    var id2 = anim.id, animations = this.animations, len = animations.length, n2;
    for (n2 = 0; n2 < len; n2++) {
      if (animations[n2].id === id2) {
        this.animations.splice(n2, 1);
        break;
      }
    }
  };
  Animation2._runFrames = function() {
    var layerHash = {}, animations = this.animations, anim, layers, func, n2, i, layersLen, layer, key, needRedraw;
    for (n2 = 0; n2 < animations.length; n2++) {
      anim = animations[n2];
      layers = anim.layers;
      func = anim.func;
      anim._updateFrameObject(now());
      layersLen = layers.length;
      if (func) {
        needRedraw = func.call(anim, anim.frame) !== false;
      } else {
        needRedraw = true;
      }
      if (!needRedraw) {
        continue;
      }
      for (i = 0; i < layersLen; i++) {
        layer = layers[i];
        if (layer._id !== void 0) {
          layerHash[layer._id] = layer;
        }
      }
    }
    for (key in layerHash) {
      if (!layerHash.hasOwnProperty(key)) {
        continue;
      }
      layerHash[key].draw();
    }
  };
  Animation2._animationLoop = function() {
    var Anim = Animation2;
    if (Anim.animations.length) {
      Anim._runFrames();
      requestAnimationFrame(Anim._animationLoop);
    } else {
      Anim.animRunning = false;
    }
  };
  Animation2._handleAnimation = function() {
    if (!this.animRunning) {
      this.animRunning = true;
      requestAnimationFrame(this._animationLoop);
    }
  };
  Animation2.animations = [];
  Animation2.animIdCounter = 0;
  Animation2.animRunning = false;
  return Animation2;
}();
Animation$1.Animation = Animation;
var Tween = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Easings = exports.Tween = void 0;
  var Util_12 = Util;
  var Animation_12 = Animation$1;
  var Node_12 = Node;
  var Global_12 = Global;
  var blacklist = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1
  }, PAUSED = 1, PLAYING = 2, REVERSING = 3, idCounter = 0, colorAttrs = ["fill", "stroke", "shadowColor"];
  var TweenEngine = function() {
    function TweenEngine2(prop, propFunc, func, begin, finish, duration, yoyo) {
      this.prop = prop;
      this.propFunc = propFunc;
      this.begin = begin;
      this._pos = begin;
      this.duration = duration;
      this._change = 0;
      this.prevPos = 0;
      this.yoyo = yoyo;
      this._time = 0;
      this._position = 0;
      this._startTime = 0;
      this._finish = 0;
      this.func = func;
      this._change = finish - this.begin;
      this.pause();
    }
    TweenEngine2.prototype.fire = function(str) {
      var handler = this[str];
      if (handler) {
        handler();
      }
    };
    TweenEngine2.prototype.setTime = function(t2) {
      if (t2 > this.duration) {
        if (this.yoyo) {
          this._time = this.duration;
          this.reverse();
        } else {
          this.finish();
        }
      } else if (t2 < 0) {
        if (this.yoyo) {
          this._time = 0;
          this.play();
        } else {
          this.reset();
        }
      } else {
        this._time = t2;
        this.update();
      }
    };
    TweenEngine2.prototype.getTime = function() {
      return this._time;
    };
    TweenEngine2.prototype.setPosition = function(p2) {
      this.prevPos = this._pos;
      this.propFunc(p2);
      this._pos = p2;
    };
    TweenEngine2.prototype.getPosition = function(t2) {
      if (t2 === void 0) {
        t2 = this._time;
      }
      return this.func(t2, this.begin, this._change, this.duration);
    };
    TweenEngine2.prototype.play = function() {
      this.state = PLAYING;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onPlay");
    };
    TweenEngine2.prototype.reverse = function() {
      this.state = REVERSING;
      this._time = this.duration - this._time;
      this._startTime = this.getTimer() - this._time;
      this.onEnterFrame();
      this.fire("onReverse");
    };
    TweenEngine2.prototype.seek = function(t2) {
      this.pause();
      this._time = t2;
      this.update();
      this.fire("onSeek");
    };
    TweenEngine2.prototype.reset = function() {
      this.pause();
      this._time = 0;
      this.update();
      this.fire("onReset");
    };
    TweenEngine2.prototype.finish = function() {
      this.pause();
      this._time = this.duration;
      this.update();
      this.fire("onFinish");
    };
    TweenEngine2.prototype.update = function() {
      this.setPosition(this.getPosition(this._time));
      this.fire("onUpdate");
    };
    TweenEngine2.prototype.onEnterFrame = function() {
      var t2 = this.getTimer() - this._startTime;
      if (this.state === PLAYING) {
        this.setTime(t2);
      } else if (this.state === REVERSING) {
        this.setTime(this.duration - t2);
      }
    };
    TweenEngine2.prototype.pause = function() {
      this.state = PAUSED;
      this.fire("onPause");
    };
    TweenEngine2.prototype.getTimer = function() {
      return new Date().getTime();
    };
    return TweenEngine2;
  }();
  var Tween2 = function() {
    function Tween3(config) {
      var that = this, node = config.node, nodeId = node._id, duration, easing = config.easing || exports.Easings.Linear, yoyo = !!config.yoyo, key;
      if (typeof config.duration === "undefined") {
        duration = 0.3;
      } else if (config.duration === 0) {
        duration = 1e-3;
      } else {
        duration = config.duration;
      }
      this.node = node;
      this._id = idCounter++;
      var layers = node.getLayer() || (node instanceof Global_12.Konva["Stage"] ? node.getLayers() : null);
      if (!layers) {
        Util_12.Util.error("Tween constructor have `node` that is not in a layer. Please add node into layer first.");
      }
      this.anim = new Animation_12.Animation(function() {
        that.tween.onEnterFrame();
      }, layers);
      this.tween = new TweenEngine(key, function(i) {
        that._tweenFunc(i);
      }, easing, 0, 1, duration * 1e3, yoyo);
      this._addListeners();
      if (!Tween3.attrs[nodeId]) {
        Tween3.attrs[nodeId] = {};
      }
      if (!Tween3.attrs[nodeId][this._id]) {
        Tween3.attrs[nodeId][this._id] = {};
      }
      if (!Tween3.tweens[nodeId]) {
        Tween3.tweens[nodeId] = {};
      }
      for (key in config) {
        if (blacklist[key] === void 0) {
          this._addAttr(key, config[key]);
        }
      }
      this.reset();
      this.onFinish = config.onFinish;
      this.onReset = config.onReset;
      this.onUpdate = config.onUpdate;
    }
    Tween3.prototype._addAttr = function(key, end) {
      var node = this.node, nodeId = node._id, start, diff, tweenId, n2, len, trueEnd, trueStart, endRGBA;
      tweenId = Tween3.tweens[nodeId][key];
      if (tweenId) {
        delete Tween3.attrs[nodeId][tweenId][key];
      }
      start = node.getAttr(key);
      if (Util_12.Util._isArray(end)) {
        diff = [];
        len = Math.max(end.length, start.length);
        if (key === "points" && end.length !== start.length) {
          if (end.length > start.length) {
            trueStart = start;
            start = Util_12.Util._prepareArrayForTween(start, end, node.closed());
          } else {
            trueEnd = end;
            end = Util_12.Util._prepareArrayForTween(end, start, node.closed());
          }
        }
        if (key.indexOf("fill") === 0) {
          for (n2 = 0; n2 < len; n2++) {
            if (n2 % 2 === 0) {
              diff.push(end[n2] - start[n2]);
            } else {
              var startRGBA = Util_12.Util.colorToRGBA(start[n2]);
              endRGBA = Util_12.Util.colorToRGBA(end[n2]);
              start[n2] = startRGBA;
              diff.push({
                r: endRGBA.r - startRGBA.r,
                g: endRGBA.g - startRGBA.g,
                b: endRGBA.b - startRGBA.b,
                a: endRGBA.a - startRGBA.a
              });
            }
          }
        } else {
          for (n2 = 0; n2 < len; n2++) {
            diff.push(end[n2] - start[n2]);
          }
        }
      } else if (colorAttrs.indexOf(key) !== -1) {
        start = Util_12.Util.colorToRGBA(start);
        endRGBA = Util_12.Util.colorToRGBA(end);
        diff = {
          r: endRGBA.r - start.r,
          g: endRGBA.g - start.g,
          b: endRGBA.b - start.b,
          a: endRGBA.a - start.a
        };
      } else {
        diff = end - start;
      }
      Tween3.attrs[nodeId][this._id][key] = {
        start,
        diff,
        end,
        trueEnd,
        trueStart
      };
      Tween3.tweens[nodeId][key] = this._id;
    };
    Tween3.prototype._tweenFunc = function(i) {
      var node = this.node, attrs = Tween3.attrs[node._id][this._id], key, attr, start, diff, newVal, n2, len, end;
      for (key in attrs) {
        attr = attrs[key];
        start = attr.start;
        diff = attr.diff;
        end = attr.end;
        if (Util_12.Util._isArray(start)) {
          newVal = [];
          len = Math.max(start.length, end.length);
          if (key.indexOf("fill") === 0) {
            for (n2 = 0; n2 < len; n2++) {
              if (n2 % 2 === 0) {
                newVal.push((start[n2] || 0) + diff[n2] * i);
              } else {
                newVal.push("rgba(" + Math.round(start[n2].r + diff[n2].r * i) + "," + Math.round(start[n2].g + diff[n2].g * i) + "," + Math.round(start[n2].b + diff[n2].b * i) + "," + (start[n2].a + diff[n2].a * i) + ")");
              }
            }
          } else {
            for (n2 = 0; n2 < len; n2++) {
              newVal.push((start[n2] || 0) + diff[n2] * i);
            }
          }
        } else if (colorAttrs.indexOf(key) !== -1) {
          newVal = "rgba(" + Math.round(start.r + diff.r * i) + "," + Math.round(start.g + diff.g * i) + "," + Math.round(start.b + diff.b * i) + "," + (start.a + diff.a * i) + ")";
        } else {
          newVal = start + diff * i;
        }
        node.setAttr(key, newVal);
      }
    };
    Tween3.prototype._addListeners = function() {
      var _this = this;
      this.tween.onPlay = function() {
        _this.anim.start();
      };
      this.tween.onReverse = function() {
        _this.anim.start();
      };
      this.tween.onPause = function() {
        _this.anim.stop();
      };
      this.tween.onFinish = function() {
        var node = _this.node;
        var attrs = Tween3.attrs[node._id][_this._id];
        if (attrs.points && attrs.points.trueEnd) {
          node.setAttr("points", attrs.points.trueEnd);
        }
        if (_this.onFinish) {
          _this.onFinish.call(_this);
        }
      };
      this.tween.onReset = function() {
        var node = _this.node;
        var attrs = Tween3.attrs[node._id][_this._id];
        if (attrs.points && attrs.points.trueStart) {
          node.points(attrs.points.trueStart);
        }
        if (_this.onReset) {
          _this.onReset();
        }
      };
      this.tween.onUpdate = function() {
        if (_this.onUpdate) {
          _this.onUpdate.call(_this);
        }
      };
    };
    Tween3.prototype.play = function() {
      this.tween.play();
      return this;
    };
    Tween3.prototype.reverse = function() {
      this.tween.reverse();
      return this;
    };
    Tween3.prototype.reset = function() {
      this.tween.reset();
      return this;
    };
    Tween3.prototype.seek = function(t2) {
      this.tween.seek(t2 * 1e3);
      return this;
    };
    Tween3.prototype.pause = function() {
      this.tween.pause();
      return this;
    };
    Tween3.prototype.finish = function() {
      this.tween.finish();
      return this;
    };
    Tween3.prototype.destroy = function() {
      var nodeId = this.node._id, thisId = this._id, attrs = Tween3.tweens[nodeId], key;
      this.pause();
      for (key in attrs) {
        delete Tween3.tweens[nodeId][key];
      }
      delete Tween3.attrs[nodeId][thisId];
    };
    Tween3.attrs = {};
    Tween3.tweens = {};
    return Tween3;
  }();
  exports.Tween = Tween2;
  Node_12.Node.prototype.to = function(params) {
    var onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function() {
      this.destroy();
      if (onFinish) {
        onFinish();
      }
    };
    var tween = new Tween2(params);
    tween.play();
  };
  exports.Easings = {
    BackEaseIn: function(t2, b, c2, d) {
      var s = 1.70158;
      return c2 * (t2 /= d) * t2 * ((s + 1) * t2 - s) + b;
    },
    BackEaseOut: function(t2, b, c2, d) {
      var s = 1.70158;
      return c2 * ((t2 = t2 / d - 1) * t2 * ((s + 1) * t2 + s) + 1) + b;
    },
    BackEaseInOut: function(t2, b, c2, d) {
      var s = 1.70158;
      if ((t2 /= d / 2) < 1) {
        return c2 / 2 * (t2 * t2 * (((s *= 1.525) + 1) * t2 - s)) + b;
      }
      return c2 / 2 * ((t2 -= 2) * t2 * (((s *= 1.525) + 1) * t2 + s) + 2) + b;
    },
    ElasticEaseIn: function(t2, b, c2, d, a, p2) {
      var s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d) === 1) {
        return b + c2;
      }
      if (!p2) {
        p2 = d * 0.3;
      }
      if (!a || a < Math.abs(c2)) {
        a = c2;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c2 / a);
      }
      return -(a * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2)) + b;
    },
    ElasticEaseOut: function(t2, b, c2, d, a, p2) {
      var s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d) === 1) {
        return b + c2;
      }
      if (!p2) {
        p2 = d * 0.3;
      }
      if (!a || a < Math.abs(c2)) {
        a = c2;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c2 / a);
      }
      return a * Math.pow(2, -10 * t2) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2) + c2 + b;
    },
    ElasticEaseInOut: function(t2, b, c2, d, a, p2) {
      var s = 0;
      if (t2 === 0) {
        return b;
      }
      if ((t2 /= d / 2) === 2) {
        return b + c2;
      }
      if (!p2) {
        p2 = d * (0.3 * 1.5);
      }
      if (!a || a < Math.abs(c2)) {
        a = c2;
        s = p2 / 4;
      } else {
        s = p2 / (2 * Math.PI) * Math.asin(c2 / a);
      }
      if (t2 < 1) {
        return -0.5 * (a * Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2)) + b;
      }
      return a * Math.pow(2, -10 * (t2 -= 1)) * Math.sin((t2 * d - s) * (2 * Math.PI) / p2) * 0.5 + c2 + b;
    },
    BounceEaseOut: function(t2, b, c2, d) {
      if ((t2 /= d) < 1 / 2.75) {
        return c2 * (7.5625 * t2 * t2) + b;
      } else if (t2 < 2 / 2.75) {
        return c2 * (7.5625 * (t2 -= 1.5 / 2.75) * t2 + 0.75) + b;
      } else if (t2 < 2.5 / 2.75) {
        return c2 * (7.5625 * (t2 -= 2.25 / 2.75) * t2 + 0.9375) + b;
      } else {
        return c2 * (7.5625 * (t2 -= 2.625 / 2.75) * t2 + 0.984375) + b;
      }
    },
    BounceEaseIn: function(t2, b, c2, d) {
      return c2 - exports.Easings.BounceEaseOut(d - t2, 0, c2, d) + b;
    },
    BounceEaseInOut: function(t2, b, c2, d) {
      if (t2 < d / 2) {
        return exports.Easings.BounceEaseIn(t2 * 2, 0, c2, d) * 0.5 + b;
      } else {
        return exports.Easings.BounceEaseOut(t2 * 2 - d, 0, c2, d) * 0.5 + c2 * 0.5 + b;
      }
    },
    EaseIn: function(t2, b, c2, d) {
      return c2 * (t2 /= d) * t2 + b;
    },
    EaseOut: function(t2, b, c2, d) {
      return -c2 * (t2 /= d) * (t2 - 2) + b;
    },
    EaseInOut: function(t2, b, c2, d) {
      if ((t2 /= d / 2) < 1) {
        return c2 / 2 * t2 * t2 + b;
      }
      return -c2 / 2 * (--t2 * (t2 - 2) - 1) + b;
    },
    StrongEaseIn: function(t2, b, c2, d) {
      return c2 * (t2 /= d) * t2 * t2 * t2 * t2 + b;
    },
    StrongEaseOut: function(t2, b, c2, d) {
      return c2 * ((t2 = t2 / d - 1) * t2 * t2 * t2 * t2 + 1) + b;
    },
    StrongEaseInOut: function(t2, b, c2, d) {
      if ((t2 /= d / 2) < 1) {
        return c2 / 2 * t2 * t2 * t2 * t2 * t2 + b;
      }
      return c2 / 2 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2) + b;
    },
    Linear: function(t2, b, c2, d) {
      return c2 * t2 / d + b;
    }
  };
})(Tween);
Object.defineProperty(_CoreInternals, "__esModule", { value: true });
_CoreInternals.Konva = void 0;
var Global_1$h = Global;
var Util_1$k = Util;
var Node_1$g = Node;
var Container_1 = Container$1;
var Stage_1 = Stage;
var Layer_1 = Layer$1;
var FastLayer_1 = FastLayer$1;
var Group_1$2 = Group$1;
var DragAndDrop_1 = DragAndDrop;
var Shape_1$g = Shape;
var Animation_1$1 = Animation$1;
var Tween_1 = Tween;
var Context_1 = Context$1;
var Canvas_1 = Canvas$1;
_CoreInternals.Konva = Util_1$k.Util._assign(Global_1$h.Konva, {
  Collection: Util_1$k.Collection,
  Util: Util_1$k.Util,
  Transform: Util_1$k.Transform,
  Node: Node_1$g.Node,
  ids: Node_1$g.ids,
  names: Node_1$g.names,
  Container: Container_1.Container,
  Stage: Stage_1.Stage,
  stages: Stage_1.stages,
  Layer: Layer_1.Layer,
  FastLayer: FastLayer_1.FastLayer,
  Group: Group_1$2.Group,
  DD: DragAndDrop_1.DD,
  Shape: Shape_1$g.Shape,
  shapes: Shape_1$g.shapes,
  Animation: Animation_1$1.Animation,
  Tween: Tween_1.Tween,
  Easings: Tween_1.Easings,
  Context: Context_1.Context,
  Canvas: Canvas_1.Canvas
});
var Arc$1 = {};
var __extends$g = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Arc$1, "__esModule", { value: true });
Arc$1.Arc = void 0;
var Util_1$j = Util;
var Factory_1$v = Factory;
var Shape_1$f = Shape;
var Global_1$g = Global;
var Validators_1$u = Validators;
var Global_2$3 = Global;
var Arc = function(_super) {
  __extends$g(Arc2, _super);
  function Arc2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Arc2.prototype._sceneFunc = function(context) {
    var angle = Global_1$g.Konva.getAngle(this.angle()), clockwise = this.clockwise();
    context.beginPath();
    context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
    context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Arc2.prototype.getWidth = function() {
    return this.outerRadius() * 2;
  };
  Arc2.prototype.getHeight = function() {
    return this.outerRadius() * 2;
  };
  Arc2.prototype.setWidth = function(width) {
    this.outerRadius(width / 2);
  };
  Arc2.prototype.setHeight = function(height) {
    this.outerRadius(height / 2);
  };
  return Arc2;
}(Shape_1$f.Shape);
Arc$1.Arc = Arc;
Arc.prototype._centroid = true;
Arc.prototype.className = "Arc";
Arc.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Global_2$3._registerNode(Arc);
Factory_1$v.Factory.addGetterSetter(Arc, "innerRadius", 0, Validators_1$u.getNumberValidator());
Factory_1$v.Factory.addGetterSetter(Arc, "outerRadius", 0, Validators_1$u.getNumberValidator());
Factory_1$v.Factory.addGetterSetter(Arc, "angle", 0, Validators_1$u.getNumberValidator());
Factory_1$v.Factory.addGetterSetter(Arc, "clockwise", false, Validators_1$u.getBooleanValidator());
Util_1$j.Collection.mapMethods(Arc);
var Arrow$1 = {};
var Line$1 = {};
var __extends$f = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __spreadArrays = commonjsGlobal && commonjsGlobal.__spreadArrays || function() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r2 = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r2[k] = a[j];
  return r2;
};
Object.defineProperty(Line$1, "__esModule", { value: true });
Line$1.Line = void 0;
var Util_1$i = Util;
var Factory_1$u = Factory;
var Shape_1$e = Shape;
var Validators_1$t = Validators;
var Global_1$f = Global;
var Line = function(_super) {
  __extends$f(Line2, _super);
  function Line2(config) {
    var _this = _super.call(this, config) || this;
    _this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
    return _this;
  }
  Line2.prototype._sceneFunc = function(context) {
    var points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier(), tp, len, n2;
    if (!length) {
      return;
    }
    context.beginPath();
    context.moveTo(points[0], points[1]);
    if (tension !== 0 && length > 4) {
      tp = this.getTensionPoints();
      len = tp.length;
      n2 = closed ? 0 : 4;
      if (!closed) {
        context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
      }
      while (n2 < len - 2) {
        context.bezierCurveTo(tp[n2++], tp[n2++], tp[n2++], tp[n2++], tp[n2++], tp[n2++]);
      }
      if (!closed) {
        context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
      }
    } else if (bezier) {
      n2 = 2;
      while (n2 < length) {
        context.bezierCurveTo(points[n2++], points[n2++], points[n2++], points[n2++], points[n2++], points[n2++]);
      }
    } else {
      for (n2 = 2; n2 < length; n2 += 2) {
        context.lineTo(points[n2], points[n2 + 1]);
      }
    }
    if (closed) {
      context.closePath();
      context.fillStrokeShape(this);
    } else {
      context.strokeShape(this);
    }
  };
  Line2.prototype.getTensionPoints = function() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  };
  Line2.prototype._getTensionPoints = function() {
    if (this.closed()) {
      return this._getTensionPointsClosed();
    } else {
      return Util_1$i.Util._expandPoints(this.points(), this.tension());
    }
  };
  Line2.prototype._getTensionPointsClosed = function() {
    var p2 = this.points(), len = p2.length, tension = this.tension(), firstControlPoints = Util_1$i.Util._getControlPoints(p2[len - 2], p2[len - 1], p2[0], p2[1], p2[2], p2[3], tension), lastControlPoints = Util_1$i.Util._getControlPoints(p2[len - 4], p2[len - 3], p2[len - 2], p2[len - 1], p2[0], p2[1], tension), middle = Util_1$i.Util._expandPoints(p2, tension), tp = [firstControlPoints[2], firstControlPoints[3]].concat(middle).concat([
      lastControlPoints[0],
      lastControlPoints[1],
      p2[len - 2],
      p2[len - 1],
      lastControlPoints[2],
      lastControlPoints[3],
      firstControlPoints[0],
      firstControlPoints[1],
      p2[0],
      p2[1]
    ]);
    return tp;
  };
  Line2.prototype.getWidth = function() {
    return this.getSelfRect().width;
  };
  Line2.prototype.getHeight = function() {
    return this.getSelfRect().height;
  };
  Line2.prototype.getSelfRect = function() {
    var points = this.points();
    if (points.length < 4) {
      return {
        x: points[0] || 0,
        y: points[1] || 0,
        width: 0,
        height: 0
      };
    }
    if (this.tension() !== 0) {
      points = __spreadArrays([
        points[0],
        points[1]
      ], this._getTensionPoints(), [
        points[points.length - 2],
        points[points.length - 1]
      ]);
    } else {
      points = this.points();
    }
    var minX = points[0];
    var maxX = points[0];
    var minY = points[1];
    var maxY = points[1];
    var x2, y2;
    for (var i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      minX = Math.min(minX, x2);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };
  return Line2;
}(Shape_1$e.Shape);
Line$1.Line = Line;
Line.prototype.className = "Line";
Line.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
Global_1$f._registerNode(Line);
Factory_1$u.Factory.addGetterSetter(Line, "closed", false);
Factory_1$u.Factory.addGetterSetter(Line, "bezier", false);
Factory_1$u.Factory.addGetterSetter(Line, "tension", 0, Validators_1$t.getNumberValidator());
Factory_1$u.Factory.addGetterSetter(Line, "points", [], Validators_1$t.getNumberArrayValidator());
Util_1$i.Collection.mapMethods(Line);
var __extends$e = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Arrow$1, "__esModule", { value: true });
Arrow$1.Arrow = void 0;
var Util_1$h = Util;
var Factory_1$t = Factory;
var Line_1$1 = Line$1;
var Validators_1$s = Validators;
var Global_1$e = Global;
var Arrow = function(_super) {
  __extends$e(Arrow2, _super);
  function Arrow2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Arrow2.prototype._sceneFunc = function(ctx) {
    _super.prototype._sceneFunc.call(this, ctx);
    var PI2 = Math.PI * 2;
    var points = this.points();
    var tp = points;
    var fromTension = this.tension() !== 0 && points.length > 4;
    if (fromTension) {
      tp = this.getTensionPoints();
    }
    var n2 = points.length;
    var dx, dy;
    if (fromTension) {
      dx = points[n2 - 2] - (tp[tp.length - 2] + tp[tp.length - 4]) / 2;
      dy = points[n2 - 1] - (tp[tp.length - 1] + tp[tp.length - 3]) / 2;
    } else {
      dx = points[n2 - 2] - points[n2 - 4];
      dy = points[n2 - 1] - points[n2 - 3];
    }
    var radians = (Math.atan2(dy, dx) + PI2) % PI2;
    var length = this.pointerLength();
    var width = this.pointerWidth();
    ctx.save();
    ctx.beginPath();
    ctx.translate(points[n2 - 2], points[n2 - 1]);
    ctx.rotate(radians);
    ctx.moveTo(0, 0);
    ctx.lineTo(-length, width / 2);
    ctx.lineTo(-length, -width / 2);
    ctx.closePath();
    ctx.restore();
    if (this.pointerAtBeginning()) {
      ctx.save();
      ctx.translate(points[0], points[1]);
      if (fromTension) {
        dx = (tp[0] + tp[2]) / 2 - points[0];
        dy = (tp[1] + tp[3]) / 2 - points[1];
      } else {
        dx = points[2] - points[0];
        dy = points[3] - points[1];
      }
      ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
      ctx.moveTo(0, 0);
      ctx.lineTo(-length, width / 2);
      ctx.lineTo(-length, -width / 2);
      ctx.closePath();
      ctx.restore();
    }
    var isDashEnabled = this.dashEnabled();
    if (isDashEnabled) {
      this.attrs.dashEnabled = false;
      ctx.setLineDash([]);
    }
    ctx.fillStrokeShape(this);
    if (isDashEnabled) {
      this.attrs.dashEnabled = true;
    }
  };
  Arrow2.prototype.getSelfRect = function() {
    var lineRect = _super.prototype.getSelfRect.call(this);
    var offset = this.pointerWidth() / 2;
    return {
      x: lineRect.x - offset,
      y: lineRect.y - offset,
      width: lineRect.width + offset * 2,
      height: lineRect.height + offset * 2
    };
  };
  return Arrow2;
}(Line_1$1.Line);
Arrow$1.Arrow = Arrow;
Arrow.prototype.className = "Arrow";
Global_1$e._registerNode(Arrow);
Factory_1$t.Factory.addGetterSetter(Arrow, "pointerLength", 10, Validators_1$s.getNumberValidator());
Factory_1$t.Factory.addGetterSetter(Arrow, "pointerWidth", 10, Validators_1$s.getNumberValidator());
Factory_1$t.Factory.addGetterSetter(Arrow, "pointerAtBeginning", false);
Util_1$h.Collection.mapMethods(Arrow);
var Circle$1 = {};
var __extends$d = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Circle$1, "__esModule", { value: true });
Circle$1.Circle = void 0;
var Util_1$g = Util;
var Factory_1$s = Factory;
var Shape_1$d = Shape;
var Validators_1$r = Validators;
var Global_1$d = Global;
var Circle = function(_super) {
  __extends$d(Circle2, _super);
  function Circle2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Circle2.prototype._sceneFunc = function(context) {
    context.beginPath();
    context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Circle2.prototype.getWidth = function() {
    return this.radius() * 2;
  };
  Circle2.prototype.getHeight = function() {
    return this.radius() * 2;
  };
  Circle2.prototype.setWidth = function(width) {
    if (this.radius() !== width / 2) {
      this.radius(width / 2);
    }
  };
  Circle2.prototype.setHeight = function(height) {
    if (this.radius() !== height / 2) {
      this.radius(height / 2);
    }
  };
  return Circle2;
}(Shape_1$d.Shape);
Circle$1.Circle = Circle;
Circle.prototype._centroid = true;
Circle.prototype.className = "Circle";
Circle.prototype._attrsAffectingSize = ["radius"];
Global_1$d._registerNode(Circle);
Factory_1$s.Factory.addGetterSetter(Circle, "radius", 0, Validators_1$r.getNumberValidator());
Util_1$g.Collection.mapMethods(Circle);
var Ellipse$1 = {};
var __extends$c = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Ellipse$1, "__esModule", { value: true });
Ellipse$1.Ellipse = void 0;
var Util_1$f = Util;
var Factory_1$r = Factory;
var Shape_1$c = Shape;
var Validators_1$q = Validators;
var Global_1$c = Global;
var Ellipse = function(_super) {
  __extends$c(Ellipse2, _super);
  function Ellipse2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Ellipse2.prototype._sceneFunc = function(context) {
    var rx = this.radiusX(), ry = this.radiusY();
    context.beginPath();
    context.save();
    if (rx !== ry) {
      context.scale(1, ry / rx);
    }
    context.arc(0, 0, rx, 0, Math.PI * 2, false);
    context.restore();
    context.closePath();
    context.fillStrokeShape(this);
  };
  Ellipse2.prototype.getWidth = function() {
    return this.radiusX() * 2;
  };
  Ellipse2.prototype.getHeight = function() {
    return this.radiusY() * 2;
  };
  Ellipse2.prototype.setWidth = function(width) {
    this.radiusX(width / 2);
  };
  Ellipse2.prototype.setHeight = function(height) {
    this.radiusY(height / 2);
  };
  return Ellipse2;
}(Shape_1$c.Shape);
Ellipse$1.Ellipse = Ellipse;
Ellipse.prototype.className = "Ellipse";
Ellipse.prototype._centroid = true;
Ellipse.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
Global_1$c._registerNode(Ellipse);
Factory_1$r.Factory.addComponentsGetterSetter(Ellipse, "radius", ["x", "y"]);
Factory_1$r.Factory.addGetterSetter(Ellipse, "radiusX", 0, Validators_1$q.getNumberValidator());
Factory_1$r.Factory.addGetterSetter(Ellipse, "radiusY", 0, Validators_1$q.getNumberValidator());
Util_1$f.Collection.mapMethods(Ellipse);
var Image$1 = {};
var __extends$b = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Image$1, "__esModule", { value: true });
Image$1.Image = void 0;
var Util_1$e = Util;
var Factory_1$q = Factory;
var Shape_1$b = Shape;
var Validators_1$p = Validators;
var Global_1$b = Global;
var Image = function(_super) {
  __extends$b(Image2, _super);
  function Image2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Image2.prototype._useBufferCanvas = function() {
    return _super.prototype._useBufferCanvas.call(this, true);
  };
  Image2.prototype._sceneFunc = function(context) {
    var width = this.getWidth();
    var height = this.getHeight();
    var image = this.attrs.image;
    var params;
    if (image) {
      var cropWidth = this.attrs.cropWidth;
      var cropHeight = this.attrs.cropHeight;
      if (cropWidth && cropHeight) {
        params = [
          image,
          this.cropX(),
          this.cropY(),
          cropWidth,
          cropHeight,
          0,
          0,
          width,
          height
        ];
      } else {
        params = [image, 0, 0, width, height];
      }
    }
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      context.drawImage.apply(context, params);
    }
  };
  Image2.prototype._hitFunc = function(context) {
    var width = this.width(), height = this.height();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Image2.prototype.getWidth = function() {
    var _a, _b;
    return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : ((_b = this.image()) === null || _b === void 0 ? void 0 : _b.width) || 0;
  };
  Image2.prototype.getHeight = function() {
    var _a, _b;
    return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : ((_b = this.image()) === null || _b === void 0 ? void 0 : _b.height) || 0;
  };
  Image2.fromURL = function(url, callback) {
    var img = Util_1$e.Util.createImageElement();
    img.onload = function() {
      var image = new Image2({
        image: img
      });
      callback(image);
    };
    img.crossOrigin = "Anonymous";
    img.src = url;
  };
  return Image2;
}(Shape_1$b.Shape);
Image$1.Image = Image;
Image.prototype.className = "Image";
Global_1$b._registerNode(Image);
Factory_1$q.Factory.addGetterSetter(Image, "image");
Factory_1$q.Factory.addComponentsGetterSetter(Image, "crop", ["x", "y", "width", "height"]);
Factory_1$q.Factory.addGetterSetter(Image, "cropX", 0, Validators_1$p.getNumberValidator());
Factory_1$q.Factory.addGetterSetter(Image, "cropY", 0, Validators_1$p.getNumberValidator());
Factory_1$q.Factory.addGetterSetter(Image, "cropWidth", 0, Validators_1$p.getNumberValidator());
Factory_1$q.Factory.addGetterSetter(Image, "cropHeight", 0, Validators_1$p.getNumberValidator());
Util_1$e.Collection.mapMethods(Image);
var Label$1 = {};
var __extends$a = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Label$1, "__esModule", { value: true });
Label$1.Tag = Label$1.Label = void 0;
var Util_1$d = Util;
var Factory_1$p = Factory;
var Shape_1$a = Shape;
var Group_1$1 = Group$1;
var Validators_1$o = Validators;
var Global_1$a = Global;
var ATTR_CHANGE_LIST$2 = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height"
], CHANGE_KONVA$1 = "Change.konva", NONE$1 = "none", UP = "up", RIGHT$1 = "right", DOWN = "down", LEFT$1 = "left", attrChangeListLen$1 = ATTR_CHANGE_LIST$2.length;
var Label = function(_super) {
  __extends$a(Label2, _super);
  function Label2(config) {
    var _this = _super.call(this, config) || this;
    _this.on("add.konva", function(evt) {
      this._addListeners(evt.child);
      this._sync();
    });
    return _this;
  }
  Label2.prototype.getText = function() {
    return this.find("Text")[0];
  };
  Label2.prototype.getTag = function() {
    return this.find("Tag")[0];
  };
  Label2.prototype._addListeners = function(text) {
    var that = this, n2;
    var func = function() {
      that._sync();
    };
    for (n2 = 0; n2 < attrChangeListLen$1; n2++) {
      text.on(ATTR_CHANGE_LIST$2[n2] + CHANGE_KONVA$1, func);
    }
  };
  Label2.prototype.getWidth = function() {
    return this.getText().width();
  };
  Label2.prototype.getHeight = function() {
    return this.getText().height();
  };
  Label2.prototype._sync = function() {
    var text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x2, y2, pointerHeight;
    if (text && tag) {
      width = text.width();
      height = text.height();
      pointerDirection = tag.pointerDirection();
      pointerWidth = tag.pointerWidth();
      pointerHeight = tag.pointerHeight();
      x2 = 0;
      y2 = 0;
      switch (pointerDirection) {
        case UP:
          x2 = width / 2;
          y2 = -1 * pointerHeight;
          break;
        case RIGHT$1:
          x2 = width + pointerWidth;
          y2 = height / 2;
          break;
        case DOWN:
          x2 = width / 2;
          y2 = height + pointerHeight;
          break;
        case LEFT$1:
          x2 = -1 * pointerWidth;
          y2 = height / 2;
          break;
      }
      tag.setAttrs({
        x: -1 * x2,
        y: -1 * y2,
        width,
        height
      });
      text.setAttrs({
        x: -1 * x2,
        y: -1 * y2
      });
    }
  };
  return Label2;
}(Group_1$1.Group);
Label$1.Label = Label;
Label.prototype.className = "Label";
Global_1$a._registerNode(Label);
Util_1$d.Collection.mapMethods(Label);
var Tag = function(_super) {
  __extends$a(Tag2, _super);
  function Tag2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Tag2.prototype._sceneFunc = function(context) {
    var width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
    var topLeft = 0;
    var topRight = 0;
    var bottomLeft = 0;
    var bottomRight = 0;
    if (typeof cornerRadius === "number") {
      topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
    } else {
      topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
      topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
      bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
      bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
    }
    context.beginPath();
    context.moveTo(topLeft, 0);
    if (pointerDirection === UP) {
      context.lineTo((width - pointerWidth) / 2, 0);
      context.lineTo(width / 2, -1 * pointerHeight);
      context.lineTo((width + pointerWidth) / 2, 0);
    }
    context.lineTo(width - topRight, 0);
    context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
    if (pointerDirection === RIGHT$1) {
      context.lineTo(width, (height - pointerHeight) / 2);
      context.lineTo(width + pointerWidth, height / 2);
      context.lineTo(width, (height + pointerHeight) / 2);
    }
    context.lineTo(width, height - bottomRight);
    context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
    if (pointerDirection === DOWN) {
      context.lineTo((width + pointerWidth) / 2, height);
      context.lineTo(width / 2, height + pointerHeight);
      context.lineTo((width - pointerWidth) / 2, height);
    }
    context.lineTo(bottomLeft, height);
    context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
    if (pointerDirection === LEFT$1) {
      context.lineTo(0, (height + pointerHeight) / 2);
      context.lineTo(-1 * pointerWidth, height / 2);
      context.lineTo(0, (height - pointerHeight) / 2);
    }
    context.lineTo(0, topLeft);
    context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Tag2.prototype.getSelfRect = function() {
    var x2 = 0, y2 = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
    if (direction === UP) {
      y2 -= pointerHeight;
      height += pointerHeight;
    } else if (direction === DOWN) {
      height += pointerHeight;
    } else if (direction === LEFT$1) {
      x2 -= pointerWidth * 1.5;
      width += pointerWidth;
    } else if (direction === RIGHT$1) {
      width += pointerWidth * 1.5;
    }
    return {
      x: x2,
      y: y2,
      width,
      height
    };
  };
  return Tag2;
}(Shape_1$a.Shape);
Label$1.Tag = Tag;
Tag.prototype.className = "Tag";
Global_1$a._registerNode(Tag);
Factory_1$p.Factory.addGetterSetter(Tag, "pointerDirection", NONE$1);
Factory_1$p.Factory.addGetterSetter(Tag, "pointerWidth", 0, Validators_1$o.getNumberValidator());
Factory_1$p.Factory.addGetterSetter(Tag, "pointerHeight", 0, Validators_1$o.getNumberValidator());
Factory_1$p.Factory.addGetterSetter(Tag, "cornerRadius", 0, Validators_1$o.getNumberOrArrayOfNumbersValidator(4));
Util_1$d.Collection.mapMethods(Tag);
var Path$1 = {};
var __extends$9 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Path$1, "__esModule", { value: true });
Path$1.Path = void 0;
var Util_1$c = Util;
var Factory_1$o = Factory;
var Shape_1$9 = Shape;
var Global_1$9 = Global;
var Path = function(_super) {
  __extends$9(Path2, _super);
  function Path2(config) {
    var _this = _super.call(this, config) || this;
    _this.dataArray = [];
    _this.pathLength = 0;
    _this.dataArray = Path2.parsePathData(_this.data());
    _this.pathLength = 0;
    for (var i = 0; i < _this.dataArray.length; ++i) {
      _this.pathLength += _this.dataArray[i].pathLength;
    }
    _this.on("dataChange.konva", function() {
      this.dataArray = Path2.parsePathData(this.data());
      this.pathLength = 0;
      for (var i2 = 0; i2 < this.dataArray.length; ++i2) {
        this.pathLength += this.dataArray[i2].pathLength;
      }
    });
    return _this;
  }
  Path2.prototype._sceneFunc = function(context) {
    var ca = this.dataArray;
    context.beginPath();
    var isClosed = false;
    for (var n2 = 0; n2 < ca.length; n2++) {
      var c2 = ca[n2].command;
      var p2 = ca[n2].points;
      switch (c2) {
        case "L":
          context.lineTo(p2[0], p2[1]);
          break;
        case "M":
          context.moveTo(p2[0], p2[1]);
          break;
        case "C":
          context.bezierCurveTo(p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
          break;
        case "Q":
          context.quadraticCurveTo(p2[0], p2[1], p2[2], p2[3]);
          break;
        case "A":
          var cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], theta = p2[4], dTheta = p2[5], psi = p2[6], fs = p2[7];
          var r2 = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;
          context.translate(cx, cy);
          context.rotate(psi);
          context.scale(scaleX, scaleY);
          context.arc(0, 0, r2, theta, theta + dTheta, 1 - fs);
          context.scale(1 / scaleX, 1 / scaleY);
          context.rotate(-psi);
          context.translate(-cx, -cy);
          break;
        case "z":
          isClosed = true;
          context.closePath();
          break;
      }
    }
    if (!isClosed && !this.hasFill()) {
      context.strokeShape(this);
    } else {
      context.fillStrokeShape(this);
    }
  };
  Path2.prototype.getSelfRect = function() {
    var points = [];
    this.dataArray.forEach(function(data) {
      if (data.command === "A") {
        var start = data.points[4];
        var dTheta = data.points[5];
        var end = data.points[4] + dTheta;
        var inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        if (dTheta < 0) {
          for (var t2 = start - inc; t2 > end; t2 -= inc) {
            var point = Path2.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        } else {
          for (var t2 = start + inc; t2 < end; t2 += inc) {
            var point = Path2.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t2, 0);
            points.push(point.x, point.y);
          }
        }
      } else if (data.command === "C") {
        for (var t2 = 0; t2 <= 1; t2 += 0.01) {
          var point = Path2.getPointOnCubicBezier(t2, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
          points.push(point.x, point.y);
        }
      } else {
        points = points.concat(data.points);
      }
    });
    var minX = points[0];
    var maxX = points[0];
    var minY = points[1];
    var maxY = points[1];
    var x2, y2;
    for (var i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      if (!isNaN(x2)) {
        minX = Math.min(minX, x2);
        maxX = Math.max(maxX, x2);
      }
      if (!isNaN(y2)) {
        minY = Math.min(minY, y2);
        maxY = Math.max(maxY, y2);
      }
    }
    return {
      x: Math.round(minX),
      y: Math.round(minY),
      width: Math.round(maxX - minX),
      height: Math.round(maxY - minY)
    };
  };
  Path2.prototype.getLength = function() {
    return this.pathLength;
  };
  Path2.prototype.getPointAtLength = function(length) {
    var point, i = 0, ii2 = this.dataArray.length;
    if (!ii2) {
      return null;
    }
    while (i < ii2 && length > this.dataArray[i].pathLength) {
      length -= this.dataArray[i].pathLength;
      ++i;
    }
    if (i === ii2) {
      point = this.dataArray[i - 1].points.slice(-2);
      return {
        x: point[0],
        y: point[1]
      };
    }
    if (length < 0.01) {
      point = this.dataArray[i].points.slice(0, 2);
      return {
        x: point[0],
        y: point[1]
      };
    }
    var cp = this.dataArray[i];
    var p2 = cp.points;
    switch (cp.command) {
      case "L":
        return Path2.getPointOnLine(length, cp.start.x, cp.start.y, p2[0], p2[1]);
      case "C":
        return Path2.getPointOnCubicBezier(length / cp.pathLength, cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3], p2[4], p2[5]);
      case "Q":
        return Path2.getPointOnQuadraticBezier(length / cp.pathLength, cp.start.x, cp.start.y, p2[0], p2[1], p2[2], p2[3]);
      case "A":
        var cx = p2[0], cy = p2[1], rx = p2[2], ry = p2[3], theta = p2[4], dTheta = p2[5], psi = p2[6];
        theta += dTheta * length / cp.pathLength;
        return Path2.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
    }
    return null;
  };
  Path2.getLineLength = function(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
  };
  Path2.getPointOnLine = function(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
    if (fromX === void 0) {
      fromX = P1x;
    }
    if (fromY === void 0) {
      fromY = P1y;
    }
    var m = (P2y - P1y) / (P2x - P1x + 1e-8);
    var run = Math.sqrt(dist * dist / (1 + m * m));
    if (P2x < P1x) {
      run *= -1;
    }
    var rise = m * run;
    var pt;
    if (P2x === P1x) {
      pt = {
        x: fromX,
        y: fromY + rise
      };
    } else if ((fromY - P1y) / (fromX - P1x + 1e-8) === m) {
      pt = {
        x: fromX + run,
        y: fromY + rise
      };
    } else {
      var ix, iy;
      var len = this.getLineLength(P1x, P1y, P2x, P2y);
      var u2 = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
      u2 = u2 / (len * len);
      ix = P1x + u2 * (P2x - P1x);
      iy = P1y + u2 * (P2y - P1y);
      var pRise = this.getLineLength(fromX, fromY, ix, iy);
      var pRun = Math.sqrt(dist * dist - pRise * pRise);
      run = Math.sqrt(pRun * pRun / (1 + m * m));
      if (P2x < P1x) {
        run *= -1;
      }
      rise = m * run;
      pt = {
        x: ix + run,
        y: iy + rise
      };
    }
    return pt;
  };
  Path2.getPointOnCubicBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
    function CB1(t2) {
      return t2 * t2 * t2;
    }
    function CB2(t2) {
      return 3 * t2 * t2 * (1 - t2);
    }
    function CB3(t2) {
      return 3 * t2 * (1 - t2) * (1 - t2);
    }
    function CB4(t2) {
      return (1 - t2) * (1 - t2) * (1 - t2);
    }
    var x2 = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
    var y2 = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
    return {
      x: x2,
      y: y2
    };
  };
  Path2.getPointOnQuadraticBezier = function(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
    function QB1(t2) {
      return t2 * t2;
    }
    function QB2(t2) {
      return 2 * t2 * (1 - t2);
    }
    function QB3(t2) {
      return (1 - t2) * (1 - t2);
    }
    var x2 = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
    var y2 = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
    return {
      x: x2,
      y: y2
    };
  };
  Path2.getPointOnEllipticalArc = function(cx, cy, rx, ry, theta, psi) {
    var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
    var pt = {
      x: rx * Math.cos(theta),
      y: ry * Math.sin(theta)
    };
    return {
      x: cx + (pt.x * cosPsi - pt.y * sinPsi),
      y: cy + (pt.x * sinPsi + pt.y * cosPsi)
    };
  };
  Path2.parsePathData = function(data) {
    if (!data) {
      return [];
    }
    var cs = data;
    var cc2 = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    cs = cs.replace(new RegExp(" ", "g"), ",");
    for (var n2 = 0; n2 < cc2.length; n2++) {
      cs = cs.replace(new RegExp(cc2[n2], "g"), "|" + cc2[n2]);
    }
    var arr = cs.split("|");
    var ca = [];
    var coords = [];
    var cpx = 0;
    var cpy = 0;
    var re2 = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
    var match;
    for (n2 = 1; n2 < arr.length; n2++) {
      var str = arr[n2];
      var c2 = str.charAt(0);
      str = str.slice(1);
      coords.length = 0;
      while (match = re2.exec(str)) {
        coords.push(match[0]);
      }
      var p2 = [];
      for (var j = 0, jlen = coords.length; j < jlen; j++) {
        var parsed = parseFloat(coords[j]);
        if (!isNaN(parsed)) {
          p2.push(parsed);
        } else {
          p2.push(0);
        }
      }
      while (p2.length > 0) {
        if (isNaN(p2[0])) {
          break;
        }
        var cmd = null;
        var points = [];
        var startX = cpx, startY = cpy;
        var prevCmd, ctlPtx, ctlPty;
        var rx, ry, psi, fa2, fs, x1, y1;
        switch (c2) {
          case "l":
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "L":
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "m":
            var dx = p2.shift();
            var dy = p2.shift();
            cpx += dx;
            cpy += dy;
            cmd = "M";
            if (ca.length > 2 && ca[ca.length - 1].command === "z") {
              for (var idx = ca.length - 2; idx >= 0; idx--) {
                if (ca[idx].command === "M") {
                  cpx = ca[idx].points[0] + dx;
                  cpy = ca[idx].points[1] + dy;
                  break;
                }
              }
            }
            points.push(cpx, cpy);
            c2 = "l";
            break;
          case "M":
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "M";
            points.push(cpx, cpy);
            c2 = "L";
            break;
          case "h":
            cpx += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "H":
            cpx = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "v":
            cpy += p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "V":
            cpy = p2.shift();
            cmd = "L";
            points.push(cpx, cpy);
            break;
          case "C":
            points.push(p2.shift(), p2.shift(), p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "c":
            points.push(cpx + p2.shift(), cpy + p2.shift(), cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "S":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "s":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "C") {
              ctlPtx = cpx + (cpx - prevCmd.points[2]);
              ctlPty = cpy + (cpy - prevCmd.points[3]);
            }
            points.push(ctlPtx, ctlPty, cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "C";
            points.push(cpx, cpy);
            break;
          case "Q":
            points.push(p2.shift(), p2.shift());
            cpx = p2.shift();
            cpy = p2.shift();
            points.push(cpx, cpy);
            break;
          case "q":
            points.push(cpx + p2.shift(), cpy + p2.shift());
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(cpx, cpy);
            break;
          case "T":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "t":
            ctlPtx = cpx;
            ctlPty = cpy;
            prevCmd = ca[ca.length - 1];
            if (prevCmd.command === "Q") {
              ctlPtx = cpx + (cpx - prevCmd.points[0]);
              ctlPty = cpy + (cpy - prevCmd.points[1]);
            }
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "Q";
            points.push(ctlPtx, ctlPty, cpx, cpy);
            break;
          case "A":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa2 = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx = p2.shift();
            cpy = p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa2, fs, rx, ry, psi);
            break;
          case "a":
            rx = p2.shift();
            ry = p2.shift();
            psi = p2.shift();
            fa2 = p2.shift();
            fs = p2.shift();
            x1 = cpx;
            y1 = cpy;
            cpx += p2.shift();
            cpy += p2.shift();
            cmd = "A";
            points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa2, fs, rx, ry, psi);
            break;
        }
        ca.push({
          command: cmd || c2,
          points,
          start: {
            x: startX,
            y: startY
          },
          pathLength: this.calcLength(startX, startY, cmd || c2, points)
        });
      }
      if (c2 === "z" || c2 === "Z") {
        ca.push({
          command: "z",
          points: [],
          start: void 0,
          pathLength: 0
        });
      }
    }
    return ca;
  };
  Path2.calcLength = function(x2, y2, cmd, points) {
    var len, p1, p2, t2;
    var path = Path2;
    switch (cmd) {
      case "L":
        return path.getLineLength(x2, y2, points[0], points[1]);
      case "C":
        len = 0;
        p1 = path.getPointOnCubicBezier(0, x2, y2, points[0], points[1], points[2], points[3], points[4], points[5]);
        for (t2 = 0.01; t2 <= 1; t2 += 0.01) {
          p2 = path.getPointOnCubicBezier(t2, x2, y2, points[0], points[1], points[2], points[3], points[4], points[5]);
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case "Q":
        len = 0;
        p1 = path.getPointOnQuadraticBezier(0, x2, y2, points[0], points[1], points[2], points[3]);
        for (t2 = 0.01; t2 <= 1; t2 += 0.01) {
          p2 = path.getPointOnQuadraticBezier(t2, x2, y2, points[0], points[1], points[2], points[3]);
          len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
          p1 = p2;
        }
        return len;
      case "A":
        len = 0;
        var start = points[4];
        var dTheta = points[5];
        var end = points[4] + dTheta;
        var inc = Math.PI / 180;
        if (Math.abs(start - end) < inc) {
          inc = Math.abs(start - end);
        }
        p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
        if (dTheta < 0) {
          for (t2 = start - inc; t2 > end; t2 -= inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        } else {
          for (t2 = start + inc; t2 < end; t2 += inc) {
            p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t2, 0);
            len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
            p1 = p2;
          }
        }
        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
        return len;
    }
    return 0;
  };
  Path2.convertEndpointToCenterParameterization = function(x1, y1, x2, y2, fa2, fs, rx, ry, psiDeg) {
    var psi = psiDeg * (Math.PI / 180);
    var xp = Math.cos(psi) * (x1 - x2) / 2 + Math.sin(psi) * (y1 - y2) / 2;
    var yp = -1 * Math.sin(psi) * (x1 - x2) / 2 + Math.cos(psi) * (y1 - y2) / 2;
    var lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
    if (lambda > 1) {
      rx *= Math.sqrt(lambda);
      ry *= Math.sqrt(lambda);
    }
    var f = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) / (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
    if (fa2 === fs) {
      f *= -1;
    }
    if (isNaN(f)) {
      f = 0;
    }
    var cxp = f * rx * yp / ry;
    var cyp = f * -ry * xp / rx;
    var cx = (x1 + x2) / 2 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
    var cy = (y1 + y2) / 2 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
    var vMag = function(v3) {
      return Math.sqrt(v3[0] * v3[0] + v3[1] * v3[1]);
    };
    var vRatio = function(u3, v3) {
      return (u3[0] * v3[0] + u3[1] * v3[1]) / (vMag(u3) * vMag(v3));
    };
    var vAngle = function(u3, v3) {
      return (u3[0] * v3[1] < u3[1] * v3[0] ? -1 : 1) * Math.acos(vRatio(u3, v3));
    };
    var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
    var u2 = [(xp - cxp) / rx, (yp - cyp) / ry];
    var v2 = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
    var dTheta = vAngle(u2, v2);
    if (vRatio(u2, v2) <= -1) {
      dTheta = Math.PI;
    }
    if (vRatio(u2, v2) >= 1) {
      dTheta = 0;
    }
    if (fs === 0 && dTheta > 0) {
      dTheta = dTheta - 2 * Math.PI;
    }
    if (fs === 1 && dTheta < 0) {
      dTheta = dTheta + 2 * Math.PI;
    }
    return [cx, cy, rx, ry, theta, dTheta, psi, fs];
  };
  return Path2;
}(Shape_1$9.Shape);
Path$1.Path = Path;
Path.prototype.className = "Path";
Path.prototype._attrsAffectingSize = ["data"];
Global_1$9._registerNode(Path);
Factory_1$o.Factory.addGetterSetter(Path, "data");
Util_1$c.Collection.mapMethods(Path);
var Rect$1 = {};
var __extends$8 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Rect$1, "__esModule", { value: true });
Rect$1.Rect = void 0;
var Util_1$b = Util;
var Factory_1$n = Factory;
var Shape_1$8 = Shape;
var Global_1$8 = Global;
var Validators_1$n = Validators;
var Rect = function(_super) {
  __extends$8(Rect2, _super);
  function Rect2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Rect2.prototype._sceneFunc = function(context) {
    var cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
    context.beginPath();
    if (!cornerRadius) {
      context.rect(0, 0, width, height);
    } else {
      var topLeft = 0;
      var topRight = 0;
      var bottomLeft = 0;
      var bottomRight = 0;
      if (typeof cornerRadius === "number") {
        topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
      } else {
        topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
        topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
        bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
        bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
      }
      context.moveTo(topLeft, 0);
      context.lineTo(width - topRight, 0);
      context.arc(width - topRight, topRight, topRight, Math.PI * 3 / 2, 0, false);
      context.lineTo(width, height - bottomRight);
      context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
      context.lineTo(bottomLeft, height);
      context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
      context.lineTo(0, topLeft);
      context.arc(topLeft, topLeft, topLeft, Math.PI, Math.PI * 3 / 2, false);
    }
    context.closePath();
    context.fillStrokeShape(this);
  };
  return Rect2;
}(Shape_1$8.Shape);
Rect$1.Rect = Rect;
Rect.prototype.className = "Rect";
Global_1$8._registerNode(Rect);
Factory_1$n.Factory.addGetterSetter(Rect, "cornerRadius", 0, Validators_1$n.getNumberOrArrayOfNumbersValidator(4));
Util_1$b.Collection.mapMethods(Rect);
var RegularPolygon$1 = {};
var __extends$7 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(RegularPolygon$1, "__esModule", { value: true });
RegularPolygon$1.RegularPolygon = void 0;
var Util_1$a = Util;
var Factory_1$m = Factory;
var Shape_1$7 = Shape;
var Validators_1$m = Validators;
var Global_1$7 = Global;
var RegularPolygon = function(_super) {
  __extends$7(RegularPolygon2, _super);
  function RegularPolygon2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  RegularPolygon2.prototype._sceneFunc = function(context) {
    var points = this._getPoints();
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (var n2 = 1; n2 < points.length; n2++) {
      context.lineTo(points[n2].x, points[n2].y);
    }
    context.closePath();
    context.fillStrokeShape(this);
  };
  RegularPolygon2.prototype._getPoints = function() {
    var sides = this.attrs.sides;
    var radius = this.attrs.radius || 0;
    var points = [];
    for (var n2 = 0; n2 < sides; n2++) {
      points.push({
        x: radius * Math.sin(n2 * 2 * Math.PI / sides),
        y: -1 * radius * Math.cos(n2 * 2 * Math.PI / sides)
      });
    }
    return points;
  };
  RegularPolygon2.prototype.getSelfRect = function() {
    var points = this._getPoints();
    var minX = points[0].x;
    var maxX = points[0].y;
    var minY = points[0].x;
    var maxY = points[0].y;
    points.forEach(function(point) {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minY = Math.min(minY, point.y);
      maxY = Math.max(maxY, point.y);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  };
  RegularPolygon2.prototype.getWidth = function() {
    return this.radius() * 2;
  };
  RegularPolygon2.prototype.getHeight = function() {
    return this.radius() * 2;
  };
  RegularPolygon2.prototype.setWidth = function(width) {
    this.radius(width / 2);
  };
  RegularPolygon2.prototype.setHeight = function(height) {
    this.radius(height / 2);
  };
  return RegularPolygon2;
}(Shape_1$7.Shape);
RegularPolygon$1.RegularPolygon = RegularPolygon;
RegularPolygon.prototype.className = "RegularPolygon";
RegularPolygon.prototype._centroid = true;
RegularPolygon.prototype._attrsAffectingSize = ["radius"];
Global_1$7._registerNode(RegularPolygon);
Factory_1$m.Factory.addGetterSetter(RegularPolygon, "radius", 0, Validators_1$m.getNumberValidator());
Factory_1$m.Factory.addGetterSetter(RegularPolygon, "sides", 0, Validators_1$m.getNumberValidator());
Util_1$a.Collection.mapMethods(RegularPolygon);
var Ring$1 = {};
var __extends$6 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Ring$1, "__esModule", { value: true });
Ring$1.Ring = void 0;
var Util_1$9 = Util;
var Factory_1$l = Factory;
var Shape_1$6 = Shape;
var Validators_1$l = Validators;
var Global_1$6 = Global;
var PIx2 = Math.PI * 2;
var Ring = function(_super) {
  __extends$6(Ring2, _super);
  function Ring2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Ring2.prototype._sceneFunc = function(context) {
    context.beginPath();
    context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
    context.moveTo(this.outerRadius(), 0);
    context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Ring2.prototype.getWidth = function() {
    return this.outerRadius() * 2;
  };
  Ring2.prototype.getHeight = function() {
    return this.outerRadius() * 2;
  };
  Ring2.prototype.setWidth = function(width) {
    this.outerRadius(width / 2);
  };
  Ring2.prototype.setHeight = function(height) {
    this.outerRadius(height / 2);
  };
  return Ring2;
}(Shape_1$6.Shape);
Ring$1.Ring = Ring;
Ring.prototype.className = "Ring";
Ring.prototype._centroid = true;
Ring.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Global_1$6._registerNode(Ring);
Factory_1$l.Factory.addGetterSetter(Ring, "innerRadius", 0, Validators_1$l.getNumberValidator());
Factory_1$l.Factory.addGetterSetter(Ring, "outerRadius", 0, Validators_1$l.getNumberValidator());
Util_1$9.Collection.mapMethods(Ring);
var Sprite$1 = {};
var __extends$5 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Sprite$1, "__esModule", { value: true });
Sprite$1.Sprite = void 0;
var Util_1$8 = Util;
var Factory_1$k = Factory;
var Shape_1$5 = Shape;
var Animation_1 = Animation$1;
var Validators_1$k = Validators;
var Global_1$5 = Global;
var Sprite = function(_super) {
  __extends$5(Sprite2, _super);
  function Sprite2(config) {
    var _this = _super.call(this, config) || this;
    _this._updated = true;
    _this.anim = new Animation_1.Animation(function() {
      var updated = _this._updated;
      _this._updated = false;
      return updated;
    });
    _this.on("animationChange.konva", function() {
      this.frameIndex(0);
    });
    _this.on("frameIndexChange.konva", function() {
      this._updated = true;
    });
    _this.on("frameRateChange.konva", function() {
      if (!this.anim.isRunning()) {
        return;
      }
      clearInterval(this.interval);
      this._setInterval();
    });
    return _this;
  }
  Sprite2.prototype._sceneFunc = function(context) {
    var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x2 = set[ix4 + 0], y2 = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
    if (this.hasFill() || this.hasStroke()) {
      context.beginPath();
      context.rect(0, 0, width, height);
      context.closePath();
      context.fillStrokeShape(this);
    }
    if (image) {
      if (offsets) {
        var offset = offsets[anim], ix2 = index * 2;
        context.drawImage(image, x2, y2, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
      } else {
        context.drawImage(image, x2, y2, width, height, 0, 0, width, height);
      }
    }
  };
  Sprite2.prototype._hitFunc = function(context) {
    var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
    context.beginPath();
    if (offsets) {
      var offset = offsets[anim];
      var ix2 = index * 2;
      context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
    } else {
      context.rect(0, 0, width, height);
    }
    context.closePath();
    context.fillShape(this);
  };
  Sprite2.prototype._useBufferCanvas = function() {
    return _super.prototype._useBufferCanvas.call(this, true);
  };
  Sprite2.prototype._setInterval = function() {
    var that = this;
    this.interval = setInterval(function() {
      that._updateIndex();
    }, 1e3 / this.frameRate());
  };
  Sprite2.prototype.start = function() {
    if (this.isRunning()) {
      return;
    }
    var layer = this.getLayer();
    this.anim.setLayers(layer);
    this._setInterval();
    this.anim.start();
  };
  Sprite2.prototype.stop = function() {
    this.anim.stop();
    clearInterval(this.interval);
  };
  Sprite2.prototype.isRunning = function() {
    return this.anim.isRunning();
  };
  Sprite2.prototype._updateIndex = function() {
    var index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
    if (index < len - 1) {
      this.frameIndex(index + 1);
    } else {
      this.frameIndex(0);
    }
  };
  return Sprite2;
}(Shape_1$5.Shape);
Sprite$1.Sprite = Sprite;
Sprite.prototype.className = "Sprite";
Global_1$5._registerNode(Sprite);
Factory_1$k.Factory.addGetterSetter(Sprite, "animation");
Factory_1$k.Factory.addGetterSetter(Sprite, "animations");
Factory_1$k.Factory.addGetterSetter(Sprite, "frameOffsets");
Factory_1$k.Factory.addGetterSetter(Sprite, "image");
Factory_1$k.Factory.addGetterSetter(Sprite, "frameIndex", 0, Validators_1$k.getNumberValidator());
Factory_1$k.Factory.addGetterSetter(Sprite, "frameRate", 17, Validators_1$k.getNumberValidator());
Factory_1$k.Factory.backCompat(Sprite, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
Util_1$8.Collection.mapMethods(Sprite);
var Star$1 = {};
var __extends$4 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Star$1, "__esModule", { value: true });
Star$1.Star = void 0;
var Util_1$7 = Util;
var Factory_1$j = Factory;
var Shape_1$4 = Shape;
var Validators_1$j = Validators;
var Global_1$4 = Global;
var Star = function(_super) {
  __extends$4(Star2, _super);
  function Star2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Star2.prototype._sceneFunc = function(context) {
    var innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
    context.beginPath();
    context.moveTo(0, 0 - outerRadius);
    for (var n2 = 1; n2 < numPoints * 2; n2++) {
      var radius = n2 % 2 === 0 ? outerRadius : innerRadius;
      var x2 = radius * Math.sin(n2 * Math.PI / numPoints);
      var y2 = -1 * radius * Math.cos(n2 * Math.PI / numPoints);
      context.lineTo(x2, y2);
    }
    context.closePath();
    context.fillStrokeShape(this);
  };
  Star2.prototype.getWidth = function() {
    return this.outerRadius() * 2;
  };
  Star2.prototype.getHeight = function() {
    return this.outerRadius() * 2;
  };
  Star2.prototype.setWidth = function(width) {
    this.outerRadius(width / 2);
  };
  Star2.prototype.setHeight = function(height) {
    this.outerRadius(height / 2);
  };
  return Star2;
}(Shape_1$4.Shape);
Star$1.Star = Star;
Star.prototype.className = "Star";
Star.prototype._centroid = true;
Star.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
Global_1$4._registerNode(Star);
Factory_1$j.Factory.addGetterSetter(Star, "numPoints", 5, Validators_1$j.getNumberValidator());
Factory_1$j.Factory.addGetterSetter(Star, "innerRadius", 0, Validators_1$j.getNumberValidator());
Factory_1$j.Factory.addGetterSetter(Star, "outerRadius", 0, Validators_1$j.getNumberValidator());
Util_1$7.Collection.mapMethods(Star);
var Text$1 = {};
var __extends$3 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Text$1, "__esModule", { value: true });
Text$1.Text = Text$1.stringToArray = void 0;
var Util_1$6 = Util;
var Factory_1$i = Factory;
var Shape_1$3 = Shape;
var Global_1$3 = Global;
var Validators_1$i = Validators;
var Global_2$2 = Global;
function stringToArray(string) {
  return Array.from(string);
}
Text$1.stringToArray = stringToArray;
var AUTO = "auto", CENTER = "center", JUSTIFY = "justify", CHANGE_KONVA = "Change.konva", CONTEXT_2D = "2d", DASH = "-", LEFT = "left", TEXT = "text", TEXT_UPPER = "Text", TOP = "top", BOTTOM = "bottom", MIDDLE = "middle", NORMAL$1 = "normal", PX_SPACE = "px ", SPACE = " ", RIGHT = "right", WORD = "word", CHAR = "char", NONE = "none", ELLIPSIS = "\u2026", ATTR_CHANGE_LIST$1 = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], attrChangeListLen = ATTR_CHANGE_LIST$1.length;
function normalizeFontFamily(fontFamily) {
  return fontFamily.split(",").map(function(family) {
    family = family.trim();
    var hasSpace = family.indexOf(" ") >= 0;
    var hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
    if (hasSpace && !hasQuotes) {
      family = '"' + family + '"';
    }
    return family;
  }).join(", ");
}
var dummyContext;
function getDummyContext() {
  if (dummyContext) {
    return dummyContext;
  }
  dummyContext = Util_1$6.Util.createCanvasElement().getContext(CONTEXT_2D);
  return dummyContext;
}
function _fillFunc$1(context) {
  context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function _strokeFunc$1(context) {
  context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
  config = config || {};
  if (!config.fillLinearGradientColorStops && !config.fillRadialGradientColorStops && !config.fillPatternImage) {
    config.fill = config.fill || "black";
  }
  return config;
}
var Text = function(_super) {
  __extends$3(Text2, _super);
  function Text2(config) {
    var _this = _super.call(this, checkDefaultFill(config)) || this;
    _this._partialTextX = 0;
    _this._partialTextY = 0;
    for (var n2 = 0; n2 < attrChangeListLen; n2++) {
      _this.on(ATTR_CHANGE_LIST$1[n2] + CHANGE_KONVA, _this._setTextData);
    }
    _this._setTextData();
    return _this;
  }
  Text2.prototype._sceneFunc = function(context) {
    var textArr = this.textArr, textArrLen = textArr.length;
    if (!this.text()) {
      return;
    }
    var padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf("underline") !== -1, shouldLineThrough = textDecoration.indexOf("line-through") !== -1, n2;
    var translateY = 0;
    var translateY = lineHeightPx / 2;
    var lineTranslateX = 0;
    var lineTranslateY = 0;
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", MIDDLE);
    context.setAttr("textAlign", LEFT);
    if (verticalAlign === MIDDLE) {
      alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
    } else if (verticalAlign === BOTTOM) {
      alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
    }
    context.translate(padding, alignY + padding);
    for (n2 = 0; n2 < textArrLen; n2++) {
      var lineTranslateX = 0;
      var lineTranslateY = 0;
      var obj = textArr[n2], text = obj.text, width = obj.width, lastLine = n2 !== textArrLen - 1, spacesNumber, oneWord, lineWidth;
      context.save();
      if (align === RIGHT) {
        lineTranslateX += totalWidth - width - padding * 2;
      } else if (align === CENTER) {
        lineTranslateX += (totalWidth - width - padding * 2) / 2;
      }
      if (shouldUnderline) {
        context.save();
        context.beginPath();
        context.moveTo(lineTranslateX, translateY + lineTranslateY + Math.round(fontSize / 2));
        spacesNumber = text.split(" ").length - 1;
        oneWord = spacesNumber === 0;
        lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
        context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + Math.round(fontSize / 2));
        context.lineWidth = fontSize / 15;
        context.strokeStyle = fill;
        context.stroke();
        context.restore();
      }
      if (shouldLineThrough) {
        context.save();
        context.beginPath();
        context.moveTo(lineTranslateX, translateY + lineTranslateY);
        spacesNumber = text.split(" ").length - 1;
        oneWord = spacesNumber === 0;
        lineWidth = align === JUSTIFY && lastLine && !oneWord ? totalWidth - padding * 2 : width;
        context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY);
        context.lineWidth = fontSize / 15;
        context.strokeStyle = fill;
        context.stroke();
        context.restore();
      }
      if (letterSpacing !== 0 || align === JUSTIFY) {
        spacesNumber = text.split(" ").length - 1;
        var array = stringToArray(text);
        for (var li2 = 0; li2 < array.length; li2++) {
          var letter = array[li2];
          if (letter === " " && n2 !== textArrLen - 1 && align === JUSTIFY) {
            lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
          }
          this._partialTextX = lineTranslateX;
          this._partialTextY = translateY + lineTranslateY;
          this._partialText = letter;
          context.fillStrokeShape(this);
          lineTranslateX += this.measureSize(letter).width + letterSpacing;
        }
      } else {
        this._partialTextX = lineTranslateX;
        this._partialTextY = translateY + lineTranslateY;
        this._partialText = text;
        context.fillStrokeShape(this);
      }
      context.restore();
      if (textArrLen > 1) {
        translateY += lineHeightPx;
      }
    }
  };
  Text2.prototype._hitFunc = function(context) {
    var width = this.getWidth(), height = this.getHeight();
    context.beginPath();
    context.rect(0, 0, width, height);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Text2.prototype.setText = function(text) {
    var str = Util_1$6.Util._isString(text) ? text : text === null || text === void 0 ? "" : text + "";
    this._setAttr(TEXT, str);
    return this;
  };
  Text2.prototype.getWidth = function() {
    var isAuto = this.attrs.width === AUTO || this.attrs.width === void 0;
    return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  };
  Text2.prototype.getHeight = function() {
    var isAuto = this.attrs.height === AUTO || this.attrs.height === void 0;
    return isAuto ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  };
  Text2.prototype.getTextWidth = function() {
    return this.textWidth;
  };
  Text2.prototype.getTextHeight = function() {
    Util_1$6.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  };
  Text2.prototype.measureSize = function(text) {
    var _context = getDummyContext(), fontSize = this.fontSize(), metrics;
    _context.save();
    _context.font = this._getContextFont();
    metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: fontSize
    };
  };
  Text2.prototype._getContextFont = function() {
    if (Global_1$3.Konva.UA.isIE) {
      return this.fontStyle() + SPACE + this.fontSize() + PX_SPACE + this.fontFamily();
    }
    return this.fontStyle() + SPACE + this.fontVariant() + SPACE + (this.fontSize() + PX_SPACE) + normalizeFontFamily(this.fontFamily());
  };
  Text2.prototype._addTextLine = function(line) {
    if (this.align() === JUSTIFY) {
      line = line.trim();
    }
    var width = this._getTextWidth(line);
    return this.textArr.push({ text: line, width });
  };
  Text2.prototype._getTextWidth = function(text) {
    var letterSpacing = this.letterSpacing();
    var length = text.length;
    return getDummyContext().measureText(text).width + (length ? letterSpacing * (length - 1) : 0);
  };
  Text2.prototype._setTextData = function() {
    var lines = this.text().split("\n"), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== void 0, fixedHeight = height !== AUTO && height !== void 0, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
    this.textArr = [];
    getDummyContext().font = this._getContextFont();
    var additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
    for (var i = 0, max = lines.length; i < max; ++i) {
      var line = lines[i];
      var lineWidth = this._getTextWidth(line);
      if (fixedWidth && lineWidth > maxWidth) {
        while (line.length > 0) {
          var low = 0, high = line.length, match = "", matchWidth = 0;
          while (low < high) {
            var mid = low + high >>> 1, substr = line.slice(0, mid + 1), substrWidth = this._getTextWidth(substr) + additionalWidth;
            if (substrWidth <= maxWidth) {
              low = mid + 1;
              match = substr;
              matchWidth = substrWidth;
            } else {
              high = mid;
            }
          }
          if (match) {
            if (wrapAtWord) {
              var wrapIndex;
              var nextChar = line[match.length];
              var nextIsSpaceOrDash = nextChar === SPACE || nextChar === DASH;
              if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                wrapIndex = match.length;
              } else {
                wrapIndex = Math.max(match.lastIndexOf(SPACE), match.lastIndexOf(DASH)) + 1;
              }
              if (wrapIndex > 0) {
                low = wrapIndex;
                match = match.slice(0, low);
                matchWidth = this._getTextWidth(match);
              }
            }
            match = match.trimRight();
            this._addTextLine(match);
            textWidth = Math.max(textWidth, matchWidth);
            currentHeightPx += lineHeightPx;
            if (!shouldWrap || fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
              var lastLine = this.textArr[this.textArr.length - 1];
              if (lastLine) {
                if (shouldAddEllipsis) {
                  var haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
                  if (!haveSpace) {
                    lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
                  }
                  this.textArr.splice(this.textArr.length - 1, 1);
                  this._addTextLine(lastLine.text + ELLIPSIS);
                }
              }
              break;
            }
            line = line.slice(low);
            line = line.trimLeft();
            if (line.length > 0) {
              lineWidth = this._getTextWidth(line);
              if (lineWidth <= maxWidth) {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
                break;
              }
            }
          } else {
            break;
          }
        }
      } else {
        this._addTextLine(line);
        currentHeightPx += lineHeightPx;
        textWidth = Math.max(textWidth, lineWidth);
      }
      if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
        break;
      }
    }
    this.textHeight = fontSize;
    this.textWidth = textWidth;
  };
  Text2.prototype.getStrokeScaleEnabled = function() {
    return true;
  };
  return Text2;
}(Shape_1$3.Shape);
Text$1.Text = Text;
Text.prototype._fillFunc = _fillFunc$1;
Text.prototype._strokeFunc = _strokeFunc$1;
Text.prototype.className = TEXT_UPPER;
Text.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
Global_2$2._registerNode(Text);
Factory_1$i.Factory.overWriteSetter(Text, "width", Validators_1$i.getNumberOrAutoValidator());
Factory_1$i.Factory.overWriteSetter(Text, "height", Validators_1$i.getNumberOrAutoValidator());
Factory_1$i.Factory.addGetterSetter(Text, "fontFamily", "Arial");
Factory_1$i.Factory.addGetterSetter(Text, "fontSize", 12, Validators_1$i.getNumberValidator());
Factory_1$i.Factory.addGetterSetter(Text, "fontStyle", NORMAL$1);
Factory_1$i.Factory.addGetterSetter(Text, "fontVariant", NORMAL$1);
Factory_1$i.Factory.addGetterSetter(Text, "padding", 0, Validators_1$i.getNumberValidator());
Factory_1$i.Factory.addGetterSetter(Text, "align", LEFT);
Factory_1$i.Factory.addGetterSetter(Text, "verticalAlign", TOP);
Factory_1$i.Factory.addGetterSetter(Text, "lineHeight", 1, Validators_1$i.getNumberValidator());
Factory_1$i.Factory.addGetterSetter(Text, "wrap", WORD);
Factory_1$i.Factory.addGetterSetter(Text, "ellipsis", false, Validators_1$i.getBooleanValidator());
Factory_1$i.Factory.addGetterSetter(Text, "letterSpacing", 0, Validators_1$i.getNumberValidator());
Factory_1$i.Factory.addGetterSetter(Text, "text", "", Validators_1$i.getStringValidator());
Factory_1$i.Factory.addGetterSetter(Text, "textDecoration", "");
Util_1$6.Collection.mapMethods(Text);
var TextPath$1 = {};
var __extends$2 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(TextPath$1, "__esModule", { value: true });
TextPath$1.TextPath = void 0;
var Util_1$5 = Util;
var Factory_1$h = Factory;
var Shape_1$2 = Shape;
var Path_1$1 = Path$1;
var Text_1$1 = Text$1;
var Validators_1$h = Validators;
var Global_1$2 = Global;
var EMPTY_STRING = "", NORMAL = "normal";
function _fillFunc(context) {
  context.fillText(this.partialText, 0, 0);
}
function _strokeFunc(context) {
  context.strokeText(this.partialText, 0, 0);
}
var TextPath = function(_super) {
  __extends$2(TextPath2, _super);
  function TextPath2(config) {
    var _this = _super.call(this, config) || this;
    _this.dummyCanvas = Util_1$5.Util.createCanvasElement();
    _this.dataArray = [];
    _this.dataArray = Path_1$1.Path.parsePathData(_this.attrs.data);
    _this.on("dataChange.konva", function() {
      this.dataArray = Path_1$1.Path.parsePathData(this.attrs.data);
      this._setTextData();
    });
    _this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva", _this._setTextData);
    if (config && config["getKerning"]) {
      Util_1$5.Util.warn('getKerning TextPath API is deprecated. Please use "kerningFunc" instead.');
      _this.kerningFunc(config["getKerning"]);
    }
    _this._setTextData();
    return _this;
  }
  TextPath2.prototype._sceneFunc = function(context) {
    context.setAttr("font", this._getContextFont());
    context.setAttr("textBaseline", this.textBaseline());
    context.setAttr("textAlign", "left");
    context.save();
    var textDecoration = this.textDecoration();
    var fill = this.fill();
    var fontSize = this.fontSize();
    var glyphInfo = this.glyphInfo;
    if (textDecoration === "underline") {
      context.beginPath();
    }
    for (var i = 0; i < glyphInfo.length; i++) {
      context.save();
      var p0 = glyphInfo[i].p0;
      context.translate(p0.x, p0.y);
      context.rotate(glyphInfo[i].rotation);
      this.partialText = glyphInfo[i].text;
      context.fillStrokeShape(this);
      if (textDecoration === "underline") {
        if (i === 0) {
          context.moveTo(0, fontSize / 2 + 1);
        }
        context.lineTo(fontSize, fontSize / 2 + 1);
      }
      context.restore();
    }
    if (textDecoration === "underline") {
      context.strokeStyle = fill;
      context.lineWidth = fontSize / 20;
      context.stroke();
    }
    context.restore();
  };
  TextPath2.prototype._hitFunc = function(context) {
    context.beginPath();
    var glyphInfo = this.glyphInfo;
    if (glyphInfo.length >= 1) {
      var p0 = glyphInfo[0].p0;
      context.moveTo(p0.x, p0.y);
    }
    for (var i = 0; i < glyphInfo.length; i++) {
      var p1 = glyphInfo[i].p1;
      context.lineTo(p1.x, p1.y);
    }
    context.setAttr("lineWidth", this.fontSize());
    context.setAttr("strokeStyle", this.colorKey);
    context.stroke();
  };
  TextPath2.prototype.getTextWidth = function() {
    return this.textWidth;
  };
  TextPath2.prototype.getTextHeight = function() {
    Util_1$5.Util.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.");
    return this.textHeight;
  };
  TextPath2.prototype.setText = function(text) {
    return Text_1$1.Text.prototype.setText.call(this, text);
  };
  TextPath2.prototype._getContextFont = function() {
    return Text_1$1.Text.prototype._getContextFont.call(this);
  };
  TextPath2.prototype._getTextSize = function(text) {
    var dummyCanvas = this.dummyCanvas;
    var _context = dummyCanvas.getContext("2d");
    _context.save();
    _context.font = this._getContextFont();
    var metrics = _context.measureText(text);
    _context.restore();
    return {
      width: metrics.width,
      height: parseInt(this.attrs.fontSize, 10)
    };
  };
  TextPath2.prototype._setTextData = function() {
    var that = this;
    var size = this._getTextSize(this.attrs.text);
    var letterSpacing = this.letterSpacing();
    var align = this.align();
    var kerningFunc = this.kerningFunc();
    this.textWidth = size.width;
    this.textHeight = size.height;
    var textFullWidth = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * letterSpacing, 0);
    this.glyphInfo = [];
    var fullPathWidth = 0;
    for (var l2 = 0; l2 < that.dataArray.length; l2++) {
      if (that.dataArray[l2].pathLength > 0) {
        fullPathWidth += that.dataArray[l2].pathLength;
      }
    }
    var offset = 0;
    if (align === "center") {
      offset = Math.max(0, fullPathWidth / 2 - textFullWidth / 2);
    }
    if (align === "right") {
      offset = Math.max(0, fullPathWidth - textFullWidth);
    }
    var charArr = Text_1$1.stringToArray(this.text());
    var spacesNumber = this.text().split(" ").length - 1;
    var p0, p1, pathCmd;
    var pIndex = -1;
    var currentT = 0;
    var getNextPathSegment = function() {
      currentT = 0;
      var pathData = that.dataArray;
      for (var j = pIndex + 1; j < pathData.length; j++) {
        if (pathData[j].pathLength > 0) {
          pIndex = j;
          return pathData[j];
        } else if (pathData[j].command === "M") {
          p0 = {
            x: pathData[j].points[0],
            y: pathData[j].points[1]
          };
        }
      }
      return {};
    };
    var findSegmentToFitCharacter = function(c2) {
      var glyphWidth2 = that._getTextSize(c2).width + letterSpacing;
      if (c2 === " " && align === "justify") {
        glyphWidth2 += (fullPathWidth - textFullWidth) / spacesNumber;
      }
      var currLen = 0;
      var attempts = 0;
      p1 = void 0;
      while (Math.abs(glyphWidth2 - currLen) / glyphWidth2 > 0.01 && attempts < 20) {
        attempts++;
        var cumulativePathLength = currLen;
        while (pathCmd === void 0) {
          pathCmd = getNextPathSegment();
          if (pathCmd && cumulativePathLength + pathCmd.pathLength < glyphWidth2) {
            cumulativePathLength += pathCmd.pathLength;
            pathCmd = void 0;
          }
        }
        if (pathCmd === {} || p0 === void 0) {
          return void 0;
        }
        var needNewSegment = false;
        switch (pathCmd.command) {
          case "L":
            if (Path_1$1.Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth2) {
              p1 = Path_1$1.Path.getPointOnLine(glyphWidth2, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
            } else {
              pathCmd = void 0;
            }
            break;
          case "A":
            var start = pathCmd.points[4];
            var dTheta = pathCmd.points[5];
            var end = pathCmd.points[4] + dTheta;
            if (currentT === 0) {
              currentT = start + 1e-8;
            } else if (glyphWidth2 > currLen) {
              currentT += Math.PI / 180 * dTheta / Math.abs(dTheta);
            } else {
              currentT -= Math.PI / 360 * dTheta / Math.abs(dTheta);
            }
            if (dTheta < 0 && currentT < end || dTheta >= 0 && currentT > end) {
              currentT = end;
              needNewSegment = true;
            }
            p1 = Path_1$1.Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
            break;
          case "C":
            if (currentT === 0) {
              if (glyphWidth2 > pathCmd.pathLength) {
                currentT = 1e-8;
              } else {
                currentT = glyphWidth2 / pathCmd.pathLength;
              }
            } else if (glyphWidth2 > currLen) {
              currentT += (glyphWidth2 - currLen) / pathCmd.pathLength / 2;
            } else {
              currentT = Math.max(currentT - (currLen - glyphWidth2) / pathCmd.pathLength / 2, 0);
            }
            if (currentT > 1) {
              currentT = 1;
              needNewSegment = true;
            }
            p1 = Path_1$1.Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
            break;
          case "Q":
            if (currentT === 0) {
              currentT = glyphWidth2 / pathCmd.pathLength;
            } else if (glyphWidth2 > currLen) {
              currentT += (glyphWidth2 - currLen) / pathCmd.pathLength;
            } else {
              currentT -= (currLen - glyphWidth2) / pathCmd.pathLength;
            }
            if (currentT > 1) {
              currentT = 1;
              needNewSegment = true;
            }
            p1 = Path_1$1.Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
            break;
        }
        if (p1 !== void 0) {
          currLen = Path_1$1.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
        }
        if (needNewSegment) {
          needNewSegment = false;
          pathCmd = void 0;
        }
      }
    };
    var testChar = "C";
    var glyphWidth = that._getTextSize(testChar).width + letterSpacing;
    var lettersInOffset = offset / glyphWidth - 1;
    for (var k = 0; k < lettersInOffset; k++) {
      findSegmentToFitCharacter(testChar);
      if (p0 === void 0 || p1 === void 0) {
        break;
      }
      p0 = p1;
    }
    for (var i = 0; i < charArr.length; i++) {
      findSegmentToFitCharacter(charArr[i]);
      if (p0 === void 0 || p1 === void 0) {
        break;
      }
      var width = Path_1$1.Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
      var kern = 0;
      if (kerningFunc) {
        try {
          kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
        } catch (e) {
          kern = 0;
        }
      }
      p0.x += kern;
      p1.x += kern;
      this.textWidth += kern;
      var midpoint = Path_1$1.Path.getPointOnLine(kern + width / 2, p0.x, p0.y, p1.x, p1.y);
      var rotation = Math.atan2(p1.y - p0.y, p1.x - p0.x);
      this.glyphInfo.push({
        transposeX: midpoint.x,
        transposeY: midpoint.y,
        text: charArr[i],
        rotation,
        p0,
        p1
      });
      p0 = p1;
    }
  };
  TextPath2.prototype.getSelfRect = function() {
    if (!this.glyphInfo.length) {
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    }
    var points = [];
    this.glyphInfo.forEach(function(info) {
      points.push(info.p0.x);
      points.push(info.p0.y);
      points.push(info.p1.x);
      points.push(info.p1.y);
    });
    var minX = points[0] || 0;
    var maxX = points[0] || 0;
    var minY = points[1] || 0;
    var maxY = points[1] || 0;
    var x2, y2;
    for (var i = 0; i < points.length / 2; i++) {
      x2 = points[i * 2];
      y2 = points[i * 2 + 1];
      minX = Math.min(minX, x2);
      maxX = Math.max(maxX, x2);
      minY = Math.min(minY, y2);
      maxY = Math.max(maxY, y2);
    }
    var fontSize = this.fontSize();
    return {
      x: minX - fontSize / 2,
      y: minY - fontSize / 2,
      width: maxX - minX + fontSize,
      height: maxY - minY + fontSize
    };
  };
  return TextPath2;
}(Shape_1$2.Shape);
TextPath$1.TextPath = TextPath;
TextPath.prototype._fillFunc = _fillFunc;
TextPath.prototype._strokeFunc = _strokeFunc;
TextPath.prototype._fillFuncHit = _fillFunc;
TextPath.prototype._strokeFuncHit = _strokeFunc;
TextPath.prototype.className = "TextPath";
TextPath.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
Global_1$2._registerNode(TextPath);
Factory_1$h.Factory.addGetterSetter(TextPath, "data");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontFamily", "Arial");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontSize", 12, Validators_1$h.getNumberValidator());
Factory_1$h.Factory.addGetterSetter(TextPath, "fontStyle", NORMAL);
Factory_1$h.Factory.addGetterSetter(TextPath, "align", "left");
Factory_1$h.Factory.addGetterSetter(TextPath, "letterSpacing", 0, Validators_1$h.getNumberValidator());
Factory_1$h.Factory.addGetterSetter(TextPath, "textBaseline", "middle");
Factory_1$h.Factory.addGetterSetter(TextPath, "fontVariant", NORMAL);
Factory_1$h.Factory.addGetterSetter(TextPath, "text", EMPTY_STRING);
Factory_1$h.Factory.addGetterSetter(TextPath, "textDecoration", null);
Factory_1$h.Factory.addGetterSetter(TextPath, "kerningFunc", null);
Util_1$5.Collection.mapMethods(TextPath);
var Transformer$1 = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s, i = 1, n2 = arguments.length; i < n2; i++) {
      s = arguments[i];
      for (var p2 in s)
        if (Object.prototype.hasOwnProperty.call(s, p2))
          t2[p2] = s[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
Object.defineProperty(Transformer$1, "__esModule", { value: true });
Transformer$1.Transformer = void 0;
var Util_1$4 = Util;
var Factory_1$g = Factory;
var Node_1$f = Node;
var Shape_1$1 = Shape;
var Rect_1$1 = Rect$1;
var Group_1 = Group$1;
var Global_1$1 = Global;
var Validators_1$g = Validators;
var Global_2$1 = Global;
var EVENTS_NAME = "tr-konva";
var ATTR_CHANGE_LIST = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange"
].map(function(e) {
  return e + ("." + EVENTS_NAME);
}).join(" ");
var NODES_RECT = "nodesRect";
var TRANSFORM_CHANGE_STR = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
].map(function(e) {
  return e + ("." + EVENTS_NAME);
}).join(" ");
var ANGLES = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
var TOUCH_DEVICE = "ontouchstart" in Global_1$1.Konva._global;
function getCursor(anchorName, rad) {
  if (anchorName === "rotater") {
    return "crosshair";
  }
  rad += Util_1$4.Util._degToRad(ANGLES[anchorName] || 0);
  var angle = (Util_1$4.Util._radToDeg(rad) % 360 + 360) % 360;
  if (Util_1$4.Util._inRange(angle, 315 + 22.5, 360) || Util_1$4.Util._inRange(angle, 0, 22.5)) {
    return "ns-resize";
  } else if (Util_1$4.Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
    return "nesw-resize";
  } else if (Util_1$4.Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
    return "ew-resize";
  } else if (Util_1$4.Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
    return "nwse-resize";
  } else if (Util_1$4.Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
    return "ns-resize";
  } else if (Util_1$4.Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
    return "nesw-resize";
  } else if (Util_1$4.Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
    return "ew-resize";
  } else if (Util_1$4.Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
    return "nwse-resize";
  } else {
    Util_1$4.Util.error("Transformer has unknown angle for cursor detection: " + angle);
    return "pointer";
  }
}
var ANCHORS_NAMES = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
];
var MAX_SAFE_INTEGER = 1e8;
function getCenter(shape) {
  return {
    x: shape.x + shape.width / 2 * Math.cos(shape.rotation) + shape.height / 2 * Math.sin(-shape.rotation),
    y: shape.y + shape.height / 2 * Math.cos(shape.rotation) + shape.width / 2 * Math.sin(shape.rotation)
  };
}
function rotateAroundPoint(shape, angleRad, point) {
  var x2 = point.x + (shape.x - point.x) * Math.cos(angleRad) - (shape.y - point.y) * Math.sin(angleRad);
  var y2 = point.y + (shape.x - point.x) * Math.sin(angleRad) + (shape.y - point.y) * Math.cos(angleRad);
  return __assign(__assign({}, shape), {
    rotation: shape.rotation + angleRad,
    x: x2,
    y: y2
  });
}
function rotateAroundCenter(shape, deltaRad) {
  var center = getCenter(shape);
  return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
  var snapped = newRotationRad;
  for (var i = 0; i < snaps.length; i++) {
    var angle = Global_1$1.Konva.getAngle(snaps[i]);
    var absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
    var dif = Math.min(absDiff, Math.PI * 2 - absDiff);
    if (dif < tol) {
      snapped = angle;
    }
  }
  return snapped;
}
var Transformer = function(_super) {
  __extends$1(Transformer2, _super);
  function Transformer2(config) {
    var _this = _super.call(this, config) || this;
    _this._transforming = false;
    _this._createElements();
    _this._handleMouseMove = _this._handleMouseMove.bind(_this);
    _this._handleMouseUp = _this._handleMouseUp.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.on(ATTR_CHANGE_LIST, _this.update);
    if (_this.getNode()) {
      _this.update();
    }
    return _this;
  }
  Transformer2.prototype.attachTo = function(node) {
    this.setNode(node);
    return this;
  };
  Transformer2.prototype.setNode = function(node) {
    Util_1$4.Util.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.");
    return this.setNodes([node]);
  };
  Transformer2.prototype.getNode = function() {
    return this._nodes && this._nodes[0];
  };
  Transformer2.prototype.setNodes = function(nodes) {
    var _this = this;
    if (nodes === void 0) {
      nodes = [];
    }
    if (this._nodes && this._nodes.length) {
      this.detach();
    }
    this._nodes = nodes;
    if (nodes.length === 1) {
      this.rotation(nodes[0].getAbsoluteRotation());
    } else {
      this.rotation(0);
    }
    this._nodes.forEach(function(node) {
      var additionalEvents = node._attrsAffectingSize.map(function(prop) {
        return prop + "Change." + EVENTS_NAME;
      }).join(" ");
      var onChange = function() {
        if (_this.nodes().length === 1) {
          _this.rotation(_this.nodes()[0].getAbsoluteRotation());
        }
        _this._resetTransformCache();
        if (!_this._transforming && !_this.isDragging()) {
          _this.update();
        }
      };
      node.on(additionalEvents, onChange);
      node.on(TRANSFORM_CHANGE_STR, onChange);
      node.on("_clearTransformCache." + EVENTS_NAME, onChange);
      node.on("xChange." + EVENTS_NAME + " yChange." + EVENTS_NAME, onChange);
      _this._proxyDrag(node);
    });
    this._resetTransformCache();
    var elementsCreated = !!this.findOne(".top-left");
    if (elementsCreated) {
      this.update();
    }
    return this;
  };
  Transformer2.prototype._proxyDrag = function(node) {
    var _this = this;
    var lastPos;
    node.on("dragstart." + EVENTS_NAME, function(e) {
      lastPos = node.getAbsolutePosition();
      if (!_this.isDragging() && node !== _this.findOne(".back")) {
        _this.startDrag(e, false);
      }
    });
    node.on("dragmove." + EVENTS_NAME, function(e) {
      if (!lastPos) {
        return;
      }
      var abs = node.getAbsolutePosition();
      var dx = abs.x - lastPos.x;
      var dy = abs.y - lastPos.y;
      _this.nodes().forEach(function(otherNode) {
        if (otherNode === node) {
          return;
        }
        if (otherNode.isDragging()) {
          return;
        }
        var otherAbs = otherNode.getAbsolutePosition();
        otherNode.setAbsolutePosition({
          x: otherAbs.x + dx,
          y: otherAbs.y + dy
        });
        otherNode.startDrag(e);
      });
      lastPos = null;
    });
  };
  Transformer2.prototype.getNodes = function() {
    return this._nodes || [];
  };
  Transformer2.prototype.getActiveAnchor = function() {
    return this._movingAnchorName;
  };
  Transformer2.prototype.detach = function() {
    if (this._nodes) {
      this._nodes.forEach(function(node) {
        node.off("." + EVENTS_NAME);
      });
    }
    this._nodes = [];
    this._resetTransformCache();
  };
  Transformer2.prototype._resetTransformCache = function() {
    this._clearCache(NODES_RECT);
    this._clearCache("transform");
    this._clearSelfAndDescendantCache("absoluteTransform");
  };
  Transformer2.prototype._getNodeRect = function() {
    return this._getCache(NODES_RECT, this.__getNodeRect);
  };
  Transformer2.prototype.__getNodeShape = function(node, rot, relative) {
    if (rot === void 0) {
      rot = this.rotation();
    }
    var rect = node.getClientRect({
      skipTransform: true,
      skipShadow: true,
      skipStroke: this.ignoreStroke()
    });
    var absScale = node.getAbsoluteScale(relative);
    var absPos = node.getAbsolutePosition(relative);
    var dx = rect.x * absScale.x - node.offsetX() * absScale.x;
    var dy = rect.y * absScale.y - node.offsetY() * absScale.y;
    var rotation = (Global_1$1.Konva.getAngle(node.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2);
    var box = {
      x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
      y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
      width: rect.width * absScale.x,
      height: rect.height * absScale.y,
      rotation
    };
    return rotateAroundPoint(box, -Global_1$1.Konva.getAngle(rot), {
      x: 0,
      y: 0
    });
  };
  Transformer2.prototype.__getNodeRect = function() {
    var _this = this;
    var node = this.getNode();
    if (!node) {
      return {
        x: -MAX_SAFE_INTEGER,
        y: -MAX_SAFE_INTEGER,
        width: 0,
        height: 0,
        rotation: 0
      };
    }
    var totalPoints = [];
    this.nodes().map(function(node2) {
      var box = node2.getClientRect({
        skipTransform: true,
        skipShadow: true,
        skipStroke: _this.ignoreStroke()
      });
      var points = [
        { x: box.x, y: box.y },
        { x: box.x + box.width, y: box.y },
        { x: box.x + box.width, y: box.y + box.height },
        { x: box.x, y: box.y + box.height }
      ];
      var trans = node2.getAbsoluteTransform();
      points.forEach(function(point) {
        var transformed = trans.point(point);
        totalPoints.push(transformed);
      });
    });
    var tr = new Util_1$4.Transform();
    tr.rotate(-Global_1$1.Konva.getAngle(this.rotation()));
    var minX, minY, maxX, maxY;
    totalPoints.forEach(function(point) {
      var transformed = tr.point(point);
      if (minX === void 0) {
        minX = maxX = transformed.x;
        minY = maxY = transformed.y;
      }
      minX = Math.min(minX, transformed.x);
      minY = Math.min(minY, transformed.y);
      maxX = Math.max(maxX, transformed.x);
      maxY = Math.max(maxY, transformed.y);
    });
    tr.invert();
    var p2 = tr.point({ x: minX, y: minY });
    return {
      x: p2.x,
      y: p2.y,
      width: maxX - minX,
      height: maxY - minY,
      rotation: Global_1$1.Konva.getAngle(this.rotation())
    };
  };
  Transformer2.prototype.getX = function() {
    return this._getNodeRect().x;
  };
  Transformer2.prototype.getY = function() {
    return this._getNodeRect().y;
  };
  Transformer2.prototype.getWidth = function() {
    return this._getNodeRect().width;
  };
  Transformer2.prototype.getHeight = function() {
    return this._getNodeRect().height;
  };
  Transformer2.prototype._createElements = function() {
    this._createBack();
    ANCHORS_NAMES.forEach(function(name) {
      this._createAnchor(name);
    }.bind(this));
    this._createAnchor("rotater");
  };
  Transformer2.prototype._createAnchor = function(name) {
    var _this = this;
    var anchor = new Rect_1$1.Rect({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: name + " _anchor",
      dragDistance: 0,
      draggable: true,
      hitStrokeWidth: TOUCH_DEVICE ? 10 : "auto"
    });
    var self2 = this;
    anchor.on("mousedown touchstart", function(e) {
      self2._handleMouseDown(e);
    });
    anchor.on("dragstart", function(e) {
      anchor.stopDrag();
      e.cancelBubble = true;
    });
    anchor.on("dragend", function(e) {
      e.cancelBubble = true;
    });
    anchor.on("mouseenter", function() {
      var rad = Global_1$1.Konva.getAngle(_this.rotation());
      var cursor = getCursor(name, rad);
      anchor.getStage().content.style.cursor = cursor;
      _this._cursorChange = true;
    });
    anchor.on("mouseout", function() {
      anchor.getStage().content.style.cursor = "";
      _this._cursorChange = false;
    });
    this.add(anchor);
  };
  Transformer2.prototype._createBack = function() {
    var _this = this;
    var back = new Shape_1$1.Shape({
      name: "back",
      width: 0,
      height: 0,
      draggable: true,
      sceneFunc: function(ctx) {
        var tr = this.getParent();
        var padding = tr.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, this.width() + padding * 2, this.height() + padding * 2);
        ctx.moveTo(this.width() / 2, -padding);
        if (tr.rotateEnabled()) {
          ctx.lineTo(this.width() / 2, -tr.rotateAnchorOffset() * Util_1$4.Util._sign(this.height()) - padding);
        }
        ctx.fillStrokeShape(this);
      },
      hitFunc: function(ctx, shape) {
        if (!_this.shouldOverdrawWholeArea()) {
          return;
        }
        var padding = _this.padding();
        ctx.beginPath();
        ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
        ctx.fillStrokeShape(shape);
      }
    });
    this.add(back);
    this._proxyDrag(back);
    back.on("dragstart", function(e) {
      e.cancelBubble = true;
    });
    back.on("dragmove", function(e) {
      e.cancelBubble = true;
    });
    back.on("dragend", function(e) {
      e.cancelBubble = true;
    });
  };
  Transformer2.prototype._handleMouseDown = function(e) {
    this._movingAnchorName = e.target.name().split(" ")[0];
    var attrs = this._getNodeRect();
    var width = attrs.width;
    var height = attrs.height;
    var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
    this.sin = Math.abs(height / hypotenuse);
    this.cos = Math.abs(width / hypotenuse);
    window.addEventListener("mousemove", this._handleMouseMove);
    window.addEventListener("touchmove", this._handleMouseMove);
    window.addEventListener("mouseup", this._handleMouseUp, true);
    window.addEventListener("touchend", this._handleMouseUp, true);
    this._transforming = true;
    var ap = e.target.getAbsolutePosition();
    var pos = e.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: pos.x - ap.x,
      y: pos.y - ap.y
    };
    this._fire("transformstart", { evt: e, target: this.getNode() });
    this._nodes.forEach(function(target) {
      target._fire("transformstart", { evt: e, target });
    });
  };
  Transformer2.prototype._handleMouseMove = function(e) {
    var x2, y2, newHypotenuse;
    var anchorNode = this.findOne("." + this._movingAnchorName);
    var stage = anchorNode.getStage();
    stage.setPointersPositions(e);
    var pp = stage.getPointerPosition();
    var newNodePos = {
      x: pp.x - this._anchorDragOffset.x,
      y: pp.y - this._anchorDragOffset.y
    };
    var oldAbs = anchorNode.getAbsolutePosition();
    anchorNode.setAbsolutePosition(newNodePos);
    var newAbs = anchorNode.getAbsolutePosition();
    if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
      return;
    }
    if (this._movingAnchorName === "rotater") {
      var attrs = this._getNodeRect();
      x2 = anchorNode.x() - attrs.width / 2;
      y2 = -anchorNode.y() + attrs.height / 2;
      var delta = Math.atan2(-y2, x2) + Math.PI / 2;
      if (attrs.height < 0) {
        delta -= Math.PI;
      }
      var oldRotation = Global_1$1.Konva.getAngle(this.rotation());
      var newRotation = oldRotation + delta;
      var tol = Global_1$1.Konva.getAngle(this.rotationSnapTolerance());
      var snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
      var diff = snappedRot - attrs.rotation;
      var shape = rotateAroundCenter(attrs, diff);
      this._fitNodesInto(shape, e);
      return;
    }
    var keepProportion = this.keepRatio() || e.shiftKey;
    var centeredScaling = this.centeredScaling() || e.altKey;
    if (this._movingAnchorName === "top-left") {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-right").x(),
          y: this.findOne(".bottom-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        var reverseX = this.findOne(".top-left").x() > comparePoint.x ? -1 : 1;
        var reverseY = this.findOne(".top-left").y() > comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-left").x(comparePoint.x - x2);
        this.findOne(".top-left").y(comparePoint.y - y2);
      }
    } else if (this._movingAnchorName === "top-center") {
      this.findOne(".top-left").y(anchorNode.y());
    } else if (this._movingAnchorName === "top-right") {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".bottom-left").x(),
          y: this.findOne(".bottom-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(comparePoint.y - anchorNode.y(), 2));
        var reverseX = this.findOne(".top-right").x() < comparePoint.x ? -1 : 1;
        var reverseY = this.findOne(".top-right").y() > comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".top-right").x(comparePoint.x + x2);
        this.findOne(".top-right").y(comparePoint.y - y2);
      }
      var pos = anchorNode.position();
      this.findOne(".top-left").y(pos.y);
      this.findOne(".bottom-right").x(pos.x);
    } else if (this._movingAnchorName === "middle-left") {
      this.findOne(".top-left").x(anchorNode.x());
    } else if (this._movingAnchorName === "middle-right") {
      this.findOne(".bottom-right").x(anchorNode.x());
    } else if (this._movingAnchorName === "bottom-left") {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-right").x(),
          y: this.findOne(".top-right").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        var reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
        var reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        anchorNode.x(comparePoint.x - x2);
        anchorNode.y(comparePoint.y + y2);
      }
      pos = anchorNode.position();
      this.findOne(".top-left").x(pos.x);
      this.findOne(".bottom-right").y(pos.y);
    } else if (this._movingAnchorName === "bottom-center") {
      this.findOne(".bottom-right").y(anchorNode.y());
    } else if (this._movingAnchorName === "bottom-right") {
      if (keepProportion) {
        var comparePoint = centeredScaling ? {
          x: this.width() / 2,
          y: this.height() / 2
        } : {
          x: this.findOne(".top-left").x(),
          y: this.findOne(".top-left").y()
        };
        newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) + Math.pow(anchorNode.y() - comparePoint.y, 2));
        var reverseX = this.findOne(".bottom-right").x() < comparePoint.x ? -1 : 1;
        var reverseY = this.findOne(".bottom-right").y() < comparePoint.y ? -1 : 1;
        x2 = newHypotenuse * this.cos * reverseX;
        y2 = newHypotenuse * this.sin * reverseY;
        this.findOne(".bottom-right").x(comparePoint.x + x2);
        this.findOne(".bottom-right").y(comparePoint.y + y2);
      }
    } else {
      console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
    }
    var centeredScaling = this.centeredScaling() || e.altKey;
    if (centeredScaling) {
      var topLeft = this.findOne(".top-left");
      var bottomRight = this.findOne(".bottom-right");
      var topOffsetX = topLeft.x();
      var topOffsetY = topLeft.y();
      var bottomOffsetX = this.getWidth() - bottomRight.x();
      var bottomOffsetY = this.getHeight() - bottomRight.y();
      bottomRight.move({
        x: -topOffsetX,
        y: -topOffsetY
      });
      topLeft.move({
        x: bottomOffsetX,
        y: bottomOffsetY
      });
    }
    var absPos = this.findOne(".top-left").getAbsolutePosition();
    x2 = absPos.x;
    y2 = absPos.y;
    var width = this.findOne(".bottom-right").x() - this.findOne(".top-left").x();
    var height = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
    this._fitNodesInto({
      x: x2,
      y: y2,
      width,
      height,
      rotation: Global_1$1.Konva.getAngle(this.rotation())
    }, e);
  };
  Transformer2.prototype._handleMouseUp = function(e) {
    this._removeEvents(e);
  };
  Transformer2.prototype.getAbsoluteTransform = function() {
    return this.getTransform();
  };
  Transformer2.prototype._removeEvents = function(e) {
    if (this._transforming) {
      this._transforming = false;
      window.removeEventListener("mousemove", this._handleMouseMove);
      window.removeEventListener("touchmove", this._handleMouseMove);
      window.removeEventListener("mouseup", this._handleMouseUp, true);
      window.removeEventListener("touchend", this._handleMouseUp, true);
      var node = this.getNode();
      this._fire("transformend", { evt: e, target: node });
      if (node) {
        this._nodes.forEach(function(target) {
          target._fire("transformend", { evt: e, target });
        });
      }
      this._movingAnchorName = null;
    }
  };
  Transformer2.prototype._fitNodesInto = function(newAttrs, evt) {
    var _this = this;
    var oldAttrs = this._getNodeRect();
    var minSize = 1;
    if (Util_1$4.Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    if (Util_1$4.Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
      this.update();
      return;
    }
    var t2 = new Util_1$4.Transform();
    t2.rotate(Global_1$1.Konva.getAngle(this.rotation()));
    if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      var offset = t2.point({
        x: -this.padding() * 2,
        y: 0
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      newAttrs.width += this.padding() * 2;
      this._movingAnchorName = this._movingAnchorName.replace("left", "right");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
    } else if (this._movingAnchorName && newAttrs.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      var offset = t2.point({
        x: this.padding() * 2,
        y: 0
      });
      this._movingAnchorName = this._movingAnchorName.replace("right", "left");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.width += this.padding() * 2;
    }
    if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      var offset = t2.point({
        x: 0,
        y: -this.padding() * 2
      });
      newAttrs.x += offset.x;
      newAttrs.y += offset.y;
      this._movingAnchorName = this._movingAnchorName.replace("top", "bottom");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    } else if (this._movingAnchorName && newAttrs.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      var offset = t2.point({
        x: 0,
        y: this.padding() * 2
      });
      this._movingAnchorName = this._movingAnchorName.replace("bottom", "top");
      this._anchorDragOffset.x -= offset.x;
      this._anchorDragOffset.y -= offset.y;
      newAttrs.height += this.padding() * 2;
    }
    if (this.boundBoxFunc()) {
      var bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
      if (bounded) {
        newAttrs = bounded;
      } else {
        Util_1$4.Util.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
      }
    }
    var baseSize = 1e7;
    var oldTr = new Util_1$4.Transform();
    oldTr.translate(oldAttrs.x, oldAttrs.y);
    oldTr.rotate(oldAttrs.rotation);
    oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
    var newTr = new Util_1$4.Transform();
    newTr.translate(newAttrs.x, newAttrs.y);
    newTr.rotate(newAttrs.rotation);
    newTr.scale(newAttrs.width / baseSize, newAttrs.height / baseSize);
    var delta = newTr.multiply(oldTr.invert());
    this._nodes.forEach(function(node) {
      var _a;
      var parentTransform = node.getParent().getAbsoluteTransform();
      var localTransform = node.getTransform().copy();
      localTransform.translate(node.offsetX(), node.offsetY());
      var newLocalTransform = new Util_1$4.Transform();
      newLocalTransform.multiply(parentTransform.copy().invert()).multiply(delta).multiply(parentTransform).multiply(localTransform);
      var attrs = newLocalTransform.decompose();
      node.setAttrs(attrs);
      _this._fire("transform", { evt, target: node });
      node._fire("transform", { evt, target: node });
      (_a = node.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
    });
    this.rotation(Util_1$4.Util._getRotation(newAttrs.rotation));
    this._resetTransformCache();
    this.update();
    this.getLayer().batchDraw();
  };
  Transformer2.prototype.forceUpdate = function() {
    this._resetTransformCache();
    this.update();
  };
  Transformer2.prototype._batchChangeChild = function(selector, attrs) {
    var anchor = this.findOne(selector);
    anchor.setAttrs(attrs);
  };
  Transformer2.prototype.update = function() {
    var _this = this;
    var _a;
    var attrs = this._getNodeRect();
    this.rotation(Util_1$4.Util._getRotation(attrs.rotation));
    var width = attrs.width;
    var height = attrs.height;
    var enabledAnchors = this.enabledAnchors();
    var resizeEnabled = this.resizeEnabled();
    var padding = this.padding();
    var anchorSize = this.anchorSize();
    this.find("._anchor").each(function(node) {
      node.setAttrs({
        width: anchorSize,
        height: anchorSize,
        offsetX: anchorSize / 2,
        offsetY: anchorSize / 2,
        stroke: _this.anchorStroke(),
        strokeWidth: _this.anchorStrokeWidth(),
        fill: _this.anchorFill(),
        cornerRadius: _this.anchorCornerRadius()
      });
    });
    this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-left") >= 0
    });
    this._batchChangeChild(".top-center", {
      x: width / 2,
      y: 0,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-center") >= 0
    });
    this._batchChangeChild(".top-right", {
      x: width,
      y: 0,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("top-right") >= 0
    });
    this._batchChangeChild(".middle-left", {
      x: 0,
      y: height / 2,
      offsetX: anchorSize / 2 + padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-left") >= 0
    });
    this._batchChangeChild(".middle-right", {
      x: width,
      y: height / 2,
      offsetX: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("middle-right") >= 0
    });
    this._batchChangeChild(".bottom-left", {
      x: 0,
      y: height,
      offsetX: anchorSize / 2 + padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-left") >= 0
    });
    this._batchChangeChild(".bottom-center", {
      x: width / 2,
      y: height,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-center") >= 0
    });
    this._batchChangeChild(".bottom-right", {
      x: width,
      y: height,
      offsetX: anchorSize / 2 - padding,
      offsetY: anchorSize / 2 - padding,
      visible: resizeEnabled && enabledAnchors.indexOf("bottom-right") >= 0
    });
    this._batchChangeChild(".rotater", {
      x: width / 2,
      y: -this.rotateAnchorOffset() * Util_1$4.Util._sign(height) - padding,
      visible: this.rotateEnabled()
    });
    this._batchChangeChild(".back", {
      width,
      height,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    });
    (_a = this.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
  };
  Transformer2.prototype.isTransforming = function() {
    return this._transforming;
  };
  Transformer2.prototype.stopTransform = function() {
    if (this._transforming) {
      this._removeEvents();
      var anchorNode = this.findOne("." + this._movingAnchorName);
      if (anchorNode) {
        anchorNode.stopDrag();
      }
    }
  };
  Transformer2.prototype.destroy = function() {
    if (this.getStage() && this._cursorChange) {
      this.getStage().content.style.cursor = "";
    }
    Group_1.Group.prototype.destroy.call(this);
    this.detach();
    this._removeEvents();
    return this;
  };
  Transformer2.prototype.toObject = function() {
    return Node_1$f.Node.prototype.toObject.call(this);
  };
  return Transformer2;
}(Group_1.Group);
Transformer$1.Transformer = Transformer;
function validateAnchors(val) {
  if (!(val instanceof Array)) {
    Util_1$4.Util.warn("enabledAnchors value should be an array");
  }
  if (val instanceof Array) {
    val.forEach(function(name) {
      if (ANCHORS_NAMES.indexOf(name) === -1) {
        Util_1$4.Util.warn("Unknown anchor name: " + name + ". Available names are: " + ANCHORS_NAMES.join(", "));
      }
    });
  }
  return val || [];
}
Transformer.prototype.className = "Transformer";
Global_2$1._registerNode(Transformer);
Factory_1$g.Factory.addGetterSetter(Transformer, "enabledAnchors", ANCHORS_NAMES, validateAnchors);
Factory_1$g.Factory.addGetterSetter(Transformer, "resizeEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer, "anchorSize", 10, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "rotateEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer, "rotationSnaps", []);
Factory_1$g.Factory.addGetterSetter(Transformer, "rotateAnchorOffset", 50, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "rotationSnapTolerance", 5, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "borderEnabled", true);
Factory_1$g.Factory.addGetterSetter(Transformer, "anchorStroke", "rgb(0, 161, 255)");
Factory_1$g.Factory.addGetterSetter(Transformer, "anchorStrokeWidth", 1, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "anchorFill", "white");
Factory_1$g.Factory.addGetterSetter(Transformer, "anchorCornerRadius", 0, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "borderStroke", "rgb(0, 161, 255)");
Factory_1$g.Factory.addGetterSetter(Transformer, "borderStrokeWidth", 1, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "borderDash");
Factory_1$g.Factory.addGetterSetter(Transformer, "keepRatio", true);
Factory_1$g.Factory.addGetterSetter(Transformer, "centeredScaling", false);
Factory_1$g.Factory.addGetterSetter(Transformer, "ignoreStroke", false);
Factory_1$g.Factory.addGetterSetter(Transformer, "padding", 0, Validators_1$g.getNumberValidator());
Factory_1$g.Factory.addGetterSetter(Transformer, "node");
Factory_1$g.Factory.addGetterSetter(Transformer, "nodes");
Factory_1$g.Factory.addGetterSetter(Transformer, "boundBoxFunc");
Factory_1$g.Factory.addGetterSetter(Transformer, "shouldOverdrawWholeArea", false);
Factory_1$g.Factory.backCompat(Transformer, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
Util_1$4.Collection.mapMethods(Transformer);
var Wedge$1 = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p2 in b2)
        if (Object.prototype.hasOwnProperty.call(b2, p2))
          d2[p2] = b2[p2];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(Wedge$1, "__esModule", { value: true });
Wedge$1.Wedge = void 0;
var Util_1$3 = Util;
var Factory_1$f = Factory;
var Shape_1 = Shape;
var Global_1 = Global;
var Validators_1$f = Validators;
var Global_2 = Global;
var Wedge = function(_super) {
  __extends(Wedge2, _super);
  function Wedge2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  Wedge2.prototype._sceneFunc = function(context) {
    context.beginPath();
    context.arc(0, 0, this.radius(), 0, Global_1.Konva.getAngle(this.angle()), this.clockwise());
    context.lineTo(0, 0);
    context.closePath();
    context.fillStrokeShape(this);
  };
  Wedge2.prototype.getWidth = function() {
    return this.radius() * 2;
  };
  Wedge2.prototype.getHeight = function() {
    return this.radius() * 2;
  };
  Wedge2.prototype.setWidth = function(width) {
    this.radius(width / 2);
  };
  Wedge2.prototype.setHeight = function(height) {
    this.radius(height / 2);
  };
  return Wedge2;
}(Shape_1.Shape);
Wedge$1.Wedge = Wedge;
Wedge.prototype.className = "Wedge";
Wedge.prototype._centroid = true;
Wedge.prototype._attrsAffectingSize = ["radius"];
Global_2._registerNode(Wedge);
Factory_1$f.Factory.addGetterSetter(Wedge, "radius", 0, Validators_1$f.getNumberValidator());
Factory_1$f.Factory.addGetterSetter(Wedge, "angle", 0, Validators_1$f.getNumberValidator());
Factory_1$f.Factory.addGetterSetter(Wedge, "clockwise", false);
Factory_1$f.Factory.backCompat(Wedge, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
Util_1$3.Collection.mapMethods(Wedge);
var Blur$1 = {};
Object.defineProperty(Blur$1, "__esModule", { value: true });
Blur$1.Blur = void 0;
var Factory_1$e = Factory;
var Node_1$e = Node;
var Validators_1$e = Validators;
function BlurStack() {
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.a = 0;
  this.next = null;
}
var mul_table = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
];
var shg_table = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function filterGaussBlurRGBA(imageData, radius) {
  var pixels = imageData.data, width = imageData.width, height = imageData.height;
  var x2, y2, i, p2, yp, yi2, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg2, pb2, pa2, rbs;
  var div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2, stackStart = new BlurStack(), stackEnd = null, stack = stackStart, stackIn = null, stackOut = null, mul_sum = mul_table[radius], shg_sum = shg_table[radius];
  for (i = 1; i < div; i++) {
    stack = stack.next = new BlurStack();
    if (i === radiusPlus1) {
      stackEnd = stack;
    }
  }
  stack.next = stackStart;
  yw = yi2 = 0;
  for (y2 = 0; y2 < height; y2++) {
    r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
    r_out_sum = radiusPlus1 * (pr = pixels[yi2]);
    g_out_sum = radiusPlus1 * (pg2 = pixels[yi2 + 1]);
    b_out_sum = radiusPlus1 * (pb2 = pixels[yi2 + 2]);
    a_out_sum = radiusPlus1 * (pa2 = pixels[yi2 + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg2;
    b_sum += sumFactor * pb2;
    a_sum += sumFactor * pa2;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg2;
      stack.b = pb2;
      stack.a = pa2;
      stack = stack.next;
    }
    for (i = 1; i < radiusPlus1; i++) {
      p2 = yi2 + ((widthMinus1 < i ? widthMinus1 : i) << 2);
      r_sum += (stack.r = pr = pixels[p2]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg2 = pixels[p2 + 1]) * rbs;
      b_sum += (stack.b = pb2 = pixels[p2 + 2]) * rbs;
      a_sum += (stack.a = pa2 = pixels[p2 + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg2;
      b_in_sum += pb2;
      a_in_sum += pa2;
      stack = stack.next;
    }
    stackIn = stackStart;
    stackOut = stackEnd;
    for (x2 = 0; x2 < width; x2++) {
      pixels[yi2 + 3] = pa2 = a_sum * mul_sum >> shg_sum;
      if (pa2 !== 0) {
        pa2 = 255 / pa2;
        pixels[yi2] = (r_sum * mul_sum >> shg_sum) * pa2;
        pixels[yi2 + 1] = (g_sum * mul_sum >> shg_sum) * pa2;
        pixels[yi2 + 2] = (b_sum * mul_sum >> shg_sum) * pa2;
      } else {
        pixels[yi2] = pixels[yi2 + 1] = pixels[yi2 + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = yw + ((p2 = x2 + radius + 1) < widthMinus1 ? p2 : widthMinus1) << 2;
      r_in_sum += stackIn.r = pixels[p2];
      g_in_sum += stackIn.g = pixels[p2 + 1];
      b_in_sum += stackIn.b = pixels[p2 + 2];
      a_in_sum += stackIn.a = pixels[p2 + 3];
      r_sum += r_in_sum;
      g_sum += g_in_sum;
      b_sum += b_in_sum;
      a_sum += a_in_sum;
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg2 = stackOut.g;
      b_out_sum += pb2 = stackOut.b;
      a_out_sum += pa2 = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg2;
      b_in_sum -= pb2;
      a_in_sum -= pa2;
      stackOut = stackOut.next;
      yi2 += 4;
    }
    yw += width;
  }
  for (x2 = 0; x2 < width; x2++) {
    g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
    yi2 = x2 << 2;
    r_out_sum = radiusPlus1 * (pr = pixels[yi2]);
    g_out_sum = radiusPlus1 * (pg2 = pixels[yi2 + 1]);
    b_out_sum = radiusPlus1 * (pb2 = pixels[yi2 + 2]);
    a_out_sum = radiusPlus1 * (pa2 = pixels[yi2 + 3]);
    r_sum += sumFactor * pr;
    g_sum += sumFactor * pg2;
    b_sum += sumFactor * pb2;
    a_sum += sumFactor * pa2;
    stack = stackStart;
    for (i = 0; i < radiusPlus1; i++) {
      stack.r = pr;
      stack.g = pg2;
      stack.b = pb2;
      stack.a = pa2;
      stack = stack.next;
    }
    yp = width;
    for (i = 1; i <= radius; i++) {
      yi2 = yp + x2 << 2;
      r_sum += (stack.r = pr = pixels[yi2]) * (rbs = radiusPlus1 - i);
      g_sum += (stack.g = pg2 = pixels[yi2 + 1]) * rbs;
      b_sum += (stack.b = pb2 = pixels[yi2 + 2]) * rbs;
      a_sum += (stack.a = pa2 = pixels[yi2 + 3]) * rbs;
      r_in_sum += pr;
      g_in_sum += pg2;
      b_in_sum += pb2;
      a_in_sum += pa2;
      stack = stack.next;
      if (i < heightMinus1) {
        yp += width;
      }
    }
    yi2 = x2;
    stackIn = stackStart;
    stackOut = stackEnd;
    for (y2 = 0; y2 < height; y2++) {
      p2 = yi2 << 2;
      pixels[p2 + 3] = pa2 = a_sum * mul_sum >> shg_sum;
      if (pa2 > 0) {
        pa2 = 255 / pa2;
        pixels[p2] = (r_sum * mul_sum >> shg_sum) * pa2;
        pixels[p2 + 1] = (g_sum * mul_sum >> shg_sum) * pa2;
        pixels[p2 + 2] = (b_sum * mul_sum >> shg_sum) * pa2;
      } else {
        pixels[p2] = pixels[p2 + 1] = pixels[p2 + 2] = 0;
      }
      r_sum -= r_out_sum;
      g_sum -= g_out_sum;
      b_sum -= b_out_sum;
      a_sum -= a_out_sum;
      r_out_sum -= stackIn.r;
      g_out_sum -= stackIn.g;
      b_out_sum -= stackIn.b;
      a_out_sum -= stackIn.a;
      p2 = x2 + ((p2 = y2 + radiusPlus1) < heightMinus1 ? p2 : heightMinus1) * width << 2;
      r_sum += r_in_sum += stackIn.r = pixels[p2];
      g_sum += g_in_sum += stackIn.g = pixels[p2 + 1];
      b_sum += b_in_sum += stackIn.b = pixels[p2 + 2];
      a_sum += a_in_sum += stackIn.a = pixels[p2 + 3];
      stackIn = stackIn.next;
      r_out_sum += pr = stackOut.r;
      g_out_sum += pg2 = stackOut.g;
      b_out_sum += pb2 = stackOut.b;
      a_out_sum += pa2 = stackOut.a;
      r_in_sum -= pr;
      g_in_sum -= pg2;
      b_in_sum -= pb2;
      a_in_sum -= pa2;
      stackOut = stackOut.next;
      yi2 += width;
    }
  }
}
var Blur = function Blur2(imageData) {
  var radius = Math.round(this.blurRadius());
  if (radius > 0) {
    filterGaussBlurRGBA(imageData, radius);
  }
};
Blur$1.Blur = Blur;
Factory_1$e.Factory.addGetterSetter(Node_1$e.Node, "blurRadius", 0, Validators_1$e.getNumberValidator(), Factory_1$e.Factory.afterSetFilter);
var Brighten$1 = {};
Object.defineProperty(Brighten$1, "__esModule", { value: true });
Brighten$1.Brighten = void 0;
var Factory_1$d = Factory;
var Node_1$d = Node;
var Validators_1$d = Validators;
var Brighten = function(imageData) {
  var brightness = this.brightness() * 255, data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 4) {
    data[i] += brightness;
    data[i + 1] += brightness;
    data[i + 2] += brightness;
  }
};
Brighten$1.Brighten = Brighten;
Factory_1$d.Factory.addGetterSetter(Node_1$d.Node, "brightness", 0, Validators_1$d.getNumberValidator(), Factory_1$d.Factory.afterSetFilter);
var Contrast$1 = {};
Object.defineProperty(Contrast$1, "__esModule", { value: true });
Contrast$1.Contrast = void 0;
var Factory_1$c = Factory;
var Node_1$c = Node;
var Validators_1$c = Validators;
var Contrast = function(imageData) {
  var adjust = Math.pow((this.contrast() + 100) / 100, 2);
  var data = imageData.data, nPixels = data.length, red = 150, green = 150, blue = 150, i;
  for (i = 0; i < nPixels; i += 4) {
    red = data[i];
    green = data[i + 1];
    blue = data[i + 2];
    red /= 255;
    red -= 0.5;
    red *= adjust;
    red += 0.5;
    red *= 255;
    green /= 255;
    green -= 0.5;
    green *= adjust;
    green += 0.5;
    green *= 255;
    blue /= 255;
    blue -= 0.5;
    blue *= adjust;
    blue += 0.5;
    blue *= 255;
    red = red < 0 ? 0 : red > 255 ? 255 : red;
    green = green < 0 ? 0 : green > 255 ? 255 : green;
    blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
    data[i] = red;
    data[i + 1] = green;
    data[i + 2] = blue;
  }
};
Contrast$1.Contrast = Contrast;
Factory_1$c.Factory.addGetterSetter(Node_1$c.Node, "contrast", 0, Validators_1$c.getNumberValidator(), Factory_1$c.Factory.afterSetFilter);
var Emboss$1 = {};
Object.defineProperty(Emboss$1, "__esModule", { value: true });
Emboss$1.Emboss = void 0;
var Factory_1$b = Factory;
var Node_1$b = Node;
var Util_1$2 = Util;
var Validators_1$b = Validators;
var Emboss = function(imageData) {
  var strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), dirY = 0, dirX = 0, data = imageData.data, w2 = imageData.width, h = imageData.height, w4 = w2 * 4, y2 = h;
  switch (direction) {
    case "top-left":
      dirY = -1;
      dirX = -1;
      break;
    case "top":
      dirY = -1;
      dirX = 0;
      break;
    case "top-right":
      dirY = -1;
      dirX = 1;
      break;
    case "right":
      dirY = 0;
      dirX = 1;
      break;
    case "bottom-right":
      dirY = 1;
      dirX = 1;
      break;
    case "bottom":
      dirY = 1;
      dirX = 0;
      break;
    case "bottom-left":
      dirY = 1;
      dirX = -1;
      break;
    case "left":
      dirY = 0;
      dirX = -1;
      break;
    default:
      Util_1$2.Util.error("Unknown emboss direction: " + direction);
  }
  do {
    var offsetY = (y2 - 1) * w4;
    var otherY = dirY;
    if (y2 + otherY < 1) {
      otherY = 0;
    }
    if (y2 + otherY > h) {
      otherY = 0;
    }
    var offsetYOther = (y2 - 1 + otherY) * w2 * 4;
    var x2 = w2;
    do {
      var offset = offsetY + (x2 - 1) * 4;
      var otherX = dirX;
      if (x2 + otherX < 1) {
        otherX = 0;
      }
      if (x2 + otherX > w2) {
        otherX = 0;
      }
      var offsetOther = offsetYOther + (x2 - 1 + otherX) * 4;
      var dR = data[offset] - data[offsetOther];
      var dG = data[offset + 1] - data[offsetOther + 1];
      var dB = data[offset + 2] - data[offsetOther + 2];
      var dif = dR;
      var absDif = dif > 0 ? dif : -dif;
      var absG = dG > 0 ? dG : -dG;
      var absB = dB > 0 ? dB : -dB;
      if (absG > absDif) {
        dif = dG;
      }
      if (absB > absDif) {
        dif = dB;
      }
      dif *= strength;
      if (blend) {
        var r2 = data[offset] + dif;
        var g = data[offset + 1] + dif;
        var b = data[offset + 2] + dif;
        data[offset] = r2 > 255 ? 255 : r2 < 0 ? 0 : r2;
        data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
        data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
      } else {
        var grey = greyLevel - dif;
        if (grey < 0) {
          grey = 0;
        } else if (grey > 255) {
          grey = 255;
        }
        data[offset] = data[offset + 1] = data[offset + 2] = grey;
      }
    } while (--x2);
  } while (--y2);
};
Emboss$1.Emboss = Emboss;
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossStrength", 0.5, Validators_1$b.getNumberValidator(), Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossWhiteLevel", 0.5, Validators_1$b.getNumberValidator(), Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossDirection", "top-left", null, Factory_1$b.Factory.afterSetFilter);
Factory_1$b.Factory.addGetterSetter(Node_1$b.Node, "embossBlend", false, null, Factory_1$b.Factory.afterSetFilter);
var Enhance$1 = {};
Object.defineProperty(Enhance$1, "__esModule", { value: true });
Enhance$1.Enhance = void 0;
var Factory_1$a = Factory;
var Node_1$a = Node;
var Validators_1$a = Validators;
function remap(fromValue, fromMin, fromMax, toMin, toMax) {
  var fromRange = fromMax - fromMin, toRange = toMax - toMin, toValue;
  if (fromRange === 0) {
    return toMin + toRange / 2;
  }
  if (toRange === 0) {
    return toMin;
  }
  toValue = (fromValue - fromMin) / fromRange;
  toValue = toRange * toValue + toMin;
  return toValue;
}
var Enhance = function(imageData) {
  var data = imageData.data, nSubPixels = data.length, rMin = data[0], rMax = rMin, r2, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b, i;
  var enhanceAmount = this.enhance();
  if (enhanceAmount === 0) {
    return;
  }
  for (i = 0; i < nSubPixels; i += 4) {
    r2 = data[i + 0];
    if (r2 < rMin) {
      rMin = r2;
    } else if (r2 > rMax) {
      rMax = r2;
    }
    g = data[i + 1];
    if (g < gMin) {
      gMin = g;
    } else if (g > gMax) {
      gMax = g;
    }
    b = data[i + 2];
    if (b < bMin) {
      bMin = b;
    } else if (b > bMax) {
      bMax = b;
    }
  }
  if (rMax === rMin) {
    rMax = 255;
    rMin = 0;
  }
  if (gMax === gMin) {
    gMax = 255;
    gMin = 0;
  }
  if (bMax === bMin) {
    bMax = 255;
    bMin = 0;
  }
  var rMid, rGoalMax, rGoalMin, gMid, gGoalMax, gGoalMin, bMid, bGoalMax, bGoalMin;
  if (enhanceAmount > 0) {
    rGoalMax = rMax + enhanceAmount * (255 - rMax);
    rGoalMin = rMin - enhanceAmount * (rMin - 0);
    gGoalMax = gMax + enhanceAmount * (255 - gMax);
    gGoalMin = gMin - enhanceAmount * (gMin - 0);
    bGoalMax = bMax + enhanceAmount * (255 - bMax);
    bGoalMin = bMin - enhanceAmount * (bMin - 0);
  } else {
    rMid = (rMax + rMin) * 0.5;
    rGoalMax = rMax + enhanceAmount * (rMax - rMid);
    rGoalMin = rMin + enhanceAmount * (rMin - rMid);
    gMid = (gMax + gMin) * 0.5;
    gGoalMax = gMax + enhanceAmount * (gMax - gMid);
    gGoalMin = gMin + enhanceAmount * (gMin - gMid);
    bMid = (bMax + bMin) * 0.5;
    bGoalMax = bMax + enhanceAmount * (bMax - bMid);
    bGoalMin = bMin + enhanceAmount * (bMin - bMid);
  }
  for (i = 0; i < nSubPixels; i += 4) {
    data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
    data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
    data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
  }
};
Enhance$1.Enhance = Enhance;
Factory_1$a.Factory.addGetterSetter(Node_1$a.Node, "enhance", 0, Validators_1$a.getNumberValidator(), Factory_1$a.Factory.afterSetFilter);
var Grayscale$1 = {};
Object.defineProperty(Grayscale$1, "__esModule", { value: true });
Grayscale$1.Grayscale = void 0;
var Grayscale = function(imageData) {
  var data = imageData.data, len = data.length, i, brightness;
  for (i = 0; i < len; i += 4) {
    brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
    data[i] = brightness;
    data[i + 1] = brightness;
    data[i + 2] = brightness;
  }
};
Grayscale$1.Grayscale = Grayscale;
var HSL$1 = {};
Object.defineProperty(HSL$1, "__esModule", { value: true });
HSL$1.HSL = void 0;
var Factory_1$9 = Factory;
var Node_1$9 = Node;
var Validators_1$9 = Validators;
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "hue", 0, Validators_1$9.getNumberValidator(), Factory_1$9.Factory.afterSetFilter);
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "saturation", 0, Validators_1$9.getNumberValidator(), Factory_1$9.Factory.afterSetFilter);
Factory_1$9.Factory.addGetterSetter(Node_1$9.Node, "luminance", 0, Validators_1$9.getNumberValidator(), Factory_1$9.Factory.afterSetFilter);
var HSL = function(imageData) {
  var data = imageData.data, nPixels = data.length, v2 = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l2 = this.luminance() * 127, i;
  var vsu = v2 * s * Math.cos(h * Math.PI / 180), vsw = v2 * s * Math.sin(h * Math.PI / 180);
  var rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg2 = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb2 = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  var gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg2 = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb2 = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  var br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg2 = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb2 = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  var r2, g, b, a;
  for (i = 0; i < nPixels; i += 4) {
    r2 = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    data[i + 0] = rr * r2 + rg2 * g + rb2 * b + l2;
    data[i + 1] = gr * r2 + gg2 * g + gb2 * b + l2;
    data[i + 2] = br * r2 + bg2 * g + bb2 * b + l2;
    data[i + 3] = a;
  }
};
HSL$1.HSL = HSL;
var HSV$1 = {};
Object.defineProperty(HSV$1, "__esModule", { value: true });
HSV$1.HSV = void 0;
var Factory_1$8 = Factory;
var Node_1$8 = Node;
var Validators_1$8 = Validators;
var HSV = function(imageData) {
  var data = imageData.data, nPixels = data.length, v2 = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, i;
  var vsu = v2 * s * Math.cos(h * Math.PI / 180), vsw = v2 * s * Math.sin(h * Math.PI / 180);
  var rr = 0.299 * v2 + 0.701 * vsu + 0.167 * vsw, rg2 = 0.587 * v2 - 0.587 * vsu + 0.33 * vsw, rb2 = 0.114 * v2 - 0.114 * vsu - 0.497 * vsw;
  var gr = 0.299 * v2 - 0.299 * vsu - 0.328 * vsw, gg2 = 0.587 * v2 + 0.413 * vsu + 0.035 * vsw, gb2 = 0.114 * v2 - 0.114 * vsu + 0.293 * vsw;
  var br = 0.299 * v2 - 0.3 * vsu + 1.25 * vsw, bg2 = 0.587 * v2 - 0.586 * vsu - 1.05 * vsw, bb2 = 0.114 * v2 + 0.886 * vsu - 0.2 * vsw;
  var r2, g, b, a;
  for (i = 0; i < nPixels; i += 4) {
    r2 = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    a = data[i + 3];
    data[i + 0] = rr * r2 + rg2 * g + rb2 * b;
    data[i + 1] = gr * r2 + gg2 * g + gb2 * b;
    data[i + 2] = br * r2 + bg2 * g + bb2 * b;
    data[i + 3] = a;
  }
};
HSV$1.HSV = HSV;
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "hue", 0, Validators_1$8.getNumberValidator(), Factory_1$8.Factory.afterSetFilter);
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "saturation", 0, Validators_1$8.getNumberValidator(), Factory_1$8.Factory.afterSetFilter);
Factory_1$8.Factory.addGetterSetter(Node_1$8.Node, "value", 0, Validators_1$8.getNumberValidator(), Factory_1$8.Factory.afterSetFilter);
var Invert$1 = {};
Object.defineProperty(Invert$1, "__esModule", { value: true });
Invert$1.Invert = void 0;
var Invert = function(imageData) {
  var data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i + 1];
    data[i + 2] = 255 - data[i + 2];
  }
};
Invert$1.Invert = Invert;
var Kaleidoscope$1 = {};
Object.defineProperty(Kaleidoscope$1, "__esModule", { value: true });
Kaleidoscope$1.Kaleidoscope = void 0;
var Factory_1$7 = Factory;
var Node_1$7 = Node;
var Util_1$1 = Util;
var Validators_1$7 = Validators;
var ToPolar = function(src, dst, opt) {
  var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x2, y2, r2 = 0, g = 0, b = 0, a = 0;
  var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  x2 = xSize - xMid;
  y2 = ySize - yMid;
  rad = Math.sqrt(x2 * x2 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  var rSize = ySize, tSize = xSize, radius, theta;
  var conversion = 360 / tSize * Math.PI / 180, sin, cos;
  for (theta = 0; theta < tSize; theta += 1) {
    sin = Math.sin(theta * conversion);
    cos = Math.cos(theta * conversion);
    for (radius = 0; radius < rSize; radius += 1) {
      x2 = Math.floor(xMid + rMax * radius / rSize * cos);
      y2 = Math.floor(yMid + rMax * radius / rSize * sin);
      i = (y2 * xSize + x2) * 4;
      r2 = srcPixels[i + 0];
      g = srcPixels[i + 1];
      b = srcPixels[i + 2];
      a = srcPixels[i + 3];
      i = (theta + radius * xSize) * 4;
      dstPixels[i + 0] = r2;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
var FromPolar = function(src, dst, opt) {
  var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x2, y2, dx, dy, r2 = 0, g = 0, b = 0, a = 0;
  var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
  x2 = xSize - xMid;
  y2 = ySize - yMid;
  rad = Math.sqrt(x2 * x2 + y2 * y2);
  rMax = rad > rMax ? rad : rMax;
  var rSize = ySize, tSize = xSize, radius, theta, phaseShift = opt.polarRotation || 0;
  var x1, y1;
  for (x2 = 0; x2 < xSize; x2 += 1) {
    for (y2 = 0; y2 < ySize; y2 += 1) {
      dx = x2 - xMid;
      dy = y2 - yMid;
      radius = Math.sqrt(dx * dx + dy * dy) * rSize / rMax;
      theta = (Math.atan2(dy, dx) * 180 / Math.PI + 360 + phaseShift) % 360;
      theta = theta * tSize / 360;
      x1 = Math.floor(theta);
      y1 = Math.floor(radius);
      i = (y1 * xSize + x1) * 4;
      r2 = srcPixels[i + 0];
      g = srcPixels[i + 1];
      b = srcPixels[i + 2];
      a = srcPixels[i + 3];
      i = (y2 * xSize + x2) * 4;
      dstPixels[i + 0] = r2;
      dstPixels[i + 1] = g;
      dstPixels[i + 2] = b;
      dstPixels[i + 3] = a;
    }
  }
};
var Kaleidoscope = function(imageData) {
  var xSize = imageData.width, ySize = imageData.height;
  var x2, y2, xoff, i, r2, g, b, a, srcPos, dstPos;
  var power = Math.round(this.kaleidoscopePower());
  var angle = Math.round(this.kaleidoscopeAngle());
  var offset = Math.floor(xSize * (angle % 360) / 360);
  if (power < 1) {
    return;
  }
  var tempCanvas = Util_1$1.Util.createCanvasElement();
  tempCanvas.width = xSize;
  tempCanvas.height = ySize;
  var scratchData = tempCanvas.getContext("2d").getImageData(0, 0, xSize, ySize);
  ToPolar(imageData, scratchData, {
    polarCenterX: xSize / 2,
    polarCenterY: ySize / 2
  });
  var minSectionSize = xSize / Math.pow(2, power);
  while (minSectionSize <= 8) {
    minSectionSize = minSectionSize * 2;
    power -= 1;
  }
  minSectionSize = Math.ceil(minSectionSize);
  var sectionSize = minSectionSize;
  var xStart = 0, xEnd = sectionSize, xDelta = 1;
  if (offset + minSectionSize > xSize) {
    xStart = sectionSize;
    xEnd = 0;
    xDelta = -1;
  }
  for (y2 = 0; y2 < ySize; y2 += 1) {
    for (x2 = xStart; x2 !== xEnd; x2 += xDelta) {
      xoff = Math.round(x2 + offset) % xSize;
      srcPos = (xSize * y2 + xoff) * 4;
      r2 = scratchData.data[srcPos + 0];
      g = scratchData.data[srcPos + 1];
      b = scratchData.data[srcPos + 2];
      a = scratchData.data[srcPos + 3];
      dstPos = (xSize * y2 + x2) * 4;
      scratchData.data[dstPos + 0] = r2;
      scratchData.data[dstPos + 1] = g;
      scratchData.data[dstPos + 2] = b;
      scratchData.data[dstPos + 3] = a;
    }
  }
  for (y2 = 0; y2 < ySize; y2 += 1) {
    sectionSize = Math.floor(minSectionSize);
    for (i = 0; i < power; i += 1) {
      for (x2 = 0; x2 < sectionSize + 1; x2 += 1) {
        srcPos = (xSize * y2 + x2) * 4;
        r2 = scratchData.data[srcPos + 0];
        g = scratchData.data[srcPos + 1];
        b = scratchData.data[srcPos + 2];
        a = scratchData.data[srcPos + 3];
        dstPos = (xSize * y2 + sectionSize * 2 - x2 - 1) * 4;
        scratchData.data[dstPos + 0] = r2;
        scratchData.data[dstPos + 1] = g;
        scratchData.data[dstPos + 2] = b;
        scratchData.data[dstPos + 3] = a;
      }
      sectionSize *= 2;
    }
  }
  FromPolar(scratchData, imageData, { polarRotation: 0 });
};
Kaleidoscope$1.Kaleidoscope = Kaleidoscope;
Factory_1$7.Factory.addGetterSetter(Node_1$7.Node, "kaleidoscopePower", 2, Validators_1$7.getNumberValidator(), Factory_1$7.Factory.afterSetFilter);
Factory_1$7.Factory.addGetterSetter(Node_1$7.Node, "kaleidoscopeAngle", 0, Validators_1$7.getNumberValidator(), Factory_1$7.Factory.afterSetFilter);
var Mask$1 = {};
Object.defineProperty(Mask$1, "__esModule", { value: true });
Mask$1.Mask = void 0;
var Factory_1$6 = Factory;
var Node_1$6 = Node;
var Validators_1$6 = Validators;
function pixelAt(idata, x2, y2) {
  var idx = (y2 * idata.width + x2) * 4;
  var d = [];
  d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
  return d;
}
function rgbDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2) + Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
  var m = [0, 0, 0];
  for (var i = 0; i < pTab.length; i++) {
    m[0] += pTab[i][0];
    m[1] += pTab[i][1];
    m[2] += pTab[i][2];
  }
  m[0] /= pTab.length;
  m[1] /= pTab.length;
  m[2] /= pTab.length;
  return m;
}
function backgroundMask(idata, threshold) {
  var rgbv_no = pixelAt(idata, 0, 0);
  var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
  var rgbv_so = pixelAt(idata, 0, idata.height - 1);
  var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
  var thres = threshold || 10;
  if (rgbDistance(rgbv_no, rgbv_ne) < thres && rgbDistance(rgbv_ne, rgbv_se) < thres && rgbDistance(rgbv_se, rgbv_so) < thres && rgbDistance(rgbv_so, rgbv_no) < thres) {
    var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
    var mask = [];
    for (var i = 0; i < idata.width * idata.height; i++) {
      var d = rgbDistance(mean, [
        idata.data[i * 4],
        idata.data[i * 4 + 1],
        idata.data[i * 4 + 2]
      ]);
      mask[i] = d < thres ? 0 : 255;
    }
    return mask;
  }
}
function applyMask(idata, mask) {
  for (var i = 0; i < idata.width * idata.height; i++) {
    idata.data[4 * i + 3] = mask[i];
  }
}
function erodeMask(mask, sw, sh2) {
  var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y2 = 0; y2 < sh2; y2++) {
    for (var x2 = 0; x2 < sw; x2++) {
      var so = y2 * sw + x2;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y2 + cy - halfSide;
          var scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a === 255 * 8 ? 255 : 0;
    }
  }
  return maskResult;
}
function dilateMask(mask, sw, sh2) {
  var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y2 = 0; y2 < sh2; y2++) {
    for (var x2 = 0; x2 < sw; x2++) {
      var so = y2 * sw + x2;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y2 + cy - halfSide;
          var scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a >= 255 * 4 ? 255 : 0;
    }
  }
  return maskResult;
}
function smoothEdgeMask(mask, sw, sh2) {
  var weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
  var side = Math.round(Math.sqrt(weights.length));
  var halfSide = Math.floor(side / 2);
  var maskResult = [];
  for (var y2 = 0; y2 < sh2; y2++) {
    for (var x2 = 0; x2 < sw; x2++) {
      var so = y2 * sw + x2;
      var a = 0;
      for (var cy = 0; cy < side; cy++) {
        for (var cx = 0; cx < side; cx++) {
          var scy = y2 + cy - halfSide;
          var scx = x2 + cx - halfSide;
          if (scy >= 0 && scy < sh2 && scx >= 0 && scx < sw) {
            var srcOff = scy * sw + scx;
            var wt = weights[cy * side + cx];
            a += mask[srcOff] * wt;
          }
        }
      }
      maskResult[so] = a;
    }
  }
  return maskResult;
}
var Mask = function(imageData) {
  var threshold = this.threshold(), mask = backgroundMask(imageData, threshold);
  if (mask) {
    mask = erodeMask(mask, imageData.width, imageData.height);
    mask = dilateMask(mask, imageData.width, imageData.height);
    mask = smoothEdgeMask(mask, imageData.width, imageData.height);
    applyMask(imageData, mask);
  }
  return imageData;
};
Mask$1.Mask = Mask;
Factory_1$6.Factory.addGetterSetter(Node_1$6.Node, "threshold", 0, Validators_1$6.getNumberValidator(), Factory_1$6.Factory.afterSetFilter);
var Noise$1 = {};
Object.defineProperty(Noise$1, "__esModule", { value: true });
Noise$1.Noise = void 0;
var Factory_1$5 = Factory;
var Node_1$5 = Node;
var Validators_1$5 = Validators;
var Noise = function(imageData) {
  var amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2, i;
  for (i = 0; i < nPixels; i += 4) {
    data[i + 0] += half - 2 * half * Math.random();
    data[i + 1] += half - 2 * half * Math.random();
    data[i + 2] += half - 2 * half * Math.random();
  }
};
Noise$1.Noise = Noise;
Factory_1$5.Factory.addGetterSetter(Node_1$5.Node, "noise", 0.2, Validators_1$5.getNumberValidator(), Factory_1$5.Factory.afterSetFilter);
var Pixelate$1 = {};
Object.defineProperty(Pixelate$1, "__esModule", { value: true });
Pixelate$1.Pixelate = void 0;
var Factory_1$4 = Factory;
var Util_1 = Util;
var Node_1$4 = Node;
var Validators_1$4 = Validators;
var Pixelate = function(imageData) {
  var pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, x2, y2, i, red, green, blue, alpha, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), xBinStart, xBinEnd, yBinStart, yBinEnd, xBin, yBin, pixelsInBin, data = imageData.data;
  if (pixelSize <= 0) {
    Util_1.Util.error("pixelSize value can not be <= 0");
    return;
  }
  for (xBin = 0; xBin < nBinsX; xBin += 1) {
    for (yBin = 0; yBin < nBinsY; yBin += 1) {
      red = 0;
      green = 0;
      blue = 0;
      alpha = 0;
      xBinStart = xBin * pixelSize;
      xBinEnd = xBinStart + pixelSize;
      yBinStart = yBin * pixelSize;
      yBinEnd = yBinStart + pixelSize;
      pixelsInBin = 0;
      for (x2 = xBinStart; x2 < xBinEnd; x2 += 1) {
        if (x2 >= width) {
          continue;
        }
        for (y2 = yBinStart; y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          i = (width * y2 + x2) * 4;
          red += data[i + 0];
          green += data[i + 1];
          blue += data[i + 2];
          alpha += data[i + 3];
          pixelsInBin += 1;
        }
      }
      red = red / pixelsInBin;
      green = green / pixelsInBin;
      blue = blue / pixelsInBin;
      alpha = alpha / pixelsInBin;
      for (x2 = xBinStart; x2 < xBinEnd; x2 += 1) {
        if (x2 >= width) {
          continue;
        }
        for (y2 = yBinStart; y2 < yBinEnd; y2 += 1) {
          if (y2 >= height) {
            continue;
          }
          i = (width * y2 + x2) * 4;
          data[i + 0] = red;
          data[i + 1] = green;
          data[i + 2] = blue;
          data[i + 3] = alpha;
        }
      }
    }
  }
};
Pixelate$1.Pixelate = Pixelate;
Factory_1$4.Factory.addGetterSetter(Node_1$4.Node, "pixelSize", 8, Validators_1$4.getNumberValidator(), Factory_1$4.Factory.afterSetFilter);
var Posterize$1 = {};
Object.defineProperty(Posterize$1, "__esModule", { value: true });
Posterize$1.Posterize = void 0;
var Factory_1$3 = Factory;
var Node_1$3 = Node;
var Validators_1$3 = Validators;
var Posterize = function(imageData) {
  var levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels, i;
  for (i = 0; i < len; i += 1) {
    data[i] = Math.floor(data[i] / scale) * scale;
  }
};
Posterize$1.Posterize = Posterize;
Factory_1$3.Factory.addGetterSetter(Node_1$3.Node, "levels", 0.5, Validators_1$3.getNumberValidator(), Factory_1$3.Factory.afterSetFilter);
var RGB$1 = {};
Object.defineProperty(RGB$1, "__esModule", { value: true });
RGB$1.RGB = void 0;
var Factory_1$2 = Factory;
var Node_1$2 = Node;
var Validators_1$2 = Validators;
var RGB = function(imageData) {
  var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), i, brightness;
  for (i = 0; i < nPixels; i += 4) {
    brightness = (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
    data[i] = brightness * red;
    data[i + 1] = brightness * green;
    data[i + 2] = brightness * blue;
    data[i + 3] = data[i + 3];
  }
};
RGB$1.RGB = RGB;
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$2.Factory.addGetterSetter(Node_1$2.Node, "blue", 0, Validators_1$2.RGBComponent, Factory_1$2.Factory.afterSetFilter);
var RGBA$1 = {};
Object.defineProperty(RGBA$1, "__esModule", { value: true });
RGBA$1.RGBA = void 0;
var Factory_1$1 = Factory;
var Node_1$1 = Node;
var Validators_1$1 = Validators;
var RGBA = function(imageData) {
  var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha(), i, ia2;
  for (i = 0; i < nPixels; i += 4) {
    ia2 = 1 - alpha;
    data[i] = red * alpha + data[i] * ia2;
    data[i + 1] = green * alpha + data[i + 1] * ia2;
    data[i + 2] = blue * alpha + data[i + 2] * ia2;
  }
};
RGBA$1.RGBA = RGBA;
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "red", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "green", 0, function(val) {
  this._filterUpToDate = false;
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  } else {
    return Math.round(val);
  }
});
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "blue", 0, Validators_1$1.RGBComponent, Factory_1$1.Factory.afterSetFilter);
Factory_1$1.Factory.addGetterSetter(Node_1$1.Node, "alpha", 1, function(val) {
  this._filterUpToDate = false;
  if (val > 1) {
    return 1;
  } else if (val < 0) {
    return 0;
  } else {
    return val;
  }
});
var Sepia$1 = {};
Object.defineProperty(Sepia$1, "__esModule", { value: true });
Sepia$1.Sepia = void 0;
var Sepia = function(imageData) {
  var data = imageData.data, nPixels = data.length, i, r2, g, b;
  for (i = 0; i < nPixels; i += 4) {
    r2 = data[i + 0];
    g = data[i + 1];
    b = data[i + 2];
    data[i + 0] = Math.min(255, r2 * 0.393 + g * 0.769 + b * 0.189);
    data[i + 1] = Math.min(255, r2 * 0.349 + g * 0.686 + b * 0.168);
    data[i + 2] = Math.min(255, r2 * 0.272 + g * 0.534 + b * 0.131);
  }
};
Sepia$1.Sepia = Sepia;
var Solarize$1 = {};
Object.defineProperty(Solarize$1, "__esModule", { value: true });
Solarize$1.Solarize = void 0;
var Solarize = function(imageData) {
  var data = imageData.data, w2 = imageData.width, h = imageData.height, w4 = w2 * 4, y2 = h;
  do {
    var offsetY = (y2 - 1) * w4;
    var x2 = w2;
    do {
      var offset = offsetY + (x2 - 1) * 4;
      var r2 = data[offset];
      var g = data[offset + 1];
      var b = data[offset + 2];
      if (r2 > 127) {
        r2 = 255 - r2;
      }
      if (g > 127) {
        g = 255 - g;
      }
      if (b > 127) {
        b = 255 - b;
      }
      data[offset] = r2;
      data[offset + 1] = g;
      data[offset + 2] = b;
    } while (--x2);
  } while (--y2);
};
Solarize$1.Solarize = Solarize;
var Threshold$1 = {};
Object.defineProperty(Threshold$1, "__esModule", { value: true });
Threshold$1.Threshold = void 0;
var Factory_1 = Factory;
var Node_1 = Node;
var Validators_1 = Validators;
var Threshold = function(imageData) {
  var level = this.threshold() * 255, data = imageData.data, len = data.length, i;
  for (i = 0; i < len; i += 1) {
    data[i] = data[i] < level ? 0 : 255;
  }
};
Threshold$1.Threshold = Threshold;
Factory_1.Factory.addGetterSetter(Node_1.Node, "threshold", 0.5, Validators_1.getNumberValidator(), Factory_1.Factory.afterSetFilter);
Object.defineProperty(_FullInternals, "__esModule", { value: true });
_FullInternals.Konva = void 0;
var _CoreInternals_1 = _CoreInternals;
var Arc_1 = Arc$1;
var Arrow_1 = Arrow$1;
var Circle_1 = Circle$1;
var Ellipse_1 = Ellipse$1;
var Image_1 = Image$1;
var Label_1 = Label$1;
var Line_1 = Line$1;
var Path_1 = Path$1;
var Rect_1 = Rect$1;
var RegularPolygon_1 = RegularPolygon$1;
var Ring_1 = Ring$1;
var Sprite_1 = Sprite$1;
var Star_1 = Star$1;
var Text_1 = Text$1;
var TextPath_1 = TextPath$1;
var Transformer_1 = Transformer$1;
var Wedge_1 = Wedge$1;
var Blur_1 = Blur$1;
var Brighten_1 = Brighten$1;
var Contrast_1 = Contrast$1;
var Emboss_1 = Emboss$1;
var Enhance_1 = Enhance$1;
var Grayscale_1 = Grayscale$1;
var HSL_1 = HSL$1;
var HSV_1 = HSV$1;
var Invert_1 = Invert$1;
var Kaleidoscope_1 = Kaleidoscope$1;
var Mask_1 = Mask$1;
var Noise_1 = Noise$1;
var Pixelate_1 = Pixelate$1;
var Posterize_1 = Posterize$1;
var RGB_1 = RGB$1;
var RGBA_1 = RGBA$1;
var Sepia_1 = Sepia$1;
var Solarize_1 = Solarize$1;
var Threshold_1 = Threshold$1;
_FullInternals.Konva = _CoreInternals_1.Konva.Util._assign(_CoreInternals_1.Konva, {
  Arc: Arc_1.Arc,
  Arrow: Arrow_1.Arrow,
  Circle: Circle_1.Circle,
  Ellipse: Ellipse_1.Ellipse,
  Image: Image_1.Image,
  Label: Label_1.Label,
  Tag: Label_1.Tag,
  Line: Line_1.Line,
  Path: Path_1.Path,
  Rect: Rect_1.Rect,
  RegularPolygon: RegularPolygon_1.RegularPolygon,
  Ring: Ring_1.Ring,
  Sprite: Sprite_1.Sprite,
  Star: Star_1.Star,
  Text: Text_1.Text,
  TextPath: TextPath_1.TextPath,
  Transformer: Transformer_1.Transformer,
  Wedge: Wedge_1.Wedge,
  Filters: {
    Blur: Blur_1.Blur,
    Brighten: Brighten_1.Brighten,
    Contrast: Contrast_1.Contrast,
    Emboss: Emboss_1.Emboss,
    Enhance: Enhance_1.Enhance,
    Grayscale: Grayscale_1.Grayscale,
    HSL: HSL_1.HSL,
    HSV: HSV_1.HSV,
    Invert: Invert_1.Invert,
    Kaleidoscope: Kaleidoscope_1.Kaleidoscope,
    Mask: Mask_1.Mask,
    Noise: Noise_1.Noise,
    Pixelate: Pixelate_1.Pixelate,
    Posterize: Posterize_1.Posterize,
    RGB: RGB_1.RGB,
    RGBA: RGBA_1.RGBA,
    Sepia: Sepia_1.Sepia,
    Solarize: Solarize_1.Solarize,
    Threshold: Threshold_1.Threshold
  }
});
(function(module, exports) {
  var Konva2 = _FullInternals.Konva;
  Konva2._injectGlobal(Konva2);
  exports["default"] = Konva2;
  module.exports = exports["default"];
})(lib, lib.exports);
var Konva = lib.exports;
export { Konva as K, React as R, cuid_1 as a, ReactDOM as b, create as c, react as r };
