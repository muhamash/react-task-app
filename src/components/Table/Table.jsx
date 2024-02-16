import React from "react";
import TableRow from './TableRow';

const Table = ( { taskData, handleChange, handleToggleFavorite } ) =>
{
    
    const handleDelete = (deletedId) => {
        const updatedData = taskData.filter((item) => item.id !== deletedId);
        handleChange(updatedData);
    };

    return (
        <div className="overflow-auto">
            <table className="table-fixed overflow-auto xl:w-full">
                <thead>
                    <tr>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]"> Title </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize w-full"> Description </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]"> Tags </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Priority </th>
                        <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]"> Options </th>
                    </tr>
                </thead>
                <tbody>
                    {taskData.map((task) => (
                        <TableRow
                            key={task.id}
                            task={task}
                            handleDelete={handleDelete}
                            handleToggleFavorite={handleToggleFavorite}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;