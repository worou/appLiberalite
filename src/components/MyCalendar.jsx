import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/fr';  // Importer la langue française

// Exemple de liste d'événements
const maListeDEvenements = [
  {
    title: 'Réunion avec l\'équipe',
    start: new Date(2023, 8, 22, 10, 0),
    end: new Date(2023, 8, 22, 12, 0),
  },
  {
    title: 'Déjeuner avec un client',
    start: new Date(2023, 8, 23, 14, 0),
    end: new Date(2023, 8, 23, 16, 0),
  },
];
// Configurer moment pour utiliser le français
moment.locale('fr');
// Configurer le localizer avec moment
const localizer = momentLocalizer(moment);
const messages = {
    allDay: 'Toute la journée',
    previous: 'Précédent',
    next: 'Suivant',
    today: "Aujourd'hui",
    month: 'Mois',
    week: 'Semaine',
    day: 'Jour',
    agenda: 'Agenda',
    date: 'Date',
    time: 'Heure',
    event: 'Événement',
    noEventsInRange: 'Aucun événement dans cette plage de dates.',
    showMore: total => `+ Voir plus (${total})`,
  };

function MonCalendrier() {
  const [vue, setVue] = useState('month'); // État pour gérer la vue

  const handleVueChange = (event) => {
    setVue(event.target.value); // Mettre à jour l'état selon la sélection
  };

  return (
    <div className='container'>
        <hr />
      <h2>Mon Calendrier</h2>
      
      {/* Menu déroulant pour sélectionner la vue */}
      <label htmlFor="vue-select">Sélectionnez la vue : </label>
      <select id="vue-select" value={vue} onChange={handleVueChange}>
        <option value="month">Mois</option>
        <option value="week">Semaine</option>
        <option value="day">Jour</option>
      </select>

      {/* Calendrier avec la vue sélectionnée */}
      <Calendar
        localizer={localizer}
        messages={messages}
        events={maListeDEvenements}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        view={vue}  // Passer la vue sélectionnée au calendrier
        onView={setVue} // Mettre à jour la vue dans l'état
      />
    </div>
  );
}

export default MonCalendrier;
