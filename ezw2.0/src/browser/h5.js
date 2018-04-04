export default {
  name: "h5",
  base:true,
  isBrowser() {
    return true
  },
  API: {
    start () {
      alert("start--------h5拍")
    },
    headerColor(obj){

    },
    FormatDate(time,format){
      var t = new Date(time);
      var tf = function(i) {
        return (i < 10 ? "0" :"") + i;
      };
      return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
          case "yyyy":
            return tf(t.getFullYear());
            break;

          case "MM":
            return tf(t.getMonth() + 1);
            break;

          case "mm":
            return tf(t.getMinutes());
            break;

          case "dd":
            return tf(t.getDate());
            break;

          case "HH":
            return tf(t.getHours());
            break;

          case "ss":
            return tf(t.getSeconds());
            break;
        }
      });
    },
    responseFun(name) {
      if(name){
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var path = decodeURI(window.location.href);
        var r = path.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
      }else{
        return window.location.href;
      }
    },
    setParameter (name, json) {
      localStorage.setItem(name, JSON.stringify(json));
    },
    getParameter (name) {
      if (localStorage.getItem(name)) {
        var json = localStorage.getItem(name);
        return JSON.parse(json);
      } else {
        return null;
      }
    },
    huanChong(a, b, time, type, centerFun, backFun) {
      if(t)  clearInterval(t)
      a = parseInt(a);
      b = parseInt(b);
      var zheng = true;
      if (a < b) {
        zheng = true;
      } else if (a > b) {
        zheng = false;
      } else {
        return;
      }
      var t;
      var pl = 5;
      var cs = Math.ceil(time / pl);
      var an = (b - a) * 2 / cs - 1;
      var d = (an - 1) / (cs - 1);
      if (type == "yunsu") {
        var vv = Math.abs(a - b) / cs;
        t = setInterval(function() {
          if (zheng) {
            a += vv;
          } else {
            a -= vv;
          }
          if (zheng && Math.ceil(a) >= b) {
            a = b;
            clearInterval(t);
            if (backFun) {
              backFun(Math.ceil(a));
            }
          }
          if (!zheng && Math.ceil(a) <= b) {
            a = b;
            clearInterval(t);
            if (backFun) {
              backFun(Math.ceil(a));
            }
          }
          centerFun(Math.ceil(a));
        }, pl);
        return t;
      } else {
        if (type == "jiansu") {
          var ak = an;
        } else {
          var ak = 1;
        }
        t = setInterval(function() {
          a += ak;
          if (type == "jiansu") {
            ak -= d;
          } else {
            ak += d;
          }
          if (zheng && Math.ceil(a) >= b) {
            a = b;
            clearInterval(t);
            if (backFun) {
              backFun(Math.ceil(a));
            }
          }
          if (!zheng && Math.ceil(a) <= b) {
            a = b;
            clearInterval(t);
            if (backFun) {
              backFun(Math.ceil(a));
            }
          }
          centerFun(Math.ceil(a));
        }, pl);
        return t;
      }
    }

}
}
