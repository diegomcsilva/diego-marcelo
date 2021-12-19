import { createContext, useState, FC} from "react";

interface IThemeContext {
  filter: string;
  toggleFilter: (value: string) => void;
}

const defaultState = {
  filter: '',
  toggleFilter: (value: string) => {}
};

export const FilterContext = createContext<IThemeContext>(defaultState);

export const FilterProvider: FC = ({ children }) => {
  const [filter, setFilter] = useState(defaultState.filter);

  const toggleFilter = (value: string) => {
    setFilter(value);
  };

  return (
    <FilterContext.Provider
      value={{
        filter,
        toggleFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}