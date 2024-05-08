import Image1 from "../../../../assets/today/3ef1746ee5289eb936a5c4d8479ecf7c.jpg"


import Card from "./card/index"
import Tomorrow from "./tomorrow/index"
import "./styles.css"

const index = () => {
    return(
        <div className="pt-20">
            <div className="flex flex-col items-center">
                <p className="font-semibold text-xl">May 5, 2024</p>
                <p className="font-semibold text-4xl">Stay Inspired</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center my-5 mx-0">
                <Card smalltext={"🔥🔥🔥"} text="Foto bareng sneakers yang estetik" image={Image1}/>
                <Card smalltext={"bisa sambil duduk"} text="Yuk coba olahraga 5 menit aja" image={Image1}/>
                <Card smalltext={"berbagai pilihan resep"} text="Bahan minggu ini: Mie" image={Image1}/>
                <Card smalltext={"inspo dekor"} text="POV: Masuk ke kamar gamers" image={Image1}/>
                <Card smalltext={"kutipan semangat"} text="Kirim pesan untuk atau dari dirimu" image={Image1}/>
                <Card smalltext={"meow!"} text="Wallpaper kucing yang menggemaskan" image={Image1}/>
                <Card smalltext={"buat pemula atau lanjutan"} text="Tips & trick digital drawing" image={Image1}/>
            </div>
            <Tomorrow/>
        </div>
    )
}

export default index