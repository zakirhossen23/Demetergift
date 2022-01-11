(function() {
var exports = {};
exports.id = 966;
exports.ids = [966];
exports.modules = {

/***/ 9529:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
  const {
    method
  } = req;

  switch (method) {
    case 'GET':
      const code = req.query.code;
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://polis.metis.io/api/v1/oauth2/access_token?app_id=${process.env.APP_ID}&app_key=${process.env.APP_SECRET}&code=${code}`);
      res.send(data);
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9529));
module.exports = __webpack_exports__;

})();