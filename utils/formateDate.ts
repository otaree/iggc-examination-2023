export function convertISODateToDDMMYYYY(isoDateString: string) {
    const date = new Date(isoDateString);
  
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  }