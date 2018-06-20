
 
    var count1 = 0;
    var start1;
    var end1;    
 var myApp = new Framework7();  
        
var $$ = Dom7;

    function leaveprevioustable() {

        var leave_data = [  
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"LWP",
			   "Opening":0.00,
			   "Availed":0.00,
			   "Closing":0.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"CO",
			   "Opening":9.00,
			   "Availed":2.00,
			   "Closing":7.00
			},
			{  
			   "__type":"Voith.eTimeRegister.Entities.LeaveBalance, Voith.eTimeRegister.Entities",
			   "GlobalID":"443986",
			   "LeaveType":"PL",
			   "Opening":35.50,
			   "Availed":3.50,
			   "Closing":46.41
			},
			
		 ]

        var start1 = count1 > 0 ? 5 * count1 : count1;
        var end1 = start1 + 5;
        var strtable="";
        var i;
        var flag=0;

        for (i = start1; i < end1; i++) {
          if(i>=leave_data.length){
             flag=1;
             break;
           }
         //   var str1=leave_data[i].LeaveType;
        	// var str2="PL";
         //    if(str1.localeCompare(str2)==0)
         // 		{
		          if(flag==0){
		            strtable+="<tr>";
		            strtable+="<td class='label-cell'>"+leave_data[i].LeaveType+"</td>";
		            strtable+="<td class='numeric-cell'>"+leave_data[i].Opening+"</td>";
					strtable+="<td class='numeric-cell'>"+leave_data[i].Availed+"</td>";
					strtable+="<td class='numeric-cell'>"+leave_data[i].Closing+"</td>";
		            strtable+="</tr>";
		         	console.log(strtable);
            		}
            
          		// }
          console.log(leave_data[i].LeaveType);
           
        }
        	
         if(strtable != " "){
         		
                	$("#leaveData").html(strtable);

             }
        if(flag==1){

 $('#leaveData').append("<div class='card-content card-content-padding'> No More Leaves</div>");
    }
         
        //  console.log(attendance_data.length);
           console.log(end);

           console.log(count);
           if(i<=leave_data.length)
           {

            count1++;
         
           }
           console.log(count1);

            var pickerDevice = myApp.picker({  
         input: '#picker-device',  
         cols: [  
            {  
               textAlign: 'center',  
               values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2',   
               'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3', 'iPhone 7', 'iPhone 7s', 'iPhone 8', 'iPhone X']  
            }  
         ]  
      });  

    }


  
 



