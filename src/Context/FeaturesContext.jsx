import { createContext, useContext } from 'react';
import { useState } from 'react';
const FeaturesContext = createContext();

export default FeaturesContextProvider = () => {
    const [features, setFeatures] = useState({
        home: true,
        store: false,})
  return (
    <div>
      
    </div>
  )
}

export const useFeaturs =  () => useContext(FeaturesContext);
