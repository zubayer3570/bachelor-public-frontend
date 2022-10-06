import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import AccountDetails from "./components/Accounts/AccountDetails";
import AccountsMain from "./components/Accounts/AccountsMain";
import AddAccount from "./components/Accounts/AddAccount";
import AddToMeal from "./components/Accounts/AddToMeal";
import AddToOther from "./components/Accounts/AddToOther";
import AddExpense from "./components/ExpensesPage/AddExpense";
import ExpensesMain from "./components/ExpensesPage/ExpensesMain";
import HomeMain from "./components/HomePage/HomeMain";
import AddPerson from "./components/MealCount/AddPerson";
import MealCountCardUpdate from "./components/MealCount/MealCountCardUpdate";
import MealCountDetails from "./components/MealCount/MealCountDetails";
import MealCountMain from "./components/MealCount/MealCountMain";
import AddToOtherExpense from "./components/OtherExpenses/AddToOtherExpense";
import OtherExpensesMain from "./components/OtherExpenses/OtherExpensesMain";
const queryClient = new QueryClient()

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<HomeMain />} path='/'></Route>
          <Route element={<ExpensesMain />} path='/expenses'></Route>
          <Route element={<MealCountMain />} path='/meal-count'></Route>
          <Route element={<AddPerson />} path='/add-person'></Route>
          <Route element={<MealCountDetails />} path='/meal-count-details/:person'></Route>
          <Route element={<MealCountCardUpdate />} path='/meal-count-card-update'></Route>
          <Route element={<AddExpense />} path='/add-expense'></Route>
          <Route element={<AccountsMain />} path='/accounts'></Route>
          <Route element={<AccountDetails />} path='/account-details/:name'></Route>
          <Route element={<AddToOther />} path='/add-to-other/:name'></Route>
          <Route element={<AddToMeal />} path='/add-to-meal/:name'></Route>
          <Route element={<OtherExpensesMain />} path='/other-expenses'></Route>
          <Route element={<AddToOtherExpense />} path='/add-to-other-expenses'></Route>
          <Route element={<AddAccount />} path='/add-account'></Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;