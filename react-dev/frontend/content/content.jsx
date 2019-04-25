import React from 'react';

import {
    the_title, 
    the_content, 
    the_author, 
    the_date, 
    the_permalink,
    the_excerpt,
    the_next_url,
    the_previous_url
} from 'nodereactor/react';

import './style.scss';

const Content=(props)=>
{
    let {posts=[], is_singular=false, pagination={}}=props;

    let next_url=the_next_url(pagination);
    let prev_url=the_previous_url(pagination);

    return(
        <div id="primary" className="content-area">
            <main id="main" className="site-main">
                {
                    posts.length===0 ? 
                    <article className="post type-post status-publish format-standard hentry category-mechanism">
                        <div className="entry-content">
                            <span>Sorry, Desired Content Not Found.</span>
                        </div>
                        <footer className="entry-footer"></footer>
                    </article> : null
                }

                {
                    posts.map(item=>
                    {
                        return(
                            <article key={item.post_id} className="post type-post status-publish format-standard hentry category-mechanism">
                                <header className="entry-header">
                                    <h1 className="entry-title">{the_title(item)}</h1>
                                    <div className="entry-meta">
                                        <span className="posted-on">
                                            <i className="fa fa-clock-o spaceRight" aria-hidden="true"></i>
                                            <a>
                                                <time className="entry-date published">{the_date(item)}</time>
                                            </a>
                                        </span>
                                        <span className="byline">
                                            <i className="fa fa-user spaceRight" aria-hidden="true"></i>
                                            <span className="author vcard">
                                                <a className="url fn n">{the_author(item)}</a>
                                            </span>
                                        </span>	
                                    </div>
                                </header>

                                <div className="entry-content">
                                    {is_singular ? the_content(item) : the_excerpt(item)}
                                </div>

                                <footer className="entry-footer">
                                    {
                                        is_singular ? 
                                        <span className="edit-link floatLeft">
                                            <i className="fa fa-pencil-square-o spaceRight" aria-hidden="true"></i>
                                            <a className="post-edit-link" href="">Edit</a>
                                        </span> : 
                                        <div className="readMoreLink">
                                            <a href={the_permalink(item)}>Read More<i className="fa spaceLeft fa-angle-double-right" aria-hidden="true"></i></a>
                                        </div> 
                                    }
                                </footer>
                            </article>
                        )
                    })
                }  
                

                {
                    (prev_url || next_url) ? <nav className="navigation post-navigation">
                        <h2 className="screen-reader-text">Post navigation</h2>
                        <div className="nav-links">
                            <div className="nav-previous">
                                {
                                    prev_url ? 
                                    <a href={prev_url} rel="prev">
                                        <i className="fa spaceRight fa-angle-double-left"></i> Previous
                                    </a> :
                                    <a href="#" rel="next">&nbsp;</a>
                                }
                                
                            </div>
                            <div className="nav-next">
                                {
                                    next_url ? 
                                    <a href={next_url} rel="prev">
                                        Next <i className="fa spaceRight fa-angle-double-right"></i>
                                    </a> : 
                                    <a href="#" rel="next">&nbsp;</a>
                                }
                            </div>
                        </div>
                    </nav> : null
                }
            </main>
        </div>
    )
}

export {Content}