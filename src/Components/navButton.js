import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';

import { Button } from 'antd';

const NavButton = (props) =>{
    console.log(props)
    return(
        <Fragment>
            <NavLink
                className={props.pullRight ? "" : "pull-left"}
                to={props.path}>
                <Button
                    className="bh-btn"
                    size={"large"}
                >
                    {props.btnValue}
                </Button>
            </NavLink>
        </Fragment>
        
    );
};

export default NavButton;