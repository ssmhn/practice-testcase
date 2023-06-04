import React, {useRef} from 'react'
import {getData} from './api/useGetData'
import {QueryKey, useQuery} from 'react-query'
import {DataType} from './types/dataTypes'

export const App = () => {
    const skip = useRef(0)
    
    const {isLoading, data, error, isError, refetch} = useQuery<void, unknown, DataType[], QueryKey>(
        ['getData', skip.current],
        // @ts-ignore
        async () => {
            return await getData(skip.current)
        },
        {
            refetchOnWindowFocus: false
        }
    )
    
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        skip.current += 1
        
        refetch()
    }
  
    return (
        <div className="App">
            <button onClick={clickHandler}>click</button>
        </div>
    );
}
