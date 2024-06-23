import { useEffect } from "react"
import { CgStack } from "react-icons/cg"
import FormulaireUser from "./assets/composants/formulaireusers";

function App() {
 useEffect(() =>{
  async function getPong() {
      const reponse = await fetch("api/ping");
      const data = await reponse.json()
      console.log(data);
    
  }
  getPong ();
 }, []);

 async function AddUsers(nom, prenom) {
  const user = {nom, prenom};
  const reponse = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(reponse);
  
 }

  return (
    <>
   
    <div>
      <h1>WELCOME</h1>
      <FormulaireUser onSoumission={AddUsers}/>
    </div>
    </>
  )
}

export default App
