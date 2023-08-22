import { FC } from "react";
import Speaker from "@/app/app/Speaker";
import LeftArrow from "@/app/app/LeftArrow";
import RightArrow from "@/app/app/RightArrow";

const ReviewCard: FC = () => {
  return (
    <div className=" w-full">
      <div className="h-60 ">
        <div className="border-black border-2 px-4 py-2">
          I am Hungry sleep hungry sleep...sleep..hungry
        </div>
        <div className="mt-2">
          <button className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="btn-style">
          <LeftArrow />
        </button>
        <button className="btn-style">
          <span className="mr-1 font-semibold">KOR</span>/
          <span className="ml-1">ENG</span>
        </button>
        <button className="btn-style">
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
export default ReviewCard;
