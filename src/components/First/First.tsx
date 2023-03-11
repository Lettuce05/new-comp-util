import {AppStore} from '../../state'
import Grammar from '../Grammar/Grammar';
import Table from '../Table/Table';

export default function First() {
  const grammar = AppStore(state => state.grammar);
  const tableHeaders = ['Non-Terminal', 'FIRST(X)', 'FOLLOW(X)']
  let tableData = null;

  function printSet(set: Set<string>){
    return `{${Array.from(set).sort().join(' , ')}}`
  }
  if (grammar !== null){
    let tempData = []
    // format grammar data into tableData format (nonterminal,FIRST,FOLLOW)
    for (const nonterminal of grammar.nonterminals){
      tempData.push([nonterminal, printSet(grammar.firsts.get(nonterminal) ?? new Set()), printSet(grammar.follows.get(nonterminal) ?? new Set())])
    }
    tableData = tempData;
  }
  return (
    <div className="flex flex-1 max-h-[calc(100vh-56px)] overflow-hidden">
      <Grammar />
      {grammar && tableData ? <Table headers={tableHeaders} rows={tableData} /> : null}
    </div>
  )
}
