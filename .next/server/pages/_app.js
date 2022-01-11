(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6060:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ App; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@metis.io/middleware-client"
var middleware_client_ = __webpack_require__(2895);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-bootstrap/Container"
var Container_namespaceObject = require("react-bootstrap/Container");;
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Nav"
var Nav_namespaceObject = require("react-bootstrap/Nav");;
var Nav_default = /*#__PURE__*/__webpack_require__.n(Nav_namespaceObject);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
var Navbar_namespaceObject = require("react-bootstrap/Navbar");;
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap/Button"
var Button_ = __webpack_require__(5777);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
;// CONCATENATED MODULE: ./components/variables/Events.tsx
var EndDateTime = "2022-01-04T02:34";
var EventTitle;
var EventDescription;
function setter(date) {
  EndDateTime = date;
  console.log("Got - >" + EndDateTime);
}
const EVENT = {
  EndDateTime: EndDateTime,
  EventTitle: EventTitle,
  EventDescription: EventDescription
};
var s;
let expired;
;// CONCATENATED MODULE: ./components/Header.tsx












function Header({
  user
}) {
  const router = (0,router_.useRouter)();
  const {
    pathname
  } = (0,router_.useRouter)();
  const {
    id
  } = router.query;
  var c = new Date(EVENT.EndDateTime).getTime();
  const timer = setInterval(function () {
    var n = new Date().getTime();
    var d = c - n;
    var da = Math.floor(d / (1000 * 60 * 60 * 24));
    var h = Math.floor(d % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    var m = Math.floor(d % (1000 * 60 * 60) / (1000 * 60));
    var s = Math.floor(d % (1000 * 60) / 1000);

    try {
      if (document.getElementById("LeftDate") !== null) document.getElementById("LeftDate").innerHTML = da.toString() + " days " + h.toString() + " hours " + m.toString() + " minutes " + s.toString() + " seconds";
    } catch {}
  }, 1000);

  async function web3Connect() {
    window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{
          chainId: '0x24C'
        }]
      });
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x24C',
              chainName: 'Metis Stardust Testnet',
              nativeCurrency: {
                name: 'Metis',
                symbol: 'tMETIS',
                decimals: 18
              },
              rpcUrls: ['https://stardust.metis.io/?owner=588']
            }]
          });
        } catch (addError) {
          // handle "add" error
          console.log(addError);
        }
      } // handle other "switch" errors

    }
  }

  async function login() {
    let oauth2Client = new middleware_client_.Oauth2Client();
    oauth2Client.startOauth2("61d0c1154fbb4f000dd11c6d" || 0, `${"http://metisgift.com"}${pathname}`);
  }

  function donation() {
    router_default().push("/donation");
  }

  function StartEvent() {
    router_default().push("/CreateEvents");
  }

  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: "mb-5",
    children: /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()), {
      className: "py-4",
      bg: "#74B370",
      expand: "lg",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Container_default()), {
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
              className: "NavImg",
              src: "/Logo1.svg"
            }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Brand, {
              children: "MetisGift"
            })]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Toggle, {
          "aria-controls": "basic-navbar-nav"
        }), /*#__PURE__*/jsx_runtime_.jsx((Navbar_default()).Collapse, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((Nav_default()), {
            children: [/*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Item, {
              className: "px-2",
              children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                onClick: donation,
                variant: "secondary",
                children: "Donate"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx((Nav_default()).Item, {
              className: "px-2",
              children: /*#__PURE__*/jsx_runtime_.jsx((Button_default()), {
                onClick: StartEvent,
                variant: "secondary",
                children: "Start Event"
              })
            })]
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/Layout.tsx





function Layout({
  user,
  children
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header, {
      user: user
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "mb-5",
      children: children
    })]
  });
}
;// CONCATENATED MODULE: ./pages/_app.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function App({
  Component,
  pageProps
}) {
  const {
    query
  } = (0,router_.useRouter)();
  const {
    0: httpClient,
    1: setHttpClient
  } = (0,external_react_.useState)();
  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(null);
  (0,external_react_.useEffect)(() => {
    const fetchData = async () => {
      let accessToken;
      let refreshToken;
      let expiresIn;

      try {
        if (!query.code) {
          console.log('error code');
          return;
        }

        const res = await external_axios_default().get(`${"http://metisgift.com"}/api/metis?code=${query.code}`);
        console.log(res);

        if (res.status === 200 && res.data && res.data.code === 200) {
          accessToken = res.data.data.access_token;
          refreshToken = res.data.data.refresh_token;
          expiresIn = res.data.data.expires_in;
          const httpClient = new middleware_client_.HttpClient("61d0c1154fbb4f000dd11c6d" || 0, accessToken, refreshToken, expiresIn);
          setHttpClient(httpClient);
          const oauth2Client = new middleware_client_.Oauth2Client();
          setUser(await oauth2Client.getUserInfoAsync(accessToken));
        } else if (res.status === 200 && res.data) {
          console.log(res.data.msg);
        } else {
          console.log('code error');
          console.log(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query.code]);
  return /*#__PURE__*/jsx_runtime_.jsx(Layout, {
    user: user,
    children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({
      httpClient: httpClient,
      user: user
    }, pageProps))
  });
}

/***/ }),

/***/ 2895:
/***/ (function(module) {

"use strict";
module.exports = require("@metis.io/middleware-client");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5777:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap/Button");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(6060); });
module.exports = __webpack_exports__;

})();