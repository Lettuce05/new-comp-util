import {AppStore} from '../../state'

export default function LL() {
  const page = AppStore(state => state.page);
  return (
    <div className="flex flex-1">
      <h1 className="text-3xl font-bold underline font-sans">{page}</h1>
    </div>
  )
}
