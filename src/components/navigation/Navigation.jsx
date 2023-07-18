import styles from "./Navigation.module.css";
const Navigation = () => {
  
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <h2>0xshivam</h2>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact Us</li>
        </ul>
        
    </nav>
  );
};

export default Navigation;
