import TableNavigation from '../TableNavigation/TableNavigation';
import { useState, useEffect, useRef } from 'react';
import clients from '../../utils/clients';
import ClientsDescription from '../ClientsDescription/ClientsDescription';
import ClientsItem from '../ClientsItem/ClientsItem';
import {
  ShowItemsValue,
  ProductList,
  ItemsDescription,
} from '../../contexts/ShowItemsValue';
import TableSearch from '../TableSearch/TableSearch';

function Clients() {
  const [inputValue, setInputValue] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const list = useRef(null);
  const description = useRef(null);
  const [showClients, setShowClients] = useState([]);

  useEffect(() => {
    setShowClients(
      clients
        .slice(currentPage * showPages, currentPage * showPages + showPages)
        .map((item) => item)
    );
  }, []);

  let items = [];

  useEffect(() => {
    setAllPages(Math.ceil(clients.length / showPages));
  }, [clients.length]);

  useEffect(() => {
    setAllPages(Math.ceil(clients.length / showPages));
  }, [showPages]);

  useEffect(() => {
    for (let i = 0; i < clients.length; i++) {
      console.log(inputValue);
      if (
        clients[i].name.toLowerCase().includes(inputValue) ||
        clients[i].lastName.toLowerCase().includes(inputValue) ||
        clients[i].email.toLowerCase().includes(inputValue) ||
        clients[i].phone.toLowerCase().includes(inputValue)
      ) {
        setTimeout(() => {
          console.log('yes');
          console.log(clients[i]);
          items.push(clients[i]);
          clients.filter((items) => items.name.includes(clients.name));
          console.log(clients);
        }, '3000');
      } else {
        setTimeout(() => {
          //clients.splice(i, 1);
          console.log('no');
          console.log(clients[i]);
        }, '3000');
      }
    }
  }, [inputValue]);

  return (
    <ItemsDescription.Provider value={description}>
      <ShowItemsValue.Provider value={showPages}>
        <ProductList.Provider value={list}>
          <section className='actions actions_clients'>
            <TableSearch inputValue={(e) => setInputValue(e.target.value)} />
            <TableNavigation
              currentPage={currentPage}
              allPages={allPages}
              handlerNextClick={() =>
                currentPage === allPages - 1
                  ? null
                  : setCurrentPage(currentPage + 1)
              }
              handlerPrevClick={() =>
                currentPage > 0 ? setCurrentPage(currentPage - 1) : null
              }
              showPages={(e) => setShowPages(e.target.value)}
            />
            <ClientsDescription description={description} />
            <ul className='actions__items actions__items_clients' ref={list}>
              {showClients?.map(({ name, lastName, phone, email }) => (
                <ClientsItem
                  key={email}
                  name={name + ' ' + lastName}
                  phone={phone}
                  email={email}
                />
              ))}
            </ul>
          </section>
        </ProductList.Provider>
      </ShowItemsValue.Provider>
    </ItemsDescription.Provider>
  );
}

export default Clients;
