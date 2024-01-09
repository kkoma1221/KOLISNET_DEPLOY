<?
    include_once('./kolisnet_header.php');

    $userId = $_POST['userId'];
    $cartBookType = $_POST['cartBookType'];
    $cartBookSubject = $_POST['cartBookSubject'];
    $cartBookTitle = htmlspecialchars($_POST['cartBookTitle'], ENT_QUOTES);
    $cartBookWriter = $_POST['cartBookWriter'];
    $cartBookjuki = htmlspecialchars($_POST['cartBookjuki'], ENT_QUOTES);
    $cartBookYear = $_POST['cartBookYear'];
    $cartBookPublisher = $_POST['cartBookPublisher'];
    $cartBookSortNum = $_POST['cartBookSortNum'];
    $cartBookCopyright = $_POST['cartBookCopyright'];
    $cartBookStandardNum = htmlspecialchars($_POST['cartBookStandardNum'], ENT_QUOTES);
    $cartBookPrice = $_POST['cartBookPrice'];
    $cartBookPage = $_POST['cartBookPage'];
    $cartBookLanguage = $_POST['cartBookLanguage'];
    $cartBookStore = $_POST['cartBookStore'];
    $cartBookLibrary = $_POST['cartBookLibrary'];
    $cartBookOtherLibrary = $_POST['cartBookOtherLibrary'];

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