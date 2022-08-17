
import './categories.styles.scss'
import CategoryItems from './../caregory-items/category-items.component';

export default function Categories() {
    const categories = [
        {
            id: 1,
            title: "Hats",
            image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370'
        },
        {
            id: 2,
            title: "Jakets",
            image: 'https://images.unsplash.com/photo-1580310173421-8784cc72069f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369'
        },
        {
            id: 3,
            title: "Sneakers",
            image: 'https://images.unsplash.com/photo-1549298916-f52d724204b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2226'
        },
        {
            id: 4,
            title: "Womens",
            image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370'
        },
        {
            id: 5,
            title: "Mens",
            image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370'
        }
    ]

    return (
        <div className='categories-container'>
            {
                categories.map((category) => (
                    <CategoryItems key={category.id} caregory={category} />
                ))
            }
        </div>
    )
}