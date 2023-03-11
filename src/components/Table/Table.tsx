type TableDataParams = {
  data: string
}

function TableData({data}: TableDataParams){
  return (
    <td className="p-2 whitespace-nowrap">{data}</td>
  )
}

type TableHeaderParams = {
  header: string
}

function TableHeader({header}: TableHeaderParams){
  return (
    <th className="p-2 whitespace-nowrap">{header}</th>
  )
}

type TableRowParams = {
  row: string[],
  isHeader?: boolean
}

function TableRow({row, isHeader = false}: TableRowParams){
  return (
    <tr>
      {row.map((data, index) => isHeader ? <TableHeader key={index} header={data} /> : <TableData key={index} data={data}/>)}
    </tr>
  )
}


type TableParams = {
  headers: string[],
  rows: string[][]
}


export default function Table({headers, rows}: TableParams) {
  return (
    <div className="w-full overflow-auto">
      <table>
        <thead>
          <TableRow row={headers} isHeader={true}/>
        </thead>
        <tbody>
          {rows.map((row, index) => <TableRow key={index} row={row} />)}
        </tbody>
      </table>
    </div>
  )
}
