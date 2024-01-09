<?
    include_once('./kolisnet_header.php');

    $userId = 'guon599';
    $bookType = '일반도서';
    $bookSubject = '사회과학';
    $bookTitle = '인디아더존스';
    $bookWriter = '이사랑';
    $bookjuki = '등저: 조영태, 장대익, 민 영, 이수정';
    $bookYear = '2023';
    $bookPublisher = '염운옥';
    $bookSortNum = '334';
    $bookCopyright = 'UW20231875178';
    $bookStandardNum = 'ISBN 979-11-88635-86-3 03100';
    $bookPrice = 19500;
    $bookPage = 300;
    $bookLanguage = 'Korean';
    $bookStore = '오프라인';
    $bookLibrary = '대학도서관소장자료';
    $bookOtherLibrary = 'YES';

    $SQL = "INSERT INTO kolisnet_cart_table (userId,bookType,bookSubject,bookTitle,bookWriter,bookjuki,bookYear,bookPublisher,bookSortNum,bookCopyright,bookStandardNum,bookPrice,bookPage,bookLanguage,bookStore,bookLibrary,bookOtherLibrary)
            VALUES ('$userId','$bookType','$bookSubject','$bookTitle','$bookWriter','$bookjuki','$bookYear','$bookPublisher','$bookSortNum','$bookCopyright','$bookStandardNum','$bookPrice','$bookPage','$bookLanguage','$bookStore','$bookLibrary','$bookOtherLibrary')";
    
    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>