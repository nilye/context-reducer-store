import LocaleEnum from '../store/locales'
import { useLocaleStore } from '../store/localeStore'

export default function LocaleList(){

	const [, { change }] = useLocaleStore()

	const List = Object.keys(LocaleEnum).map(key => {

		const locale = LocaleEnum[key]
		return (
			<div onClick={ () => change(key) } key={key}>
				<p>{ locale.name }</p>
				<h2>{ locale.native }</h2>
			</div>
		)
	})

	return (
		<div className='locale-list'>
			{ List }
		</div>
	)
}
