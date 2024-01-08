<?
    include_once('./kolisnet_header.php');

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

    $SQL = "UPDATE kolisnet_register_data_table
            SET bookType='$bookType', bookSubject='$bookSubject', bookTitle='$bookTitle', bookWriter='$bookWriter', bookjuki='$bookjuki', bookYear='$bookYear', bookPublisher='$bookPublisher', bookSortNum='$bookSortNum', bookCopyright='$bookCopyright',bookStandardNum='$bookStandardNum', bookPrice='$bookPrice', bookPage='$bookPage', bookLanguage='$bookLanguage',bookStore='$bookStore',bookLibrary='$bookLibrary', bookOtherLibrary='$bookOtherLibrary'
            WHERE bookCopyright='$bookCopyright'";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo 1;
    }
    else {
        echo 0;
    }

?>