import React from 'react'
import Button from '../Button'

const PromoCard = (props) => {
  return (
    <>
        <a href="https://www.nike.com/t/sb-react-leo-skate-shoes-fWzQ6w/DX4361-100">
            <img src="https://www.nikesb.com/assets/imager/uploads/83541/9-8_Leo_Ad1_2023-09-11-205155_020d4294749750daa11b9b866154bc17.jpg" alt="promo-poster"></img>
            <div className="my-8 flex-column items-center justify-center">

                <h3 className="font-semibold text-center">Introducing {props.productName}</h3>
                <h2 className="text-promo-size flex flex-wrap justify-center font-fira-sans">BAKED TO<span className="pl-2.5">PERFECTION.</span></h2>
                <div className="flex justify-center mt-4">
                <Button btnTitle={"Shop"}/>
                </div>
            </div>

        </a>   
    </>
  )
}

export default PromoCard