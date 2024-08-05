import { createContext, useState } from "react";

import { PageLayout } from "@components/PageLayout/PageLayout";

import { DebitCard } from "./DebitCard/DebitCard";
import { PersonalData } from "./PersonalData/PersonalData";

export const PageContext = createContext("personalData");

export function OrderPage() {
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
}
