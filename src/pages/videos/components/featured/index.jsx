import CardFeatured from "../featured/components/card-featured"

const listFeatured = [
    {
        backgroundImage: "https://blogstudio.s3.theshoppad.net/lings-linen/6179bc6a0123df636bfed94b1e450ea1.jpg",
        duration: "0:23",
        title: "make a flower chandelier",
        category: "DIY and Crafts",
    },
    {
        backgroundImage: "https://assets.clevelandclinic.org/transform/26568096-7fcc-4713-898d-ca1ed6c84895/exerciseHowOften-944015592-770x533-1_jpg",
        duration: "2:42",
        title: "Is Exercise a Must for Ket...",
        category: "",
    },
    {
        backgroundImage: "https://i.ytimg.com/vi/rRM5C7C2sFI/maxresdefault.jpg",
        duration: "0:32",
        title: "Crochet pattern for home",
        category: "DIY and Crafts",
    },
    {
        backgroundImage: "https://www.simplyhappyfoodie.com/wp-content/uploads/2022/02/instant-pot-popcorn-4.jpg",
        duration: "0:30",
        title: "Instant Pop Popcorn",
        category: "Food and Drink",
    },
    {
        backgroundImage: "https://i.pinimg.com/originals/84/b3/7a/84b37a9ecc745f23cdef9524187eaebb.jpg",
        duration: "0:42",
        title: "Paper Plate Snail",
        category: "DIY and Crafts",
    }
];

const index = () => {
    return <section className="section-featured">
        <h1>Featured Videos</h1>
        <div className="section-featured-contents">
            {listFeatured.map((item, index) => {
                return <CardFeatured
                    key={item.title}
                    backgroundImage={`url(${item.backgroundImage})`}
                    duration={item.duration}
                    title={item.title}
                    category={item.category}
                ></CardFeatured>
            })}
        </div>
    </section>
}

export default index;