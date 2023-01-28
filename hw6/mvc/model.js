import { View } from "./view.js";

const Api = (() => {
    const url = "https://randomuser.me/api/";

    const getUser = function(num) {
        let fetchArr = [];
        for (let i = 0; i < num; i++) {
            let req = fetch(url)
                .then(res => res.json())
                .then(res => {
                    if (res.results && res.results.length > 0) {
                        let user = res.results[0];
                        return {
                            "id": user.id.value,
                            "name": user.name.title + ' ' + user.name.last,
                            "email": user.email,
                            "phone": user.phone,
                            "dob": user.dob.date,
                            "picture": user.picture.large
                        };
                    } else {
                        return null;
                    }
                });
            fetchArr.push(req);
        }
        return Promise.all(fetchArr);
    };

    return {
        getUser
    };
})();


export const Model = ((api, view) => {
    const getUser = (e, num = 20) => {
        api.getUser(num)
            .then(users => {
                let ids = [];
                let content = "";
                for (let i = 0; i < users.length; i++) {
                    let user = users[i];
                    user.id = 'u'+i;
                    ids.push(user.id);
                    content += view.card(user);
                }
                view.render(e, content);
                return ids;
            })
            .then(ids => {
                for (const id of ids) {
                    let text = e.querySelector('#'+id+'text');
                    let btn = e.querySelector('#'+id+'btn');
                    if (text === null || btn === null) {
                        console.log(id+'not found');
                        continue;
                    }
                    text.onclick = btn.onclick = () => {
                        const isHidden = text.style.display == "none";
                        text.style.display = isHidden?"":"none";
                        btn.style.display = isHidden?"none":"";
                    };
                }
            });
    };

    return {
        getUser
    };
})(Api, View);