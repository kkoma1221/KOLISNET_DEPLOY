<?
    include_once('./kolisnet_header.php');

    $SQL = "SELECT * FROM kolisnet_register_data_table ORDER BY bookRegisterDate DESC";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res) > 0){
        $arr = array();
        while($row = mysqli_fetch_array($res)){
            array_push($arr, array(
                'bookType' => $row['bookType'],
                'bookSubject' => $row['bookSubject'],
                'bookTitle' => htmlspecialchars_decode($row['bookTitle'], ENT_QUOTES),
                'bookWriter' => $row['bookWriter'],
                'bookjuki' => htmlspecialchars_decode($row['bookjuki'], ENT_QUOTES),
                'bookYear' => $row['bookYear'],
                'bookPublisher' => $row['bookPublisher'],
                'bookSortNum' => $row['bookSortNum'],
                'bookCopyright' => $row['bookCopyright'],
                'bookStandardNum' => htmlspecialchars_decode($row['bookStandardNum'], ENT_QUOTES),
                'bookPrice' => $row['bookPrice'],
                'bookPage' => $row['bookPage'],
                'bookLanguage' => $row['bookLanguage'],
                'bookStore' => $row['bookStore'],
                'bookLibrary' => $row['bookLibrary'],
                'bookOtherLibrary' => $row['bookOtherLibrary'],
                'bookRegisterDate' => $row['bookRegisterDate']
            ));
        }
    }

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);

    echo $json;

?>