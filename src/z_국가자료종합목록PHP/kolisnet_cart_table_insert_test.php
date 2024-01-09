<?
    include_once('./kolisnet_header.php');

    $userId = 'guon599';
    $cartBookType = '일반도서';
    $cartBookSubject = '사회과학';
    $cartBookTitle = '인디아더존스';
    $cartBookWriter = '이사랑';
    $cartBookjuki = '등저: 조영태, 장대익, 민 영, 이수정';
    $cartBookYear = '2023';
    $cartBookPublisher = '염운옥';
    $cartBookSortNum = '334';
    $cartBookCopyright = 'UW20231875178';
    $cartBookStandardNum = 'ISBN 979-11-88635-86-3 03100';
    $cartBookPrice = 19500;
    $cartBookPage = 300;
    $cartBookLanguage = 'Korean';
    $cartBookStore = '오프라인';
    $cartBookLibrary = '대학도서관소장자료';
    $cartBookOtherLibrary = 'YES';

    $SQL = "INSERT INTO kolisnet_cart_table (userId,cartBookType,cartBookSubject,cartBookTitle,cartBookWriter,cartBookjuki,cartBookYear,cartBookPublisher,cartBookSortNum,cartBookCopyright,cartBookStandardNum,cartBookPrice,cartBookPage,cartBookLanguage,cartBookStore,cartBookLibrary,cartBookOtherLibrary)
            VALUES ('$userId','$cartBookType','$cartBookSubject','$cartBookTitle','$cartBookWriter','$cartBookjuki','$cartBookYear','$cartBookPublisher','$cartBookSortNum','$cartBookCopyright','$cartBookStandardNum','$cartBookPrice','$cartBookPage','$cartBookLanguage','$cartBookStore','$cartBookLibrary','$cartBookOtherLibrary')";
    
    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>