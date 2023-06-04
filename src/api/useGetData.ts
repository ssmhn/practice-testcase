import axios, {AxiosResponse} from 'axios'
import {ResponseType} from '../types/dataTypes'
import {config} from '../config'

export const getData = async (skip: number) => {
	return axios.get<any, AxiosResponse<ResponseType[], any>, any>(`${config.BASE_URL}/datasets/3102/rows/?api_key=${config.API_KEY}&$top=${10}&$skip=${10*skip}`)
		.then((response) => {
			const data = response.data
			
			console.log(data)
			
			return data?.map(el => {
				const licensePhoneNumber = el.Cells.LicenseePhoneNumber
				
				const returnLicensePhoneNumber = licensePhoneNumber?.map((phone) => {
					return '+7 ' + phone.LicenseePhoneNumber
				})
				
				return {
					...el.Cells,
					LicenseePhoneNumber: returnLicensePhoneNumber
				}
			})
		})
}