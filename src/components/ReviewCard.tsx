import { Dispatch, FC, SetStateAction, useState } from "react";
import Speaker from "@/app/icons/Speaker";
import LeftArrow from "@/app/icons/LeftArrow";
import RightArrow from "@/app/icons/RightArrow";
import { TReview } from "@/app/day/[id]/page";
import axios from "axios";

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
  const [isLoding, setIsLoading] = useState<boolean>(false);

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

  const onClickListen = async () => {
    try {
      if (isLoding) return;
      setIsLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api`, {
        text: sentences[currentReviewIndex].english,
      });
      const binaryData = atob(response.data.audioContent);
      const byteArray = new Uint8Array(binaryData.length);
      for (let i = 0; i < binaryData.length; i++) {
        byteArray[i] = binaryData.charCodeAt(i);
      }

      const blob = new Blob([byteArray.buffer], { type: "audio/mp3" });
      const newAudio = new Audio(URL.createObjectURL(blob));

      document.body.appendChild(newAudio);
      newAudio.play();

      setTimeout(() => {
        setIsLoading(false), 30000;
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" w-full">
      <div className="h-60 ">
        <div className="border-black border-2 px-4 py-2">
          {sentences[currentReviewIndex][language]}
        </div>
        <div className="mt-2">
          <button className="btn-style" onClick={onClickListen}>
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
