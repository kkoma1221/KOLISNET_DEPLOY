import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import Sub1Component from "./wrap/sub/Sub1Component";
import Sub2Component from "./wrap/sub/Sub2Component";
import Sub3Component from "./wrap/sub/Sub3Component";
import Sub4Component from "./wrap/sub/Sub4Component";
import Sub5Component from "./wrap/sub/Sub5Component";
import Sub6Component from "./wrap/sub/Sub6Component";
import Sub7Component from "./wrap/sub/Sub7Component";
import Sub8Component from "./wrap/sub/Sub8Component";
import Sub9Component from "./wrap/sub/Sub9Component";
import Sub10Component from "./wrap/sub/Sub10Component";
import Sub11Component from "./wrap/sub/Sub11Component";
import Sub12Component from "./wrap/sub/Sub12Component";
import FooterComponent from './wrap/FooterComponent';


export default function WrapComponent(){


    return (
        <div id="wrap">
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<HeaderComponent />}>
                            <Route index element={ <MainComponent /> } />                        
                            <Route path="/index" element={ <MainComponent /> } />                        
                            <Route path="/sub1" element={ <Sub1Component /> }/>
                            <Route path="/sub2" element={ <Sub2Component /> }/>
                            <Route path="/sub3" element={ <Sub3Component /> }/>
                            <Route path="/sub4" element={ <Sub4Component /> }/>
                            <Route path="/sub5" element={ <Sub5Component /> }/>
                            <Route path="/sub6" element={ <Sub6Component /> }/>
                            <Route path="/sub7" element={ <Sub7Component /> }/>
                            <Route path="/sub8" element={ <Sub8Component /> }/>
                            <Route path="/sub9" element={ <Sub9Component /> }/>
                            <Route path="/sub10" element={ <Sub10Component /> }/>
                            <Route path="/sub11" element={ <Sub11Component /> }/>
                            <Route path="/sub12" element={ <Sub12Component /> }/>
                        </Route>
                    </Routes>
                </BrowserRouter>

                <FooterComponent />
        </div>
    )
}
