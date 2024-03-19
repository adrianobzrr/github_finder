import { useParams } from "react-router-dom"
import classes from "./Repos.modules.css"
import BackBtn from "../components/BackBtn";

const Repos = () => {

    const {username} = useParams();
  return (
    <div>
        <h2>Repos {username}</h2>
        <BackBtn/>
    </div>
  )
}

export default Repos