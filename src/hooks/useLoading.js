import { useEffect, useState } from "react";

function useLoading() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return { loading };
}

export default useLoading;
