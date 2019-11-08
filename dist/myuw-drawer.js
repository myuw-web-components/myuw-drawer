var MyUWDrawer = (function (exports) {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var tpl = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #drawer-container[open] #drawer {\n    left: 0;\n  }\n\n  #drawer-container[open] #shadow {\n    display: block;\n  }\n\n  #drawer {\n    width: 300px;\n    height: 100%;\n    display: block;\n    position: fixed;\n    left: -300px;\n    top: 64px;\n    bottom: 0;\n    z-index: 5;\n    background-color: white;\n    transition: left .4s cubic-bezier(.25, .8, .25, 1);\n  }\n\n  #drawer ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  #shadow {\n    display: none;\n    position: fixed;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(33, 33, 33, .48);\n  }\n\n  #drawer-button {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    min-height: 36px;\n    min-width: 48px;\n    user-select: none;\n    outline: none;\n    cursor: pointer;\n    padding: 0;\n    border: 0;\n    margin: 0 6px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-transition: background-color .3s cubic-bezier(.35,0,.25,1);\n    transition: background-color .3s cubic-bezier(.35,0,.25,1);\n  }\n\n  #drawer-button:hover {\n    background-color: rgba(0,0,0,0.2);\n  }\n\n  #menu-icon {\n    color: var(--myuw-primary-color, #fff);\n    fill: var(--myuw-primary-color, #fff);\n    font-size: 26px;\n  } </style> <div id=\"drawer-container\"> <button id=\"drawer-button\" aria-label=\"open navigation drawer\"> <i id=\"menu-icon\" class=\"material-icons\">menu</i> </button> <div id=\"drawer\"> <ul> <slot name=\"myuw-drawer-links\" tabindex=\"-1\"></slot> </ul> </div> <div id=\"shadow\"></div> </div> ";

  var MyUWDrawer =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWDrawer, _HTMLElement);

    function MyUWDrawer() {
      var _this;

      _classCallCheck(this, MyUWDrawer);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWDrawer).call(this)); // Create a shadow-root for this element.

      _this.attachShadow({
        mode: 'open'
      }); // Append the custom HTML template to the shadow-root.


      _this.shadowRoot.appendChild(MyUWDrawer.template.content.cloneNode(true));

      return _this;
    }

    _createClass(MyUWDrawer, [{
      key: "connectedCallback",

      /**
       * When the component is first attached to the DOM, get its defined
       * attributes and listen for scrolling.
       */
      value: function connectedCallback() {
        var _this2 = this;

        this.$container = this.shadowRoot.querySelector('div#drawer-container');
        this.$drawerSlot = this.shadowRoot.querySelector('slot');
        this.$button = this.shadowRoot.getElementById('drawer-button');
        this.$shadow = this.shadowRoot.getElementById('shadow'); // Check if initial drawer state is open by default

        if (this.hasAttribute('open')) {
          this.removeAttribute('open');
          this.$container.setAttribute('open', '');
          this.$drawerSlot.removeAttribute('tabindex');
        }

        this.$button.addEventListener('click', function () {
          _this2.setDrawerState();
        });
        this.$shadow.addEventListener('click', function () {
          _this2.setDrawerState(false);
        });
      }
      /**
       * Web component lifecycle hook to updated changed properties.
       */

    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {} // ...

      /**
       * Clean-up listeners if the component is removed from the DOM.
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {} // ...

      /**
       * Update the component state depending on changed properties and/or
       * font loading.
       */

    }, {
      key: "updateComponent",
      value: function updateComponent(prop, value) {// ...
      }
    }, {
      key: "setDrawerState",
      value: function setDrawerState(newState) {
        switch (newState) {
          case false:
            this.$container.removeAttribute('open');
            this.$drawerSlot.setAttribute('tabindex', '-1');
            break;

          case true:
            this.$container.setAttribute('open', '');
            this.$drawerSlot.removeAttribute('tabindex');
            break;

          default:
            if (this.$container.hasAttribute('open')) {
              this.$container.removeAttribute('open');
              this.$drawerSlot.setAttribute('tabindex', '-1');
            } else {
              this.$container.setAttribute('open', '');
              this.$drawerSlot.removeAttribute('tabindex');
            }

        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['open'];
      }
    }]);

    return MyUWDrawer;
  }(_wrapNativeSuper(HTMLElement));

  MyUWDrawer.template = function template(src) {
    var template = document.createElement('template');
    template.innerHTML = src;
    return template;
  }(tpl);

  window.customElements.define('myuw-drawer', MyUWDrawer);

  var tpl$1 = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #drawer-item {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  #drawer-link {\n    padding-top: 5px;\n    text-align: left;\n    display: flex;\n    border-radius: 0;\n    margin: auto 0;\n    font-size: 16px;\n    font-family: var(--myuw-font, 'Roboto', Arial, sans-serif);\n    font-weight: 400;\n    height: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    width: 100%;\n    color: #000;\n    text-decoration: none;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-grid-row-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    align-content: center;\n    max-width: 100%;\n    letter-spacing: .01rem;\n  }\n\n  #drawer-link:hover {\n    background: rgba(158, 158, 158, .2);\n  }\n\n  #icon {\n    color: rgba(0, 0, 0, .54);\n    margin: auto 16px auto 0;\n  } </style> <li id=\"drawer-item\"> <a id=\"drawer-link\"> <i id=\"icon\" class=\"material-icons\"></i> <span id=\"name\"></span> </a> </li> ";

  var MyUWDrawerLink =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWDrawerLink, _HTMLElement);

    function MyUWDrawerLink() {
      var _this;

      _classCallCheck(this, MyUWDrawerLink);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWDrawerLink).call(this));
      _this.connected = false; // Create a shadow-root for this element.

      _this.attachShadow({
        mode: 'open'
      }); // Append the custom HTML template to the shadow-root.


      _this.shadowRoot.appendChild(MyUWDrawerLink.template.content.cloneNode(true));

      return _this;
    }

    _createClass(MyUWDrawerLink, [{
      key: "attributeChangedCallback",

      /**
       * Web component lifecycle hook to updated changed properties.
       */
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // Safefly reference variables
        if (this.connected && typeof this[name] !== null) {
          // Update if the attribute is different than before
          if (oldValue !== newValue) {
            this[name] = newValue;
            this.updateComponent(name, newValue);
          }
        }
      }
      /**
       * When the component is first attached to the DOM, get its defined
       * attributes and listen for scrolling.
       */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        this.href = this.getAttribute('href') || null;
        this.icon = this.getAttribute('icon') || null;
        this.name = this.getAttribute('name') || null;
        this.$href = this.shadowRoot.querySelector('a#drawer-link');
        this.$icon = this.shadowRoot.querySelector('i#icon');
        this.$name = this.shadowRoot.querySelector('span#name');
        this.$href.setAttribute('href', this.href);
        this.$icon.innerText = this.icon;
        this.$name.innerText = this.name;
        this.connected = true;
      }
      /**
       * Clean-up listeners if the component is removed from the DOM.
       */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {} // ...

      /**
       * Update the component state depending on changed properties and/or
       * font loading.
       */

    }, {
      key: "updateComponent",
      value: function updateComponent(prop, value) {
        if (!this.connected) {
          return;
        }

        switch (prop) {
          case "href":
            this.$href.setAttribute('href', this.href);
            break;

          case "icon":
            this.$icon.innerText = this.icon;
            break;

          case "name":
            this.$name.innerText = this.name;
            break;
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['name', 'icon', 'href'];
      }
    }]);

    return MyUWDrawerLink;
  }(_wrapNativeSuper(HTMLElement));

  MyUWDrawerLink.template = function template(src) {
    var template = document.createElement('template');
    template.innerHTML = src;
    return template;
  }(tpl$1);

  window.customElements.define('myuw-drawer-link', MyUWDrawerLink);

  var tpl$2 = " <style> #label {\n    padding: 16px 16px 4px 22px;\n    display: inline-block;\n    color: rgba(0, 0, 0, .6);\n    user-select: none;\n  }\n\n  #divider {\n    display: none;\n    height: auto;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: rgba(0,0,0,.12);\n    margin-top: 4px;\n  } </style> <span id=\"divider\"></span> <li id=\"label\"></li> ";

  var MyUWDrawerSubheader =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(MyUWDrawerSubheader, _HTMLElement);

    function MyUWDrawerSubheader() {
      var _this;

      _classCallCheck(this, MyUWDrawerSubheader);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(MyUWDrawerSubheader).call(this)); // Create a shadow-root for this element.

      _this.attachShadow({
        mode: 'open'
      }); // Append the custom HTML template to the shadow-root.


      _this.shadowRoot.appendChild(MyUWDrawerSubheader.template.content.cloneNode(true));

      return _this;
    }

    _createClass(MyUWDrawerSubheader, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        // Get attributes and assign elements
        this['name'] = this.getAttribute('name') || '';
        this.$label = this.shadowRoot.getElementById('label');
        this.$divider = this.shadowRoot.getElementById('divider');

        if (this.$label && this.$divider) {
          this.updateComponent();
        }
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        // Update the attribute internally
        this[name] = newValue; // Update the component

        if (this.$label && this.$divider) {
          this.updateComponent();
        }
      }
    }, {
      key: "updateComponent",
      value: function updateComponent() {
        // Set subheader label
        this.$label.innerHTML = "<span>".concat(this['name'], "</span>"); // Display divider

        if (this.hasAttribute('divider')) {
          this.$divider.style.display = 'block';
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ['name', 'divider'];
      }
    }]);

    return MyUWDrawerSubheader;
  }(_wrapNativeSuper(HTMLElement));

  MyUWDrawerSubheader.template = function template(src) {
    var template = document.createElement('template');
    template.innerHTML = src;
    return template;
  }(tpl$2);

  window.customElements.define('myuw-drawer-subheader', MyUWDrawerSubheader);

  exports.MyUWDrawer = MyUWDrawer;
  exports.MyUWDrawerLink = MyUWDrawerLink;
  exports.MyUWDrawerSubheader = MyUWDrawerSubheader;

  return exports;

}({}));
