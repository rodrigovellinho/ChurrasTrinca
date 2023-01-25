import {
  useState,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { api } from "../services/axios";
import data from "./db.json";

interface ChurrasContextProps {
  children: ReactNode;
}

export interface Churrasco {
  id: number;
  name: string;
  day?: string;
  valueWithDrinks: number;
  valueWithoutDrinks: number;
  comments: string;
  createdAt: Date;
  guests: {
    guestId: string;
    name: string;
    value: number;
    isPayed: boolean;
  }[];
}

export interface ChurrasContextData {
  churrascos: Churrasco[];
  addChurras: (churrasco: Churrasco) => void;
  toogleGuest: (churrasId: string, guestId: string) => void;
}

const ChurrasContext = createContext<ChurrasContextData>(
  {} as ChurrasContextData
);

const ChurrasProvider = ({ children }: ChurrasContextProps): JSX.Element => {
  const [churrascos, setChurrascos] = useState<Churrasco[]>(() => {
    const storagedChurrascos = localStorage.getItem("storagedChurrascos");

    if (storagedChurrascos) {
      return JSON.parse(storagedChurrascos);
    }

    return data.churras;
  });

  const addChurras = useCallback(
    async (churrasco: Churrasco) => {
      const newState = [...churrascos, churrasco];
      setChurrascos(newState);

      localStorage.setItem("storagedChurrascos", JSON.stringify(newState));
    },
    [churrascos]
  );

  const toogleGuest = useCallback(
    (churrasId: string, guestId: string) => {
      let churrasDetails = churrascos.find((churrasco) => {
        return churrasco.id === Number(churrasId);
      });

      const { guests } = churrasDetails;

      const toggleGuests = guests.map((guest) => {
        if (guest.guestId === guestId) {
          return { ...guest, isPayed: !guest.isPayed };
        }
        return guest;
      });

      const newChurrasState = churrascos.map((churras) => {
        if (churras.id === Number(churrasId)) {
          return { ...churras, guests: toggleGuests };
        }
        return churras;
      });

      setChurrascos(newChurrasState);

      localStorage.setItem(
        "storagedChurrascos",
        JSON.stringify(newChurrasState)
      );
    },
    [churrascos]
  );

  return (
    <ChurrasContext.Provider value={{ churrascos, addChurras, toogleGuest }}>
      {children}
    </ChurrasContext.Provider>
  );
};

export { ChurrasProvider, ChurrasContext };
