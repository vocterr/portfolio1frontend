export const timeConverter = (date: string) => {
    const options: Intl.DateTimeFormatOptions = {
        day: "numeric",
        month: "short"
    };
    const formatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDate = formatter.format(new Date(date));

    const day = new Date(date).getDate();
    const ordinalSuffix = (d: number) => {
        return d === 1 || d === 21 || d === 31
            ? "st"
            : d === 2 || d === 22
            ? "nd"
            : d === 3 || d === 23
            ? "rd"
            : "th";
    };

    return `${day}${ordinalSuffix(day)} ${formattedDate.split(" ")[1]}`;
};
