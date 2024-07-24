import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface SearchBarProps {
  setManufacturer: (manufacturer: string) => void;
  setModel: (model: string) => void;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  car_id: number;
  fuel_type: string;
  make: string;
  model: string;
  year: number;
  daily_rate: number;
  car_pic: string;
  vehicle_no: string;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface FilterProps {
  manufacturer: string;
  model: string;
  minPrice: number;
  maxPrice: number;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter: (filter: any) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (limit: number) => void;
}

export interface AddNewCarProps {
  isOpen: boolean;
  closeModal: () => void;
}

export interface CreateCarPayload {
  vehicle_no: string;
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  daily_rate: number;
  car_picture: File;
}

export interface CreateUserData {
  email: string;
  username: string;
  password: string;
}

export interface LoginUserData {
  username: string;
  password: string;
}
