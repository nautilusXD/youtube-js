import { ajax } from "./helpers/ajax.js";
import api from "./helpers/wp_api.js";

export function App() {
    document.getElementById("root").innerHTML = `<h1>Bienvenidos</h1>`;
}

ajax({
    url: api.POSTS,
    cbSuccess: (posts) => {

    }
});
