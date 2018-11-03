import * as React from 'react';
import AppRoutes from './App.routes';
import SideMenu from './layouts/side-menu/SideMenu';

class App extends React.Component {
  render() {
    return (
      <section className="d(f)">
        <nav className="mih(100vh) d(f)">
          <SideMenu />
        </nav>
        <main className="p(2em) w(1/1)">
          <AppRoutes/>
        </main>
      </section>
    );
  }
}

export default App;
