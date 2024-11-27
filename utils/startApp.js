import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navigationEvents(user);
  formEvents();
};

export default startApp;
