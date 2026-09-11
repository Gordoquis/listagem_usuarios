function ErrorMessageComponent({ message }) {
  return (
    <div className="message message--error" role="alert" aria-live="assertive">
      {message}
    </div>
  );
}

export default ErrorMessageComponent;
