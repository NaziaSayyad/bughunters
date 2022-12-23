import React from "react";
const initvalue = {
  name: "",
  img: "",
};
function postCreatePage() {
  const [data, setData] = React.useState(initvalue);
  function handleChage(e) {
    const { name, value } = e.target;
    if ((e.target.name = "img")) {
      let file = e.target.files[0];
      setData({
        ...data,
        [name]: file,
      });
      return;
    }

    setData({
      ...data,
      [name]: value,
    });
  }
  const { name, img } = data;
  function handleSubmit() {
    conosle.log(data);
  }
  return (
    <div>
      <div>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          name="name"
          value={name}
          onChange={handleChage}
        />
        <input
          style={{ border: "1px solid black" }}
          type="file"
          name="img"
          value={img}
          onChange={handleChage}
        />
        <button onClick={handleSubmit}>submit</button>
      </div>
    </div>
  );
}

export default postCreatePage;
