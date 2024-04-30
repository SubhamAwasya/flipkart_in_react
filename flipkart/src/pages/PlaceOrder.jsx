import { useState } from "react";
import { Country_list } from "../constant/Category";

function PlaceOrder() {
  // Handle form submission logic here
  function handleSubmit() {}

  return (
    <div className="mx-4 md:w-[700px] md:mx-auto mb-[10%]">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 my-6">
        <input
          type="text"
          name="name"
          required
          placeholder="Full Name"
          className="input input-bordered w-full "
        />

        <input
          type="number"
          name="phone"
          required
          inputMode="numeric"
          placeholder="Phone Number"
          className="input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />

        <div className="flex gap-2">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Select Country
            </option>
            {Country_list.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <input
            type="text"
            name="city"
            required
            placeholder="City"
            className="input input-bordered w-full "
          />
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            name="state"
            required
            placeholder="State"
            className="input input-bordered w-full "
          />
          <input
            type="number"
            name="pincode"
            required
            placeholder="Pin code"
            className="input input-bordered w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
        </div>

        <input
          type="text"
          name="streetAddress"
          required
          placeholder="Street Address"
          className="input input-bordered w-full "
        />

        <button type="submit" className="btn btn-neutral w-full">
          Confirm Order
        </button>
      </form>
    </div>
  );
}

export default PlaceOrder;
