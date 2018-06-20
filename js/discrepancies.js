

var count2 = 0;
var start2;
var end2;    

    

function discrepanciesData() {

   var discrepancies_data=[
       {
        "date": "02/11/2017"
       },
       {
        "date": "03/11/2017"
       }, {
        "date": "04/11/2017"
       }, {
        "date": "02/11/2017"
       }, {
        "date": "02/11/2017"
       }, {
        "date": "02/11/2017"
       }, {
        "date": "02/11/2017"
       }
   ]

    var start2 = count2 > 0 ? 5 * count2 : count2;
    var end2 = start2 + 5;
    var strtable="";
    var i;
    var flag=0;
    $("#discrepanciesData").empty();

    for (i = start2; i < end2; i++) {
      if(i>=discrepancies_data.length){
         flag=1;
         break;
       }
      if(flag==0){
        
        strtable+="<div class='card'>"+"<div class='card-content card-content-padding'>"+"Discrepancies found on date "+discrepancies_data[i].date+"</div>"+"</div>";
        
        
        
      }
      console.log(discrepancies_data[i].Date);
       
    }

     if(strtable != ''){
            $("#discrepanciesData").append(strtable);
         }
    if(flag==1){
         $('#discrepanciesData').append("<div class='card-content card-content-padding'> No More Discrepencies</div>");
    }
     
    //  console.log(attendance_data.length);
       console.log(end);

       console.log(count);
       if(i<=discrepancies_data.length)
       {

        count2++;
     
       }
       console.log(count2);

}