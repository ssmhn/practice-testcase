export interface LicensePhoneNumberType {
	LicenseePhoneNumber: string
}

export interface DataTypeBase {
	DocDate: string;
	DocNumber: string;
	ExtraInfo: string;
	INN: string;
	LicenseIssueDate: string;
	LicenseRegNumber: string;
	LicenseeAddress: string;
	LicenseeFullName: string;
	OGRN: string;
	id: number;
}

interface DataTypeResponse extends DataTypeBase {
	LicenseePhoneNumber: LicensePhoneNumberType[];
}

export interface DataType extends DataTypeBase {
	LicenseePhoneNumber: string[]
}

export interface ResponseType {
	global_id: number;
	Number: number;
	Cells: DataTypeResponse;
}