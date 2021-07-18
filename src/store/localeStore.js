import LocaleEnum from './locales'
import { createContext, useContext, useReducer } from 'react'

const initialState = {
	value: 'en',
	name: 'English',
	native: 'English'
}

const CHANGE_LOCALE = 'CHANGE_LOCALE'


const reducer = (state, action) => {
	switch (action.type){
		case CHANGE_LOCALE:
			let locale = LocaleEnum[action.payload]
			if (locale){
				return {
					value: action.payload,
					name: locale.name,
					native: locale.native
				}
			}
		default:
			return state
	}
}

const LocaleContext = createContext()


export function LocaleProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	const store = {
		state,
		actions: {
			change(locale){
				if (locale){
					dispatch({type: CHANGE_LOCALE, payload: locale})
				}
			}
		}
	}

	return (
		<LocaleContext.Provider
			value={store}
		>
			{ children }
		</LocaleContext.Provider>
	)
}

export function useLocaleStore(){
	const store = useContext(LocaleContext)

	return [store.state, store.actions]
}
