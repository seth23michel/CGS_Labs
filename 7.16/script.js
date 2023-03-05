function isStrongPassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      return false;
    }
    
    // Check if the password contains the string "password"
    if (password.toLowerCase().includes('password')) {
      return false;
    }
    
    // Check if the password contains at least one uppercase character
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    
    // If all conditions are true, return true
    return true;
  }