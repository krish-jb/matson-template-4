import type { AuthError, Session } from "@supabase/supabase-js";
import {
    createContext,
    type Dispatch,
    type SetStateAction,
    useContext,
} from "react";
import type { User, WeddingData, WeddingWish } from "@/types/wedding";

export interface WeddingContextType {
    weddingData: WeddingData;
    weddingWishes: Array<WeddingWish>;
    setWeddingWishes: Dispatch<SetStateAction<Array<WeddingWish>>>;
    user: User | null;
    session: Session | null;
    isLoggedIn: boolean;
    globalIsLoading: boolean;
    updateWeddingData: (data: Partial<WeddingData>) => Promise<boolean>;
    updateGalleryImage: (
        file: File | null,
        imageCaption: string | null,
        index: number,
    ) => Promise<void>;
    loadAllWeddingWishes: () => Promise<void>;
    saveData: (data: WeddingData) => Promise<boolean>;
    addWish: (data: WeddingWish) => Promise<void>;
    login: (
        email: string,
        password: string,
    ) => Promise<{ error: AuthError | null }>;
    logout: () => Promise<void>;
}

export const WeddingContext = createContext<WeddingContextType | undefined>(
    undefined,
);

export const useWedding = () => {
    const context = useContext(WeddingContext);
    if (context === undefined) {
        throw new Error("useWedding must be used within a WeddingProvider");
    }
    return context;
};
