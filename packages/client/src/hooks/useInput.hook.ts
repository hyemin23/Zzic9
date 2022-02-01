import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnTypes<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>,
];

const useInput = <T>(init: T): ReturnTypes<T> => {
  const [value, setValue] = useState(init);

  const handler = useCallback((e: any) => {
    setValue(e.target.value);
  }, []);

  return [value, handler, setValue];
};

export default useInput;
