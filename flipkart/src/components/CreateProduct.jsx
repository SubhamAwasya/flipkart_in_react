import React from "react";

function CreateProduct({
  handleSubmit,
  handleChange,
  formData,
  ProductCategory,
}) {
  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">Add New Product</div>
      <div className="collapse-content">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full "
          />

          <input
            type="number"
            name="price"
            placeholder="Product Price"
            value={formData.price}
            onChange={handleChange}
            className="input input-bordered w-full "
          />

          <select
            className="select select-bordered w-full"
            onChange={handleChange}
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
            value={formData.specifications}
            onChange={handleChange}
            className="textarea textarea-bordered textarea-lg w-full "
          />

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Upload Product Image</span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateProduct;
