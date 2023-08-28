import { Dispatch, FC, SetStateAction, useState } from "react";
import Speaker from "@/app/app/Speaker";
import LeftArrow from "@/app/app/LeftArrow";
import RightArrow from "@/app/app/RightArrow";
import { TReview } from "@/app/day/[id]/page";

type ReviewCardProps = Pick<TReview, "sentences"> & {
  currentReviewIndex: number;
  setCurrentReviewIndex: Dispatch<SetStateAction<number>>;
};
type TLanguage = "korean" | "english";

const ReviewCard: FC<ReviewCardProps> = ({
  sentences,
  currentReviewIndex,
  setCurrentReviewIndex,
}) => {
  const [language, setLanguage] = useState<TLanguage>("korean");

  const onClickLanguage = () => {
    if (language === "korean") {
      setLanguage("english");
    } else {
      setLanguage("korean");
    }
  };

  const onClickPrev = () => {
    if (currentReviewIndex <= 0) {
      setCurrentReviewIndex(sentences.length - 1);
    } else {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
    setLanguage("korean");
  };
  const onClickNext = () => {
    if (currentReviewIndex >= sentences.length - 1) {
      setCurrentReviewIndex(0);
    } else {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
    setLanguage("korean");
  };

  return (
    <div className=" w-full">
      <div className="h-60 ">
        <div className="border-black border-2 px-4 py-2">
          {sentences[currentReviewIndex][language]}
        </div>
        <div className="mt-2">
          <button className="btn-style">
            <Speaker />
          </button>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button className="btn-style" onClick={onClickPrev}>
          <LeftArrow />
        </button>
        <button className="btn-style" onClick={onClickLanguage}>
          <span className={`${language === "korean" && "font-semibold"} mr-1`}>
            KOR
          </span>
          /
          <span className={`${language === "english" && "font-semibold"} ml-1`}>
            ENG
          </span>
        </button>
        <button className="btn-style" onClick={onClickNext}>
          <RightArrow />
        </button>
      </div>
    </div>
  );
};
export default ReviewCard;
