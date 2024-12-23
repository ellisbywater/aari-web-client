// @/src/contexts/PocketContext.jsx
import {
    createContext,
    useContext,
    useCallback,
    useState,
    useEffect,
    useMemo,
    ReactNode
  } from "react";
  import PocketBase from "pocketbase";
  import { useInterval } from "usehooks-ts";
  import {jwtDecode, JwtPayload} from "jwt-decode";
  import ms from "ms";


  const BASE_URL = "http://127.0.0.1:8090";
  const fiveMinutesInMs = ms("5 minutes");
  const twoMinutesInMs = ms("2 minutes");

  const PocketContext = createContext({})

  export const PocketProvider = ({children}:{children: ReactNode}) => {
    const pb = useMemo(()=> new PocketBase(BASE_URL),[])
    const [token, setToken] = useState(pb.authStore.token)
    const [user, setUser] = useState(pb.authStore.record)

    useEffect(() => {
        return pb.authStore.onChange((token, model) => {
            setToken(token)
            setUser(model)
        });
    },)

    const register = useCallback(async (email: string, password: string, password_confirmation: string) => {
        return await pb.collection("users").create({email, password, passwordConfrim: password_confirmation})
    },[pb])

    const login = useCallback(async (email: string, password: string) => {
        return await pb.collection("users").authWithPassword(email, password)
    },[pb])
    const logout = useCallback(()=> {
        pb.authStore.clear()
    }, [pb])

    const refreshSession = useCallback(async ()=> {
        if(!pb.authStore.isValid) return;
        const decoded = jwtDecode<JwtPayload>(token)
        if (decoded.exp) {
            const expirationWithBuffer = (decoded.exp + fiveMinutesInMs) / 1000;
            if (decoded.exp < expirationWithBuffer) {
                await pb.collection("users").authRefresh();
            }
        } else {
            console.log("Failed to parse token")
        }
        
    },[token, pb])

    useInterval(refreshSession, token ? twoMinutesInMs : null)

    return (
        <PocketContext.Provider value={{register, login, logout, user, token, pb}}>
            {children}
        </PocketContext.Provider>
    )
  }

  // eslint-disable-next-line react-refresh/only-export-components
  export const usePocketAuth = () => useContext(PocketContext)

