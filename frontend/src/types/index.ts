export interface Address {
  cep: string;
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Client {
  name: string;
  cpf: string;
  phone: string;
  cellphone: string;
  blood_type: string;
  email: string;
  address: Address;
}

export interface Profession {
  id?: string;
  name: string;
}

export interface Specialist {
  name: string;
  register: string;
  phone: string;
  cellphone: string;
  email: string;
  profession_name: string;
  address: Address;
}