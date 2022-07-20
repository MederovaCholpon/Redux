import axios from "axios";

export default function Footer ({mode}) {
	return (
		<div className="footer">
			<div className="row">
				<nav className="footer_nav">
					<ul>
						<li>Авиабилеты</li>
						<li>ВИП-зал аэропорта</li>
						<li>Туры за рубеж из Бишкека</li>
						<li>Горящие туры и лучшие <br/>предложения для вашего отдыха!</li>
						<li>Учеба за границей</li>
						<li>Визы</li>
						<li>Страхование</li>
					</ul>
				</nav>
				<nav className="footer_nav">
					<ul>
						<li>Отели</li>
						<li>Туры по Кыргызстану</li>
						<li>Транспорт</li>
						<li>Организация конференций</li>
					</ul>
				</nav>
				<nav className="footer_nav">
					<ul>
						<li>Оставить отзыв</li>
						<li>Контакты отзывов</li>
						<li>Новости компании</li>
						<li>Вакансии</li>
					</ul>
				</nav>
		</div>
		<div className="row">
			<p>	©Kyrgyz Concept 1990 — 2022
					<br/>При воспроизведении материалов сайта
					<br/>обязательна установка активной гиперссылки на источник</p>
		</div>
		</div>
	)
}
