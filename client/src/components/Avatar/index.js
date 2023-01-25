import React from "react";

const sprites = [
  "male",
  "female",
  "human",
  "identicon",
  "initials",
  "bottts",
  "avataaars",
  "jdenticon",
  "gridy",
  "micah"
];

function Avatar() {
  const [imgURL, setImgURL] = React.useState("");
  const [inputVal, setInputVal] = React.useState("");
  const [selectedSprite, setSelectedSprite] = React.useState(sprites[0]);

  const handleInputChange = (e) => {
    setInputVal(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${selectedSprite}/${e.target.value}.svg`
        );
      }
      return e.target.value;
    });
  };

  const handleSpriteChange = (e) => {
    setSelectedSprite(() => {
      if (e.target.value.length > 0) {
        setImgURL(
          `https://avatars.dicebear.com/api/${e.target.value}/${inputVal}.svg`
        );
      }
      return e.target.value;
    });
  };

  return (
    <div className="profileCard">
      <div>
        <div>
          {imgURL && (
            <div
              style={{ width: "5rem" }}
            >
              <img src={imgURL} alt="dicebar" style={{ height: "5rem" }} />
            </div>
          )}
        </div>
        <div>
          <div
            style={{ width: "20rem" }}
          >
            <p>Select your sprite and type anything!</p>
            <input
              value={inputVal}
              onChange={handleInputChange}
              placeholder="Type Anything but your password!"
            />
            <select onChange={handleSpriteChange} className="form-select">
              {sprites.map((sprite, index) => (
                <option value={sprite} key={index}>
                  {sprite}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avatar;