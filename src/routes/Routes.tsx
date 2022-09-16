import { BrowserRouter, Route, Routes } from "react-router-dom";

export function Routes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route element={<PageLayout />}>
                    <Route path="/privacy" element={<Privacy />} />
                    <Route path="/tos" element={<Tos />} />
                </Route>
                <Route path="contact-us" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}