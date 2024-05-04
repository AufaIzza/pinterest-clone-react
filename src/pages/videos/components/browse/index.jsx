import CardBrowse from "../browse/components/card-browse"

const index = () => {
    return <section className="section-browse">
        <h1>Browse by interest</h1>
        <div className="section-browse-category">
            <h3>Food and Drink</h3>
            <h4>See all</h4>
        </div>

        <div className="section-featured-contents">
            <CardBrowse duration={"0:23"} backgroundImage={"url(https://potatorolls.com/wp-content/uploads/2020/06/Summer-Food-Drink-Pairing.jpg)"}></CardBrowse>
            <CardBrowse duration={"0:46"} backgroundImage={"url(https://img.freepik.com/premium-vector/set-food-drink-vector-illustration-food-drink-cartoon-food-lunch_691616-18.jpg)"}></CardBrowse>
            <CardBrowse duration={"1:20"} backgroundImage={"url(https://media-cdn.tripadvisor.com/media/photo-s/06/ca/7d/be/bar-35-food-drinks.jpg)"}></CardBrowse>
            <CardBrowse duration={"0:45"} backgroundImage={"url(https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2018/05/22/uk-food-and-drink-manufacturers-feeling-brexit-uncertainty/8217042-1-eng-GB/UK-food-and-drink-manufacturers-feeling-Brexit-uncertainty.jpg)"}></CardBrowse>
            <CardBrowse duration={"2:30"} backgroundImage={"url(https://hips.hearstapps.com/hmg-prod/images/cos070123biteswhipitup-001-psd-d-64e3696d3c280.jpg?crop=0.785xw:1.00xh;0.109xw,0&resize=640:*)"}></CardBrowse>
            <CardBrowse duration={"0:33"} backgroundImage={"url(https://i.pinimg.com/originals/a9/fc/8d/a9fc8d3c5946f25cd27a1a7d35130d00.jpg)"}></CardBrowse>
        </div>


        <div className="section-browse-category">
            <h3>DIY and Crafts</h3>
            <h4>See all</h4>
        </div>

        <div className="section-featured-contents">
            <CardBrowse duration={"0:23"} backgroundImage={"url(https://i.pinimg.com/736x/f9/92/a3/f992a3b72fef1b182fa00137a6920894.jpg)"}></CardBrowse>
            <CardBrowse duration={"0:46"} backgroundImage={"url(https://www.prudentpennypincher.com/wp-content/uploads/2022/01/diy-crafts-for-adults-2.png)"}></CardBrowse>
            <CardBrowse duration={"1:20"} backgroundImage={"url(https://i.pinimg.com/736x/90/06/c0/9006c0622d79690057a3f75542a4764c.jpg)"}></CardBrowse>
            <CardBrowse duration={"0:45"} backgroundImage={"url(https://i.pinimg.com/originals/c9/dd/92/c9dd92483d8cadcc36685520fafb6641.jpg)"}></CardBrowse>
            <CardBrowse duration={"2:30"} backgroundImage={"url(https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2014/3/3/1/Original_Marianne-Canada-String-Art-Beauty_h.jpg.rend.hgtvcom.1280.1280.suffix/1400990697877.jpeg)"}></CardBrowse>
            <CardBrowse duration={"0:33"} backgroundImage={"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan4LQL0LMDggfkuefPxkp_gkowYuLuVF02MFuiX0ioQ&s)"}></CardBrowse>
        </div>
    </section>
}

export default index;