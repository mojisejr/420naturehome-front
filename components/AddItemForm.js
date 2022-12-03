import { useEffect, useState } from "react";
import { useAddItem } from "../blockchain/contracts/payway.contract";

import styles from "../styles/AddItem.module.css";

function AddItemForm() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [grade, setGrade] = useState("");
  const [stars, setStar] = useState("");
  const [ercPrice, setErcPrice] = useState(0);
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("na");
  const [have, setHave] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { addItem, isSuccess } = useAddItem(
    name,
    type,
    ercPrice,
    price,
    stars,
    grade,
    desc,
    image,
    have
  );

  useEffect(() => {
    if (isSuccess) {
      setLoading(false);
    }
  }, [isSuccess]);

  function inputBodyHandler(fn, e) {
    const { value } = e.target;
    fn(value);
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log("body: ", {
      name,
      type,
      grade,
      stars,
      ercPrice,
      price,
      desc,
      image,
      have,
    });
    setLoading(true);
    addItem();
  }
  return (
    <form className={styles.container} onSubmit={onSubmitHandler}>
      <div className={styles.input}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          onChange={(e) => inputBodyHandler(setName, e)}
          required
          placeholder="eg. Gorilla"
        ></input>
      </div>
      <div className={styles.input}>
        <label htmlFor="type">type</label>
        {/* <input id="name" type="text"></input> */}
        <select onChange={(e) => inputBodyHandler(setType, e)} required>
          <option>select</option>
          <option value={0}>SATIVA</option>
          <option value={1}>INDICA</option>
          <option value={2}>HYBRID</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="grade">grade</label>
        {/* <input id="name" type="text"></input> */}
        <select onChange={(e) => inputBodyHandler(setGrade, e)} required>
          <option>select</option>
          <option value={0}>B</option>
          <option value={1}>A</option>
          <option value={2}>AA</option>
          <option value={3}>AAA</option>
          <option value={4}>AAAA</option>
          <option value={5}>S</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="stars">stars</label>
        {/* <input id="name" type="text"></input> */}
        <select
          id="stars"
          onChange={(e) => inputBodyHandler(setStar, e)}
          required
        >
          <option>select</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="ERC20price">ERC20 price</label>
        {/* <input id="name" type="text"></input> */}
        <input
          id="ERC20price"
          type="number"
          onChange={(e) => inputBodyHandler(setErcPrice, e)}
          required
          placeholder="eg. 10 => 10 BUSD"
        ></input>
      </div>
      <div>
        <label htmlFor="price">Coin price</label>
        {/* <input id="name" type="text"></input> */}
        <input
          id="price"
          type="number"
          required
          onChange={(e) => inputBodyHandler(setPrice, e)}
        ></input>
      </div>
      <div className={styles.input}>
        <label htmlFor="desc">description</label>
        {/* <input id="name" type="text"></input> */}
        <input
          id="desc"
          type="text"
          required
          onChange={(e) => inputBodyHandler(setDesc, e)}
        ></input>
      </div>
      <div className={styles.input}>
        <label htmlFor="imgUrl">Image Url</label>
        {/* <input id="name" type="text"></input> */}
        <input
          id="imgUrl"
          type="text"
          onChange={(e) => inputBodyHandler(setImage, e)}
        ></input>
      </div>
      <div className={styles.input}>
        <label htmlFor="have">Have ?</label>
        {/* <input id="name" type="text"></input> */}
        <select id="have" onChange={(e) => inputBodyHandler(setHave, e)}>
          <option value={true}>Have</option>
          <option value={false}>Sold</option>
        </select>
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.input}>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      )}
    </form>
  );
}

function Loading() {
  return (
    <div>
      <h1>Loading ..</h1>
    </div>
  );
}

export default AddItemForm;
