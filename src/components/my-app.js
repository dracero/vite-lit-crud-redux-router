import { html, css, LitElement } from 'lit'
import '@material/mwc-dialog'
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      name: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number }
    }
  }

  constructor() {
    super()
    this.name = 'World'
    this.count = 0
  }

  render() {
    return html`
      <h1>Hello, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
      <mwc-dialog title="Are you sure ?" open @closed=${this.onDialogClose}>
      <div>are you sure to perform this action ?</div>
      <mwc-button slot=secondaryAction dialogAction=no></mwc-button>
      <mwc-button slot=primaryAction dialogAction=yes raised></mwc-button>
      <mwc-textfield label="My Textfield" helper="Helper Text"></mwc-textfield>
      </mwc-dialog>
      <mwc-list activatable>
         <mwc-list-item @click=${this._onClick}>Item ${this.count}</mwc-list-item>
         <mwc-list-item selected activated>Item 1</mwc-list-item>
         <mwc-list-item>Item 2</mwc-list-item>
        <mwc-list-item selected activated>Item 3</mwc-list-item>
      </mwc-list>
    `
  }

  _onClick() {
    this.count++
  }

  onDialogClose (e) {
    if (e.detail.action === 'yes') {
      alert('BOOM')
    }
    else if (e.detail.action === 'no') {
      alert('nothing happens')
    }
  }

}

window.customElements.define('my-app', MyElement)
