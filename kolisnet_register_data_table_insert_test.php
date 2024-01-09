<?
    include_once('./kolisnet_header.php');

    $bookType = "일반도서";
    $bookSubject = "사회과학";
    $bookTitle = "인디아더존스 : 우리는 왜 차이를 차별하는가";
    $bookWriter = "염운옥,조영태,장대익,민영,김학철,이수정 지음";
    $bookjuki = "등저: 조영태, 장대익, 민 영, 이수정";
    $bookYear = 2023;
    $bookPublisher = "사람과나무사이";
    $bookSortNum = "334";
    $bookCopyright = "UW20231875178";
    $bookStandardNum = "ISBN 979-11-88635-86-3 03100";
    $bookPrice = 19500;
    $bookPage = 295;
    $bookLanguage = "Korean";
    $bookStore = "오프라인";
    $bookLibrary = "대학도서관종합목록";

    $SQL = "INSERT INTO kolisnet_register_data_table (bookType,bookSubject,bookTitle,bookWriter,bookjuki,bookYear,bookPublisher,bookSortNum,bookCopyright,bookStandardNum,bookPrice,bookPage,bookLanguage,bookStore,bookLibrary)
            VALUES ('$bookType','$bookSubject','$bookTitle','$bookWriter','$bookjuki','$bookYear','$bookPublisher','$bookSortNum','$bookCopyright','$bookStandardNum','$bookPrice','$bookPage','$bookLanguage','$bookStore','$bookLibrary')";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }
?>