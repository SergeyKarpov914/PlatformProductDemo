const config = {
    baseAddress: 'https://localhost:4412/api/',
  };
  
  const currencyFormatter = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  
  export { config };
  export { currencyFormatter };
  