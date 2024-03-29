import { useState, KeyboardEvent } from "react";
import { BsSearch } from "react-icons/bs"
import classes from "./Search.module.css"

type SearchProps = {
    loadUser: (userName: string) => Promise<void>;
};

const Search = ({loadUser}: SearchProps) => {
    const [useName, setUserName] = useState("");

    const handleKeyDown = (e: KeyboardEvent) => {
        if(e.key === "Enter") {
            loadUser(useName);
        }

    };

  return (
    <div className={classes.search}>
        <h2>Busque por um usuário:</h2>
        <p>Conheça seus melhores repositórios.</p>
        <div className={classes.search_container}>
            <input type="text" placeholder="Digite o usuário" onChange={(e) => setUserName(e.target.value)} onKeyDown={handleKeyDown}/>
            <button onClick={() => loadUser(useName)}>
                <BsSearch/>
            </button>
        </div>
    </div>
  )
}

export default Search