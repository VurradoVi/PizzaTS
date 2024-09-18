import { FC, ChangeEvent, useState, FormEvent } from "react";
import "./styles.css";
import Pizza from "../models/pizza";

interface AddPizzaProps {
  addPizza: (newPizza: Pizza) => void
}

const initState = {
  title: "",
  price: "",
  img: "",
};

const AddPizzaForm: FC<AddPizzaProps> = ({addPizza}) => {
  const [newPizza, setNewPizza] = useState<{
    title: string;
    price: string;
    img: string;
  }>(initState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewPizza({
      ...newPizza,
      [name]: value
    })
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {title, price, img} = newPizza

    if (title && price && img) {
      addPizza({
        id: Date.now(),
        title,
        price: Number(price),
        img,
      })
      setNewPizza(initState)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        placeholder="Название"
        onChange={handleChange}
        value={newPizza.title}
      />
      <input
        name="price"
        type="text"
        placeholder="Стоимость"
        onChange={handleChange}
        value={newPizza.price}
      />
      <input
        name="img"
        type="text"
        placeholder="Изображение"
        onChange={handleChange}
        value={newPizza.img}
      />
      <button type="submit">+ Добавить в меню</button>
    </form>
  );
};

export default AddPizzaForm;
