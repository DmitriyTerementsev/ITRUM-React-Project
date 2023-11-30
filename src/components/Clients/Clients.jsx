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
  const [inputValue, setInputValue] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [allPages, setAllPages] = useState(1);
  const [showPages, setShowPages] = useState(10);
  const list = useRef(null);
  const description = useRef(null);

  let showBySearch = [];

  let showClients = clients
    .slice(currentPage * showPages, currentPage * showPages + showPages)
    .map((item) => item);

  useEffect(() => {
    setAllPages(Math.ceil(clients.length / showPages));
  }, [clients]);

  useEffect(() => {
    setAllPages(Math.ceil(clients.length / showPages));
  }, [showPages]);

  useEffect(() => {
    if (inputValue !== '') {
      for (let i = 0; i < clients.length; i++) {
        console.log(inputValue);
        if (
          clients[i].name !== null &&
          !clients[i].name.toLowerCase().includes(inputValue)
          /*&& 
          (clients[i].lastName.toLowerCase().includes(inputValue) &&
            clients[i].lastName !== null) &&
          clients[i].email.toLowerCase().includes(inputValue) &&
          clients[i].phone.toLowerCase().includes(inputValue)*/
        ) {
          console.log('no');
          console.log(clients[i]);
        } else {
          console.log('yes');
          console.log(clients[i]);
          showBySearch.push(clients[i]);
          console.log(showBySearch);
          showClients.splice(i, showClients.length);
          console.log(showClients);
          showClients = showBySearch
            .slice(currentPage * showPages, currentPage * showPages + showPages)
            .map((item) => item);
            console.log(showClients);
        }
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
                  key={name + ' ' + lastName + phone}
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
