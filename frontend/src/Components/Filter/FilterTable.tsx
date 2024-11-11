import { FilterType } from "../../Util/Interfaces/filetr";
import { FormEvent, useState } from "react";
import { FilmStyle, FilmType, WatchStatus } from "../../Util/Enums/enum";
import "../../Style/FilterFilms.css";

const FilterTable = ({
  setFilter,
}: {
  setFilter: (query: FilterType) => void;
}) => {
  const [name, setName] = useState<string>("");
  const [style, setStyle] = useState<FilmStyle | "">("");
  const [filmType, setType] = useState<FilmType | "">("");
  const [watchStatu, setWatchStatus] = useState<WatchStatus | "">("");
  const [yearStart, setYearStart] = useState<number>(2024);
  const [monthStart, setMonthStart] = useState<number>(0);
  const [dayStart, setDayStart] = useState<number>(0);
  const [yearEnd, setYearEnd] = useState<number>(
    Number(new Date().getFullYear())
  );
  const [monthEnd, setMonthEnd] = useState<number>(0);
  const [dayEnd, setDayEnd] = useState<number>(1);
  const [matenRatingStart, setMatenRatingStart] = useState<number>(0);
  const [matenRatingEnd, setMatenRatingEnd] = useState<number>(10);
  const [delaRatingStart, setDelaRatingStart] = useState<number>(0);
  const [delaRatingEnd, setDelaRatingEnd] = useState<number>(10);
  const [averageRatingStart, setAverageRatingStart] = useState<number>(0);
  const [averageRatingEnd, setAverageRatingEnd] = useState<number>(10);

  const handleRatingInput = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    f: (n: number) => void
  ) => {
    if ((e.currentTarget.value as unknown as number) > 10) {
      e.currentTarget.value = "10";
    } else if ((e.currentTarget.value as unknown as number) < 0) {
      e.currentTarget.value = "0";
    } else {
      f(Number(e.currentTarget.value));
    }
  };

  const getPossibleYears = (startYear: number, endYear: number) => {
    const years: number[] = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }

    return years;
  };

  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const getDays = (year: number, month: number): number[] => {
    if (month === 0) return Array.from({ length: 31 }, (_, index) => index + 1);
    else if (year === 0) {
      if (month === 2)
        return Array.from({ length: 29 }, (_, index) => index + 1);

      const date = new Date(year, month, 0);
      const daysInMonth = date.getDate();

      return Array.from({ length: daysInMonth }, (_, index) => index + 1);
    }

    const date = new Date(year, month, 0);
    const daysInMonth = date.getDate();

    return Array.from({ length: daysInMonth }, (_, index) => index + 1);
  };

  const handleSetFilter = () => {
    const unfilteredFilter: FilterType = { name, style, type: filmType, createdAtStart };
  };

  return (
    <div className="filter-films">
      <div className="filter-category">
        <div className="category-title">Film Details</div>

        <div className="section">
          <div className="title">Name</div>
          <div className="content">
            <input
              placeholder="Search film name..."
              onInput={(e) => setName(e.currentTarget.value)}
            />
          </div>
        </div>

        <div className="section">
          <div className="title">Style</div>
          <div className="content">
            <select
              onInput={(e) =>
                setStyle(e.currentTarget.value as FilmStyle | "")
              }
            >
              <option value="">Any</option>

              {Object.values(FilmStyle).map((styleName, index) => (
                <option key={styleName} value={index}>
                  {styleName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="section">
          <div className="title">Type</div>
          <div className="content">
            <select
              onInput={(e) =>
                setType(e.currentTarget.value as FilmType | "")
              }
            >
              <option value="">Any</option>

              {Object.values(FilmType).map((styleName) => (
                <option key={styleName} value={styleName}>
                  {styleName}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="section">
          <div className="title">Added to list start</div>
          <div className="content">
            <select
              onChange={(e) => {
                setYearStart(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={2024}>Year</option>

              {getPossibleYears(2024, yearEnd).map((year) => (
                <option key={`year-${year}`} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => {
                setMonthStart(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={0}>Month</option>

              {months.map((month, index) => (
                <option key={`month-${month}`} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => {
                setDayStart(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={1}>Day</option>

              {getDays(yearStart, monthStart).map((day) => (
                <option key={`day-${day}`} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="section">
          <div className="title">Added to list end</div>
          <div className="content">
            <select
              onChange={(e) => {
                setYearEnd(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={2024}>Year</option>

              {getPossibleYears(
                yearStart,
                Number(new Date().getFullYear())
              ).map((year) => (
                <option key={`year-${year}`} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => {
                setMonthEnd(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={0}>Month</option>

              {months.map((month, index) => (
                <option key={`month-${month}`} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>

            <select
              onChange={(e) => {
                setDayEnd(e.currentTarget.value as unknown as number);
              }}
            >
              <option value={0}>Day</option>

              {getDays(yearEnd, monthEnd).map((day) => (
                <option key={`day-${day}`} value={day}>
                  {day}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="section">
          <div className="title">Watching status</div>
          <div className="content">
            <select
              onInput={(e) =>
                setWatchStatus(e.currentTarget.value as WatchStatus | "")
              }
            >
              <option value="">Any</option>

              {Object.values(WatchStatus).map((watchType) => (
                <option key={watchType} value={watchType}>
                  {watchType}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="filter-category">
        <div className="category-title">Rating details</div>

        <div className="section">
          <div className="title">Maten's rating</div>
          <div className="content">
            <input
              defaultValue={0}
              type="number"
              min={0}
              max={matenRatingEnd}
            />
          </div>
        </div>

        <div className="section">
          <div className="title">Dela's rating</div>
          <div className="content">
            <input
              defaultValue={0}
              type="number"
              min={0}
              max={10}
            />
          </div>
        </div>

        <div className="section">
          <div className="title">Average rating</div>
          <div className="content">
            <input
              defaultValue={0}
              type="number"
              min={0}
              max={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
