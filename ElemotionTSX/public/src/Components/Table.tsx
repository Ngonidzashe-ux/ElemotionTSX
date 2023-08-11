import { Link } from "react-router-dom";

/*This defines a functional component using the arrow syntac called Table. Has a parameter called data. Component uses object destructuring to extract
the data property from the object/prop that would have been passed as an argument. */
const Table = ({ data }: { data: any }) => {
  return (
    /*Div that has a text size of 22 and leading of that. 
    overflow-x-auto: This class enables horizontal scrolling within the <div> when its content overflows its width. */
    <div className="text-[22px] leading-[42.6px] overflow-x-auto">
      {/* Inside this div, we render a table element that spans the full width of the div */}
      <table className="w-full">
        {/* Render a table header element that is a height of 90px*/}
        <thead className="h-[90px]">
          {/* Inside of it, we render a table row element to define a table row in the header */}
          <tr>
            {/* We then go on to devide the table row in the header into multiple table header cells. They have a specific width, padding, colour and text alignment. Also different labels */}
            <th className="w-[5%] px-1 bg-gray-600 text-left">Year</th>
            <th className="w-[30%] px-1 bg-gray-700 text-left">Publication</th>
            <th className="w-[45%] px-1 bg-gray-800 text-left">Title</th>
            <th className="w-[20%] px-1 bg-gray-900 text-left">Authors</th>
          </tr>
        </thead>

        {/* After the table header element, we go on to define the body of the table using the tbody element */}
        <tbody>
          {/* In the body, we call the map function on a data array that would have been extracted as a prop by the Table functional component.
          We enclose the map function in curly brackets because it is a JS function. Map iterates over all the objects in the array
          We pass a callback function into the map function and it has the following parameters: row(current object), index(index of the current object) 
          The callback function goes on to render for each object that has been called, a table row element.*/}
          {data.map((row: any, index: any) => (
            /*Table row element that has a key attribute equal to the index of the object. Upon hovering, it turns gray. It has a white border on top and bottom */
            <tr key={index} className="hover:bg-gray-800 border-b border-t">
              {/* In this row, there is a table data cell element rendering. Table data element has width, padding and the title.   */}
              <td className="w-[5%] px-1 py-3">{row.Year}</td>
              <td className="w-[30%] px-1 py-3">{row.Publication}</td>

              {/* for this one, same thing, but text is secondary, the title is wrapped around with a link that when clicked goes to the page of the research paper and opens in a new page */}
              <td className="w-[45%] px-3 py-3 text-secondary">
                <Link to={row.Link} target="_blank">
                  {row.Title}
                </Link>
              </td>
              <td className="w-[20%] px-3 py-4">{row.Authors}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
