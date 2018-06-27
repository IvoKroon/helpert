export const Random = () => {
  const hash = 1241124;
  return (
    Math.floor(Math.random() * hash).toString(36) +
    Math.abs(Math.floor(Math.random() * hash) ^ Math.floor(+new Date())).toString(36)
  );
};

export const CapitalizeFirstLetter = string => string.charAt(0).toUpperCase() + string.slice(1);

export default { Random, CapitalizeFirstLetter };
