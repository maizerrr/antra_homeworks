function populateSignUp() {
    let wrapper = document.getElementById("table-wrapper");
    let container = document.createElement("div");
    let heading = document.createElement("h1");
    let form = document.createElement("form");
    let name = document.createElement("div");
    let firstNameCol = document.createElement("div");
    let firstNameInput = document.createElement("input");
    let lastNameCol = document.createElement("div");
    let lastNameInput = document.createElement("input");
    let mobile = document.createElement("div");
    let mobileCol = document.createElement("div")
    let mobileInput = document.createElement("input");
    let email = document.createElement("div");
    let emailCol = document.createElement("div");
    let emailInput = document.createElement("input");
    let pwd = document.createElement("div");
    let pwd1Col = document.createElement("div");
    let pwd1Input = document.createElement("input");
    let pwd2Col = document.createElement("div");
    let pwd2Input = document.createElement("input");
    let check = document.createElement("div");
    let checkCol = document.createElement("div");
    let checkCol2 = document.createElement("div");
    let checkInput = document.createElement("input");
    let checkLable = document.createElement("label");
    let checkInfo = document.createElement("span");
    let buttons = document.createElement("div");
    let btn1Col = document.createElement("div");
    let btn2Col = document.createElement("div");
    let btn1 = document.createElement("input");
    let btn2 = document.createElement("input");

    heading.innerHTML = "Sign Up";

    name.className = "form-group row";
    firstNameCol.className = "col-sm-6";
    firstNameInput.className = "form-control";
    firstNameInput.placeholder = "First Name";
    lastNameCol.className = "col-sm-6";
    lastNameInput.className = "form-control";
    lastNameInput.placeholder = "Last Name";
    firstNameCol.append(firstNameInput);
    lastNameCol.append(lastNameInput);
    name.append(firstNameCol);
    name.append(lastNameCol);
    
    mobile.className = "form-group row";
    mobileCol.className = "col-sm-12";
    mobileInput.className = "form-control";
    mobileInput.placeholder = "Mobile No.";
    mobileCol.append(mobileInput);
    mobile.append(mobileCol);
    
    email.className = "form-group row";
    emailCol.className = "col-sm-12";
    emailInput.className = "form-control";
    emailInput.placeholder = "Email Address";
    emailCol.append(emailInput);
    email.append(emailCol);
    
    pwd.className = "form-group row";
    pwd1Col.className = "col-sm-6";
    pwd2Col.className = "col-sm-6";
    pwd1Input.className = "form-control";
    pwd1Input.placeholder = "Password";
    pwd2Input.className = "form-control";
    pwd2Input.placeholder = "Confirm Password";
    pwd1Col.append(pwd1Input);
    pwd2Col.append(pwd2Input);
    pwd.append(pwd1Col);
    pwd.append(pwd2Col);

    check.className = "form-group row";
    checkCol.className = "form-check col-sm-4";
    checkInput.className = "form-check-input";
    checkInput.type = "checkbox";
    checkInput.id = "checkInput";
    checkLable.className = "form-check-label";
    checkLable.for = "checkInput";
    checkLable.innerHTML = "I Agree";
    checkCol2.className = "text-left col-sm-8";
    let checkInfoContent1 = document.createElement("btn");
    let checkInfoContent2 = document.createElement("a");
    let checkInfoContent3 = document.createTextNode("By clicking ");
    let checkInfoContent4 = document.createTextNode(", you agree to the ");
    let checkInfoContent5 = document.createTextNode(" set out by this site, including our Cookie Use.");
    checkInfoContent1.innerHTML = "Register";
    checkInfoContent1.className = "text-white small font-weight-bold bg-primary rounded p-1";
    checkInfoContent2.innerHTML = "Terms and Conditions";
    checkInfoContent2.href = "index.html";
    checkInfo.appendChild(checkInfoContent3);
    checkInfo.appendChild(checkInfoContent1);
    checkInfo.appendChild(checkInfoContent4);
    checkInfo.appendChild(checkInfoContent2);
    checkInfo.appendChild(checkInfoContent5);
    checkCol.append(checkInput);
    checkCol.append(checkLable);
    checkCol2.append(checkInfo);
    check.append(checkCol);
    check.append(checkCol2);

    buttons.className = "form-group row justify-content-center";
    btn1Col.className = "col-sm-6 mb-3 mb-md-0";
    btn2Col.className = "col-sm-6 mb-3 mb-md-0";
    btn1.className = "btn btn-primary btn-block";
    btn1.type = "button";
    btn1.value = "Register";
    btn1.onclick = () => { alert("Info sent") };
    btn2.className = "btn btn-success btn-block";
    btn2.type = "button";
    btn2.value = "Sign in";
    btn2.onclick = () => populateLogin();
    btn1Col.append(btn1);
    btn2Col.append(btn2);
    buttons.append(btn1Col);
    buttons.append(btn2Col);

    form.append(name);
    form.append(mobile);
    form.append(email);
    form.append(pwd);
    form.append(check);
    form.append(buttons);
    container.className = "container text-center";
    container.append(heading);
    container.append(form);

    wrapper.textContent = "";
    wrapper.append(container);
}

function populateLogin() {
    let wrapper = document.getElementById("table-wrapper");
    let container = document.createElement("div");
    let heading = document.createElement("h1");
    let form = document.createElement("form");
    let email = document.createElement("div");
    let emailCol = document.createElement("div");
    let emailInput = document.createElement("input");
    let pwd = document.createElement("div");
    let pwd1Col = document.createElement("div");
    let pwd1Input = document.createElement("input");
    let buttons = document.createElement("div");
    let btn1Col = document.createElement("div");
    let btn2Col = document.createElement("div");
    let btn1 = document.createElement("input");
    let btn2 = document.createElement("input");

    heading.innerHTML = "Login";
    
    email.className = "form-group row";
    emailCol.className = "col-sm-12";
    emailInput.className = "form-control";
    emailInput.placeholder = "Email Address";
    emailCol.append(emailInput);
    email.append(emailCol);
    
    pwd.className = "form-group row";
    pwd1Col.className = "col-sm-12";
    pwd1Input.className = "form-control";
    pwd1Input.placeholder = "Password";
    pwd1Col.append(pwd1Input);
    pwd.append(pwd1Col);

    buttons.className = "form-group row justify-content-center";
    btn1Col.className = "col-sm-6 mb-3 mb-md-0";
    btn2Col.className = "col-sm-6 mb-3 mb-md-0";
    btn1.className = "btn btn-primary btn-block";
    btn1.type = "button";
    btn1.value = "Register";
    btn1.onclick = () => populateSignUp();
    btn2.className = "btn btn-success btn-block";
    btn2.type = "button";
    btn2.value = "Sign in";
    btn2.onclick = () => { alert("Info sent") };
    btn1Col.append(btn1);
    btn2Col.append(btn2);
    buttons.append(btn1Col);
    buttons.append(btn2Col);

    form.append(email);
    form.append(pwd);
    form.append(buttons);
    container.className = "container text-center";
    container.append(heading);
    container.append(form);

    wrapper.textContent = "";
    wrapper.append(container);
}

function populateNav() {
    let ul = document.createElement("ul");
    let links = [["Signup", populateSignUp], ["Login", populateLogin]];
    for (const link of links) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.innerHTML = link[0];
        a.onclick = link[1];
        li.append(a);
        ul.append(li);
        li.className = "nav-item";
        a.className = "nav-link";
    }
    ul.className = "navbar-nav";
    let nav = document.getElementById("nav-wrapper");
    nav.textContent = '';
    nav.append(ul);
}

function init() {
    populateNav();
    populateSignUp();
}

// initialize the window
init()