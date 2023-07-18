import './App.css'
import ContactForm from './components/contactForm/ContactForm';
import Navigation from "./components/navigation/Navigation";
import ContactHeader from './components/contactHeader/ContactHeader';


function App() {
  return (
    <>
      <Navigation />
      <main className='main_contain'>
      <ContactHeader />
        <ContactForm />
      </main>
    </>
  );
};

export default App;
