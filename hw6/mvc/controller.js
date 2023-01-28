import { Model } from "./model.js";
import { View } from "./view.js";

export const Controller = ((model, view) => {
    const init = () => {
        let e = document.getElementById("grid");
        if (e) {
            model.getUser(e);
        } else {
            console.log("500 internal error");
        }
    };

    return {
        init
    };
})(Model, View);