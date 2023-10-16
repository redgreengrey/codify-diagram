export const halfYearData = [5100, 560, 5100, 5100, 560, 5100];

export const yearData = [5100, 560, 5100, 5100, 560, 5100, 5100, 560, 5100, 5100, 560, 5100];

export const monthData = [
    5100, 560, 5100, 5100, 560, 5100, 5100, 560, 5100, 5100,
    5100, 560, 5100, 5100, 560, 5100, 5100, 560, 5100, 5100,
    5100, 560, 5100, 5100, 560, 5100, 5100, 560, 5100, 5100
];

export const dropdownOptions = ['За последний месяц', 'За последние 6 месяцев', 'За последний год'];

export const fakeData = {
    'За последний месяц': monthData,
    'За последние 6 месяцев': halfYearData,
    'За последний год': yearData,
}

export function getMonthsNames(numberOfMonths) {
    const months = Array.from({ length: numberOfMonths }, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString("Ru", { month: "short" });
    })
    return months.map(x => {
        x = x[0].toUpperCase().concat(x.substring(1));
        return x.replaceAll('.', '');
    });
}

export const fakeChartData = {
    'За последний месяц': Array.from({ length: 30 }, (v, k) => k + 1),
    'За последние 6 месяцев': getMonthsNames(6),
    'За последний год': getMonthsNames(12),
}