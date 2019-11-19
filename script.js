var point = 0;
var increase = 1;
var multiplier = 10;
var progress = 0;
var holder = 0;

$("#point").text(point);
$(".content").hide();

$("#cookie").click(function() {
    point = point + increase;
    progress = progress + 1;
    $("#point").text(point);
    $("#cookie").css("width", "90px");
    setTimeout(function() {
        $("#cookie").css("width", "100px");
    }, 100);
    $("#progress").attr("value", progress);
    if (progress >= 100) {
        mutiplyBy10();
    }
});

$(".shop").hover(function() {
    if ($(".content").is(':visible')) {
        $(".content").slideUp();
    } else {
        $(".content").slideDown();
    }
});

$("#item1").click(function() {
    if (point >= multiplier) {
        point = point - multiplier;
        increase = increase * 2;
        multiplier = multiplier * increase;
        $("#point").text(point);
        $("#item1Text").text(`Multiplier - ${multiplier} points`);
    } else {
        alert("Not enough points to purchase!");
    }
});

$("#item2").click(function() {
    if (point >= 100) {
    $("#cookie").attr("src", $("#item2").attr("src"));
    }
    buy(point, 100);
});

$("#item3").click(function() {
    if (point >= 120) {
    $("#cookie").attr("src", $("#item3").attr("src"));
    }
    buy(point, 120);
});

$("#item4").click(function() {
    buy(point, 140);
});

$("#item5").click(function() {
    buy(point, 160);
});

function buy(money, cost) {
    if (money >= cost) {
        point = point - cost;
        $("#point").text(point);
    } else {
        alert("Not enough points to purchase!");
    }
}

function mutiplyBy10() {
    alert("10x multiplier for 10 seconds!");
    progress = 0;
    $("#progress").attr("value", progress);
    holder = increase;
    increase = increase * 10;
    setTimeout(function() {
        increase = holder;
    }, 10000);
}