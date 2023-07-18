import { MdMessage } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css"
import { FaPhoneAlt } from "react-icons/fa"
import {HiMail} from "react-icons/hi"
const ContactForm = () => {
    return (
        
        <section className={styles.container}>
        <div className={styles.contact_form}>
          <div className={styles.top_button}>
          <Button text="VIA MESSAGE" icon={<MdMessage fontSize="24px"/> } />
          <Button text="VIA PHONE" icon={<FaPhoneAlt fontSize="24px"/> } />
          </div>
          
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />

          <form>
            <div className={styles.form_controller}>
               <label htmlFor="name">Name</label>
            <input type="text" />
           </div>
            
           <div className={styles.form_controller}>
               <label htmlFor="name">Email</label>
            <input type="email" />
           </div>
          
           <div className={styles.form_controller}>
               <label htmlFor="Text">Name</label>
            <textarea type="text" rows={7} />
           </div>
  
            <div
              style={{
              display: "flex",
              justifyContent: "end"
            }}>
              <Button text="SUBMIT"/>
          </div>

        </form>
        
        </div>
        <div className={styles.contact_image}></div>
        <img src="/images/right-image.png" alt="contact-illustration"/> 
      </section>
 );
};
export default ContactForm;

