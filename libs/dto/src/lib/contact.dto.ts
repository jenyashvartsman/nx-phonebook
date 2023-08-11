export interface ContactDto {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatarUrl: string;
  email?: string;
  address?: ContactAddressDto;
}

export interface ContactAddressDto {
  street: string;
  city: string;
  country: string;
  zipCode: string;
}
