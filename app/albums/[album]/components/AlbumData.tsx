export default function AlbumData({ albumData }: any) {
  const { name } = albumData;
  const artistName = albumData?.artists?.[0].name || "";

  return (
    <div className="text-white flex flex-col justify-between items-center w-full">
      <div className=" flex justify-between mx-7 w-1/2 items-center p-2">
        <h1 className="text-sm md:text-lg lg:text-lg xl:text-2xl font-semibold">
          {name}
        </h1>
        <p>Messages</p>
      </div>
      <div className=" w-1/2">
        <div className="flex flex-col">
          <p
            className="m-2
        text-md font-light underline cursor-pointer"
          >
            {artistName}
          </p>
          <div className="mx-2 mb-1 flex font-bold justify-start gap-5">
            <button className="rounded-md w-12 cursor-none bg-[#1DB954]">
              R&B
            </button>
            <button className="rounded-md w-12 cursor-none bg-[#1DB954]">
              R&B
            </button>
          </div>
          <div className="mx-3">
            <p>*****</p>
          </div>
          <hr className="mt-20 border-[#1DB954]" />
        </div>
      </div>
    </div>
  );
}
