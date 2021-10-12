import { useState, useEffect } from "react";
import Filter from "./filter";
import PersonForm from "./personForm";
import Persons from "./persons";
import modules from "./modules";
import Notification from "./notification";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    modules.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      alert("Please enter all fields!");
      return;
    }

    // Person exists
    const foundPerson = persons.find((person) => person.name === newName);

    // Persons name and number already in phonebook
    if (foundPerson && foundPerson.number == newNumber) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
      setNewNumber("");
      return;
    } else if (foundPerson && foundPerson.number !== newNumber) {
      if (
        window.confirm(
          `${foundPerson.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        // Changes persons number
        const changedPerson = { ...foundPerson, number: newNumber };
        const id = foundPerson.id;
        modules
          .update(id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== id ? person : returnedPerson
              )
            );
            setNewName("");
            setNewNumber("");
            setSuccessMessage(`${foundPerson.name}'s number was updated!'`);
            setTimeout(() => {
              setSuccessMessage(null);
            }, 5000);
          })
          .catch((err) => {
            setErrorMessage(
              `${foundPerson.name} was already removed from the server`
            );
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
            setPersons(persons.filter((person) => person.id !== id));
          });
      } else {
        return;
      }
    } else {
      // Adds new person to phonebook
      const personObject = {
        name: newName,
        number: newNumber,
      };

      modules
        .create(personObject)
        .then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson));
          setNewName("");
          setNewNumber("");
          setSuccessMessage(`${returnedPerson.name} was added!'`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((err) => {
          setErrorMessage(`${personObject.name} could not be added.'`);
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        });
    }
  };

  const removePerson = (id) => {
    if (window.confirm("Do you really want to delete this person?")) {
      modules
        .remove(id)
        .then(() => {
          const del = persons.filter((person) => person.id !== id);
          setPersons(del);
          setSuccessMessage(
            `Deleted ${persons.find((person) => person.id === id).name}`
          );
          setTimeout(() => {
            setSuccessMessage(null);
          }, 5000);
        })
        .catch((err) => alert(err));
    } else {
      return;
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleFilterName = (event) => {
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <Filter newFilter={newFilter} handleFilterName={handleFilterName} />
      <br />
      <h2>Add a new person</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <br />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        newFilter={newFilter}
        removePerson={removePerson}
      />
    </div>
  );
};

export default Phonebook;
