import React from 'react';

import FooterHOC from './HOCs/FooterHOC';

const PageFooter = () => {

    let date = new Date();
    let currYr = date.getFullYear();

    return(
        <FooterHOC>
            &#169; {currYr}, Paul Laudun.
        </FooterHOC>
    );
};

export default PageFooter;