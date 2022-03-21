export const actions = { 
    DELETE: 'DELETE',
    UPDATE: 'UPDATE'
  };    

export const deleterecord = (payload) => {
    return {
      type: actions.DELETE,
      payload
    }
  }
  
  // acción para decrementar un contador
  export const updaterecord = (payload) => {
    return {
      type: actions.UPDATE,
      payload
    }
  }
  
 