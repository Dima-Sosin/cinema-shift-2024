import { createContext, useState } from "react";
import { PageLayout } from "@components/PageLayout/PageLayout";
import { PersonalData } from "./PersonalData/PersonalData";
import { DebitCard } from "./DebitCard/DebitCard";

export const PageContext = createContext("personalData");

export const OrderPage = () => {
    const [page, setPage] = useState("personalData");
    const Pages = {
        personalData: <PersonalData />,
        debitCard: <DebitCard />
    };
    return (
        <PageLayout>
            <PageContext.Provider value={{ setPage }}>
                {Pages[page]}
            </PageContext.Provider>
        </PageLayout>
    );
};
