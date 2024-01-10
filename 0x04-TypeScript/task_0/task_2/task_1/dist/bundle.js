/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
var printTeacher = function (firstName, lastName) { return "".concat(firstName.charAt(0), ".").concat(lastName); };
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName;
        this.lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
var student = new StudentClass("Djo", "djo");
console.log(student.displayName());
console.log(student.workOnHomework());

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBaUJFLElBQU0sWUFBWSxHQUF5QixVQUFDLFNBQWlCLEVBQUUsUUFBZ0IsSUFBYSxpQkFBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFJLFFBQVEsQ0FBRSxFQUFwQyxDQUFvQyxDQUFDO0FBTWpJO0lBSUUsc0JBQVksU0FBaUIsRUFBRSxRQUFnQjtRQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUNoQixDQUFDO0lBRUQscUNBQWMsR0FBZDtRQUNFLE9BQU8sbUJBQW1CLENBQUM7SUFDN0IsQ0FBQztJQUNELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQztBQUtELElBQU0sT0FBTyxHQUFHLElBQUksWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIFRlYWNoZXIge1xuICAgIHJlYWRvbmx5IGZpcnN0TmFtZTogc3RyaW5nLFxuICAgIHJlYWRvbmx5IGxhc3ROYW1lOiBzdHJpbmcsXG4gICAgZnVsbFRpbWVFbXBsb3llZTogYm9vbGVhbixcbiAgICB5ZWFyc09mRXhwZXJpZW5jZT86IE51bWJlcixcbiAgICBsb2NhdGlvbjogc3RyaW5nLFxuICAgIFtwcm9wTmFtZTogc3RyaW5nXTogYW55LFxuICAgIH1cbiAgXG4gIGludGVyZmFjZSBEaXJlY3RvcnMgZXh0ZW5kcyBUZWFjaGVyIHtcbiAgICBudW1iZXJPZlJlcG9ydHM6IE51bWJlcixcbiAgfVxuICBcbiAgaW50ZXJmYWNlIHByaW50VGVhY2hlckZ1bmN0aW9uIHtcbiAgICAoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpOiBzdHJpbmc7ICBcbiAgfVxuICBcbiAgY29uc3QgcHJpbnRUZWFjaGVyOiBwcmludFRlYWNoZXJGdW5jdGlvbiA9IChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IHN0cmluZyA9PiBgJHtmaXJzdE5hbWUuY2hhckF0KDApfS4ke2xhc3ROYW1lfWA7XG4gIGludGVyZmFjZSBjbGFzc0ludGVyZmFjZSB7XG4gICAgd29ya09uSG9tZXdvcmsoKTogc3RyaW5nO1xuICAgIGRpc3BsYXlOYW1lKCk6IHN0cmluZztcbiAgfVxuICBcbiAgY2xhc3MgU3R1ZGVudENsYXNzIGltcGxlbWVudHMgY2xhc3NJbnRlcmZhY2V7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgXG4gICAgY29uc3RydWN0b3IoZmlyc3ROYW1lOiBzdHJpbmcsIGxhc3ROYW1lOiBzdHJpbmcpIHtcbiAgICAgIHRoaXMuZmlyc3ROYW1lO1xuICAgICAgdGhpcy5sYXN0TmFtZTtcbiAgICB9XG4gIFxuICAgIHdvcmtPbkhvbWV3b3JrKCk6c3RyaW5ne1xuICAgICAgcmV0dXJuIFwiQ3VycmVudGx5IHdvcmtpbmdcIjtcbiAgICB9XG4gICAgZGlzcGxheU5hbWUoKTpzdHJpbmd7XG4gICAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XG4gICAgfVxuICB9XG4gIGludGVyZmFjZSBTdHVkZW50Q29uc3RydWN0b3Ige1xuICAgIChmaXJzdE5hbWU6IHN0cmluZywgbGFzdE5hbWU6IHN0cmluZyk6IGNsYXNzSW50ZXJmYWNlO1xuICB9XG4gIFxuICBjb25zdCBzdHVkZW50ID0gbmV3IFN0dWRlbnRDbGFzcyhcIkRqb1wiLCBcImRqb1wiKTtcbiAgY29uc29sZS5sb2coc3R1ZGVudC5kaXNwbGF5TmFtZSgpKVxuICBjb25zb2xlLmxvZyhzdHVkZW50LndvcmtPbkhvbWV3b3JrKCkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=