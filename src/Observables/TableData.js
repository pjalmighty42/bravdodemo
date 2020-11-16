import { RetweetOutlined } from '@ant-design/icons';
import React, {useState, useContext, createContext} from 'react';

import tableData from '../JSONfiles/appointments.json';

const TableListContext = createContext();
const TableOutContext = createContext();
const RemoveItemContext = createContext();
const EditItemContext = createContext();
const AddItemContext = createContext();

function UseTableData(){
    return useContext(TableListContext);
}

function UserTableDataOut(){
    return useContext(TableOutContext);
}

function RemoveTableData(){
    return useContext(RemoveItemContext);
}

function EditTableData(){
    return useContext(EditItemContext);
}

function AddTableData(){
    return useContext(AddItemContext);
}


function TableProvider ({children}) {

    const tableOut = tableData.map((d, i) => {
        return {
            key: i,
            date: d.date,
            time: d.time,
            whom: d.whom,
            location: d.location,
            notes: d.notes
        }
    });

    const [currTableList, setTableList] = useState(tableOut);

    const RemItemFromTable = (item) => {
        setTableList(currTableList.map((t, i) => {
                if(t.id === item.id){
                    return currTableList.splice(i, 1);
                }
                return currTableList;
            })
        )
    }

    const EditItemFromTable = (item) => {
        setTableList(currTableList.map((t, i) => {
                if(t.id === item.id){
                    return t = item;
                }
                return currTableList;
            })
        )
    }

    const AddItemToTable = (item) => {
        setTableList([...currTableList, item]);
    }

    const dataOut = currTableList.map((c, i) => {
        let locOut = c.location.city + ", " + c.location.state;

        return {
            key: i,
            date: c.date,
            time: c.time,
            whom: c.whom,
            location: locOut,
            notes: ""
        }
    })

    return(
        <TableListContext.Provider value={currTableList}>
            <TableOutContext.Provider value={dataOut}>
                <RemoveItemContext.Provider value={RemItemFromTable}>
                    <EditItemContext.Provider value={EditItemFromTable}>
                        <AddItemContext.Provider value={AddItemToTable}>
                            {children}
                        </AddItemContext.Provider>
                    </EditItemContext.Provider>
                </RemoveItemContext.Provider>
            </TableOutContext.Provider>
        </TableListContext.Provider>
    );
};

export {TableProvider, UseTableData, UserTableDataOut, EditTableData, AddTableData, RemoveTableData};