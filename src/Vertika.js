import React from 'react';
import Vertika from './Media/vertika_profile.jpg'
import './Vertika.css'
// use this file as basic layout and name of classes of your css
function MyResume() {
	return (
		<div className="name__resume">
			<div className="name__contact">
				<span> Name </span>- Vertika Sah
				<br /><br />
				<span>Contact Number</span> - 9818406177
				<br /><br />
				<span>Profile</span>
				<ul>
					<li>
						<a href="https://www.linkedin.com/in/vertika-sah-7344441a9/">Linked Profile</a>
					</li>
					<li>
						<a href="https://github.com/vertika-gif">Github Profile</a>
					</li>
				</ul>
			</div>
			<section class="sec2">
				<div className="name__skills">
					<p>
						<span>Skills</span> - C++(moderate), DSA(moderate), c(beginner)
				</p>
					<p>
						<span>Education </span>-
						School - Bal Bharti Public School, Pitampura
						<br /><br />
						College - Netaji Subhas University of Technology
				</p>
				</div>
				<div className="name__img">
					<img src={Vertika} alt="Profile Photo" />
				</div>
			</section>
		</div>

	);
}

export default MyResume;
