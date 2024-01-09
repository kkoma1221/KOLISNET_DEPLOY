<?
    include_once('./kolisnet_header.php');

    $SQL = "CREATE TABLE kolisnet_myLibrary_table (
            userId               VARCHAR(30)  NOT NULL    COMMENT '사용자아이디(외래키FK)',     
            myLibBookType         VARCHAR(10)  NOT NULL    COMMENT '자료유형',
            myLibBookSubject      VARCHAR(6)   NOT NULL    COMMENT '주제',
            myLibBookTitle        VARCHAR(250) NOT NULL    COMMENT '책제목',
            myLibBookWriter       VARCHAR(250) NOT NULL    COMMENT '저자',
            myLibBookjuki         VARCHAR(100)     NULL    COMMENT '주기사항',
            myLibBookYear         VARCHAR(5)       NULL    COMMENT '발행년도',
            myLibBookPublisher    VARCHAR(100)     NULL    COMMENT '발행기관',
            myLibBookSortNum      VARCHAR(30)  NOT NULL    COMMENT '분류기호',
            myLibBookCopyright    VARCHAR(13)  NOT NULL    COMMENT '저작번호',
            myLibBookStandardNum  VARCHAR(30)      NULL    COMMENT '표준번호',
            myLibBookPrice        INT          NOT NULL    COMMENT '가격',
            myLibBookPage         INT          NOT NULL    COMMENT '페이지',
            myLibBookLanguage     VARCHAR(30)  NOT NULL    COMMENT '언어',
            myLibBookStore        VARCHAR(10)  NOT NULL    COMMENT '보관',
            myLibBookLibrary      VARCHAR(250) NOT NULL    COMMENT '소장도서관',
            myLibBookOtherLibrary VARCHAR(20)  NOT NULL    COMMENT '기타도서관소장여부',
            myLibBookRegisterDate    TIMESTAMP   DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY(myLibBookCopyright),
            FOREIGN KEY(userId) REFERENCES kolisnet_user_table(userId) 
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci";

    $res = mysqli_query($conn, $SQL);

    if($res==true){
        echo '내서재 테이블 만들기 성공!';
    }
    else {
        echo '내서재 테이블 만들기 실패!';
    }
?>