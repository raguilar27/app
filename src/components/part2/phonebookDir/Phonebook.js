import { useState, useEffect } from "react";
import Filter from "./filter";
import PersonForm from "./personForm";
import Persons from "./persons";
import axios from "axios";
import modules from "./modules";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");

  useEffect(() => {
    modules.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!newName || !newNumber) {
      alert("Please enter required fields");
      return;
    }

    // Person exists
    const foundPerson = persons.find((person) => person.name === newName);

    // Persons name and number already in phonebook
    if (foundPerson && foundPerson.number == newNumber) {
      alert(`${newName} is already addedd to phonebook`);
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
          })
          .catch((err) => {
            alert(err);
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

      modules.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const removePerson = (id) => {
    if (window.confirm("Do you really want to delete this person")) {
      modules
        .remove(id)
        .then(() => {
          const del = persons.filter((person) => person.id !== id);
          setPersons(del);
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
