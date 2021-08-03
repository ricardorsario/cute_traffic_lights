import React, { Fragment, useState } from "react";
import Circle from "./circle.jsx";

//create your first component
function Home() {
	//const [actualColor, setActualColorTo] = useState("grey ");
	const [trafficLightState, setTrafficLightState] = useState({
		red_color: false,
		yellow_color: false,
		green_color: false
	});

	const changeCircle = color => {
		console.log(color);

		if (color == "red") {
			setTrafficLightState({
				red_color: true,
				yellow_color: false,
				green_color: false
			});
		} else if (color == "yellow") {
			setTrafficLightState({
				red_color: false,
				yellow_color: true,
				green_color: false
			});
		} else if (color == "green") {
			setTrafficLightState({
				red_color: false,
				yellow_color: false,
				green_color: true
			});
		}
	};

	return (
		<div className="master-div-home">
			<div className="two-rectangle-flex-row">
				<div className="wire-left"></div>
				<div className="wire-right"></div>
			</div>
			<div className="rectangle-top"></div>
			<div className="rectangle-top-bottom"></div>
			<div className="two-rectangle-flex-row">
				<div className="rectangle-right"></div>
				<div className="rectangle">
					<Circle
						state={trafficLightState.red_color}
						colorSon="red"
						face="https://i.ibb.co/pzm7H2s/numbing-03.png"
						changeProp={changeCircle}
					/>
					<Circle
						state={trafficLightState.yellow_color}
						colorSon="yellow"
						face="https://i.ibb.co/mXJ8Lmy/numb-face-02.png"
						changeProp={changeCircle}
					/>
					<Circle
						state={trafficLightState.green_color}
						colorSon="green"
						face="https://i.ibb.co/3vGsK10/face-01.png"
						changeProp={changeCircle}
					/>
				</div>
			</div>
			<div className="rectangle-top-bottom"></div>
		</div>
	);
}

export default Home;
