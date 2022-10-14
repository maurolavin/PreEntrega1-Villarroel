import './ItemListContainer.css';
import React from "react";
import ItemDetailContainer from './ItemDetailContainer';
import ItemContainer from './ItemContainer';

export default function ProductsList(greeting) {
    return(
        <>
        <h2>Nuestros productos</h2>
        <div className="ItemListContainer">
            <ItemContainer
            id="1"
            img= "https://www.sepfoot.com/uploads/Nike_SB_Shoes/NIke_Dunk_SB_Low/Nike_SB_Dunk_Low_Reverse_UNC_University_Blue_White_Royal_Blue_DJ9955-101.jpg"
            nombre="Nike Dunk Low UNC"
            precio="$220"           
            />
            <ItemContainer
            id="2"
            img= "https://www.liazura.com/images/productimages/big/ow-caravaggio-voor-.jpeg"
            nombre="Off-White Tee"
            precio="$300"            
            />
            <ItemContainer
            id="3"
            img= "https://images.stockx.com/images/Supreme-Chrome-Logo-Tee-Black-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1611196518"
            nombre="Supreme Tee"
            precio="$100"            
            />
            <ItemContainer
            id="4"
            img= "https://images.stockx.com/images/Takashi-Murakami-x-BEAMS-T-C-T-Shirt-2-White.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1616052876"
            nombre="Takashi Murakami Tee"
            precio="$150"            
            />
            <ItemContainer
            id="5"
            img= "https://images.stockx.com/images/New-Balance-M2002-Protection-Pack-Rain-Cloud-Product.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1638287519&q=75"
            nombre="New Balance 2002R"
            precio="$190"            
            />
            <ItemContainer
            id="6"
            img= "https://http2.mlstatic.com/D_NQ_NP_801945-MLA50043219163_052022-W.jpg"
            nombre="Puffer The North Face "
            precio="$280"            
            />
            <ItemContainer
            id="7"
            img= "http://cdn.yoox.biz/13/13476657ap_13_f.jpg"
            nombre="Stone Island Pants"
            precio="$250"            
            />
            <ItemContainer
            id="8"
            img= "https://cdn-images.farfetch-contents.com/16/64/88/87/16648887_36645860_2048.jpg"
            nombre="Palm Angels Tee"
            precio="$250"            
            />
            

        </div>
        </>
    )
}