function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
    };
    return new Date(date).toLocaleDateString("de-DE", options);
}

export {formatDate};
