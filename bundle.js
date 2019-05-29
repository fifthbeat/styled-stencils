var styled = function () {
  'use strict';

  function a(b) {
    function c(a, b, e, i, m) {
      for (var n, o, p = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, M = 0, N = 0, O = e.length, P = O - 1, Q = "", W = "", X = "", _ = "", ba = "", ha = ""; I < O;) {
        if (x = e.charCodeAt(I), I === P && 0 !== s + u + t + p && (0 !== s && (x = 47 === s ? 10 : 47), u = t = p = 0, O++, P++), 0 === s + u + t + p) {
          if (I === P && (0 < J && (W = W.replace(r, "")), 0 < W.trim().length)) {
            switch (x) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break;
              default:
                W += e.charAt(I);
            }
            x = 59
          }
          if (1 === K) switch (x) {
            case 123:
            case 125:
            case 59:
            case 34:
            case 39:
            case 40:
            case 41:
            case 44:
              K = 0;
            case 9:
            case 13:
            case 10:
            case 32:
              break;
            default:
              for (K = 0, N = I, v = x, I--, x = 59; N < O;) switch (e.charCodeAt(N++)) {
                case 10:
                case 13:
                case 59: {
                  ++I, x = v, N = O;
                  break
                }
                case 58:
                  0 < J && (++I, x = v);
                case 123:
                  N = O;
              }
          }
          switch (x) {
            case 123: {
              for (W = W.trim(), v = W.charCodeAt(0), B = 1, N = ++I; I < O;) {
                switch (x = e.charCodeAt(I)) {
                  case 123: {
                    B++;
                    break
                  }
                  case 125: {
                    B--;
                    break
                  }
                  case 47: {
                    switch (w = e.charCodeAt(I + 1)) {
                      case 42:
                      case 47:
                        I = l(w, I, P, e);
                    }
                    break
                  }
                  case 91:
                    x++;
                  case 40:
                    x++;
                  case 34:
                  case 39:
                    for (; I++ < P && e.charCodeAt(I) !== x;);
                }
                if (0 === B) break;
                I++
              }
              switch (X = e.substring(N, I), 0 === v && (v = (W = W.replace(q, "").trim()).charCodeAt(0)), v) {
                case 64: {
                  switch (0 < J && (W = W.replace(r, "")), w = W.charCodeAt(1), w) {
                    case 100:
                    case 109:
                    case 115:
                    case 45: {
                      n = b;
                      break
                    }
                    default:
                      n = $;
                  }
                  if (X = c(b, n, X, w, m + 1), N = X.length, 0 < Z && 0 === N && (N = W.length), 0 < aa && (n = d($, W, M), o = k(3, X, n, b, S, R, N, w, m, i), W = n.join(""), void 0 !== o && 0 === (N = (X = o.trim()).length) && (w = 0, X = "")), 0 < N) switch (w) {
                    case 115:
                      W = W.replace(L, h);
                    case 100:
                    case 109:
                    case 45: {
                      X = W + "{" + X + "}";
                      break
                    }
                    case 107: {
                      W = W.replace(C, "$1 $2" + (0 < da ? ea : "")), X = W + "{" + X + "}", X = 1 === V || 2 === V && g("@" + X, 3) ? "@-webkit-" + X + "@" + X : "@" + X;
                      break
                    }
                    default:
                      X = W + X, 112 === i && (X = (_ += X, ""));
                  } else X = "";
                  break
                }
                default:
                  X = c(b, d(b, W, M), X, i, m + 1);
              }
              ba += X, F = 0, K = 0, H = 0, J = 0, M = 0, G = 0, W = "", X = "", x = e.charCodeAt(++I);
              break
            }
            case 125:
            case 59: {
              if (W = (0 < J ? W.replace(r, "") : W).trim(), 1 < (N = W.length)) switch (0 === H && (v = W.charCodeAt(0), (45 === v || 96 < v && 123 > v) && (N = (W = W.replace(" ", ":")).length)), 0 < aa && void 0 !== (o = k(1, W, b, a, S, R, _.length, i, m, i)) && 0 === (N = (W = o.trim()).length) && (W = "\0\0"), v = W.charCodeAt(0), w = W.charCodeAt(1), v) {
                case 0:
                  break;
                case 64:
                  if (105 === w || 99 === w) {
                    ha += W + e.charAt(I);
                    break
                  }
                  default: {
                    if (58 === W.charCodeAt(N - 1)) break;
                    _ += f(W, v, w, W.charCodeAt(2))
                  }
              }
              F = 0, K = 0, H = 0, J = 0, M = 0, W = "", x = e.charCodeAt(++I);
              break
            }
          }
        }
        switch (x) {
          case 13:
          case 10: {
            if (0 === s + u + t + p + Y) switch (A) {
              case 41:
              case 39:
              case 34:
              case 64:
              case 126:
              case 62:
              case 42:
              case 43:
              case 47:
              case 45:
              case 58:
              case 44:
              case 59:
              case 123:
              case 125:
                break;
              default:
                0 < H && (K = 1);
            }
            47 === s ? s = 0 : 0 === U + F && 107 !== i && 0 < W.length && (J = 1, W += "\0"), 0 < aa * ca && k(0, W, b, a, S, R, _.length, i, m, i), R = 1, S++;
            break
          }
          case 59:
          case 125:
            if (0 === s + u + t + p) {
              R++;
              break
            }
            default: {
              switch (R++, Q = e.charAt(I), x) {
                case 9:
                case 32: {
                  if (0 === u + p + s) switch (y) {
                    case 44:
                    case 58:
                    case 9:
                    case 32: {
                      Q = "";
                      break
                    }
                    default:
                      32 !== x && (Q = " ");
                  }
                  break
                }
                case 0: {
                  Q = "\\0";
                  break
                }
                case 12: {
                  Q = "\\f";
                  break
                }
                case 11: {
                  Q = "\\v";
                  break
                }
                case 38: {
                  0 === u + s + p && 0 < U && (M = 1, J = 1, Q = "\f" + Q);
                  break
                }
                case 108: {
                  if (0 === u + s + p + T && 0 < H) switch (I - H) {
                    case 2:
                      112 === y && 58 === e.charCodeAt(I - 3) && (T = y);
                    case 8:
                      111 === z && (T = z);
                  }
                  break
                }
                case 58: {
                  0 === u + s + p && (H = I);
                  break
                }
                case 44: {
                  0 === s + t + u + p && (J = 1, Q += "\r");
                  break
                }
                case 34:
                case 39: {
                  0 === s && (u = u === x ? 0 : 0 === u ? x : u);
                  break
                }
                case 91: {
                  0 === u + s + t && p++;
                  break
                }
                case 93: {
                  0 === u + s + t && p--;
                  break
                }
                case 41: {
                  0 === u + s + p && t--;
                  break
                }
                case 40: {
                  if (0 === u + s + p) {
                    if (0 === F) switch (2 * y + 3 * z) {
                      case 533:
                        break;
                      default:
                        B = 0, F = 1;
                    }
                    t++
                  }
                  break
                }
                case 64: {
                  0 === s + t + u + p + H + G && (G = 1);
                  break
                }
                case 42:
                case 47: {
                  if (0 < u + p + t) break;
                  switch (s) {
                    case 0: {
                      switch (2 * x + 3 * e.charCodeAt(I + 1)) {
                        case 235: {
                          s = 47;
                          break
                        }
                        case 220: {
                          N = I, s = 42;
                          break
                        }
                      }
                      break
                    }
                    case 42:
                      47 === x && 42 === y && N + 2 !== I && (33 === e.charCodeAt(N + 2) && (_ += e.substring(N, I + 1)), Q = "", s = 0);
                  }
                }
              }
              if (0 === s) {
                if (0 === U + u + p + G && 107 !== i && 59 !== x) switch (x) {
                  case 44:
                  case 126:
                  case 62:
                  case 43:
                  case 41:
                  case 40: {
                    if (0 === F) {
                      switch (y) {
                        case 9:
                        case 32:
                        case 10:
                        case 13: {
                          Q += "\0";
                          break
                        }
                        default:
                          Q = "\0" + Q + (44 === x ? "" : "\0");
                      }
                      J = 1
                    } else switch (x) {
                      case 40: {
                        H + 7 === I && 108 === y && (H = 0), F = ++B;
                        break
                      }
                      case 41: {
                        0 == (F = --B) && (J = 1, Q += "\0");
                        break
                      }
                    }
                    break
                  }
                  case 9:
                  case 32:
                    switch (y) {
                      case 0:
                      case 123:
                      case 125:
                      case 59:
                      case 44:
                      case 12:
                      case 9:
                      case 32:
                      case 10:
                      case 13:
                        break;
                      default:
                        0 === F && (J = 1, Q += "\0");
                    }
                }
                W += Q, 32 !== x && 9 !== x && (A = x)
              }
            }
        }
        z = y, y = x, I++
      }
      if (N = _.length, 0 < Z && 0 === N && 0 === ba.length && !1 == (0 === b[0].length) && (109 !== i || 1 === b.length && (0 < U ? fa : ga) === b[0]) && (N = b.join(",").length + 2), 0 < N) {
        if (n = 0 === U && 107 !== i ? j(b) : b, 0 < aa && (o = k(2, _, n, a, S, R, N, i, m, i), void 0 !== o && 0 === (_ = o).length)) return ha + _ + ba;
        if (_ = n.join(",") + "{" + _ + "}", 0 != V * T) {
          switch (2 !== V || g(_, 2) || (T = 0), T) {
            case 111: {
              _ = _.replace(E, ":-moz-$1") + _;
              break
            }
            case 112: {
              _ = _.replace(D, "::-webkit-input-$1") + _.replace(D, "::-moz-$1") + _.replace(D, ":-ms-input-$1") + _;
              break
            }
          }
          T = 0
        }
      }
      return ha + _ + ba
    }

    function d(a, b, c) {
      var d = b.trim().split(y),
        f = d,
        g = d.length,
        h = a.length;
      switch (h) {
        case 0:
        case 1: {
          for (var l = 0, m = 0 === h ? "" : a[0] + " "; l < g; ++l) f[l] = e(m, f[l], c, h).trim();
          break
        }
        default:
          for (var l = 0, n = 0, f = []; l < g; ++l)
            for (var o = 0; o < h; ++o) f[n++] = e(a[o] + " ", d[l], c, h).trim();
      }
      return f
    }

    function e(a, b, c, d) {
      var e = b,
        f = e.charCodeAt(0);
      switch (33 > f && (f = (e = e.trim()).charCodeAt(0)), f) {
        case 38: {
          switch (U + d) {
            case 0:
            case 1:
              if (0 === a.trim().length) break;
            default:
              return e.replace(z, "$1" + a.trim());
          }
          break
        }
        case 58:
          switch (e.charCodeAt(1)) {
            case 103: {
              if (0 < W && 0 < U) return e.replace(A, "$1").replace(z, "$1" + ga);
              break
            }
            default:
              return a.trim() + e.replace(z, "$1" + a.trim());
          }
          default:
            if (0 < c * U && 0 < e.indexOf("\f")) return e.replace(z, (58 === a.charCodeAt(0) ? "" : "$1") + a.trim());
      }
      return a + e
    }

    function f(a, b, c, d) {
      var e, h = 0,
        j = a + ";",
        k = 2 * b + 3 * c + 4 * d;
      if (944 === k) return i(j);
      if (0 === V || 2 === V && !g(j, 1)) return j;
      switch (k) {
        case 1015:
          return 97 === j.charCodeAt(10) ? "-webkit-" + j + j : j;
        case 951:
          return 116 === j.charCodeAt(3) ? "-webkit-" + j + j : j;
        case 963:
          return 110 === j.charCodeAt(5) ? "-webkit-" + j + j : j;
        case 1009:
          if (100 !== j.charCodeAt(4)) break;
        case 969:
        case 942:
          return "-webkit-" + j + j;
        case 978:
          return "-webkit-" + j + "-moz-" + j + j;
        case 1019:
        case 983:
          return "-webkit-" + j + "-moz-" + j + "-ms-" + j + j;
        case 883:
          return 45 === j.charCodeAt(8) ? "-webkit-" + j + j : 0 < j.indexOf("image-set(", 11) ? j.replace(Q, "$1-webkit-$2") + j : j;
        case 932: {
          if (45 === j.charCodeAt(4)) switch (j.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + j.replace("-grow", "") + "-webkit-" + j + "-ms-" + j.replace("grow", "positive") + j;
            case 115:
              return "-webkit-" + j + "-ms-" + j.replace("shrink", "negative") + j;
            case 98:
              return "-webkit-" + j + "-ms-" + j.replace("basis", "preferred-size") + j;
          }
          return "-webkit-" + j + "-ms-" + j + j
        }
        case 964:
          return "-webkit-" + j + "-ms-flex-" + j + j;
        case 1023: {
          if (99 !== j.charCodeAt(8)) break;
          return e = j.substring(j.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + e + "-webkit-" + j + "-ms-flex-pack" + e + j
        }
        case 1005:
          return t.test(j) ? j.replace(s, ":-webkit-") + j.replace(s, ":-moz-") + j : j;
        case 1e3: {
          switch (e = j.substring(13).trim(), h = e.indexOf("-") + 1, e.charCodeAt(0) + e.charCodeAt(h)) {
            case 226: {
              e = j.replace(K, "tb");
              break
            }
            case 232: {
              e = j.replace(K, "tb-rl");
              break
            }
            case 220: {
              e = j.replace(K, "lr");
              break
            }
            default:
              return j;
          }
          return "-webkit-" + j + "-ms-" + e + j
        }
        case 1017:
          if (-1 === j.indexOf("sticky", 9)) return j;
        case 975: {
          switch (h = (j = a).length - 10, e = (33 === j.charCodeAt(h) ? j.substring(0, h) : j).substring(a.indexOf(":", 7) + 1).trim(), k = e.charCodeAt(0) + (0 | e.charCodeAt(7))) {
            case 203:
              if (111 > e.charCodeAt(8)) break;
            case 115: {
              j = j.replace(e, "-webkit-" + e) + ";" + j;
              break
            }
            case 207:
            case 102:
              j = j.replace(e, "-webkit-" + (102 < k ? "inline-" : "") + "box") + ";" + j.replace(e, "-webkit-" + e) + ";" + j.replace(e, "-ms-" + e + "box") + ";" + j;
          }
          return j + ";"
        }
        case 938: {
          if (45 === j.charCodeAt(5)) switch (j.charCodeAt(6)) {
            case 105:
              return e = j.replace("-items", ""), "-webkit-" + j + "-webkit-box-" + e + "-ms-flex-" + e + j;
            case 115:
              return "-webkit-" + j + "-ms-flex-item-" + j.replace(N, "") + j;
            default:
              return "-webkit-" + j + "-ms-flex-line-pack" + j.replace("align-content", "").replace(N, "") + j;
          }
          break
        }
        case 973:
        case 989:
          if (45 !== j.charCodeAt(3) || 122 === j.charCodeAt(4)) break;
        case 931:
        case 953: {
          if (!0 === P.test(a)) return 115 === (e = a.substring(a.indexOf(":") + 1)).charCodeAt(0) ? f(a.replace("stretch", "fill-available"), b, c, d).replace(":fill-available", ":stretch") : j.replace(e, "-webkit-" + e) + j.replace(e, "-moz-" + e.replace("fill-", "")) + j;
          break
        }
        case 962: {
          if (j = "-webkit-" + j + (102 === j.charCodeAt(5) ? "-ms-" + j : "") + j, 211 === c + d && 105 === j.charCodeAt(13) && 0 < j.indexOf("transform", 10)) return j.substring(0, j.indexOf(";", 27) + 1).replace(u, "$1-webkit-$2") + j;
          break
        }
      }
      return j
    }

    function g(a, b) {
      var c = a.indexOf(1 === b ? ":" : "{"),
        d = a.substring(0, 3 === b ? 10 : c),
        e = a.substring(c + 1, a.length - 1);
      return ba(2 === b ? d.replace(O, "$1") : d, e, b)
    }

    function h(a, b) {
      var c = f(b, b.charCodeAt(0), b.charCodeAt(1), b.charCodeAt(2));
      return c === b + ";" ? "(" + b + ")" : c.replace(M, " or ($1)").substring(4)
    }

    function i(a) {
      var b = a.length,
        c = a.indexOf(":", 9) + 1,
        d = a.substring(0, c).trim(),
        e = a.substring(c, b - 1).trim();
      switch (a.charCodeAt(9) * da) {
        case 0:
          break;
        case 45:
          if (110 !== a.charCodeAt(10)) break;
        default:
          for (var f = e.split((e = "", v)), h = 0, c = 0, b = f.length; h < b; c = 0, ++h) {
            for (var j, k = f[h], l = k.split(w); k = l[c];) {
              if (j = k.charCodeAt(0), 1 === da && (64 < j && 90 > j || 96 < j && 123 > j || 95 === j || 45 === j && 45 !== k.charCodeAt(1))) switch (isNaN(parseFloat(k)) + (-1 !== k.indexOf("("))) {
                case 1:
                  switch (k) {
                    case "infinite":
                    case "alternate":
                    case "backwards":
                    case "running":
                    case "normal":
                    case "forwards":
                    case "both":
                    case "none":
                    case "linear":
                    case "ease":
                    case "ease-in":
                    case "ease-out":
                    case "ease-in-out":
                    case "paused":
                    case "reverse":
                    case "alternate-reverse":
                    case "inherit":
                    case "initial":
                    case "unset":
                    case "step-start":
                    case "step-end":
                      break;
                    default:
                      k += ea;
                  }
              }
              l[c++] = k
            }
            e += (0 == h ? "" : ",") + l.join(" ")
          }
      }
      return e = d + e + ";", 1 === V || 2 === V && g(e, 1) ? "-webkit-" + e + e : e
    }

    function j(a) {
      for (var b, c, d = 0, e = a.length, f = Array(e); d < e; ++d) {
        for (var g = a[d].split(x), h = "", k = 0, m = 0, n = 0, o = 0, p = g.length; k < p; ++k)
          if (!(0 === (m = (c = g[k]).length) && 1 < p)) {
            if (n = h.charCodeAt(h.length - 1), o = c.charCodeAt(0), b = "", 0 != k) switch (n) {
              case 42:
              case 126:
              case 62:
              case 43:
              case 32:
              case 40:
                break;
              default:
                b = " ";
            }
            switch (o) {
              case 38:
                c = b + fa;
              case 126:
              case 62:
              case 43:
              case 32:
              case 41:
              case 40:
                break;
              case 91: {
                c = b + c + fa;
                break
              }
              case 58: {
                switch (2 * c.charCodeAt(1) + 3 * c.charCodeAt(2)) {
                  case 530:
                    if (0 < W) {
                      c = b + c.substring(8, m - 1);
                      break
                    }
                    default:
                      (1 > k || 1 > g[k - 1].length) && (c = b + fa + c);
                }
                break
              }
              case 44:
                b = "";
              default:
                c = 1 < m && 0 < c.indexOf(":") ? b + c.replace(J, "$1" + fa + "$2") : b + c + fa;
            }
            h += c
          } f[d] = h.replace(r, "").trim()
      }
      return f
    }

    function k(a, b, c, d, e, f, g, h, j, k) {
      for (var l, m = 0, n = b; m < aa; ++m) switch (l = _[m].call(p, a, n, c, d, e, f, g, h, j, k)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          n = l;
      }
      if (n !== b) return n
    }

    function l(a, b, c, d) {
      for (var e = b + 1; e < c; ++e) switch (d.charCodeAt(e)) {
        case 47: {
          if (42 === a && 42 === d.charCodeAt(e - 1) && b + 2 !== e) return e + 1;
          break
        }
        case 10:
          if (47 === a) return e + 1;
      }
      return e
    }

    function m(a) {
      return a.replace(r, "").replace(F, "").replace(G, "$1").replace(H, "$1").replace(I, " ")
    }

    function n(a) {
      switch (a) {
        case void 0:
        case null: {
          aa = _.length = 0;
          break
        }
        default:
          if ("function" == typeof a) _[aa++] = a;
          else if ("object" == typeof a)
            for (var b = 0, c = a.length; b < c; ++b) n(a[b]);
          else ca = 0 | !!a;
      }
      return n
    }

    function o(a) {
      for (var b in a) {
        var c = a[b];
        "keyframe" == b ? da = 0 | c : "global" == b ? W = 0 | c : "cascade" == b ? U = 0 | c : "compress" == b ? X = 0 | c : "semicolon" == b ? Y = 0 | c : "preserve" == b ? Z = 0 | c : "prefix" == b ? (ba = null, c ? "function" == typeof c ? (V = 2, ba = c) : V = 1 : V = 0) : void 0
      }
      return o
    }

    function p(b, d) {
      if (void 0 !== this && this.constructor === p) return a(b);
      var e = b,
        f = e.charCodeAt(0);
      33 > f && (f = (e = e.trim()).charCodeAt(0)), 0 < da && (ea = e.replace(B, 91 === f ? "" : "-")), f = 1, 1 == U ? ga = e : fa = e;
      var g, h = [ga];
      0 < aa && (g = k(-1, d, h, h, S, R, 0, 0, 0, 0), void 0 !== g && "string" == typeof g && (d = g));
      var i = c($, h, d, 0, 0);
      return 0 < aa && (g = k(-2, i, h, h, S, R, i.length, 0, 0, 0), void 0 !== g && "string" != typeof (i = g) && (f = 0)), ea = "", ga = "", fa = "", T = 0, S = 1, R = 1, 0 == X * f ? i : m(i)
    }
    var q = /^\0+/g,
      r = /[\0\r\f]/g,
      s = /: */g,
      t = /zoo|gra/,
      u = /([,: ])(transform)/g,
      v = /,+\s*(?![^(]*[)])/g,
      w = / +\s*(?![^(]*[)])/g,
      x = / *[\0] */g,
      y = /,\r+?/g,
      z = /([\t\r\n ])*\f?&/g,
      A = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
      B = /\W+/g,
      C = /@(k\w+)\s*(\S*)\s*/,
      D = /::(place)/g,
      E = /:(read-only)/g,
      F = /\s+(?=[{\];=:>])/g,
      G = /([[}=:>])\s+/g,
      H = /(\{[^{]+?);(?=\})/g,
      I = /\s{2,}/g,
      J = /([^\(])(:+) */g,
      K = /[svh]\w+-[tblr]{2}/,
      L = /\(\s*(.*)\s*\)/g,
      M = /([\s\S]*?);/g,
      N = /-self|flex-/g,
      O = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      P = /stretch|:\s*\w+\-(?:conte|avail)/,
      Q = /([^-])(image-set\()/,
      R = 1,
      S = 1,
      T = 0,
      U = 1,
      V = 1,
      W = 1,
      X = 0,
      Y = 0,
      Z = 0,
      $ = [],
      _ = [],
      aa = 0,
      ba = null,
      ca = 0,
      da = 1,
      ea = "",
      fa = "",
      ga = "";
    return p.use = n, p.set = o, void 0 !== b && o(b), p
  }

  function b(a) {
    for (var b, c = 0 | a.length, d = 0 | c, e = 0; 4 <= c;) b = 255 & a.charCodeAt(e) | (255 & a.charCodeAt(++e)) << 8 | (255 & a.charCodeAt(++e)) << 16 | (255 & a.charCodeAt(++e)) << 24, b = 1540483477 * (65535 & b) + ((65535 & 1540483477 * (b >>> 16)) << 16), b ^= b >>> 24, b = 1540483477 * (65535 & b) + ((65535 & 1540483477 * (b >>> 16)) << 16), d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16) ^ b, c -= 4, ++e;
    switch (c) {
      case 3:
        d ^= (255 & a.charCodeAt(e + 2)) << 16;
      case 2:
        d ^= (255 & a.charCodeAt(e + 1)) << 8;
      case 1:
        d ^= 255 & a.charCodeAt(e), d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16);
    }
    return d ^= d >>> 13, d = 1540483477 * (65535 & d) + ((65535 & 1540483477 * (d >>> 16)) << 16), d ^= d >>> 15, d >>> 0
  }
  var c = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
  const d = new a({
      global: !1,
      cascade: !0,
      keyframe: !1,
      prefix: !0,
      compress: !1,
      semicolon: !1
    }),
    e = document.createElement("style");
  document.head.appendChild(e);
  const f = (a, b, c = {}, f) => {
      for (const d of Object.keys(c || {})) {
        const a = d.replace(/-([a-z])/g, a => a[1].toUpperCase());
        c[a] = c[d]
      }
      c || (c = {});
      const g = b.reduce((a, b, d) => a + b + (f[d] && "function" == typeof f[d] ? f[d](c) : f[d] || ""), ""),
        h = d(a, g);
      e.innerHTML += h
    },
    g = 52,
    i = a => String.fromCharCode(a + (25 < a ? 39 : 97)),
    j = a => {
      let b, c = "";
      for (b = a; b > g; b = Math.floor(b / g)) c = i(b % g) + c;
      return i(b % g) + c
    },
  let h = 0;
  var l = a => (c, ...d) => (e, g) => {
    h++;
    const i = "sc-" + j(b("sc" + h));
    return f(`.${i}`, c, e, d), k(a, {
      class: i,
      ref: e && e.ref
    }, g)
  };
  const m = {};
  for (const b of c) m[b] = l(b);
  return m
}();