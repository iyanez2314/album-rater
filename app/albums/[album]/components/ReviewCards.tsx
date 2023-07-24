export default function ReviewCards() {
  return (
    <div className="mt-5 w-full max-w-[350px] h-[125px] bg-[#353535] rounded-[20px] flex items-center justify-start backdrop-blur-[10px] transition-all duration-500 ease-in-out transform hover:scale-105 hover:cursor-pointer">
      <div className="w-[70px] h-[70px] ml-[10px] rounded-[10px] bg-gradient-to-r from-[#d7cfcf] to-[#9198e5] transition-all duration-500 ease-in-out hover:from-[#9198e5] hover:to-[#712020]"></div>
      <div className="w-[calc(100%-110px)] ml-[10px] text-white font-poppins">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[18px] font-bold">This Album Sucks</p>
            <div className="flex gap-2">
              <p className="text-[12px] font-light">Isaac69</p>
              <span>*****</span>
            </div>
          </div>
          <span className="text-[12px]">12 min ago</span>
        </div>
        <p className="text-[14px] font-light truncate">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, autem
          quaerat unde dolor cum deserunt itaque excepturi commodi, molestias,
          sapiente delectus dicta! Dolorum voluptates earum optio mollitia eius
          commodi soluta.
        </p>
      </div>
    </div>
  );
}
