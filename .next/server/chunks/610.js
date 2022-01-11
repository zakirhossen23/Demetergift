exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 7645:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ DonateNFTModal; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4336);
/* harmony import */ var react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7140);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5777);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UseFormInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2358);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);








function DonateNFTModal({
  show,
  onHide,
  contract,
  senderAddress,
  type,
  EventID,
  SelectedTitle,
  enddate
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  console.log(contract);
  const [name, nameInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    type: 'text',
    placeholder: 'Enter name'
  });
  const [description, descriptionInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    as: 'textarea',
    placeholder: 'Enter description'
  });
  const [url, urlInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    type: 'text',
    placeholder: 'Enter image url'
  });
  const [NFTLogo, NFTLogoInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    defaultValue: "",
    type: 'file',
    placeholder: 'NFT Logo',
    id: 'logo'
  });
  const [price, priceInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    type: 'text',
    placeholder: 'Enter Price'
  });
  const [NFTaddress, NFTaddressInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    type: 'text',
    placeholder: 'Enter NFT address'
  });
  const [Cryptopunkaddress, CryptopunkaddressInput] = (0,_UseFormInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)({
    type: 'text',
    placeholder: 'Enter Cryptopunk address'
  });

  async function createNFT() {
    let Logourl = url;
    var tokenAddress = NFTaddress;

    if ("Cryptopunk" == type) {
      tokenAddress = Cryptopunkaddress;
    }

    const createdObject = {
      title: 'Asset Metadata',
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: name
        },
        description: {
          type: 'string',
          description: description
        },
        image: {
          type: 'string',
          description: Logourl
        },
        price: {
          type: 'string',
          description: price
        },
        typeimg: {
          type: 'string',
          description: type
        },
        nftaddress: {
          type: 'string',
          description: tokenAddress
        },
        higherbidadd: {
          type: 'string',
          description: ""
        },
        date: {
          type: 'string',
          description: enddate
        }
      },
      bids: []
    };
    console.log(createdObject);
    const result = await contract.claimToken(senderAddress, JSON.stringify(createdObject), EventID);
    router.push(`/donation/auction/${EventID}`);
    console.log(result);
    window.document.getElementsByClassName("btn-close")[0].click();
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default()), {
    show: show,
    onHide: onHide,
    "aria-labelledby": "contained-modal-title-vcenter",
    size: "lg",
    centered: true,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Header), {
      closeButton: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Title), {
        id: "contained-modal-title-vcenter",
        children: ["Donate ", type, " - ", SelectedTitle]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Modal__WEBPACK_IMPORTED_MODULE_2___default().Body), {
      className: "show-grid",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default()), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Name"
          }), nameInput]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupDescription",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Description"
          }), descriptionInput]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupName",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Opening price in ETH"
          }), priceInput]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Enter image URL"
          }), urlInput]
        }), type == "Cryptopunk" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "Cryptopunk address"
          }), CryptopunkaddressInput]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          className: "mb-3",
          controlId: "formGroupImageUrl",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_3___default().Label), {
            children: "NFT address"
          }), NFTaddressInput]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "d-grid",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
            variant: "primary",
            onClick: createNFT,
            children: ["Donate ", type]
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;