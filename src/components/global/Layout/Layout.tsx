import classes from './Layout.module.scss'
import {FC, PropsWithChildren} from "react"

interface LayoutProps {

}

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({children}) => {
    return (
        <div className={classes.Layout}>{children}</div>
    )
}