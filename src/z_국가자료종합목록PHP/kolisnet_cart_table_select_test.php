<?
    include_once('./kolisnet_header.php');

    $userId = 'guon599';

    $SQL = "SELECT * FROM kolisnet_cart_table
            WHERE userId='$userId'
            ORDER BY cartBookRegisterDate DESC";

    $res = mysqli_query($conn, $SQL);

    if(mysqli_num_rows($res) > 0){
        $arr = array();
        while($row = mysqli_fetch_array($res)){
            array_push($arr, array(
                'cartBookType' => $row['cartBookType'],
                'cartBookSubject' => $row['cartBookSubject'],
                'cartBookTitle' => htmlspecialchars($row['cartBookTitle'], ENT_QUOTES),
                'cartBookWriter' => $row['cartBookWriter'],
                'cartBookjuki' => htmlspecialchars($row['cartBookjuki'], ENT_QUOTES),
                'cartBookYear' => $row['cartBookYear'],
                'cartBookPublisher' => $row['cartBookPublisher'],
                'cartBookSortNum' => $row['cartBookSortNum'],
                'cartBookCopyright' => $row['cartBookCopyright'],
                'cartBookStandardNum' => htmlspecialchars($row['cartBookStandardNum'], ENT_QUOTES),
                'cartBookPrice' => $row['cartBookPrice'],
                'cartBookPage' => $row['cartBookPage'],
                'cartBookLanguage' => $row['cartBookLanguage'],
                'cartBookStore' => $row['cartBookStore'],
                'cartBookLibrary' => $row['cartBookLibrary'],
                'cartBookOtherLibrary' => $row['cartBookOtherLibrary'],
                'cartBookRegisterDate' => $row['cartBookRegisterDate']
            ));
        }
    }

    $json = json_encode($arr, JSON_UNESCAPED_UNICODE);
    echo $json;
?>