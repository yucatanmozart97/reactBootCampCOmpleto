import React, {useState} from "react";
import imgLateral from "../html-css-template/imagens/half-circles-pink-blue.png";
import api from "../api";
import { useNavigate } from "react-router-dom";

function Adicionar() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [artista, setArtista] = useState("");
  const [genero, setGenero] = useState("");
  const [ano, setAno] = useState("");
  const [img, setImg] = useState("");

  async function musica(){
    const music = {
      nome,
      artista,
      genero,
      ano,
      imagem: img
    }
    return await api.post("", music)
    .then(() => {
          navigate("/musicas");
    })
    .catch((erro)=> {
      alert("Deu erro", erro)
    })
  }


  return (
    <>
      <div className="container">
        <div className="add-music">
          <div className="formulario">
            <h1>adicionar</h1>

            <br />

            <form>
              <label>
                Música: <br />
                <input type="text" value={nome} onChange={(e) => setNome(e.target.value)}/>
              </label>
              <br />
              <label>
                Artista: <br />
                <input type="text" value={artista} onChange={(e) =>  setArtista(e.target.value)}/>
              </label>
              <br />
              <label>
                Genêro: <br />
                <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)}/>
              </label>
              <br />
              <label>
                Ano de Lançamento: <br />
                <input type="text" value={ano} onChange={(e) => setAno(e.target.value)}/>
              </label>
              <br />
              <label>
                {" "}
                Imagem (url): <br />
                <input type="text" value={img} onChange={(e) => setImg(e.target.value)}/>
              </label>
              <br />
              <button type="button" className="btn" onClick={() => musica()}>Enviar</button>
            </form>
          </div>

          <div className="img-lateral">
            <img src={imgLateral} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Adicionar;
