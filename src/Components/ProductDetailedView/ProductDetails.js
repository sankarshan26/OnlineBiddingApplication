import React, { useState } from "react";
import Navbar from "../NavigationBar/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { changeDetailedView } from "../../store/ProductDetailedViewSlice";

function ProductDetails() {
  const [active_pic, setActive_pic] = useState("https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70");
  const dispatch = useDispatch();
  const activeProduct = useSelector(
    (state) => state.productdetailedview,
    shallowEqual
  );
  function handleClick() {
    dispatch(
      changeDetailedView({
        id: 101,
        name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
        rating: 5.0,
        endDate: "2023-11-10T23:59:59Z",
        basePrice: 350,
        currPrice: 400,
        image:
          "https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
        images: [
          "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
          "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/2/z/4/-original-imagqxx2haehpjnf.jpeg?q=70",
          "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/q/h/k/-original-imaguegfshh5fz6x.jpeg?q=70",
          "https://img.freepik.com/free-photo/close-up-hand-holding-smartphone_23-2149148857.jpg",
        ],
      })
    );
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center my-4 lg:my-6">
        <div className="w-[95%] md:w-[80%] ">
          <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-1 px-6 border-2 border-red-500 hover:border-transparent rounded-lg">
            <Link
              to="/home"
              onClick={() => {
                handleClick();
              }}
            >
              Back
            </Link>
          </button>

          <div className="mt-4 flex flex-wrap justify-center items-start gap-5">
            <div className="w-[40%] min-w-[250px]  md:min-h-[80vh] flex flex-col items-center">
              <div className="h-[30vh] md:[40vh] lg:h-[50vh] w-[75%] flex justify-center items-center overflow-hidden">
                <img
                  src={`${active_pic}`}
                  className="aspect-saquare h-[100%]"
                  alt="productimage"
                />
              </div>
              <div className="h-[15%] flex justify-between mt-6">
                {activeProduct.images.map((item) => {
                  return (
                    <div
                      className={
                        item === active_pic
                          ? "inline w-[20%] h-[20%] p-[4px] border-2 border-blue-300 rounded-md"
                          : "inline w-[20%] h-[20%] p-[2px]"
                      }
                    >
                      <img
                        src={`${item}`}
                        alt="productimage"
                        className="w-[100%] h-[100%] aspect-square"
                        onClick={()=>{
                          setActive_pic(item)
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="w-[80%] md:w-[50%] min-w-[300px] border-2 min-h-[500px] flex flex-col">
              <div className="border ">
                <h1 className="text-3xl font-semibold text-center">
                  {activeProduct.name}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
