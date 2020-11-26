(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations.ts":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 })], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))], { optional: true })
    ])
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, RoutingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingComponents", function() { return RoutingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _train_page_train_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./train-page/train-page.component */ "./src/app/train-page/train-page.component.ts");
/* harmony import */ var _predict_page_predict_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./predict-page/predict-page.component */ "./src/app/predict-page/predict-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _train_page_train_page_component__WEBPACK_IMPORTED_MODULE_2__["TrainPageComponent"] },
    { path: 'train', component: _train_page_train_page_component__WEBPACK_IMPORTED_MODULE_2__["TrainPageComponent"] },
    { path: 'predict', component: _predict_page_predict_page_component__WEBPACK_IMPORTED_MODULE_3__["PredictPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var RoutingComponents = [_train_page_train_page_component__WEBPACK_IMPORTED_MODULE_2__["TrainPageComponent"], _predict_page_predict_page_component__WEBPACK_IMPORTED_MODULE_3__["PredictPageComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* router-outlet ~ * {\r\n    position: absolute;\r\n    height: 100vh;\r\n    width: 100vh;\r\n  } */\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main [@fadeAnimation]=\"o.isActivated ? o.activatedRoute : ''\">\r\n        <router-outlet #o=\"outlet\"></router-outlet>\r\n</main>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "./src/app/animations.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] // register the animation
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model.service */ "./src/app/model.service.ts");
/* harmony import */ var _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../node_modules/@angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["RoutingComponents"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _node_modules_angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [_model_service__WEBPACK_IMPORTED_MODULE_12__["ModelService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/model.service.ts":
/*!**********************************!*\
  !*** ./src/app/model.service.ts ***!
  \**********************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/* harmony import */ var _webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcam */ "./src/app/webcam.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var ModelService = /** @class */ (function () {
    function ModelService() {
        this.labels = [];
        this.isTraining = false;
        this.numClasses = 4;
        this.optimizer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["train"].adam(0.0001);
        this.counter = 0;
        this.model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]({
            layers: [
                _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].flatten({ inputShape: [7, 7, 256] }),
                _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
                    units: 100,
                    activation: 'relu',
                    kernelInitializer: 'varianceScaling',
                    useBias: true
                }),
                _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
                    units: this.numClasses,
                    kernelInitializer: 'varianceScaling',
                    useBias: false,
                    activation: 'softmax'
                })
            ]
        });
        this.webcam = new _webcam__WEBPACK_IMPORTED_MODULE_2__["Webcam"](document.getElementById('vid1'));
    }
    ModelService.prototype.loadMobilenet = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mobilenet, layer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["loadModel"]('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json')];
                    case 1:
                        mobilenet = _a.sent();
                        layer = mobilenet.getLayer('conv_pw_13_relu');
                        this.mobilenet = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["model"]({ inputs: mobilenet.inputs, outputs: layer.output });
                        return [2 /*return*/];
                }
            });
        });
    };
    ModelService.prototype.getLabels = function (labels) {
        this.labels = labels;
    };
    ModelService.prototype.resetData = function () {
        this.labels = ['label1', 'label2', 'label3', 'label4'];
        this.model = undefined;
        this.xs = null;
        this.ys = null;
    };
    ModelService.prototype.newSample = function (label, id) {
        var _this = this;
        var targetCanvas = '';
        var newLabe = document.getElementById('card1').getElementsByTagName('input');
        switch (label) {
            case 0:
                targetCanvas = 'label1';
                break;
            case 1:
                targetCanvas = 'label2';
                break;
            case 2:
                targetCanvas = 'label3';
                break;
            case 3:
                targetCanvas = 'label4';
                break;
        }
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            if (_this.mobilenet === undefined) {
                _this.alertNoInternet();
            }
            else {
                var canvas = document.getElementById(targetCanvas);
                var myVideo = document.getElementById(id);
                var img = _this.capture(myVideo);
                _this.draw(img, canvas);
                var example = _this.mobilenet.predict(img);
                _this.addData(example, label);
            }
        });
    };
    ModelService.prototype.alertNoInternet = function () {
        alert('Please check internet connection');
    };
    ModelService.prototype.capture = function (video) {
        var _this = this;
        return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var webcamImage = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["fromPixels"](video);
            var croppedImage = _this.cropImage(webcamImage);
            var batchedImage = croppedImage.expandDims(0);
            return batchedImage.toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](127)).sub(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](1));
        });
    };
    ModelService.prototype.addData = function (example, label) {
        var _this = this;
        var y = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () { return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["oneHot"](_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tensor1d"]([label]).toInt(), _this.numClasses); });
        if (this.xs == null) {
            this.xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["keep"](example);
            this.ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["keep"](y);
        }
        else {
            var oldX = this.xs;
            this.xs = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["keep"](oldX.concat(example, 0));
            var oldY = this.ys;
            this.ys = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["keep"](oldY.concat(y, 0));
            oldX.dispose();
            oldY.dispose();
            y.dispose();
        }
    };
    ModelService.prototype.classify = function (id) {
        var _this = this;
        var myVideo = document.getElementById(id);
        var captured = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            var webcamImage = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["fromPixels"](myVideo);
            var croppedImage = _this.cropImage(webcamImage);
            var batchedImage = croppedImage.expandDims(0);
            return batchedImage.toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](127)).sub(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["scalar"](1));
        });
        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
            _this.predict(captured);
        });
    };
    ModelService.prototype.cropImage = function (img) {
        var size = Math.min(img.shape[0], img.shape[1]);
        var centerHeight = img.shape[0] / 2;
        var beginHeight = centerHeight - (size / 2);
        var centerWidth = img.shape[1] / 2;
        var beginWidth = centerWidth - (size / 2);
        return img.slice([beginHeight, beginWidth, 0], [224, 224, 3]);
    };
    ModelService.prototype.draw = function (image, canvas) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, width, height, ctx, imageData, data, i, j;
            return __generator(this, function (_b) {
                _a = [224, 224], width = _a[0], height = _a[1];
                ctx = canvas.getContext('2d');
                imageData = new ImageData(width, height);
                data = image.dataSync();
                for (i = 0; i < height * width; ++i) {
                    j = i * 4;
                    imageData.data[j + 0] = (data[i * 3 + 0] + 1) * 127;
                    imageData.data[j + 1] = (data[i * 3 + 1] + 1) * 127;
                    imageData.data[j + 2] = (data[i * 3 + 2] + 1) * 127;
                    imageData.data[j + 3] = 255;
                }
                ctx.putImageData(imageData, 0, 0);
                return [2 /*return*/];
            });
        });
    };
    ModelService.prototype.train = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var optimizer, batchSize;
            return __generator(this, function (_a) {
                if (this.xs == null) {
                    throw new Error('Add some examples before training!');
                }
                this.model = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["sequential"]({
                    layers: [
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].flatten({ inputShape: [7, 7, 256] }),
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
                            units: 100,
                            activation: 'relu',
                            kernelInitializer: 'varianceScaling',
                            useBias: true
                        }),
                        _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["layers"].dense({
                            units: this.numClasses,
                            kernelInitializer: 'varianceScaling',
                            useBias: false,
                            activation: 'softmax'
                        })
                    ]
                });
                optimizer = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["train"].adam(0.0001);
                this.model.compile({ optimizer: optimizer, loss: 'categoricalCrossentropy', metrics: ['accuracy'] });
                batchSize = Math.floor(this.xs.shape[0] * 0.4);
                if (!(batchSize > 0)) {
                    throw new Error("Batch size is 0 or NaN. Please choose a non-zero fraction.");
                }
                this.model.fit(this.xs, this.ys, {
                    batchSize: batchSize,
                    epochs: 20,
                    callbacks: {
                        onTrainBegin: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.isTraining = true;
                                return [2 /*return*/];
                            });
                        }); },
                        onTrainEnd: function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                this.isTraining = false;
                                return [2 /*return*/];
                            });
                        }); }
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    ModelService.prototype.predict = function (imageData) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.mobilenet === undefined)) return [3 /*break*/, 1];
                        this.alertNoInternet();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["tidy"](function () {
                            var img = imageData;
                            img = img.reshape([1, 224, 224, 3]);
                            img = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_1__["cast"](img, 'float32'); // explain this
                            var activation = _this.mobilenet.predict(img);
                            var output = _this.model.predict(activation);
                            _this.predictions = Array.from(output.dataSync());
                            var predicted = Math.max.apply(Math, _this.predictions);
                            var classification = _this.labels[_this.predictions.indexOf(predicted)];
                            document.getElementById('classification').innerHTML = classification;
                            var msg = new SpeechSynthesisUtterance(classification);
                            window.speechSynthesis.speak(msg);
                        })];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/predict-page/predict-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/predict-page/predict-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    height: 78.3vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;    \r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\nnav, footer {\r\n    height: 10vh;\r\n}\r\n\r\nnav {\r\n    padding-top: 1rem;\r\n    text-align: center;\r\n    font-size: 3 rem;\r\n    background: linear-gradient(#4A96E8,#05E3D8);\r\n}\r\n\r\nnav p {\r\n    margin: 1rem;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\n\r\nfooter {\r\n    background: #EBEBEB;\r\n}\r\n\r\n#retrain {\r\n    float: left;\r\n    font-size: 3rem;\r\n    height: 100%;\r\n    color: white;\r\n    font-weight: bolder;\r\n    background: linear-gradient(to bottom right, #4A96E8,#05E3D8);\r\n   \r\n}\r\n\r\nmat-card {\r\n    color: black;\r\n    padding: 0%;\r\n    width: 360px;\r\n    height: 27rem;\r\n    border-radius: 25px;\r\n}\r\n\r\nmat-card img {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\nmat-card h1 {\r\n    text-align: center;\r\n}\r\n\r\n#container button {\r\n    font-size: 3rem;\r\n    padding: 1rem;\r\n    margin: 2rem;\r\n}\r\n\r\n#videoCanvas {\r\n    height: 360px;\r\n    width: 360px;\r\n}"

/***/ }),

/***/ "./src/app/predict-page/predict-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/predict-page/predict-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <p>\n      Test Your Trained ML Model\n    <p>\n</nav>\n  <div id=\"container\" >\n    <mat-card>\n      <video id=\"webcam\" #videoElement style=\"display:none\" height=\"240px\" width=\"320px\"></video>\n      <canvas id=\"videoCanvas\" height=\"224px\" width=\"224px\"></canvas>\n      <h1 id=\"classification\"></h1>\n    </mat-card>\n    <button mat-raised-button color=\"primary\" (click)=\"_modelService.classify('webcam')\">PREDICT</button>\n  </div>\n<footer>\n    <button mat-button id=\"retrain\" routerLink='/train' (click)=\"_modelService.resetData()\">Retrain Model</button>\n</footer>\n"

/***/ }),

/***/ "./src/app/predict-page/predict-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/predict-page/predict-page.component.ts ***!
  \********************************************************/
/*! exports provided: PredictPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PredictPageComponent", function() { return PredictPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _webcam_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webcam-service.service */ "./src/app/webcam-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { LabelsList } from './labels';


var PredictPageComponent = /** @class */ (function () {
    function PredictPageComponent(_modelService, _webcamService) {
        this._modelService = _modelService;
        this._webcamService = _webcamService;
        this._webcamService.setTarget('videoCanvas', 'webcam');
    }
    PredictPageComponent.prototype.ngOnInit = function () {
        this.initCamera();
        this.video = this.videoElement.nativeElement;
        this._webcamService.startWebCam();
        // this._modelService.loadModel();
    };
    PredictPageComponent.prototype.initCamera = function () {
        var _this = this;
        var config = { video: true, audio: false };
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia(config).then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.play();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoElement'),
        __metadata("design:type", Object)
    ], PredictPageComponent.prototype, "videoElement", void 0);
    PredictPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-predict-page',
            template: __webpack_require__(/*! ./predict-page.component.html */ "./src/app/predict-page/predict-page.component.html"),
            styles: [__webpack_require__(/*! ./predict-page.component.css */ "./src/app/predict-page/predict-page.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"], _webcam_service_service__WEBPACK_IMPORTED_MODULE_2__["WebcamServiceService"]])
    ], PredictPageComponent);
    return PredictPageComponent;
}());



/***/ }),

/***/ "./src/app/train-page/train-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/train-page/train-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    height: 78.3vh;\r\n    width: 100%;\r\n    padding: 0;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\nnav {\r\n    padding-top: 1rem;\r\n    height: 10vh;\r\n    font-size: 3 rem;\r\n    text-align: center;\r\n    background: linear-gradient(#3EE33E, #BBE305)\r\n}\r\n\r\nnav p {\r\n    margin: 1rem;\r\n    color: white;\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n}\r\n\r\nfooter {\r\n    background: #EBEBEB;\r\n    height: 10vh;\r\n}\r\n\r\n#train-cards {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n}\r\n\r\n#train-cards p{\r\n    width: 100%;\r\n    padding: 0%;\r\n    margin: 0%;\r\n    background: #EBEBEB;\r\n}\r\n\r\n#videoCard {\r\n    padding: 0%;\r\n    margin: 0%;\r\n    height: 224px;\r\n    width: 224px;\r\n    background: white;\r\n}\r\n\r\n#train {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-content: center;\r\n    justify-content: center;  \r\n    margin-top: 1rem; \r\n}\r\n\r\n#train img {\r\n   padding: 0%; \r\n}\r\n\r\n/* #train button {\r\n    display: flex;\r\n    flex-direction: row;\r\n    font-size: 4rem;   \r\n    padding: 1 rem;\r\n} */\r\n\r\n#accuracy {\r\n    text-align: center;\r\n}\r\n\r\n#toPredict {\r\n    float: right;\r\n    font-size: 3rem;\r\n    height: 100%;\r\n    color: white;\r\n    font-weight: bolder;\r\n    background: linear-gradient(to bottom right, #3EE33E, #BBE305);\r\n   \r\n}\r\n\r\n#train-cards mat-card {\r\n    margin-top: 1rem;\r\n    background: #BBE305;\r\n    border-top-left-radius: 2rem;\r\n    position: relative;\r\n    padding-left: 0%;\r\n    padding-right: 0%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 0%;\r\n  }\r\n\r\n#train-cards mat-card p {\r\n    text-align: center;\r\n    background: white;\r\n    font-size: 1.5rem;\r\n}\r\n\r\nmat-card button {\r\n    margin-top:1.8rem;\r\n    height: 224px;\r\n    width: 224px;\r\n    position: absolute;\r\n    z-index: 2;\r\n    background: rgba(225, 225, 225, 0.5)\r\n}\r\n\r\nmat-spinner {\r\n    margin: 1rem 0 0 0;\r\n}\r\n\r\ncanvas {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\ninput {\r\n    height: 1.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/train-page/train-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/train-page/train-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <p>\n        Transfer Learning\n      <p>\n</nav>\n<div id=\"container\" > \n  \n <div id=\"train-cards\">\n    <mat-card id='card1'>\n      <mat-card-header><input type='text' placeholder=\"Label 1\" [(ngModel)]=\"labels[0]\"/></mat-card-header>\n      <canvas id=\"label1\" height=\"224px\" width=\"224px\" (click)=\"addNewSample('card1')\"></canvas>\n      <button mat-raised-button (click)=\"startAdding('card1')\" *ngIf='showAddButton.card1; else preview1'>Click to start adding examples</button>\n      <p>{{numOfExamplesList[0]}} examples</p>\n    </mat-card>\n    <mat-card id=\"card2\">\n      <mat-card-header><input type='text' placeholder=\"Label 2\" [(ngModel)]=\"labels[1]\"/></mat-card-header>\n      <canvas id=\"label2\" height=\"224px\" width=\"224px\" (click)=\"addNewSample('card2')\"></canvas>\n      <button mat-raised-button (click)=\"startAdding('card2')\" *ngIf=\"showAddButton.card2\">Click to start adding examples</button>\n      <p>{{numOfExamplesList[1]}} examples</p>\n    </mat-card>\n    <mat-card id=\"card3\">\n      <mat-card-header><input type='text' placeholder=\"Label 3\" [(ngModel)]=\"labels[2]\"/></mat-card-header>\n      <canvas id=\"label3\" height=\"224px\" width=\"224px\" (click)=\"addNewSample('card3')\"></canvas>\n      <button mat-raised-button (click)=\"startAdding('card3')\" *ngIf=\"showAddButton.card3\">Click to start adding examples</button>\n      <p>{{numOfExamplesList[2]}} examples</p>\n    </mat-card>\n    <mat-card id=\"card4\">\n      <mat-card-header><input type='text' placeholder=\"Label 4\" [(ngModel)]=\"labels[3]\"/></mat-card-header>\n      <canvas id=\"label4\" height=\"224px\" width=\"224px\" (click)=\"addNewSample('card4')\"></canvas>\n      <button mat-raised-button (click)=\"startAdding('card4')\" *ngIf=\"showAddButton.card4\">Click to start adding examples</button>\n      <p>{{numOfExamplesList[3]}} examples</p>\n    </mat-card>\n </div>\n\n <div id=\"train\">\n   <button mat-raised-button (click)=\"prepTrain()\" >\n      <div *ngIf=\"_modelService.isTraining===false\">\n          <img src=\"/assets/train_btn.svg\" alt=\"retrain_button\">\n          <h1>TRAIN</h1>\n      </div>\n      <mat-spinner [diameter]=\"80\" *ngIf=\"_modelService.isTraining===true\"></mat-spinner>\n   </button>\n   \n   <div>\n    <video id=\"vid1\" #videoElement style=\"display:none\"  height=\"224px\" width=\"298.6666667px\"></video>\n    <mat-card id=\"videoCard\"><canvas id=\"videoCanvas\" height=\"224px\" width=\"224px\"></canvas></mat-card>\n   </div>\n </div>\n\n \n\n</div>\n<footer>\n  <button mat-button id=\"toPredict\" routerLink='/predict'>Test Prediction</button>\n</footer>\n"

/***/ }),

/***/ "./src/app/train-page/train-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/train-page/train-page.component.ts ***!
  \****************************************************/
/*! exports provided: TrainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainPageComponent", function() { return TrainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
/* harmony import */ var _webcam_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webcam-service.service */ "./src/app/webcam-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TrainPageComponent = /** @class */ (function () {
    function TrainPageComponent(_modelService, _webcamService) {
        this._modelService = _modelService;
        this._webcamService = _webcamService;
        this.labels = ['label1', 'label2', 'label3', 'label4'];
        this.showAddButton = { card1: true, card2: true, card3: true, card4: true };
        this.numOfExamplesList = [0, 0, 0, 0];
        this._webcamService.setTarget('videoCanvas', 'vid1');
    }
    TrainPageComponent.prototype.ngOnInit = function () {
        this.initCamera();
        this.video = this.videoElement.nativeElement;
        this._webcamService.startWebCam();
        this._modelService.loadMobilenet();
    };
    TrainPageComponent.prototype.initCamera = function () {
        var _this = this;
        var config = { video: true, audio: false };
        var browser = navigator;
        browser.getUserMedia = (browser.getUserMedia ||
            browser.webkitGetUserMedia ||
            browser.mozGetUserMedia ||
            browser.msGetUserMedia);
        browser.mediaDevices.getUserMedia(config).then(function (stream) {
            _this.video.srcObject = stream;
            _this.video.play();
        });
    };
    TrainPageComponent.prototype.startAdding = function (card) {
        this.addNewSample(card);
        this.showAddButton[card] = false;
    };
    TrainPageComponent.prototype.addNewSample = function (card) {
        var updateExamples = document.getElementById(card).getElementsByTagName('p')[0].textContent;
        if (this._modelService.mobilenet !== undefined) {
            switch (card) {
                case 'card1':
                    this._modelService.newSample(0, 'vid1');
                    this.numOfExamplesList[0] += 1;
                    break;
                case 'card2':
                    this._modelService.newSample(1, 'vid1');
                    this.numOfExamplesList[1] += 1;
                    break;
                case 'card3':
                    this._modelService.newSample(2, 'vid1');
                    this.numOfExamplesList[2] += 1;
                    break;
                case 'card4':
                    this._modelService.newSample(3, 'vid1');
                    this.numOfExamplesList[3] += 1;
                    break;
            }
        }
        else {
            this._modelService.alertNoInternet();
        }
    };
    TrainPageComponent.prototype.hide = function (id) {
        var elem = document.getElementById(id);
        elem.style.display = 'none';
        var vidID = 'vid' + id;
        document.getElementById(vidID).style.display = 'block';
    };
    TrainPageComponent.prototype.prepTrain = function () {
        this._modelService.getLabels(this.labels);
        this._modelService.train().catch(function (err) { return alert(err); });
    };
    TrainPageComponent.prototype.stopWebcamNow = function () {
        this.video.stop();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('videoElement'),
        __metadata("design:type", Object)
    ], TrainPageComponent.prototype, "videoElement", void 0);
    TrainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-train-page',
            template: __webpack_require__(/*! ./train-page.component.html */ "./src/app/train-page/train-page.component.html"),
            styles: [__webpack_require__(/*! ./train-page.component.css */ "./src/app/train-page/train-page.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"], _webcam_service_service__WEBPACK_IMPORTED_MODULE_2__["WebcamServiceService"]])
    ], TrainPageComponent);
    return TrainPageComponent;
}());



/***/ }),

/***/ "./src/app/webcam-service.service.ts":
/*!*******************************************!*\
  !*** ./src/app/webcam-service.service.ts ***!
  \*******************************************/
/*! exports provided: WebcamServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebcamServiceService", function() { return WebcamServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebcamServiceService = /** @class */ (function () {
    function WebcamServiceService(_modelService) {
        this._modelService = _modelService;
    }
    WebcamServiceService.prototype.setTarget = function (targetCanvas, targetVideo) {
        console.log('setting target');
        this.targetCanvas = targetCanvas;
        this.targetVideo = targetVideo;
    };
    WebcamServiceService.prototype.startWebCam = function () {
        var _this = this;
        document.onreadystatechange = function () {
            if (document.readyState === 'complete') {
                _this.drawVideo2Canvas();
            }
        };
        if (document.readyState === 'complete') {
            this.drawVideo2Canvas();
        }
    };
    WebcamServiceService.prototype.drawVideo2Canvas = function () {
        var canvas = document.getElementById(this.targetCanvas);
        var video = document.getElementById(this.targetVideo);
        var img = this._modelService.capture(video);
        this._modelService.draw(img, canvas);
        requestAnimationFrame(this.drawVideo2Canvas.bind(this));
        img.dispose();
    };
    WebcamServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], WebcamServiceService);
    return WebcamServiceService;
}());



/***/ }),

/***/ "./src/app/webcam.js":
/*!***************************!*\
  !*** ./src/app/webcam.js ***!
  \***************************/
/*! exports provided: Webcam */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Webcam", function() { return Webcam; });
/* harmony import */ var _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tensorflow/tfjs */ "./node_modules/@tensorflow/tfjs/dist/tf.esm.js");
/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


/**
 * A class that wraps webcam video elements to capture Tensor4Ds.
 */
class Webcam {
  /**
   * @param {HTMLVideoElement} webcamElement A HTMLVideoElement representing the webcam feed.
   */
  constructor(webcamElement) {
    this.webcamElement = webcamElement;
  }

  /**
   * Captures a frame from the webcam and normalizes it between -1 and 1.
   * Returns a batched image (1-element batch) of shape [1, w, h, c].
   */
  capture() {
    return _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["tidy"](() => {
      // Reads the image as a Tensor from the webcam <video> element.
      const webcamImage = _tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["fromPixels"](this.webcamElement);

      // Crop the image so we're using the center square of the rectangular
      // webcam.
      const croppedImage = this.cropImage(webcamImage);

      // Expand the outer most dimension so we have a batch size of 1.
      const batchedImage = croppedImage.expandDims(0);

      // Normalize the image between -1 and 1. The image comes in between 0-255,
      // so we divide by 127 and subtract 1.
      return batchedImage.toFloat().div(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["scalar"](127)).sub(_tensorflow_tfjs__WEBPACK_IMPORTED_MODULE_0__["scalar"](1));
    });
  }

  /**
   * Crops an image tensor so we get a square image with no white space.
   * @param {Tensor4D} img An input image Tensor to crop.
   */
  cropImage(img) {
    const size = Math.min(img.shape[0], img.shape[1]);
    const centerHeight = img.shape[0] / 2;
    const beginHeight = centerHeight - (size / 2);
    const centerWidth = img.shape[1] / 2;
    const beginWidth = centerWidth - (size / 2);
    return img.slice([beginHeight, beginWidth, 0], [size, size, 3]);
  }

  /**
   * Adjusts the video size so we can make a centered square crop without
   * including whitespace.
   * @param {number} width The real width of the video element.
   * @param {number} height The real height of the video element.
   */
  adjustVideoSize(width, height) {
    const aspectRatio = width / height;
    if (width >= height) {
      this.webcamElement.width = aspectRatio * this.webcamElement.height;
    } else if (width < height) {
      this.webcamElement.height = this.webcamElement.width / aspectRatio;
    }
  }

  async setup() {
    return new Promise((resolve, reject) => {
      const navigatorAny = navigator;
      navigator.getUserMedia = navigator.getUserMedia ||
          navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
          navigatorAny.msGetUserMedia;
      if (navigator.getUserMedia) {
        navigator.getUserMedia(
            {video: true},
            stream => {
              this.webcamElement.srcObject = stream;
              this.webcamElement.addEventListener('loadeddata', async () => {
                this.adjustVideoSize(
                    this.webcamElement.videoWidth,
                    this.webcamElement.videoHeight);
                resolve();
              }, false);
            },
            error => {
              reject();
            });
      } else {
        reject();
      }
    });
  }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angularApps\transfer-learning-tfjs\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map