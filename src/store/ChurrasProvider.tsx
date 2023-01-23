import {
  useState,
  ReactNode,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { api } from "../services/axios";

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
  const [churrascos, setChurrascos] = useState<Churrasco[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get("churras", {
      params: {
        q: query,
        _sort: "createdAt",
        _order: "asc",
      },
    });
    setChurrascos(response.data);
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  const addChurras = useCallback(async (churrasco: Churrasco) => {
    const response = await api.post("churras", {
      ...churrasco,
    });
    setChurrascos((state) => [response.data, ...state]);
  }, []);

  const toogleGuest = useCallback(
    async (churrasId: string, guestId: string) => {
      let churrasDetails = churrascos.find((churrasco) => {
        return churrasco.id === Number(churrasId);
      });

      const { guests } = churrasDetails;

      const newGuests = guests.map((guest) => {
        if (guest.guestId === guestId) {
          return { ...guest, isPayed: !guest.isPayed };
        }
        return guest;
      });

      let newChurrasDetails = { ...churrasDetails, guests: newGuests };

      await api.put(`churras/${churrasId}`, {
        ...newChurrasDetails,
        guests: newGuests,
      });

      const newChurrasState = churrascos.map((churras) => {
        if (churras.id === Number(churrasId)) {
          return { ...churras, guests: newGuests };
        }
        return churras;
      });

      setChurrascos(newChurrasState);
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
