$(document).ready(function(){

    $("#submitButton").on("click",function(){
        var textArea = $("#inputArea").val().trim();
        $.ajax({
            url: '/api/add',
            type: 'POST',
            data: {burgerName: textArea},
            success: function(result) {
                location.reload()
            }
        });
        
    });
    $(".eat-button").on("click",function(){
        $.ajax({
            url: '/api/update',
            type: 'PUT',
            data: {id: $(this).attr("data-id"), },
            success: function(result) {
                location.reload()
            }
        });
        
    });
    $(".undo-button").on("click",function(){
        $.ajax({
            url: '/api/undo',
            type: 'PUT',
            data: {id: $(this).attr("data-id"), },
            success: function(result) {
                location.reload()
            }
        });
        
    });
    $(".delete-button").on("click",function(){
        // console.log("asd")
        $.ajax({
            url: '/api/delete',
            type: 'DELETE',
            data: {id: $(this).attr("data-id"), },
            success: function(result) {
                location.reload()
            }
        });
        
    });
});