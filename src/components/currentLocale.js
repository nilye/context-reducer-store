import { useLocaleStore } from '../store/localeStore'

function CurrentLocale () {

	const [state] = useLocaleStore()

	return (
		<div>
			<h1>{state.native}</h1>
		</div>
	)
}

export default CurrentLocale
