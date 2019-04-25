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
        
            {dynamic_sidebar('right_side_panel_theme', SdContainer)}
        </div>
    )
}

export {Widget}