import axios, {AxiosResponse} from 'axios'
import {ResponseType} from '../types/dataTypes'
import {config} from '../config'

export const getData = async (skip: number) => {
	return axios.get<any, AxiosResponse<ResponseType[], any>, any>(`${config.BASE_URL}/datasets/3102/rows/?api_key=${config.API_KEY}&$top=${12}&$skip=${12*skip}`)
		.then((response) => {
			const data = response.data
			
			return data?.map(el => {
				const licensePhoneNumber = el.Cells.LicenseePhoneNumber
				
				const returnLicensePhoneNumber = licensePhoneNumber?.map((phone) => {
					return '+7 ' + phone.LicenseePhoneNumber
				})
				
				return {
					...el.Cells,
					id: el.global_id,
					LicenseePhoneNumber: returnLicensePhoneNumber
				}
			})
		})
}

export const getItemsCount = async (): Promise<number> => {
	const returnData: number = await axios.get(`${config.BASE_URL}/datasets/3102/?api_key=${config.API_KEY}`).then((response => {
		const data = response.data
		
		return +data?.ItemsCount || 0
	}))
	
	return returnData
}