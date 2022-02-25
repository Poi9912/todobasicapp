import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(()=>{
      try{
          setTimeout(() => {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
          } else {
          parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
      }, 1000);
      } catch(err) {
      setError(err);
      }
  });

  const saveItem = (newItem) => {
      try  {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem);
      } catch (err){
      setError(err);
      }
  }
  return  {item,saveItem,loading,error};
}

export { useLocalStorage };