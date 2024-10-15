const parseNumber = (value, defaultValue) => {
  if (typeof value !== 'string') return defaultValue; /// means if the value is undefined returned default value

  const parsedValue = parseInt(value); /// checking if the value is the number and make it a number if needed
  if (Number.isNaN(parsedValue)) return defaultValue;

  return parsedValue;
};

const parsePaginationParams = ({ perPage, page }) => {
  const parsedPerPage = parseNumber(perPage, 10);
  const parsedPage = parseNumber(page, 1);

  return {
    perPage: parsedPerPage,
    page: parsedPage,
  };
};

export default parsePaginationParams;
