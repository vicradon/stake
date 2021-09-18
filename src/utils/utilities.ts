export const formatAsCurrency = (
  number,
  language = "en-NG",
  currency = "NGN"
) => {
  const formatter = new Intl.NumberFormat(language, {
    style: "currency",
    currency,
  });

  return formatter.format(number);
};
