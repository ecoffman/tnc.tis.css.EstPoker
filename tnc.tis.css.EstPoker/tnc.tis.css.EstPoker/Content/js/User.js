if (EstPoker == null || typeof (EstPoker) != "object") { var EstPoker = new Object(); }

EstPoker.User = {};

EstPoker.User.IsLeader = true;

EstPoker.User.Name = "Anonymous";

$("#nameSave").click(function (e) {
    e.preventDefault();
    EstPoker.User.Name = $("#userName").val();
    $("#currentUserName").text(EstPoker.User.Name);
});
$("#nameSave").click();
