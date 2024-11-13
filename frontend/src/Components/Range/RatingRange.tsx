import { FormEvent } from "react";

const RatingRange = ({
  name,
  start,
  end,
  setStart,
  setEnd,
  addS = true,
}: {
  name: string;
  start: number;
  end: number;
  setStart: (n: number) => void;
  setEnd: (n: number) => void;
  addS?: boolean;
}) => {
  const validInput = (
    e: FormEvent<HTMLInputElement>,
    min: number,
    max: number
  ) => {
    const value: number = Number(e.currentTarget.value);
    console.log(value, min, max);

    if (value < min) {
      e.currentTarget.value = min.toString();
    } else if (value > max) {
      e.currentTarget.value = max.toString();
    }
  };

  return (
    <>
      <div className="title">{name}{addS ? "'s" : ""} rating</div>
      <div className="content">
        <input
          defaultValue={start}
          type="number"
          min={0}
          max={end}
          onBlur={(e) => {
            validInput(e, 0, end);
            setStart(Number(e.currentTarget.value));
          }}
        />
        -
        <input
          defaultValue={end}
          type="number"
          min={start}
          max={10}
          onBlur={(e) => {
            validInput(e, start, 10);
            setEnd(Number(e.currentTarget.value));
          }}
        />
      </div>
    </>
  );
};

export default RatingRange;
