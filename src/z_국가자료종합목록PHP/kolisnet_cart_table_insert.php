<?
    include_once('./kolisnet_header.php');

    $userId = $_POST['userId'];
    $bookType = $_POST['bookType'];
    $bookSubject = $_POST['bookSubject'];
    $bookTitle = htmlspecialchars($_POST['bookTitle'], ENT_QUOTES);
    $bookWriter = $_POST['bookWriter'];
    $bookjuki = htmlspecialchars($_POST['bookjuki'], ENT_QUOTES);
    $bookYear = $_POST['bookYear'];
    $bookPublisher = $_POST['bookPublisher'];
    $bookSortNum = $_POST['bookSortNum'];
    $bookCopyright = $_POST['bookCopyright'];
    $bookStandardNum = htmlspecialchars($_POST['bookStandardNum'], ENT_QUOTES);
    $bookPrice = $_POST['bookPrice'];
    $bookPage = $_POST['bookPage'];
    $bookLanguage = $_POST['bookLanguage'];
    $bookStore = $_POST['bookStore'];
    $bookLibrary = $_POST['bookLibrary'];
    $bookOtherLibrary = $_POST['bookOtherLibrary'];

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