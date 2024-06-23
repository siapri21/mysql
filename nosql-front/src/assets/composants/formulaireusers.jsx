import React, {useState} from 'react'
import '../styles/form.css'

export default function FormulaireUser({onSoumission}) {
    const [nom , setNom] = useState(" ");
    const [prenom , setPrenom] = useState(" ");
    const [errorNom , setErrorNom] = useState(" ");
    const [errorPrenom , setErrorPrenom] = useState(" ");
    

    function changeNom(e) {
        setNom(e.target.value)
        
    }

    
    function changePrenom(e) {
        setPrenom(e.target.value)
        
    }

    async function soumettreForm() {
        if (nom!="" && prenom!="") {
            onSoumission(nom , prenom)
            return
        }

            setErrorNom(nom === "" ? "le champ nom est obligatoire" : "")
            setErrorPrenom(nom === "" ? "le champ prenom est obligatoire" : "")
    
        alert(nom + "" + prenom)
    }

    const estDesactiver = nom === "" || prenom === "";
    
    return (
        <>
        <div>
         <div className='form'>
            <input type="text" placeholder='Nom' onChange={changeNom}  className='input-field'/>
            <input type="text" placeholder='prenom' onChange={changePrenom}  className='input-field'/>
            <button onClick={soumettreForm} className='Button'>Ajouter</button>
            <button disabled={estDesactiver} onClick={soumettreForm}></button>
         </div>
        </div>
        
        </>
    )
}