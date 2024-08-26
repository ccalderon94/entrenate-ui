import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react';
import { BiChevronDown } from "react-icons/bi";


interface TableProps<T> {
    tableData: T[]
    tableColumns: string[]
}

export const Table = <T,>({ tableData, tableColumns}: TableProps<T>) => {
    return(    
        <table className="table-auto min-w-full  border-collapse border border-slate-500">
            <thead className="text-white bg-gray-600">
                <tr>
                    {tableColumns.map((column) => (
                        <th key={column} className="border-collapse border border-slate-700 p-3">{column}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map((data, index) => (
                    <tr key={index}>
                        <td className="border-collapse border border-slate-700 p-2 text-center">{index + 1}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}