/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Director: () => (/* binding */ Director),
/* harmony export */   Teacher: () => (/* binding */ Teacher),
/* harmony export */   createEmployee: () => (/* binding */ createEmployee),
/* harmony export */   executeWork: () => (/* binding */ executeWork),
/* harmony export */   isDirector: () => (/* binding */ isDirector),
/* harmony export */   teachClass: () => (/* binding */ teachClass)
/* harmony export */ });
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());

var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'Cannot work from home'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workTeacherTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());

var createEmployee = function (salary) { return Number(salary) < 500 ? new Teacher() : new Director(); };
function isDirector(employee) {
    return employee.workDirectorTasks !== undefined;
}
function executeWork(employee) {
    var res = undefined;
    (isDirector(employee)) ? res = employee.workDirectorTasks() : res = employee.workTeacherTasks();
    return res;
}
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else if (todayClass === "History") {
        return "Teaching History";
    }
}
console.log(teachClass("Math"));
console.log(teachClass("History"));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNNRTtJQUFBO1FBQ0UsaUJBQVksR0FBRyxjQUFNLDBCQUFtQixFQUFuQixDQUFtQixDQUFDO1FBQ3pDLG1CQUFjLEdBQUcsY0FBTSwrQkFBd0IsRUFBeEIsQ0FBd0IsQ0FBQztRQUNoRCxzQkFBaUIsR0FBRyxjQUFNLGtDQUEyQixFQUEzQixDQUEyQixDQUFDO0lBQ3hELENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FBQzs7QUFFRDtJQUFBO1FBQ0UsaUJBQVksR0FBRyxjQUFNLDhCQUF1QixFQUF2QixDQUF1QixDQUFDO1FBQzdDLG1CQUFjLEdBQUcsY0FBTSw0QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxjQUFNLHdCQUFpQixFQUFqQixDQUFpQixDQUFDO0lBQzdDLENBQUM7SUFBRCxjQUFDO0FBQUQsQ0FBQzs7QUFFTSxJQUFNLGNBQWMsR0FBRyxVQUFDLE1BQXVCLElBQXlCLGFBQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFLEVBQXJELENBQXFEO0FBRTdILFNBQVMsVUFBVSxDQUFDLFFBQThDO0lBQ3ZFLE9BQVEsUUFBcUIsQ0FBQyxpQkFBaUIsS0FBSyxTQUFTLENBQUM7QUFDaEUsQ0FBQztBQUVNLFNBQVMsV0FBVyxDQUFDLFFBQThDO0lBQ3hFLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQztJQUNwQixDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNoRyxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUM7QUFHTSxTQUFTLFVBQVUsQ0FBQyxVQUFvQjtJQUM3QyxJQUFJLFVBQVUsS0FBSyxNQUFNLEVBQUUsQ0FBQztRQUMxQixPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO1NBQU0sSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFLENBQUM7UUFDcEMsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0FBQ0gsQ0FBQztBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbnRlcmZhY2UgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtEaXJlY3RvclRhc2tzKCk6IHN0cmluZztcbiAgfVxuICBcbiAgaW50ZXJmYWNlIFRlYWNoZXJJbnRlcmZhY2Uge1xuICAgIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmc7XG4gICAgZ2V0Q29mZmVlQnJlYWsoKTogc3RyaW5nO1xuICAgIHdvcmtUZWFjaGVyVGFza3MoKTogc3RyaW5nO1xuICB9XG4gIFxuICBleHBvcnQgY2xhc3MgRGlyZWN0b3IgaW1wbGVtZW50cyBEaXJlY3RvckludGVyZmFjZSB7XG4gICAgd29ya0Zyb21Ib21lID0gKCkgPT4gJ1dvcmtpbmcgZnJvbSBob21lJztcbiAgICBnZXRDb2ZmZWVCcmVhayA9ICgpID0+ICdHZXR0aW5nIGEgY29mZmVlIGJyZWFrJztcbiAgICB3b3JrRGlyZWN0b3JUYXNrcyA9ICgpID0+ICdHZXR0aW5nIHRvIGRpcmVjdG9yIHRhc2tzJztcbiAgfVxuICBcbiAgZXhwb3J0IGNsYXNzIFRlYWNoZXIgaW1wbGVtZW50cyBUZWFjaGVySW50ZXJmYWNlIHtcbiAgICB3b3JrRnJvbUhvbWUgPSAoKSA9PiAnQ2Fubm90IHdvcmsgZnJvbSBob21lJztcbiAgICBnZXRDb2ZmZWVCcmVhayA9ICgpID0+ICdDYW5ub3QgaGF2ZSBhIGJyZWFrJztcbiAgICB3b3JrVGVhY2hlclRhc2tzID0gKCkgPT4gJ0dldHRpbmcgdG8gd29yayc7XG4gIH1cbiAgXG4gIGV4cG9ydCBjb25zdCBjcmVhdGVFbXBsb3llZSA9IChzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IFRlYWNoZXIgfCBEaXJlY3RvciA9PiBOdW1iZXIoc2FsYXJ5KSA8IDUwMCA/IG5ldyBUZWFjaGVyKCkgOiBuZXcgRGlyZWN0b3IoKVxuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIGlzRGlyZWN0b3IoZW1wbG95ZWU6IFRlYWNoZXJJbnRlcmZhY2UgfCBEaXJlY3RvckludGVyZmFjZSk6IGVtcGxveWVlIGlzIERpcmVjdG9yIHtcbiAgICByZXR1cm4gKGVtcGxveWVlIGFzIERpcmVjdG9yKS53b3JrRGlyZWN0b3JUYXNrcyAhPT0gdW5kZWZpbmVkO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZXhlY3V0ZVdvcmsoZW1wbG95ZWU6IERpcmVjdG9ySW50ZXJmYWNlIHwgVGVhY2hlckludGVyZmFjZSk6IHN0cmluZyB7XG4gICAgbGV0IHJlcyA9IHVuZGVmaW5lZDtcbiAgICAoaXNEaXJlY3RvcihlbXBsb3llZSkpID8gcmVzID0gZW1wbG95ZWUud29ya0RpcmVjdG9yVGFza3MoKSA6IHJlcyA9IGVtcGxveWVlLndvcmtUZWFjaGVyVGFza3MoKTtcbiAgICByZXR1cm4gcmVzO1xuICB9XG4gIHR5cGUgU3ViamVjdHMgPSBcIk1hdGhcIiB8IFwiSGlzdG9yeVwiO1xuICBcbiAgZXhwb3J0IGZ1bmN0aW9uIHRlYWNoQ2xhc3ModG9kYXlDbGFzczogU3ViamVjdHMpOiBzdHJpbmcge1xuICAgIGlmICh0b2RheUNsYXNzID09PSBcIk1hdGhcIikge1xuICAgICAgcmV0dXJuIFwiVGVhY2hpbmcgTWF0aFwiO1xuICAgIH0gZWxzZSBpZiAodG9kYXlDbGFzcyA9PT0gXCJIaXN0b3J5XCIpIHtcbiAgICAgIHJldHVybiBcIlRlYWNoaW5nIEhpc3RvcnlcIjtcbiAgICB9XG4gIH1cbiAgXG4gIGNvbnNvbGUubG9nKHRlYWNoQ2xhc3MoXCJNYXRoXCIpKTtcbiAgY29uc29sZS5sb2codGVhY2hDbGFzcyhcIkhpc3RvcnlcIikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9