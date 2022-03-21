import { LitElement, css, html } from "lit";
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { deleterecord, updaterecord } from '../../redux/action'
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'

class ReadOne extends connect(store)(LitElement) {
  static get styles() {
    return [css``];
  }

  static get properties() {
    return {
             email: String,
             id: Number
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` 
    <div>
      <h1>This is Create Page</h1>
         <mwc-textfield id="email" label="Enter Email" helper="The person's email" @change=${(event)=>{this.email=event.target.value}} value=${this.email} size="200"></mwc-textfield>
         <p></p>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchReadOneD}>delete</mwc-button>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchReadOneU}>update</mwc-button>
    </div>`;
  }

  fetchReadOneD(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 0a85f0126790d4f1f65a226bce0141381878ad14f9e14df033ba84b61fadc575");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://gorest.co.in/public/v2/users?email="+this.email, requestOptions)
      .then(response => response.json())
      .then(result =>{
                      store.dispatch(deleterecord(result[0]))
                    })
      .catch(error => console.log('error', error));
      this.email=""
  }
  fetchReadOneU(){
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 0a85f0126790d4f1f65a226bce0141381878ad14f9e14df033ba84b61fadc575");
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://gorest.co.in/public/v2/users?email="+this.email, requestOptions)
      .then(response => response.json())
      .then(result =>{
                      store.dispatch(updaterecord(result[0]))
                    })
      .catch(error => console.log('error', error));
      this.email=""
  }

}

customElements.define("readone-page", ReadOne);