import React from "react";
import TableDataRow from "./TableDataRow";

const Table = ( { taskData, handleChange, favorite, handleToggleFavorite } ) =>
{
    const handleDelete = ( deletedId ) =>
    {
        const updatedData = taskData.filter((item) => item.id !== deletedId);
        handleChange( updatedData );
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
                        <React.Fragment key={task.id}>
                            <TableDataRow title={ task.title } description={ task.description } tags={ task.tags } id={ task.id }
                            handleDelete={handleDelete}
                            favorite={favorite}
                            handleToggleFavorite={handleToggleFavorite} 
                            />
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Table.propTypes = {
//     taskData: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         tags: PropTypes.arrayOf(PropTypes.string).isRequired
//     })).isRequired,
// };

export default Table;