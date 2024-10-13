import React, { useState } from "react";

const BMICalculator = () => {
    const [weight, setWeight] = useState(50);
    const [height, setHeight] = useState(160);
    const [bmi, setBmi] = useState(null);
    const [message, setMessage] = useState("");

    const calculateBMI = () => {
        if (weight && height) {
            const heightInMeters = height / 100; 
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);

            if (bmiValue < 18.5) {
                setMessage("Underweight");
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setMessage("Normal weight");
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setMessage("Overweight");
            } else {
                setMessage("Obese");
            }
        }
    };

    const resetCalculator = () => {
        setWeight(50);
        setHeight(160);
        setBmi(null);
        setMessage("");
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h2>

                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Weight (kg): {weight}kg</label>
                        <input
                            type="range"
                            step="1"
                            min="40"
                            max="250"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-full mt-1"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Height (cm): {height}cm</label>
                        <input
                            type="range"
                            min="100"
                            max="220"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="w-full mt-1"
                        />
                    </div>

                    <button
                        onClick={calculateBMI}
                        className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-4"
                    >
                        Calculate BMI
                    </button>
                </div>

                {bmi && (
                    <div className="mt-4 text-center">
                        <h3 className="text-lg font-medium">Your BMI: {bmi}</h3>
                        <p className="text-sm">{message}</p>
                    </div>
                )}

                <button
                    onClick={resetCalculator}
                    className="w-full p-2 mt-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default BMICalculator;
