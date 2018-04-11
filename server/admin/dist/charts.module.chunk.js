webpackJsonp(["charts.module"],{

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarHorizontalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarHorizontalComponent = (function () {
    function ChartjsBarHorizontalComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [{
                        label: 'Dataset 1',
                        backgroundColor: colors.infoLight,
                        borderWidth: 1,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    }, {
                        label: 'Dataset 2',
                        backgroundColor: colors.successLight,
                        data: [_this.random(), _this.random(), _this.random(), _this.random(), _this.random(), _this.random()],
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    rectangle: {
                        borderWidth: 2,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    position: 'right',
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsBarHorizontalComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ChartjsBarHorizontalComponent.prototype.random = function () {
        return Math.round(Math.random() * 100);
    };
    return ChartjsBarHorizontalComponent;
}());
ChartjsBarHorizontalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-bar-horizontal',
        template: "\n    <chart type=\"horizontalBar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsBarHorizontalComponent);

var _a;
//# sourceMappingURL=chartjs-bar-horizontal.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsBarComponent = (function () {
    function ChartjsBarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.primaryLight, 0.8),
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.infoLight, 0.8),
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: false,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
            };
        });
    }
    ChartjsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsBarComponent;
}());
ChartjsBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-bar',
        template: "\n    <chart type=\"bar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsBarComponent);

var _a;
//# sourceMappingURL=chartjs-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsLineComponent = (function () {
    function ChartjsLineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                        data: [65, 59, 80, 81, 56, 55, 40],
                        label: 'Series A',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.primary, 0.3),
                        borderColor: colors.primary,
                    }, {
                        data: [28, 48, 40, 19, 86, 27, 90],
                        label: 'Series B',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.danger, 0.3),
                        borderColor: colors.danger,
                    }, {
                        data: [18, 48, 77, 9, 100, 27, 40],
                        label: 'Series C',
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.info, 0.3),
                        borderColor: colors.info,
                    },
                ],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                    yAxes: [
                        {
                            gridLines: {
                                display: true,
                                color: chartjs.axisLineColor,
                            },
                            ticks: {
                                fontColor: chartjs.textColor,
                            },
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsLineComponent;
}());
ChartjsLineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-line',
        template: "\n    <chart type=\"line\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsLineComponent);

var _a;
//# sourceMappingURL=chartjs-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsPieComponent = (function () {
    function ChartjsPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Download Sales', 'In-Store Sales', 'Mail Sales'],
                datasets: [{
                        data: [300, 500, 100],
                        backgroundColor: [colors.primaryLight, colors.infoLight, colors.successLight],
                    }],
            };
            _this.options = {
                maintainAspectRatio: false,
                responsive: true,
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                },
                scales: {
                    xAxes: [
                        {
                            display: false,
                        },
                    ],
                    yAxes: [
                        {
                            display: false,
                        },
                    ],
                },
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
            };
        });
    }
    ChartjsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsPieComponent;
}());
ChartjsPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-pie',
        template: "\n    <chart type=\"pie\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsPieComponent);

var _a;
//# sourceMappingURL=chartjs-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartjsRadarComponent = (function () {
    function ChartjsRadarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var chartjs = config.variables.chartjs;
            _this.data = {
                labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
                datasets: [{
                        data: [65, 59, 90, 81, 56, 55, 40],
                        label: 'Series A',
                        borderColor: colors.danger,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.dangerLight, 0.5),
                    }, {
                        data: [28, 48, 40, 19, 96, 27, 100],
                        label: 'Series B',
                        borderColor: colors.warning,
                        backgroundColor: __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["d" /* NbColorHelper */].hexToRgbA(colors.warningLight, 0.5),
                    }],
            };
            _this.options = {
                responsive: true,
                maintainAspectRatio: false,
                scaleFontColor: 'white',
                legend: {
                    labels: {
                        fontColor: chartjs.textColor,
                    },
                },
                scale: {
                    pointLabels: {
                        fontSize: 14,
                        fontColor: chartjs.textColor,
                    },
                    gridLines: {
                        color: chartjs.axisLineColor,
                    },
                    angleLines: {
                        color: chartjs.axisLineColor,
                    },
                },
            };
        });
    }
    ChartjsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return ChartjsRadarComponent;
}());
ChartjsRadarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs-radar',
        template: "\n    <chart type=\"radar\" [data]=\"data\" [options]=\"options\"></chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], ChartjsRadarComponent);

var _a;
//# sourceMappingURL=chartjs-radar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-pie></ngx-chartjs-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-bar></ngx-chartjs-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-line></ngx-chartjs-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <!-- <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Multiple x-axis</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-multiple-xaxis></ngx-chartjs-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div> -->\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar Horizontal</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-bar-horizontal></ngx-chartjs-bar-horizontal>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Radar</nb-card-header>\n      <nb-card-body>\n        <ngx-chartjs-radar></ngx-chartjs-radar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) ngx-chartjs-pie,\n:host-context(.nb-theme-default) ngx-chartjs-bar,\n:host-context(.nb-theme-default) ngx-chartjs-line,\n:host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-default) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-default) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-default) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n\n:host-context(.nb-theme-cosmic) ngx-chartjs-pie,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar,\n:host-context(.nb-theme-cosmic) ngx-chartjs-line,\n:host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis,\n:host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal,\n:host-context(.nb-theme-cosmic) ngx-chartjs-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n  :host-context(.nb-theme-cosmic) ngx-chartjs-pie /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-line /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-multiple-xaxis /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-bar-horizontal /deep/ chart,\n  :host-context(.nb-theme-cosmic) ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 100%;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/chartjs/chartjs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartjsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartjsComponent = (function () {
    function ChartjsComponent() {
    }
    return ChartjsComponent;
}());
ChartjsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-chartjs',
        styles: [__webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs.component.html"),
    })
], ChartjsComponent);

//# sourceMappingURL=chartjs.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/charts-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return routedComponents; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__charts_component__ = __webpack_require__("../../../../../src/app/pages/charts/charts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__echarts_echarts_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__d3_d3_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chartjs_chartjs_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__charts_component__["a" /* ChartsComponent */],
        children: [{
                path: 'echarts',
                component: __WEBPACK_IMPORTED_MODULE_3__echarts_echarts_component__["a" /* EchartsComponent */],
            }, {
                path: 'd3',
                component: __WEBPACK_IMPORTED_MODULE_4__d3_d3_component__["a" /* D3Component */],
            }, {
                path: 'chartjs',
                component: __WEBPACK_IMPORTED_MODULE_5__chartjs_chartjs_component__["a" /* ChartjsComponent */],
            }],
    }];
var ChartsRoutingModule = (function () {
    function ChartsRoutingModule() {
    }
    return ChartsRoutingModule;
}());
ChartsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
    })
], ChartsRoutingModule);

var routedComponents = [
    __WEBPACK_IMPORTED_MODULE_2__charts_component__["a" /* ChartsComponent */],
    __WEBPACK_IMPORTED_MODULE_3__echarts_echarts_component__["a" /* EchartsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__d3_d3_component__["a" /* D3Component */],
    __WEBPACK_IMPORTED_MODULE_5__chartjs_chartjs_component__["a" /* ChartjsComponent */],
];
//# sourceMappingURL=charts-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/charts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ChartsComponent = (function () {
    function ChartsComponent() {
    }
    return ChartsComponent;
}());
ChartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-charts',
        template: "\n    <router-outlet></router-outlet>\n  ",
    })
], ChartsComponent);

//# sourceMappingURL=charts.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__ = __webpack_require__("../../../../angular2-chartjs/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__charts_routing_module__ = __webpack_require__("../../../../../src/app/pages/charts/charts-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chartjs_chartjs_bar_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_line_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chartjs_chartjs_pie_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__chartjs_chartjs_bar_horizontal_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs-bar-horizontal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chartjs_chartjs_radar_component__ = __webpack_require__("../../../../../src/app/pages/charts/chartjs/chartjs-radar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__d3_d3_bar_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__d3_d3_line_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__d3_d3_pie_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__d3_d3_area_stack_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-area-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__d3_d3_polar_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-polar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__d3_d3_advanced_pie_component__ = __webpack_require__("../../../../../src/app/pages/charts/d3/d3-advanced-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__echarts_echarts_line_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__echarts_echarts_pie_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__echarts_echarts_bar_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__echarts_echarts_multiple_xaxis_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__echarts_echarts_area_stack_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-area-stack.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__echarts_echarts_bar_animation_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-bar-animation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__echarts_echarts_radar_component__ = __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts-radar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// import { ChartjsMultipleXaxisComponent } from './chartjs/chartjs-multiple-xaxis.component';















var components = [
    __WEBPACK_IMPORTED_MODULE_6__chartjs_chartjs_bar_component__["a" /* ChartjsBarComponent */],
    __WEBPACK_IMPORTED_MODULE_7__chartjs_chartjs_line_component__["a" /* ChartjsLineComponent */],
    __WEBPACK_IMPORTED_MODULE_8__chartjs_chartjs_pie_component__["a" /* ChartjsPieComponent */],
    // ChartjsMultipleXaxisComponent,
    __WEBPACK_IMPORTED_MODULE_9__chartjs_chartjs_bar_horizontal_component__["a" /* ChartjsBarHorizontalComponent */],
    __WEBPACK_IMPORTED_MODULE_10__chartjs_chartjs_radar_component__["a" /* ChartjsRadarComponent */],
    __WEBPACK_IMPORTED_MODULE_11__d3_d3_bar_component__["a" /* D3BarComponent */],
    __WEBPACK_IMPORTED_MODULE_12__d3_d3_line_component__["a" /* D3LineComponent */],
    __WEBPACK_IMPORTED_MODULE_13__d3_d3_pie_component__["a" /* D3PieComponent */],
    __WEBPACK_IMPORTED_MODULE_14__d3_d3_area_stack_component__["a" /* D3AreaStackComponent */],
    __WEBPACK_IMPORTED_MODULE_15__d3_d3_polar_component__["a" /* D3PolarComponent */],
    __WEBPACK_IMPORTED_MODULE_16__d3_d3_advanced_pie_component__["a" /* D3AdvancedPieComponent */],
    __WEBPACK_IMPORTED_MODULE_17__echarts_echarts_line_component__["a" /* EchartsLineComponent */],
    __WEBPACK_IMPORTED_MODULE_18__echarts_echarts_pie_component__["a" /* EchartsPieComponent */],
    __WEBPACK_IMPORTED_MODULE_19__echarts_echarts_bar_component__["a" /* EchartsBarComponent */],
    __WEBPACK_IMPORTED_MODULE_20__echarts_echarts_multiple_xaxis_component__["a" /* EchartsMultipleXaxisComponent */],
    __WEBPACK_IMPORTED_MODULE_21__echarts_echarts_area_stack_component__["a" /* EchartsAreaStackComponent */],
    __WEBPACK_IMPORTED_MODULE_22__echarts_echarts_bar_animation_component__["a" /* EchartsBarAnimationComponent */],
    __WEBPACK_IMPORTED_MODULE_23__echarts_echarts_radar_component__["a" /* EchartsRadarComponent */],
];
var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */], __WEBPACK_IMPORTED_MODULE_5__charts_routing_module__["a" /* ChartsRoutingModule */], __WEBPACK_IMPORTED_MODULE_1_ngx_echarts__["a" /* AngularEchartsModule */], __WEBPACK_IMPORTED_MODULE_2__swimlane_ngx_charts__["NgxChartsModule"], __WEBPACK_IMPORTED_MODULE_3_angular2_chartjs__["ChartModule"]],
        declarations: __WEBPACK_IMPORTED_MODULE_5__charts_routing_module__["b" /* routedComponents */].concat(components),
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-advanced-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3AdvancedPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3AdvancedPieComponent = (function () {
    function D3AdvancedPieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.single = [
            {
                name: 'Germany',
                value: 8940000,
            },
            {
                name: 'USA',
                value: 5000000,
            },
            {
                name: 'France',
                value: 7200000,
            },
        ];
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AdvancedPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3AdvancedPieComponent;
}());
D3AdvancedPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-advanced-pie',
        template: "\n    <ngx-charts-advanced-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"single\">\n    </ngx-charts-advanced-pie-chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3AdvancedPieComponent);

var _a;
//# sourceMappingURL=d3-advanced-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-area-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3AreaStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3AreaStackComponent = (function () {
    function D3AreaStackComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [{
                name: 'Germany',
                series: [{
                        name: '2010',
                        value: 7300000,
                    }, {
                        name: '2011',
                        value: 8940000,
                    }],
            }, {
                name: 'USA',
                series: [{
                        name: '2010',
                        value: 7870000,
                    }, {
                        name: '2011',
                        value: 8270000,
                    }],
            }, {
                name: 'France',
                series: [{
                        name: '2010',
                        value: 5000002,
                    }, {
                        name: '2011',
                        value: 5800000,
                    }],
            }];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3AreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3AreaStackComponent;
}());
D3AreaStackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-area-stack',
        template: "\n    <ngx-charts-area-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-area-chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3AreaStackComponent);

var _a;
//# sourceMappingURL=d3-area-stack.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3BarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3BarComponent = (function () {
    function D3BarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3BarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3BarComponent;
}());
D3BarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-bar',
        template: "\n    <ngx-charts-bar-vertical\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-bar-vertical>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3BarComponent);

var _a;
//# sourceMappingURL=d3-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3LineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3LineComponent = (function () {
    function D3LineComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '2010',
                        value: 7300,
                    },
                    {
                        name: '2011',
                        value: 8940,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '2010',
                        value: 7870,
                    },
                    {
                        name: '2011',
                        value: 8270,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '2010',
                        value: 5002,
                    },
                    {
                        name: '2011',
                        value: 5800,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3LineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3LineComponent;
}());
D3LineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-line',
        template: "\n    <ngx-charts-line-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\">\n    </ngx-charts-line-chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3LineComponent);

var _a;
//# sourceMappingURL=d3-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3PieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3PieComponent = (function () {
    function D3PieComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.results = [
            { name: 'Germany', value: 8940 },
            { name: 'USA', value: 5000 },
            { name: 'France', value: 7200 },
        ];
        this.showLegend = true;
        this.showLabels = true;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3PieComponent;
}());
D3PieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-pie',
        template: "\n    <ngx-charts-pie-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"results\"\n      [legend]=\"showLegend\"\n      [labels]=\"showLabels\">\n    </ngx-charts-pie-chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3PieComponent);

var _a;
//# sourceMappingURL=d3-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3-polar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3PolarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3PolarComponent = (function () {
    function D3PolarComponent(theme) {
        var _this = this;
        this.theme = theme;
        this.multi = [
            {
                name: 'Germany',
                series: [
                    {
                        name: '1990',
                        value: 31476,
                    },
                    {
                        name: '2000',
                        value: 36953,
                    },
                    {
                        name: '2010',
                        value: 40632,
                    },
                ],
            },
            {
                name: 'USA',
                series: [
                    {
                        name: '1990',
                        value: 37060,
                    },
                    {
                        name: '2000',
                        value: 45986,
                    },
                    {
                        name: '2010',
                        value: 49737,
                    },
                ],
            },
            {
                name: 'France',
                series: [
                    {
                        name: '1990',
                        value: 29476,
                    },
                    {
                        name: '2000',
                        value: 34774,
                    },
                    {
                        name: '2010',
                        value: 36240,
                    },
                ],
            },
        ];
        this.showLegend = true;
        this.autoScale = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.xAxisLabel = 'Country';
        this.yAxisLabel = 'Population';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            _this.colorScheme = {
                domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
            };
        });
    }
    D3PolarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return D3PolarComponent;
}());
D3PolarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3-polar',
        template: "\n    <ngx-charts-polar-chart\n      [scheme]=\"colorScheme\"\n      [results]=\"multi\"\n      [xAxis]=\"showXAxis\"\n      [yAxis]=\"showYAxis\"\n      [legend]=\"showLegend\"\n      [showXAxisLabel]=\"showXAxisLabel\"\n      [showYAxisLabel]=\"showYAxisLabel\"\n      [xAxisLabel]=\"xAxisLabel\"\n      [yAxisLabel]=\"yAxisLabel\"\n      [autoScale]=\"autoScale\">\n    </ngx-charts-polar-chart>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], D3PolarComponent);

var _a;
//# sourceMappingURL=d3-polar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-pie></ngx-d3-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-bar></ngx-d3-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-line></ngx-d3-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Advanced Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-advanced-pie></ngx-d3-advanced-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Area Chart</nb-card-header>\n      <nb-card-body>\n        <ngx-d3-area-stack></ngx-d3-area-stack>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) ngx-d3-bar,\n:host-context(.nb-theme-default) ngx-d3-pie,\n:host-context(.nb-theme-default) ngx-d3-advanced-pie,\n:host-context(.nb-theme-default) ngx-d3-area-stack,\n:host-context(.nb-theme-default) ngx-d3-line,\n:host-context(.nb-theme-default) ngx-d3-polar {\n  display: block;\n  width: 100%;\n  height: 456px; }\n  :host-context(.nb-theme-default) ngx-d3-bar /deep/ .pie-label,\n  :host-context(.nb-theme-default) ngx-d3-pie /deep/ .pie-label,\n  :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ .pie-label,\n  :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ .pie-label,\n  :host-context(.nb-theme-default) ngx-d3-line /deep/ .pie-label,\n  :host-context(.nb-theme-default) ngx-d3-polar /deep/ .pie-label {\n    fill: #2a2a2a; }\n  :host-context(.nb-theme-default) ngx-d3-bar /deep/ .grid-line-path,\n  :host-context(.nb-theme-default) ngx-d3-pie /deep/ .grid-line-path,\n  :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ .grid-line-path,\n  :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ .grid-line-path,\n  :host-context(.nb-theme-default) ngx-d3-line /deep/ .grid-line-path,\n  :host-context(.nb-theme-default) ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #ebeef2; }\n  :host-context(.nb-theme-default) ngx-d3-bar /deep/ text,\n  :host-context(.nb-theme-default) ngx-d3-pie /deep/ text,\n  :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ text,\n  :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ text,\n  :host-context(.nb-theme-default) ngx-d3-line /deep/ text,\n  :host-context(.nb-theme-default) ngx-d3-polar /deep/ text {\n    fill: #2a2a2a; }\n  :host-context(.nb-theme-default) ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-default) ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-default) ngx-d3-line /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-default) ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #ffffff; }\n  :host-context(.nb-theme-default) ngx-d3-bar /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-default) ngx-d3-pie /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-default) ngx-d3-line /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-default) ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #2a2a2a; }\n    :host-context(.nb-theme-default) ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-default) ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-default) ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-default) ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-default) ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-default) ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #2a2a2a; }\n\n:host-context(.nb-theme-cosmic) ngx-d3-bar,\n:host-context(.nb-theme-cosmic) ngx-d3-pie,\n:host-context(.nb-theme-cosmic) ngx-d3-advanced-pie,\n:host-context(.nb-theme-cosmic) ngx-d3-area-stack,\n:host-context(.nb-theme-cosmic) ngx-d3-line,\n:host-context(.nb-theme-cosmic) ngx-d3-polar {\n  display: block;\n  width: 100%;\n  height: 456px; }\n  :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ .pie-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ .pie-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ .pie-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ .pie-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ .pie-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ .pie-label {\n    fill: #ffffff; }\n  :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ .grid-line-path,\n  :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ .grid-line-path,\n  :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ .grid-line-path,\n  :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ .grid-line-path,\n  :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ .grid-line-path,\n  :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #342e73; }\n  :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ text,\n  :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ text,\n  :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ text,\n  :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ text,\n  :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ text,\n  :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ text {\n    fill: #ffffff; }\n  :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ .chart-legend .legend-labels,\n  :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #3d3780; }\n  :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ .chart-legend .legend-label,\n  :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #ffffff; }\n    :host-context(.nb-theme-cosmic) ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-cosmic) ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-cosmic) ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-cosmic) ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-cosmic) ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    :host-context(.nb-theme-cosmic) ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #ffffff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/d3/d3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var D3Component = (function () {
    function D3Component() {
    }
    return D3Component;
}());
D3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-d3',
        styles: [__webpack_require__("../../../../../src/app/pages/charts/d3/d3.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/charts/d3/d3.component.html"),
    })
], D3Component);

//# sourceMappingURL=d3.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-area-stack.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsAreaStackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsAreaStackComponent = (function () {
    function EchartsAreaStackComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsAreaStackComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: echarts.tooltipBackgroundColor,
                        },
                    },
                },
                legend: {
                    data: ['Mail marketing', 'Affiliate advertising', 'Video ad', 'Direct interview', 'Search engine'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Mail marketing',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [120, 132, 101, 134, 90, 230, 210],
                    },
                    {
                        name: 'Affiliate advertising',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [220, 182, 191, 234, 290, 330, 310],
                    },
                    {
                        name: 'Video ad',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [150, 232, 201, 154, 190, 330, 410],
                    },
                    {
                        name: 'Direct interview',
                        type: 'line',
                        stack: 'Total amount',
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [320, 332, 301, 334, 390, 330, 320],
                    },
                    {
                        name: 'Search engine',
                        type: 'line',
                        stack: 'Total amount',
                        label: {
                            normal: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        areaStyle: { normal: { opacity: echarts.areaOpacity } },
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                    },
                ],
            };
        });
    };
    EchartsAreaStackComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsAreaStackComponent;
}());
EchartsAreaStackComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-area-stack',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsAreaStackComponent);

var _a;
//# sourceMappingURL=echarts-area-stack.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-bar-animation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarAnimationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarAnimationComponent = (function () {
    function EchartsBarAnimationComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarAnimationComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var xAxisData = [];
            var data1 = [];
            var data2 = [];
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight, colors.infoLight],
                legend: {
                    data: ['bar', 'bar2'],
                    align: 'left',
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        data: xAxisData,
                        silent: false,
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        data: data1,
                        animationDelay: function (idx) {
                            return idx * 10;
                        },
                    },
                    {
                        name: 'bar2',
                        type: 'bar',
                        data: data2,
                        animationDelay: function (idx) {
                            return idx * 10 + 100;
                        },
                    },
                ],
                animationEasing: 'elasticOut',
                animationDelayUpdate: function (idx) {
                    return idx * 5;
                },
            };
            for (var i = 0; i < 100; i++) {
                xAxisData.push('Category ' + i);
                data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
            }
        });
    };
    EchartsBarAnimationComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsBarAnimationComponent;
}());
EchartsBarAnimationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-bar-animation',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsBarAnimationComponent);

var _a;
//# sourceMappingURL=echarts-bar-animation.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsBarComponent = (function () {
    function EchartsBarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.primaryLight],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: 'Score',
                        type: 'bar',
                        barWidth: '60%',
                        data: [10, 52, 200, 334, 390, 330, 220],
                    },
                ],
            };
        });
    };
    EchartsBarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsBarComponent;
}());
EchartsBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-bar',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsBarComponent);

var _a;
//# sourceMappingURL=echarts-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsLineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsLineComponent = (function () {
    function EchartsLineComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsLineComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.primary, colors.info],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c}',
                },
                legend: {
                    left: 'left',
                    data: ['Line 1', 'Line 2', 'Line 3'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                yAxis: [
                    {
                        type: 'log',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,
                },
                series: [
                    {
                        name: 'Line 1',
                        type: 'line',
                        data: [1, 3, 9, 27, 81, 247, 741, 2223, 6669],
                    },
                    {
                        name: 'Line 2',
                        type: 'line',
                        data: [1, 2, 4, 8, 16, 32, 64, 128, 256],
                    },
                    {
                        name: 'Line 3',
                        type: 'line',
                        data: [1 / 2, 1 / 4, 1 / 8, 1 / 16, 1 / 32, 1 / 64, 1 / 128, 1 / 256, 1 / 512],
                    },
                ],
            };
        });
    };
    EchartsLineComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsLineComponent;
}());
EchartsLineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-line',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsLineComponent);

var _a;
//# sourceMappingURL=echarts-line.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-multiple-xaxis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsMultipleXaxisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsMultipleXaxisComponent = (function () {
    function EchartsMultipleXaxisComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsMultipleXaxisComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.success, colors.info],
                tooltip: {
                    trigger: 'none',
                    axisPointer: {
                        type: 'cross',
                    },
                },
                legend: {
                    data: ['2015 Precipitation', '2016 Precipitation'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                grid: {
                    top: 70,
                    bottom: 50,
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.info,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2016-1',
                            '2016-2',
                            '2016-3',
                            '2016-4',
                            '2016-5',
                            '2016-6',
                            '2016-7',
                            '2016-8',
                            '2016-9',
                            '2016-10',
                            '2016-11',
                            '2016-12',
                        ],
                    },
                    {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true,
                        },
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: colors.success,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                        axisPointer: {
                            label: {
                                formatter: function (params) {
                                    return ('Precipitation  ' + params.value + (params.seriesData.length ? '：' + params.seriesData[0].data : ''));
                                },
                            },
                        },
                        data: [
                            '2015-1',
                            '2015-2',
                            '2015-3',
                            '2015-4',
                            '2015-5',
                            '2015-6',
                            '2015-7',
                            '2015-8',
                            '2015-9',
                            '2015-10',
                            '2015-11',
                            '2015-12',
                        ],
                    },
                ],
                yAxis: [
                    {
                        type: 'value',
                        axisLine: {
                            lineStyle: {
                                color: echarts.axisLineColor,
                            },
                        },
                        splitLine: {
                            lineStyle: {
                                color: echarts.splitLineColor,
                            },
                        },
                        axisLabel: {
                            textStyle: {
                                color: echarts.textColor,
                            },
                        },
                    },
                ],
                series: [
                    {
                        name: '2015 Precipitation',
                        type: 'line',
                        xAxisIndex: 1,
                        smooth: true,
                        data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    },
                    {
                        name: '2016 Precipitation',
                        type: 'line',
                        smooth: true,
                        data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
                    },
                ],
            };
        });
    };
    EchartsMultipleXaxisComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsMultipleXaxisComponent;
}());
EchartsMultipleXaxisComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-multiple-xaxis',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsMultipleXaxisComponent);

var _a;
//# sourceMappingURL=echarts-multiple-xaxis.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsPieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsPieComponent = (function () {
    function EchartsPieComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsPieComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.warningLight, colors.infoLight, colors.dangerLight, colors.successLight, colors.primaryLight],
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['USA', 'Germany', 'France', 'Canada', 'Russia'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                series: [
                    {
                        name: 'Countries',
                        type: 'pie',
                        radius: '80%',
                        center: ['50%', '50%'],
                        data: [
                            { value: 335, name: 'Germany' },
                            { value: 310, name: 'France' },
                            { value: 234, name: 'Canada' },
                            { value: 135, name: 'Russia' },
                            { value: 1548, name: 'USA' },
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: echarts.itemHoverShadowColor,
                            },
                        },
                        label: {
                            normal: {
                                textStyle: {
                                    color: echarts.textColor,
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                lineStyle: {
                                    color: echarts.axisLineColor,
                                },
                            },
                        },
                    },
                ],
            };
        });
    };
    EchartsPieComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsPieComponent;
}());
EchartsPieComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-pie',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsPieComponent);

var _a;
//# sourceMappingURL=echarts-pie.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts-radar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsRadarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nebular_theme__ = __webpack_require__("../../../../@nebular/theme/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EchartsRadarComponent = (function () {
    function EchartsRadarComponent(theme) {
        this.theme = theme;
        this.options = {};
    }
    EchartsRadarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            var colors = config.variables;
            var echarts = config.variables.echarts;
            _this.options = {
                backgroundColor: echarts.bg,
                color: [colors.danger, colors.warning],
                tooltip: {},
                legend: {
                    data: ['Allocated Budget', 'Actual Spending'],
                    textStyle: {
                        color: echarts.textColor,
                    },
                },
                radar: {
                    name: {
                        textStyle: {
                            color: echarts.textColor,
                        },
                    },
                    indicator: [
                        { name: 'Sales', max: 6500 },
                        { name: 'Administration', max: 16000 },
                        { name: 'Information Techology', max: 30000 },
                        { name: 'Customer Support', max: 38000 },
                        { name: 'Development', max: 52000 },
                        { name: 'Marketing', max: 25000 },
                    ],
                    splitArea: {
                        areaStyle: {
                            color: 'transparent',
                        },
                    },
                },
                series: [
                    {
                        name: 'Budget vs Spending',
                        type: 'radar',
                        data: [
                            {
                                value: [4300, 10000, 28000, 35000, 50000, 19000],
                                name: 'Allocated Budget',
                            },
                            {
                                value: [5000, 14000, 28000, 31000, 42000, 21000],
                                name: 'Actual Spending',
                            },
                        ],
                    },
                ],
            };
        });
    };
    EchartsRadarComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    return EchartsRadarComponent;
}());
EchartsRadarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts-radar',
        template: "\n    <div echarts [options]=\"options\" class=\"echart\"></div>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__nebular_theme__["o" /* NbThemeService */]) === "function" && _a || Object])
], EchartsRadarComponent);

var _a;
//# sourceMappingURL=echarts-radar.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Pie</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-pie></ngx-echarts-pie>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar></ngx-echarts-bar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Line</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-line></ngx-echarts-line>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Multiple x-axis</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-multiple-xaxis></ngx-echarts-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Area Stack</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-area-stack></ngx-echarts-area-stack>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Bar Animation</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-bar-animation></ngx-echarts-bar-animation>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <div class=\"col-lg-6\">\n    <nb-card>\n      <nb-card-header>Radar</nb-card-header>\n      <nb-card-body>\n        <ngx-echarts-radar></ngx-echarts-radar>\n      </nb-card-body>\n    </nb-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) ngx-echarts-pie,\n:host-context(.nb-theme-default) ngx-echarts-bar,\n:host-context(.nb-theme-default) ngx-echarts-line,\n:host-context(.nb-theme-default) ngx-echarts-multiple-xaxis,\n:host-context(.nb-theme-default) ngx-echarts-area-stack,\n:host-context(.nb-theme-default) ngx-echarts-bar-animation,\n:host-context(.nb-theme-default) ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-default) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) ngx-echarts-pie,\n:host-context(.nb-theme-cosmic) ngx-echarts-bar,\n:host-context(.nb-theme-cosmic) ngx-echarts-line,\n:host-context(.nb-theme-cosmic) ngx-echarts-multiple-xaxis,\n:host-context(.nb-theme-cosmic) ngx-echarts-area-stack,\n:host-context(.nb-theme-cosmic) ngx-echarts-bar-animation,\n:host-context(.nb-theme-cosmic) ngx-echarts-radar {\n  display: block;\n  height: 456px;\n  width: 100%; }\n\n:host-context(.nb-theme-cosmic) /deep/ .echart {\n  height: 100%;\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/charts/echarts/echarts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EchartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EchartsComponent = (function () {
    function EchartsComponent() {
    }
    return EchartsComponent;
}());
EchartsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-echarts',
        styles: [__webpack_require__("../../../../../src/app/pages/charts/echarts/echarts.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/charts/echarts/echarts.component.html"),
    })
], EchartsComponent);

//# sourceMappingURL=echarts.component.js.map

/***/ })

});
//# sourceMappingURL=charts.module.chunk.js.map