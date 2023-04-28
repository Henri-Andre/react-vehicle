import { createSlice } from "@reduxjs/toolkit";

// Crée une tranche d'état pour les données de l'utilisateur
const signupSlice = createSlice({
    name: "signup",
    initialState: {
        name: "",
        first_name: "",
        email: "",
        password: "",
        confirmPassword: "",
    },
    reducers: {
        // Réducteurs pour mettre à jour chaque champ de l'état
        setName: (state, action) => {
            state.name = action.payload;
        },
        setFirstname: (state, action) => {
            state.first_name = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setConfirmPassword: (state, action) => {
            state.confirmPassword = action.payload;
        },
    },
});

// Exporte les réducteurs générés automatiquement par createSlice
export const {
    setName,
    setFirstname,
    setEmail,
    setPassword,
    setConfirmPassword,
} = signupSlice.actions;

// Exporte la tranche d'état créée par createSlice
export default signupSlice.reducer;
