<?
    include_once('./kolisnet_header.php');

    $SQL = "CREATE TABLE kolisnet_register_data_table (
            bookType        VARCHAR(10)   NOT NULL   COMMENT '자료유형',
            bookSubject     VARCHAR(6)    NOT NULL   COMMENT '주제',
            bookTitle       VARCHAR(250)  NOT NULL   COMMENT '책제목',
            bookWriter      VARCHAR(250)  NOT NULL   COMMENT '저자',
            bookjuki        VARCHAR(100)      NULL   COMMENT '주기사항',
            bookYear        INT               NULL   COMMENT '발행년도',
            bookPublisher   VARCHAR(100)      NULL   COMMENT '발행기관',
            bookSortNum     VARCHAR(30)   NOT NULL   COMMENT '분류기호',
            bookCopyright   VARCHAR(13)   NOT NULL   COMMENT '저작번호',
            bookStandardNum VARCHAR(30)       NULL   COMMENT '표준번호',
            bookPrice       INT           NOT NULL   COMMENT '가격',
            bookPage        INT           NOT NULL   COMMENT '페이지',
            bookLanguage    VARCHAR(30)   NOT NULL   COMMENT '언어',
            bookStore       VARCHAR(10)   NOT NULL   COMMENT '보관',
            bookLibrary     VARCHAR(250)  NOT NULL   COMMENT '소장도서관',
            bookOtherLibrary VARCHAR(20)  NOT NULL   COMMENT '기타도서관소장여부',
            bookRegisterDate    TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(bookCopyright)
    )ENGINE=MyISAM DEFAULT CHARSET=utf8mb4";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo '테이블생성성공!';
    }
    else {
        echo '테이블생성실패!';
    }
?>