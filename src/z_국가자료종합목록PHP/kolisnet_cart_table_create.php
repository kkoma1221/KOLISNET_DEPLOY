<?
    include_once('./kolisnet_header.php');

    $SQL = "CREATE TABLE kolisnet_cart_table (
            userId           VARCHAR(30)  NOT NULL    COMMENT '사용자아이디(외래키FK)',     
            bookType         VARCHAR(10)  NOT NULL    COMMENT '자료유형',
            bookSubject      VARCHAR(6)   NOT NULL    COMMENT '주제',
            bookTitle        VARCHAR(250) NOT NULL    COMMENT '책제목',
            bookWriter       VARCHAR(250) NOT NULL    COMMENT '저자',
            bookjuki         VARCHAR(500)     NULL    COMMENT '주기사항',
            bookYear         VARCHAR(5)       NULL    COMMENT '발행년도',
            bookPublisher    VARCHAR(100)     NULL    COMMENT '발행기관',
            bookSortNum      VARCHAR(30)  NOT NULL    COMMENT '분류기호',
            bookCopyright    VARCHAR(15)  NOT NULL    COMMENT '저작번호',
            bookStandardNum  VARCHAR(30)      NULL    COMMENT '표준번호',
            bookPrice        INT              NULL    COMMENT '가격',
            bookPage         INT              NULL    COMMENT '페이지',
            bookLanguage     VARCHAR(30)  NOT NULL    COMMENT '언어',
            bookStore        VARCHAR(10)  NOT NULL    COMMENT '보관',
            bookLibrary      VARCHAR(250) NOT NULL    COMMENT '소장도서관',
            bookOtherLibrary VARCHAR(20)  NOT NULL    COMMENT '기타도서관소장여부',
            bookRegisterDate    TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(bookCopyright),
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