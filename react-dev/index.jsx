import React, {Component} from 'react';

import {Header} from './frontend/header/header';
import {Content} from './frontend/content/content';
import {Widget} from './frontend/widget';
import {Footer} from './frontend/footer';

import {TestComponentInput} from './frontend/meta-box';

import {AdminBar} from 'nodereactor/react';
/* import {Subscriber, showNotification} from 'push-notifier/react'; */

import './frontend/resources/style.scss';
import './frontend/resources/css/font-awesome.css';

class Index extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return <div className="container" id="Test-1-theme_container">
            <AdminBar/>
            <div className="post-template-default single single-post postid-7 single-format-standard logged-in admin-bar  customize-support">
                <div id="page" className="hfeed site">
                    <Header/>
                    
                    <div id="content" className="site-content">
                        <Content {...this.props}/>
                        
                        <Widget/>
                    </div>
                    <Footer/>
                </div>
            </div>
            {/* <button onClick={()=>showNotification({'title':'something'})}>Local</button>
            <Subscriber/> */}
        </div>
    }
}

const TestShortCode=(props)=>
{
    return <div>My short code {props.name || ''}</div>
}

const TestCustomTemplate=(props)=>
{
    console.log(props);
    return <div>Hi this is cust</div>
}

export {Index, TestComponentInput, TestShortCode, TestCustomTemplate}