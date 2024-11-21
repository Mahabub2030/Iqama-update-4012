// $(document).ready(function() {

//     var table = $('#example').DataTable({

//         buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
//     });

//     table.buttons().container()
//     .appendTo('#example_wrapper .col-md-6:eq(0)');
// });

// Random
// $(document).ready(function() {
//     var table = $('#example').DataTable({
//         buttons: ['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove'],
//         columnDefs: [
//             // Define column rendering for the C4 column
//             {
//                 targets: 3, // Index of the C4 column (zero-based)
//                 render: function(data, type, row, meta) {
//                     // Parse the expiration date from the data
//                     var expirationDate = new Date(data);
//                     // Get the current date
//                     var currentDate = new Date();
//                     // Check if expiration date is near (within 7 days)
//                     if (expirationDate - currentDate < 7 * 24 * 60 * 60 * 1000 && expirationDate - currentDate > 0) {
//                         // Return the data with a CSS class for highlighting
//                         return '<div class="near-expiry">' + data + '</div>';
//                     } else {
//                         // Return the data as is
//                         return data;
//                     }
//                 }
//             }
//         ]
//     });

//     // Move buttons container to desired location
//     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
// });




// good code for me

// / $(document).ready(function () {
    //     function updateDaysRemaining() {
    //         $(".countdown-daco-expire").each(function () {
    //             var dacoValidText = $(this).closest("tr").find(".Daco-valid").text();
    //             var dacoValidDate = new Date(dacoValidText);
    //             if (isNaN(dacoValidDate.getTime())) {
    //                 $(this).text("Invalid").addClass("text-danger").removeClass("text-success");
    //             } else {
    //                 var currentDate = new Date();
    //                 var diffInMilliseconds = dacoValidDate.getTime() - currentDate.getTime();
    //                 var diffInDays = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
    //                 $(this).text(diffInDays);
    //                 if (diffInDays <= 0) {
    //                     $(this).addClass("text-danger").removeClass("text-success");
    //                 } else {
    //                     $(this).addClass("text-success").removeClass("text-danger");
    //                 }
    //             }
    //         });

    //         $(".countdown-iqama-expire").each(function () {
    //             var iqamaValidText = $(this).closest("tr").find(".iqama-valid").text();
    //             var iqamaValidDate = new Date(iqamaValidText);
    //             if (isNaN(iqamaValidDate.getTime())) {
    //                 $(this).text("Invalid").addClass("text-danger").removeClass("text-success");
    //             } else {
    //                 var currentDate = new Date();
    //                 var diffInMilliseconds = iqamaValidDate.getTime() - currentDate.getTime();
    //                 var diffInDays = Math.ceil(diffInMilliseconds / (1000 * 3600 * 24));
    //                 $(this).text(diffInDays);
    //                 if (diffInDays <= 0) {
    //                     $(this).addClass("text-danger").removeClass("text-success");
    //                 } else {
    //                     $(this).addClass("text-success").removeClass("text-danger");
    //                 }
    //             }
    //         });
    //     }

    //     function bindContentEditableEvents() {
    //         $("td[contenteditable='true']").on("blur keyup paste input", function () {
    //             updateDaysRemaining();
    //         });
    //     }

    //     updateDaysRemaining();
    //     bindContentEditableEvents();
    //     setInterval(updateDaysRemaining, 86400000); // Update every 24 hours

    //     // Initialize DataTable with buttons
    //     var table = $('#example').DataTable({
    //         buttons: ['copy', 'csv', 'excel', 'pdf', 'print']
    //     });

    //     // Move buttons container to desired location
    //     table.buttons().container().appendTo('#example_wrapper .col-md-6:eq(0)');
    // });



    // ///exjame code

   



  
    


