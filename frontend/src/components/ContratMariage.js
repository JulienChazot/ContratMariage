import React, { useState } from "react";

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ContratMariage({ contratMariage, networkError, dismiss }) {
  const [formData, setFormData] = useState({
    name1: "",
    surname1: "",
    dateNaissance1: "",
    lieuNaissance1: "",
    name2: "",
    surname2: "",
    dateNaissance2: "",
    lieuNaissance2: "",
    divorce: false
  });

  const [childData, setChildData] = useState({
    name: "",
    surname: "",
    dateNaissance: ""
  });

  const [childrenList, setChildrenList] = useState([]);

  const [contractSaved, setContractSaved] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleChildInputChange = (e) => {
    const { name, value } = e.target;
    setChildData({
      ...childData,
      [name]: value
    });
  };

  const handleAddChild = () => {
    setChildrenList([...childrenList, childData]);
    setChildData({
      name: "",
      surname: "",
      dateNaissance: ""
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Enregistrement du contrat de mariage (simulé ici)
    console.log("Données enregistrées :", formData);
    // Affichage du message de succès
    setContractSaved(true);
    // Réinitialisation du formulaire (facultatif)
    setFormData({
      name1: "",
      surname1: "",
      dateNaissance1: "",
      lieuNaissance1: "",
      name2: "",
      surname2: "",
      dateNaissance2: "",
      lieuNaissance2: "",
      divorce: false
    });
  };

  return (
    <div className="container pt-5">
        <div className="titre">
            <h1>
                Contrat de Mariage
            </h1>
        </div>
      <div className="grid grid-cols-2 gap-6">
        <form onSubmit={handleSubmit}>
          <div className="ligne1">
              <input
              type="text"
              name="name1"
              placeholder="Nom du mari"
              value={formData.name1}
              onChange={handleInputChange}
              />
              <input
              type="text"
              name="name2"
              placeholder="Nom de la mariée"
              value={formData.name2}
              onChange={handleInputChange}
              />
          </div>
          <div className="ligne2">
              <input
              type="text"
              name="surname1"
              placeholder="Prénom du mari"
              value={formData.surname1}
              onChange={handleInputChange}
              />
              <input
              type="text"
              name="surname2"
              placeholder="Prénom de la mariée"
              value={formData.surname2}
              onChange={handleInputChange}
              />
          </div>
          <div className="ligne3">
              <input
              type="text"
              name="dateNaissance1"
              placeholder="Date de naissance du mari"
              value={formData.dateNaissance1}
              onChange={handleInputChange}
              />
              <input
              type="text"
              name="dateNaissance2"
              placeholder="Date de naissance de la mariée"
              value={formData.dateNaissance2}
              onChange={handleInputChange}
              />
          </div>
          <div className="ligne4">
              <input
              type="text"
              name="lieuNaissance1"
              placeholder="Lieu de naissance du mari"
              value={formData.lieuNaissance1}
              onChange={handleInputChange}
              />
              <input
              type="text"
              name="lieuNaissance2"
              placeholder="Lieu de naissance de la mariée"
              value={formData.lieuNaissance2}
              onChange={handleInputChange}
              />
          </div>
          <div className="ligne5">
            <label>
              Divorce:
              <input
                type="checkbox"
                name="divorce"
                checked={formData.divorce}
                onChange={handleCheckboxChange}
              />
            </label>
          </div>
        </form>
        <div className="children-section">
          <h2>Enfants</h2>
          <div className="children-list">
            {childrenList.map((child, index) => (
              <div key={index}>
                <p>{`${child.name} ${child.surname}, ${child.dateNaissance}`}</p>
              </div>
            ))}
          </div>
          <div className="add-child-form">
            <input
              type="text"
              name="name"
              placeholder="Nom de l'enfant"
              value={childData.name}
              onChange={handleChildInputChange}
            />
            <input
              type="text"
              name="surname"
              placeholder="Prénom de l'enfant"
              value={childData.surname}
              onChange={handleChildInputChange}
            />
            <input
              type="text"
              name="dateNaissance"
              placeholder="Date de naissance de l'enfant"
              value={childData.dateNaissance}
              onChange={handleChildInputChange}
            />
            <button type="button" onClick={handleAddChild}>OK</button>
          </div>
        </div>
        <div className="Heritage">
            <h2>
                Cocher les enfants hérité
            </h2>
        </div>
        <div className="children-list">
            {childrenList.map((child, index) => (
              <div key={index}>
                <label>
                  <input type="checkbox" name={`child-${index}`} />
                  {`${child.name} ${child.surname}`}
                </label>
              </div>
            ))}
          </div>
      </div>
      <button className="submit-button" type="submit" onClick={handleSubmit}>Valider</button>
      {contractSaved && (
        <p>Le contrat de mariage a bien été enregistré.</p>
      )}
    </div>
  );
}
