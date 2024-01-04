import React from 'react';
import './scss/subNotice.scss'
import SubNoticeComponentChild from './SubNoticeComponentChild';

export default function SubNoticeComponent(){

    return (
        <div id='subNotice'>
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <div className="title">
                        <h2>공지사항</h2>
                        <span>| KOLIS-NET에서 알려드리는 공지사항입니다.</span>
                    </div>
                    <SubNoticeComponentChild/>
                </div>
            </div>
        </div>
    );
};
