import './App.css'
import LocaleList from './components/localeList'
import CurrentLocale from './components/currentLocale'

function App () {

	return (
		<div className="App">
			<CurrentLocale/>
			<LocaleList/>
		</div>
	)
}

export default App
