<?

    include_once('./kolisnet_header.php');

    $adminName = $_POST['adminName'];
    $adminPw = $_POST['adminPw'];

    $sql = "SELECT adminName, adminPw, adminId, adminGaib FROM admin_kolisnet_table
            WHERE adminName='$adminName' AND adminPw='$adminPw'";
    
    $res = mysqli_query($conn, $sql);

    if(mysqli_num_rows($res) > 0){
        $result = mysqli_fetch_array($res);
        echo '{"이름":"'.$result['adminName'].'", "비밀번호":"'.$result['adminPw'].'", "아이디":"'.$result['adminId'].'", "가입일":"'.$result['adminGaib'].'"}';
    }
    else {
        echo '';
    }

?>