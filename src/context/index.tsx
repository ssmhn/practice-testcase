import React, {createContext, Dispatch, FC, ReactNode, SetStateAction, useState} from 'react'

export interface contextType {
	skip: number;
	setSkip: Dispatch<SetStateAction<number>>
}

type ProviderType = {
	children: ReactNode
}

const initialContext = {
	skip: 0,
	setSkip: () => {}
}

export const Context = createContext<contextType>(initialContext)

const ContextProvider: FC<ProviderType> = ({children}) => {
	const [skip, setSkip] = useState(0)
	
	const value = {
		skip,
		setSkip
	}
	
	return <Context.Provider value={value}>{children}</Context.Provider>
}

export { ContextProvider }