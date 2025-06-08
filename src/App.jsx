
import React, { useState } from 'react';
import Header from './components/Header';
import PageContent from './components/PageContent';
import Footer from './components/Footer';
import './styles/style.css';

function App() {
    const [currentPage, setCurrentPage] = useState('games');

    return (
        <div className="min-h-screen">
            <div className="min-h-screen flex flex-col bg-neutral-900">
                <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
                <main className="flex-grow p-4">
                    <PageContent currentPage={currentPage} />
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default App;