import { useParams } from 'react-router-dom'

const Level = () => {
    const { level } = useParams()

    let text = `Level ${level}`;

    return <h1 style={{color: "white"}}>{text}</h1>;
};
  
export default Level;