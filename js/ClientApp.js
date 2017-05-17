import React from 'react'
import Landing from './Landing'
import Search from './Search'
import {render} from 'react-dom'
import {BrowserRouter, Match} from 'react-router'
import '../public/normalize.css'
import '../public/styles.css'

const App = React.createClass({
  render () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match exactly pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
)
  }
})

render(<App />, document.getElementById('app'))
