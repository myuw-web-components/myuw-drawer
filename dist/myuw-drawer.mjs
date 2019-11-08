var tpl = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #drawer-container[open] #drawer {\n    left: 0;\n  }\n\n  #drawer-container[open] #shadow {\n    display: block;\n  }\n\n  #drawer {\n    width: 300px;\n    height: 100%;\n    display: block;\n    position: fixed;\n    left: -300px;\n    top: 64px;\n    bottom: 0;\n    z-index: 5;\n    background-color: white;\n    transition: left .4s cubic-bezier(.25, .8, .25, 1);\n  }\n\n  #drawer ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  #shadow {\n    display: none;\n    position: fixed;\n    top: 64px;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background: rgba(33, 33, 33, .48);\n  }\n\n  #drawer-button {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    min-height: 36px;\n    min-width: 48px;\n    user-select: none;\n    outline: none;\n    cursor: pointer;\n    padding: 0;\n    border: 0;\n    margin: 0 6px;\n    border-radius: 3px;\n    background-color: transparent;\n    -webkit-transition: background-color .3s cubic-bezier(.35,0,.25,1);\n    transition: background-color .3s cubic-bezier(.35,0,.25,1);\n  }\n\n  #drawer-button:hover {\n    background-color: rgba(0,0,0,0.2);\n  }\n\n  #menu-icon {\n    color: var(--myuw-primary-color, #fff);\n    fill: var(--myuw-primary-color, #fff);\n    font-size: 26px;\n  } </style> <div id=\"drawer-container\"> <button id=\"drawer-button\" aria-label=\"open navigation drawer\"> <i id=\"menu-icon\" class=\"material-icons\">menu</i> </button> <div id=\"drawer\"> <ul> <slot name=\"myuw-drawer-links\" tabindex=\"-1\"></slot> </ul> </div> <div id=\"shadow\"></div> </div> ";

class MyUWDrawer extends HTMLElement {
  constructor() {
    super();

    // Create a shadow-root for this element.
    this.attachShadow({ mode: 'open' });

    // Append the custom HTML template to the shadow-root.
    this.shadowRoot.appendChild(MyUWDrawer.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'open',
    ];
  }

  /**
   * When the component is first attached to the DOM, get its defined
   * attributes and listen for scrolling.
   */
  connectedCallback() {

    this.$container   = this.shadowRoot.querySelector('div#drawer-container');
    this.$drawerSlot  = this.shadowRoot.querySelector('slot');
    this.$button      = this.shadowRoot.getElementById('drawer-button');
    this.$shadow      = this.shadowRoot.getElementById('shadow');

    // Check if initial drawer state is open by default
    if (this.hasAttribute('open')) {
      this.removeAttribute('open');
      this.$container.setAttribute('open', '');
      this.$drawerSlot.removeAttribute('tabindex');
      
    }

    this.$button.addEventListener('click', () => {
      this.setDrawerState();
    });

    this.$shadow.addEventListener('click', () => {
      this.setDrawerState(false);
    });
  }

  /**
   * Web component lifecycle hook to updated changed properties.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // ...
  }

  /**
   * Clean-up listeners if the component is removed from the DOM.
   */
  disconnectedCallback() {
    // ...
  }

  /**
   * Update the component state depending on changed properties and/or
   * font loading.
   */
  updateComponent(prop, value) {
    // ...
  }

  setDrawerState(newState) {
    switch(newState) {
      case false:
        this.$container.removeAttribute('open');
        this.$drawerSlot.setAttribute('tabindex', '-1');
        break;

      case true:
        this.$container.setAttribute('open', '');
        this.$drawerSlot.removeAttribute('tabindex');
        break;

      default:
        if(this.$container.hasAttribute('open')) {
          this.$container.removeAttribute('open');
          this.$drawerSlot.setAttribute('tabindex', '-1');
        } else {
          this.$container.setAttribute('open', '');
          this.$drawerSlot.removeAttribute('tabindex');
        }
    }
  }
}

MyUWDrawer.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-drawer', MyUWDrawer);

var tpl$1 = " <style> @import url(https://fonts.googleapis.com/icon?family=Material+Icons);\n\n  #drawer-item {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    flex-direction: row;\n    min-height: 48px;\n    height: 48px;\n    -webkit-align-content: center;\n    align-content: center;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n  }\n\n  #drawer-link {\n    padding-top: 5px;\n    text-align: left;\n    display: flex;\n    border-radius: 0;\n    margin: auto 0;\n    font-size: 16px;\n    font-family: var(--myuw-font, 'Roboto', Arial, sans-serif);\n    font-weight: 400;\n    height: 100%;\n    padding-left: 16px;\n    padding-right: 16px;\n    width: 100%;\n    color: #000;\n    text-decoration: none;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-grid-row-align: center;\n    align-items: center;\n    -webkit-align-content: center;\n    align-content: center;\n    max-width: 100%;\n    letter-spacing: .01rem;\n  }\n\n  #drawer-link:hover {\n    background: rgba(158, 158, 158, .2);\n  }\n\n  #icon {\n    color: rgba(0, 0, 0, .54);\n    margin: auto 16px auto 0;\n  } </style> <li id=\"drawer-item\"> <a id=\"drawer-link\"> <i id=\"icon\" class=\"material-icons\"></i> <span id=\"name\"></span> </a> </li> ";

class MyUWDrawerLink extends HTMLElement {
  constructor() {
    super();

    this.connected = false;

    // Create a shadow-root for this element.
    this.attachShadow({ mode: 'open' });

    // Append the custom HTML template to the shadow-root.
    this.shadowRoot.appendChild(MyUWDrawerLink.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'name',
      'icon',
      'href',
    ];
  }

  /**
   * Web component lifecycle hook to updated changed properties.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // Safefly reference variables
    if (this.connected && typeof this[name] !== null) {
      // Update if the attribute is different than before
      if(oldValue !== newValue){
        this[name] = newValue;
        this.updateComponent(name, newValue);
      }
    }
  }

  /**
   * When the component is first attached to the DOM, get its defined
   * attributes and listen for scrolling.
   */
  connectedCallback() {
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
  disconnectedCallback() {
    // ...
  }

  /**
   * Update the component state depending on changed properties and/or
   * font loading.
   */
  updateComponent(prop, value) {
    if( !this.connected ){ return; }
    switch(prop){
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
}

MyUWDrawerLink.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl$1);

window.customElements.define('myuw-drawer-link', MyUWDrawerLink);

var tpl$2 = " <style> #label {\n    padding: 16px 16px 4px 22px;\n    display: inline-block;\n    color: rgba(0, 0, 0, .6);\n    user-select: none;\n  }\n\n  #divider {\n    display: none;\n    height: auto;\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: rgba(0,0,0,.12);\n    margin-top: 4px;\n  } </style> <span id=\"divider\"></span> <li id=\"label\"></li> ";

class MyUWDrawerSubheader extends HTMLElement {
  constructor() {
    super();

    // Create a shadow-root for this element.
    this.attachShadow({ mode: 'open' });

    // Append the custom HTML template to the shadow-root.
    this.shadowRoot.appendChild(MyUWDrawerSubheader.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'name',
      'divider'
    ];
  }

  connectedCallback() {
    // Get attributes and assign elements
    this['name']    = this.getAttribute('name') || '';

    this.$label   = this.shadowRoot.getElementById('label');
    this.$divider = this.shadowRoot.getElementById('divider');

    if (this.$label && this.$divider) {
      this.updateComponent();
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    if (this.$label && this.$divider) {
      this.updateComponent();
    }
  }

  updateComponent() {
    // Set subheader label
    this.$label.innerHTML = `<span>${this['name']}</span>`;

    // Display divider
    if (this.hasAttribute('divider')) {
      this.$divider.style.display = 'block';
    }
  }
}

MyUWDrawerSubheader.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl$2);

window.customElements.define('myuw-drawer-subheader', MyUWDrawerSubheader);

export { MyUWDrawer, MyUWDrawerLink, MyUWDrawerSubheader };
