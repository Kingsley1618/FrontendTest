export async function getTransaction() {
    try {
      const response = await fetch("https://fe-task-api.mainstack.io/transactions", {
        method: 'GET'
      });
  
      if (!response.ok) {
        throw new Error(`Failed to fetch data. Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
  