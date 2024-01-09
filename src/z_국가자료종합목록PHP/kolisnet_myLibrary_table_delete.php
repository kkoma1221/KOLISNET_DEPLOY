<?
    include_once('./kolisnet_header.php');

    $userId = $_POST['userId'];
    $bookCopyright = $_POST['bookCopyright'];

    $SQL = "DELETE FROM kolisnet_myLibrary_table WHERE userId='$userId' AND bookCopyright='$bookCopyright'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>