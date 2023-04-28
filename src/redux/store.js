import { configureStore } from "@reduxjs/toolkit";
import signUpSlice from "./reducers/signUp.slice";

// Crée le store en combinant les réducteurs de chaque tranche d'état
const store = configureStore({
    reducer: {
        signup: signUpSlice,
        // Ajouter d'autres tranches d'état ici si nécessaire
    },
});

export default store;
