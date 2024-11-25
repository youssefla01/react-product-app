import React from "react";
import { useSelector } from "react-redux";
import "./Home.css"; // Importer le fichier CSS modernisé

const Home: React.FC = () => {
  const { email } = useSelector((state: any) => state.auth);

  return (
    <div className="home-container">
      <h1 className="welcome-title">Bienvenue de nouveau, {email}!</h1>

      <div className="stats-grid">
        <div className="stats-card">
          <div className="stats-card-header">Utilisateurs Totaux</div>
          <div className="stats-card-number">1 230</div>
          <div className="stats-card-description">Utilisateurs inscrits jusqu'à présent</div>
        </div>

        <div className="stats-card">
          <div className="stats-card-header">Revenu</div>
          <div className="stats-card-number">12 430 €</div>
          <div className="stats-card-description">Revenu total ce mois-ci</div>
        </div>

        <div className="stats-card">
          <div className="stats-card-header">Tâches Complétées</div>
          <div className="stats-card-number">87%</div>
          <div className="stats-card-description">Tâches complétées avec succès</div>
        </div>

        <div className="stats-card">
          <div className="stats-card-header">Nouveaux Messages</div>
          <div className="stats-card-number">45</div>
          <div className="stats-card-description">Messages non lus dans votre boîte de réception</div>
        </div>
      </div>
    </div>
  );
};

export default Home;

