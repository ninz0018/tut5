$(document).on('submit','#grades',function(e){
    e.preventDefault();
    s = $("#subj").val();
    g = $("#gra").val();

    s1 = s[0];
    s1 = s1.toUpperCase();
    s = s1 + s.slice(1);    
   
    if(g>=75 && g<=89) {
        $("#rate").html(`<div>PASSED</div>`);
    }else if(g>100) {
        $("#rate").html(`<div>Invalid</div>`);
    }else if(g>=98 && g<=100) {
        $("#rate").html(`<div>With Highest Honor</div>`);
    }else if(g>=95 && g<=97) {
        $("#rate").html(`<div>Highest Honor</div>`);
    }else if(g>=90 && g<=94){
        $("#rate").html(`<div>With Honor</div>`);
    }else if(g<=74 && g>=65){
        $("#rate").html(`<div>Failed</div>`);
    }else {
        $("#rate").html(`<div>Invalid</div>`);
    }


    $("#sub1").html(`${s}`);

    gra = parseInt(g);

    $("#grad").html(`<div> ${gra}</div>`);

})
$(document).on('click','#clr',function(e){
    e.preventDefault();
    $("#subj").val("");
    $("#gra").val("");
})

