"use strict";
(self["webpackChunkwebpack_project_to_do_list"] = self["webpackChunkwebpack_project_to_do_list"] || []).push([["display"],{

/***/ "./src/displaytasks.js":
/*!*****************************!*\
  !*** ./src/displaytasks.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// display the list on the page
const displayTasks = (container) => {
    const allTasks = JSON.parse(localStorage.getItem('todotasks')).map((singletask) => 
      `<li class="onetask">
      <input class="checkbox" type="checkbox">
      <label id="${singletask.index}" class="label">${singletask.description} <i class="fa-solid fa-ellipsis-vertical fa-icon"></i></label></li>`
    ).join('');
  
    container.innerHTML = allTasks;
 };

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/displaytasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCLGtCQUFrQix3QkFBd0I7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC0tdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5dGFza3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZGlzcGxheSB0aGUgbGlzdCBvbiB0aGUgcGFnZVxyXG5jb25zdCBkaXNwbGF5VGFza3MgPSAoY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBhbGxUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG90YXNrcycpKS5tYXAoKHNpbmdsZXRhc2spID0+IFxyXG4gICAgICBgPGxpIGNsYXNzPVwib25ldGFza1wiPlxyXG4gICAgICA8aW5wdXQgY2xhc3M9XCJjaGVja2JveFwiIHR5cGU9XCJjaGVja2JveFwiPlxyXG4gICAgICA8bGFiZWwgaWQ9XCIke3NpbmdsZXRhc2suaW5kZXh9XCIgY2xhc3M9XCJsYWJlbFwiPiR7c2luZ2xldGFzay5kZXNjcmlwdGlvbn0gPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1lbGxpcHNpcy12ZXJ0aWNhbCBmYS1pY29uXCI+PC9pPjwvbGFiZWw+PC9saT5gXHJcbiAgICApLmpvaW4oJycpO1xyXG4gIFxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IGFsbFRhc2tzO1xyXG4gfTtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZGlzcGxheVRhc2tzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==