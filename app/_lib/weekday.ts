enum Weekday {
    MON = "Monday",
    TUE = "Tuesday",
    WED = "Wednesday",
    THU = "Thursday",
    FRI = "Friday",
    SAT = "Saturday",
    SUN = "Sunday",
    ALL = "All days",
};

const WEEKDAY_NAMES = {
  [Weekday.MON]: "Monday",
  [Weekday.TUE]: "Tuesday",
  [Weekday.WED]: "Wednesday",
  [Weekday.THU]: "Thursday",
  [Weekday.FRI]: "Friday",
  [Weekday.SAT]: "Saturday",
  [Weekday.SUN]: "Sunday",
};

type TimeSlot = {
  weekday: Weekday;
  start: number;
  end: number;
};

function convertToTimeSlots(weekday: Weekday, startTime: string, endTime: string): TimeSlot{
    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    return {
        weekday,
        start: startHour * 60 + startMinute,
        end: endHour * 60 + endMinute,
    };
}

function toHourMinuteString(totalMinutes: number): string {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
}

export { Weekday, WEEKDAY_NAMES, type TimeSlot, convertToTimeSlots, toHourMinuteString };