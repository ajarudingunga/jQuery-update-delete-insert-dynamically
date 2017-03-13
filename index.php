<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Practice</title>

    <script type="text/javascript" src="jquery/jquery.js"></script>
    <script type="text/javascript" src="function.js"></script>
    <script type="text/javascript" src="formValidation.js"></script>
    <script type="text/javascript" src="jquery.validate.js"></script>

    <style media="screen">
        form .error {
        color: #ff0000;
        display: block;
        }
    </style>
  </head>
<script type="text/javascript">
$( document ).ready(function() {
  $("#addRaw").click(function(){
    $("#student_table").append("<tr><td><input name='new_name' type='text' id='new_name'></td> <td><input name='new_email' type='text' id='new_email'></td> <td><input name='new_mobileno' type='text' id='new_mobileno'></td>  <td><input type='button' value='SAVE' onclick='insert_row()'></td></tr>");
  });
});
</script>
<noscript>
    <div style="position: fixed; top: 0px; left: 0px; z-index: 3000;
                height: 100%; width: 100%; background-color: #FFFFFF">
        <p style="margin-left: 10px">JavaScript is not enabled.</p>
    </div>
</noscript>

<body>
<h1 align="center">AJAX,JQUERY,PHP</h1>

    <input type="button" id="addRaw" style="float:right;" value="New Record"/>

<form action="" name="editz" id="editz">
    <table id="student_table" border="1" cellpadding="10" align="center" style=" border-collapse: collapse;">
      <th>Name</th>
      <th>Email</th>
      <th>Mobile No</th>
      <th>Action</th>

      <?php
        require('dbConncetion.php');
        $selectQuery = mysqli_query($con, "SELECT * FROM `student`");
        while ($row=mysqli_fetch_array($selectQuery)) {
            ?>
      <tr id="row<?php echo $row['id']; ?>">
        <td id="name_val<?php echo $row['id']; ?>"><?php echo $row['student_name']; ?></td>
        <td id="email_val<?php echo $row['id']; ?>"><?php echo $row['student_email']; ?></td>
        <td id="mobileno_val<?php echo $row['id']; ?>"><?php echo $row['student_mobileno']; ?></td>

        <td>
         <input type="button" class="edit_button" id="edit_button<?php echo $row['id']; ?>" value="EDIT" onclick="edit_row('<?php echo $row['id']; ?>');">
         <input style="display:none;" type="button" class="save_button" id="save_button<?php echo $row['id']; ?>" value="SAVE" onclick="save_row('<?php echo $row['id']; ?>');">
         <input type="button" class="delete_button" id="delete_button<?php echo $row['id']; ?>" value="DELETE" onclick="delete_row('<?php echo $row['id']; ?>');">
         <input style="display:none;" type="button" class="cancel_button" id="cancel_button<?php echo $row['id']; ?>" value="CANCEL" onclick="cancel_row('<?php echo $row['id']; ?>');">
        </td>
      </tr>
      <?php
        }
       ?>
    </table>
  </form>
  </body>
</html>
