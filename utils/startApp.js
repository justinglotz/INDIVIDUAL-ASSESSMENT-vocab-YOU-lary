import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import { getEntries } from '../api/entryData';
import showEntries from '../pages/entries';

const startApp = (user) => {
  domBuilder(user);
  domEvents(user);
  formEvents(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  getEntries(user.uid).then(showEntries);
};

export default startApp;
