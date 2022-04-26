
//Get All
GetAll();
function GetAll() {
    var ID = $("#search").val();
    var paginate = $("#selectBox").val();
    $.ajax({
        type: "GET",
        url: "/Students/GetData",
        type: "Post",
        data: { CurrentFilter: ID, Page: paginate },
        cache: false,
        success: function (data) {
            $("td").remove();
            $("p").remove();
            if (data.recordTotal=== 0) {
                var rows = '<p class="Filter">'+"!!  ------------  Registro no Encontrado  -------------  !!"+'</p>' ;
                $('.Filter').append(rows);
            }
            $.each(data.data, function (i, item) {

                if (item.enrollmentDate == null) {
                    item.enrollmentDate = "";
                }
                var rows = "<tbody><tr>" +
                    '<td>' + item.id + '</td>' +
                    '<td>' + item.lastName + '</td>' +
                    '<td>' + item.firstMidName + '</td>' +
                    '<td>' + item.enrollmentDate + '</td>' +
                    '<td>' + item.secret + '</td>' +
                    "</tr></tbody>";


                $('#Table').append(rows);
            });
            var totalRegister = "<div>" + "<p id='total'>" + "Showing " + data.recordTotal + " to " + data.recordTotal + "</p> " + "</div > "
            $('.TotalRegister').append(totalRegister);
        },

        failure: function (data) {
            alert(data.responseText);
        },
        error: function (data) {
            alert(data.responseText);
        }

    });

}









  