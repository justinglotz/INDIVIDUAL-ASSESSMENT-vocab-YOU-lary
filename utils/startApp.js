import logoutButton from '../components/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder(user);
  navBar();
  logoutButton();
  navigationEvents(user);
};

export default startApp;
