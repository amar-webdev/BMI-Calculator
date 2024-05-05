import React, { useState } from 'react'; 

function BmiCalculator() { 
	const [heightValue, setHeightValue] = useState(''); 
	const [weightValue, setWeightValue] = useState(''); 
	const [bmiValue, setBmiValue] = useState(''); 
	const [bmiMessage, setBmiMessage] = useState(''); 

	const calculateBmi = () => { 
		if (heightValue && weightValue) { 
			const heightInMeters = heightValue / 100; 
			const bmi = (weightValue / (heightInMeters * heightInMeters)).toFixed(2); 
			setBmiValue(bmi); 

			let message = ''; 
			if (bmi < 18.5) { 
				message = 'You are Underweight'; 
			} else if (bmi >= 18.5 && bmi < 25) { 
				message = 'You are Normal weight'; 
			} else if (bmi >= 25 && bmi < 30) { 
				message = 'You are Overweight'; 
			} else { 
				message = 'You are Obese'; 
			} 
			setBmiMessage(message); 
		} else { 
			setBmiValue(''); 
			setBmiMessage(''); 
		} 
	}; 

	return ( 
		<div className="container"> 
			<div className="input-container m-6 text-center"> 
				<label htmlFor="height">Enter Your Height (cm):</label> 
				<input 
                    className='text-black ml-4 '
					type="number"
					id="height"
					value={heightValue} 
					onChange={(e) => setHeightValue(e.target.value)} 
				/> 
			</div> 
			<div className="input-container m-6 text-center"> 
				<label htmlFor="weight">Enter Your Weight (kg):</label> 
				<input 
                    className='text-black ml-4 '
					type="number"
					id="weight"
					value={weightValue} 
					onChange={(e) => setWeightValue(e.target.value)} 
				/> 
			</div> 
            <div id="Bgi-Calculate" className='m-6 text-center'>
			<button className="calculate-btn  p-3 rounded-lg text-center bg-green-800" onClick={calculateBmi}> 
				Click to Calculate BMI 
			</button> 
            </div>
			{bmiValue && bmiMessage && ( 
				<div className="result text-center"> 
					<p> 
						Your BMI: <span className="bmi-value">{bmiValue}</span> 
					</p> 
					<p> 
						Result: <span className="bmi-message">{bmiMessage}</span> 
					</p> 
				</div> 
			)} 
		</div> 
	); 
} 

export default BmiCalculator;
