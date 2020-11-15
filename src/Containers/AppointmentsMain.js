import React from 'react';

import TableComponent from '../Components/tableComponent';

import tableData from '../JSONfiles/appointments.json';

const AppointmentsMain = () => {

    const dataIn = tableData.map((d, i) => {
        return {
            key: i,
            date: d.date,
            time: d.time,
            whom: d.whom,
            location: d.location,
            notes: d.notes
        };
    });

    return (
        <div id="bh-appts-main">
            <h1>My Current Appointments</h1>
            <TableComponent 
                data={dataIn}
            />
        </div>
    );
};

export default AppointmentsMain;