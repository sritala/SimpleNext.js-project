webpackHotUpdate("static/development/pages/ShowContacts.js",{

/***/ "./src/pages/ShowContacts.tsx":
/*!************************************!*\
  !*** ./src/pages/ShowContacts.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _components_ui_Persons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/Persons */ "./src/components/ui/Persons.tsx");
/* harmony import */ var _components_services_persons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/services/persons */ "./src/components/services/persons.tsx");
var _jsxFileName = "/Users/susanna/Downloads/ContactList/src/pages/ShowContacts.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  form: {
    textAlign: 'center'
  }
}));

function ShowContacts({
  persons
}) {
  const deletePerson = id => {
    _components_services_persons__WEBPACK_IMPORTED_MODULE_4__["default"].remove(id).then(() => {
      const updatedPersons = persons.filter(p => p.id !== id);
      setPersons(updatedPersons);
    });
  };

  const classes = useStyles();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.form,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Your Contacts"), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(List, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h5",
    className: classes.title,
    style: {
      color: "#575757"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "My Contacts")), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(Filter, {
    onChangeHandler: handleSearchName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), __jsx(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: classes.contacts,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    item: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    variant: "h6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx(_components_ui_Persons__WEBPACK_IMPORTED_MODULE_3__["default"], {
    persons: contactsToShow,
    onDelete: deletePerson,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (ShowContacts);

/***/ })

})
//# sourceMappingURL=ShowContacts.js.09a40073b9314b90b129.hot-update.js.map