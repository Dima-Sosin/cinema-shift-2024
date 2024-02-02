import { PageHeader } from "../components/page-header"
import { Afisha } from "../components/afisha"
import { Outlet } from 'react-router-dom';

export function AfishaPage() {
   return (
      <>
         <PageHeader />
         <Afisha />
      </>
   )
}
