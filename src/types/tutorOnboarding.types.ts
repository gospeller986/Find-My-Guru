 export interface FormErrors {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  country: string;
  state: string;
  city: string;
  pincode: string;
  subjects?: string;
  highestDegree ?: string ;
}

export interface AddressInterface {
  value: string;
  label: string;
}

export interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
  country: AddressInterface | null;
  state: AddressInterface | null;
  city: AddressInterface | null;
  pincode: number;
  subjects ?: string[]; 
  highestDegree ?: string ;
}