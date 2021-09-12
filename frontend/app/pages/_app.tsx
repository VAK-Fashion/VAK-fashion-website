import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from "react-redux"
import store from '../rudex/store'
import { PersistGate } from 'redux-persist/integration/react'
const Store = store()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={<h1>Loadingg...</h1>} persistor={Store.persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}
export default MyApp
