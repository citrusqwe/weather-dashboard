import React from 'react';

interface PredictionProps {
  date: string;
  day: {
    avgtemp_c: number;
    mintemp_c: number;
    maxtemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Prediction: React.FC<PredictionProps> = ({ date, day }) => {
  return (
    <div className="aside-prediction__item prediction-item">
      <img
        src={day.condition.icon}
        alt={day.condition.text}
        className="prediction-item__icon"
      />
      <div className="prediction-item__body">
        <span className="prediction-item__date">{date}</span>
        <div className="prediction-item__info">
          {day.condition.text}
          <span className="prediction-item__temp">
            {`${Math.floor(day.mintemp_c)}° / 
            ${Math.floor(day.maxtemp_c)}°`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
