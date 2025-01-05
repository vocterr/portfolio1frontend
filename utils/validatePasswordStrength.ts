export const validatePasswordStrength = (password: string) => {
    if (password.length < 8) {
      return {
        message: "Password is too short (min. 8 characters)",
        color: "red", // Tailwind class for red color
      };
    }
  
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
    if (!hasUpperCase) {
      return {
        message: "Password must contain at least one uppercase letter",
        color: "yellow", // Tailwind class for yellow color
      };
    }
  
    if (!hasLowerCase) {
      return {
        message: "Password must contain at least one lowercase letter",
        color: "yellow",
      };
    }
  
    if (!hasNumber) {
      return {
        message: "Password must contain at least one number",
        color: "yellow",
      };
    }
  
    if (!hasSpecialChar) {
      return {
        message: "Password must contain at least one special character",
        color: "yellow",
      };
    }
  
    if (password.length >= 12) {
      return {
        message: "Strong password",
        color: "green", // Tailwind class for green color
      };
    }
  
    return {
      message: "Moderately strong password",
      color: "blue", // Tailwind class for blue color
    };
  };
  