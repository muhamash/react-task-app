import FavState from "./FavState";
import Tags from "./Tags";

const TableDataRow = ({title, description, tags}) =>
{   
    // const [ favorite, setFavorite ] = useState( false );
    // const handleFavorite = () =>
    // {
    //     setFavorite( prevFavorite => !prevFavorite );
    // };
    return (
        <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
            <td className="cursor-pointer">
                <FavState onClick={(isFavorite)=>{console.log(isFavorite)} }/>
            </td>
            <td>{ title }</td>
            <td>
                <div>
                    {description}
                </div>
            </td>
            <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                    <Tags tags={tags}/>
                </ul>
            </td>
            <td className="text-center">High</td>
            <td>
                <div className="flex items-center justify-center space-x-3">
                    <button className="text-red-500">Delete</button>
                    <button className="text-blue-500">Edit</button>
                </div>
            </td>
        </tr>
    );
};

export default TableDataRow;