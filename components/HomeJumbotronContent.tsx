import patternPad from "../public/patternpad.svg";
import bbblurry from "../public/bbblurry.svg";

function HomeJumbotronContent() {
  return (
    <div
      className="h-screen bg-no-repeat bg-cover flex justify-center items-center flex-col"
      style={{ backgroundImage: `url(${bbblurry.src})` }}
    >
      <div className="h-full flex justify-center items-center mx-20 flex-col sm:flex-row md:flex-row xl:flex-row lg:flex-row gap-10 w-full">
        <div className=" w-full h-full p-4 flex flex-col gap-2 justify-center items-center sm:w-1/2 sm:h-1/2">
          <div className="w-full sm:w-1/2">
            <h3 className="text-6xl font-bold text-white text-left">
              Welcome To Album Rater
            </h3>
          </div>
          <div className="w-full sm:w-1/2">
            <p className="font-light text-sm text-left">
              Album Rater is a web application that allows you to rate your
              favorite albums with other music lovers.
            </p>
          </div>
          <div className="flex gap-20 w-full sm:w-1/2">
            <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
              Login
            </button>
          </div>
        </div>
        {/* Sign Up Form */}
        <div className=" bg-[#F7EDE2] rounded w-full sm:w-1/2 mx-10  h-full sm:h-1/2 p-4 flex flex-col gap-2 justify-center items-center">
          <div className="w-full h-full p-4 flex flex-col gap-2 justify-center items-center">
            <div className="w-full justify-start text-left sm:w-1/2">
              <h3 className="text-4xl font-bold text-left text-[#84A59D]">
                Sign up for Album Rater
              </h3>
            </div>
            <form className="mt-3 flex flex-col justify-center items-center w-full gap-2">
              <div className="w-full flex justify-center gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  className="p-5 rounded"
                />
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="p-5 rounded"
                />
              </div>
              <div className="w-full flex justify-center gap-2 flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="p-5 rounded"
                />
                <input
                  type="text"
                  placeholder="Enter Password"
                  className="p-5 rounded"
                />
              </div>
              <div className="flex w-full sm:w-1/2">
                <button className="p-3 bg-[#84A59D] w-[100px] h-[40px] rounded items-center flex justify-center text-white">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeJumbotronContent;
