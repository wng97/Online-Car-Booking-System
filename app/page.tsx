"use client";
import {
  Hero,
  SearchBar,
  CustomFilter,
  CarCard,
  // ShowMore,
  CustomButton,
  AddNewCar,
} from "@/components";
import { fetchCars } from "@/apis";
import { fuels, yearsOfProduction } from "@/constants";
useUser
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const getSessionStorage = async () => {
    const sessionIsAdminValue = await sessionStorage.getItem("isAdmin");
    setIsAdmin(sessionIsAdminValue === "true");
  };

  useEffect(() => {
    // Access sessionStorage here
    getSessionStorage();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states
  // const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2024);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  // pagination states
  // const [limit, setLimit] = useState(10);

  useEffect(() => {
    getCars();
  }, [manufacturer, model, minPrice, maxPrice]);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || "",
        model: model || "",
        minPrice: minPrice || 0,
        maxPrice: maxPrice || 1000,
      });
      setAllCars(result);
    } catch (error) {
      console.log("Error fetching cars: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="max-w-[14440px] mx-auto flex justify-between items-center py-4">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div>
            {isAdmin && (
              <CustomButton
                title="Add New Car"
                btnType="button"
                containerStyles="bg-primary-blue text-white rounded-full"
                handleClick={() => setIsOpen(true)}
              />
            )}
          </div>
        </div>

        <div className="home__filters">
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />

          <div className="home__filter-container">
            {/* <CustomFilter
              title="min price"
              options={fuels}
              setFilter={setFuel}
            /> */}
            {/* <CustomFilter
              title="max price"
              options={yearsOfProduction}
              setFilter={setYear}
            /> */}
          </div>
        </div>

        {allCars.length ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard car={car} key={index} />
              ))}
            </div>
            {loading && (
              <div>
                <Image
                  src="/loading.svg"
                  alt="loader"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            )}
            {/* <ShowMore
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
              setLimit={setLimit}
            /> */}
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
        <AddNewCar isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      </div>
    </main>
  );
}
