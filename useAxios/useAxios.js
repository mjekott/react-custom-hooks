import defaultAxios from 'axios';
import { useState } from 'react';

export const useAxios = (opts, axiosInstance = defaultAxios) => {
  if (!opts.url) {
    return;
  }

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(true);

  const refetch = () => {
    setState({
      ...state,
      laoding: true,
    });

    setTrigger(!trigger);
  };
  useEffect(() => {
    axiosInstance(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          laoding: false,
          error,
        });
      });
  }, [trigger]);

  return { ...state, refetch };
};
