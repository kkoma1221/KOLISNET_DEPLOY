<?
    include_once('./kolisnet_header.php');

    $userId = 'guon599';

    $SQL = "SELECT * FROM kolisnet_cart_table
            WHERE userId='$userId'
            ORDER BY bookRegisterDate DESC";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res) > 0){
        $arr = array();
        while($row = mysqli_fetch_array($res)){
            array_push($arr, array(
                'bookType' => $row['bookType'],
                'bookSubject' => $row['bookSubject'],
                'bookTitle' => htmlspecialchars($row['bookTitle'], ENT_QUOTES),
                'bookWriter' => $row['bookWriter'],
                'bookjuki' => htmlspecialchars($row['bookjuki'], ENT_QUOTES),
                'bookYear' => $row['bookYear'],
                'bookPublisher' => $row['bookPublisher'],
                'bookSortNum' => $row['bookSortNum'],
                'bookCopyright' => $row['bookCopyright'],
                'bookStandardNum' => htmlspecialchars($row['bookStandardNum'], ENT_QUOTES),
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