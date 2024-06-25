let i=0;

let task = () =>{
    document.write("i is now : ", i, "<br>")
    // document is html document and for new line in html we use <br> 
    i= i+1;
}


setInterval(task, 2000)
