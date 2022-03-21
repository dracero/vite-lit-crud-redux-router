//para test del CRUD https://gorest.co.in/
import { LitElement, html } from "lit";
import { router } from "lit-element-router";
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';

//Components
import "./components/navigation/nav-link.component";
import "./components/header/header.component";
import "./router-outlet";

//pages
import "./pages/home/home.page";
import "./pages/create/create";
import "./pages/reader/reader";
import "./pages/readOne/readOne";

class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "reader",
        pattern: "reader",
      },
      {
        name: "create",
        pattern: "create",
      },
      {
        name: "readOne",
        pattern: "readOne",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    console.log(route, params, query, data);
  }

  render() {
    return html`
      <app-header></app-header>
      <div class="nav-container">
      <mwc-list activatable> 
         <nav-link href="/">
           <mwc-list-item>
             Home
           </mwc-list-item>
          </nav-link>
          <nav-link href="/create">
           <mwc-list-item> 
            Create
           </mwc-list-item>  
          </nav-link>
         <nav-link href="/reader">
          <mwc-list-item>  
             Read Data
          </mwc-list-item>
          </nav-link>
          <nav-link href="/readOne">
          <mwc-list-item>  
             Read By Email
          </mwc-list-item>
          </nav-link>
       </mwc-list>   
      </div>

      <router-outlet active-route=${this.route}>
        <home-page route="home"></home-page>
        <reader-page route="reader"></reader-page>
        <create-page route="create"></create-page>
        <readone-page route="readOne"></readone-page>
        <h1 route="not-found">Not Found</h1>
      </router-outlet>
    `;
  }
}

customElements.define("app-container", App);