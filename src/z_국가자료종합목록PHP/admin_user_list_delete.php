<?
    include_once('./kolisnet_header.php');

    $adminId = $_POST['adminId'];

    $SQL = "DELETE FROM admin_kolisnet_table WHERE adminId='$adminId'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>