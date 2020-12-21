import React from 'react'
import CurrencyFormat from 'react-currency-format';
import '../styles/Subtotal.css'

const Subtotal = () => {
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            {/* // part of homework */}
                            subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This Order Contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0} // part of homework
                displayType={"text"}
                thousandsSeparator={true}
                prefix={"$"}
                />

                <button>Proccessed to checkout</button>
            
        </div>
    )
}

export default Subtotal
