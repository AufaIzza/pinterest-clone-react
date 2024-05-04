import CardCategory from "../category/components/card-category"

const categoryList = [
    {
        category: "Fashion",
        description: "Discover trending looks",
        backgroundImage: "https://www.blibli.com/friends-backend/wp-content/uploads/2023/05/B400294-Cover-Apa-Perbedaan-Fashion-dan-Style-1.jpg",
    },
    {
        category: "Beauty",
        description: "Try the latest tips and tricks",
        backgroundImage: "https://stories.briefer.id/wp-content/uploads/2023/03/selenagomez1-989573a61f674999b51f9f569d4cc93a.jpg",
    },
    {
        category: "Home",
        description: "Design your ideal space",
        backgroundImage: "https://da28rauy2a860.cloudfront.net/completehome/wp-content/uploads/2021/03/03114534/Millbrook-Homes-58series-1.jpg",
    },
    {
        category: "DIY",
        description: "Start a new craft project",
        backgroundImage: "https://www.shihoriobata.com/wp-content/uploads/2019/05/diyropemacramehanging-03.jpg",
    },
    {
        category: "Food & Drink",
        description: "Find your inner chef",
        backgroundImage: "https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg",
    },
    
];

const index = () => {
    return <section className="section-category">
        {categoryList.map((item, index) => {
            return <CardCategory
                key={item.category}
                category= {item.category}
                description= {item.description}
                backgroundImage= {`url(${item.backgroundImage})`}
            ></CardCategory>
        })}
    </section>
}

export default index;