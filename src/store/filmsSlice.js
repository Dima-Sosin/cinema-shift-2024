import { createSlice } from "@reduxjs/toolkit"

export const FilmSlice = createSlice({
    name: "film",
    initialState: {
        films:[],
        person: {},
        receiverAddress: {},
        debitCard: {}
    },
    reducers: {
        addFilm: (state, action) => {
            state.films = [...state.films, action.payload]
        },
        deleteFilm: (state, action) => {
            state.films = state.films.filter((film) => film.id !== action.payload.id)
        },
        addPerson: (state, action) => {
            state.person = action.payload
        },
        addReceiverAddress: (state, action) => {
            state.receiverAddress = action.payload
        },
        addDebitCard: (state, action) => {
            state.debitCard = action.payload
        },
        deleteAll: (state) => {
            state.pizzas = [];
            state.person = {};
            state.receiverAddress = {};
            state.debitCard = {}
        }
    }
})

export const {
    addFilm,
    deleteFilm,
    addPerson,
    addReceiverAddress,
    addDebitCard,
    deleteAll
} = filmSlice.actions

export const selectFilms = (state) => state.film.films
export const selectCart = (state) => state.film

export default filmSlice.reducer