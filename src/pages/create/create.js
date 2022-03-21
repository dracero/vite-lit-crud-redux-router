import { LitElement, css, html } from "lit";
import '@material/mwc-button'
import '@material/mwc-textfield';
import '@material/mwc-formfield'

class Create extends LitElement {
  static get styles() {
    return [css``];
  }

  static get properties() {
    return {
             name: String,
             email: String,
             gender: String,
             status: String
    };
  }

  constructor() {
    super();
  }

  render() {
    return html` 
    <div>
      <h1>This is Create Page</h1>
         <mwc-textfield id="name" label="Enter Name" helper="The person's name" @change=${(event)=>{this.name=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="email" label="Enter Email" helper="The person's email" @change=${(event)=>{this.email=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="gender" label="Enter Gerder" helper="The person's gender" @change=${(event)=>{this.gender=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-textfield id="status" label="Enter Status" helper="The person's status" @change=${(event)=>{this.status=event.target.value}}></mwc-textfield>
         <p></p>
         <mwc-button slot=primaryAction dialogAction=yes raised @click=${this.fetchCreate}>Create</mwc-button>
    </div>`;
  }

  fetchCreate(){
     var myHeaders = new Headers();
     myHeaders.append("Authorization", "Bearer 0a85f0126790d4f1f65a226bce0141381878ad14f9e14df033ba84b61fadc575");
     myHeaders.append("Content-Type", "application/json");
     var raw = JSON.stringify({ 
                                name:this.name, 
                                gender:this.gender, 
                                email:this.email, 
                                status:this.status
                             });
    var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: raw,
                          redirect: 'follow'
                         };
    fetch("https://gorest.co.in/public/v2/users", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

     window.location.reload();
    }

 
}

customElements.define("create-page", Create);