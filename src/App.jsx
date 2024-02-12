import './App.css'
import loveImg from './assets/love.gif'
import yesImg from './assets/yesImg.gif'
import noImg from './assets/no.gif'
import {useEffect, useRef, useState} from "react";

function App() {
    const ref = useRef(null)
    const [state, setState] = useState(null)

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
        if (state === null) {
            return loveImg
        }

        return state ? yesImg : noImg
    }

    const getTitle = () => {
        if (state === null) {
            return 'Ты станешь моей валентинкой?'
        }

        return state ? 'Ура, Спасибо!' : 'Такой ответ не принимается!'
    }


  return (
      <main className="main">
          <div>
               <h1 className="title">{getTitle()}</h1>
              <img src={getImg()} className="love"/>
              <div className="btn-container">
                  <button className="yes" onClick={() => setState(true)}>Да!</button>
                  <button ref={ref} className="no" onClick={() => setState(false)}>Нет :(</button>
              </div>
          </div>
      </main>

  )
}

export default App
