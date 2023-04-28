import { createSlice } from "@reduxjs/toolkit";


// définit l'état initial du reducer
const initialState = {
    user: null,
    loading: false,
    error: null,
};

// définit le slice du reducer avec des actions et des reducers automatiquement générés
export  const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // action pour mettre à jour les informations de l'utilisateur
        updateUser: (state, action) => {
            state.user = action.payload;
        },
        // action pour mettre à jour le statut de chargement
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        // action pour mettre à jour l'erreur
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
});

// exporte les actions automatiquement générées
export const { updateUser, setLoading, setError } = userSlice.actions;

// exporte le reducer
export default userSlice.reducer;
