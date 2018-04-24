$(document).ready(function(){
    $("#add-user").click(function(){

        var fname = "<td>" + $("form #fname").val() + "</td>";
        var lname = "<td>" + $("form #lname").val() + "</td>";
        var email = "<td>" + $("form #email").val() + "</td>";
        var contact = "<td>" + $("form #contact").val() + "</td>"; 

        $("table").append("<tr>"+ fname + lname + email + contact + "</tr>");
    });
});