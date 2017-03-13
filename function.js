function edit_row(id) {

    window.name = document.getElementById('name_val' + id).innerHTML;
    window.email = document.getElementById('email_val' + id).innerHTML;
    window.mobileno = document.getElementById('mobileno_val' + id).innerHTML;

    document.getElementById('name_val' + id).innerHTML = "<input name='new_name' type='text' id='name_text"+id+"' value='" + name + "'>";
    document.getElementById('email_val' + id).innerHTML = "<input name='new_email' type='text' id='email_text"+id+"' value='" + email + "'>";
    document.getElementById('mobileno_val' + id).innerHTML = "<input name='new_mobileno' type='text' id='mobileno_text"+id+"' value='" + mobileno + "'>";

    document.getElementById('edit_button' + id).style.display = "none";
    document.getElementById('delete_button' + id).style.display = "none";
    document.getElementById("save_button" + id).style.display = "inline";
    document.getElementById("cancel_button" + id).style.display = "inline";
}
function cancel_row(id)
{
  document.getElementById("name_val"+id).innerHTML=name;
  document.getElementById("email_val"+id).innerHTML=email;
  document.getElementById("mobileno_val"+id).innerHTML=mobileno;
  document.getElementById("save_button"+id).style.display="none";
  document.getElementById("cancel_button" + id).style.display = "none";
  document.getElementById("edit_button"+id).style.display="inline";
  document.getElementById("delete_button"+id).style.display="inline";
}

function getPrint(){

}

function save_row(id){
  if ($("#editz").valid()) {


  var name = document.getElementById('name_text'+id).value;
  var email = document.getElementById('email_text'+id).value;
  var mobileno = document.getElementById('mobileno_text'+id).value;

  $.ajax({
    type:'POST',
    url:'modifyRecords.php',
    data:{
      row_id: id,
      edit_row:'edit_row',
      name_val:name,
      email_val:email,
      mobileno_val:mobileno
    },
    success:function (response) {
      document.getElementById("name_val"+id).innerHTML=name;
      document.getElementById("email_val"+id).innerHTML=email;
      document.getElementById("mobileno_val"+id).innerHTML=mobileno;
      document.getElementById("save_button"+id).style.display="none";
      document.getElementById("cancel_button" + id).style.display = "none";
      document.getElementById("edit_button"+id).style.display="inline";
      document.getElementById("delete_button"+id).style.display="inline";
    }
  });
}
}

function delete_row(id) {

  if ( confirm("Are you Sure ?","DELETE") ==  true) {

    $.ajax({
      type:'POST',
      url:'modifyRecords.php',
      data:{
        delete_row:'delete_row',
        row_id: id
      },
        success : function(response){
            if (response=="success") {
              var row=document.getElementById("row"+id);
              row.parentNode.removeChild(row);
            }
          }
    });
}
}

function insert_row() {

if ($("#editz").valid()) {

    var name = document.getElementById('new_name').value;
    var email = document.getElementById('new_email').value;
    var mobileno = document.getElementById('new_mobileno').value;
    $.ajax({
        type: 'POST',
        url: 'modifyRecords.php',
        data: {
            insert_row: 'insert_row',
            name_val: name,
            email_val: email,
            mobileno_val: mobileno
        },
        success: function(response) {
            if (response != "") {

                var id = response;
                $('#student_table tr:last').remove();

                $("#student_table").append("<tr id='row" + id + "'><td id='name_val" + id + "'>" + name + "</td><td id='email_val" + id + "'>" + email + "</td><td id='mobileno_val" + id + "'>" + mobileno + "</td><td><input type='button' class='edit_button' id='edit_button" + id + "' value='EDIT' onclick='edit_row(" + id + ");'/><input type='button' class='save_button' id='save_button" + id + "' value='SAVE' style='display:none;' onclick='save_row(" + id + ");'/> <input type='button' class='delete_button' id='delete_button" + id + "' value='DELETE' onclick='delete_row(" + id + ");'/></td></tr>");

                // var table = document.getElementById("student_table");
                // var table_len = (table.rows.length) - 1;
                // var row = table.insertRow(table_len).outerHTML = "<tr id='row" + id + "'><td id='name_val" + id + "'>" + name + "</td><td id='email_val" + id + "'>" + email + "</td><td id='mobileno_val" + id + "'>" + mobileno + "</td><td><input type='button' class='edit_button' id='edit_button" + id + "' value='EDIT' onclick='edit_row(" + id + ");'/><input type='button' class='save_button' id='save_button" + id + "' value='SAVE' style='display:none;' onclick='save_row(" + id + ");'/><input type='button' class='delete_button' id='delete_button" + id + "' value='DELETE' onclick='delete_row(" + id + ");'/></td></tr>";

                // document.getElementById("new_name").value = "";
                // document.getElementById("new_email").value = "";
                // document.getElementById("new_mobileno").value = "";

            }
        }
    });

    }
}
