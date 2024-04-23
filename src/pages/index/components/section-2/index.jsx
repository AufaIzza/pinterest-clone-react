import "./styles.css"
import fa1 from "./assets/1fa.jpg"
import fa2 from "./assets/2fa.jpg"
import fa3 from "./assets/3fa.jpg"
import fa4 from "./assets/4fa.jpg"
import fa5 from "./assets/5fa.jpg"
import fa6 from "./assets/6fa.jpg"
import fa7 from "./assets/7fa.jpg"
import FutureHome from "./assets/future-home-vibes-adb19e98.png"
import ScandanavianBedroom from "./assets/scandinavian-bedroom-696dfba5.png"
import DeckOfDreams from "./assets/deck-of-dreams-205a139e.png"
import ServeMyDrinks from "./assets/serve-my-drinks-4de83489.png"

// TODO
// CONVERT THE SCRIPT TAG
/*
    <script>
        let scrollAmount = 0;
        const imageList = document.querySelector(".image-listF");
        const imageItems = document.querySelectorAll(".image-itemF");
  
        // Tombol navigasi ke kanan
        document.querySelector(".nav-right").addEventListener("click", () => {
          const imageWidth = imageList.offsetWidth; // Mengambil lebar dari imageList
          scrollAmount += imageWidth; // Menambahkan lebar penuh dari imageList ke scrollAmount
          imageList.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth",
          });
        });
  
        document.querySelector(".nav-left").addEventListener("click", () => {
          const imageWidth = imageList.offsetWidth; // Mengambil lebar dari imageList
          scrollAmount -= imageWidth; // Mengurangi lebar penuh dari imageList dari scrollAmount
          imageList.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth",
          });
        });
        function pauseAutoScroll() {
          clearInterval(autoScrollInterval); // Menghentikan auto scroll
          setTimeout(() => {
            autoScrollInterval = setInterval(autoScroll, 3000); // Memulai kembali auto scroll setelah 3 detik
          }, 3000);
        }
        // Fungsi untuk melakukan scroll otomatis
        function autoScroll() {
          const imageWidth = imageList.offsetWidth; // Mengambil lebar dari imageList
          scrollAmount += imageWidth; // Menambahkan lebar penuh dari imageList ke scrollAmount
  
          // Jika scrollAmount melebihi lebar maksimum, kembali ke awal
          if (scrollAmount >= imageList.scrollWidth) {
            scrollAmount = 0;
          }
  
          imageList.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: "smooth",
          });
        }
  
        // Mengatur interval untuk scroll otomatis setiap 3 detik
        setInterval(autoScroll, 3000);
      </script>

*/

const index = () => {
       
    return (
    <section class="section-febri" id="home">
        <main class="content-feb">
          <h1>Save <span>ideas</span> you like</h1>
          <p>
            Collect your favorit so you can <br />
            get back to them later.
          </p>
          <a href="#" class="cta">Explore</a>
        </main>
        <div class="container-F">
          <div class="slider-wrapperF">
            <div class="image-listF">
              <img src={fa1} alt="1" class="image-itemF" />
              <img src={fa2} alt="2" class="image-itemF" />
              <img src={fa3} alt="3" class="image-itemF" />
              <img src={fa4} alt="4" class="image-itemF" />
              <img src={fa5} alt="5" class="image-itemF" />
              <img src={fa6} alt="6" class="image-itemF" />
              <img src={fa7} alt="7" class="image-itemF" />
              <button class="nav-left">{"<"}</button>
              <button class="nav-right">{">"}</button>
            </div>
          </div>
          <div class="image-gallery">
            <figure class="future-home">
              <a href="#">
                <img src={FutureHome} alt="Future Home" />
                <figcaption>Fern future home vibes</figcaption>
              </a>
            </figure>
            <figure class="./assets/scandinavian-bedroom">
              <a href="#">
                <img
                  src= {ScandanavianBedroom}
                  alt="Scandinavian Bedroom"
                />
                <figcaption>My scandinavian bedroom</figcaption>
              </a>
            </figure>
            <figure class="theDeckOfMyDreams">
              <a href="#">
                <img
                  src= {DeckOfDreams}
                  alt="The Deck Of My Dreams"
                />
                <figcaption>The deck of my dreams</figcaption>
              </a>
            </figure>
            <figure class="serve-mydrinks">
              <a href="#">
                <img src={ServeMyDrinks} alt="Serve My Drinks" />
                <figcaption>Serve my drinks in style</figcaption>
              </a>
            </figure>
          </div>
        </div>
        <div class="top-border"></div>
        <div class="bottom-border"></div>
      </section>
    )
}

export default index