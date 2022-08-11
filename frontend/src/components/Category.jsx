import React, { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectFilterCategoryId, setCategory } from '../redux/slices/filterSlice';

function Category() {
   const dispatch = useDispatch()
   const category = ["Всі", "М'ясні", "Вегетеріанські", "Гриль", "Гострі"];
   const categoryRef = useRef()

   const [visiblePopup, setVisiblePopup] = useState(false)

   let toggleVisiblePopup = () => {
      setVisiblePopup(!visiblePopup)
   }

   React.useEffect(() => {
      const catchClickOutside = event => {
         if (!event.path.includes(categoryRef.current)) {
            setVisiblePopup(false)
         }

      }
      document.body.addEventListener('click', catchClickOutside)

      return () => {    // виконується коли компонент демонтується
         document.body.removeEventListener('click', catchClickOutside)
      }
   }, [])

   const activeLabelId = useSelector(selectFilterCategoryId)

   const setActiveLabelId = (id) => {
      dispatch(setCategory(id))
      setVisiblePopup(false)
   }

   return (
      <div ref={categoryRef} className="category">
         <div className="category__small-screen">
            <span className="category__label">Показати:</span>
            <button
               className="category__item category__active category__first-button"
               onClick={toggleVisiblePopup}
            >{category[activeLabelId]}</button>

            <div className={`category__popup ${visiblePopup ? 'category__popup-active' : 'category__popup-inactive'}`}>
               {
                  category.map((name, index) => (
                     <button
                        className={`category__item ${index === activeLabelId ? 'category__active' : ''}`}
                        key={`${name}_${index}`}
                        onClick={() => { setActiveLabelId(index) }}
                     >{name}</button>
                  ))
               }
            </div>
         </div>
      </div >

   )
}

export default Category