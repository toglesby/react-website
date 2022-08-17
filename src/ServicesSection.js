//USING REGULAR HTML/CSS
export default function ServicesSection() {
    return (
        <div className="services-section">
            <h2>Our Services</h2>

            <div className="services-container">
                <div className="service-block">
                    <img src="https://assets.codepen.io/6060109/agency-service-1.png" />
                    <p>Web Design</p>
                </div>
                <div className="service-block">
                    <img src="https://assets.codepen.io/6060109/agency-service-2.png" />
                    <p>ECommerce</p>
                </div>
                <div className="service-block">
                    <img src="https://assets.codepen.io/6060109/agency-service-3.png" />
                    <p>Automation</p>
                </div>
            </div>
        </div>
    )
}


// // USING MAP METHOD AND JAVASCRIPT
// const SERVICE_BLOCK_DATA = [
//     {
//         imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
//         text:'Web Design'
//     },
//     {
//         imgURL:'https://assets.codepen.io/6060109/agency-service-2.png',
//         text:'ECommerce'
//     },
//     {
//         imgURL:'https://assets.codepen.io/6060109/agency-service-3.png',
//         text:'Automation'
//     }
// ]

// export default function ServicesSection() {
//     return (
//         <div className="services-section">
//             <h2>Our Services</h2>

//             <div className="services-container">
//                 {
//                     SERVICE_BLOCK_DATA.map(block => (
//                         <div className="service-block">
//                             <img src={block.imgURL} />
//                             <p>{block.text}</p>
//                         </div>
//                         )
//                     )
//                 }
//             </div>
//         </div>
