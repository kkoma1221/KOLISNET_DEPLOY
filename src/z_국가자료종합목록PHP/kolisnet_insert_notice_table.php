<?
    include_once('./kolisnet_header.php');


    $nName = $_POST['nName'];
    $nId = $_POST['nId'];


    $nSubject = str_replace( "'", "&apos;", $_POST['nSubject'] );
    $nContent = str_replace( "'", "&apos;", $_POST['nContent'] );

    $nSubject = str_replace( "\"", "&quot;", $nSubject );
    $nContent = str_replace( "\"", "&quot;", $nContent );

    $nSubject = str_replace( "<", "&lt;", $nSubject );
    $nContent = str_replace( "<", "&lt;", $nContent );

    $nSubject = str_replace( ">", "&gt;", $nSubject );
    $nContent = str_replace( ">", "&gt;", $nContent );

    $nSubject = str_replace( " ", "&nbsp;", $nSubject );
    $nContent = str_replace( " ", "&nbsp;", $nContent ); 
    
    $nSubject = nl2br($nSubject);
    $nContent = nl2br($nContent);

    $SQL = "INSERT INTO kolisnet_notice_table (nSubject, nContent)
            VALUES ('$nSubject', '$nContent')";
    
    $result = mysqli_query($conn, $SQL);

    if($result==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>