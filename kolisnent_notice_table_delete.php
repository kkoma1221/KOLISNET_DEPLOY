<?
    include_once('./kolisnet_header.php');

    $idx            = $_POST['idx']; 

    $sql = "DELETE FROM kolisnet_notice_table 
            WHERE idx = '$idx'"; 
    $result = mysqli_query($conn,$sql);
    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>