// An event to handle the phone input filter  

// var a = document.querySelector("#phone");
// a.addEventListener("keyup", re = () => {
//     a.value = a.value.replace(/[\D]/gi, '');

// });

// main class for Objectify the user Data 


//password    123qwe!Q@

//            321 asdASD @

class User {
    constructor(uname, checkbox) {
        this.uname = uname;
        this.checkbox = checkbox;
    }
    validUname() {
        return /^[\w]{1,12}(\s[\w]{1,12})?$/i.test(this.uname)
    }

    allValid() { return this.validUname() && this.checkbox }

}



//   sample password 

//           123qwe!Q@



// An event to handle store in  by click 

function saveInLocal() {

    var items = document.querySelectorAll('input');

    // uname /checkbox 
    var list = [];

    for (var i = 0; i < items.length; i++) {
        if (!(i == items.length - 1)) {
            let item = items[i].value;
            list.push(item.trim());
        } else {
            list.push(items[i].checked);
        }
    }
    var newUser = new User(list[0], list[1]);

    if (!(newUser.allValid())) {
        var submitBtn = document.querySelector('#submit-btn');
        submitBtn.style = "background:red; cursor: not-allowed;pointer - events: none;color: #c0c0c0;"

    } else {
        var submitBtn = document.querySelector('#submit-btn');
        submitBtn.style = "background:#0D0463"
        localStorage.setItem("personObject", JSON.stringify(newUser));

    }

}

function saveInSession() {

    var items = document.querySelectorAll('input');

    // uname /checkbox 
    var list = [];

    for (var i = 0; i < items.length; i++) {
        if (!(i == items.length - 1)) {
            let item = items[i].value;
            list.push(item.trim());
        } else {
            list.push(items[i].checked);
        }
    }
    var newUser = new User(list[0], list[1]);

    if (!(newUser.allValid())) {
        var submitBtn = document.querySelector('#save-btn');
        submitBtn.style = "background:red; cursor: not-allowed;pointer - events: none;color: #c0c0c0;"


    } else {
        var submitBtn = document.querySelector('#save-btn');
        submitBtn.style = "background:#0D0463"

        sessionStorage.setItem("personObject", JSON.stringify(newUser));

    }

}

function claerFunc() {
    localStorage.clear();
    sessionStorage.clear();
}