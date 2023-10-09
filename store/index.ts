import { create } from "zustand";
import { Database } from "@/lib/database.types";
type ProfileType = Database["public"]["Tables"]["profiles"]["Row"];

type StateType = {
  user: ProfileType;
  setUser: (payload: ProfileType) => void;
};

const useStore = create<StateType>((set) => ({
  //初期値
  user: { id: "", email: "", name: "", introduce: "", avatar_url: "" },
  // アップデート
  setUser: (payload) => set({ user: payload }),
}));

export default useStore;
