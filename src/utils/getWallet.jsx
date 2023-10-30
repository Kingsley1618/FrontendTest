export async function getWallet() {
    try {
       const res = await fetch("https://fe-task-api.mainstack.io/wallet", {
        method : 'GET'
       })

       if(!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
       }
       const data  = await res.json()
       return data
    }

    catch (error) {
        console.error(error);
      throw error; 
    }
}