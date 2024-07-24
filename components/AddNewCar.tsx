"use client";
import { AddNewCarProps, CreateCarPayload } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
  Input,
} from "@headlessui/react";
import { fuels } from "@/constants";
import axios from "axios";

const AddNewCar = ({ isOpen, closeModal }: AddNewCarProps) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData);
    console.log(payload);
    const createCarApi = "http://localhost:5001/car";
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    try {
      await axios.post(createCarApi, payload, config);
      return;
    } catch (err) {
      console.log(err);
    }

    // await createCar();
    console.log("submitted");
  };
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                  >
                    <Image
                      className="object-contain"
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex justify-center">
                    <form
                      className="rounded px-8 pt-6 pb-8 mb-4"
                      onSubmit={handleSubmit}
                      encType="multipart/form-data"
                    >
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Vehicle No
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="vehicle_no"
                          type="text"
                          placeholder="JQK 1234"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Make
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          name="make"
                          type="text"
                          placeholder="Toyota"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Model
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="model"
                          type="text"
                          placeholder="Corolla"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Year
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="year"
                          type="number"
                          placeholder="2024"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Fuel Type
                        </label>
                        <select
                          name="fuel_type"
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        >
                          {fuels.map((opt, index) => (
                            <option value={opt.value} key={index}>
                              {opt.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Daily Rate
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="daily_rate"
                          type="number"
                          placeholder="50"
                        />
                      </div>
                      <div className="mb-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          Car Image
                        </label>
                        <Input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          name="car_picture"
                          type="file"
                          placeholder="50"
                        />
                      </div>
                      <div className="mt-7 flex justify-end">
                        <button
                          type="submit"
                          className="bg-primary-blue text-white w-full py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        src="/hero.png"
                        alt="car model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-cl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-black-100 font-semibold">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AddNewCar;
