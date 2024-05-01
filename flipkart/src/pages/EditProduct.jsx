import React from "react";
import { ProductCategory } from "../constant/Category";

function EditProduct() {
  function handleSubmit() {}

  return (
    <div className="mx-4 md:mx-20">
      <div className=" text-xl font-medium">
        Edit : Enter detais you want to Update
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Product Name"
            className="input input-bordered w-full "
          />

          <input
            type="number"
            name="price"
            required
            placeholder="Product Price"
            className="input input-bordered w-full "
          />

          <select
            className="select select-bordered w-full"
            required
            name="category"
            id="category"
            defaultValue="" // Set the default value to an empty string or any other default value
          >
            <option value="" disabled>
              Select Category
            </option>
            {ProductCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <textarea
            id="specifications"
            name="specifications"
            placeholder="Product Details"
            required
            className="textarea textarea-bordered textarea-lg w-full "
          />

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Upload Product Image</span>
            </div>
            <input
              type="file"
              required
              accept="image/*"
              name="product_image"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>

          <button type="submit" className="btn btn-neutral w-full">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditProduct;
