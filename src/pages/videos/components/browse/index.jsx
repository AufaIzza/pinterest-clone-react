import CardBrowse from "../browse/components/card-browse"
import SectionBrowseCategory from "../browse/components/section-browse-category"

const browseList = [
    {
        categoryName: "Food and Drink",
        data: [
            {
                duration: "0:23",
                backgroundImage: "https://potatorolls.com/wp-content/uploads/2020/06/Summer-Food-Drink-Pairing.jpg",
            },
            {
                duration: "0:46",
                backgroundImage: "https://img.freepik.com/premium-vector/set-food-drink-vector-illustration-food-drink-cartoon-food-lunch_691616-18.jpg",
            },
            {
                duration: "1:20",
                backgroundImage: "https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg",
            },
            {
                duration: "0:45",
                backgroundImage: "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2018/05/22/uk-food-and-drink-manufacturers-feeling-brexit-uncertainty/8217042-1-eng-GB/UK-food-and-drink-manufacturers-feeling-Brexit-uncertainty.jpg",
            },
            {
                duration: "2:30",
                backgroundImage: "https://hips.hearstapps.com/hmg-prod/images/cos070123biteswhipitup-001-psd-d-64e3696d3c280.jpg?crop=0.785xw:1.00xh;0.109xw,0&resize=640:*",
            },
            {
                duration: "0:33",
                backgroundImage: "https://i.pinimg.com/originals/a9/fc/8d/a9fc8d3c5946f25cd27a1a7d35130d00.jpg",
            },
        ]
    },
    {
        categoryName: "DIY and Crafts",
        data: [
            {
                duration: "0:23",
                backgroundImage: "https://i.pinimg.com/736x/f9/92/a3/f992a3b72fef1b182fa00137a6920894.jpg",
            },
            {
                duration: "0:46",
                backgroundImage: "https://www.prudentpennypincher.com/wp-content/uploads/2022/01/diy-crafts-for-adults-2.png",
            },
            {
                duration: "1:20",
                backgroundImage: "https://i.pinimg.com/736x/90/06/c0/9006c0622d79690057a3f75542a4764c.jpg",
            },
            {
                duration: "0:45",
                backgroundImage: "https://i.pinimg.com/originals/c9/dd/92/c9dd92483d8cadcc36685520fafb6641.jpg",
            },
            {
                duration: "2:30",
                backgroundImage: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/3/3/1/Original_Marianne-Canada-String-Art-Beauty_h.jpg.rend.hgtvcom.1280.1280.suffix/1400990697877.jpeg",
            },
            {
                duration: "0:33",
                backgroundImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan4LQL0LMDggfkuefPxkp_gkowYuLuVF02MFuiX0ioQ&s",
            },
        ]
    }
];

const index = () => {
    return <section className="section-browse">
        <h1>Browse by interest</h1>

        {browseList.map((section, index) => {
            return <div key={section.categoryName}>
                <SectionBrowseCategory categoryName={section.categoryName}></SectionBrowseCategory>
                <div className="section-featured-contents">
                    {section.data.map((item, index) => {
                        return <CardBrowse
                            key={item.backgroundImage}
                            duration={item.duration}
                            backgroundImage={`url(${item.backgroundImage})`}
                        ></CardBrowse>
                    })}
                </div>
            </div>
        })}
    </section>
}

export default index;