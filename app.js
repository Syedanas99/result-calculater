let deta = obtainmarks * 100 / 800
let persentage = deta;




function result() {
    console.log(persentage)
    let num = document.getElementById("input").value

    document.getElementById("result").innerHTML
    if (num > 80 && num < 90) {

        document.getElementById("result").innerHTML = "top marks"
    }
    else if (num > 70 && num < 80) {

        document.getElementById("result").innerHTML = "A ONE GREADE"
    }
    else if (num > 60 && num < 70) {

        document.getElementById("result").innerHTML = " B GREADE"
    }
    else if (num > 50 && num < 60) {

        document.getElementById("result").innerHTML = " C GREADE"
    } else {

        document.getElementById("result").innerHTML = " OPPS FAIL"
    }

    let result = document.getElementById("para").innerHTML = num

    // let deta = document.getElementById("result").innerHTML = 



}