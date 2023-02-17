import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import Gif from "./Gif/Gif";

export default function ListOfGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs({ keyword }).then((g) => setGifs(g));
  }, [keyword]);

  return (
    <div>
      {gifs.map(({ id, url, title }) => {
        return <Gif key={id} id={id} url={url} title={title} />;
      })}
    </div>
  );
}
