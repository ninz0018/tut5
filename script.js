$(document).on('submit','#grades',function(e){
    e.preventDefault();
    let s = $("#subj").val();
    let g = $("#gra").val();
    let s1 = $("#sub1").val();
    let s2 = $("#none").val();
    let k = "";

    if (s == s2 || g == k) {
        alert("Select Subject or Enter Grade!!")
    }else {
     
        if(g>100) {
            $("#rate").append(`<div>Invalid</div>`);
        }else if(g>=98) {
            $("#rate").append(`<div>With Highest Honor</div>`);
        }else if(g>=95) {
            $("#rate").append(`<div>Highest Honor</div>`);
        }else if(g>=90){
            $("#rate").append(`<div>With Honor</div>`);
        }else if(g>=75) {
                $("#rate").append(`<div>PASSED</div>`);   
        }else if(g<=74){
            $("#rate").append(`<div>Failed</div>`);
        }else {
            $("#rate").append(`<div>Invalid</div>`);
        }
        
        
        $("#sub1").append(`<div>${s}</div>`);
        
        gra = parseInt(g);
        
        $("#grad").append(`<div> ${gra}</div>`);
    }
    
})
$(document).on('click','#clr',function(e){
    e.preventDefault();
    let c = $("#none").val();
    $("#subj").val(c);
    $("#gra").val("");
})
$(document).on('click','#clrn',function(g) {
    g.preventDefault();
    $("#names").val("");
})
$(document).on('click','#clres',function(a) {
    a.preventDefault();
    $("#sub1").html("");
    $("#grad").html("");
    $("#rate").html("");
})