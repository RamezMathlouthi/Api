import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {   // Utiliser useEffect pour effectuer une requête au chargement de la composante
    const fetchUsers = async () => {
      try {                  // Effectuer une requête GET pour récupérer la liste des utilisateurs depuis l'API
       
        // Mettre à jour l'état avec les données récupérées de l'API
      const response = await axios.get('https://jsonplaceholder.typicode.com/users'); 
        setListOfUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'blue' }}>List of Users</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
       {/* Mapper la liste des utilisateurs pour afficher chaque utilisateur */}
        {listOfUsers.map(user => (
          <li key={user.id} style={{ margin: '10px 0' }}>
            <div style={{ backgroundColor: '#e8e8e8', padding: '10px', borderRadius: '5px' }}>
             {/* Afficher le nom de l'utilisateur */}
              <h3 style={{ marginBottom: '5px' }}>{user.name}</h3>

             {/* Afficher d'autres informations de l'utilisateur, comme l'email et le téléphone */}
              <p style={{ color: 'gray' }}>Email: {user.email}</p>
              <p style={{ color: 'gray' }}>Phone: {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
