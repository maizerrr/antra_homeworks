export const View = (() => {
    const render = (e, content) => {
        e.innerHTML = content;
    };

    const card = (user) => {
        return `
            <div class="col-lg-6 col-sm-12">
                <div class="row border rounded p-3 m-2 align-items-center">
                    <div class="col-3">
                        <img class="img-fluid" src=${user.picture} />
                    </div>
                    <div class="col-9">
                        <p>
                            name: ${user.name}
                            <br>
                            email: ${user.email}
                            <br>
                            phone: ${user.phone}
                        </p>
                        <p id=${user.id+'text'} style="display: none">Birthday: ${user.dob}</p>
                        <button id=${user.id+'btn'} class="btn btn-outline-black btn-small">Show Dob</btn>
                    </div>
                </div>
            </div>
        `
    }

    return {
        render,
        card
    };
})();