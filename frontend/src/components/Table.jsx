 // Table.jsx

 const Table = ({ title, columns, rows }) => {
    return (
      <div className='p-4 border rounded shadow-lg m-2'>
        <h2 className='font-bold text-xl mb-2'>{title}</h2>
        <table className='min-w-full'>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th
                  key={index}
                  className='px-4 py-2 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600'
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className='px-4 py-2 border-b border-gray-300 text-sm text-gray-700'
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
 
  export default Table;
 