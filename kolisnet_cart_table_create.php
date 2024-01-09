<?
    include_once('./kolisnet_header.php');

    $SQL = "CREATE TABLE kolisnet_cart_table (
            userId               VARCHAR(30)  NOT NULL    COMMENT '사용자아이디(외래키FK)',     
            cartBookType         VARCHAR(10)  NOT NULL    COMMENT '자료유형',
            cartBookSubject      VARCHAR(6)   NOT NULL    COMMENT '주제',
            cartBookTitle        VARCHAR(250) NOT NULL    COMMENT '책제목',
            cartBookWriter       VARCHAR(250) NOT NULL    COMMENT '저자',
            cartBookjuki         VARCHAR(100)     NULL    COMMENT '주기사항',
            cartBookYear         VARCHAR(5)       NULL    COMMENT '발행년도',
            cartBookPublisher    VARCHAR(100)     NULL    COMMENT '발행기관',
            cartBookSortNum      VARCHAR(30)  NOT NULL    COMMENT '분류기호',
            cartBookCopyright    VARCHAR(13)  NOT NULL    COMMENT '저작번호',
            cartBookStandardNum  VARCHAR(30)      NULL    COMMENT '표준번호',
            cartBookPrice        INT          NOT NULL    COMMENT '가격',
            cartBookPage         INT          NOT NULL    COMMENT '페이지',
            cartBookLanguage     VARCHAR(30)  NOT NULL    COMMENT '언어',
            cartBookStore        VARCHAR(10)  NOT NULL    COMMENT '보관',
            cartBookLibrary      VARCHAR(250) NOT NULL    COMMENT '소장도서관',
            cartBookOtherLibrary VARCHAR(20)  NOT NULL    COMMENT '기타도서관소장여부',
            cartBookRegisterDate    TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(cartBookCopyright),
            FOREIGN KEY(userId) REFERENCES kolisnet_user_table(userId)
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo '바구니 테이블 만들기 성공!';
    }
    else {
        echo '바구니 테이블 만들기 실패!';
    }
?>