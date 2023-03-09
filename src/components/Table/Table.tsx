type TableDataParams = {
  data: string
}

function TableData({data}: TableDataParams){
  return (
    <td>{data}</td>
  )
}

type TableHeaderParams = {
  header: string
}

function TableHeader({header}: TableHeaderParams){
  return (
    <th>{header}</th>
  )
}

type TableRowParams = {
  row: string[],
  isHeader?: boolean
}

function TableRow({row, isHeader = false}: TableRowParams){
  return (
    <tr>
      {row.map((data) => isHeader ? <TableHeader header={data} /> : <TableData data={data}/>)}
    </tr>
  )
}


type TableParams = {
  headers: string[],
  rows: string[][]
}


export default function Table({headers, rows}: TableParams) {
  return (
    <table>
      <thead>
        <TableRow row={headers} isHeader={true}/>
      </thead>
      <tbody>
        {rows.map(row => <TableRow row={row} />)}
      </tbody>
    </table>
  )
}
