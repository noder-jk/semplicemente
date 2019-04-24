import React from 'react';
import {dynamic_sidebar} from 'nodereactor/react';

const SdContainer=(props)=>
{
    let {title='', children=null}=props;

    return  <aside id="wordjs_mechanism-2" className="widget widget_wordjs_mechanism">
                <div className="widget-title">
                    <h3>{title}</h3>
                </div>
                {children}
            </aside>
}

const Widget=()=>
{
    return(
        <div id="secondary" className="widget-area">
            <aside id="search-2" className="widget widget_search">
                <form role="search" method="get" className="search-form" action="/">
                    <input type="search" className="search-field" placeholder="Search …" name="search"/>
                    <input type="submit" className="search-submit" value="Search"/>
                </form>
            </aside>
        
            <aside id="wordjs_mechanism-2" className="widget widget_wordjs_mechanism">
                <div className="widget-title">
                    <h3>Mechanism</h3>
                </div>
                <ul>
                    <li><a href="http://localhost/w5/2019/03/15/sdf/">sdf</a></li>
                    <li><a href="http://localhost/w5/2019/03/15/df/"><b data-element="current_post" style={{"color":"#006469"}}>df</b></a></li>
                </ul>
            </aside>

            {dynamic_sidebar('right_side_panel_theme', SdContainer)}
        </div>
    )
}

export {Widget}