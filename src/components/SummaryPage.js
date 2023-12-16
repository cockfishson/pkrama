import React from 'react';
import './Menu.css'
const SummaryPage = ({ selectedComponents, totalPrice, onAssembleForYou, onShippingOptionChange,handleRemoveComponent,checked,itemsselected}) => {
  return (
    <div>
      <h2>Выбранные комплектующие</h2>
      
      <ul>
        {selectedComponents.map((component) => (
          <div className='summary-component'><li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4>{component.name} - {component.category}</h4>
            {component.sale > 0?(
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
            ):(
            <p>Цена: ${component.price}</p>
            )
            }
            <button className='button-5'onClick={() => handleRemoveComponent(component)}>Удалить</button>
          </li>
          </div>
        ))}
      </ul>
      <h3>Итоговая цена: ${totalPrice}</h3>
      <input type='radio' name="assembly" checked={checked} onChange={onAssembleForYou}/><label>Собрать за вас (+$75)</label>
    </div>
  );
};

export default SummaryPage;
