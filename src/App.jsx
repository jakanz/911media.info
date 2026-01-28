import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageWrapper from "./jsx/PageWrapper";
import Home from "./jsx/Home";
import Directory from "./jsx/Directory";
import NotFound from "./jsx/NotFound";



export default function App() {
    return (
        <Router>
            <PageWrapper>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/dir" element={<Directory />} />
                    <Route path="*" element={<NotFound />} />

                    
                </Routes>
            </PageWrapper>
        </Router>
    )
}
