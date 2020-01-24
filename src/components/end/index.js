import React from 'react'
import { EndStageStyled } from './styles'

export default function EndStage({
	counter,
	corrects,
	tryAgain,
	...props
}) {
	return (
		<EndStageStyled>
			{
				corrects.length > 0 ?
					<>
						<div className='corrects-wrapper'>
							<span>Palavras corretas:</span>
							<ul>
								{corrects.map(w => (
									<li>{w}</li>
								))}
							</ul>
						</div>

						<span>Um total de {counter} letras</span>
					</>

					:

					<p>Você não acertou nenhuma palavra =( </p>
			}

			<button onClick={tryAgain}>
				Tentar novamente
			</button>
		</EndStageStyled>
	)
}
