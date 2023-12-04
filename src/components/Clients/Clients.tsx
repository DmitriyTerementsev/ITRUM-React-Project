import React from 'react';
import TableNavigation from '../TableNavigation/TableNavigation';
import { useState, useEffect, useRef } from 'react';
import clients from '../../utils/clients.ts';
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
  const [showClients, setShowClients] = useState(clients);

  function clearInput(){
    setInputValue('')
  }

  let clientsClone: any[] = [];
  for (let i = 0; i < clients.length; i++) {
    clientsClone.push(clients[i]);
  }

  useEffect(() => {
    setShowClients(
      clientsClone
        .slice(currentPage * showPages, currentPage * showPages + showPages)
        .map((item) => item)
    );
  }, [clientsClone.length]);

  useEffect(() => {
    setShowClients(
      clients
        .filter(
          (item) =>
            (item.name !== null &&
              item.name.toLowerCase().includes(inputValue.toLowerCase())) ||
            (item.lastName !== null &&
              item.lastName.toLowerCase().includes(inputValue.toLowerCase())) ||
            (item.email !== null &&
              item.email.toLowerCase().includes(inputValue.toLowerCase())) ||
            (item.phone !== null && item.phone.includes(inputValue))
        )
        .slice(currentPage * showPages, currentPage * showPages + showPages)
        .map((item) => item)
    );
  }, [inputValue, showPages, currentPage]);

  useEffect(() => {
    setAllPages(
      Math.ceil(
        clients.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        ).length / showPages
      )
    );
  }, [clientsClone.length, inputValue]);

  useEffect(() => {
    setAllPages(
      Math.ceil(
        clients.filter((item) =>
          item.name.toLowerCase().includes(inputValue.toLowerCase())
        ).length / showPages
      )
    );
  }, [showPages]);

  return (
    <ItemsDescription.Provider value={description}>
      <ShowItemsValue.Provider value={showPages}>
        <ProductList.Provider value={list}>
          <section className='actions actions_clients'>
            <TableSearch inputValue={(e) => setInputValue(e.target.value)} clearInput={() => clearInput()}/>
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
