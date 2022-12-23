import React, { useState } from 'react';

function ClientList() {
  const [clients, setClients] = useState([
    { id: 1, name: 'John Smith' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Johnson' },
  ]);

  const addClient = (name) => {
    setClients([...clients, { id: clients.length + 1, name }]);
  };

  const updateClient = (id, name) => {
    setClients(
      clients.map((client) => (client.id === id ? { ...client, name } : client))
    );
  };

  const deleteClient = (id) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div>
      <h1>Client List</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {client.name}{' '}
            <button onClick={() => updateClient(client.id, 'Updated Name')}>
              Update
            </button>{' '}
            <button onClick={() => deleteClient(client.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addClient('New Client')}>Add Client</button>
    </div>
  );
}

export default ClientList;
