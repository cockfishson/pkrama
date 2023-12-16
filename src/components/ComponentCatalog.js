import React,{useState} from 'react';
import './Menu.css';
import { motion } from 'framer-motion';
const ComponentCatalog = ({ onComponentSelect,itemsselected,handleSubmitPc,handleSale}) => {
  const pageVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -50 }
  };
  const cpus = [
    {name : 'Intel Core i5 14600K', image:'13600K', price:330,category:'cpu', cores:14,friquency:"5.3/2.5GHz",socket:"LGA1700",sale:0,PriceOnSale:0},
    {name : 'Intel Core i7 14700KF', image:'13700KF', price:390,category:'cpu', cores:20,friquency:"5.6/2.5GHz",socket:"LGA1700",sale:0,PriceOnSale:0},
    {name : 'Intel Core i9 14900KF', image:'13900KF', price:550,category:'cpu', cores:24,friquency:"5.6/2.5GHz",socket:"LGA1700",sale:0,PriceOnSale:0},
    {name : 'AMD Ryzen 5 7600', image:'7600',price:230,category:'cpu', cores:8,friquency:"3.8GHz",socket:"AM5",sale:5,PriceOnSale:0},
    {name : 'AMD Ryzen 7 7700X', image:'7700X',price:350,category:'cpu', cores:8,friquency:"4.5GHz",socket:"AM5",sale:10,PriceOnSale:0},
    {name : 'AMD Ryzen 7 7800X3D', image:'7950X',price:500,category:'cpu', cores:8,friquency:"4.2GHz",socket:"AM5",sale:15,PriceOnSale:0},
    {name : 'AMD Ryzen 9 7950X', image:'7950X',price:700,category:'cpu', cores:16,friquency:"4.2GHz",socket:"AM5",sale:15,PriceOnSale:0},
  ];
  const gpus = [
    {name : 'ZOTAC RTX 4060',image:'RTX4060ZOTAC', price:320,category:'gpu', VRAM:"8gb",friquency:"2.2GHz",bit:"128",sale:0,PriceOnSale:0},
    {name : 'ASUS TUF RTX 4070',image:'RTX4700TUF', price:650,category:'gpu', VRAM:"12gb",friquency:"1.9GHz",bit:"192",sale:0,PriceOnSale:0},
    {name : 'Palit RTX 4080',image:'RTX4080PALIT', price:1000,category:'gpu', VRAM:"16gb",friquency:"2.2GHz",bit:"256",sale:0,PriceOnSale:0},
    {name : 'ASUS ROG RTX 4090',image:'RTX4090ROG', price:2700,category:'gpu', VRAM:"24gb",friquency:"2.2GHz",bit:"384",sale:0,PriceOnSale:0},
    {name : 'ASRock RX7600', image:'ASROCK7600',price:290,category:'gpu', VRAM:"8gb",friquency:"2.2GHz",bit:"128",sale:0,PriceOnSale:0},
    {name : 'SAPPHIRE PURE RX7800XT', image:'SAPPHIRE7800XT',price:530,category:'gpu', VRAM:"16gb",friquency:"2.2GHz",bit:"256",sale:0,PriceOnSale:0},
    {name : 'ASRock RX7900XT', image:'ASROCK7900XT',price:900,category:'gpu', VRAM:"20gb",friquency:"1.5GHz",bit:"320",sale:0,PriceOnSale:0},
    {name : 'Встроенная графика', image:'nothing',price:0,category:'gpu', VRAM:"",friquency:"",bit:"",sale:0,PriceOnSale:0},
  ];
  const motherboards = [
    {name : 'Gigabyte B650 AORUS ELITE AX', image:'AORUSB650',price:220, category:'motherboard', chipset:"B650",formfactor:"ATX",socket:"AM5",ramslots:4,sale:0,PriceOnSale:0},
    {name : 'Gigabyte Z790 AORUS ELITE AX',image:'AORUSZ790', price:250, category:'motherboard', chipset:"Z790",formfactor:"ATX",socket:"LGA1700",ramslots:4,sale:0,PriceOnSale:0},
  ];
  const rams = [
    {name : 'AXCorsair Vengeance LPX',image:'CORSAIRVENGEANCELPX', price:50, category:'ram', friquency:"3200Mhz",generation:"DDR4",capacity:"8GB x 2",sale:0,PriceOnSale:0},
    {name : 'AXCorsair Vengeance LPX',image:'CORSAIRVENGEANCELPX', price:90, category:'ram', friquency:"3200Mhz",generation:"DDR4",capacity:"16GB x 2",sale:0,PriceOnSale:0},
    {name : 'G.Skill Trident Z5 RGB', image:'GSKILLTRIDENTZ5RGB',price:60, category:'ram', friquency:"6000Mhz",generation:"DDR5",capacity:"8GB x 2",sale:0,PriceOnSale:0},
    {name : 'G.Skill Trident Z5 RGB', image:'GSKILLTRIDENTZ5RGB',price:110, category:'ram', friquency:"6000Mhz",generation:"DDR5",capacity:"16GB x 2",sale:0,PriceOnSale:0},
    {name : 'G.Skill Trident Z5 RGB', image:'GSKILLTRIDENTZ5RGB',price:200, category:'ram', friquency:"6000Mhz",generation:"DDR5",capacity:"16GB x 4",sale:0,PriceOnSale:0},
  ];
  const storage_ssd = [
    {name:'Samsung 990 Pro',price:40,image:'SAMSUNG990PRO',category:'ssd',readspead:'7450Mb/s',writespead:'6900Mb/s',capacity:'128GB',sale:0,PriceOnSale:0},
    {name:'Samsung 990 Pro',price:60,image:'SAMSUNG990PRO',category:'ssd',readspead:'7450Mb/s',writespead:'6900Mb/s',capacity:'256GB',sale:0,PriceOnSale:0},
    {name:'Samsung 990 Pro',price:100,image:'SAMSUNG990PRO',category:'ssd',readspead:'7450Mb/s',writespead:'6900Mb/s',capacity:'512GB',sale:0,PriceOnSale:0},
    {name:'Samsung 990 Pro',price:150,image:'SAMSUNG990PRO',category:'ssd',readspead:'7450Mb/s',writespead:'6900Mb/s',capacity:'1TB',sale:0,PriceOnSale:0},
    {name:'Samsung 990 Pro',price:220,image:'SAMSUNG990PRO',category:'ssd',readspead:'7450Mb/s',writespead:'6900Mb/s',capacity:'2TB',sale:0,PriceOnSale:0},
    {name:'Не хочу брать SSD',price:0,image:'nothing',category:'ssd',readspead:'',writespead:'',capacity:''},
  ];
  const storage_hdd = [
    {name:'Seagate Barracuda',price:100,image:'SEAGATEBARRACUDA',category:'hdd',spins:'7200p/Min',capacity:'4TB',sale:0,PriceOnSale:0},
    {name:'Seagate Barracuda',price:60,image:'SEAGATEBARRACUDA',category:'hdd',spins:'7200p/Min',capacity:'2TB',sale:0,PriceOnSale:0},
    {name:'WD Caviar Blue',price:60,image:'WDCAVIARBLUE',category:'hdd',spins:'7200p/Min',capacity:'1TB',sale:0,PriceOnSale:0},
    {name:'Не хочу брать HDD',price:0,image:'nothing',category:'hdd',spins:'',capacity:'',sale:0,PriceOnSale:0},
  ];
  const coolersystems = [
    {name:'Sapphire Nitro+ S240',price:190,image:'SAPPHIRENITROS240',category:'cooler',type:'Водное',noize:'36.2Db',sockets:'LGA1700,AM4,LGA1200,LGA1151,LGA1151v2,LGA1151',TDP:340,sale:0,PriceOnSale:0},
    {name:'DeepCool Ak400',price:45,image:'DEEPCOOLAK400',category:'cooler',type:'Воздушное',noize:'28Db',sockets:'LGA1700,AM5,AM4,LGA1200,LGA1151,LGA1151v2,LGA1151',TDP:220,sale:5,PriceOnSale:0},
    {name:'SAMA Air Cooler 4',price:50,image:'SAMA4',category:'cooler',type:'Воздушное',noize:'35Db',sockets:'LGA1700,AM5,AM4,LGA1200,LGA1151,LGA1151v2,LGA1151',TDP:220,sale:50,PriceOnSale:0},
    {name:'DeepCool ASSASSIN IV Premium',price:100,image:'ASSASINIV',category:'cooler',type:'Воздушное',noize:'40Db',sockets:'LGA1700,AM5,AM4,LGA1200,LGA1151,LGA1151v2,LGA1151',TDP:280,sale:0,PriceOnSale:0},
  ];
  const psus = [
    {name:'DeepCool PK700D', price:70,image:'DEEPCOOLPK700D',category:'PSU',sertification:'Бронзовый(КПД 80%+)',formfactor:'ATX', power:'700w',sale:0,PriceOnSale:0},
    {name:'CORSAIR(2021) RM850x', price:150,image:'CORSAIRRM850x',category:'PSU',sertification:'Золотой(КПД 80%+)',formfactor:'ATX', power:'850w',sale:0,PriceOnSale:0},
    {name:'be quiet! Straight Power 12', price:280,image:'BEQUITE1200',category:'PSU',sertification:'Платиновый(КПД 80%+)',formfactor:'ATX', power:'1200w',sale:15,PriceOnSale:0},
    {name:'CORSAIR CX-M CX650M', price:80,image:'CORSAIRCX650M',category:'PSU',sertification:'Бронзовый(КПД 80%+)',formfactor:'ATX', power:'650w',sale:0,PriceOnSale:0},
  ];
  const cases = [
    {name:'Montech AIR 1000',price:75,image:'MONTECHAIR100',category:'case',type:'Mid tower',formfactors:'ATX,Micro ATX,MiniATX',sale:0,PriceOnSale:0},
    {name:'SAMA 205A Tempered Glass',price:200,image:'SAMA205ATG',category:'case',type:'Mid tower',formfactors:'ATX,Micro ATX,MiniATX',sale:75,PriceOnSale:0},
    {name:'DIYPC Rainbow-Flash-F4-B',price:65,image:'DIYPCF4',category:'case',type:'Mid tower',formfactors:'ATX,Micro ATX,MiniATX',sale:0,PriceOnSale:0},
    {name:'Fractal Design Focus 2',price:80,image:'DESIGNFOCUS2',category:'case',type:'Mid tower',formfactors:'ATX,Micro ATX,MiniATX',sale:0,PriceOnSale:0},
  ]

  return (
    <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
   >
    <div>
      {itemsselected === 0 ?(
      <div>
        <h3>Каталог процессоров</h3>
      <ul>
        {cpus.map((component) => (
          <div className='item-catalog'>
          <li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4 className='component-name'>{component.name}</h4>
            {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
            <p>Ядра: {component.cores}</p>
            <p>Тактовая частота: {component.friquency}</p>
            <p>Сокет: {component.socket}</p>
            <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
          </li></div>
        ))}
      </ul>
      </div>
      ) : itemsselected === 1 ?(
        <div>
      <h3>Каталог видеокарт</h3>
      <ul>
        {gpus.map((component) => (
          <div className='item-catalog'>
          <li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4 className='component-name'>{component.name}</h4>
            {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
            <p>Объём видеопамяти: {component.VRAM}</p>
            <p>Бит шина: {component.bit}</p>
            <p>Начальная частота: {component.friquency}</p>
            <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
          </li></div>
        ))}
      </ul>
      </div>
      ): itemsselected === 2 ?(
        <div>
      <h3>Каталог материнских плат</h3>
      <ul>
        {motherboards.map((component) => (
          <div className='item-catalog'>
          <li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4 className='component-name'>{component.name}</h4>
            {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
            <p>Чипсет: {component.chipset}</p>
            <p>Сокет: {component.socket}</p>
            <p>Разъемы для ОП: {component.ramslots}</p>
            <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
          </li></div>
        ))}
      </ul>
      </div>
      ): itemsselected === 3 ?(
        <div>
      <h3>Каталог оперативной памяти</h3>
      <ul>
        {rams.map((component) => (
          <div className='item-catalog'>
          <li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4 className='component-name'>{component.name}</h4>
            {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
            <p>Частота: {component.friquency}</p>
            <p>Поколение: {component.generation}</p>
            <p>Объем: {component.capacity}</p>
            <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
          </li>
          </div>
        ))}
      </ul>
      </div>
      ): itemsselected === 4 ?(
      <div>
      <h3>Каталог ССД</h3>
      <ul>
        {storage_ssd.map((component) => (
          <div className='item-catalog'>
          <li key={component.name}>
            <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
            <h4 className='component-name'>{component.name}</h4>
            {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
            <p>Скорость чтения: {component.readspead}</p>
            <p>Скорость записи: {component.writespead}</p>
            <p>Объем: {component.capacity}</p>
            <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
          </li></div>
        ))}
      </ul>
      </div>
      ): itemsselected === 5 ?(
        <div>
        <h3>Каталог жёстких дисков</h3>
        <ul>
          {storage_hdd.map((component) => (
            <div className='item-catalog'>
            <li key={component.name}>
              <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
              <h4 className='component-name'>{component.name}</h4>
              {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
              <p>Скорость вращения шпинделя: {component.spins}</p>
              <p>Объем: {component.capacity}</p>
              <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
            </li></div>
          ))}
        </ul>
        </div>
        ): itemsselected === 6 ?(
          <div>
          <h3>Каталог кулеров</h3>
          <ul>
            {coolersystems.map((component) => (
              <div className='item-catalog'>
              <li key={component.name}>
                <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
                <h4 className='component-name'>{component.name}</h4>
                {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
                <p>Тип охлаждения: {component.type}</p>
                <p>Предельный уровень шума: {component.noize}</p>
                <p>Максимальное рассеивание телоты(Вт): {component.tdp}</p>
                <p style={{fontSize:'10px'}}>Подходящие сокеты: {component.sockets}</p>
                <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
              </li></div>
            ))}
          </ul>
          </div>
          ): itemsselected === 7 ?(
            <div>
            <h3>Каталог блоков питания</h3>
            <ul>
              {psus.map((component) => (
                <div className='item-catalog'>
                <li key={component.name}>
                  <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
                  <h4 className='component-name'>{component.name}</h4>
                  {component.sale > 0?(
              <div>
              {handleSale(component)}
              <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
              </div>
            ):(
            <p>Цена: ${component.price}</p>
            )}
                  <p>Мощность БП: {component.power}</p>
                  <p>Сертификация: {component.sertification}</p>
                  <p>Формфактор: {component.formfactor}</p>
                  <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
                </li></div>
              ))}
            </ul>
            </div>
            ): itemsselected === 8 ?(
              <div>
              <h3>Каталог корпусов</h3>
              <ul>
                {cases.map((component) => (
                  <div className='item-catalog'>
                  <li key={component.name}>
                    <img className='imglist' src={require(`./media/${component.image}.png`)} alt={component.name} />
                    <h4 className='component-name'>{component.name}</h4>
                    {component.sale > 0?(
                      <div>
                      {handleSale(component)}
                      <p><strike>{component.price}</strike> - {component.PriceOnSale} Скидка {component.sale}%</p>
                      </div>
                    ):(
                    <p>Цена: ${component.price}</p>
                    )}
                    <p>Тип корпуса: {component.type}</p>
                    <p>Формфактор: {component.formfactors}</p>
                    <button className='button-5' onClick={() => onComponentSelect(component)}>Выбрать</button>
                  </li></div>
                ))}
              </ul>
              </div>
              ):(
        <div>
        <p>Вы выбрали все компоненты</p>
        </div>
      )
    }
    </div>
    </motion.div>
  );
};

export default ComponentCatalog;
