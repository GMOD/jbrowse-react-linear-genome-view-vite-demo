import { useState } from 'react'
// @ts-expect-error no types for font
import '@fontsource/roboto'
import {
  createViewState,
  JBrowseLinearGenomeView,
} from '@jbrowse/react-linear-genome-view2'

import { config } from './config'

type ViewModel = ReturnType<typeof createViewState>

function View() {
  const [viewState] = useState<ViewModel>(() => createViewState({ ...config }))
  const [stateSnapshot, setStateSnapshot] = useState('')

  return (
    <>
      <h1>JBrowse 2 React Linear Genome View Demo w/ vite</h1>
      <JBrowseLinearGenomeView viewState={viewState} />
      <h3>Code</h3>
      <p>
        The code for this app is available at{' '}
        <a
          href="https://github.com/GMOD/jbrowse-react-linear-genome-view-vite-demo"
          target="_blank"
          rel="noreferrer"
        >
          https://github.com/GMOD/jbrowse-react-linear-genome-view-vite-demo
        </a>
        .
      </p>
      <h3>Control the view</h3>
      <div>
        <p>
          This is an example of controlling the view from other elements on the
          page. Clicking on a button will navigate the view to the location of
          that gene.
        </p>
        <button
          onClick={() => {
            viewState.session.view.navToLocString('10:94762681..94855547')
          }}
        >
          CYP2C19
        </button>
        <button
          onClick={() => {
            viewState.session.view.navToLocString('13:32315086..32400266')
          }}
        >
          BRCA2
        </button>
      </div>
      <h3>See the state</h3>
      <div>
        <p>
          The button below will show you the current session, which includes
          things like what region the view is showing and which tracks are open.
          This session JSON object can be used in the{' '}
          <code>defaultSession</code> of <code>createViewState</code>.
        </p>
        <button
          onClick={() => {
            setStateSnapshot(JSON.stringify(viewState.session, undefined, 2))
          }}
        >
          Show session
        </button>
      </div>
      <textarea value={stateSnapshot} readOnly rows={20} cols={80} />
    </>
  )
}

export default View
