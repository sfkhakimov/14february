import './App.css'
import loveImg from './assets/love.gif'
import yesImg from './assets/yesImg.gif'
import yes2 from './assets/yes2.gif'
import yes3 from './assets/yes3.gif'
import yes4 from './assets/yes4.gif'
import yes5 from './assets/yes5.gif'


import {useEffect, useRef, useState} from "react";

function App() {
    const ref = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(() => {
        const handleMouseOver = () => {
            if (!ref.current) return
            const maxX = window.innerWidth - ref.current.offsetWidth;
            const maxY = window.innerHeight - ref.current.offsetHeight;
            let randomX = Math.floor(Math.random() * maxX);
            let randomY = Math.floor(Math.random() * maxY);

            // Проверяем, чтобы кнопка не выходила за пределы экрана
            randomX = Math.max(0, Math.min(randomX, maxX));
            randomY = Math.max(0, Math.min(randomY, maxY));

            ref.current.style.position = 'absolute'
            ref.current.style.left = `${randomX}px`;
            ref.current.style.top = `${randomY}px`;
        };

        ref.current.addEventListener('mouseover', handleMouseOver);

        ref.current.addEventListener('touchstart', handleMouseOver);
        ref.current.addEventListener('touchmove', handleMouseOver);

        return () => {
            ref.current.removeEventListener('mouseover', handleMouseOver);
            ref.current.removeEventListener('touchstart', handleMouseOver);
            ref.current.removeEventListener('touchmove', handleMouseOver);
        };
  }, [ref.current]); // Зависимость пуста, чтобы обработчик события добавился только один раз


    const getImg = () => {
        switch (count) {
            case 0:
                return loveImg
            case 1:
                return yesImg
            case 2:
                return yes2
            case 3:
                return yes3
            case 4:
                return yes4
            case 5:
                return yes5
        }
    }

    const getTitle = () => {
        switch (count) {
            case 0:
                return 'Ты станешь моей валентинкой?'
            case 1:
                return 'Ура, Спасибо!'
            case 2:
                return 'Ура ура урааа!!!'
            case 3:
                return 'Круто круто круто!!!!!'
            case 4:
                return 'ДАААААААА!!! ехуууу!!!!'
            case 5:
                return <>&#129392; &#129392; &#129392; &#129392; &#129392; &#129392;</>
        }
    }


  return (
      <main className="main">
          <div>
               <h1 className="title">{getTitle()}</h1>
              <img style={{
                  maxWidth: 300,
                  maxHeight: 300
              }} src={getImg()} className="love"/>
              <div className="btn-container">
                  <button className="yes" onClick={() => setCount(prev => prev === 5 ? prev : prev + 1)}>Да!</button>
                  <button ref={ref} className="no">Нет :(</button>
              </div>
          </div>
      </main>

  )
}

export default App
