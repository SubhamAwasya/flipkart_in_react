import { useState } from "react";

//icons
import { GrClose } from "react-icons/gr";

//my
import useGlobalContext from "../context/Context";

function CreateShop() {
  const { setToggleCreateShop } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const [infoText, setInfoText] = useState("error");

  return (
    <div className="w-full h-screen fixed top-0 left-0 flex items-center justify-center z-50">
      <form
        className="w-[320px] flex flex-col gap-1 items-center bg-base-100 px-10 pb-10 rounded-xl "
        onSubmit={() => {}}
      >
        <button
          className="relative w-6 h-6 left-[135px] top-[10px] flex justify-center items-center rounded-full border-2 border-transparent hover:border-2"
          onClick={(e) => {
            e.preventDefault();
            setToggleCreateShop((prev) => !prev);
          }}
        >
          <GrClose className="text-2xl" />
        </button>

        <span className="mt-2 mb-6 text-2xl font-bold text-center text-wrap">
          Create Shop to start selling products
        </span>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            required
            type="text"
            className="grow"
            placeholder="Shop Name"
            name="name"
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            required
            type="text"
            className="grow"
            placeholder="Email"
            name="email"
          />
        </label>

        <button
          className="btn btn-neutral w-full mt-2"
          disabled={isLoading}
          type="submit"
        >
          {!isLoading ? (
            "Create Shop"
          ) : (
            <span className="loading loading-spinner text-success"></span>
          )}
        </button>
        <span className="mt-2 text-error font-semibold">{infoText}</span>
      </form>
      {/*transparent bg*/}
      <div className="absolute w-full h-screen bg-black -z-10 opacity-90"></div>
    </div>
  );
}

export default CreateShop;
