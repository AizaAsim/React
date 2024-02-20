import { useEffect, useState } from "react";

function useCurrencyInfo(currency: string) {
  const [data, setData] = useState<any>(null); // Set appropriate type for data

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((responseData) => {
        setData(responseData[currency]); // Access property directly
      })
      .catch((error) => {
        console.error("Error fetching currency info:", error);
        setData(null); // Set data to null on error
      });
  }, [currency]); // Dependency array to re-run effect when currency changes

  return data;
}

export default useCurrencyInfo;
