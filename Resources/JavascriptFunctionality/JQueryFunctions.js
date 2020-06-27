 $(document).ready(function(){
     $("#input").on("keyup",function(){
         var inputValue = $(this).val().toLowerCase();

         
         $("#poemLists li a").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)

           
           
         })
     });
 });

// $(document).ready(function(){
//     $("#input").on("keyup",function(){
//         var inputValue = $(this).val().toLowerCase();

//        $("a[href*= inputValue]").css("color", "red");
           
      
//     });
// });


// $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1)

// return $(this).text().toLowerCase().indexOf(inputValue) > -1;

// .css("color", "red");