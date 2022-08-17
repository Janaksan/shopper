import './category-items.style.scss';

export default function CategoryItems({ caregory }) {

    const { title, image } = caregory;

    return (
        <div className='category-container'>
            <div className='background-image' style={{ backgroundImage: `url(${image})` }}>
                <div className='category-body-container'>
                    <h2>{title}</h2>
                    <p>Shop Now</p>
                </div>
            </div>
        </div>
    )
}