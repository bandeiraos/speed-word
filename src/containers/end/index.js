import React, { useEffect, createRef } from "react";
import { EndStageStyled } from "./styles";
import Button from "../../components/button";

export default function EndStage({
  counter,
  corrects,
  tryAgain,
  backMenu,
  ...props
}) {
  const buttonRef = createRef();
  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  function renderTweetButton() {
    const qtdsCorretas = corrects.length;

    let start_text = "https://twitter.com/intent/tweet?text=";
    let texto = `Consegui escrever ${qtdsCorretas} ${
      qtdsCorretas === 1 ? `palavra` : "palavras"
    } corretamente no Speed Bobiça do @bandeiraos!!`;

    let url = `&url=${encodeURIComponent("https://speed-bobica.herokuapp.com/")}`;
    texto = encodeURIComponent(texto);

    var urlComplete = start_text + texto + url;
    return (
      <div className="btn-twitter">
        <a target="_blank" rel="noopener noreferrer" href={urlComplete}>
          tweetar
        </a>
      </div>
    );
  }

  return (
    <EndStageStyled>
      <div className="content">
        <h2>Parô parô parô!!!</h2>
        {corrects.length > 0 ? (
          <>
            <span>
              Total de palavras corretas: <b>{corrects.length}</b>
            </span>
            <span>
              Total de letras: <b>{counter}</b>
            </span>

            <div className="corrects-wrapper">
              <ul>
                {corrects.map((w, i) => (
                  <li key={i}>
                    {i + 1} - {w}
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <p>Você não acertou nenhuma palavra =( </p>
        )}

        <div className="buttons">
          <Button ref={buttonRef} onClick={tryAgain} text="Tentar novamente" />
          <Button text="Voltar" onClick={backMenu} />
        </div>

        {renderTweetButton()}
      </div>
    </EndStageStyled>
  );
}
