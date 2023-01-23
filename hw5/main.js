const state = {
    a: "apple",
    b: "banana",
    c: "city",
    d: "dom",
    e: "end",
    f: "forEach",
    g: "gold"
}

function init() {
    let key = document.getElementById("key");
    let value = document.getElementById("value");
    let _state = {};
    for (const k of Object.keys(state)) {
        _state[state[k]] = k;
        let k_opt = document.createElement("option");
        let v_opt = document.createElement("option");
        k_opt.id = k_opt.value = k_opt.text = k;
        v_opt.id = v_opt.value = v_opt.text = state[k];
        key.append(k_opt);
        value.append(v_opt);
    }
    key.onchange = () => {
        let v_opt = document.getElementById(state[key.value]);
        v_opt.selected = true;
    }
    value.onchange = () => {
        let k_opt = document.getElementById(_state[value.value]);
        k_opt.selected = true;
    }
}

init();