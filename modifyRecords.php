<?php

require('dbConncetion.php');

if (isset($_POST['cancel_row'])) {

    $row_id=$_POST['row_id'];
    $selectQuery=mysqli_query($con, "SELECT * FROM `student` WHERE `id`='$row_id'");
    $row[]=mysqli_fetch_array($selectQuery);
    echo json_encode(array($row));
    exit();
}

if (isset($_POST['insert_row'])) {
    $name=$_POST['name_val'];
    $email=$_POST['email_val'];
    $mobileno=$_POST['mobileno_val'];

    mysqli_query($con, "INSERT INTO `student`(`id`, `student_name`, `student_email`, `student_mobileno`) VALUES (NULL,'$name','$email','$mobileno')");
    echo $con->insert_id;
    exit();
}

if (isset($_POST['delete_row'])) {
    $row_id=$_POST['row_id'];
    mysqli_query($con, "DELETE FROM `student` WHERE `id`= '$row_id'");
    echo "success";
    exit();
}

if (isset($_POST['edit_row'])) {

    $row_id=$_POST['row_id'];
    $name=$_POST['name_val'];
    $email=$_POST['email_val'];
    $mobileno=$_POST['mobileno_val'];

    mysqli_query($con,"UPDATE `student` SET `student_name`='$name',`student_email`='$email',`student_mobileno`='$mobileno' WHERE id='$row_id'");
    echo "success";
    exit();
}
