import { db } from '../firebase/config';
import { useEffect, useState } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import './table.css';
import { Loader } from './Loader';

export const Table = () => {
    const [response, setResponse] = useState(null);
    const [searchEmail, setSearchEmail] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fetchScores = async () => {
            const scoreRef = collection(db, 'score');
            const itemsRef = query(scoreRef);
            const resp = await getDocs(itemsRef);

            const data = resp.docs.map((doc) => doc.data());
            setResponse(data);
            setFilteredData(data);
            setLoader(false);

            resp.docs.forEach((doc) => {
                console.log(doc.data());
            });
        };

        fetchScores();
    }, []);

    const handleSearch = () => {
        const filtered = response.filter((item) =>
            item.email.includes(searchEmail)
        );
        setFilteredData(filtered);
    };

    return (
        <div>
        {
            loader ? <Loader />: (
        
        <div className="table-container">
            <div className="search-container">
                <div className="input__container input__container--variant">
                    <div className="shadow__input shadow__input--variant"></div>
                    <input type="text" name="text" class="input__search input__search--variant" placeholder="Search..." value={searchEmail}
                        onChange={(e) => setSearchEmail(e.target.value)} />
                    <button className="input__button__shadow input__button__shadow--variant" onClick={handleSearch}>
                        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="1.5em" width="13em" className='hola'>
                            <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#FFF"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 tabla-container">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Veces jugadas
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Correctas
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Incorrectas
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData &&
                        filteredData.length > 0 &&
                        filteredData.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.scorecorrect + item.scoreincorrect}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.scorecorrect}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {item.scoreincorrect}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            </div>
        </div>)}
        </div>
    );
};
