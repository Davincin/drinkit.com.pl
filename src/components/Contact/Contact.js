import { useEffect, useState, useRef } from 'react';
import './Contact.sass'
import emailjs from '@emailjs/browser'
import LoadingIcon from '../../components/UI/LoadingIcon'
import axios from 'axios'


const Contact = () => {
    
    const [loading, setLoading] = useState(false);
    const [wasSend, setWasSend] = useState(false);
    const [wasNotSend, setWasNotSend] = useState(false);
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({
        name: '',
        mail: '',
        message: ''
    });
    
    const form = useRef();

    useEffect(() => {
         
        if (name !== "") {
            setErrors({...errors, name: ''});
        }

    }, [name])
    
    useEffect(() => {
         
        if(message !== "") {
            setErrors({...errors, message: ''});
        }

    }, [message])

    
    useEffect(() => {
        
        if (!emailIsValid(mail) && mail !== "") {
            setErrors({...errors, mail: 'Nieprawidłowy adres email.'});
        } else {
            setErrors({...errors, mail: ''});
        }

    }, [mail])

    const emailIsValid = text => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
    }

    const submitForm =  e => {
        e.preventDefault();
        
        if (name === '') {
            setErrors({...errors, name: 'Wypełnij to pole.'})
        } else if (mail === '') {
            setErrors({...errors, mail: 'Wypełnij to pole.'})
        } else if (message === '') {
            setErrors({...errors, message: 'Wypełnij to pole.'})
        }

        if(name !== '' && !errors.name && mail !== '' && !errors.mail && message !== '' && !errors.message) {
            console.log('gotowosc do wyslania');
            setLoading(true)
        
            emailjs.sendForm("service_07hyv0a","template_52jbm8r", form.current, "user_hOKiQut4B3GIzu000k85A")
            .then((res) => {
                if (res.status === 200) {
                    setWasSend(true);
                    setLoading(false);
                    setTimeout(() => {
                        setWasSend(false);
                    }, 3000)
                }
            }, (error) => {
                    setLoading(false);
                    setWasNotSend(true);
            })
                
            setName('');
            setMail('');
            setMessage('');
        }

    }
    
    return (
        <section className="contact">
            <div className="container">
                <h2 className="contact__title">
                    <i className="fas fa-envelope"></i>
                    Napisz do nas!
                </h2>
                <p className="contact__text">Napisz na kontakt@drinkit.com.pl lub wypełnij formularz poniżej.</p>
                
                <form className="contact__form" onSubmit={submitForm} ref={form}>
                    <div className="contact__form-group">
                        <label htmlFor="name">Imię i nazwisko:</label>
                        <input
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={e => setName(e.target.value)}    
                        />
                        {errors.name && <p className="contact__error-txt">{errors.name}</p>}
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="mail">Adres email:</label>
                        <input 
                            type="text" 
                            name="mail" 
                            value={mail}
                            onChange={e => setMail(e.target.value)}    
                        />
                        {errors.mail && <p className="contact__error-txt">{errors.mail}</p>}
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message">Wiadomość:</label>
                        <textarea name="message" id="message"value={message} onChange={e => {setMessage(e.target.value)}}></textarea>
                        {errors.message && <p className="contact__error-txt">{errors.message}</p>}
                    </div>
                    {wasSend && <p className="contact__info-txt"><i className="fas fa-check-square"></i> Wiadomośc została wysłana.</p>}
                    {wasNotSend && <p className="contact__info-txt contact__info-txt--not-send"><i className="fas fa-times"></i> Wiadomośc nie została wysłana, spróbuj ponownie później.</p>}
                    {loading && <LoadingIcon />}
                    {(!loading && !wasSend && !wasNotSend) && <button className="contact__btn">Wyślij</button>}
                </form>
            </div>
        </section>
    );
}
 
export default Contact;