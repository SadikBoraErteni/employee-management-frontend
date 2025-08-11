import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');

  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEmployee = { name, position, salary: parseFloat(salary) };

    fetch('http://localhost:8080/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
    .then(response => response.json())
    .then(data => {
      setEmployees([...employees, data]);
      setName('');
      setPosition('');
      setSalary('');
    })
    .catch(error => console.error('Error adding employee:', error));
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/employees/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setEmployees(employees.filter(employee => employee.id !== id));
    })
    .catch(error => console.error('Error deleting employee:', error));
  };

  const handleEdit = (employee) => {
    setIsEditing(true);
    setCurrentEmployeeId(employee.id);
    setName(employee.name);
    setPosition(employee.position);
    setSalary(employee.salary);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const updatedEmployee = {
      id: currentEmployeeId,
      name,
      position,
      salary: parseFloat(salary)
    };

    fetch(`http://localhost:8080/api/employees/${currentEmployeeId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedEmployee),
    })
    .then(response => response.json())
    .then(data => {
      setEmployees(employees.map(employee => (employee.id === currentEmployeeId ? data : employee)));
      setIsEditing(false);
      setCurrentEmployeeId(null);
      setName('');
      setPosition('');
      setSalary('');
    })
    .catch(error => console.error('Error updating employee:', error));
  };

  return (
    <div className="App">
      <h1>Çalışan Yönetim Sistemi</h1>

      <form onSubmit={isEditing ? handleUpdate : handleSubmit}>
        <h2>{isEditing ? 'Çalışanı Güncelle' : 'Yeni Çalışan Ekle'}</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="İsim" required />
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} placeholder="Pozisyon" required />
        <input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Maaş" required />
        <button type="submit">{isEditing ? 'Güncelle' : 'Ekle'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>İsim</th>
            <th>Pozisyon</th>
            <th>Maaş</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.salary}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Güncelle</button>
                <button onClick={() => handleDelete(employee.id)}>Sil</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;