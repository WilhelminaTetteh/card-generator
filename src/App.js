import './App.css';
import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import cards from '../src/data/cards.js';
import elucid from './images/Elucid_logo_2.png';
import yayra from './images/yayra-logo.png';
import underlay from './images/Under-image.png';

const Cards = React.forwardRef((props, ref) => (
	<div ref={ref} className='sheet'>
		{cards.map((card, id) => {
			return (
				<div className='cards' key={id}>
					<div className='card_left'>
						<div className='logos'>
							<img
								className='elucid-logo'
								src={elucid}
								alt='elicid-logo'
							/>
							<img
								className='yayra-logo'
								src={yayra}
								alt='yayra-logo'
							/>
						</div>
						<h1 className='id-header'>HEALTH INSURANCE CARD</h1>
						<div className='farmer'>
							<div className='farmer-image-container'>
								<img
									src={card.face_image_url}
									alt='face'
									className='farmer-image'
								/>
							</div>

							<div className='farmer-text'>
								<ul className='farmer-col1 farmer-list'>
									<li className='farmer-list-item info-title'>
										First Name
									</li>
									<li className='farmer-list-item info-text'>
										{card.first_name}
									</li>
									<li className='farmer-list-item info-title '>
										Membership Number
									</li>
									<li className='farmer-list-item info-text membership-id'>
										{card.membership_number}
									</li>
									<li className='farmer-list-item info-title'>
										Date of Birth
									</li>
									<li className='farmer-list-item info-text'>
										{card.date_of_birth}
									</li>
									<li className='farmer-list-item info-title'>Sex</li>
									<li className='farmer-list-item info-text'>
										{card.sex}
									</li>
								</ul>

								<ul className='farmer-col2 farmer-list'>
									<li className='farmer-list-item info-title'>
										Last Name
									</li>
									<li className='farmer-list-item info-text'>
										{card.last_name}
									</li>
									<li className='farmer-list-item info-title'>
										Address
									</li>
									<li className='farmer-list-item info-text info-text-village'>
										{card.address}
									</li>
									<li className='farmer-list-item info-title'>
										Phone
									</li>
									<li className='farmer-list-item info-text'>
										{card.phone_number}
									</li>
								</ul>
							</div>
						</div>
						<img className='underlay' src={underlay} alt='underlay' />
					</div>
					<div className='card_right'>
						<div className='farmer-text'>
							<ul className='farmer-col1 farmer-list'>
								<li className='farmer-list-item info-title'>
									Coverage Scheme
								</li>
								<li className='farmer-list-item info-text'>
									Akwaaba Health Coverage
								</li>
								<li className='farmer-list-item info-title '>
									Start Date
								</li>
								<li className='farmer-list-item info-text membership-id'>
									{card.start_date}
								</li>
							</ul>
							<ul className='farmer-col2 farmer-list'>
								<li className='farmer-list-item info-title'>
									Coverage (%)
								</li>
								<li className='farmer-list-item info-text'>100%</li>
								<li className='farmer-list-item info-title'>
									End Date
								</li>
								<li className='farmer-list-item info-text info-text-village'>
									{card.end_date}
								</li>
							</ul>
						</div>
						<div className='if-found-container'>
							<p className='if-found'>
								This card is Property of Elucid Social Ghana / Yayra
								Glover . If found, please call:
							</p>
							<p className='if-found'>0263189022</p>
						</div>

						<img
							src={underlay}
							alt='underlay'
							className='underlay-back'
						/>
					</div>
				</div>
			);
		})}
	</div>
));
function App() {
	const componentRef = useRef();

	return (
		<div>
			<ReactToPrint
				trigger={() => (
					<button
						className='print-button'
						onClick={console.log('clicked')}>
						Print
					</button>
				)}
				content={() => componentRef.current}
			/>
			<Cards ref={componentRef} />
		</div>
	);
}
export default App;
