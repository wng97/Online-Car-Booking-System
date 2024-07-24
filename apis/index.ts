import { CreateUserData, FilterProps, LoginUserData } from "@/types";
import { toast } from "sonner";
import axios from "axios";

export const fetchCars = async (filters: FilterProps) => {
  const { manufacturer, model, minPrice, maxPrice } = filters;
  console.log(manufacturer);

  const getCarsApi = `http://localhost:5001/cars?make=${manufacturer}&model=${model}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

  const response = await axios.get(getCarsApi);

  console.log("res:", response);
  return response.data;
};

export const register = async (createUserData: CreateUserData) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/register",
      createUserData
    );
    toast.success("User registered successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Error registering user");
    console.log("Error registering user: ", error);
  }
};

export const login = async (loginUserData: LoginUserData) => {
  try {
    const response = await axios.post(
      "http://localhost:5001/login",
      loginUserData
    );
    sessionStorage.setItem("token", response.data.token);
    sessionStorage.setItem("isAdmin", response.data.isAdmin);
    toast.success("User login successfully");
    console.log(response);
    return response.data;
  } catch (error) {
    toast.error("Error login user");
    console.log("Error login user: ", error);
  }
};
