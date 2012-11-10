$(document).ready(function() {
    var drawboard = $("#drawBoard").sdrawboard({

        lineColor: '#AFFFD8',
        lineWidth: 5,
        tools:$("#tools"),
        toData: function (data) { console.log("getData" + data) }
    });
});
