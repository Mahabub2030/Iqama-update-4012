 $(document).ready(function() {

     var table = $('#example').DataTable({
    
       buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
         });
    
        table.buttons().container()
        .appendTo('#example_wrapper .col-md-6:eq(0)');
    });