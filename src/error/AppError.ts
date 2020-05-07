interface ErrorProps {
  status: number;
  message: string;
  name?: string;
}

class AppError extends Error {
  public status: number;

  constructor({ status, message, name }: ErrorProps) {
    super();
    this.status = status;
    this.message = message;
    this.name = name;
  }
}

export default AppError;
