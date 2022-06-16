function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crt-apex-crt-apex-module"], {
  /***/
  "./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CrtApexRoutingModule */

  /***/
  function srcAppDemoPagesCoreChartCrtApexCrtApexRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrtApexRoutingModule", function () {
      return CrtApexRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _crt_apex_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./crt-apex.component */
    "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts");

    var routes = [{
      path: '',
      component: _crt_apex_component__WEBPACK_IMPORTED_MODULE_2__["CrtApexComponent"]
    }];

    var CrtApexRoutingModule = function CrtApexRoutingModule() {
      _classCallCheck(this, CrtApexRoutingModule);
    };

    CrtApexRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CrtApexRoutingModule
    });
    CrtApexRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CrtApexRoutingModule_Factory(t) {
        return new (t || CrtApexRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrtApexRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrtApexRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CrtApexComponent */

  /***/
  function srcAppDemoPagesCoreChartCrtApexCrtApexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrtApexComponent", function () {
      return CrtApexComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../fack-db/chart-data */
    "./src/app/fack-db/chart-data.ts");
    /* harmony import */


    var _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../theme/shared/components/chart/apex-chart/apex-chart.service */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.service.ts");
    /* harmony import */


    var _theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../theme/shared/components/card/card.component */
    "./src/app/theme/shared/components/card/card.component.ts");
    /* harmony import */


    var _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/components/chart/apex-chart/apex-chart.component */
    "./src/app/theme/shared/components/chart/apex-chart/apex-chart.component.ts");

    var CrtApexComponent =
    /*#__PURE__*/
    function () {
      function CrtApexComponent(apexEvent) {
        _classCallCheck(this, CrtApexComponent);

        this.apexEvent = apexEvent;
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_1__["ChartDB"];
        this.lastDate = 0;
        this.data = [];
        this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
          min: 10,
          max: 90
        });
        this.line2CAC = {
          chart: {
            height: 300,
            type: 'line',
            animations: {
              enabled: true,
              easing: 'linear',
              dynamicAnimation: {
                speed: 2000
              }
            },
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          series: [{
            data: this.data
          }],
          colors: ['#1abc9c'],
          title: {
            text: 'Dynamic Updating Chart',
            align: 'left'
          },
          markers: {
            size: 0
          },
          xaxis: {
            type: 'datetime',
            range: 777600000
          },
          yaxis: {
            max: 100
          },
          legend: {
            show: false
          }
        };
        this.dailyVisitorStatus = '1y';
      }

      _createClass(CrtApexComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.intervalSub = setInterval(function () {
            _this.getNewSeries(_this.lastDate, {
              min: 10,
              max: 90
            });

            _this.apexEvent.eventChangeSeriesData();
          }, 2000);
          this.intervalMain = setInterval(function () {
            _this.resetData();

            _this.apexEvent.eventChangeSeriesData();
          }, 60000);
        }
      }, {
        key: "dailyVisitorEvent",
        value: function dailyVisitorEvent(status) {
          var _this2 = this;

          this.dailyVisitorStatus = status;

          switch (status) {
            case '1m':
              this.dailyVisitorAxis = {
                min: new Date('28 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case '6m':
              this.dailyVisitorAxis = {
                min: new Date('27 Sep 2012').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case '1y':
              this.dailyVisitorAxis = {
                min: new Date('27 Feb 2012').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case 'ytd':
              this.dailyVisitorAxis = {
                min: new Date('01 Jan 2013').getTime(),
                max: new Date('27 Feb 2013').getTime()
              };
              break;

            case 'all':
              this.dailyVisitorAxis = {
                min: undefined,
                max: undefined
              };
              break;
          }

          setTimeout(function () {
            _this2.apexEvent.eventChangeTimeRange();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.intervalSub) {
            clearInterval(this.intervalSub);
          }

          if (this.intervalMain) {
            clearInterval(this.intervalMain);
          }
        }
      }, {
        key: "getDayWiseTimeSeries",
        value: function getDayWiseTimeSeries(baseval, count, yrange) {
          var i = 0;

          while (i < count) {
            var x = baseval;
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            this.data.push({
              x: x,
              y: y
            });
            this.lastDate = baseval;
            baseval += 86400000;
            i++;
          }
        }
      }, {
        key: "resetData",
        value: function resetData() {
          this.data = this.data.slice(this.data.length - 10, this.data.length);
        }
      }, {
        key: "getNewSeries",
        value: function getNewSeries(baseval, yrange) {
          var newDate = baseval + 86400000;
          this.lastDate = newDate;
          this.data.push({
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
          });
        }
      }]);

      return CrtApexComponent;
    }();

    CrtApexComponent.ɵfac = function CrtApexComponent_Factory(t) {
      return new (t || CrtApexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]));
    };

    CrtApexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CrtApexComponent,
      selectors: [["app-crt-apex"]],
      decls: 19,
      vars: 12,
      consts: [[1, "row"], [1, "col-md-6"], ["cardTitle", "Basic line chart", 3, "options"], ["chartID", "line-chart-1-cac", 3, "chartConfig"], ["cardTitle", "Area chart", 3, "options"], ["chartID", "area-chart-1-cac", 3, "chartConfig"], ["cardTitle", "Bar chart", 3, "options"], ["chartID", "bar-chart-1-cac", 3, "chartConfig"], ["cardTitle", "Bar chart stacked", 3, "options"], ["chartID", "bar-chart-2-cac", 3, "chartConfig"], ["cardTitle", "Pie Chart", 3, "options"], ["chartID", "pie-chart-1-cac", 3, "chartConfig"], ["cardTitle", "Pie Chart donut", 3, "options"], ["chartID", "pie-chart-2-cac", 3, "chartConfig"]],
      template: function CrtApexComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-apex-chart", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-apex-chart", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-apex-chart", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "app-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-apex-chart", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-apex-chart", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-apex-chart", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.line1CAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.area1CAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.bar1CAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.bar2CAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.pie1CAC);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartConfig", ctx.chartDB.pie2CAC);
        }
      },
      directives: [_theme_shared_components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _theme_shared_components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_4__["ApexChartComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vcGFnZXMvY29yZS1jaGFydC9jcnQtYXBleC9jcnQtYXBleC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrtApexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-crt-apex',
          templateUrl: './crt-apex.component.html',
          styleUrls: ['./crt-apex.component.scss']
        }]
      }], function () {
        return [{
          type: _theme_shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/demo/pages/core-chart/crt-apex/crt-apex.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CrtApexModule */

  /***/
  function srcAppDemoPagesCoreChartCrtApexCrtApexModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrtApexModule", function () {
      return CrtApexModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./crt-apex-routing.module */
    "./src/app/demo/pages/core-chart/crt-apex/crt-apex-routing.module.ts");
    /* harmony import */


    var _crt_apex_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./crt-apex.component */
    "./src/app/demo/pages/core-chart/crt-apex/crt-apex.component.ts");
    /* harmony import */


    var _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../theme/shared/shared.module */
    "./src/app/theme/shared/shared.module.ts");

    var CrtApexModule = function CrtApexModule() {
      _classCallCheck(this, CrtApexModule);
    };

    CrtApexModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CrtApexModule
    });
    CrtApexModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CrtApexModule_Factory(t) {
        return new (t || CrtApexModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_2__["CrtApexRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrtApexModule, {
        declarations: [_crt_apex_component__WEBPACK_IMPORTED_MODULE_3__["CrtApexComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_2__["CrtApexRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrtApexModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_crt_apex_component__WEBPACK_IMPORTED_MODULE_3__["CrtApexComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _crt_apex_routing_module__WEBPACK_IMPORTED_MODULE_2__["CrtApexRoutingModule"], _theme_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/fack-db/chart-data.ts":
  /*!***************************************!*\
    !*** ./src/app/fack-db/chart-data.ts ***!
    \***************************************/

  /*! exports provided: ChartDB */

  /***/
  function srcAppFackDbChartDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChartDB", function () {
      return ChartDB;
    });

    var ChartDB = function ChartDB() {
      _classCallCheck(this, ChartDB);
    };

    ChartDB.line1CAC = {
      chart: {
        height: 300,
        type: 'line',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false,
        width: 2
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#1abc9c'],
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f6ff', 'transparent'],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      }
    };
    ChartDB.area1CAC = {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      colors: ['#ffa21d', '#ff5252'],
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['2018-09-19T00:00:00', '2018-09-19T01:30:00', '2018-09-19T02:30:00', '2018-09-19T03:30:00', '2018-09-19T04:30:00', '2018-09-19T05:30:00', '2018-09-19T06:30:00']
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        }
      }
    };
    ChartDB.bar1CAC = {
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#0e9e4a', '#1abc9c', '#e74c3c'],
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91]
      }, {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52]
      }],
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yaxis: {
        title: {
          text: '$ (thousands)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function formatter(val) {
            return '$ ' + val + ' thousands';
          }
        }
      }
    };
    ChartDB.bar2CAC = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#1abc9c', '#0e9e4a', '#ffa21d', '#ff5252'],
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      series: [{
        name: 'PRODUCT A',
        data: [44, 55, 41, 67, 22, 43]
      }, {
        name: 'PRODUCT B',
        data: [13, 23, 20, 8, 13, 27]
      }, {
        name: 'PRODUCT C',
        data: [11, 17, 15, 15, 21, 14]
      }, {
        name: 'PRODUCT D',
        data: [21, 7, 25, 13, 22, 8]
      }],
      xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT']
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
    ChartDB.pie1CAC = {
      chart: {
        height: 320,
        type: 'pie'
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      series: [44, 55, 13, 43, 22],
      colors: ['#1abc9c', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252'],
      legend: {
        show: true,
        position: 'bottom'
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    ChartDB.pie2CAC = {
      chart: {
        height: 320,
        type: 'donut'
      },
      series: [44, 55, 41, 17, 15],
      colors: ['#1abc9c', '#0e9e4a', '#00acc1', '#ffa21d', '#ff5252'],
      legend: {
        show: true,
        position: 'bottom'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                show: true
              },
              value: {
                show: true
              }
            }
          }
        }
      },
      dataLabels: {
        enabled: true,
        dropShadow: {
          enabled: false
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };
    /***/
  }
}]);
//# sourceMappingURL=crt-apex-crt-apex-module-es5.js.map