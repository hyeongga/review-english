import { FC } from "react";
import Link from "next/link";
// interface DayCardProps {} 써도됨
type DayCardProps = {
  index: number;
};

const DayCard: FC<DayCardProps> = ({ index }) => {
  return (
    <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
      <Link href={`/day/${index + 1}`}>
        <button>Day {index + 1}</button>
      </Link>
    </li>
  );
};

export default DayCard;
