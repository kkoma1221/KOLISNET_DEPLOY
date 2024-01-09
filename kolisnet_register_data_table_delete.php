<?
    include_once('./kolisnet_header.php');

    $bookCopyright = $_POST['bookCopyright'];

    $SQL = "DELETE FROM kolisnet_register_data_table WHERE bookCopyright='$bookCopyright'";

    $result = mysqli_query($conn, $SQL);

    if($result==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>