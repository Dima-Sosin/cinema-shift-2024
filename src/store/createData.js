import { makeAutoObservable } from "mobx";

export const createData = () => {
    return makeAutoObservable({
        filmId: "",
        person: {},
        debitCard: {},
        seance: {},
        tickets: [],

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
            this.seance = { date: date, time: time };
        },
        addTicket(row, column) {
            this.tickets = [...this.tickets, { row: row, column: column }];
        }
    });
};

export const userData = createData();
