import React, { useState } from 'react';

function App() {
  const [breed, setBreed] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleButtonClick = () => {
    let url = 'https://dog.ceo/api/breeds/image/random';
    if (breed) {
      url = `https://dog.ceo/api/breed/${breed}/images/random`;
    }
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setImageUrl(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleBreedChange = (event) => {
    setBreed(event.target.value);
  };

  const handleSubmitClick = () => {
    if (breed) {
      handleButtonClick();
    }
  };

  return (
    <div>
      <h1>Dog Picture Generator</h1>
      <label>
        Type a breed if you'd like:
        <input type="text" value={breed} onChange={handleBreedChange} />
      </label>
      <button onClick={handleSubmitClick}>Submit</button>
      <button onClick={handleButtonClick}>Or CLICK HERE to get a random dog picture</button>
     {imageUrl && <img src={imageUrl} alt="A random dog" />}
    </div>
  );
}

export default App;
