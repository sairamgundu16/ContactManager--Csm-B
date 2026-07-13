import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetails from "./pages/ContactDetails";
import ContactList from "./pages/ContactList";
import AddContact from "./pages/AddContact";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<ContactList />}
                />
                <Route
                    path="/add-contact"
                    element={<AddContact />}
                />
                <Route
                    path="/edit-contact/:id"
                    element={<AddContact />}
                />
                <Route
                    path="/contact/:id"
                    element={<ContactDetails/>}
                />
            </Routes>
        </BrowserRouter>
    );
}
export default App;