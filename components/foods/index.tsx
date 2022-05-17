import { FoodItem } from "../food-item";
import Styles from './styles.module.css';

export const FoodList = () => {

  const data = [
    {
      id: "1",
      name: "Gigantic Rodeo Burger",
      imageUrl: "/foods/burger.jpg",
      deliveryFee: '2.99 Entrega',
      rate: 4.3,
      reviews: 104,
      category: "Burger",
      deliveryTime: "45 - 55 min",
    },
    {
      id: "2",
      name: "Peperoni Pie",
      imageUrl: "/foods/pizza-peperoni.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.4,
      reviews: 543,
      category: "Pie",
      deliveryTime: "30 - 45 min",
    },
    {
      id: "3",
      name: "Natural Vegetable Rice",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: '3.45 Entrega',
      rate: 4.2,
      reviews: 7,
      category: "Rice",
      deliveryTime: "35 - 40 min",
    },
    {
      id: "4",
      name: "Delicious Cheese Pie",
      imageUrl: "/foods/cheesecake.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.9,
      reviews: 31,
      category: "Pie",
      deliveryTime: "15 - 25 min",
    },
    {
      id: "5",
      name: "Chef's Burger Deluxe",
      imageUrl: "/foods/chef-burger.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.4,
      reviews: 543,
      category: "Pie",
      deliveryTime: "30 - 45 min",
    },
    {
      id: "6",
      name: "Vegetable Skewers",
      imageUrl: "/foods/vegetable.jpg",
      deliveryFee: '3.45 Entrega',
      rate: 4.2,
      reviews: 7,
      category: "Rice",
      deliveryTime: "35 - 40 min",
    },
  ];

  return (
    <div className="mb-12">      
      <div className={Styles.header}>
      <h2>Pedidos populares</h2>
      <div>
        Hoje
      </div>        
      </div>
      <div className={Styles.container}>
        {data.map((item) => (
          <FoodItem key={item.name} {...item} />
        ))}
      </div>

    </div>
  )
}