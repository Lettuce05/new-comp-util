import LL from './components/LL/LL'
import First from './components/First/First'
import NavLayout from './components/NavLayout/NavLayout'
import {AppStore} from './state'
import {pages} from './types'

export function App() {
 const page = AppStore((state) => state.page);
 
 if (page === pages.FIRST) {
    return (
      <NavLayout>
        <First />
      </NavLayout>
    )
  } else if(page === pages.LL) {
    return (
      <NavLayout>
        <LL />
      </NavLayout>
    )
  } else {
    return (
      <NavLayout />
    )
  }
}
