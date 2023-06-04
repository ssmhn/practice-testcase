import classes from './Item.module.scss'
import {FC, PropsWithChildren} from "react"
import {DataType} from "../../types/dataTypes";

interface ItemProps {
    data?: DataType;
}

export const Item: FC<PropsWithChildren<ItemProps>> = ({data}) => {
    return (
        <div className={classes.Item}>
            <div className={classes.Name}>Название комании: {data?.LicenseeFullName}</div>
            <div>Адрес компании: {data?.LicenseeAddress}</div>
            <div>Номер телефона компании: <a href={`tel:${data?.LicenseePhoneNumber}`}>{data?.LicenseePhoneNumber}</a> </div>
            <div>Регистрационный номер: {data?.LicenseRegNumber}</div>
            <div>ИНН: {data?.INN}</div>
            <div>ОГРН: {data?.OGRN}</div>
            <div>Дополнительная информация: {data?.ExtraInfo}</div>
            <div>Номер документа: {data?.DocNumber}</div>
            <div>Дата подписания документа: {data?.DocDate}</div>
            <div>Дата заявки: {data?.LicenseIssueDate}</div>
        </div>
    )
}