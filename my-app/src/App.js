import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx'
import Petsitter from './Components/Petsitter/Petsitter.jsx'
import Header from "./Components/Header";
import Animals from "./Components/Animals/Animals";
import Account from "./Components/Account/Account";
import Access from "./Components/Login/Access"
import Footer from "./Components/Footer";


/*

CE FICHIER NE DOIT CONTENIR QUE LES ROUTES DE SITE

-> Une route = une navigation, c'est comme si en php tu redirigeais vers une autre page mais ici c'est dynamique

Exemple de App avec des routes :

return (
      <div className="App">
          <div className="wrapper">
              <BrowserRouter>
                  <Header />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/user" element={<User />} />
                      <Route path="/register" element={<Register />} />
                  </Routes>
                  <Footer />
                  <Chat />
              </BrowserRouter>
          </div>
      </div>
)

Chaque balises incluent dans l'attribut element de la balise Route (<Home />) sont des composants crées par vous !
-> Dans ce cas la c'est une page entiere

Les Balises Header, Footer et Chat sont des balises creés par vous aussi, elles seront accessibles n'importes ou dans le site.
Cette architecture permet d'avoir un menu de navigation facile et efficace


*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Petsitter" element={<Petsitter />} />
              <Route path="/Animals" element={<Animals />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Access" element={<Access />}/>
          </Routes>
      </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
