import React from 'react';

import { Button } from 'antd';

const tableButtonGroup = (props) => {

    return(
        <div className="tbl-btn-div">
            <Button 
                className="edit-btn"
                onClick={props.editFn}
                >Edit</Button>
            <Button 
                className="del-btn"
                onClick={props.delFn}>Delete</Button>
        </div>
    );
};

export default tableButtonGroup;