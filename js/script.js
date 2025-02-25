let btn = document.querySelector(".btn");

btn.addEventListener("click",function() {
    let output = document.querySelector(".output");
    let inputData = document.querySelector(".inputData").value;
    output.innerHTML = "";
    if (inputData === "") {
        output.innerHTML = "*Empty Field";
        output.classList.add("warning");
        return;
    }else if(isNaN(inputData)){
        output.innerHTML = "*Please enter a valid number <br> (Not granted any string or special characters)";
        output.classList.add("warning");
        return;
    }
    for(let i = 1; i <= 10; i++) {
        output.innerHTML += `<div class="margin-bottom: 20px;">${inputData} x ${i} = ${ inputData*i}</div><br>`;
        output.classList.remove("warning");
        output.classList.add("alignment");
    }
});