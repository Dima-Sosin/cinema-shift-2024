import { makeAutoObservable } from "mobx";

export const createData = () =>
    makeAutoObservable({
        filmName: "",
        filmId: "",
        person: {},
        debitCard: {},
        seance: {},
        tickets: [],

        addFilmName(filmName) {
            this.filmName = filmName;
        },
        addFilmId(filmId) {
            this.filmId = filmId;
        },
        addPerson(person) {
            this.person = person;
        },
        addDebitCard(card) {
            this.debitCard = card;
        },
        addSeance(date, time) {
            this.seance = { date, time };
        },
        addTicket(row, column) {
            this.tickets = [...this.tickets, { row, column }];
        }
    });

export const userData = createData();
