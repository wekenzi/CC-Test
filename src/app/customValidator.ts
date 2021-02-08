export function dateRangeValidator(min: Date) {
    return control => {
      if (!control.value) return null;
  
      const dateValue = new Date(control.value);
  
      if (min && dateValue < min) {
        return { message: 'error message' };
      }
  
      null;
    }
  }