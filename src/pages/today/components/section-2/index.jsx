import Image1 from "../../assets/3ef1746ee5289eb936a5c4d8479ecf7c.jpg"
import Image2 from "../../assets/Screenshot_20240504_204829.png"
import Image3 from "../../assets/Screenshot_20240504_204420.png"
import Image4 from "../../assets/4fc75a6de49231c737484e6ef6e9b944.jpg"
import Card from "./components/card/index"
import Tomorrow from "./components/tomorrow/index"
import "./styles.css"

const index = () => {
    return(
        <div className="todayi-container-div">
            <div className="todayi-date-div">
                <p className="todayi-date-date">May 5, 2024</p>
                <p className="todayi-date-text">Stay Inspired</p>
            </div>
            <div className="todayi-cards-div">
                <Card smalltext={"Buat pemula atau lanjutan"} text="Tips & Trick digital drawing" image={Image5}/>
                <Card smalltext={"Kutipan semangat"} text="kirim pesan untuk atau darimu" image={Image6}/>
                <Card smalltext={"wangi bunga menenangkan"} text="foto bunga wallpaper indah" image={Image7}/>
                <Card smalltext={"Keindahan"} text="walpaper langit aesthetic" image={Image8}/>
                <Card smalltext={"🔥🔥🔥"} text="Foto bareng sneakers yang estetik" image={Image1}/>
                <Card smalltext={"bisa sambil duduk"} text="Yuk coba olahraga 5 menit aja" image={Image2}/>
                <Card smalltext={"berbagai pilihan resep"} text="Bahan minggu ini: Mie" image={Image3}/>
                <Card smalltext={"inspo dekor"} text="POV: Masuk ke kamar gamers" image={Image4}/>
                <Card smalltext={"kutipan semangat"} text="Kirim pesan untuk atau dari dirimu" image={Image5}/>
                <Card smalltext={"meow!"} text="Wallpaper kucing yang menggemaskan" image={Image6}/>
                <Card smalltext={"buat pemula atau lanjutan"} text="Tips & trick digital drawing" image={Image7}/>
            </div>
            <Tomorrow/>
        </div>
    )
}

export default index