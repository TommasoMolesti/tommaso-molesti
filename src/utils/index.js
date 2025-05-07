export const fromDateToString = (date) => {
    date = date.split('-');
    const year = date[0];
    const month = Number(date[1]);

    const months = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    };

    return `${months[month]} ${year}`;
};
