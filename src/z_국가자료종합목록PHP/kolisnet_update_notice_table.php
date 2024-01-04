<?
    include_once('./kolisnet_header.php');

    $idx = $_POST['idx']; 

    $nSubject = str_replace( "'", "&apos;", $_POST['nSubject'] );
    $nContent = str_replace( "'", "&apos;", $_POST['nContent'] );

    $nSubject = str_replace( "\"", "&quot;", $nSubject );
    $nContent = str_replace( "\"", "&quot;", $nContent );

    $nSubject = str_replace( "<", "&lt;", $nSubject );
    $nContent = str_replace( "<", "&lt;", $nContent );

    $nSubject = str_replace( ">", "&gt;", $nSubject );
    $nContent = str_replace( ">", "&gt;", $nContent );


    $sql = "UPDATE kolisnet_notice_table 
            SET nSubject='$nSubject',nContent='$nContent'
            WHERE idx = '$idx'"; 
    $result = mysqli_query($conn,$sql);
    if($result===true){
        echo 1;
    }
    else{
        echo 0;
    }
?>