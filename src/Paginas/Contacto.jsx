import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Sidebar2 from './components/Sidebar2'


function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_xpoic56",
          "template_p7sfbwd",
          form.current,
          "ud0B5dYuc0l8Q8hl2"
        )
        .then(
          (result) => {
            console.log(result.text);
            console.log("message sent");
            e.target.reset
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
        <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
            <Sidebar2/>
            
            
            <main className="flex items-center lg:col-span-3 xl:col-span-5 bg-gray-100 p-20  overflow-y-scroll">

     
      <section className='container d-flex justify-content-center align-items-center h-100'>
        
      
      <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>¿En que podemos ayudarte?</label>
        <textarea name="message" />
        <input type="submit" value="Enviar" />
      </form>
    </StyledContactForm>
       
      </section>
    </main>
        </div>
    )
}

const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 9px;
      outline: none;
      border-radius: 8px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;

export default Contacto