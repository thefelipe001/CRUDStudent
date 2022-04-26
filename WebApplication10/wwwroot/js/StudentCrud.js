
//Class
class Students {
    constructor(ID, LastName, FirstMidName, EnrollmentDate, Secret) {
        this.ID = ID;
        this.LastName = LastName;
        this.FirstMidName = FirstMidName;
        this.EnrollmentDate = EnrollmentDate;
        this.Secret = Secret;
    }
}

//Save
const students = new Students();

function SaveAll()
{
    if (validation() == true) {
        $.ajax({
            url: "/Students/Save",
            type: "POST",
            data: { "studentsViewModels": students },
            success: function (data) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: data.Msg,
                    showConfirmButton: false,
                    timer: 1500
                });
            },
            failure: function () {

            },
            error: function (data) {

            }


        });
    }
   

}


//Validation
function validation()
{
    var result = true;
    students.ID = $("#ID").val();
    students.LastName = $("#LastName").val();
    students.FirstMidName = $("#FirstMidName").val();
    students.EnrollmentDate = $("#EnrollmentDate").val();
    students.Secret = $("#Secret").val();
    if (students.ID === "" || students.ID === undefined) {

        Swal.fire({
            icon: 'error',
            title: 'Oops Campo Vacio',
            text: 'Debe llenar el Campo ID '
        });
        return result = false;

    }
    if (students.LastName === "" || students.LastName === undefined) {

        Swal.fire({
            icon: 'error',
            title: 'Oops Campo Vacio',
            text: 'Debe llenar el Campo LastName '
        });
        return result = false;

    }
    if (students.FirstMidName === "" || students.FirstMidName === undefined) {

        Swal.fire({
            icon: 'error',
            title: 'Oops Campo Vacio',
            text: 'Debe llenar el Campo FirstMidName '
        });
        return result = false;

    }
    if (students.EnrollmentDate === "" || students.EnrollmentDate === undefined) {

        Swal.fire({
            icon: 'error',
            title: 'Oops Campo Vacio',
            text: 'Debe llenar el Campo EnrollmentDate '
        });
        return result = false;

    }
    if (students.Secret === "" || students.Secret === undefined) {

        Swal.fire({
            icon: 'error',
            title: 'Oops Campo Vacio',
            text: 'Debe llenar el Campo Secret '
        });
        return result = false;

    }
    return result = true;

}