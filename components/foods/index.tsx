import { FoodItem } from "../food-item";
import Styles from './styles.module.css';

export const FoodList = () => {

  const data = [
    {
      name: "Gigantic Rodeo Burger",
      imageUrl: "/foods/burger.jpg",
      deliveryFee: '2.99 Entrega',
      rate: 4.3,
      reviews: 104,
      category: "Burger",
      deliveryTime: "45 - 55 min",
    },
    {
      name: "Peperoni Pie",
      imageUrl: "/foods/pizza-peperoni.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.4,
      reviews: 543,
      category: "Pie",
      deliveryTime: "30 - 45 min",
    },
    {
      name: "Natural Vegetable Rice",
      imageUrl: "/foods/vegan.jpg",
      deliveryFee: '3.45 Entrega',
      rate: 4.2,
      reviews: 7,
      category: "Rice",
      deliveryTime: "35 - 40 min",
    },
    {
      name: "Delicious Cheese Pie",
      imageUrl: "/foods/cheesecake.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.9,
      reviews: 31,
      category: "Pie",
      deliveryTime: "15 - 25 min",
    },
    {
      name: "Chef's Burger Deluxe",
      imageUrl: "/foods/chef-burger.jpg",
      deliveryFee: 'Entrega grátis',
      rate: 4.4,
      reviews: 543,
      category: "Pie",
      deliveryTime: "30 - 45 min",
    },
    {
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
      <div className="flex gap-6 justify-between flex-wrap">
        {data.map((item) => (
          <FoodItem key={item.name} {...item} />
        ))}
      </div>

    </div>
  )
}