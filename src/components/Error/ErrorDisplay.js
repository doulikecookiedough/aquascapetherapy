const ErrorDisplay = ({ error }) => {
  return (
    <div>
      <h2>D'oh, something didn't go as expected</h2>
      <p>{error}</p>
    </div>
  );
};

export default ErrorDisplay;