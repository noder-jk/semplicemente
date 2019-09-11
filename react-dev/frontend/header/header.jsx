import React, {Component} from 'react';

import {nav_menu} from 'nodereactor/react';

import './style.scss';

class RenderMenus extends Component
{
    constructor(props)
    {
        super(props);

        this.handleClick=this.handleClick.bind(this);
    }
    
    handleClick(e)
    {
        let el=e.currentTarget;
        
        if(!el.href || /\S+/.test(el.href)==false || el.href=='#')
        {
            e.preventDefault();
        }
    }

    render()
    {
        let {menus=[]}=this.props;

        let nest=0;
    
        /* Loop through all menus recursively */
        let recurs=(menu)=>
        {
            if(Array.isArray(menu))
            {
                nest++;
                return  <ul key={'nest_'+nest} className={nest<=1 ? 'main-menu clearfix' : 'sub-menu'}>
                            {menu.map(m=>recurs(m))}
                        </ul>
            }
            else if(typeof menu=='object')
            {
                return  <li key={menu.key}>
                            {
                                (Array.isArray(menu.children) && menu.children.length>0) ? 
                                [<a onClick={this.handleClick} key="toggler_a" href={menu.url}>{menu.title}
                                    <span className="drop-icon">▾</span>
                                    <label title="Toggle Drop-down" className="drop-icon" htmlFor={menu.key}> ▾</label>
                                </a>,
                                <input key="toggler_inp" type="checkbox" id={menu.key}/>] : 
                                <a onClick={this.handleClick} href={menu.url}>{menu.title}</a>
                            }
                            
                            {(Array.isArray(menu.children) && menu.children.length>0) ? recurs(menu.children) : null}
                        </li>
            }
    
            return null;
        }
        
        return <nav id="menu">
                <label htmlFor="top_menu_toggler" id="toggle-menu">Navigation <span className="drop-icon">▾</span></label>
                <input type="checkbox" id="top_menu_toggler"/>
    
                {menus.map(item=>recurs(item))}
            </nav>
    }
    
}

const Header=()=>
{
    let {name='', description=''}=window.nr_contents.bloginfo || {};

    return <header id="masthead" className="site-header semp-header">
        <div className="site-branding">
            <p className="site-title">
                <a href="/" rel="home">{name}</a>
            </p>
            <p className="site-description">{description}</p>
        </div>
        
        <div style={{'clear':'both'}}>
            {nav_menu({'id':'semp_nav_menu', 'Renderer':RenderMenus})}
        </div>
    </header>
}

export {Header}