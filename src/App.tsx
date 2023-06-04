import React, {useEffect, useRef, useState} from 'react'
import {getData, getItemsCount} from './api/getData'
import {QueryKey, useQuery} from 'react-query'
import {DataType} from './types/dataTypes'
import {Layout} from "./components/global/Layout/Layout";
import classes from "./css/App.module.scss"
import {Item} from "./components/Item/Item";
import {Pagination} from './components/Pagination/Pagination'
import Skeleton from 'react-loading-skeleton'

export const App = () => {
    const skip = useRef(0)
    const [pagesCount, setPagesCount] = useState(0)
    
    const {isLoading, data, error, isError, refetch} = useQuery<void, string, DataType[], QueryKey>(
        ['getData', skip.current],
        // @ts-ignore
        async () => {
            return await getData(skip.current)
        },
        {
            refetchOnWindowFocus: false
        }
    )
    
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>, page: number) => {
        e.preventDefault()
        skip.current = page
        
        refetch()
    }
    
    useEffect(() => {
        getItemsCount().then((res) => setPagesCount(Math.ceil(res / 12)))
    }, [])

    return (
        <div className="App">
            <Layout>
                {!isError ?
                    (
                        <>
                            <div className={classes.Items}>
                                {isLoading && (
                                    Array.from(Array(12).keys()).map(el => (
                                        <Skeleton key={el} count={5} />
                                    ))
                                )}
                                {data && !isLoading && (
                                    data.map(el =>(
                                        <Item key={el.id} data={el}/>
                                    ))
                                )}
                            </div>
                            <Pagination
                                totalPages={pagesCount || 0}
                                currentPage={skip.current}
                                separator={'...'}
                                onClick={clickHandler}
                            />
                        </>
                    ) :
                    (<div>{error}</div>)
                }
            </Layout>
        </div>
    );
}
