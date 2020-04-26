import React from 'react';
import './chart-data-button.style.css';
import PropTypes from 'prop-types';
import Button from '../../button/button.component';
import UpdateDateRange from '../../update-date-range/update-date-range.component';

const ChartbarMenu = ({
  buttons,
  selectedChartButtonId,
  setSelectedChartButtonId,
  setActiveChartButton,
  activeChartButton,
  setStartCustom,
  setEndCustom,
  updateClick,
  setUpdateClick,
}) => {
  if (activeChartButton && selectedChartButtonId === 5) {
    return (
      <UpdateDateRange
        date="date"
        text="Update"
        setStartCustom={setStartCustom}
        setEndCustom={setEndCustom}
        updateClick={updateClick}
        setUpdateClick={setUpdateClick}
      />
    );
  }
  return (
    <div className="chartbar-button-wrapper">
      {buttons.map((button) => {
        return (
          <Button
            key={button.id}
            type="toggle"
            size="large"
            onClick={() => {
              setSelectedChartButtonId(button.id);
              setActiveChartButton(!activeChartButton);
            }}
            toggled={selectedChartButtonId === button.id && activeChartButton}
          >
            {button.label}
          </Button>
        );
      })}
    </div>
  );
};

ChartbarMenu.defaultProps = {
  buttons: [],
};

ChartbarMenu.propTypes = {
  selectedChartButtonId: PropTypes.number.isRequired,
  setSelectedChartButtonId: PropTypes.func.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
    }),
  ),
  setActiveChartButton: PropTypes.func.isRequired,
  activeChartButton: PropTypes.func.isRequired,
  setStartCustom: PropTypes.func.isRequired,
  setEndCustom: PropTypes.func.isRequired,
  updateClick: PropTypes.bool.isRequired,
  setUpdateClick: PropTypes.func.isRequired,
};

export default ChartbarMenu;
