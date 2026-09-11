function SuccessMessageComponent({ message }) {
  return (
    <div className="message message--success" role="status" aria-live="polite">
      {message}
    </div>
  );
}

export default SuccessMessageComponent;
