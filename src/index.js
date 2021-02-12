const form = document.querySelector('#form');
const spass = /^[/:.A-z0-9]*((-|\s)*[/:.A-z0-9])*$/;
var a = false;
var b = false;
var c = false;
var d = false;
var k = false;
var f = false;


let in1 = form.elements.namedItem("in1");
let in2 = form.elements.namedItem("in2");
let in3 = form.elements.namedItem("in3");
let in4 = form.elements.namedItem("in4");
let in5 = form.elements.namedItem("in5");
let in6 = form.elements.namedItem("in6");


in1.addEventListener('input', validate);
in2.addEventListener('input', validate);
in3.addEventListener('input', validate);
in4.addEventListener('input', validate);
in5.addEventListener('input', validate);
in6.addEventListener('input', validate);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (a && b && c && d && k && f) {
        alert('Done');
        return true;
    }
    else {
        alert('All fields are not filled,or invalid');
    }
    console.log(a, b, c, d, k, f)
});

function validate(e) {
    //console.log(e.target.value[0])
    if (e.target.name == "in1") {
        if (spass.test(e.target.value) && e.target.value.length > 4 && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.remove('ele');
            e.target.classList.add('elev');
            a = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            a = false
        }
    }

    if (e.target.name == "in2") {
        if (spass.test(e.target.value) && e.target.value.length > 4 && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.add('elev');
            e.target.classList.remove('ele');
            b = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            b = false;
        }
    }

    if (e.target.name == "in3") {
        if (spass.test(e.target.value) && e.target.value.length > 4 && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.add('elev');
            e.target.classList.remove('ele');
            c = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            c = false;
        }
    }

    if (e.target.name == "in4") {
        if (spass.test(e.target.value) && e.target.value.length > 4 && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.add('elev');
            e.target.classList.remove('ele');
            d = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            d = false;
        }
    }

    if (e.target.name == "in5") {
        if (spass.test(e.target.value) && e.target.value.length > 4 && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.add('elev');
            e.target.classList.remove('ele');
            k = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            k = false;
        }
    }

    if (e.target.name === "in6") {
        if (spass.test(e.target.value) && e.target.value[0] !== "+" && e.target.value[0] !== "-" && e.target.value[0] !== "_") {
            //console.log(e.target.classList)
            e.target.classList.add('elev');
            e.target.classList.remove('ele');
            f = true;
        } else {
            e.target.classList.add('ele');
            e.target.classList.remove('elev');
            f = false;
        }
    }
}