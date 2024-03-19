import { useParams } from "react-router-dom"
import classes from "./Repos.modules.css"
import BackBtn from "../components/BackBtn";
import { useEffect, useState } from "react";
import { RepoProps } from "./Repo";
import Loader from "../components/Loader";

const Repos = () => {

    const {username} = useParams();
    const [repos, setRepos] = useState<RepoProps[] | [] | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      
      const loadRepos = async (username: string) => {
        setIsLoading(true);
        const res =await fetch(`https://api.github.com/users/${username}/repos`);
        
        const data = await res.json();

        setRepos(data);

        setIsLoading(false);

      };

      if(username){
        loadRepos(username);
      };
    }, []);

    if(!repos && isLoading) {
      return <Loader/>
    }

  return (
    <div>
        <BackBtn/>
        <h2>Explore os repositórios do usuário: {username}</h2>
        {repos && repos.length === 0 && <p>Não há repositórios!</p>}
        {repos && repos.length > 0 && (
          <div>
            {repos.map((repo: RepoProps) => (
              <p key={repo.name}>{repo.name}</p>
            ))}
          </div>
        )}
    </div>
  )
}

export default Repos