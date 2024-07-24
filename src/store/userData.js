import { makeAutoObservable } from "mobx";

export const userData = () => {
    return makeAutoObservable({
        films: [],
        person: {},
        receiverAddress: {},
        debitCard: {},

        addFilm(film) {
            this.films = [...this.films, film];
        },
        deleteFilm(id) {
            this.films = this.films.filter((film) => film.id !== id);
        },
        addPerson(person) {
            this.person = person;
        },
        addReceiverAddress(address) {
            this.receiverAddress = address;
        },
        addDebitCard(card) {
            this.debitCard = card;
        },
        deleteAll() {
            this.pizzas = [];
            this.person = {};
            this.receiverAddress = {};
            this.debitCard = {};
        }
    });
};
