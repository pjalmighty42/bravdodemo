import React, {Fragment} from 'react';

import { Select } from 'antd';

import states from '../JSONfiles/statelist.json';

const { Option } = Select;

const stateDropDownItem = (props) => {

    const stateList = states.map(s => {
        return {
            abbr: s.abbreviation
        };
    });

    return(
        <Select
            style={{ width: 200 }}
            placeholder="Select a State"
            onChange={props.changeFn}
        >
            { 
                stateList.map(l => {
                    return <Select.Option value={l.abbr} >{l.abbr}</Select.Option>;
                })
            }
        </Select>
    );
};

export default stateDropDownItem;
