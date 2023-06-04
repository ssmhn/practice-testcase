import React, {useRef} from 'react'
import {getData} from './api/useGetData'
import {QueryKey, useQuery} from 'react-query'
import {DataType} from './types/dataTypes'
import {Layout} from "./components/global/Layout/Layout";
import classes from "./css/App.module.scss"
import {Item} from "./components/Item/Item";

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
            <Layout>
                <div className={classes.Items}>
                    {data && (
                        data.map(el =>(
                            <Item key={el.id} data={el}/>
                        ))
                    )}
                </div>
            </Layout>
        </div>
    );
}
