import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'
const Dropdow = ({lista}) => {
const [list, setList] = useState([]);

  useEffect(() => {
    const listaDrop = lista.map((categoria) => 
      <Link key={categoria.id} className='dropdown-item' to={`/categoria/${categoria.path}`}>{categoria.name}</Link>
    )
    setList(listaDrop)
    
  }, []);
   
    return (
        <>
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle btn" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Servicios
            </button>
          <div className="dropdown-menu">
            {list}
          </div>
          </li>  
        </>
    );
}

export default Dropdow;