import React from 'react';

import { UserTableDataOut, RemoveTableData } from '../Observables/TableData';

import { Table, Space } from 'antd';

import TableButtonGroup from './tableButtonGroup';
import 'antd/es/table/style/css';

const TableComponent = () => {

    const deleteRow = RemoveTableData();

    const openMap = (rowInfo) => {
        return {
            onClick: () => {
                console.log("Map on row: " + rowInfo);
            }
        }
    }

    const editCurrentRow = (rowInfo) => {
        console.log("Edit on row: " + rowInfo);
    };

    const delCurrentRow = (rowInfo) => {
        console.log("Delete on row: " + rowInfo);
        deleteRow(rowInfo);
    };

    const openNotesCurrRow = (rowInfo) => {
        return {
            onClick: () => {
                console.log("Edit on row: " + rowInfo);
            }
        }
    }

    const columnns = [
        {
            title: 'Date',
            dataIndex: 'date',
            defaultSortOrder: ['descend', 'ascend'],
            sorter: (a, b) => a.date - b.date
        },
        {
            title: 'Time',
            dataIndex: 'time',
            defaultSortOrder: ['descend', 'ascend'],
            sorter: (a, b) => a.time - b.time
        },
        {
            title: 'With Whom',
            dataIndex: 'whom',
            defaultSortOrder: ['descend', 'ascend'],
            sorter: (a, b) => a.whom.length - b.whom.length
        },
        {
            title: 'Location',
            dataIndex: 'location',
            defaultSortOrder: ['descend', 'ascend'],
            sorter: (a, b) => a.location.length - b.location.length,
            render: text => <a onClick={openMap}>{text}</a>,
        },
        {
            title: 'Notes',
            dataIndex: 'notes',
            render: () => <a onClick={openNotesCurrRow}>See Notes</a>,
        },
        {
            title: 'Edit/Delete?',
            key: 'action',
            render: (record) => (
            <Space size="middle">
                <TableButtonGroup 
                    delFn={()=>delCurrentRow(record.key)}
                    editFn={()=>editCurrentRow(record.key)}
                />
            </Space>
            )
        }
    ];

    const tableOut = UserTableDataOut();

    return(
        <Table 
            columns={columnns}
            pagination={'bottomCenter'}
            dataSource={tableOut}
        />
    );
};

export default TableComponent;