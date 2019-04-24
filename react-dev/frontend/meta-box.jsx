import React, {Component} from 'react';

class TestComponentInput extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidUpdate()
    {
        console.log('test meta box also updated');
    }

    render()
    {
        let {post_id=0, post_meta={}}=this.props;

        return(
            <div>
                You are editing {post_id}
                <input type="text" className="form-control" name="save_me_test" defaultValue={post_meta.save_me_test}/>
                <input type="text" className="form-control" name="no_save" data-ignore="true"/>
            </div>
        )
    }
}

export {TestComponentInput}