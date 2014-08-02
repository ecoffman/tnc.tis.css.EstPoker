if (EstPoker == null || typeof (EstPoker) != "object") { var EstPoker = new Object(); }

EstPoker.Room = {};

EstPoker.Room.UserCount = 1;
EstPoker.Room.Cards = null;


EstPoker.Room.SetCardChoices = function (cards) {
    $.each(cards, function (idx) {
        var crd = $("<div class='cardChoice'>" + cards[idx] + "</div>");
        $("#cardChoices").append(crd);
    });
}

EstPoker.Room.Initialize = function () {
    // Event handlers

    // Card Setup
    if (EstPoker.User.IsLeader)
        $("#CardSelectorContainer").fadeIn();

    // Cards to choose from
    EstPoker.Room.Cards = EstPoker.Cards.OneThruTen;
    EstPoker.Room.SetCardChoices(EstPoker.Room.Cards);
}
