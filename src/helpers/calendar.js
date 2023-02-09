export function generateMonthCalendar(month, year) {
  const dateStart = new Date(year, month, 1);
  const dateEnd = new Date(dateStart);
  dateEnd.setMonth(dateStart.getMonth() + 1);
  dateEnd.setDate(0);

  const dias = [];

  if (dateStart.getDay() !== 0) {
    for (let dia = 0; dia < dateStart.getDay(); dia++) {
      dias.push({
        dayOfWeek: dia,
        week: 0,
        disabled: true,
      });
    }
  }

  for (let dia = 1; dia <= dateEnd.getDate(); dia++) {
    const date = new Date(year, month, dia);
    dias.push({
      year,
      month,
      date: dia,
      dayOfWeek: date.getDay(),
    });
  }

  if (dateEnd.getDay() !== 6) {
    for (let dia = dateEnd.getDay(); dia < 6; dia++) {
      dias.push({
        dayOfWeek: dia,
        disabled: true,
      });
    }
  }

  const monthCalendar = [];
  const qtdSemanas = Math.ceil(dias.length / 7);

  for (let index = 0; index < qtdSemanas; index++) {
    monthCalendar.push(dias.slice(index * 7, index * 7 + 7));
  }

  return monthCalendar;
}

export const monthToString = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];