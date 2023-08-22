import { FC } from "react";
import Link from "next/link";
// interface DayCardProps {} 써도됨
type DayCardProps = {
  index: number;
};

const DayCard: FC<DayCardProps> = ({ index }) => {
  return (
    <Link href={`/day/${index + 1}`}>
      <li className="text-center border-black border-2 font-medium rounded-lg shadow-md shadow-gray-300">
        Day {index + 1}
      </li>
    </Link>
  );
};

export default DayCard;
